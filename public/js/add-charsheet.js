var abilitiesValue = {STR:0,DEX:0,CON:0,INT:0,WIS:0,CHA:0}
var abilitiesMod = {STR:0,DEX:0,CON:0,INT:0,WIS:0,CHA:0}

$('[name="STR-score"]').change( function () { 
  abilitiesValue[STR] = $(this).val();
  abilitiesMod[STR]	= Math.floor((abilitiesValue[STR]/2)-5);
  $('[name$="STR-mod"]').val(abilitiesMod[STR]);
 
  $('.skill.basic').each( function(){
		if ( $(this).find('.key').val() == 'STR')
			{$(this).find('[name$="-abil"]').val(abilitiesMod[STR])}
	});
  //grapple
});

$('[name="DEX-score"]').change( function () { 
  abilitiesValue[DEX] = $(this).val();
  abilitiesMod[DEX]	= Math.floor((abilitiesValue[DEX]/2)-5);
  $('[name$="DEX-mod"]').val(abilitiesMod[DEX]);
 
  $('.skill.basic').each( function(){
		if ( $(this).find('.key').val() == 'DEX')
			{$(this).find('[name$="-abil"]').val(abilitiesMod[DEX])}
	});
  //armorclass + iniciative + reflex
});

$('[name="CON-score"]').change( function () { 
  abilitiesValue[CON] = $(this).val();
  abilitiesMod[CON]	= Math.floor((abilitiesValue[CON]/2)-5);
  $('[name$="CON-mod"]').val(abilitiesMod[CON]);
 
  $('.skill.basic').each( function(){
		if ( $(this).find('.key').val() == 'CON')
			{$(this).find('[name$="-abil"]').val(abilitiesMod[CON])}
	});
  //fortitude
});

$('[name="INT-score"]').change( function () { 
  abilitiesValue[INT] = $(this).val();
  abilitiesMod[INT]	= Math.floor((abilitiesValue[INT]/2)-5);
  $('[name$="INT-mod"]').val(abilitiesMod[INT]);
 
  $('.skill.basic').each( function(){
		if ( $(this).find('.key').val() == 'INT')
			{$(this).find('[name$="-abil"]').val(abilitiesMod[INT])}
	});
});

$('[name="WIS-score"]').change( function () { 
  abilitiesValue[WIS] = $(this).val();
  abilitiesMod[WIS]	= Math.floor((abilitiesValue[WIS]/2)-5);
  $('[name$="WIS-mod"]').val(abilitiesMod[WIS]);
 
  $('.skill.basic').each( function(){
		if ( $(this).find('.key').val() == 'WIS')
			{$(this).find('[name$="-abil"]').val(abilitiesMod[WIS])}
	});
});

$('[name="CHA-score"]').change( function () { 
  abilitiesValue[CHA] = $(this).val();
  abilitiesMod[CHA]	= Math.floor((abilitiesValue[CHA]/2)-5);
  $('[name$="CHA-mod"]').val(abilitiesMod[CHA]);
 
  $('.skill.basic').each( function(){
		if ( $(this).find('.key').val() == 'CHA')
			{$(this).find('[name$="-abil"]').val(abilitiesMod[CHA])}
	});
});

// console.log(abilitiesValue);
// console.log(abilitiesMod);


