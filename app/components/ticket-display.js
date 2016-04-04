import Ember from 'ember';

export default Ember.Component.extend({
  ticketClosed: false,
  actions: {
    closeTicket(ticket) {
      this.set('ticketClosed', true);
      this.sendAction('closeTicket', ticket);
    }
  }
});
