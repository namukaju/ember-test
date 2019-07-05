import DS from 'ember-data';

export default DS.Model.extend({
  orgName: DS.attr(),
  empSize: DS.attr(),
  city: DS.attr(),
});
