// ─── Fantasy Football Analytics Platform — shared utilities ──────────────────
// Single source of truth for name matching, scoring, and baked-in consensus/ADP
// data, used by index.html, compare.html, history.html, and roster.html.

// ─── Baked-in consensus data ──────────────────────────────────────────────────
// CONSENSUS_DATA: FantasyPros ECR 6/24/2026 · top 300 skill positions · unique ranks
const CONSENSUS_DATA = [
  ['bijan robinson', 1, 'RB'],
  ['jahmyr gibbs', 2, 'RB'],
  ['ja\'marr chase', 3, 'WR'],
  ['puka nacua', 4, 'WR'],
  ['jaxon smithnjigba', 5, 'WR'],
  ['amonra st brown', 6, 'WR'],
  ['christian mccaffrey', 7, 'RB'],
  ['ceedee lamb', 8, 'WR'],
  ['jonathan taylor', 9, 'RB'],
  ['justin jefferson', 10, 'WR'],
  ['james cook', 11, 'RB'],
  ['drake london', 12, 'WR'],
  ['ashton jeanty', 13, 'RB'],
  ['de\'von achane', 14, 'RB'],
  ['nico collins', 15, 'WR'],
  ['brock bowers', 16, 'TE'],
  ['chase brown', 17, 'RB'],
  ['saquon barkley', 18, 'RB'],
  ['aj brown', 19, 'WR'],
  ['george pickens', 20, 'WR'],
  ['omarion hampton', 21, 'RB'],
  ['trey mcbride', 22, 'TE'],
  ['chris olave', 23, 'WR'],
  ['derrick henry', 24, 'RB'],
  ['kenneth walker', 25, 'RB'],
  ['josh allen', 26, 'QB'],
  ['rashee rice', 27, 'WR'],
  ['tetairoa mcmillan', 28, 'WR'],
  ['devonta smith', 29, 'WR'],
  ['jeremiyah love', 30, 'RB'],
  ['tee higgins', 31, 'WR'],
  ['malik nabers', 32, 'WR'],
  ['lamar jackson', 33, 'QB'],
  ['drake maye', 34, 'QB'],
  ['kyren williams', 35, 'RB'],
  ['zay flowers', 36, 'WR'],
  ['breece hall', 37, 'RB'],
  ['josh jacobs', 38, 'RB'],
  ['garrett wilson', 39, 'WR'],
  ['ladd mcconkey', 40, 'WR'],
  ['colston loveland', 41, 'TE'],
  ['javonte williams', 42, 'RB'],
  ['travis etienne', 43, 'RB'],
  ['terry mclaurin', 44, 'WR'],
  ['emeka egbuka', 45, 'WR'],
  ['joe burrow', 46, 'QB'],
  ['jaylen waddle', 47, 'WR'],
  ['davante adams', 48, 'WR'],
  ['luther burden', 49, 'WR'],
  ['jameson williams', 50, 'WR'],
  ['cam skattebo', 51, 'RB'],
  ['mike evans', 52, 'WR'],
  ['quinshon judkins', 53, 'RB'],
  ['bucky irving', 54, 'RB'],
  ['treveyon henderson', 55, 'RB'],
  ['christian watson', 56, 'WR'],
  ['d\'andre swift', 57, 'RB'],
  ['jayden daniels', 58, 'QB'],
  ['jalen hurts', 59, 'QB'],
  ['tyler warren', 60, 'TE'],
  ['rome odunze', 61, 'WR'],
  ['dj moore', 62, 'WR'],
  ['david montgomery', 63, 'RB'],
  ['tucker kraft', 64, 'TE'],
  ['bhayshul tuten', 65, 'RB'],
  ['carnell tate', 66, 'WR'],
  ['caleb williams', 67, 'QB'],
  ['justin herbert', 68, 'QB'],
  ['jadarian price', 69, 'RB'],
  ['jaylen warren', 70, 'RB'],
  ['alec pierce', 71, 'WR'],
  ['marvin harrison', 72, 'WR'],
  ['dk metcalf', 73, 'WR'],
  ['chuba hubbard', 74, 'RB'],
  ['harold fannin', 75, 'TE'],
  ['trevor lawrence', 76, 'QB'],
  ['courtland sutton', 77, 'WR'],
  ['rhamondre stevenson', 78, 'RB'],
  ['rico dowdle', 79, 'RB'],
  ['tony pollard', 80, 'RB'],
  ['jaxson dart', 81, 'QB'],
  ['dak prescott', 82, 'QB'],
  ['brian thomas', 83, 'WR'],
  ['sam laporta', 84, 'TE'],
  ['rj harvey', 85, 'RB'],
  ['kyle pitts', 86, 'TE'],
  ['chris godwin', 87, 'WR'],
  ['jordyn tyson', 88, 'WR'],
  ['michael wilson', 89, 'WR'],
  ['kyle monangai', 90, 'RB'],
  ['makai lemon', 91, 'WR'],
  ['brock purdy', 92, 'QB'],
  ['parker washington', 93, 'WR'],
  ['blake corum', 94, 'RB'],
  ['jakobi meyers', 95, 'WR'],
  ['michael pittman', 96, 'WR'],
  ['jk dobbins', 97, 'RB'],
  ['patrick mahomes', 98, 'QB'],
  ['bo nix', 99, 'QB'],
  ['wan\'dale robinson', 100, 'WR'],
  ['matthew stafford', 101, 'QB'],
  ['travis kelce', 102, 'TE'],
  ['ricky pearsall', 103, 'WR'],
  ['kenny gainwell', 104, 'RB'],
  ['jordan addison', 105, 'WR'],
  ['aaron jones', 106, 'RB'],
  ['dalton kincaid', 107, 'TE'],
  ['quentin johnston', 108, 'WR'],
  ['jared goff', 109, 'QB'],
  ['kyler murray', 110, 'QB'],
  ['jayden reed', 111, 'WR'],
  ['george kittle', 112, 'TE'],
  ['jacory croskeymerritt', 113, 'RB'],
  ['jake ferguson', 114, 'TE'],
  ['rachaad white', 115, 'RB'],
  ['josh downs', 116, 'WR'],
  ['dallas goedert', 117, 'TE'],
  ['isaiah likely', 118, 'TE'],
  ['jordan love', 119, 'QB'],
  ['baker mayfield', 120, 'QB'],
  ['tyrone tracy', 121, 'RB'],
  ['xavier worthy', 122, 'WR'],
  ['jordan mason', 123, 'RB'],
  ['jayden higgins', 124, 'WR'],
  ['tyler shough', 125, 'QB'],
  ['khalil shakir', 126, 'WR'],
  ['mark andrews', 127, 'TE'],
  ['tyler allgeier', 128, 'RB'],
  ['zach charbonnet', 129, 'RB'],
  ['malik willis', 130, 'QB'],
  ['chris rodriguez', 131, 'RB'],
  ['romeo doubs', 132, 'WR'],
  ['kc concepcion', 133, 'WR'],
  ['woody marks', 134, 'RB'],
  ['jonathon brooks', 135, 'RB'],
  ['jalen coker', 136, 'WR'],
  ['isiah pacheco', 137, 'RB'],
  ['matthew golden', 138, 'WR'],
  ['tyjae spears', 139, 'RB'],
  ['juwan johnson', 140, 'TE'],
  ['dylan sampson', 141, 'RB'],
  ['cj stroud', 142, 'QB'],
  ['oronde gadsden', 143, 'TE'],
  ['sam darnold', 144, 'QB'],
  ['alvin kamara', 145, 'RB'],
  ['brenton strange', 146, 'TE'],
  ['rashid shaheed', 147, 'WR'],
  ['hunter henry', 148, 'TE'],
  ['keaton mitchell', 149, 'RB'],
  ['cam ward', 150, 'QB'],
  ['brian robinson', 151, 'RB'],
  ['jerry jeudy', 152, 'WR'],
  ['jauan jennings', 153, 'WR'],
  ['jonah coleman', 154, 'RB'],
  ['omar cooper', 155, 'WR'],
  ['denzel boston', 156, 'WR'],
  ['tank bigsby', 157, 'RB'],
  ['braelon allen', 158, 'RB'],
  ['chig okonkwo', 159, 'TE'],
  ['bryce young', 160, 'QB'],
  ['james conner', 161, 'RB'],
  ['travis hunter', 162, 'WR'],
  ['daniel jones', 163, 'QB'],
  ['emanuel wilson', 164, 'RB'],
  ['dalton schultz', 165, 'TE'],
  ['jalen mcmillan', 166, 'WR'],
  ['adonai mitchell', 167, 'WR'],
  ['kayshon boutte', 168, 'WR'],
  ['stefon diggs', 169, 'WR'],
  ['emmett johnson', 170, 'RB'],
  ['tre\' harris', 171, 'WR'],
  ['kimani vidal', 172, 'RB'],
  ['tre tucker', 173, 'WR'],
  ['deebo samuel', 174, 'WR'],
  ['troy franklin', 175, 'WR'],
  ['kenyon sadiq', 176, 'TE'],
  ['aj barner', 177, 'TE'],
  ['tj hockenson', 178, 'TE'],
  ['ryan flournoy', 179, 'WR'],
  ['brandon aiyuk', 180, 'WR'],
  ['calvin ridley', 181, 'WR'],
  ['sean tucker', 182, 'RB'],
  ['isaac teslaa', 183, 'WR'],
  ['jaylin noel', 184, 'WR'],
  ['mike washington', 185, 'RB'],
  ['jacoby brissett', 186, 'QB'],
  ['ray davis', 187, 'RB'],
  ['darnell mooney', 188, 'WR'],
  ['pat bryant', 189, 'WR'],
  ['nicholas singleton', 190, 'RB'],
  ['kaytron allen', 191, 'RB'],
  ['antonio williams', 192, 'WR'],
  ['chimere dike', 193, 'WR'],
  ['gunnar helm', 194, 'TE'],
  ['jalen nailor', 195, 'WR'],
  ['jaylen wright', 196, 'RB'],
  ['de\'zhaun stribling', 197, 'WR'],
  ['david njoku', 198, 'TE'],
  ['malik washington', 199, 'WR'],
  ['terrance ferguson', 200, 'TE'],
  ['dontayvion wicks', 201, 'WR'],
  ['tyreek hill', 202, 'WR'],
  ['ollie gordon', 203, 'RB'],
  ['elic ayomanor', 204, 'WR'],
  ['rashod bateman', 205, 'WR'],
  ['tank dell', 206, 'WR'],
  ['pat freiermuth', 207, 'TE'],
  ['ted hurst', 208, 'WR'],
  ['cade otton', 209, 'TE'],
  ['germie bernard', 210, 'WR'],
  ['geno smith', 211, 'QB'],
  ['zachariah branch', 212, 'WR'],
  ['cooper kupp', 213, 'WR'],
  ['marshawn lloyd', 214, 'RB'],
  ['aaron rodgers', 215, 'QB'],
  ['colby parkinson', 216, 'TE'],
  ['devin neal', 217, 'RB'],
  ['kaleb johnson', 218, 'RB'],
  ['fernando mendoza', 219, 'QB'],
  ['trey benson', 220, 'RB'],
  ['chris bell', 221, 'WR'],
  ['jack bech', 222, 'WR'],
  ['eli stowers', 223, 'TE'],
  ['keon coleman', 224, 'WR'],
  ['christian kirk', 225, 'WR'],
  ['kendre miller', 226, 'RB'],
  ['demond claiborne', 227, 'RB'],
  ['evan engram', 228, 'TE'],
  ['chris brooks', 229, 'RB'],
  ['malik davis', 230, 'RB'],
  ['justice hill', 231, 'RB'],
  ['elijah sarratt', 232, 'WR'],
  ['tory horton', 233, 'WR'],
  ['mason taylor', 234, 'TE'],
  ['jaydon blue', 235, 'RB'],
  ['isaiah davis', 236, 'RB'],
  ['ty johnson', 237, 'RB'],
  ['malachi fields', 238, 'WR'],
  ['theo johnson', 239, 'TE'],
  ['dj giddens', 240, 'RB'],
  ['jordan james', 241, 'RB'],
  ['seth mcgowan', 242, 'RB'],
  ['marvin mims', 243, 'WR'],
  ['mack hollins', 244, 'WR'],
  ['michael penix', 245, 'QB'],
  ['najee harris', 246, 'RB'],
  ['kyle williams', 247, 'WR'],
  ['samaje perine', 248, 'RB'],
  ['chris brazzell', 249, 'WR'],
  ['tyquan thornton', 250, 'WR'],
  ['george holani', 251, 'RB'],
  ['tua tagovailoa', 252, 'QB'],
  ['darius slayton', 253, 'WR'],
  ['jerome ford', 254, 'RB'],
  ['greg dulcich', 255, 'TE'],
  ['brashard smith', 256, 'RB'],
  ['xavier legette', 257, 'WR'],
  ['devin singletary', 258, 'RB'],
  ['oscar delp', 259, 'TE'],
  ['keenan allen', 260, 'WR'],
  ['lequint allen', 261, 'RB'],
  ['kaelon black', 262, 'RB'],
  ['devaughn vele', 263, 'WR'],
  ['emari demercado', 264, 'RB'],
  ['hollywood brown', 265, 'WR'],
  ['jake tonges', 266, 'TE'],
  ['mike gesicki', 267, 'TE'],
  ['adam randall', 268, 'RB'],
  ['joe mixon', 269, 'RB'],
  ['shedeur sanders', 270, 'QB'],
  ['isaac guerendo', 271, 'RB'],
  ['kirk cousins', 272, 'QB'],
  ['deshaun watson', 273, 'QB'],
  ['jaleel mclaughlin', 274, 'RB'],
  ['skyler bell', 275, 'WR'],
  ['isaiah bond', 276, 'WR'],
  ['trevor etienne', 277, 'RB'],
  ['ja\'kobi lane', 278, 'WR'],
  ['tahj brooks', 279, 'RB'],
  ['jarquez hunter', 280, 'RB'],
  ['audric estime', 281, 'RB'],
  ['andrei iosivas', 282, 'WR'],
  ['kareem hunt', 283, 'RB'],
  ['konata mumpfield', 284, 'WR'],
  ['jalen royals', 285, 'WR'],
  ['tez johnson', 286, 'WR'],
  ['calvin austin', 287, 'WR'],
  ['jj mccarthy', 288, 'QB'],
  ['cedric tillman', 289, 'WR'],
  ['max klare', 290, 'TE'],
  ['darnell washington', 291, 'TE'],
  ['will shipley', 292, 'RB'],
  ['luke mccaffrey', 293, 'WR'],
  ['bam knight', 294, 'RB'],
  ['jahan dotson', 295, 'WR'],
  ['olamide zaccheaus', 296, 'WR'],
  ['j\'mari taylor', 297, 'RB'],
  ['xavier hutchinson', 298, 'WR'],
  ['caleb douglas', 299, 'WR'],
  ['tyler higbee', 300, 'TE']
];
const CONSENSUS_SOURCES = 'FantasyPros ECR 6/24/2026 · top 300 skill positions';

// ADP_DATA: FantasyPros 2026 Half PPR ADP · consensus players only · rounded to whole number
const ADP_DATA = {
  'bijan robinson': {rank:2, avg:2},
  'jahmyr gibbs': {rank:1, avg:1},
  'ja\'marr chase': {rank:3, avg:3},
  'puka nacua': {rank:4, avg:4},
  'jaxon smithnjigba': {rank:5, avg:5},
  'amonra st brown': {rank:8, avg:8},
  'christian mccaffrey': {rank:6, avg:6},
  'ceedee lamb': {rank:11, avg:11},
  'jonathan taylor': {rank:7, avg:7},
  'justin jefferson': {rank:9, avg:10},
  'james cook': {rank:10, avg:11},
  'drake london': {rank:19, avg:18},
  'ashton jeanty': {rank:12, avg:12},
  'de\'von achane': {rank:13, avg:14},
  'nico collins': {rank:23, avg:23},
  'brock bowers': {rank:18, avg:18},
  'chase brown': {rank:17, avg:18},
  'saquon barkley': {rank:14, avg:15},
  'aj brown': {rank:21, avg:21},
  'george pickens': {rank:25, avg:24},
  'omarion hampton': {rank:15, avg:17},
  'trey mcbride': {rank:16, avg:18},
  'chris olave': {rank:27, avg:28},
  'derrick henry': {rank:22, avg:22},
  'kenneth walker': {rank:20, avg:19},
  'josh allen': {rank:24, avg:23},
  'rashee rice': {rank:29, avg:31},
  'tetairoa mcmillan': {rank:41, avg:41},
  'devonta smith': {rank:28, avg:31},
  'jeremiyah love': {rank:26, avg:25},
  'tee higgins': {rank:38, avg:39},
  'malik nabers': {rank:33, avg:34},
  'lamar jackson': {rank:43, avg:44},
  'drake maye': {rank:58, avg:55},
  'kyren williams': {rank:30, avg:32},
  'zay flowers': {rank:37, avg:39},
  'breece hall': {rank:31, avg:32},
  'josh jacobs': {rank:39, avg:40},
  'garrett wilson': {rank:42, avg:42},
  'ladd mcconkey': {rank:44, avg:44},
  'colston loveland': {rank:35, avg:36},
  'javonte williams': {rank:32, avg:33},
  'travis etienne': {rank:34, avg:35},
  'terry mclaurin': {rank:51, avg:52},
  'emeka egbuka': {rank:36, avg:38},
  'joe burrow': {rank:48, avg:51},
  'jaylen waddle': {rank:54, avg:54},
  'davante adams': {rank:53, avg:54},
  'luther burden': {rank:45, avg:47},
  'jameson williams': {rank:57, avg:55},
  'cam skattebo': {rank:40, avg:40},
  'mike evans': {rank:56, avg:55},
  'quinshon judkins': {rank:47, avg:49},
  'bucky irving': {rank:59, avg:56},
  'treveyon henderson': {rank:52, avg:54},
  'christian watson': {rank:64, avg:66},
  'd\'andre swift': {rank:55, avg:54},
  'jayden daniels': {rank:60, avg:59},
  'jalen hurts': {rank:66, avg:68},
  'tyler warren': {rank:50, avg:51},
  'rome odunze': {rank:63, avg:63},
  'dj moore': {rank:46, avg:48},
  'david montgomery': {rank:49, avg:51},
  'tucker kraft': {rank:69, avg:72},
  'bhayshul tuten': {rank:61, avg:60},
  'carnell tate': {rank:68, avg:71},
  'caleb williams': {rank:65, avg:67},
  'justin herbert': {rank:83, avg:83},
  'jadarian price': {rank:62, avg:60},
  'jaylen warren': {rank:75, avg:79},
  'alec pierce': {rank:84, avg:84},
  'marvin harrison': {rank:73, avg:75},
  'dk metcalf': {rank:86, avg:85},
  'chuba hubbard': {rank:71, avg:74},
  'harold fannin': {rank:72, avg:75},
  'trevor lawrence': {rank:81, avg:81},
  'courtland sutton': {rank:87, avg:85},
  'rhamondre stevenson': {rank:74, avg:77},
  'rico dowdle': {rank:85, avg:85},
  'tony pollard': {rank:76, avg:79},
  'jaxson dart': {rank:88, avg:88},
  'dak prescott': {rank:70, avg:73},
  'brian thomas': {rank:67, avg:69},
  'sam laporta': {rank:82, avg:82},
  'rj harvey': {rank:80, avg:81},
  'kyle pitts': {rank:77, avg:79},
  'chris godwin': {rank:93, avg:93},
  'jordyn tyson': {rank:78, avg:80},
  'michael wilson': {rank:89, avg:89},
  'kyle monangai': {rank:91, avg:89},
  'makai lemon': {rank:92, avg:92},
  'brock purdy': {rank:97, avg:98},
  'parker washington': {rank:79, avg:80},
  'blake corum': {rank:98, avg:100},
  'jakobi meyers': {rank:106, avg:106},
  'michael pittman': {rank:109, avg:106},
  'jk dobbins': {rank:96, avg:98},
  'patrick mahomes': {rank:94, avg:93},
  'bo nix': {rank:104, avg:104},
  'wan\'dale robinson': {rank:108, avg:106},
  'matthew stafford': {rank:90, avg:89},
  'travis kelce': {rank:102, avg:103},
  'ricky pearsall': {rank:112, avg:109},
  'kenny gainwell': {rank:103, avg:103},
  'jordan addison': {rank:105, avg:105},
  'aaron jones': {rank:122, avg:120},
  'dalton kincaid': {rank:114, avg:110},
  'quentin johnston': {rank:99, avg:100},
  'jared goff': {rank:101, avg:103},
  'kyler murray': {rank:116, avg:112},
  'jayden reed': {rank:100, avg:102},
  'george kittle': {rank:95, avg:96},
  'jacory croskeymerritt': {rank:126, avg:122},
  'jake ferguson': {rank:115, avg:111},
  'rachaad white': {rank:113, avg:110},
  'josh downs': {rank:110, avg:108},
  'dallas goedert': {rank:118, avg:115},
  'isaiah likely': {rank:107, avg:106},
  'jordan love': {rank:121, avg:118},
  'baker mayfield': {rank:125, avg:121},
  'tyrone tracy': {rank:129, avg:131},
  'xavier worthy': {rank:117, avg:114},
  'jordan mason': {rank:119, avg:117},
  'jayden higgins': {rank:133, avg:135},
  'tyler shough': {rank:124, avg:121},
  'khalil shakir': {rank:132, avg:133},
  'mark andrews': {rank:120, avg:118},
  'tyler allgeier': {rank:152, avg:152},
  'zach charbonnet': {rank:150, avg:149},
  'malik willis': {rank:130, avg:132},
  'chris rodriguez': {rank:131, avg:133},
  'romeo doubs': {rank:127, avg:124},
  'kc concepcion': {rank:128, avg:126},
  'woody marks': {rank:138, avg:141},
  'jonathon brooks': {rank:111, avg:109},
  'jalen coker': {rank:136, avg:140},
  'isiah pacheco': {rank:143, avg:144},
  'matthew golden': {rank:123, avg:121},
  'tyjae spears': {rank:158, avg:156},
  'juwan johnson': {rank:137, avg:141},
  'dylan sampson': {rank:163, avg:168},
  'cj stroud': {rank:140, avg:142},
  'oronde gadsden': {rank:142, avg:143},
  'sam darnold': {rank:134, avg:136},
  'alvin kamara': {rank:160, avg:161},
  'brenton strange': {rank:147, avg:146},
  'rashid shaheed': {rank:139, avg:142},
  'hunter henry': {rank:145, avg:146},
  'keaton mitchell': {rank:148, avg:147},
  'cam ward': {rank:146, avg:146},
  'brian robinson': {rank:162, avg:165},
  'jerry jeudy': {rank:171, avg:174},
  'jauan jennings': {rank:156, avg:155},
  'jonah coleman': {rank:153, avg:152},
  'omar cooper': {rank:159, avg:156},
  'denzel boston': {rank:161, avg:165},
  'tank bigsby': {rank:167, avg:172},
  'braelon allen': {rank:195, avg:196},
  'chig okonkwo': {rank:135, avg:137},
  'bryce young': {rank:154, avg:154},
  'james conner': {rank:217, avg:219},
  'travis hunter': {rank:204, avg:178},
  'daniel jones': {rank:149, avg:149},
  'emanuel wilson': {rank:199, avg:202},
  'dalton schultz': {rank:164, avg:168},
  'jalen mcmillan': {rank:155, avg:154},
  'adonai mitchell': {rank:192, avg:193},
  'kayshon boutte': {rank:200, avg:202},
  'stefon diggs': {rank:141, avg:143},
  'emmett johnson': {rank:184, avg:185},
  'tre\' harris': {rank:191, avg:193},
  'kimani vidal': {rank:207, avg:211},
  'tre tucker': {rank:166, avg:171},
  'deebo samuel': {rank:172, avg:175},
  'troy franklin': {rank:228, avg:228},
  'kenyon sadiq': {rank:144, avg:144},
  'aj barner': {rank:179, avg:181},
  'tj hockenson': {rank:151, avg:150},
  'ryan flournoy': {rank:187, avg:187},
  'brandon aiyuk': {rank:178, avg:180},
  'calvin ridley': {rank:176, avg:179},
  'sean tucker': {rank:182, avg:183},
  'isaac teslaa': {rank:180, avg:182},
  'jaylin noel': {rank:234, avg:234},
  'mike washington': {rank:188, avg:187},
  'jacoby brissett': {rank:168, avg:173},
  'ray davis': {rank:203, avg:208},
  'darnell mooney': {rank:206, avg:210},
  'pat bryant': {rank:237, avg:237},
  'nicholas singleton': {rank:173, avg:178},
  'kaytron allen': {rank:193, avg:193},
  'antonio williams': {rank:169, avg:173},
  'chimere dike': {rank:268, avg:244},
  'gunnar helm': {rank:175, avg:179},
  'jalen nailor': {rank:157, avg:156},
  'jaylen wright': {rank:223, avg:225},
  'de\'zhaun stribling': {rank:196, avg:197},
  'david njoku': {rank:177, avg:180},
  'malik washington': {rank:183, avg:185},
  'terrance ferguson': {rank:202, avg:207},
  'dontayvion wicks': {rank:214, avg:216},
  'tyreek hill': {rank:181, avg:182},
  'ollie gordon': {rank:258, avg:250},
  'elic ayomanor': {rank:284, avg:269},
  'rashod bateman': {rank:241, avg:243},
  'tank dell': {rank:198, avg:198},
  'pat freiermuth': {rank:194, avg:194},
  'ted hurst': {rank:229, avg:229},
  'cade otton': {rank:186, avg:186},
  'germie bernard': {rank:201, avg:206},
  'geno smith': {rank:174, avg:178},
  'zachariah branch': {rank:189, avg:192},
  'cooper kupp': {rank:211, avg:213},
  'marshawn lloyd': {rank:208, avg:212},
  'aaron rodgers': {rank:165, avg:170},
  'colby parkinson': {rank:226, avg:227},
  'devin neal': {rank:283, avg:306},
  'kaleb johnson': {rank:251, avg:257},
  'fernando mendoza': {rank:170, avg:174},
  'trey benson': {rank:296, avg:288},
  'chris bell': {rank:209, avg:212},
  'jack bech': {rank:248, avg:250},
  'eli stowers': {rank:190, avg:192},
  'keon coleman': {rank:215, avg:216},
  'christian kirk': {rank:220, avg:222},
  'demond claiborne': {rank:216, avg:218},
  'evan engram': {rank:219, avg:221},
  'chris brooks': {rank:239, avg:240},
  'malik davis': {rank:282, avg:264},
  'justice hill': {rank:212, avg:214},
  'elijah sarratt': {rank:232, avg:231},
  'tory horton': {rank:243, avg:234},
  'mason taylor': {rank:257, avg:256},
  'jaydon blue': {rank:221, avg:224},
  'isaiah davis': {rank:316, avg:310},
  'ty johnson': {rank:255, avg:248},
  'malachi fields': {rank:210, avg:213},
  'theo johnson': {rank:249, avg:251},
  'dj giddens': {rank:262, avg:254},
  'jordan james': {rank:205, avg:209},
  'seth mcgowan': {rank:348, avg:345},
  'marvin mims': {rank:324, avg:319},
  'mack hollins': {rank:315, avg:309},
  'michael penix': {rank:230, avg:230},
  'najee harris': {rank:260, avg:254},
  'kyle williams': {rank:289, avg:279},
  'samaje perine': {rank:240, avg:242},
  'chris brazzell': {rank:225, avg:226},
  'tyquan thornton': {rank:231, avg:230},
  'george holani': {rank:224, avg:226},
  'tua tagovailoa': {rank:197, avg:197},
  'darius slayton': {rank:269, avg:245},
  'jerome ford': {rank:367, avg:365},
  'greg dulcich': {rank:185, avg:185},
  'brashard smith': {rank:387, avg:385},
  'xavier legette': {rank:287, avg:274},
  'devin singletary': {rank:267, avg:300},
  'oscar delp': {rank:279, avg:260},
  'keenan allen': {rank:256, avg:248},
  'lequint allen': {rank:270, avg:258},
  'kaelon black': {rank:233, avg:231},
  'devaughn vele': {rank:235, avg:234},
  'emari demercado': {rank:271, avg:262},
  'hollywood brown': {rank:263, avg:263},
  'jake tonges': {rank:227, avg:227},
  'mike gesicki': {rank:222, avg:225},
  'adam randall': {rank:247, avg:240},
  'joe mixon': {rank:246, avg:262},
  'shedeur sanders': {rank:213, avg:215},
  'isaac guerendo': {rank:385, avg:383},
  'kirk cousins': {rank:236, avg:237},
  'deshaun watson': {rank:218, avg:219},
  'skyler bell': {rank:261, avg:238},
  'isaiah bond': {rank:295, avg:287},
  'trevor etienne': {rank:311, avg:304},
  'ja\'kobi lane': {rank:245, avg:236},
  'tahj brooks': {rank:301, avg:293},
  'jarquez hunter': {rank:394, avg:392},
  'audric estime': {rank:384, avg:382},
  'andrei iosivas': {rank:265, avg:242},
  'kareem hunt': {rank:254, avg:225},
  'konata mumpfield': {rank:346, avg:342},
  'jalen royals': {rank:309, avg:302},
  'tez johnson': {rank:305, avg:297},
  'calvin austin': {rank:345, avg:341},
  'jj mccarthy': {rank:264, avg:256},
  'cedric tillman': {rank:361, avg:359},
  'max klare': {rank:328, avg:323},
  'darnell washington': {rank:244, avg:246},
  'will shipley': {rank:373, avg:371},
  'luke mccaffrey': {rank:320, avg:314},
  'jahan dotson': {rank:275, avg:264},
  'olamide zaccheaus': {rank:323, avg:318},
  'j\'mari taylor': {rank:349, avg:346},
  'xavier hutchinson': {rank:330, avg:325},
  'caleb douglas': {rank:242, avg:234},
  'tyler higbee': {rank:331, avg:327}
};

// ─── Name matching ─────────────────────────────────────────────────────────────
function normalizeName(n) {
  let s = n.toLowerCase().replace(/[^a-z\s']/g,'').replace(/\s+/g,' ').trim();
  // Strip common suffixes so "Kenneth Walker" matches "Kenneth Walker III"
  s = s.replace(/\s+(i{1,3}|iv|v|jr\.?|sr\.?)$/,'').trim();
  return s;
}

// Consensus rank lookup, built once from CONSENSUS_DATA
const consensusRanks = {};
CONSENSUS_DATA.forEach(([name, rank, pos]) => { consensusRanks[normalizeName(name)] = {rank, pos}; });

// ─── Scoring primitives ─────────────────────────────────────────────────────────
function halfPPR(s) {
  if (!s) return 0;
  let p = 0;
  p += (s.pass_yd||0)*0.04 + (s.pass_td||0)*4 - (s.pass_int||0)*2;
  p += (s.rush_yd||0)*0.1 + (s.rush_td||0)*6;
  p += (s.rec_yd||0)*0.1 + (s.rec_td||0)*6 + (s.rec||0)*0.5;
  p -= (s.fum_lost||0)*2;
  return Math.max(0, p);
}

function norm(arr, key) {
  const vals = arr.map(p => p[key]);
  const mn = Math.min(...vals), mx = Math.max(...vals), range = mx - mn || 1;
  arr.forEach(p => p['_n_'+key] = (p[key]-mn)/range);
}

function consistScore(wpts) {
  if (wpts.length < 2) return 0.5;
  const mean = wpts.reduce((a,b)=>a+b,0)/wpts.length;
  if (mean < 0.5) return 0;
  const sd = Math.sqrt(wpts.reduce((a,b)=>a+(b-mean)**2,0)/wpts.length);
  return Math.max(0, 1 - (sd/mean)*0.6);
}

// Sleeper's weekly stats objects use the pattern {stat}_rz_{qualifier} for
// red-zone fields. rush_rz_att and rec_rz_tgt were confirmed directly against
// a live response (2026-07); pass_rz_att/pass_rz_td/rush_rz_td follow the same
// naming convention but haven't been directly observed on a QB object yet.
function rzFields(s) {
  if (!s) return {rzRushAtt:0, rzRecTgt:0, rzPassAtt:0, rzPassTd:0, rzRushTd:0};
  return {
    rzRushAtt: s.rush_rz_att || 0,
    rzRecTgt:  s.rec_rz_tgt  || 0,
    rzPassAtt: s.pass_rz_att || 0,
    rzPassTd:  s.pass_rz_td  || 0,
    rzRushTd:  s.rush_rz_td  || 0,
  };
}

// ─── Position scoring models ─────────────────────────────────────────────────────
// QB: pts/game 30%, completion% 15%, pass att/g 15%, RZ pass TD 15%, RZ pass att 10%,
//     rush att/g 10%, RZ rush att 5%
// Expects each player to carry: ppg, cmpPct_raw, passAttPG_raw, rushAttPG_raw,
//     rzPassAtt_raw, rzPassTd_raw, rzRushAtt_raw
function scoreQB(qbs) {
  if (!qbs.length) return;
  ['ppg','cmpPct_raw','passAttPG_raw','rushAttPG_raw','rzPassAtt_raw','rzPassTd_raw','rzRushAtt_raw'].forEach(k=>norm(qbs,k));
  qbs.forEach(p => {
    p.score = Math.round((
      p._n_ppg*0.30 +
      p._n_cmpPct_raw*0.15 +
      p._n_passAttPG_raw*0.15 +
      p._n_rzPassTd_raw*0.15 +
      p._n_rzPassAtt_raw*0.10 +
      p._n_rushAttPG_raw*0.10 +
      p._n_rzRushAtt_raw*0.05
    )*100);
  });
}

// RB: RZ touches 30%, pts/game 25%, target share 20%, RZ target% 15%, consistency 10%
// Expects: ppg, tgtShare_raw, rzTouches, rzTgtPct_raw, consist_raw
function scoreRB(rbs) {
  if (!rbs.length) return;
  ['ppg','tgtShare_raw','rzTouches','rzTgtPct_raw','consist_raw'].forEach(k=>norm(rbs,k));
  rbs.forEach(p => {
    p.score = Math.round((
      p._n_rzTouches*0.30+
      p._n_ppg*0.25+
      p._n_tgtShare_raw*0.20+
      p._n_rzTgtPct_raw*0.15+
      p._n_consist_raw*0.10
    )*100);
  });
}

// WR/TE: target share 30%, RZ target% 25%, pts/game 25%, RZ touches 10%, consistency 10%
// Expects: ppg, tgtShare_raw, rzTouches, rzTgtPct_raw, consist_raw
function scoreWRTE(players) {
  if (!players.length) return;
  ['ppg','tgtShare_raw','rzTouches','rzTgtPct_raw','consist_raw'].forEach(k=>norm(players,k));
  players.forEach(p => {
    p.score = Math.round((
      p._n_tgtShare_raw*0.30+
      p._n_rzTgtPct_raw*0.25+
      p._n_ppg*0.25+
      p._n_rzTouches*0.10+
      p._n_consist_raw*0.10
    )*100);
  });
}

// Scores every position group in `players` in place, then assigns modelRank
// (1 = best) within each position group.
// ─── Injury risk ─────────────────────────────────────────────────────────────
// Games played over the last three seasons for players with a known recent
// injury history. Weighted availability: 2025=50%, 2024=30%, 2023=20%.
const INJURY_GP = {
  'christian mccaffrey':[16,8,8],'tua tagovailoa':[13,12,12],
  'travis etienne':[17,10,14],'kyren williams':[12,14,15],
  'tj hockenson':[10,4,9],'davante adams':[17,16,14],
  'rashee rice':[8,4,14],'george kittle':[13,16,14],
  'mark andrews':[12,5,13],'cooper kupp':[7,6,12],
  'mike evans':[17,17,16],'stefon diggs':[17,5,0],
  'tyreek hill':[17,17,12],'deebo samuel':[12,10,11],
  'dk metcalf':[17,15,16],'jordan love':[16,11,14],
  'jalen hurts':[15,15,15],'brock purdy':[16,17,15],
  'dak prescott':[17,11,16],'saquon barkley':[16,14,17],
  'breece hall':[10,14,15],'javonte williams':[8,17,14],
  'michael pittman':[17,16,13],'zach charbonnet':[16,13,13],
  'rhamondre stevenson':[13,13,13],'dallas goedert':[12,12,14],
  'austin ekeler':[10,16,14],
};

// Returns null pct for anyone not in INJURY_GP — callers must not assume a
// player is at risk just because they're untracked.
function injuryScore(name) {
  const key=normalizeName(name);
  const d=INJURY_GP[key];
  if(!d) return {pct:null,label:'—',color:'var(--muted)',gp:null};
  const w=Math.round(((d[2]||0)*0.50+(d[1]||0)*0.30+(d[0]||0)*0.20)/17*100);
  const label=w>=80?'Healthy':w>=60?'Moderate':'Risky';
  const color=w>=80?'var(--accent)':w>=60?'var(--amber)':'var(--red)';
  return {pct:w, label, color, gp:d};
}

// Converts weighted availability % into a score multiplier. Capped so even a
// worst-case-tracked player (0% availability) only loses 30% of their score —
// this is a risk adjustment, not a disqualification. Untracked players (pct
// null) get a multiplier of 1 — no assumed risk without data.
function injuryMultiplier(pct) {
  if (pct==null) return 1;
  return 0.7 + 0.3*(pct/100);
}

function applyInjuryModifier(players) {
  players.forEach(p => {
    const {pct} = injuryScore(p.name);
    p.score = Math.round(p.score * injuryMultiplier(pct));
  });
}

function scoreAllPositions(players) {
  scoreQB(players.filter(p=>p.pos==='QB'));
  scoreRB(players.filter(p=>p.pos==='RB'));
  scoreWRTE(players.filter(p=>p.pos==='WR'));
  scoreWRTE(players.filter(p=>p.pos==='TE'));
  applyInjuryModifier(players);
  ['QB','RB','WR','TE'].forEach(pos => {
    const g = [...players.filter(p=>p.pos===pos)].sort((a,b)=>b.score-a.score);
    g.forEach((p,i)=>{ p.modelRank = i+1; });
  });
}

// ─── Consensus / ADP / edge assignment ───────────────────────────────────────────
// Sets p.consensusRank from the baked-in CONSENSUS_DATA (999 = not ranked).
function assignConsensus(players) {
  players.forEach(p => {
    const cr = consensusRanks[normalizeName(p.name)];
    p.consensusRank = cr ? cr.rank : 999;
  });
}

// Sets p.adpRank / p.adpAvg from the baked-in ADP_DATA, and a sequential
// p.adpDisplayRank (1,2,3... no gaps) among players that have an ADP entry.
function assignAdp(players) {
  players.forEach(p => {
    const entry = ADP_DATA[normalizeName(p.name)] || null;
    p.adpRank = entry ? entry.rank : null;
    p.adpAvg = entry ? entry.avg : null;
  });
  const byAdp = [...players].filter(p=>p.adpRank!=null).sort((a,b)=>a.adpRank-b.adpRank);
  byAdp.forEach((p,i)=>{ p.adpDisplayRank = i+1; });
  players.filter(p=>p.adpRank==null).forEach(p=>{ p.adpDisplayRank = null; });
}

// edge% = (consensus rank − model rank) ÷ total players × 100, dampened for
// players outside the top 250 consensus (50% weight 151-250, 0% beyond 250).
// Requires p.consensusRank and p.modelRank to already be set.
function computeEdge(players) {
  const total = players.length;
  players.forEach(p => {
    const consensusUsed = p.consensusRank < 999 ? p.consensusRank : 200;
    const rawEdge = consensusUsed - p.modelRank;
    const dampen = consensusUsed<=150 ? 1 : consensusUsed<=250 ? 0.5 : 0;
    p.edge = Math.round(rawEdge/total*100*dampen);
  });
}

// ─── Sleeper API fetch helpers ───────────────────────────────────────────────────
// Active QB/RB/WR/TE with a team, keyed by player_id.
async function fetchSleeperPlayerMeta() {
  const r = await fetch('https://api.sleeper.app/v1/players/nfl');
  const d = await r.json();
  const meta = {};
  Object.values(d).forEach(p => {
    if (p.active && ['QB','RB','WR','TE'].includes(p.position) && p.team) {
      meta[p.player_id] = { name:`${p.first_name||''} ${p.last_name||''}`.trim(), pos:p.position, team:p.team };
    }
  });
  return meta;
}

// All 18 regular-season weeks of stats, one fetch per week, missing/failed weeks
// resolve to {} rather than rejecting.
async function fetchSleeperSeasonStats(season) {
  const weeks = Array.from({length:18},(_,i)=>i+1);
  return Promise.all(
    weeks.map(w => fetch(`https://api.sleeper.app/v1/stats/nfl/regular/${season}/${w}`)
      .then(r=>r.ok?r.json():{}).catch(()=>({})))
  );
}

// ─── Trade value ─────────────────────────────────────────────────────────────
// Converts consensus rank into a decaying value scale, so a gap at the top of
// the board (rank 1 vs rank 12) matters far more than an equally-sized gap
// deep in the board (rank 200 vs rank 212) — the same shape real trade
// calculators use. Unranked players are treated as replacement-level (rank 300,
// the bottom of the consensus board) rather than worthless.
function tradeValue(consensusRank) {
  const rank = (consensusRank!=null && consensusRank<999) ? consensusRank : 300;
  return Math.round(1000/(rank+10));
}
