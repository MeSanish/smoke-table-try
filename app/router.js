import Ember from 'ember'
import config from './config/environment'

const Router = Ember.Router.extend({
  location: 'hash',
  rootURL: ENV.rootURL
})

Router.map(function () {
  this.route('leads')
  this.mount('super-blog', { path: '/engine' })
})

export default Router
