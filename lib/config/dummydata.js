'use strict';

var mongoose = require('mongoose'),
  User = mongoose.model('User'),
  Contributor = mongoose.model('Contributor');


Contributor.find({}).remove(function() {
  Contributor.create({
    name : 'Brian',
    info : 'Dev',
    img: "http://motherrussia.polyester.se/jquery/panview/mr-t.jpg"
  },
  {
    name : 'Chris',
    info : 'Dev',
    img: "http://motherrussia.polyester.se/jquery/panview/mr-t.jpg"
  },
  {
    name : 'Wes',
    info : 'Dev',
    img: "http://motherrussia.polyester.se/jquery/panview/mr-t.jpg"
  },
  {
    name : 'Brian',
    info : 'Dev',
    img: "http://motherrussia.polyester.se/jquery/panview/mr-t.jpg"
  },
  {
    name : 'Brian',
    info : 'Dev',
    img: "http://motherrussia.polyester.se/jquery/panview/mr-t.jpg"
  },function() {
      console.log('finished populating contributors');
    }
  );
});

