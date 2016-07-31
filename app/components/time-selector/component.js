import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['time-selector'],

  isNow: true,

  actions: {
    selectTime: function (selection) {
      if (selection === 'now') {
        this.set('isNow', true);
        this.sendAction('timeSelected', Date.now());
      } else if (selection === 'all') {
        this.set('isNow', false);
        this.sendAction('timeSelected');
      }
    }
  }
});
