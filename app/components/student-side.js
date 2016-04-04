import Ember from 'ember';

export default Ember.Component.extend({
  firstQuestionShow: true,
  secondQuestionShow: false,
  thirdQuestionShow: false,
  formShow: false,

  actions: {
    nextQuestion() {
      this.set('firstQuestionShow', false);
      this.set('secondQuestionShow', true);
    },
    thirdQuestion() {
      this.set('secondQuestionShow', false);
      this.set('thirdQuestionShow', true);
    },
    form() {
      this.set('thirdQuestionShow', false);
      this.set('formShow', true);
    },
    save(params) {
      this.sendAction("save", params);
    }
  }
});
