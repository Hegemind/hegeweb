var abilitiesValue = {STR:0,DEX:0,CON:0,INT:0,WIS:0,CHA:0};
var abilitiesMod = {STR:0,DEX:0,CON:0,INT:0,WIS:0,CHA:0};
var abilitiesRacial = {STR:0,DEX:0,CON:0,INT:0,WIS:0,CHA:0};

//Generar dropdown

function alignSelection($scope) {
  $scope.alignment = catalogAlignment;
}

function raceSelection($scope) {
  $scope.races = catalogRaces;

  $('[name=charRace]').on('change', function(){
      var raceSelected = $(this).val();
      var raceIndex = "";
      for (var i = 0; i < catalogRaces.length; i++) {
        if (catalogRaces[i].raceName == raceSelected) {raceIndex = i;}
      }

      var raceSize = catalogRaces[raceIndex].raceSize;
      $('[name="charSize"]').val(raceSize);
      $('[name="Speed"]').val(catalogRaces[raceIndex].baseSpeed);

      var raceSizeIndex = ""
      for (var i = 0; i < catalogRaces.length; i++) {
        if (catalogSize[i].sizeName == raceSize) {raceSizeIndex = i;}
      }
      $('[name$="size-mod"]').val(catalogSize[raceSizeIndex].sizeMod);
  });
}

function abilitySelection($scope) {
    var ATR = $(this).attr(id).val();
}

function ACsum($scope) {
    var ACarmor = $('[name="AC-armor"]'),
        ACshield = $('[name="AC-shield"]'),
        ACdex = $('[name="AC-DEX-mod"]'),
        ACsize = $('[name="AC-size-mod"]'),
        ACnatural = $('[name="AC-natural"]'),
        ACdelf = $('[name="AC-defl-mod"]'),
        ACmisc = $('[name="AC-misc-mod"]'),
        ACtotal = '';
    $('[name~=AC').on('change',function(){
      ACtotal = 10 + ACarmor + ACshield + ACdex + ACsize + ACnatural + ACdelf + ACmisc;
      $('[name="AC-total"]').val(ACtotal);
    }) 
}


/*var charRace = $('[name="charRace"]');
//Actualizar los rasgos raciales
  charRace.change( function(){
  	var race = $(this).val().toLowerCase();
  	var raceIndex = "";
  	for (var i = 0; i < catalogRaces.length; i++) {
      	if (catalogRaces[i].raceName == race) {
      		raceIndex = i;
      	}
  	}

  	$('[name="charSize"]').val(catalogRaces[raceIndex].raceSize);
  	$('[name="Speed"]').val(catalogRaces[raceIndex].baseSpeed);

    var raceSizeIndex = "";
    for (var i = 0; i < catalogSize.length; i++) {
        if (catalogSize[i][0] == race) {
          raceSizeIndex = i;
        }
  }

  $('[name$="-size-mod"]').val(catalogSize[raceSizeIndex][2]);
	//AC
});*/

//Actualizar los modificadores de atributos
/*$('[name="STR-score"]').change( function () { 
  abilitiesValue[STR] = $(this).val();
  abilitiesMod[STR]	= Math.floor((abilitiesValue[STR]/2)-5) + abilitiesRacial[STR];
  $('[name$="STR-mod"]').val(abilitiesMod[STR]);
 
  $('.skill.basic').each( function(){
		if ( $(this).find('.key').val() == 'STR')
			{$(this).find('[name$="-abil"]').val(abilitiesMod[STR])}
	});
}); 
*/