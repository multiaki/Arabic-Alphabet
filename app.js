//Module Dependencies
var express = require('express');
var stylus = require('stylus');
var nib = require('nib');
var routes = require('./routes/index');

//var http = require('http');
//var path = require('path');
//var mongo = require('mongodb');
//var monk = require('monk');
//var db = monk('localhost:27017/arabic');

//set portnumber
var portnumber = 3000;

//initialize express
var app = express();

console.log("Express has been initialized");

function compile(str, path) {
	return stylus(str)
		.set("filename", path)
		.use(nib());
}

//set view folder
app.set("views", __dirname + "/views");

//initialize jade
app.set("view engine", "jade");

console.log("Jade has been initialized");

//Stylus Middleware
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
//app.use(express.methodOverride());
app.use(express.cookieParser());
app.use(express.session({
	secret: "90gfg65sf9dsfk"
}));

app.use(stylus.middleware({
	src: __dirname + '/public',
	compile: compile
}));

app.enable('strict routing');

app.use(require('stylus').middleware(__dirname + '/public'));
app.use(express.static(__dirname + '/public', {
	maxAge: 31557600000
}));
app.use(app.router);

app.get("/register", function (req, res) {
	res.render("register", {
		title: "Register",
		scripts: ['./js/register.js'],
	});
});

app.post("/register", function (req, res) {
	res.render("register", {
		title: "Register with facebook",
		scripts: ['./js/register.js'],
	});
});

app.get("/facebook-register", function (req, res) {
	res.render("facebook-register", {
		title: "Register with facebook",
		scripts: ['./js/facebook-register.js'],
	});
});

app.get("/login", function (req, res) {
	res.render("login", {
		title: "Login",
		scripts: ['./js/login.js'],
	});
});

//Render Index page
app.get('/', routes.index);

//Render Index page
app.get("*", function (req, res) {
	res.render("404", {
		title: "Welcome"
	});
});
app.listen(portnumber);

console.log("Server is now running on port " + portnumber);