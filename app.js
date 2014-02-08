//Module dependencies
var express = require("express");
var stylus = require("stylus");
var nib = require("nib");

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
app.use(express.logger("dev"));
app.use(stylus.middleware({
	src: __dirname + "/public",
	compile: compile
}));

app.use(express.static(__dirname + "/public"));

//Render Index page
app.get("/", function (req, res) {
	res.render("register", {
		title: "Welcome"
	});
});

app.get("/register", function (req, res) {
	res.render("register", {
		title: "Register"
	});
});

app.get("/login", function (req, res) {
	res.render("login", {
		title: "Login"
	});
});

app.listen(portnumber);

console.log("Server is now running on port " + portnumber);
