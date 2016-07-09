import Ember from 'ember';
import ajax from 'ic-ajax';
import xmlToJson from 'barticle/utils/xmlToJson';

export default Ember.Controller.extend({

  /**
   * Flag to decide if we should show the destination stations
   * @type {Boolean}
   */
  shouldShowEndStations: false,

  endStations: [],

  actions: {
    onStartStationPicked: function (startStation) {
      const startStationAbbr = startStation.abbr;

      // call stnsched api in parallel
      let stationSchedulePromise = ajax(`http://api.bart.gov/api/sched.aspx?cmd=stnsched&orig=${startStationAbbr}&key=MW9S-E7SL-26DU-VV8V&l=1`)
        .then(function (response) {
          // model the station schedule per route
          var json = xmlToJson(response);
          var trains = json.root.station.item;
          var stationTrainSchedule = {};

          for(let i = 0; i < trains.length; i++) {
            let train = trains[i]['@attributes'];
            let line = train.line;

            if (!stationTrainSchedule[line]) {
              stationTrainSchedule[line] = [train];
            } else {
              stationTrainSchedule[line].push(train);
            }
          }

          return stationTrainSchedule;
        });

      this.set('stationSchedulePromise', stationSchedulePromise);

      // figure out what end stations to show
      const routes = this.get('model.routes');
      const stations = this.get('model.stations');

      // find all routes for this station
      let startStationRoutes = [];
      for(let i = 0; i < routes.length; i++) {
        const route = routes[i];
        const stationAbbrs = route.config.station;
        const doesStationHaveRoute = stationAbbrs.indexOf(startStationAbbr) !== -1;

        if (doesStationHaveRoute) {
          startStationRoutes.push(route);
        }
      }

      // get all trains leaving from this station
      let endStationsAbbr = [];
      for (let i = 0; i < startStationRoutes.length; i++) {
        const route = startStationRoutes[i];
        const stationAbbrs = route.config.station;

        for (let j = 0; j < stationAbbrs.length; j++) {
          const stationAbbr = stationAbbrs[j];
          const isInArray = stationAbbr !== startStationAbbr && endStationsAbbr.indexOf(stationAbbr) === -1;

          if (isInArray) {
            endStationsAbbr.push(stationAbbr);
          }
        }
      }

      // get the station data
      let endStations = [];
      for (let i = 0; i < stations.length; i++) {
        const station = stations[i];
        const isEndStation = endStationsAbbr.indexOf(station.abbr) !== -1;

        if (isEndStation) {
          endStations.push(station);
        }
      }

      this.set('endStations', endStations);
      this.set('shouldShowEndStations', true);
    },

    onEndStationPicked: function (endStation) {
      Ember.Logger.log('endStationPicked');
      // figure out what route to take
      // http://api.bart.gov/api/sched.aspx?cmd=routesched&route=6&key=MW9S-E7SL-26DU-VV8V

    }
  }
});
