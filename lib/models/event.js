'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    moment = require('moment');


/**
 * Event Schema
 */
var EventSchema = new Schema(
	{
		id: Object,
		type: String,
		title: String,
		start: Date,
		end: Date,
		allDay: Boolean,
		repeatEvent: Boolean,
		location: String,
		url: String
    }
);

module.exports = mongoose.model('Event', EventSchema);


// Event in Full Calendar
// {
// 	type:'party',
// 	title: 'Lunch',
// 	start: new Date(y, m, d, 12, 0),
// 	end: new Date(y, m, d, 14, 0),
// 	allDay: false
// }
