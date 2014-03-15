'use strict';

var mongoose = require('mongoose'),
    User = mongoose.model('User'),
    Contributor = mongoose.model('Contributor'),
    passport = require('passport');

exports.add =  function (req, res, next) {
  var newContributor = new Contributor(req.body);
  console.log("req",req)
    console.log("res",res)

    console.log("next",next)


  // newContributor.provider = 'local';
  newContributor.addUser(function(err) {
    if (err) return res.json(400, err);

    // req.logIn(newContributor, function(err) {
    //   if (err) return next(err);

    //   return res.json(req.Contributor.userInfo);
    // });
  });
};