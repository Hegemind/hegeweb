$(document).ready(function() {
	
	$('.alert').hide();
	
	function sendLogin() {
		$('.alert').hide();
		
		$.ajax({
			url: "/api/login/",
			type: "POST",
			data: $('#loginForm').serialize()
// 			data: {user: "leandro", password: "123"}
		}).done(function(data) {
			
			var code = data.statusCode;
			var msg = data.statusMessage
			
// 			alert(code);
			
			if(code == 200)
				// Si el login fue correcto ir a la raiz
				window.location.replace("/");
			else {
				// Si el login no fue correcto mostrar mensaje de error
				$('#errorAlert').text(msg);
				$('#errorAlert').show();
			}
			
		}).fail(function(data) {
			$('#errorAlert').text("Error connecting to the server");
			$('#errorAlert').show();
		});
		return false;
	}
	
	$('#loginButton').click(sendLogin); 
});


