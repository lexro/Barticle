import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['station-picker'],

  initFunc: Ember.on('init', function () {
    const placeholder = this.get('placeholder');
    const currentStation = this.get('currentStation');

    if (currentStation && currentStation.name) {
      this.set('inputText', currentStation.name);
    } else {
      this.set('inputText', placeholder);
    }
  }),

  /**
   * Color embellishment to give the station picker
   * @type {String}
   */
  color: '',

  /**
   * Text for the main input
   * @type {String}
   */
  inputText: '',

  /**
   * What to show in the main input if nothing is there
   * @type {String}
   */
  placeholder: '',

  /**
   * Will show the list of stations if true
   * @type {Boolean}
   */
  shouldShowStations: false,

  /**
   * The stations to show in the list
   * @type {Array}
   */
  stations: [],

  currentPickedStation: {},

  actions: {
    pickStation: function (station) {
      var stationName = station.name;

      this.set('currentPickedStation', station);
      this.set('inputText', stationName);
      this.sendAction('stationPicked', station);
      this.set('shouldShowStations', false);
    },

    toggleShowStations: function () {
      this.toggleProperty('shouldShowStations');

      if (this.get('shouldShowStations')) {
        this.sendAction('selecting');
      } else if (this.get('inputText') !== this.get('placeholder')) {
        this.sendAction('stationPicked', this.get('currentPickedStation'));
      }
    }
  }
});
