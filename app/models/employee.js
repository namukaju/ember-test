import DS from 'ember-data';

export default DS.Model.extend({
  firstName: DS.attr(),
  lastName: DS.attr(),
  city: DS.attr(),
  org: DS.attr()
});
