$(document).ready(function() {
	
	$.ajax("/api/game/list/")
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
			r[++j] ='<tr><td>';
			r[++j] = data[key].name;
			r[++j] = '</td><td>';
			r[++j] = data[key].master;
			r[++j] = '</td><td>';
			r[++j] = data[key].gameSystem;
			r[++j] = '</td><td>';
			r[++j] = data[key].players;
			r[++j] = '</td><td>';
			r[++j] = data[key].settings.state;
			r[++j] = '</td></tr>';
		}
		var infoNumberGames = "You have "+data.length+" games going on.";
		$('#infoNumberGames')[0].innerHTML = infoNumberGames;
		
		
		$('#table_data')[0].innerHTML = r.join(''); 
	}
});


