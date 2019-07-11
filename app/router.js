import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('home');
  this.route('employee', function() {
    this.route('add');
    this.route('edit', { path: 'edit/:emp_id' });
  });
  this.route('organization');
 
});

export default Router;
