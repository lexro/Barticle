import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['train-list'],

  availableTrains: [{
    title: 'route A',
    departureTime: '5:26am',
    estimatedTime: '28min'
  },
  {
    title: 'route B',
    departureTime: '5:27am',
    estimatedTime: '28min'
  },
  {
    title: 'route B',
    departureTime: '5:28am',
    estimatedTime: '28min'
  },
  {
    title: 'route B',
    departureTime: '5:29am',
    estimatedTime: '28min'
  },
  {
    title: 'route B',
    departureTime: '5:30am',
    estimatedTime: '28min'
  }]
});
