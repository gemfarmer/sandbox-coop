'use strict';

var mongoose = require('mongoose'),
    Thing = mongoose.model('Thing'),
    Contributor = mongoose.model('Contributor'),
    User = mongoose.model('User'),
    passport = require('passport');

/**
 * Get awesome things
 */
exports.awesomeThings = function(req, res) {
  return Thing.find(function (err, things) {
    if (!err) {
      return res.json(things);
    } else {
      return res.send(err);
    }
  });
};

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
    return User.find(function (err, user) {
      console.log("user", user)
      if (!err) {
        return res.json(user);
      } else {
        return res.send(err);
      }
    });
  },
  somethingElse: function () {
    return;
  }
}
