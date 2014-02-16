var facebook = {
	init: function () {
		Parse.initialize("jRt3oPjIvmawp4zdZdFXgH93X9Rir9CT3wPaJhkK", "wNiz7v3vAD6EH5p5B65oBxqgeF5E5Tb3mI3r66tf");
		window.fbAsyncInit = function () {
			Parse.FacebookUtils.init({
				appId: '650765618296184',
				channelUrl: 'http://localhost:3000/',
				status: true,
				cookie: true,
				xfbml: true
			});
		}
	},
	login : function() {
		Parse.FacebookUtils.logIn(null, {
			success: function (user) {
				if (!user.existed()) {
					alert("User signed up and logged in through Facebook!");
				} else {
					alert("User logged in through Facebook!");
				}
			},
			error: function (user, error) {
				alert("User cancelled the Facebook login or did not fully authorize.");
			}
		});
	}
}

facebook.init();

$(".login-btn").click(function (event) {
	if ($.trim($('#email').val()) === "" || $.trim($('#password').val()) === "") {
		alert("Please fill in all fields");
	} else {
		$("form#register").trigger("submit");
	}
});
$(".facebook-btn").click(function (event) {
	facebook.login();
	event.preventDefault();
});
