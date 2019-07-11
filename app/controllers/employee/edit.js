import Controller from '@ember/controller';

export default Controller.extend({
  actions : {
    updateEmployee(){
      let firstName, lastName,city,org;
      console.log("inside CONTROLLER updateEmployee:: ");
      let employee = this.get('employee');
      console.log("inside CONTROLLER updateEmployee:: ", this.get('firstName'));
      firstName = this.get('firstName'),
      lastName = this.get('lastName'),
      city = this.get('city'),
      org = this.get('org');
      this.saveEmploye(employee.id, firstName, city, org);
    }
  },

  saveEmploye(id,firstName,city,org){
    if(firstName && city && org) {
      console.log("inside CONTROLLER saveEmploye:: ");
      this.store.findRecord('employee', id).then(function(emp) {
        // ...after the record has loaded
        emp.set('firstName', firstName);
        emp.set('city', city);
        emp.set('org', org);
      });
      emp.save();
      this.transitionToRoute('/employee');
    }
  }
});
