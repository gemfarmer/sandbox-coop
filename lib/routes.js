'use strict';

var api = require('./controllers/api'),
    index = require('./controllers'),
    users = require('./controllers/users'),
    session = require('./controllers/session'),
    event = require('./controllers/event')



var middleware = require('./middleware');



var restrictNonAdmin = function (req, res, next) {
  console.log(req.user)
  if (req.user.role === 'admin') {
    next();
    return
  }
  res.send(401);
}

var restrictNonContributor = function (req, res, next) {
  if (req.user.role === 'contributor' || req.user.role === 'admin') {
    next();
  }
  res.send(401);
}

/**
 * Application routes
 */
module.exports = function(app) {

  // Server API Routes

  app.post('/api/users', users.create);
  app.put('/api/users', users.changePassword);
  app.get('/api/users/me', users.me);
  app.get('/api/users/:id', users.show);
  app.put('/api/users/:id', users.updateUser);

  app.get('/api/admin/showAllUsers', restrictNonAdmin, api.admin.showAllUsers);

  app.post('/api/session', session.login);
  app.del('/api/session', session.logout);


  /// Event APIs
  app.post('/api/event', event.add); // Create
  app.get('/api/event/:id', event.show); // Read
  app.get('/api/event', event.showAll); // Read All
  app.put('/api/event/:id', event.update); // Update
  app.del('/api/event', event.delete); // Delete

  // All undefined api routes should return a 404
  app.get('/api/*', function(req, res) {
    res.send(404);
  });

  // All other routes to use Angular routing in app/scripts/app.js
  app.get('/partials/*', index.partials);
  app.get('/*', middleware.setUserCookie, index.index);
};