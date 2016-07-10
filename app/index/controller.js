import Ember from 'ember';

export default Ember.Controller.extend({

  /**
   * Flag to decide if we should show the destination stations
   * @type {Boolean}
   */
  shouldShowEndStations: false,


  endStations: [],


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
