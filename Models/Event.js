var mongoose = require('mongoose');

var schema = new mongoose.Schema({
	name: String,
	organizer: {
		name: {
			type: String,
			default: 'Unkown'
		},
		phone: {
			type: String,
			default: 'Unkown'
		},
		email: {
			type: String,
			default: 'Unkown'
		}
	},
	where: String,
	startDate: Date,
	endDate: Date,
	attendees: []
});

var Event = mongoose.model('Event', schema);

module.exports = Event;