import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['station-picker'],

  initFunc: Ember.on('init', function () {
    const placeholder = this.get('placeholder');

    this.set('inputText', placeholder);
  }),

  /**
   * Flag to tell us whether we should hide or show the contents of this component
   * @type {Boolean}
   */
  shouldShow: true,

  /**
   * Hide list of trains stops if we are not showing this component
   */
  hideList: Ember.observer('shouldShow', function () {
    if (!this.get('shouldShow')) {
      this.set('shouldShowStations', false);
    }
  }),

  /**
   * Reset component when stations change
   */
  doReset: Ember.observer('stations', function () {
    const placeholder = this.get('placeholder');

    this.set('inputText', placeholder);
    this.set('currentPickedStation', {});
    this.set('shouldShowStations', false);
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
