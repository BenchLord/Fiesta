var express = require('express');
var mongoose = require('mongoose');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var session = require('express-session');

// mongoose.connect('mongodb://mongodb.cs.dixie.edu/fiestadb');
mongoose.connect('mongodb://fiestauser:fiestapassword@ds047722.mongolab.com:47722/fiesta', function(err){
	if (err){
		console.log(err);
	} else {
		console.log("Connected to Mongolab database: fiesta")		
	}
})

var app = express()

app.set('port', (process.env.PORT)|| 1337)

app.use(methodOverride('_method'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(session({
	secret: 'adsfcffdggrtgvcdffgvfgg6776fxdfvc',
	resave: false,
	saveUninitialized: true
}));

app.use('/', express.static('Public'));

app.use(passport.initialize());
app.use(passport.session());

var User = require('./Models/User.js');
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.set('views', './templates');
app.set('view engine', 'jade');

app.get('/', function(req, res){
	res.render('index', {user: req.user});
});

app.use('/', require('./Routes/api.js'));
app.use('/users', require('./Routes/users.js'));
app.use('/sessions', require('./Routes/sessions.js'));

var server = app.listen(app.get('port'), function(){
	console.log('Fiesta Running on 127.0.0.1:1337');
});