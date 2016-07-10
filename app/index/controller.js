import Ember from 'ember';

export default Ember.Controller.extend({

  /**
   * Flag to decide if we should show the destination stations
   * @type {Boolean}
   */
  shouldShowEndStations: false,


  endStations: [],


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

  _getAllStops: function (routes, startStationAbbr) {
      // get all train stops available from this station using route data
      let endStationsAbbr = [];

      for (let i = 0; i < routes.length; i++) {
        const route = routes[i];
        const stationAbbrs = route.config.station;

        for (let j = 0; j < stationAbbrs.length; j++) {
          const stationAbbr = stationAbbrs[j];
          const isInArray = stationAbbr !== startStationAbbr && endStationsAbbr.indexOf(stationAbbr) === -1;

          if (isInArray) {
            endStationsAbbr.push(stationAbbr);
          }
        }
      }

      return endStationsAbbr;
  },

  actions: {
    onStartStationPicked: function (startStation) {
      const startStationAbbr = startStation.abbr;

      // Get the start station schedule in parallel
      const stationSchedulesService = this.get('stationSchedulesService');
      stationSchedulesService.fetchSchedule(startStationAbbr);

      // figure out what end stations to show
      const stations = this.get('model.stations');

      // find all routes for this station
      let startStationRoutes = this._getAllRoutes(startStationAbbr);
      let endStationsAbbr = this._getAllStops(startStationRoutes, startStationAbbr);

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
