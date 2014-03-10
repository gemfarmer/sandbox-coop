'use strict';

var mongoose = require('mongoose'),
    User = mongoose.model('User'),
    passport = require('passport');

exports.add =  function (req, res, next) {
  var newAdmin = new Admin(req.body);
  console.log("req",req)
    console.log("res",res)

    console.log("next",next)


  // newAdmin.provider = 'local';
  newAdmin.addUser(function(err) {
    if (err) return res.json(400, err);

    // req.logIn(newAdmin, function(err) {
    //   if (err) return next(err);

    //   return res.json(req.admin.userInfo);
    // });
  });
};