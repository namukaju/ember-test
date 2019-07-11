export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.4.x/shorthands/
  */
  this.namespace = '/api';
  this.get('/employees', function(){
    return{
      employee:[{
        id:100,
        firstName:'Kajal',
        lastName: 'Katty',
        city: 'Karjat',
        org: 'CG'
      },{
        id:101,
        firstName:'Namrata',
        lastName: 'Nachan',
        city: 'Ambernath',
        org: 'CG'
      },{
        id:102,
        firstName:'Darsh',
        lastName: 'Nachan',
        city: 'Ambernath',
        org: 'Xoriant'
      },{
        id:103,
        firstName:'Pratham',
        lastName: 'Nachan',
        city: 'Ambernath',
        org: 'Xoriant'
      },{
        id:105,
        firstName:'Prachi',
        lastName: 'Phalak',
        city: 'Thane',
        org: 'Rev'
      }]
    };
  });

this.get('/organizations', function(){
  return{
    organization:[{
      id:1,
      orgName: 'CG',
      empSize: 10000,
      city:'Airoli'
    },{
      id:2,
      orgName: 'Xoriant',
      empSize: 1000,
      city:'Mumbai'
    },{
      id:3,
      orgName: 'TCS',
      empSize: 10000,
      city:'Thane'
    },{
      id:4,
      orgName: 'LNT',
      empSize: 10000,
      city:'Airoli'
    }]
  };
});

this.get('/employees/:id', function (db, request) {
  return { data: employees.find((emp) => request.params.id === emp.id) };
});
}
