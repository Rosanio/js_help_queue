import Ember from 'ember';

export default Ember.Component.extend({
  timeElapsed: Ember.computed('ticket.date', function() {
    var currentDate = new Date();
    var elapsedTimeMillis = currentDate.getTime() - this.get('ticket.date');
    return Math.round(elapsedTimeMillis/60000)+1;
  })
});
