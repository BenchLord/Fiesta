var Event = require('../Models/Event.js');
var mongoose = require('mongoose');

var EventCtrl = {

	index: function(req, res){
		Event.find({}, function(err, events){
			if(req.params.format == "json"){
				res.json(events);
			} else {
				res.render('Events/index', {
					Events: events
				});				
			}
		})
	},

	new: function(req, res){
		res.render('Events/new');
	},

	create: function(req, res){
		new Event({
			name: req.body.name,
			organizer: {
				name: req.user.firstName + " " + req.user.lastName,
				phone: req.user.phone,
				email: req.user.email
			},
			where: req.body.where,
			startDate: req.body.startDate,
			startTime: req.body.startTime,
			endDate: req.body.endDate,
			endTime: req.body.endTime
		}).save(function(err, event){
			if (req.params.format == "json"){
				res.json(event);
			} else {
				res.redirect('/api/' + event._id);
			}
		})
	},

	read: function(req, res){
		Event.findOne({_id: req.params._id}, function(err, event){
			if(req.params.format == "json"){
				res.json(event);
			} else {
				res.render('Events/detail', {
					Event: event
				});				
			}
		})
	},

	destroy: function(req, res){
		Event.findOneAndRemove({_id: req.params._id}, function(err, event){
			if (req.params.format == "json"){
				res.status(204).send('');
			} else {
				res.redirect('/api');
			}
		})
	},

	change: function(req, res){
		Event.findOne({_id: req.params._id}, function(err, event){
			res.render('Events/change', {
				Event: event
			})
		})
	},

	update: function(req, res){
		Event.findOneAndUpdate({_id: req.params._id},{
			name: req.body.name,
			organizer: {
				name: req.body.organizer.name,
				phone: req.body.organizer.phone,
				email: req.body.organizer.email
			},
			attendees: req.body.attendees,
			where: req.body.where,
			startDate: req.body.startDate,
			startTime: req.body.startTime,
			endDate: req.body.endDate,
			endTime: req.body.endTime
		}, null, function(err, event){
			if (req.params.format == "json"){
				res.json(event);
			} else {
				res.redirect('/api/' + event._id);
			}
		});
	}
}

module.exports = EventCtrl