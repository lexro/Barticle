import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return {
      stations: [{
        name: "station 1"
      },
      {
        name: "station 2"
      },
      {
        name: "station 3"
      },
      {
        name: "station 4"
      }]
    };
  }
});
