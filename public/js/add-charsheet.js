var abilitiesValue = {STR:0,DEX:0,CON:0,INT:0,WIS:0,CHA:0}
var abilitiesMod = {STR:0,DEX:0,CON:0,INT:0,WIS:0,CHA:0}

$('input').change(function(){
	abilitiesUpdate();
	skillUpdate();
});

function abilitiesUpdate(){
	$('[name="STR-score"]').change( function () { 
		abilitiesValue[STR] = $(this).val();
		abilitiesMod[STR]	= Math.floor((abilitiesValue[STR]/2)-5);
		$('[name$="STR-mod"]').val(abilitiesMod[STR]);
	});

	$('[name="DEX-score"]').blur( function () { 
		abilitiesValue[DEX] = $(this).val();
		abilitiesMod[DEX]	= Math.floor((abilitiesValue[DEX]/2)-5);
		$('[name$="DEX-mod"]').val(abilitiesMod[DEX]);
	});

	$('[name="CON-score"]').blur( function () { 
		abilitiesValue[CON] = $(this).val();
		abilitiesMod[CON]	= Math.floor((abilitiesValue[CON]/2)-5);
		$('[name$="CON-mod"]').val(abilitiesMod[CON]);
	});

	$('[name="INT-score"]').blur( function () { 
		abilitiesValue[INT] = $(this).val();
		abilitiesMod[INT]	= Math.floor((abilitiesValue[INT]/2)-5);
		$('[name$="INT-mod"]').val(abilitiesMod[INT]);
	});

	$('[name="WIS-score"]').blur( function () { 
		abilitiesValue[WIS] = $(this).val();
		abilitiesMod[WIS]	= Math.floor((abilitiesValue[WIS]/2)-5);
		$('[name$="WIS-mod"]').val(abilitiesMod[WIS]);
	});

	$('[name="CHA-score"]').blur( function () { 
		abilitiesValue[CHA] = $(this).val();
		abilitiesMod[CHA]	= Math.floor((abilitiesValue[CHA]/2)-5);
		$('[name$="CHA-mod"]').val(abilitiesMod[CHA]);
	});
	console.log('Values: '+abilitiesValue);
	console.log('Modifiers: '+abilitiesMod);
}

function skillUpdate(){
	$('.skill.basic').each( function(){
		var key = $(this).find('.key').val();
		var keyV = abilitiesMod[key];
		$(this).find('[name$=-abil]').val(keyV);
	});
}

