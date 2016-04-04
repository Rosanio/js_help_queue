import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save() {
      var date = new Date();
      var params = {
        name: this.get('name'),
        date: date.getTime(),
        location: this.get('location'),
        description: this.get('description'),
      };
      this.sendAction('save', params);
    }
  }
});
