import Ember from 'ember';
import ajax from 'ic-ajax';
import xmlToJson from 'barticle/utils/xmlToJson';

export default Ember.Service.extend({
  stationSchedules: {},

  fetchSchedule: function (stationAbbr) {
    var stationSchedules = this.get('stationSchedules');

    if (stationSchedules[stationAbbr]) {
      return Ember.RSVP.resolve(stationSchedules[stationAbbr]);
    }

    return ajax(`https://api.bart.gov/api/sched.aspx?cmd=stnsched&orig=${stationAbbr}&key=MW9S-E7SL-26DU-VV8V&l=1`)
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

        stationSchedules[stationAbbr] = stationTrainSchedule;

        return stationTrainSchedule;
      });
  }
});
