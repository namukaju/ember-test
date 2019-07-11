import Controller from '@ember/controller';
import { isBlank } from '@ember/utils';

export default Controller.extend({
  actions : {
    addEmployee(){
      let firstName, lastName,city,org;
      console.log("inside CONTROLLER addEmployee:: ");
      firstName = this.get('firstName'),
      lastName = this.get('lastName'),
      city = this.get('city'),
      org = this.get('org');

      this.saveEmploye(firstName, lastName,city,org);
    }
  },

    saveEmploye(firstName, lastName,city,org){
      let emp;
      if(firstName && city && org) {
        emp = this.store.createRecord('employee',{
          firstName: firstName,
          city: city,
          org: org,
        });
        //this.set('empData', emp);
        emp.save();
        this.transitionToRoute('/employee');
      }
    }
});


