import Ember from 'ember';
import moment from 'moment';

const MOMENT_TIME_FORMAT = 'HH:mm a';

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

  startStationPicked: '',

  availableTrains: [],

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
        const doesStationHaveRoute = stationAbbrs.indexOf(stationAbbr) !== -1;

        if (doesStationHaveRoute) {
          startStationRoutes.push(route);
        }
      }

      return startStationRoutes;
  },

  /**
   * Helper to get all unique stops that a start station can travel
   *
   * @private
   * @param  {Array} routes           Array of bart API routes
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
   * @param  {Object} stationData
   * @return {Array<Object>}
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
      trainSchedules[routeId] = startStationSchedule[routeId];
    }

    // format the train data
    let availableTrains = [];
    for (let routeId in trainSchedules) {
      const trains = trainSchedules[routeId];
      for (let i = 0; i < trains.length; i++) {
        const train = trains[i];
        const endTrainSchedule = endStationSchedule[routeId];
        const endTrainStop = endTrainSchedule[train.trainIdx - 1];

        // not all trains can go to the end destination
        if (endTrainStop) {
          const routes = this.get('model.routes');
          for (let routeIndex = 0; routeIndex < routes.length; routeIndex++) {
            if (routes[routeIndex].routeID === routeId) {}
          }

          // hack because end station times may result in a negative number if ending the next day at 12 am or greater
          // TODO: fix for trains after 12am
          let moment1 = endTrainStop.origTime === '12:00 AM' ? moment('11:59 PM', MOMENT_TIME_FORMAT) : moment(endTrainStop.origTime, MOMENT_TIME_FORMAT);
          let moment2 = moment(train.origTime, MOMENT_TIME_FORMAT);
          let estimatedTime = moment1.diff(moment2);

          const formattedTrain = {
            title: routeNames[routeId],
            departureTime: train.origTime,
            estimatedTime: moment.duration(estimatedTime).asMinutes() + ' min'
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

      // Get the start station schedule in parallel
      const stationSchedulesService = this.get('stationSchedulesService');
      stationSchedulesService.fetchSchedule(startStationAbbr);

      // figure out what end stations to show
      let startStationRoutes = this._getAllRoutes(startStationAbbr);
      let endStationData = this._getAllStops(startStationRoutes, startStationAbbr);
      let endStations = this._getStations(endStationData);

      this.set('startStationPicked', startStation);
      this.set('endStations', endStations);
      this.set('shouldShowEndStations', true);
    },

    onEndStationPicked: function (endStation) {
      Ember.Logger.log('endStationPicked');
      const stationSchedulesService = this.get('stationSchedulesService');
      const startStationAbbr = this.get('startStationPicked.abbr');

      Ember.RSVP.all([
        stationSchedulesService.fetchSchedule(startStationAbbr),
        stationSchedulesService.fetchSchedule(endStation.abbr)
      ])
      .then(function (results) {
        const startStationSchedule = results[0];
        const endStationSchedule = results[1];
        const availableTrains = this._getAvailableTrains(startStationSchedule, endStationSchedule, endStation);

        this.set('availableTrains', availableTrains);
        this.set('shouldShowTrainList', true);
      }.bind(this));
    }
  }
});
