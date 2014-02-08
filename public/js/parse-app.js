var parseInt = {}

parseInt.init = function () {
	Parse.initialize("jRt3oPjIvmawp4zdZdFXgH93X9Rir9CT3wPaJhkK", "wNiz7v3vAD6EH5p5B65oBxqgeF5E5Tb3mI3r66tf");
	window.fbAsyncInit = function() {
		Parse.FacebookUtils.init({
		  appId      : '650765618296184', 
		  channelUrl : 'http://arabic.parseapp.com/', 
		  status     : true, 
		  cookie     : true, 
		  xfbml      : true
		});
		Parse.FacebookUtils.logIn("user_likes,email, ", {
		  success: function(user) {
			if (!user.existed()) {
			  alert("User signed up and logged in through Facebook!");
			} else {
			  alert("User logged in through Facebook!");
			}
		  },
		  error: function(user, error) {
			alert("User cancelled the Facebook login or did not fully authorize.");
		  }
		});
		if (!Parse.FacebookUtils.isLinked(user)) {
		  Parse.FacebookUtils.link(user, null, {
			success: function(user) {
			  alert("Woohoo, user logged in with Facebook!");
			},
			error: function(user, error) {
			  alert("User cancelled the Facebook login or did not fully authorize.");
			}
		  });
		}
	};
	
	(function(d){
		var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
		if (d.getElementById(id)) {return;}
		js = d.createElement('script'); js.id = id; js.async = true;
		js.src = "//connect.facebook.net/en_US/all.js";
		ref.parentNode.insertBefore(js, ref);
	}(document));                                                                                                                
}