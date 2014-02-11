$(document).ready(function () {
	$(".register-btn").click(function (event) {
		if ($.trim($('#fullname').val()) === "" || $.trim($('#email').val()) === "" || $.trim($('#password').val()) === "") {
			alert("Please fill in all fields");
		} else {
			$("form#register").trigger("submit");
		}
	});
	$(".facebook-btn").click(function (event) {
		window.location.href = "facebook-register";
	});
});