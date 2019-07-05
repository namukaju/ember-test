import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    let orgModel = this.get('store').findAll('organization');
    return orgModel;
  }
});
