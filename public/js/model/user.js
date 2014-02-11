User = Backbone.Model.extend({
	initialize: function () {
		alert("Welcome to this world");
	}
});
window.user = new User();
window.user.set({
	name: "Thomas",
	age: 67
});