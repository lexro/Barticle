import Ember from 'ember';
import moment from 'moment';

const MOMENT_TIME_FORMAT = 'HH:mm a';
const MAX_TRAINS = 5;
const MINUTES_IN_A_DAY = 1440;

export default Ember.Controller.extend({

  /**
   * Flag to decide if we should show the destination stations
   * @type {Boolean}
   */
  shouldShowEndStations: false,

  /**
   * Flag to decide if we should show the train list
   * @type {Boolean}
   */
  shouldShowTrainList: false,

  endStations: [],

  stationSchedulesService: Ember.inject.service('station-schedules'),

  startStationPicked: {},

  endStationPicked: {},

  availableTrains: [],

  time: Date.now(),

  /**
   * Helper to get all routes that a station is a part of
   *
   * @private
   * @param  {String} stationAbbr abbreviation of the station to find the routes
   * @return {Array<Object>}             Array of route objects from the bart api
   */
  _getAllRoutes: function (stationAbbr) {
      const routes = this.get('model.routes');
      let startStationRoutes = [];

      for(let i = 0; i < routes.length; i++) {
        const route = routes[i];
        const stationAbbrs = route.config.station;
        const doesRouteHaveStation = stationAbbrs.indexOf(stationAbbr) !== -1;

        if (doesRouteHaveStation) {
          startStationRoutes.push(route);
        }
      }

      return startStationRoutes;
  },

  /**
   * Helper to get all unique stops that a start station can travel
   *
   * @private
   * @param  {Array} routes            Array of bart API routes that the start station is in
   * @param  {String} startStationAbbr Abbreviation of the start station
   * @return {Object}                  Mapping from station abbr to routes they exist in
   */
  _getAllStops: function (routes, startStationAbbr) {
      let endStationData = {};

      for (let i = 0; i < routes.length; i++) {
        const route = routes[i];
        const stationAbbrs = route.config.station;
        const startStationIndex = stationAbbrs.indexOf(startStationAbbr);

        for (let j = 0; j < stationAbbrs.length; j++) {
          const stationAbbr = stationAbbrs[j];
          const isNotStartStation = stationAbbr !== startStationAbbr;
          const isAfterStartStation = j > startStationIndex;

          if (isNotStartStation && isAfterStartStation) {
            if (endStationData[stationAbbr]) {
              endStationData[stationAbbr].routes.push(route);
            } else {
              endStationData[stationAbbr] = {
                routes: [route]
              };
            }
          }
        }
      }

      return endStationData;
  },

  /**
   * Helper to get bart API station data from a list of station abbr
   *
   * @private
   * @param  {Object} stationData - data of end stations that the start station may travel to
   * @return {Array<Object>} - detailed data of end stations
   */
  _getStations: function (stationData) {
      const endStationsAbbr = Object.keys(stationData);
      const stations = this.get('model.stations');
      let endStations = [];

      for (let i = 0; i < stations.length; i++) {
        const station = stations[i];
        const isEndStation = endStationsAbbr.indexOf(station.abbr) !== -1;

        if (isEndStation) {
          station.routes = stationData[station.abbr].routes;
          endStations.push(station);
        }
      }

      return endStations;
  },

  _getAvailableTrains: function (startStationSchedule, endStationSchedule, endStation) {
    // get all trains for each route that goes to the end station
    let trainSchedules = {};
    let routeNames = {};
    const routes = endStation.routes;
    for (let i = 0; i < routes.length; i++) {
      const routeId = routes[i].routeID;
      routeNames[routeId] = routes[i].name;

      // Bart API /routeinfo and /stnschd are inconsistent with what routes are available
      // for the start station
      if (startStationSchedule[routeId]) {
        trainSchedules[routeId] = startStationSchedule[routeId];
      }
    }

    // format the train data
    let availableTrains = [];
    const time = this.get('time');
    for (let routeId in trainSchedules) {
      const trains = trainSchedules[routeId];
      for (let i = 0; i < trains.length; i++) {
        const train = trains[i];
        let startTrainMoment = moment(train.origTime, MOMENT_TIME_FORMAT);

        // if user selected a time, exit after we get enough trains
        if (time && availableTrains.length > MAX_TRAINS) {
          break;
        } else if (time && moment(time).isAfter(startTrainMoment)) {
          // if user selected a time, only show trains after that time
          continue;
        }

        const endTrainSchedule = endStationSchedule[routeId] || [];
        const endTrainStop = endTrainSchedule[train.trainIdx - 1];

        // not all trains can go to the end destination
        if (endTrainStop) {
          const routes = this.get('model.routes');
          for (let routeIndex = 0; routeIndex < routes.length; routeIndex++) {
            if (routes[routeIndex].routeID === routeId) {}
          }

          // hack because end station times may result in a negative number if ending the next day at 12 am or greater
          let moment1 = moment(endTrainStop.origTime, MOMENT_TIME_FORMAT);
          let moment2 = moment(train.origTime, MOMENT_TIME_FORMAT);
          let estimatedTime = moment1.diff(moment2);
          estimatedTime = moment.duration(estimatedTime).asMinutes();
          if (estimatedTime < 0) {
            estimatedTime += MINUTES_IN_A_DAY;
          }

          const formattedTrain = {
            title: routeNames[routeId],
            departureTime: train.origTime,
            estimatedTime: estimatedTime + ' min'
          };

          availableTrains.push(formattedTrain);
        }
      }
    }

    availableTrains.sort(function (train1, train2) {
      let time1 = moment(train1.departureTime, MOMENT_TIME_FORMAT);
      let time2 = moment(train2.departureTime, MOMENT_TIME_FORMAT);

      return time1.diff(time2);
    });

    return availableTrains;
  },

  actions: {
    onStartStationPicked: function (startStation) {
      const startStationAbbr = startStation.abbr;
      const startStationPicked = this.get('startStationPicked');
      const isSameStation = startStationPicked === startStation;

      // we don't need to change the model if the user picked the same start stations
      if (!isSameStation) {
        this.set('shouldShowTrainList', false);

        Ember.Logger.debug('fetching data to calculate end stations');

        // Get the start station schedule in parallel
        const stationSchedulesService = this.get('stationSchedulesService');
        stationSchedulesService.fetchSchedule(startStationAbbr);

        // figure out what end stations to show
        let startStationRoutes = this._getAllRoutes(startStationAbbr);
        let endStationData = this._getAllStops(startStationRoutes, startStationAbbr);
        let endStations = this._getStations(endStationData);

        this.set('startStationPicked', startStation);
        this.set('endStations', endStations);
      } else {
        this.set('shouldShowTrainList', true);
      }

      this.set('shouldShowEndStations', true);
    },

    onEndStationPicked: function (endStation) {
      Ember.Logger.debug('endStationPicked');
      const stationSchedulesService = this.get('stationSchedulesService');
      const startStationAbbr = this.get('startStationPicked.abbr');
      const isSameStation = this.get('endStationPicked') === endStation;

      // we don't need to change the model if the user picked the same end stations
      if (!isSameStation) {
        this.set('shouldShowTrainList', false);

        Ember.Logger.debug('fetching data to calculate trains');

        Ember.RSVP.all([
          stationSchedulesService.fetchSchedule(startStationAbbr),
          stationSchedulesService.fetchSchedule(endStation.abbr)
        ])
        .then(function (results) {
          const startStationSchedule = results[0];
          const endStationSchedule = results[1];
          const availableTrains = this._getAvailableTrains(startStationSchedule, endStationSchedule, endStation);

          this.set('endStationPicked', endStation);
          this.set('availableTrains', availableTrains);
          this.set('shouldShowTrainList', true);
        }.bind(this));
      } else {
        this.set('shouldShowTrainList', true);
      }
    },

    onStartStationSelect: function () {
      this.set('shouldShowEndStations', false);
      this.set('shouldShowTrainList', false);
    },

    onEndStationSelect: function () {
      this.set('shouldShowTrainList', false);
    },

    // TODO: refactor this stuff - there is no need to go through the service again
    // but it should be ok because the service caches
    onTimeSelected: function (time) {
      this.set('time', time);

      const startStation = this.get('startStationPicked');
      const endStation = this.get('endStationPicked');

      if (Object.keys(startStation).length && Object.keys(endStation).length) {
        const stationSchedulesService = this.get('stationSchedulesService');

        Ember.RSVP.all([
          stationSchedulesService.fetchSchedule(startStation.abbr),
          stationSchedulesService.fetchSchedule(endStation.abbr)
        ])
        .then(function (results) {
          const startStationSchedule = results[0];
          const endStationSchedule = results[1];
          const availableTrains = this._getAvailableTrains(startStationSchedule, endStationSchedule, endStation);

          this.set('availableTrains', availableTrains);
        }.bind(this));
      }
    }
  }
});
