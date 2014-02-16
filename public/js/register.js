$(".register-btn").click(function (event) {
	if ($.trim($('#fullname').val()) === "" || $.trim($('#email').val()) === "" || $.trim($('#password').val()) === "") {
		alert("Please fill in all fields");
	} else {
		$("form#register").trigger("submit");
	}
});
$(".facebook-btn").click(function (event) {
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
});
