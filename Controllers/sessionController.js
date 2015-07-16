var SessionController = {
	new: function(req, res){
		res.render('Sessions/new');
	},

	create: function(req, res){
		res.redirect('/');
	}
}

module.exports = SessionController;