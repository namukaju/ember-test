import Controller from '@ember/controller';

export default Controller.extend({
  actions : {
    addEmployee(){
      let firstName,city,org;
      firstName = this.get('firstName'),
      city = this.get('city'),
      org = this.get('org');
      this.saveEmploye(firstName,city,org);
    }
  },

    saveEmploye(firstName,city,org){
      let emp;
      if(firstName && city && org) {
        emp = this.store.createRecord('employee',{
          firstName: firstName,
          city: city,
          org: org,
        });
        emp.save();
        this.transitionToRoute('/employee');
      }
    }
});


