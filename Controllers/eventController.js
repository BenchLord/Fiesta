var Event = require('../Models/Event.js');
var mongoose = require('mongoose');

var EventCtrl = {

	index: function(req, res){
		Event.find({}, function(err, Events){
			if(req.params.format == "json"){
				res.json(Events);
			} else {
				res.render('Events/index', {
					Events: Events
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
				name: req.body.organizerName,
				phone: req.body.organizerPhone,
				email: req.body.organizerEmail
			},
			where: req.body.where,
			startDate: req.body.startDate,
			startTime: req.body.startTime,
			endDate: req.body.endDate,
			endTime: req.body.endTime
		}).save(function(err, Event){
			if (req.params.format == "json"){
				res.json(Event);
			} else {
				res.redirect('/api/' + Event._id);
			}
		})
	},

	read: function(req, res){
		Event.findOne({_id: req.params._id}, function(err, Event){
			if(req.params.format == "json"){
				res.json(Event);
			} else {
				res.render('Events/detail', {
					Event: Event
				});				
			}
		})
	},

	destroy: function(req, res){
		Event.findOne({_id: req.params._id}, function(err, Event){
			Event.remove(Event, function(){
				if (req.params.format == "json"){
					res.status(204).send('');
				} else {
					res.redirect('/api');
				}
			})
		})
	},

	change: function(req, res){
		Event.findOne({_id: req.params._id}, function(err, Event){
			res.render('Events/edit', {
				Event: Event
			})
		})
	},

	update: function(req, res){
		Event.findOne({_id: req.params._id}, function(err, Event){
			Event.update('Event', {
				name: req.body.name,
				organizer: {
					name: req.body.organizerName,
					phone: req.body.organizerPhone,
					email: req.body.organizerEmail
				},
				where: req.body.where,
				startDate: req.body.startDate,
				startTime: req.body.startTime,
				endDate: req.body.endDate,
				endTime: req.body.endTime
			}, function(err, Event){
				if (req.params.format == "json"){
					res.json(Event);
				} else {
					res.redirect('/api/' + Event._id)
				}
			})
		})
	}
}

module.exports = EventCtrl