'use strict';

var mongoose = require('mongoose'),
    Event = mongoose.model('Event'),
    passport = require('passport');

 /// Event APIs
  // app.post('/api/event', event.add); // Create
  // app.get('/api/event/:id', event.show); // Read
  // app.put('/api/event/:id', event.update); // Update
  // app.del('/api/event', session.delete); // Delete

/**
 * Add
 */
exports.add = function (req, res) {
  console.log('made it here')
  if (req.user.role === 'admin' || req.user.role === 'contributor') {

      console.log(req, res)
      var newEvent = new Event(req.body);
      newEvent.save(function (err) {
        if (err) // ...
         return res.send({error: "event not saved properly"});
      });

  }
  else {
    return res.send({error: "not admin or contributor"});
  }

};

/**
 * Show
 */
exports.show = function (req, res, next) {

};

/**
 * Update
 */
exports.update = function (req, res) {
};


/**
 * Delete
 */
exports.delete = function (req, res) {
};
