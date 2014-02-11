$(document).ready(function () {
	$(".login-btn").click(function (event) {
		if ($.trim($('#email').val()) === "" || $.trim($('#password').val()) === "") {
			alert("Please fill in all fields");
		} else {
			$("form#register").trigger("submit");
		}
	});
	$(".facebook-btn").click(function (event) {
		window.location.href = "facebook-register";
	});
});