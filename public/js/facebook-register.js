$(document).ready(function () {
	Parse.initialize("jRt3oPjIvmawp4zdZdFXgH93X9Rir9CT3wPaJhkK", "wNiz7v3vAD6EH5p5B65oBxqgeF5E5Tb3mI3r66tf");
	window.fbAsyncInit = function () {
		Parse.FacebookUtils.init({
			appId: '650765618296184',
			channelUrl: 'http://localhost:3000/',
			status: true,
			cookie: true,
			xfbml: true
		});
		Parse.FacebookUtils.logIn("user_likes,email,read_friendlists,user_online_presence, friends_online_presence,user_about_me,user_education_history,user_hometown,user_location,friends_location,friends_about_me,user_photos,friends_photos, user_religion_politics, friends_religion_politics,publish_actions, user_games_activity", {
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
	};
});