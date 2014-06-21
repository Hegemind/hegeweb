var STR = "";
var STRmod = "";
var DEX = "";
var DEXmod = "";
var CON = "";
var CONmod = "";
var INT = "";
var INTmod = "";
var WIS = "";
var WISmod = "";
var CHA = "";
var CHAmod = "";

$('[name="STR-score"]').change( function () { 
	STR 	= $(this).val();
	STRmod	= Math.floor((STR/2)-5);
	$('[name$="STR-mod"]').val(STRmod);
});

$('[name="DEX-score"]').blur( function () { 
	DEX = $(this).val();
	DEXmod	= Math.floor((DEX/2)-5);
	$('[name$="DEX-mod"]').val(DEXmod);
});

$('[name="CON-score"]').blur( function () { 
	CON = $(this).val();
	CONmod	= Math.floor((CON/2)-5);
	$('[name$="CON-mod"]').val(CONmod);
});

$('[name="INT-score"]').blur( function () { 
	INT = $(this).val();
	INTmod	= Math.floor((INT/2)-5);
	$('[name$="INT-mod"]').val(INTmod);
});

$('[name="WIS-score"]').blur( function () { 
	WIS = $(this).val();
	WISmod	= Math.floor((WIS/2)-5);
	$('[name$="WIS-mod"]').val(WISmod);
});

$('[name="CHA-score"]').blur( function () { 
	CHA = $(this).val();
	CHAmod	= Math.floor((CHA/2)-5);
	$('[name$="CHA-mod"]').val(CHAmod);
});

