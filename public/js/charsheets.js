$(document).ready(function() {
	
	$('#myTab a').click(function (e) {
		e.preventDefault()
		$(this).tab('show')
	});
	
	$.ajax("/api/charsheet/list/")
	.done(function(data) {
		// Renderizar pagina con los datos
		fillTable(data);
	})
	.fail(function(data) {
		window.location.replace("/error");
	});
	return false;
	
	function fillTable(data) {
		var r = new Array(), j = -1;
		for (var key = 0, size = data.length; key < size; key++){
			r[++j] ='<tr class="charsheet-row"><td>';
			r[++j] = data[key].informacion.nombre;
			r[++j] = '</td><td>';
			r[++j] = data[key].tipo;
			r[++j] = '</td><td>';
			r[++j] = data[key].descripcion;
			r[++j] = '</td><td>';
			r[++j] = data[key].game;
			r[++j] = '</td><td>';
			r[++j] = data[key].since;
			r[++j] = '</td><td>';
			r[++j] = data[key].partida;
			
			// Add option button at the end of the row
			r[++j] = '</td><td><div class="row-buttons">';
			r[++j] = '<button type="button" class="btn btn-primary btn-xs">';
			r[++j] = '	<span class="glyphicon glyphicon-edit"></span>';
			r[++j] = '</button>';
			r[++j] = '<button type="button" class="btn btn-danger btn-xs">';
			r[++j] = '	<span class="glyphicon glyphicon-minus-sign"></span>';
			r[++j] = '</button>';
			r[++j] = '</div></td></tr>';
		}
		var infoNumberCharsheets = "You have "+data.length+" charsheets.";
		$('#infoNumberCharsheets')[0].innerHTML = infoNumberCharsheets;
		
		
		$('#table_data')[0].innerHTML = r.join(''); 
	}
});


