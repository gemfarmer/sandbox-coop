'use strict';

var mongoose = require('mongoose'),
    Thing = mongoose.model('Thing'),
    Contributor = mongoose.model('Contributor');

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
    	console.log("contributor data: ",contributor)
      return res.json(contributor);
    } else {
      return res.send(err);
    }
  });
};