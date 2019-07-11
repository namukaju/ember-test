import Controller from '@ember/controller';

export default Controller.extend({
  actions : {
    renderAddEmployeeForm(){
      this.transitionToRoute('employee.add');
    }
  } 
});
