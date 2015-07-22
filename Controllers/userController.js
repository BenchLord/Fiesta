var User = require('../Models/User.js')

var UserController = {
	new: function(req, res){
		res.render('Users/new');
	},

	create: function(req, res){
		if (req.body.password == req.body.cpassword){
			var user = new User({
				email: req.body.email,
				firstName: req.body.firstName,
				lastName: req.body.lastName,
				username: req.body.username,
				phone: req.body.phone
			});

			User.register(user, req.body.password, function(err){
				if (err){
					res.send(err);
				} else {
					res.redirect('/');				
			}
			});			
		} else {
			res.send('Password fields don\'t match');
		}
	}
};

module.exports = UserController;