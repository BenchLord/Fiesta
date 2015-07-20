var SessionController = {
	new: function(req, res){
		res.render('Sessions/new');
	},

	create: function(req, res){
		res.redirect('/');
	},

	destroy: function(req, res){
		req.session.destroy();
		res.redirect('/');
	}
}

module.exports = SessionController;