var express = require('express');
var mongoose = require('mongoose');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');

mongoose.connect('mongodb://neon/FiestaDB', function(){
	console.log("Connected to mongo database: FiestaDB")
})

var app = express()

app.use(methodOverride('_method'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/public', express.static('Public'));
app.use('/node', express.static('node_modules'));

app.set('views', './templates');
app.set('view engine', 'jade');

app.get('/', function(req, res){
	res.render('index');
});

app.use('/', require('./Routes/api.js'));

var server = app.listen('1337', function(){
	console.log('Fiesta Running on 127.0.0.1:1337');
});