import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['station-picker'],

  initFunc: Ember.on('init', function () {
    var placeholder = this.get('placeholder');
    this.set('inputText', placeholder);
  }),

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

  actions: {
    pickStation: function (station) {
      Ember.Logger.log(station);

      this.set('inputText', station.name);
      this.set('shouldShowStations', false);
      this.sendAction('stationPicked', station);
    },

    toggleShowStations: function () {
      this.toggleProperty('shouldShowStations');
    }
  }
});
