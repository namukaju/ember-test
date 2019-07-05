import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    let empModel = this.get('store').findAll('employee');
    return empModel;
  }
});
