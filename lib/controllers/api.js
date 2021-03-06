'use strict';

var mongoose = require('mongoose'),
    Contributor = mongoose.model('Contributor'),
    User = mongoose.model('User'),
    passport = require('passport'),
    _ = require('lodash'),
    moment = require('moment');


/**
 * Get Contributor Data
 */
exports.contributorData = function(req, res) {
  return Contributor.find(function (err, contributor) {
    if (!err) {
      return res.json(contributor);
    } else {
      return res.send(err);
    }
  });
};


/**
 * Get Contributor Data
 */
exports.admin = {

  showAllUsers : function(req, res) {
    if (req.user.role === 'admin') {

      return User.find({}, 'name email role _id timeCreated',function (err, users) { // select name, email, role, _id fields, timeCreated

        console.log("Finally, users: ",users)

        if (!err) {
          return res.json(users);
        } else {
          return res.send(err);
        }
      });
    }
    else {
      return res.send({error: "not admin"});
    }
  }
}
