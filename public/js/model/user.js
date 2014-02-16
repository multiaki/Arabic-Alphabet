User = Backbone.Model.extend({
	initialize: function () {
	}
});
window.user = new User();
window.user.set({
	name: "Thomas",
	age: 67
});