import Route from '@ember/routing/route';

export default Route.extend({
  setupController(controller, model) {
    this._super(...arguments);
    controller.set('employee', model);
 },
  renderTemplate: function() {
    this.render('employee/edit', { into: 'application' })
  },
  model(params) {
    return this.get('store').findRecord('employee', params.emp_id);
  }
});
