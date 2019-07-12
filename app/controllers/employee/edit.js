import Controller from '@ember/controller';

export default Controller.extend({
  actions : {
    updateEmployee(){
     //this.get('model').save();
     this.transitionToRoute('/employee');
    }
  }
});
