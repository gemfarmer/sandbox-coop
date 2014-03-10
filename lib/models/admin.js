'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    crypto = require('crypto');


/**
 * User Schema
 */
var AdminSchema = new Schema(
	{
		user: String,
      	pwd: String,
        roles: [ String ]
    }
);

module.exports = mongoose.model('Admin', AdminSchema);
