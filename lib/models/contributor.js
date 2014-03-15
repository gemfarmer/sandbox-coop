'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    crypto = require('crypto');


/**
 * User Schema
 */
var ContributorSchema = new Schema(
	{
		name: String,
		info: String,
		img: String,
		user: {
	      id: { type: Schema.Types.ObjectId, ref: 'User' },
	      name: { type: String, default: '' }
	    }
    }
);

module.exports = mongoose.model('Contributor', ContributorSchema);
