var catalogAlignment =	[	"Legal Good",
							"Legal Neutral",
							"Legal Evil",
							"Neutral Good",
							"True Neutral",
							"Neutral Evil",
							"Chaotic Good",
							"Chaotic Neutral",
							"Chaotic Evil"
						];

var catalogRaces =		[{	raceName				:	"human",
							abilitiesAdjustment		:	{},
							skillsAdjustment		:	{}, 
							preferredClass			:	"",
							minWeight				:	60,
							maxWeight				:	115,
							minHeight				:	150,
							maxHeight				:	190,
							baseSpeed				:	30,
							raceSize				:	"medium"
						},
						{	raceName				:	"elf",
							abilitiesAdjustment		:	{DEX:2,CON:-2}, 
							skillsAdjustment		:	{spot:2,search:2,listen:2}, 
							preferredClass			:	"mage",
							minWeight				:	40,
							maxWeight				:	65,
							minHeight				:	130,
							maxHeight				:	170,
							baseSpeed				:	30,
							raceSize				:	"medium"
						},
						{	raceName				:	"dwarf",
							abilitiesAdjustment		:	{CON:2,CHA:-2}, 
							skillsAdjustment		:	{search:2,craft:2}, 
							preferredClass			:	"warrior",
							minWeight				:	60,
							maxWeight				:	115,
							minHeight				:	120,
							maxHeight				:	140,
							baseSpeed				:	20,
							raceSize				:	"medium"
						},
						{	raceName				:	"gnome",
							abilitiesAdjustment		:	{CON:2,STR:-2}, 
							skillsAdjustment		:	{listen:2,craft:2}, 
							preferredClass			:	"bard",
							minWeight				:	18,
							maxWeight				:	20,
							minHeight				:	90,
							maxHeight				:	105,
							baseSpeed				:	20,
							raceSize				:	"small"
						},
						{	raceName				:	"halfling",
							abilitiesAdjustment		:	{DEX:2,STR:-2}, 
							skillsAdjustment		:	{silentmove:2,jump:2,climb:2,listen:2}, 
							preferredClass			:	"rogue",
							minWeight				:	12,
							maxWeight				:	15,
							minHeight				:	75,
							maxHeight				:	90,
							baseSpeed				:	20,
							raceSize				:	"small"
						},
						{	raceName				:	"half-elf",
							abilitiesAdjustment		:	{}, 
							skillsAdjustment		:	{spot:2,search:2,listen:2,diplomacy:2,gather:2}, 
							preferredClass			:	"",
							minWeight				:	40,
							maxWeight				:	80,
							minHeight				:	150,
							maxHeight				:	190,
							baseSpeed				:	30,
							raceSize				:	"medium"
						},
						{	raceName				:	"half-orc",
							abilitiesAdjustment		:	{STR:2,INT:-2,CHA:-2}, 
							skillsAdjustment		:	{}, 
							preferredClass			:	"",
							minWeight				:	90,
							maxWeight				:	115,
							minHeight				:	180,
							maxHeight				:	210,
							baseSpeed				:	30,
							raceSize				:	"medium"
						}];

var catalogSize =		{	Fine		:	8,
							Diminutive	:	4,
							Tiny		:	2,
							Small		:	1,
							Medium		:	0,
							Large		:	-1,
							Huge		:	-2,
							Gargantuan	:	-4,
							Colossal	:	-8
						};

var catalogSalving =	{	level01: [ 2, 0],
							level02: [ 3, 0],
							level03: [ 3, 1],
							level04: [ 4, 1],
							level05: [ 4, 1],
							level06: [ 5, 2],
							level07: [ 5, 2],
							level08: [ 6, 2],
							level09: [ 6, 3],
							level10: [ 7, 3],
							level11: [ 7, 3],
							level12: [ 8, 4],
							level13: [ 8, 4],
							level14: [ 9, 4],
							level15: [ 9, 5],
							level16: [10, 5],
							level17: [10, 5],
							level18: [11, 6],
							level19: [11, 6],
							level20: [12, 6]
						};

var catalogBaseAttack =	{	level01: [ 1, 0],
							level02: [ 2, 1],
							level03: [ 3, 2],
							level04: [ 4, 3],
							level05: [ 5, 3],
							level06: [ 6, 4],
							level07: [ 7, 5],
							level08: [ 8, 6],
							level09: [ 9, 6],
							level10: [10, 7],
							level11: [11, 8],
							level12: [12, 9],
							level13: [13, 9],
							level14: [14,10],
							level15: [15,11],
							level16: [16,12],
							level17: [17,12],
							level18: [18,13],
							level19: [19,14],
							level20: [20,15]
						}











