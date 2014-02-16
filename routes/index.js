exports.index = function (req, res) {
	res.render("index", {
		title: "Welcome",
		scripts: ['./js/facebook.js']
	});
};