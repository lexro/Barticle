import Ember from 'ember';

export default Ember.Controller.extend({

  /**
   * Flag to decide if we should show the destination stations
   * @type {Boolean}
   */
  shouldShowEndStations: false,

  endStations: [],

  actions: {
    onStartStationPicked: function (startStation) {
      // call stnsched api in parallel http://api.bart.gov/api/sched.aspx?cmd=stnsched&orig=12th&key=MW9S-E7SL-26DU-VV8V&l=1

      // figure out what end stations to show
      const startStationAbbr = startStation.abbr;
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

    onEndStationPicked: function () {
      Ember.Logger.log('endStationPicked');
      // figure out what route to take
      // use station schedule to display times
    }
  }
});
