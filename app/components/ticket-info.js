import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    closeTicket(ticket) {
      this.sendAction('closeTicket', ticket);
    }
  }
});
