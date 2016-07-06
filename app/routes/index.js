import Ember from 'ember';
import ajax from 'ic-ajax';
import xmlToJson from 'barticle/utils/xmlToJson';

export default Ember.Route.extend({
  model: function () {
    return Ember.RSVP.hash({
      stations: ajax('https://api.bart.gov/api/stn.aspx?cmd=stns&key=MW9S-E7SL-26DU-VV8V')
        .then(function (response) {
          var json = xmlToJson(response);
          var stations = json.root.stations.station;

          Ember.Logger.log(json);

          return stations;
        }),

      routes: ajax('http://api.bart.gov/api/route.aspx?cmd=routeinfo&route=all&key=MW9S-E7SL-26DU-VV8V')
        .then(function (response) {
          var json = xmlToJson(response);
          var routes = json.root.routes.route;

          Ember.Logger.log(json);

          return routes;
        })
      });
  }
});
