var mongoose = require('mongoose');

var schema = new mongoose.Schema({
	name: String,
	organizer: {
		name: String,
		phone: String,
		email: String,
	},
	where: String,
	startDate: String,
	startTime: String,
	endDate: String,
	endTime: String
});

var Event = mongoose.model('Event', schema);

module.exports = Event;