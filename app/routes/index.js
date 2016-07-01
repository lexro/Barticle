import Ember from 'ember';
import ajax from 'ic-ajax';
import xmlToJson from 'barticle/utils/xmlToJson';

export default Ember.Route.extend({
  model: function () {
    return Ember.RSVP.hash({
      stations: ajax('https://api.bart.gov/api/stn.aspx?cmd=stns&key=MW9S-E7SL-26DU-VV8V')
        .then(function (response) {
          var json = xmlToJson(response);
          Ember.Logger.log(json);
          var stations = json.root.stations.station;
          return stations;
        })
      });
  }
});
