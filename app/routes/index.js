import Ember from 'ember';

export default Ember.Route.extend({
  model(){

  },
  firstQuestionShow: true,
  secondQuestionShow: false,
  thirdQuestionShow: false,
  formShow: false,

  actions: {
    save(params) {
      var newTicket = this.store.createRecord('ticket', params);
        newTicket.save();
        this.transitionTo('ticket', newTicket.id);
    }
  }
});
