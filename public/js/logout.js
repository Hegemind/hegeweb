$(document).ready(function() {
	

	$('.alert').hide();
	$('.jumbotron').hide();
	
	$.ajax({
		url: "/api/logout/",
		type: "GET",
	}).done(function(data) {
		
		var code = data.statusCode;
		var msg = data.statusMessage
		
		if(code != 200)
			// Si el logout no fue correcto mostrar mensaje de error
			$('#errorAlert').text(msg);
			$('#errorAlert').show();
		
			// Ocultar el mensaje de exito
			$('.jumbotron').hide();
		} else {
			$('.jumbotron').show();
		}
		
	}).fail(function(data) {
		$('#errorAlert').text("Error connecting to the server");
		$('#errorAlert').show();
		
		// Ocultar el mensaje de exito
		$('.jumbotron').hide();
	});
	return false;

});


