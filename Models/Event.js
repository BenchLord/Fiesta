var mongoose = require('mongoose');

var schema = new mongoose.Schema({
	name: String,
	organizer: {
		name: String,
		phone: String,
		email: String,
	},
	where: String,
	startDate: Date,
	endDate: Date,
});

var Event = mongoose.model('Event', schema);

module.exports = Event;