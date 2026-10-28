// ─────────────────────────────────────────────────────────────
// CouplesAI Portrait Generator — DATA FILE
// Edit this file to add worlds, update tensions, tweak wardrobe.
//
// Structure:
//   WORLDS               — 35 world objects (id, name, sub, color,
//                          tensions[20], locs[50+], poses[50+],
//                          looks[50+], affinities{})
//   ERAS                 — Era filter pills
//   CONNECTORS           — World-specific connector words
//   TEMPLATES            — 5 rewrite variant functions
//   MOOD_WORLDS_LIGHTING_AI — Worlds that auto-set lighting to AI
//   LIGHTING_OPTIONS     — Lighting dropdown values
//   SHOT_OPTIONS         — Shot type dropdown values
//   RATIOS               — Aspect ratio options
//   SUBJECTS             — Solo / Couple / Group options
//   SOLO_POSES           — Pose list when Solo is selected
//   GROUP_POSES          — Pose list when Group is selected
//   TENSION_TRANSLATIONS — Maps tension keys to cinematic phrases
//
// To add a world: append a new object to WORLDS following the
// same schema, add its tensions to TENSION_TRANSLATIONS, and
// add a connector pool to CONNECTORS.
// ─────────────────────────────────────────────────────────────

const WORLDS = [
  {
    "id": "road",
    "name": "THE ROAD",
    "sub": "Speed & Distance",
    "color": "#d4922a",
    "tensions": [
      "motion vs. stillness",
      "leaving vs. arriving",
      "speed vs. weight",
      "freedom vs. direction",
      "drift vs. purpose",
      "chasing vs. fleeing",
      "journey vs. destination",
      "open vs. closed",
      "fuel vs. fumes",
      "fast vs. forgotten",
      "running from vs. running toward",
      "engine vs. silence",
      "throttle vs. brake",
      "horizon vs. past",
      "asphalt vs. sky",
      "distance vs. closeness",
      "moving vs. rooted",
      "escape vs. return",
      "forward vs. nowhere",
      "controlled vs. abandoned"
    ],
    "locs": [
      "desert highway at dusk heat shimmer",
      "empty highway rest stop",
      "wet asphalt overpass night reflection",
      "mountain switchback edge vertiginous",
      "motorway at night light trails",
      "freeway on-ramp shoulder",
      "interstate service road empty",
      "empty airstrip tarmac heat",
      "state highway no buildings horizon",
      "Route 66 desert diner exterior",
      "Route 66 motel sign rusted",
      "Route 66 filling station abandoned",
      "road tunnel exit light end",
      "bridge expansion joint middle",
      "highway billboard empty",
      "level crossing arms down alone",
      "toll booth abandoned",
      "weigh station closed",
      "truck stop empty 3am",
      "drive-in movie screen empty",
      "car wash tunnel entrance",
      "highway flyover construction",
      "motorway service park dark",
      "roundabout centre at dawn",
      "main road empty market town",
      "B-road countryside both verges",
      "coastal highway cliff edge",
      "mountain pass summit road",
      "valley road river beside",
      "forest road canopy over",
      "desert road mirage ahead",
      "dirt road becoming tarmac",
      "gravel road end tarmac starts",
      "North American highway billboard",
      "Australian outback highway road train track",
      "Irish bog road endless narrow",
      "Scottish single-track passing place",
      "Norwegian fjord road tunnel",
      "Icelandic ring road empty",
      "New Zealand coastal highway",
      "South African coastal road",
      "Patagonian ruta 40 gravel",
      "Chilean carretera austral",
      "Bolivian salar crossing white",
      "Brazilian BR-116 jungle edge",
      "Colombian Pan-American mountain",
      "Peru Cusco mountain road",
      "Mexico highway free road",
      "Trans-Siberian highway winter",
      "Silk Road Kyrgyzstan pass"
    ],
    "poses": [
      "both on motorcycles helmets off roadside",
      "sprinting along highway median",
      "one on car hood one leaning beside",
      "sitting on road shoulder backs to road",
      "jogging the center line ahead of nothing",
      "one behind wheel one head out window driving",
      "both leaning on car roof looking at map",
      "silhouette on road at golden hour walking",
      "one standing on car roof other watches",
      "both arms out in middle of empty road",
      "one sleeping in car other driving night road",
      "looking at each other across center line",
      "back-to-back on hood of stopped car",
      "both walking away from car broken down",
      "one picking up other's hitching thumb pulled over",
      "walking beside road single file",
      "both watching approaching headlights in dark",
      "looking back down road just driven",
      "one pointing at destination sign other notes",
      "sitting on railing bridge below river",
      "running from car about to be stolen laughing",
      "dancing on empty road 3am",
      "both lying on road at night stars above",
      "one under car other handing tools up",
      "thumbs up hitching side by side both",
      "back-to-back at junction different ways tempted",
      "both looking at atlas spread on roof",
      "pushing car both hands on boot",
      "one steering wheel leaning out other pushes",
      "watching sun rise over highway ahead",
      "both reading road sign at junction confused",
      "selfie stick out window driving both",
      "both pumping gas different pumps",
      "buying snack convenience store doorway",
      "sitting on wall layby views both",
      "one on wing mirror other standing close",
      "both watching road train pass enormous",
      "running between lanes of stationary traffic",
      "one foot on curb rest area both looking at map",
      "parallel walking painted lines",
      "one writing on steamed car window",
      "sitting on car bonnet eating gas station food",
      "both watching flat tyre being changed roadside",
      "looking at speedometer together"
    ],
    "looks": [
      "riding leathers helmets hanging both",
      "biker jackets dark jeans both",
      "slim cargo pants ribbed tanks both",
      "raw denim plain white tees both",
      "moto jackets fitted tees both",
      "road trip flannel shirt jeans each",
      "travel clothes comfortable layers each",
      "highway worn denim jacket tee each",
      "vintage tour tee and jeans both",
      "baseball cap road shirt jeans each",
      "zip-up hoodie jeans sneakers each",
      "driving jacket slim trousers each",
      "trucker jacket tee cords each",
      "band tee road-worn jeans each",
      "light windbreaker tee slim jeans each",
      "denim shirt jeans double-denim both",
      "simple tee and worn jeans both essential",
      "travelling light dress and shirt each",
      "oversized tee joggers comfortable journey both",
      "road-worn plaid shirt jeans both",
      "simple white tee and black jeans both",
      "classic bomber tee slim jeans both",
      "navy cotton chinos and tee each",
      "khaki trousers button shirt each",
      "printed camp shirt jeans each",
      "worn chino shorts tee slip-ons each summer road",
      "vintage sport jacket tee jeans both",
      "prep cardigan shirt chinos each",
      "light rain jacket base layer jeans each",
      "coloured denim and simple tee each",
      "Levi's and tee quintessential road both",
      "travel polo slim trousers each smart",
      "matching printed co-ords travel each",
      "linen pants simple tee warm road each",
      "jeans and cowboy boot shirt each",
      "tank top and cut-off shorts summer road each",
      "quilted gilet tee slim jeans each",
      "zip hoodie sweatpants road comfortable each",
      "wide leg trousers crop top each",
      "leather driving gloves jacket slim pants each",
      "motorcycle-inspired jacket and jeans both",
      "vintage American sports gear both",
      "bandana shirt jeans boots both western road",
      "windproof vest tee slim pants each",
      "cargo shorts tee hiking shoes road-trip each",
      "simple dress and casual shirt road warm each"
    ],
    "affinities": {
      "motion vs. stillness": {
        "locs": [
          "desert highway at dusk",
          "long straight flat road",
          "salt flat highway",
          "empty airstrip",
          "two-lane blacktop at sunset"
        ],
        "poses": [
          "both staring down empty road",
          "silhouette walk toward horizon",
          "side by side sunset silhouette",
          "lying flat on warm asphalt",
          "standing in headlight beam"
        ],
        "looks": [
          "raw denim plain white tees",
          "sun-faded denim sets",
          "fitted tees slim jeans",
          "worn jeans open flannels",
          "slim cargo pants ribbed tanks"
        ]
      },
      "leaving vs. arriving": {
        "locs": [
          "desert crossroads",
          "rural crossroads at dawn",
          "mountain pass summit",
          "empty highway rest stop",
          "bridge mid-span"
        ],
        "poses": [
          "walking away on asphalt",
          "both facing away on empty road",
          "back-to-back at crossroads",
          "hand held run toward horizon",
          "side by side sunset silhouette"
        ],
        "looks": [
          "worn jeans open flannels",
          "sun-faded denim sets",
          "biker jackets dark jeans",
          "raw denim plain white tees",
          "slim cargo pants ribbed tanks"
        ]
      },
      "speed vs. weight": {
        "locs": [
          "dragstrip start line",
          "race track pit lane",
          "abandoned race circuit",
          "tarmac airfield perimeter",
          "race circuit backstraight"
        ],
        "poses": [
          "mid-wheelie on highway",
          "back wheel skid freeze",
          "both on motorcycles helmets off",
          "racing on adjacent lanes",
          "road dust mid-sprint cloud"
        ],
        "looks": [
          "racing suits unzipped at waist",
          "riding leathers helmets off",
          "biker jackets dark jeans",
          "moto jackets fitted tees",
          "fitted tees slim jeans"
        ]
      },
      "freedom vs. direction": {
        "locs": [
          "desert crossroads",
          "salt flat highway",
          "empty airstrip",
          "two-lane blacktop at sunset",
          "long straight flat road"
        ],
        "poses": [
          "arms wide on open road",
          "spinning in intersection",
          "both facing away on empty road",
          "silhouette walk toward horizon",
          "arms out in open convertible"
        ],
        "looks": [
          "sun-faded denim sets",
          "worn jeans open flannels",
          "cargo shorts worn cotton tops",
          "raw denim plain white tees",
          "sun-bleached tees shorts"
        ]
      },
      "drift vs. purpose": {
        "locs": [
          "desert highway at dusk",
          "rural highway at midnight",
          "motorway at night",
          "highway flyover at night",
          "elevated highway bend"
        ],
        "poses": [
          "leaning into corner on bike",
          "back wheel skid freeze",
          "mid-wheelie on highway",
          "road dust mid-sprint cloud",
          "one steering one arms-out passenger"
        ],
        "looks": [
          "riding leathers helmets off",
          "racing suits unzipped at waist",
          "moto jackets fitted tees",
          "biker jackets dark jeans",
          "battered leather dark pants"
        ]
      },
      "chasing vs. fleeing": {
        "locs": [
          "motorway at night",
          "freeway on-ramp shoulder",
          "highway flyover at night",
          "rural highway at midnight",
          "elevated highway bend"
        ],
        "poses": [
          "running from car toward camera",
          "running ahead of headlights",
          "racing the oncoming lights",
          "dust cloud exit run",
          "road dust mid-sprint cloud"
        ],
        "looks": [
          "fitted tees slim jeans",
          "raw denim plain white tees",
          "slim cargo pants ribbed tanks",
          "sun-bleached tees shorts",
          "worn cotton tees shorts"
        ]
      },
      "journey vs. destination": {
        "locs": [
          "empty highway rest stop",
          "rest stop at 3am",
          "truck stop forecourt",
          "mountain pass summit",
          "desert service station"
        ],
        "poses": [
          "sitting on road shoulder backs out",
          "sitting face to face on asphalt",
          "leaning on hood engine cooling",
          "knees on gravel tired",
          "dawn road sprint together"
        ],
        "looks": [
          "worn jeans open flannels",
          "sun-faded denim sets",
          "canvas jackets cargo shorts",
          "sun-bleached tees shorts",
          "mechanic shirts ripped jeans"
        ]
      },
      "open vs. closed": {
        "locs": [
          "salt flat highway",
          "desert highway at dusk",
          "long straight flat road",
          "empty airstrip",
          "two-lane blacktop at sunset"
        ],
        "poses": [
          "arms wide on open road",
          "both staring down empty road",
          "silhouette walk toward horizon",
          "side by side sunset silhouette",
          "both facing away on empty road"
        ],
        "looks": [
          "raw denim plain white tees",
          "cargo shorts worn cotton tops",
          "sun-faded denim sets",
          "worn jeans open flannels",
          "slim cargo pants ribbed tanks"
        ]
      },
      "fuel vs. fumes": {
        "locs": [
          "pre-dawn gas station",
          "truck stop forecourt",
          "desert service station",
          "highway weigh station",
          "industrial port road"
        ],
        "poses": [
          "leaning on hood engine cooling",
          "one on car hood one leaning",
          "peering over dashboard together",
          "sitting on barrier highway behind",
          "standing in headlight beam"
        ],
        "looks": [
          "mechanic shirts ripped jeans",
          "oil-stained coveralls unzipped",
          "work boots slim cargos",
          "mechanic overalls half off",
          "open overalls simple tee underneath"
        ]
      },
      "fast vs. forgotten": {
        "locs": [
          "abandoned race circuit",
          "rest stop at 3am",
          "rural highway at midnight",
          "empty toll booth lane",
          "highway weigh station"
        ],
        "poses": [
          "sitting face to face on asphalt",
          "lying flat on warm asphalt",
          "both staring down empty road",
          "knees on gravel tired",
          "seated on road centerline"
        ],
        "looks": [
          "worn jeans open flannels",
          "sun-faded denim sets",
          "faded band tees dark chinos",
          "road-worn leather vests tees",
          "patched denim jackets tees"
        ]
      },
      "running from vs. running toward": {
        "locs": [
          "desert highway at dusk",
          "motorway at night",
          "freeway on-ramp shoulder",
          "mountain road hairpin",
          "flooded road section"
        ],
        "poses": [
          "running from car toward camera",
          "running ahead of headlights",
          "hand held sprint together",
          "side by side at full sprint",
          "sprinting along highway median"
        ],
        "looks": [
          "fitted tees slim jeans",
          "slim cargo pants ribbed tanks",
          "raw denim plain white tees",
          "sun-bleached tees shorts",
          "worn cotton tees shorts"
        ]
      },
      "engine vs. silence": {
        "locs": [
          "empty airstrip",
          "salt flat highway",
          "desert crossroads",
          "rest stop at 3am",
          "mountain pass summit"
        ],
        "poses": [
          "sitting on road shoulder backs out",
          "both staring down empty road",
          "lying flat on warm asphalt",
          "side by side sunset silhouette",
          "seated on road centerline"
        ],
        "looks": [
          "sun-faded denim sets",
          "worn jeans open flannels",
          "raw denim plain white tees",
          "fitted tees slim jeans",
          "slim cargo pants ribbed tanks"
        ]
      },
      "throttle vs. brake": {
        "locs": [
          "race track pit lane",
          "dragstrip start line",
          "mountain road hairpin",
          "abandoned race circuit",
          "race circuit backstraight"
        ],
        "poses": [
          "mid-wheelie on highway",
          "back wheel skid freeze",
          "racing on adjacent lanes",
          "leaning into corner on bike",
          "road dust mid-sprint cloud"
        ],
        "looks": [
          "racing suits unzipped at waist",
          "riding leathers helmets off",
          "moto jackets fitted tees",
          "biker jackets dark jeans",
          "fitted tees slim jeans"
        ]
      },
      "horizon vs. past": {
        "locs": [
          "desert highway at dusk",
          "two-lane blacktop at sunset",
          "salt flat highway",
          "long straight flat road",
          "desert crossroads"
        ],
        "poses": [
          "walking away on asphalt",
          "both facing away on empty road",
          "silhouette walk toward horizon",
          "hand held run toward horizon",
          "looking back over shoulder together"
        ],
        "looks": [
          "sun-faded denim sets",
          "worn jeans open flannels",
          "raw denim plain white tees",
          "slim cargo pants ribbed tanks",
          "faded band tees dark chinos"
        ]
      },
      "asphalt vs. sky": {
        "locs": [
          "empty airstrip",
          "salt flat highway",
          "desert highway at dusk",
          "two-lane blacktop at sunset",
          "mesa rim road"
        ],
        "poses": [
          "lying flat on warm asphalt",
          "arms wide on open road",
          "arms out in open convertible",
          "silhouette walk toward horizon",
          "crouching at road level car behind"
        ],
        "looks": [
          "raw denim plain white tees",
          "cargo shorts worn cotton tops",
          "sun-bleached tees shorts",
          "sun-faded denim sets",
          "fitted tees slim jeans"
        ]
      },
      "distance vs. closeness": {
        "locs": [
          "bridge mid-span",
          "desert crossroads",
          "rural crossroads at dawn",
          "mountain pass summit",
          "empty highway rest stop"
        ],
        "poses": [
          "hands on each other roadside",
          "sitting face to face on asphalt",
          "both staring down empty road",
          "side by side sunset silhouette",
          "back-to-back at crossroads"
        ],
        "looks": [
          "worn jeans open flannels",
          "raw denim plain white tees",
          "sun-faded denim sets",
          "slim cargo pants ribbed tanks",
          "fitted tees slim jeans"
        ]
      },
      "moving vs. rooted": {
        "locs": [
          "desert crossroads",
          "rural crossroads at dawn",
          "long straight flat road",
          "empty highway rest stop",
          "bridge mid-span"
        ],
        "poses": [
          "standing in headlight beam",
          "spinning in intersection",
          "side by side at full sprint",
          "silhouette walk toward horizon",
          "both staring down empty road"
        ],
        "looks": [
          "fitted tees slim jeans",
          "raw denim plain white tees",
          "slim cargo pants ribbed tanks",
          "worn jeans open flannels",
          "sun-faded denim sets"
        ]
      },
      "escape vs. return": {
        "locs": [
          "mountain pass summit",
          "desert crossroads",
          "rural crossroads at dawn",
          "bridge mid-span",
          "long straight flat road"
        ],
        "poses": [
          "walking away on asphalt",
          "looking back over shoulder together",
          "back-to-back at crossroads",
          "hand held run toward horizon",
          "both facing away on empty road"
        ],
        "looks": [
          "worn jeans open flannels",
          "biker jackets dark jeans",
          "raw denim plain white tees",
          "sun-faded denim sets",
          "slim cargo pants ribbed tanks"
        ]
      },
      "forward vs. nowhere": {
        "locs": [
          "desert highway at dusk",
          "salt flat highway",
          "long straight flat road",
          "empty airstrip",
          "rural highway at midnight"
        ],
        "poses": [
          "both staring down empty road",
          "silhouette walk toward horizon",
          "side by side sunset silhouette",
          "lying flat on warm asphalt",
          "seated on road centerline"
        ],
        "looks": [
          "sun-faded denim sets",
          "worn jeans open flannels",
          "raw denim plain white tees",
          "slim cargo pants ribbed tanks",
          "faded band tees dark chinos"
        ]
      },
      "controlled vs. abandoned": {
        "locs": [
          "abandoned race circuit",
          "race track pit lane",
          "dragstrip start line",
          "mountain road hairpin",
          "desert service station"
        ],
        "poses": [
          "back wheel skid freeze",
          "mid-wheelie on highway",
          "road dust mid-sprint cloud",
          "leaning into corner on bike",
          "racing on adjacent lanes"
        ],
        "looks": [
          "racing suits unzipped at waist",
          "riding leathers helmets off",
          "moto jackets fitted tees",
          "biker jackets dark jeans",
          "open overalls simple tee underneath"
        ]
      }
    },
    "promptSuffix": "Colour grade: sun-bleached, high contrast, the palette of asphalt and horizon. The road itself should dominate the frame."
  },
  {
    "id": "water",
    "name": "THE WATER",
    "sub": "Depth & Surface",
    "color": "#2a8fc4",
    "tensions": [
      "surface vs. depth",
      "breath vs. drowning",
      "cold vs. warmth",
      "float vs. sink",
      "control vs. current",
      "still vs. surge",
      "seen vs. submerged",
      "rhythm vs. chaos",
      "weight vs. lift",
      "held vs. swept",
      "calm vs. undertow",
      "oxygen vs. pressure",
      "shore vs. open sea",
      "wave vs. stillness",
      "glass vs. churn",
      "tidal vs. still",
      "shallow vs. abyss",
      "fluid vs. rigid",
      "surrender vs. fight",
      "visible vs. invisible"
    ],
    "locs": [
      "ocean at horizon golden hour",
      "empty pool at dawn",
      "harbor pier edge",
      "cliff above ocean",
      "surf break line",
      "sea cave entrance low tide",
      "rocky tidal pool exposed",
      "kelp forest shallows",
      "lake at first light still water",
      "waterfall base mist rising",
      "river bend at dusk",
      "open sea swell no land",
      "estuary at golden hour",
      "coral reef shallows clear",
      "mountain lake snow-edged",
      "mangrove channel slow water",
      "delta mouth wide sky",
      "ocean trench research vessel deck",
      "fjord still water reflection",
      "reservoir concrete dam edge",
      "hot spring sulfur mist",
      "geyser field Iceland",
      "alpine lake turquoise",
      "cenote entrance Mexico",
      "limestone pool Halong Bay",
      "infinity pool edge ocean drop",
      "lido pool 1930s architecture",
      "sea loch Scotland mist",
      "frozen lake crack line",
      "lagoon atoll Pacific",
      "beach at low tide sandbars",
      "submerged ruins shallow water",
      "rain-swollen river bank",
      "dam spillway roar",
      "canal Venice dawn",
      "Venice canal gondola point",
      "tide pool Oregon coast",
      "Amazon tributary dawn",
      "Lake Baikal winter ice",
      "Lake Titicaca reed island",
      "Dead Sea float horizon",
      "Maldives lagoon clear",
      "Irish sea cliffs base",
      "Sardinia grotto entrance",
      "Faroe Islands sea stack",
      "Iceland black sand waves",
      "Nile at dusk feluccas",
      "Ganges ghat at dawn",
      "Thames at low tide mud",
      "Hudson River pier dusk"
    ],
    "poses": [
      "mid-dive off sea cliff arms back",
      "treading water face to face",
      "one pulling other from surf",
      "emerging from pool together",
      "surfing same wave crouched",
      "floating on backs hands touching",
      "diving underwater toward each other",
      "one swimming other watching from jetty",
      "both running into waves",
      "sitting on jetty feet in water",
      "one lifting other above waterline",
      "back-to-back floating",
      "chin-deep water eye contact",
      "one catching other off diving board",
      "swimming parallel underwater",
      "sitting on pool edge one in water",
      "both knee-deep in surf scanning horizon",
      "one pulling other by hand through shallows",
      "silhouette against backlit water surface",
      "both lying on water surface arms wide",
      "one behind other arms wrapped standing chest-deep",
      "both leaning over pool edge looking down",
      "one standing on rocks other in water below",
      "racing each other through shallows",
      "both waist-deep facing the same wave",
      "one lifting other above breaking wave",
      "both shielding eyes looking out to sea",
      "one on shoulders of other chest-deep",
      "sitting side by side on harbour wall feet dangling",
      "one holding other above waterfall pool",
      "both lying on inflatable raft open water",
      "diving together off low dock hand-in-hand",
      "one teaching other to swim shallow end",
      "both pressed against pool wall breathing",
      "one pointing at something beneath surface other looks",
      "back-to-back treading water",
      "both mid-laugh water fight splashing",
      "one wringing out wet hair other watching",
      "both wading carefully through rocky shallows",
      "one helping other over slippery rocks",
      "both looking up from underwater surface tension",
      "lying flat on surfboard watching horizon",
      "one behind other on paddleboard both paddling",
      "both sitting on sea wall sunset behind",
      "one jumping off pier other already in water",
      "both emerging from cave pool blinking",
      "crouched examining tidal pool together",
      "both sprinting into cold ocean yelping"
    ],
    "looks": [
      "swimsuits rash guard over hers board shorts over his",
      "matching black swimsuits minimal",
      "one-piece swimsuit and swim shorts",
      "bikini top shorts and swim trunks open shirt",
      "athletic swimwear both streamlined",
      "wetsuit peeled to waist both",
      "surf shorts and bikini top casual",
      "swim dress and board shorts both loose",
      "matching coloured swimsuits simple block colour",
      "tank swimsuit and fitted swim shorts",
      "water polo suit and swim briefs competitive",
      "long-sleeve rash guard and swim trunks both",
      "colourful printed bikini and matching print trunks",
      "bandeau swimsuit and swim shorts neutral",
      "sport swimsuit and jammers athletic",
      "cut-out swimsuit and board shorts",
      "metallic swimsuit and trunks editorial",
      "vintage high-waist swimsuit and retro trunks",
      "string bikini and string tie trunks minimal",
      "sports bra and swim shorts activewear",
      "sheer cover-up and swim shorts over swimwear",
      "wetsuit full both shore-ready",
      "dive skin suit both fitted",
      "snorkel gear on heads swimwear under",
      "linen shirt open over swimsuit and trunks beach casual",
      "sarong tied over swimsuit board shorts",
      "sun-faded swimwear worn natural",
      "bright tropical print both matching",
      "navy blue swimwear classic pair",
      "mesh panel swimsuit and swim trunks fashion",
      "swimwear with waterproof watch both nautical",
      "competitive swimwear both race-ready",
      "bikini and swim briefs minimal editorial",
      "longboard shorts and sports bra surf ready",
      "both in soaked cotton whites over swimwear",
      "thermal wetsuit hood down both cold water",
      "freediving suit both sleek",
      "open-back swimsuit and low-rise trunks",
      "print bikini and solid trunks mixed",
      "float vest over swimsuit safety-conscious",
      "swimwear with anklet and rope bracelet each",
      "ribbed swimsuit and ribbed trunks matching texture",
      "cut-off denim over swimwear both post-swim",
      "sun shirt over swimsuit trunks beach practical",
      "bright yellow swimsuit and yellow trunks bold",
      "earth tone swimwear both natural palette",
      "swimwear and baseball cap both sun-protection",
      "both in soaked linen shirts over swimwear emerged"
    ],
    "affinities": {
      "surface vs. depth": {
        "locs": [
          "ocean at horizon",
          "open sea no land visible",
          "deep lake mid-surface",
          "fjord wall base",
          "open ocean swell"
        ],
        "poses": [
          "both underwater looking up",
          "one submerged one above",
          "floating face up touching",
          "both floating on backs hands linked",
          "mid-ocean tread staring"
        ],
        "looks": [
          "swimwear and coverup",
          "competitive swimwear",
          "athletic swimsuits pool deck",
          "technical swim shorts rash vest",
          "dive skins and vest"
        ]
      },
      "breath vs. drowning": {
        "locs": [
          "open sea no land visible",
          "river rapid entry",
          "sea wall at storm",
          "surf break line",
          "tidal bore channel"
        ],
        "poses": [
          "both gasping surface break",
          "one pulling other from water",
          "open water rescue hold",
          "tangled in surf mid-tumble",
          "river current fight"
        ],
        "looks": [
          "swimwear and coverup",
          "board shorts rash guards",
          "surf swimsuits rash guard",
          "wetsuit tops boardshorts",
          "triathlon suits"
        ]
      },
      "cold vs. warmth": {
        "locs": [
          "lake ice edge",
          "mountain tarn",
          "glacial melt lake",
          "thermal spring pool",
          "coastal cave mouth"
        ],
        "poses": [
          "entering thermal pool",
          "both gasping surface break",
          "one pulling other from water",
          "chest deep facing each other",
          "holding breath underwater together"
        ],
        "looks": [
          "thermal wetsuit",
          "spring suit wetsuit",
          "wetsuit open to waist",
          "competitive swimwear",
          "soaked training gear"
        ]
      },
      "float vs. sink": {
        "locs": [
          "empty pool at dawn",
          "lake flat calm",
          "deep lake mid-surface",
          "ocean platform surface",
          "saltwater lake shore"
        ],
        "poses": [
          "floating face up touching",
          "both floating on backs hands linked",
          "arms spread on pool surface",
          "one carrying other in water",
          "mid-ocean tread staring"
        ],
        "looks": [
          "swimwear and coverup",
          "athletic swimsuits pool deck",
          "competitive swimwear",
          "sports one-piece coverup",
          "competitive swimwear athletic top"
        ]
      },
      "control vs. current": {
        "locs": [
          "river mid-current",
          "river rapid entry",
          "tidal bore channel",
          "river gorge mid",
          "river source pool"
        ],
        "poses": [
          "mid-river wade chest deep",
          "standing in river current push",
          "one steadying other in current",
          "river current fight",
          "dragging each other through surf"
        ],
        "looks": [
          "board shorts rash guards",
          "wetsuit tops boardshorts",
          "soaked cotton tees shorts",
          "soaked training gear",
          "long-sleeve rash guard shorts"
        ]
      },
      "still vs. surge": {
        "locs": [
          "lake flat calm",
          "ocean at horizon",
          "sea wall at storm",
          "surf break line",
          "tidal bore channel"
        ],
        "poses": [
          "floating face up touching",
          "both floating on backs hands linked",
          "tangled in surf mid-tumble",
          "dragging each other through surf",
          "surfboard shared balance"
        ],
        "looks": [
          "swimwear and coverup",
          "surf swimsuits rash guard",
          "board shorts rash guards",
          "wetsuit tops boardshorts",
          "swimwear and coverup"
        ]
      },
      "seen vs. submerged": {
        "locs": [
          "empty pool at dawn",
          "natatorium predawn",
          "ocean at horizon",
          "open sea no land visible",
          "deep lake mid-surface"
        ],
        "poses": [
          "both underwater looking up",
          "one submerged one above",
          "breaking surface simultaneously",
          "swimming fast at camera",
          "swimming toward distant light"
        ],
        "looks": [
          "competitive swimwear",
          "athletic swimsuits pool deck",
          "technical swim shorts rash vest",
          "competitive technical swimwear",
          "dive skins and vest"
        ]
      },
      "rhythm vs. chaos": {
        "locs": [
          "surf break line",
          "river rapid entry",
          "sea wall at storm",
          "tidal bore channel",
          "ocean at horizon"
        ],
        "poses": [
          "surfing same wave crouched",
          "tangled in surf mid-tumble",
          "dragging each other through surf",
          "synchronized jump entry",
          "ocean race sprint side by side"
        ],
        "looks": [
          "surf swimsuits rash guard",
          "board shorts rash guards",
          "wetsuit tops boardshorts",
          "soaked cotton tees shorts",
          "triathlon suits"
        ]
      },
      "weight vs. lift": {
        "locs": [
          "empty pool at dawn",
          "natatorium predawn",
          "ocean platform surface",
          "deep lake mid-surface",
          "lake flat calm"
        ],
        "poses": [
          "one carrying other in water",
          "one hoisting other from pool edge",
          "one riding other shoulders in water",
          "climbing out of water together",
          "arms spread on pool surface"
        ],
        "looks": [
          "athletic swimsuits pool deck",
          "competitive swimwear",
          "sports one-piece coverup",
          "water polo suits",
          "triathlon suits"
        ]
      },
      "held vs. swept": {
        "locs": [
          "river mid-current",
          "surf break line",
          "tidal bore channel",
          "sea wall at storm",
          "ocean at horizon"
        ],
        "poses": [
          "one steadying other in current",
          "open water rescue hold",
          "one pulling other from water",
          "dragging each other through surf",
          "tangled in surf mid-tumble"
        ],
        "looks": [
          "board shorts rash guards",
          "wetsuit tops boardshorts",
          "soaked cotton tees shorts",
          "wetsuit open to waist",
          "soaked training gear"
        ]
      },
      "calm vs. undertow": {
        "locs": [
          "lake flat calm",
          "ocean at horizon",
          "tidal flat at dusk",
          "lagoon at gold hour",
          "saltwater lake shore"
        ],
        "poses": [
          "floating face up touching",
          "both floating on backs hands linked",
          "treading water face to face",
          "mid-ocean tread staring",
          "chest deep facing each other"
        ],
        "looks": [
          "swimwear and coverup",
          "swimwear and coverup",
          "athletic swimsuit set",
          "high-waist swimsuit board shorts",
          "surf swimsuits rash guard"
        ]
      },
      "oxygen vs. pressure": {
        "locs": [
          "deep lake mid-surface",
          "open sea no land visible",
          "natatorium predawn",
          "fjord wall base",
          "kelp forest surface"
        ],
        "poses": [
          "holding breath underwater together",
          "both underwater looking up",
          "both gasping surface break",
          "one submerged one above",
          "swimming toward distant light"
        ],
        "looks": [
          "competitive swimwear",
          "dive skins and vest",
          "athletic swimsuits pool deck",
          "technical swim shorts rash vest",
          "thermal wetsuit"
        ]
      },
      "shore vs. open sea": {
        "locs": [
          "harbor pier edge",
          "coastal inlet",
          "boat ramp at dawn",
          "tidal flat at dusk",
          "ocean at horizon"
        ],
        "poses": [
          "running into surf together",
          "walking out of surf slow",
          "cliff edge before jump",
          "low tide exposed walk",
          "one pulling other from water"
        ],
        "looks": [
          "board shorts rash guards",
          "soaked cotton tees shorts",
          "linen shorts soaked",
          "open linen shirt swimwear",
          "open waterproof jackets shorts"
        ]
      },
      "wave vs. stillness": {
        "locs": [
          "surf break line",
          "lake flat calm",
          "lagoon at gold hour",
          "tidal flat at dusk",
          "mountain tarn"
        ],
        "poses": [
          "surfing same wave crouched",
          "floating face up touching",
          "both floating on backs hands linked",
          "spray kick both",
          "standing behind waterfall veil"
        ],
        "looks": [
          "surf swimsuits rash guard",
          "swimwear and coverup",
          "swimwear and coverup",
          "board shorts rash guards",
          "athletic swimsuit set"
        ]
      },
      "glass vs. churn": {
        "locs": [
          "lake flat calm",
          "lagoon at gold hour",
          "surf break line",
          "sea wall at storm",
          "tidal bore channel"
        ],
        "poses": [
          "floating face up touching",
          "both floating on backs hands linked",
          "tangled in surf mid-tumble",
          "dragging each other through surf",
          "synchronized jump entry"
        ],
        "looks": [
          "swimwear and coverup",
          "swimwear and coverup",
          "surf swimsuits rash guard",
          "board shorts rash guards",
          "wetsuit tops boardshorts"
        ]
      },
      "tidal vs. still": {
        "locs": [
          "tidal flat at dusk",
          "tidal bore channel",
          "tidal rock shelf",
          "tidal pool network",
          "lake flat calm"
        ],
        "poses": [
          "low tide exposed walk",
          "standing in river current push",
          "floating face up touching",
          "chest deep facing each other",
          "mid-river wade chest deep"
        ],
        "looks": [
          "swimwear and coverup",
          "swimwear and coverup",
          "linen shorts soaked",
          "soaked cotton tees shorts",
          "open linen shirt swimwear"
        ]
      },
      "shallow vs. abyss": {
        "locs": [
          "tidal pool network",
          "rock pool at sunrise",
          "deep lake mid-surface",
          "open sea no land visible",
          "fjord wall base"
        ],
        "poses": [
          "both underwater looking up",
          "one submerged one above",
          "floating face up touching",
          "cliff jump peak mid-air",
          "mid-dive off sea cliff"
        ],
        "looks": [
          "swimwear and coverup",
          "dive skins and vest",
          "competitive swimwear",
          "athletic swimsuits pool deck",
          "swimwear and coverup"
        ]
      },
      "fluid vs. rigid": {
        "locs": [
          "river mid-current",
          "river gorge mid",
          "surf break line",
          "empty pool at dawn",
          "natatorium predawn"
        ],
        "poses": [
          "river current fight",
          "one steadying other in current",
          "racing to wall in pool",
          "synchronized jump entry",
          "mid-river wade chest deep"
        ],
        "looks": [
          "competitive swimwear",
          "board shorts rash guards",
          "triathlon suits",
          "technical swim shorts rash vest",
          "soaked training gear"
        ]
      },
      "surrender vs. fight": {
        "locs": [
          "sea wall at storm",
          "surf break line",
          "river rapid entry",
          "tidal bore channel",
          "open sea no land visible"
        ],
        "poses": [
          "river current fight",
          "tangled in surf mid-tumble",
          "dragging each other through surf",
          "open water rescue hold",
          "both gasping surface break"
        ],
        "looks": [
          "board shorts rash guards",
          "wetsuit tops boardshorts",
          "soaked cotton tees shorts",
          "soaked training gear",
          "triathlon suits"
        ]
      },
      "visible vs. invisible": {
        "locs": [
          "ocean at horizon",
          "open sea no land visible",
          "deep lake mid-surface",
          "natatorium predawn",
          "sea cave entrance"
        ],
        "poses": [
          "both underwater looking up",
          "one submerged one above",
          "swimming toward distant light",
          "mid-ocean tread staring",
          "swimming fast at camera"
        ],
        "looks": [
          "competitive swimwear",
          "dive skins and vest",
          "technical swim shorts rash vest",
          "athletic swimsuits pool deck",
          "competitive technical swimwear"
        ]
      }
    },
    "promptSuffix": "The subjects must be in, on, or entering water — not beside it. Colour grade varies by water body: ocean is grey-green, pool is turquoise, river is brown-gold, lake is still and reflective. Wet skin, wet fabric, the physics of water must be present."
  },
  {
    "id": "city",
    "name": "THE CITY",
    "sub": "Noir, Neon, Brutalist & Golden",
    "color": "#2a4a6a",
    "tensions": [
      "noir vs. neon",
      "anonymous vs. seen",
      "the crowd vs. the individual",
      "above vs. below",
      "new vs. decayed",
      "fast vs. still",
      "the city vs. the person",
      "lost vs. found",
      "public vs. private",
      "the promise vs. the reality"
    ],
    "affinities": {
      "noir vs. neon": {
        "locs": [
          "Los Angeles rain 1940s noir street lamp wet",
          "Tokyo Shinjuku neon night alley narrow dense",
          "East Berlin Plattenbau brutalist block 1970s grey"
        ],
        "poses": [
          "both noir Los Angeles rain street lamp wet 1940s",
          "both Tokyo neon alley night narrow dense"
        ],
        "looks": [
          "1940s noir trench coat each Los Angeles rain",
          "Tokyo street fashion neon each"
        ]
      },
      "anonymous vs. seen": {
        "locs": [
          "Hong Kong Mong Kok neon night dense crowd",
          "Paris Haussmann boulevard golden stone dawn",
          "São Paulo favela rooftop dense city below"
        ],
        "poses": [
          "both Hong Kong neon night dense crowd",
          "both Paris Haussmann dawn golden stone boulevard"
        ],
        "looks": [
          "Hong Kong street casual dense crowd each",
          "Paris boulevard chic each golden stone"
        ]
      }
    },
    "locs": [
      "Los Angeles rain 1940s noir street lamp wet reflection",
      "Chicago noir El train overhead rain night shadow",
      "San Francisco Chandler fog hill cable car night",
      "New York fire escape rain night noir",
      "Tokyo Shinjuku neon night alley narrow dense kanji",
      "Hong Kong Mong Kok neon night dense vertical signs",
      "Seoul Gangnam neon night K-beauty signage",
      "Osaka Dotonbori neon canal reflection night",
      "Las Vegas strip neon day garish",
      "Bangkok Chinatown neon night dense traffic",
      "East Berlin Plattenbau brutalist block 1970s grey",
      "Moscow Khrushchyovka block estate winter",
      "London Barbican brutalist concrete walkways",
      "Marseille Unité d'Habitation Le Corbusier",
      "Belgrade brutalist monument vast dramatic",
      "Minsk Soviet boulevard vast ceremonial",
      "Paris Haussmann boulevard golden stone dawn",
      "Edinburgh Old Town stone alley gaslight",
      "Prague Old Town square golden cobblestone dawn",
      "Budapest Parliament Danube reflection night",
      "Vienna Ringstrasse imperial architecture dusk",
      "Barcelona Gothic Quarter narrow golden",
      "Shanghai Pudong glass tower forest night",
      "Dubai glass tower desert edge dawn",
      "Singapore Marina Bay night reflection water",
      "New York Hudson Yards contemporary glass",
      "London Canary Wharf glass canyon night",
      "Singapore Jewel Changi waterfall interior",
      "New York City steam vent night dramatic",
      "Paris catacombs skull lined narrow torch",
      "London Soho alley night neon sign",
      "New York Chinatown night dense narrow"
    ],
    "poses": [
      "both noir Los Angeles rain street lamp wet reflection",
      "both Tokyo neon alley narrow night dense",
      "both brutalist block exterior vast grey behind",
      "both Paris Haussmann golden boulevard dawn",
      "both Hong Kong neon night crowd dense",
      "both Edinburgh stone alley gaslight",
      "both Shanghai glass tower night small",
      "both fire escape rain night noir",
      "both steam vent night dramatic urban",
      "both city crossing night light trails",
      "both looking down from above city vast",
      "both lost in crowd city anonymous",
      "both corner cafe city watching street",
      "both underground city passage narrow",
      "both rooftop city spread below night",
      "both city construction site dramatic",
      "both city subway rush hour",
      "both city park bench urban green",
      "both city alley dramatic urban light",
      "both city dawn empty before it starts"
    ],
    "looks": [
      "1940s noir trench coat fedora each Los Angeles",
      "Tokyo street fashion layered neon night each",
      "brutalist city practical dark each Eastern European",
      "Paris boulevard chic each golden stone",
      "Hong Kong street dense casual each",
      "contemporary city smart casual each",
      "city night dark each urban",
      "Seoul street fashion each K-style",
      "city casual commuter each",
      "city formal out of place each incongruous"
    ],
    "promptSuffix": "Colour grade by register: noir rain and shadow, Tokyo neon saturated vertical, brutalist grey and flat, Haussmann golden warm stone. The city IS the character."
  },
  {
    "id": "mountain",
    "name": "THE MOUNTAIN",
    "sub": "Scale & Survival",
    "color": "#7aaa5a",
    "tensions": [
      "small vs. immense",
      "summit vs. abyss",
      "endurance vs. surrender",
      "ascent vs. fall",
      "exposure vs. shelter",
      "push vs. stop",
      "cold vs. alive",
      "vertical vs. horizontal",
      "earned vs. given",
      "risk vs. reward",
      "altitude vs. body",
      "granite vs. human",
      "rope vs. void",
      "pace vs. fatigue",
      "loaded vs. free",
      "partner vs. self",
      "weather vs. will",
      "trail vs. off-trail",
      "gear vs. skin",
      "summit fever vs. reason"
    ],
    "locs": [
      "ridge at altitude blue sky above",
      "snowfield at dusk pink light",
      "glacier crevasse edge",
      "rock face midway pitch",
      "alpine meadow wildflowers",
      "summit cairn wind-blown",
      "tree line edge looking up",
      "scree slope descent",
      "high camp tent door morning",
      "alpine lake reflection",
      "frozen waterfall ice wall",
      "boulder field at sunrise",
      "mountain hut exterior dawn",
      "narrow couloir ice",
      "ridgeline silhouette both sides visible",
      "cable car tower base",
      "rocky summit cross",
      "lookout tower wooden stairs",
      "talus slope scramble",
      "snow cornice edge careful",
      "Dolomite rock tower base",
      "Patagonia spire mist",
      "Himalayan base camp prayer flags",
      "Alaska glacier terminus",
      "Scottish highland ridge",
      "Swiss alpine meadow cowbell",
      "Rocky Mountain aspen grove autumn",
      "Norwegian fjord above",
      "New Zealand Southern Alps",
      "Andes condor sky above",
      "Atlas Mountains red earth",
      "Ethiopian Simien ridge",
      "Caucasus range ancient stone",
      "Pyrenees pass stone refuge",
      "Japanese Alps cedar forest",
      "Taiwan high mountain fog",
      "Philippine volcano caldera rim",
      "East African rift escarpment",
      "Carpathian forest ridge",
      "Urals ancient low ridge",
      "Appalachian bald summit",
      "Sierra Nevada granite dome",
      "Rockies moraine lake",
      "Mt Cook glacier New Zealand",
      "Iceland lava field above cloud",
      "Faroe plateau edge cliff",
      "Ben Nevis CIC hut below",
      "Chamonix aiguille needle"
    ],
    "poses": [
      "roped together on ridge facing out",
      "both looking at summit above",
      "one pulling other up ledge hand-clasp",
      "back-to-back on boulder looking both ways",
      "cresting ridge at pace into wind",
      "both braced against wind arms out",
      "one behind other pointing at distant peak",
      "celebrating summit arms up both",
      "sitting on rock edge boots off resting",
      "one checking other's harness close",
      "both reading map together heads bent",
      "one arm around other looking at valley",
      "descending steep snow together faces forward",
      "jumping boulder gap together",
      "crouched examining alpine flowers",
      "one helping other cross snowfield linked",
      "both faces into morning sun eyes closed",
      "eating from one pack sharing lunch",
      "one adjusting other's helmet close",
      "both lying on warm rock looking up at sky",
      "one carrying other's pack as well",
      "back-to-back resting against mountain wall",
      "both hands on same rope ascending",
      "watching storm roll in below together",
      "one catching other slipping on scree",
      "both in tent door morning coffee",
      "silhouette against summit sky",
      "both looking back down at ascent route",
      "one pointing route other studies map",
      "high-fiving on summit both grinning",
      "holding each other into wind gust",
      "one belaying other on rock face below",
      "glissading snow sitting both laughing",
      "standing at mountain cross looking out",
      "both squinting into high altitude glare",
      "one treating other's blister roadside",
      "nose-to-nose against rock face sheltering",
      "both arms wide on summit ridge",
      "photographing together mountain behind",
      "one knee-deep in snow other steadies",
      "sitting at alpine hut table both tired",
      "descending in step side by side",
      "one waving to eagle both watching",
      "walking single file on narrow ridge",
      "high camp breakfast both wrapped warm",
      "both watching alpenglow hit summit",
      "looking back at tracks in snow below",
      "one helping other with crampons bent"
    ],
    "looks": [
      "climbing harnesses over base layers both",
      "technical softshell pants fleece mid-layer each",
      "insulated down jacket open slim mountaineering pants",
      "waterproof hard shell base layer showing each",
      "mid-layer fleece beanie each practical",
      "merino base layer only summit warm both",
      "climbing pants chalk-bag each",
      "alpine gaiters technical trousers boots each",
      "high-altitude down suit both expedition",
      "lightweight wind jacket technical pants each",
      "helmet harness rock shoes each",
      "softshell jacket leggings both",
      "layered merino long sleeve beanie gloves each",
      "technical mountain pants crampons on each",
      "fleece vest base layer technical pants each",
      "waterproof over-trousers base layer each rain protection",
      "alpine bib and jacket full system both",
      "puffy jacket slim technical pants each",
      "thin down jacket tee visible each",
      "running vest trail shorts mountain runner both",
      "approach shoe technical pants sun hat each",
      "softshell bib technical top each climbing",
      "glacier glasses technical layers both",
      "merino hoodie technical pants each",
      "lightweight packable jacket base layer each",
      "ski touring jacket and pants both",
      "wool sweater climbing pants each classic",
      "trail running jacket and pants both light",
      "mountain fleece worn open tee beneath each",
      "technical short-sleeve sun-protection top hiking pants each",
      "wind-blocking jacket liner showing trail pants each",
      "high-vis jacket safety mountain technical pants each",
      "thermal underlayer balaclava around neck each",
      "expedition base camp puffy both massive",
      "mountain guide worn technical layers each",
      "heritage wool sweater mountain trousers boots each",
      "technical polo mountain pants each clean",
      "hardshell jacket gloves helmet visible each",
      "liner gloves down jacket trail pants each",
      "modular layering system multiple visible each",
      "crampon-ready boots gaiters pants tucked each",
      "vintage mountaineering wool breeches each classic",
      "sun shirt hiking pants trail shoes each",
      "vest over long-sleeve technical pants each",
      "mountain softshell slim beanie both",
      "full waterproof set both gale conditions",
      "puffy vest fleece layer beneath technical pants"
    ],
    "affinities": {
      "small vs. immense": {
        "locs": [
          "summit plateau",
          "ridge at altitude",
          "high ridge both drops visible",
          "exposed arete",
          "mountain pass both sides visible"
        ],
        "poses": [
          "both facing summit above",
          "looking down from summit",
          "heels over summit edge standing",
          "arms out at summit",
          "seated on summit looking out"
        ],
        "looks": [
          "base layers summit exposed",
          "trail shorts long sleeves",
          "merino tops technical shorts",
          "ultralight base running vest",
          "packless minimalist trail set"
        ]
      },
      "summit vs. abyss": {
        "locs": [
          "ridge at altitude",
          "exposed arete",
          "cornice edge above cliff",
          "high ridge both drops visible",
          "cliff edge at golden hour"
        ],
        "poses": [
          "heels over summit edge standing",
          "looking down from summit",
          "hands clasped at cliff edge",
          "roped together on ridge",
          "one pulling other up ledge"
        ],
        "looks": [
          "climbing harnesses base layers",
          "belay setup open jackets",
          "technical set harness on",
          "hardshell jackets alpine pants",
          "down jackets base layers"
        ]
      },
      "endurance vs. surrender": {
        "locs": [
          "scree slope mid-descent",
          "steep couloir",
          "summit approach final pitch",
          "snowfield at dusk",
          "high altitude meadow"
        ],
        "poses": [
          "racing up scree to top",
          "storm approach speed walk",
          "both pushed by wind leaning",
          "carrying each other pack",
          "one carrying other piggyback"
        ],
        "looks": [
          "active insulation technical pants",
          "waterproof bibs softshell top",
          "trail shorts long sleeves",
          "slim mountaineering pants thermals",
          "3-season waterproof trail pants"
        ]
      },
      "ascent vs. fall": {
        "locs": [
          "rock face midway",
          "glacier crevasse edge",
          "via ferrata mid-section",
          "cliff-side via ferrata ladder",
          "technical ridge traverse"
        ],
        "poses": [
          "tandem bouldering a face",
          "one belaying one climbing",
          "mid-rappel side by side",
          "one pulling other up ledge",
          "mid-dyno on boulder"
        ],
        "looks": [
          "climbing harnesses base layers",
          "belay setup open jackets",
          "technical set harness on",
          "climbing pants sport tee",
          "minimal grip shoes shorts tape"
        ]
      },
      "exposure vs. shelter": {
        "locs": [
          "exposed arete",
          "rock overhang shelter",
          "bivouac ledge",
          "mountain hut threshold",
          "windy col exposure"
        ],
        "poses": [
          "wind-braced against each other",
          "both in bivouac together",
          "resting against rock gear on",
          "both pushed by wind leaning",
          "route-finding crouch together"
        ],
        "looks": [
          "insulated jackets open slim pants",
          "down jackets base layers",
          "hardshell jackets alpine pants",
          "waterproof bibs softshell top",
          "3-season waterproof trail pants"
        ]
      },
      "push vs. stop": {
        "locs": [
          "steep couloir",
          "summit approach final pitch",
          "scree slope mid-descent",
          "technical ridge traverse",
          "peak at storm approach"
        ],
        "poses": [
          "storm approach speed walk",
          "racing up scree to top",
          "cresting ridge at pace",
          "sprinting across snowfield",
          "both pushed by wind leaning"
        ],
        "looks": [
          "active insulation technical pants",
          "ultralight base running vest",
          "trail shorts long sleeves",
          "waterproof bibs softshell top",
          "slim mountaineering pants thermals"
        ]
      },
      "cold vs. alive": {
        "locs": [
          "snowfield at dusk",
          "frozen lake shore",
          "glacier crevasse edge",
          "ice field flat section",
          "frozen waterfall face"
        ],
        "poses": [
          "both crampons on ice face",
          "crossing snowbridge together",
          "sprinting across snowfield",
          "drinking from same water source",
          "both lying back on warm slab"
        ],
        "looks": [
          "slim mountaineering pants thermals",
          "thermal base climbing pants",
          "down jackets base layers",
          "insulated bibs down top",
          "fitted base layers summit"
        ]
      },
      "vertical vs. horizontal": {
        "locs": [
          "rock face midway",
          "via ferrata mid-section",
          "cliff-side via ferrata ladder",
          "glacier crevasse edge",
          "ridge at altitude"
        ],
        "poses": [
          "tandem bouldering a face",
          "one belaying one climbing",
          "mid-dyno on boulder",
          "mid-rappel side by side",
          "one above pulling rope"
        ],
        "looks": [
          "climbing harnesses base layers",
          "technical set harness on",
          "belay setup open jackets",
          "climbing pants sport tee",
          "minimal grip shoes shorts tape"
        ]
      },
      "earned vs. given": {
        "locs": [
          "summit plateau",
          "peak cairn",
          "summit cross",
          "high camp tent platform",
          "mountain rescue helicopter LZ"
        ],
        "poses": [
          "celebration at summit marker",
          "summit handshake",
          "arms out at summit",
          "seated on summit looking out",
          "high-five at pass marker"
        ],
        "looks": [
          "base layers summit exposed",
          "trail shorts long sleeves",
          "merino tops technical shorts",
          "sun-faded technical gear",
          "packless minimalist trail set"
        ]
      },
      "risk vs. reward": {
        "locs": [
          "exposed arete",
          "cornice edge above cliff",
          "cliff edge at golden hour",
          "high ridge both drops visible",
          "glacier crevasse edge"
        ],
        "poses": [
          "heels over summit edge standing",
          "jumping boulder gap together",
          "mid-dyno on boulder",
          "roped together on ridge",
          "one pulling other up ledge"
        ],
        "looks": [
          "climbing harnesses base layers",
          "technical set harness on",
          "belay setup open jackets",
          "hardshell jackets alpine pants",
          "active insulation technical pants"
        ]
      },
      "altitude vs. body": {
        "locs": [
          "summit plateau",
          "high altitude meadow",
          "high plateau after storm",
          "summit weather station base",
          "snowfield at dusk"
        ],
        "poses": [
          "resting against rock gear on",
          "drinking from same water source",
          "wind-braced against each other",
          "seated on summit looking out",
          "coiling rope together"
        ],
        "looks": [
          "slim mountaineering pants thermals",
          "down jackets base layers",
          "insulated jackets open slim pants",
          "3-season waterproof trail pants",
          "thermal base climbing pants"
        ]
      },
      "granite vs. human": {
        "locs": [
          "rock face midway",
          "granite slab field",
          "boulder problem base",
          "boulderfield above treeline",
          "talus field at dawn"
        ],
        "poses": [
          "tandem bouldering a face",
          "mid-dyno on boulder",
          "both lying back on warm slab",
          "lying flat on warm granite",
          "jumping boulder gap together"
        ],
        "looks": [
          "minimal grip shoes shorts tape",
          "boulder shorts no top",
          "climbing pants sport tee",
          "short-sleeved on granite",
          "rugged shorts moisture-wicking tops"
        ]
      },
      "rope vs. void": {
        "locs": [
          "exposed arete",
          "glacier crevasse edge",
          "cliff edge at golden hour",
          "cornice edge above cliff",
          "cliff-side via ferrata ladder"
        ],
        "poses": [
          "roped together on ridge",
          "one belaying one climbing",
          "tied-in at anchor together",
          "mid-rappel side by side",
          "one above pulling rope"
        ],
        "looks": [
          "climbing harnesses base layers",
          "technical set harness on",
          "belay setup open jackets",
          "hardshell jackets alpine pants",
          "climbing pants sport tee"
        ]
      },
      "pace vs. fatigue": {
        "locs": [
          "scree slope mid-descent",
          "steep couloir",
          "summit approach final pitch",
          "narrow trail above cliff",
          "steep switchback trail view"
        ],
        "poses": [
          "racing up scree to top",
          "sliding down scree together",
          "running downhill side by side",
          "carrying each other pack",
          "cresting ridge at pace"
        ],
        "looks": [
          "ultralight base running vest",
          "trail shorts long sleeves",
          "packless minimalist trail set",
          "rugged shorts moisture-wicking tops",
          "merino tops technical shorts"
        ]
      },
      "loaded vs. free": {
        "locs": [
          "high altitude meadow",
          "alpine meadow",
          "snowfield approach predawn",
          "forest trail exit into open",
          "mountain pass both sides visible"
        ],
        "poses": [
          "carrying each other pack",
          "rope coil mid-hike",
          "running downhill side by side",
          "sliding down scree together",
          "racing up scree to top"
        ],
        "looks": [
          "active insulation technical pants",
          "ultralight base running vest",
          "trail vest only shorts",
          "packless minimalist trail set",
          "trail shorts long sleeves"
        ]
      },
      "partner vs. self": {
        "locs": [
          "ridge at altitude",
          "bivouac ledge",
          "mountain hut threshold",
          "alpine hut interior",
          "rock overhang shelter"
        ],
        "poses": [
          "roped together on ridge",
          "both in bivouac together",
          "drinking from same water source",
          "coiling rope together",
          "reading map together"
        ],
        "looks": [
          "climbing harnesses base layers",
          "belay setup open jackets",
          "slim mountaineering pants thermals",
          "thermal base climbing pants",
          "down jackets base layers"
        ]
      },
      "weather vs. will": {
        "locs": [
          "peak at storm approach",
          "windy col exposure",
          "exposed arete",
          "high ridge both drops visible",
          "high plateau after storm"
        ],
        "poses": [
          "storm approach speed walk",
          "both pushed by wind leaning",
          "wind-braced against each other",
          "sprinting across snowfield",
          "crossing snowbridge together"
        ],
        "looks": [
          "hardshell jackets alpine pants",
          "waterproof bibs softshell top",
          "3-season waterproof trail pants",
          "insulated jackets open slim pants",
          "active insulation technical pants"
        ]
      },
      "trail vs. off-trail": {
        "locs": [
          "boulderfield above treeline",
          "talus field at dawn",
          "granite slab field",
          "alpine meadow",
          "forest trail exit into open"
        ],
        "poses": [
          "route-finding crouch together",
          "crouched mapping route",
          "reading map together",
          "jumping boulder gap together",
          "mid-scramble chimney ascent"
        ],
        "looks": [
          "rugged shorts moisture-wicking tops",
          "trail shorts long sleeves",
          "merino tops technical shorts",
          "guide shirt alpine shorts",
          "sun-faded technical gear"
        ]
      },
      "gear vs. skin": {
        "locs": [
          "granite slab field",
          "boulder problem base",
          "boulderfield above treeline",
          "high altitude meadow",
          "summit plateau"
        ],
        "poses": [
          "mid-dyno on boulder",
          "tandem bouldering a face",
          "both lying back on warm slab",
          "lying flat on warm granite",
          "jumping boulder gap together"
        ],
        "looks": [
          "boulder shorts no top",
          "minimal grip shoes shorts tape",
          "short-sleeved on granite",
          "base layers summit exposed",
          "rugged shorts moisture-wicking tops"
        ]
      },
      "summit fever vs. reason": {
        "locs": [
          "summit approach final pitch",
          "cornice edge above cliff",
          "peak at storm approach",
          "exposed arete",
          "high ridge both drops visible"
        ],
        "poses": [
          "celebration at summit marker",
          "heels over summit edge standing",
          "storm approach speed walk",
          "roped together on ridge",
          "arms out at summit"
        ],
        "looks": [
          "climbing harnesses base layers",
          "technical set harness on",
          "active insulation technical pants",
          "waterproof bibs softshell top",
          "hardshell jackets alpine pants"
        ]
      }
    },
    "promptSuffix": "Colour grade: high altitude clarity — crisp air, vivid blue sky or dramatic cloud. The scale of the mountain environment should be present in the frame. Alpenglow, snow, rock and sky. The subjects are in the landscape, not posed before it."
  },
  {
    "id": "night",
    "name": "THE NIGHT",
    "sub": "After Dark",
    "color": "#9966cc",
    "tensions": [
      "light vs. dark",
      "awake vs. asleep",
      "seen vs. unseen",
      "late vs. early",
      "energy vs. exhaustion",
      "danger vs. safety",
      "hidden vs. exposed",
      "real vs. imagined",
      "after vs. before",
      "alive vs. still",
      "searching vs. found",
      "open vs. closed",
      "alone vs. watched",
      "noise vs. quiet hour",
      "moving vs. paralyzed",
      "hunting vs. hunted",
      "streetlit vs. shadow",
      "neon-free dark vs. lit",
      "sober vs. dreaming",
      "night shift vs. day world"
    ],
    "locs": [
      "street lamp cone of light empty",
      "predawn empty boulevard",
      "24h diner at 3am",
      "rooftop at midnight city below",
      "rain-soaked empty street lamp reflection",
      "neon sign alley close",
      "night club exterior queue gone",
      "casino exit early hours",
      "hotel lobby late night",
      "city bridge walking both sides empty",
      "underground car park empty level",
      "hospital exterior 4am",
      "night bus last stop end line",
      "kebab shop 2am queue",
      "phone box interior lit",
      "underpass graffiti night colour",
      "harbour lights reflection water night",
      "ferry terminal last boat gone",
      "train station concourse empty night",
      "airport arrivals 5am",
      "fuel station forecourt night",
      "empty beach night city beyond",
      "park night fountain lit",
      "botanical garden night event",
      "stadium exterior night event over",
      "theatre stage door night",
      "concert venue exit after",
      "bar exterior last call street",
      "arcade empty closing time",
      "bowling alley last game",
      "Tokyo Shinjuku Kabukicho neon",
      "Osaka Dotonbori night reflection",
      "Seoul Hongdae night street",
      "Hong Kong Mong Kok night dense",
      "Taipei night market open",
      "Bangkok Patpong night market",
      "Ho Chi Minh night street food",
      "Singapore Clarke Quay night",
      "Kuala Lumpur Petaling night",
      "New York Times Square 4am",
      "Las Vegas strip 3am",
      "Chicago Riverwalk night",
      "Miami South Beach night",
      "New Orleans Bourbon St late",
      "Nashville Broadway night",
      "London West End 2am",
      "Paris Pigalle night",
      "Berlin Kurfürstendamm night",
      "Amsterdam red light area outside",
      "Brussels Grande Place night",
      "Prague Wenceslas night"
    ],
    "poses": [
      "lit by single streetlamp cone both",
      "both facing streetlamp glow looking up",
      "silhouette in diner window booth",
      "running through night city rain both",
      "crouched in shadow then stepping into light",
      "slow dance outside bar closed music faint",
      "back-to-back in neon light colour both",
      "both looking at phone map lost at night",
      "one arm around other cold night street",
      "both watching city from bridge at night",
      "sharing last cigarette outside venue",
      "leaning on wall after long night",
      "one asleep shoulder of other taxi night",
      "both wide awake sunrise approaching exhausted",
      "both laughing at something stupid 3am",
      "silhouette against illuminated building",
      "both looking up at fireworks above",
      "watching night market stalls both absorbed",
      "one arm around other walking night empty street",
      "both looking through diner window menu",
      "back-to-back neon sign colours hitting each",
      "sitting on kerb outside venue after",
      "walking away from camera into night together",
      "running toward night bus both",
      "one buying from night stall other watches",
      "both leaning over bridge watching night river",
      "kissing under streetlamp classic",
      "both watching city below from rooftop night",
      "one finding other on crowded night street relief",
      "hailing cab together late both",
      "both exhausted at 5am arrivals gate",
      "slow-walk hand-in-hand night empty street",
      "both bathed in blue neon light bar",
      "one falling asleep standing other steadies",
      "both wide-eyed at something unexpected night",
      "sitting outside after on steps",
      "both waiting for food late night takeaway",
      "one sneaking other past sleeping doorman both",
      "both looking at stars from rooftop hand-in-hand",
      "finding shelter in doorway rain night",
      "both reflected in empty shop window night",
      "sunrise catching both still up watching"
    ],
    "looks": [
      "dark denim simple tees both",
      "all-black minimal both",
      "black hoodies dark joggers both",
      "slim dark layers both",
      "open dark jackets tees both",
      "night-out dress and shirt smart both",
      "leather jacket tee dark jeans both",
      "velvet blazer tee slim pants each",
      "satin-finish shirt dark trousers each",
      "little black dress and dark suit each",
      "black slip dress and black jacket respectively",
      "sequin top and slim trousers respectively",
      "dark oversized coat and slim pants each",
      "after-party dishevelled formal both",
      "club-wear both confident and minimal",
      "dark roll-neck slim trousers both",
      "monochrome navy both",
      "charcoal suit open collar and dress each",
      "after-show comfortable casual both",
      "dark maxi dress and dark jeans each",
      "oversized leather jacket tee night both",
      "dark coat pale shirt trousers each",
      "dark linen layers minimal night both",
      "all-black streetwear both technical",
      "black midi dress and smart-black shirt each",
      "structured black coat slim pants both",
      "embellished top dark trousers each",
      "night-sky navy coord both",
      "open silk shirt and slim trousers each",
      "dark fitted jumpsuit and open jacket each",
      "dark suede jacket slim dark jeans each",
      "velour tracksuit and leather jacket respectively",
      "sheer dark overlay minimal beneath both",
      "dark denim jacket and dress respectively",
      "monochrome burgundy rich tonal both",
      "after-concert tee jeans both",
      "styled-down evening wear comfortable both",
      "dark check shirt slim trousers each",
      "night-out trainers dark co-ords each",
      "dark cap and city casual both",
      "all-black with one gold accent each",
      "faded black layers both worn",
      "deep purple coord tonal both",
      "dark hoodie and smart trousers mix each",
      "black mini dress and dark open shirt each",
      "dark linen suit open collar both"
    ],
    "affinities": {
      "light vs. dark": {
        "locs": [
          "street lamp cone of light",
          "tunnel mouth at night",
          "overpass underside lit",
          "gas station fluorescence",
          "dark alley single light"
        ],
        "poses": [
          "lit by single headlight",
          "both facing streetlamp glow",
          "one illuminated one shadow",
          "caught in headlight freeze",
          "face in single lamp pool"
        ],
        "looks": [
          "all black minimal",
          "dark fitted sets",
          "black on black layers",
          "black technical wear",
          "near-black everything"
        ]
      },
      "awake vs. asleep": {
        "locs": [
          "24h diner at 3am",
          "laundromat after midnight",
          "night bus stop",
          "taxi rank predawn",
          "hotel service entrance night"
        ],
        "poses": [
          "one asleep one awake car",
          "sleeping in car back seat",
          "late night conversation bench",
          "fire escape at 2am seated",
          "hands on counter 24h diner"
        ],
        "looks": [
          "dark linen relaxed",
          "slim dark layers",
          "night-appropriate streetwear",
          "dark denim simple tees",
          "faded black layered"
        ]
      },
      "seen vs. unseen": {
        "locs": [
          "dark alley single light",
          "backstreet at 4am",
          "warehouse district midnight",
          "industrial zone at 2am",
          "abandoned lot at midnight"
        ],
        "poses": [
          "back to wall in dark zone",
          "crouched in shadow then light",
          "hand holding in dark alley",
          "one in light one outside",
          "doorway light cast"
        ],
        "looks": [
          "all black minimal",
          "dark fitted sets",
          "black technical wear",
          "black on black layers",
          "near-black everything"
        ]
      },
      "late vs. early": {
        "locs": [
          "predawn empty boulevard",
          "taxi rank predawn",
          "24h diner at 3am",
          "laundromat after midnight",
          "station concourse late"
        ],
        "poses": [
          "walking toward dawn",
          "predawn run together",
          "waiting at bus stop late",
          "two figures under lamp far",
          "both looking down empty street"
        ],
        "looks": [
          "dark denim simple tees",
          "slim dark layers",
          "dark fitted sets",
          "night-appropriate streetwear",
          "dark linen relaxed"
        ]
      },
      "energy vs. exhaustion": {
        "locs": [
          "24h gym window",
          "industrial zone at 2am",
          "factory car park night",
          "warehouse district midnight",
          "backstreet at 4am"
        ],
        "poses": [
          "mid-sprint under bridge light",
          "running through rain at night",
          "running from shadow to light",
          "sprint through tunnel light",
          "predawn run together"
        ],
        "looks": [
          "black athletic sets",
          "black sport set",
          "black sport shorts dark hoodie",
          "black hoodies dark joggers",
          "black technical wear"
        ]
      },
      "danger vs. safety": {
        "locs": [
          "dark alley single light",
          "backstreet at 4am",
          "tunnel mouth at night",
          "abandoned lot at midnight",
          "parking lot edge dark"
        ],
        "poses": [
          "back to wall in dark zone",
          "hand holding in dark alley",
          "crouched in shadow then light",
          "one in light one outside",
          "watching from overpass railing"
        ],
        "looks": [
          "all black minimal",
          "dark fitted sets",
          "slim dark layers",
          "black on black layers",
          "black technical wear"
        ]
      },
      "hidden vs. exposed": {
        "locs": [
          "street lamp cone of light",
          "tunnel mouth at night",
          "gas station fluorescence",
          "overpass underside lit",
          "dark alley single light"
        ],
        "poses": [
          "one illuminated one shadow",
          "caught in headlight freeze",
          "crouched in shadow then light",
          "face in single lamp pool",
          "silhouette in diner window"
        ],
        "looks": [
          "all black minimal",
          "dark fitted sets",
          "black technical wear",
          "near-black everything",
          "black on black layers"
        ]
      },
      "real vs. imagined": {
        "locs": [
          "rooftop at midnight",
          "empty beach after midnight",
          "river bank at 2am",
          "city park at midnight",
          "rooftop under moon"
        ],
        "poses": [
          "slow-dance on empty street",
          "dancing in parking lot alone",
          "arms out in rain night",
          "both looking at phone light",
          "late night conversation bench"
        ],
        "looks": [
          "dark linen relaxed",
          "faded black layered",
          "night-appropriate streetwear",
          "slim dark layers",
          "dark denim simple tees"
        ]
      },
      "after vs. before": {
        "locs": [
          "cinema exit at midnight",
          "station concourse late",
          "closed bar exterior night",
          "kebab shop forecourt 3am",
          "taxi rank predawn"
        ],
        "poses": [
          "night market walk",
          "late night conversation bench",
          "taxi window faces late",
          "service entrance wait",
          "both looking down empty street"
        ],
        "looks": [
          "night-appropriate streetwear",
          "dark denim simple tees",
          "slim dark layers",
          "dark fitted sets",
          "faded black layered"
        ]
      },
      "alive vs. still": {
        "locs": [
          "predawn empty boulevard",
          "city park at midnight",
          "empty beach after midnight",
          "deserted high street",
          "rail yard at midnight"
        ],
        "poses": [
          "walking toward dawn",
          "both looking down empty street",
          "two figures under lamp far",
          "slow-dance on empty street",
          "silhouette in diner window"
        ],
        "looks": [
          "dark denim simple tees",
          "slim dark layers",
          "all black minimal",
          "dark linen relaxed",
          "near-black everything"
        ]
      },
      "searching vs. found": {
        "locs": [
          "backstreet at 4am",
          "warehouse district midnight",
          "abandoned lot at midnight",
          "industrial zone at 2am",
          "dock at night"
        ],
        "poses": [
          "running from shadow to light",
          "mid-sprint under bridge light",
          "sprint through tunnel light",
          "watching from overpass railing",
          "hand holding in dark alley"
        ],
        "looks": [
          "all black minimal",
          "dark fitted sets",
          "black technical wear",
          "black on black layers",
          "black hoodies dark joggers"
        ]
      },
      "open vs. closed": {
        "locs": [
          "predawn empty boulevard",
          "city park at midnight",
          "empty beach after midnight",
          "rooftop at midnight",
          "elevated highway at night"
        ],
        "poses": [
          "arms out in rain night",
          "both arms out in empty street",
          "walking toward dawn",
          "predawn run together",
          "slow-dance on empty street"
        ],
        "looks": [
          "dark denim simple tees",
          "slim dark layers",
          "dark linen relaxed",
          "night-appropriate streetwear",
          "faded black layered"
        ]
      },
      "alone vs. watched": {
        "locs": [
          "street lamp cone of light",
          "gas station fluorescence",
          "24h diner at 3am",
          "laundromat after midnight",
          "petrol station isolated night"
        ],
        "poses": [
          "face in single lamp pool",
          "silhouette in diner window",
          "diner window steam silhouette",
          "seated neon-free shopfront",
          "lit by single headlight"
        ],
        "looks": [
          "all black minimal",
          "dark fitted sets",
          "slim dark layers",
          "near-black everything",
          "dark denim simple tees"
        ]
      },
      "noise vs. quiet hour": {
        "locs": [
          "predawn empty boulevard",
          "deserted high street",
          "empty beach after midnight",
          "city park at midnight",
          "canal bridge night"
        ],
        "poses": [
          "late night conversation bench",
          "both looking down empty street",
          "two figures under lamp far",
          "slow-dance on empty street",
          "walking toward dawn"
        ],
        "looks": [
          "dark denim simple tees",
          "dark linen relaxed",
          "slim dark layers",
          "night-appropriate streetwear",
          "faded black layered"
        ]
      },
      "moving vs. paralyzed": {
        "locs": [
          "elevated highway at night",
          "tunnel mouth at night",
          "bridge footwalk at 3am",
          "motorway service area",
          "rain-soaked empty street"
        ],
        "poses": [
          "running through rain at night",
          "sprint through tunnel light",
          "caught in headlight freeze",
          "mid-sprint under bridge light",
          "predawn run together"
        ],
        "looks": [
          "black athletic sets",
          "black technical wear",
          "black sport set",
          "black hoodies dark joggers",
          "black sport shorts dark hoodie"
        ]
      },
      "hunting vs. hunted": {
        "locs": [
          "dark alley single light",
          "warehouse district midnight",
          "backstreet at 4am",
          "industrial estate night",
          "abandoned lot at midnight"
        ],
        "poses": [
          "running from shadow to light",
          "crouched in shadow then light",
          "back to wall in dark zone",
          "watching from overpass railing",
          "mid-sprint under bridge light"
        ],
        "looks": [
          "all black minimal",
          "black technical wear",
          "black on black layers",
          "dark fitted sets",
          "slim dark layers"
        ]
      },
      "streetlit vs. shadow": {
        "locs": [
          "street lamp cone of light",
          "overpass underside lit",
          "dark alley single light",
          "gas station fluorescence",
          "tunnel mouth at night"
        ],
        "poses": [
          "one illuminated one shadow",
          "long shadows from single source",
          "lit by single headlight",
          "caught in headlight freeze",
          "face in single lamp pool"
        ],
        "looks": [
          "all black minimal",
          "dark fitted sets",
          "black on black layers",
          "near-black everything",
          "black technical wear"
        ]
      },
      "neon-free dark vs. lit": {
        "locs": [
          "24h diner at 3am",
          "gas station fluorescence",
          "laundromat after midnight",
          "24h gym window",
          "street lamp cone of light"
        ],
        "poses": [
          "silhouette in diner window",
          "diner window steam silhouette",
          "seated neon-free shopfront",
          "both looking at phone light",
          "hands on counter 24h diner"
        ],
        "looks": [
          "dark denim simple tees",
          "slim dark layers",
          "night-appropriate streetwear",
          "dark fitted sets",
          "all grey no detail"
        ]
      },
      "sober vs. dreaming": {
        "locs": [
          "rooftop at midnight",
          "city park at midnight",
          "empty beach after midnight",
          "river bank at 2am",
          "rooftop under moon"
        ],
        "poses": [
          "slow-dance on empty street",
          "dancing in parking lot alone",
          "arms out in rain night",
          "lying on warm hood night sky",
          "both looking down empty street"
        ],
        "looks": [
          "dark linen relaxed",
          "faded black layered",
          "slim dark layers",
          "night-appropriate streetwear",
          "dark denim simple tees"
        ]
      },
      "night shift vs. day world": {
        "locs": [
          "factory car park night",
          "hospital exterior night",
          "fire station at night",
          "industrial zone at 2am",
          "24h gym window"
        ],
        "poses": [
          "service entrance wait",
          "petrol pump late night lean",
          "one asleep one awake car",
          "hands on counter 24h diner",
          "both looking at phone light"
        ],
        "looks": [
          "dark fitted sets",
          "black technical wear",
          "black athletic sets",
          "black hoodies dark joggers",
          "dark denim simple tees"
        ]
      }
    },
    "promptSuffix": "Colour grade: deep blacks, pools of artificial light — neon, sodium, LED. Available light only, no fill flash. Let the darkness be darkness."
  },
  {
    "id": "rain",
    "name": "THE RAIN",
    "sub": "Monsoon, Drizzle, Downpour & the In-Between",
    "color": "#3a5a6a",
    "tensions": [
      "soaked vs. sheltered",
      "the umbrella vs. the giving up",
      "before vs. after",
      "the drizzle vs. the downpour",
      "together in it vs. alone",
      "refreshed vs. ruined",
      "the grey vs. the colour after",
      "rain as blessing vs. curse",
      "waiting it out vs. walking through",
      "the sound of it vs. the silence after"
    ],
    "affinities": {
      "soaked vs. sheltered": {
        "locs": [
          "Mumbai monsoon street flooding first rain joy",
          "London grey drizzle umbrella commute Waterloo Bridge",
          "Blade Runner noir rain alley neon wet reflection"
        ],
        "poses": [
          "both Mumbai monsoon first rain joy arms open",
          "both London drizzle umbrella commute bridge"
        ],
        "looks": [
          "Mumbai monsoon soaked cotton each joy",
          "London commuter umbrella practical each"
        ]
      }
    },
    "locs": [
      "Mumbai monsoon first rain flooding street joy dancing",
      "Kerala monsoon paddy field rain dramatic",
      "Bangkok monsoon flood street motorbike spray",
      "Hanoi monsoon street rain dramatic tropical",
      "Kolkata monsoon street rain reflection puddle",
      "Blade Runner noir rain alley neon wet reflection night",
      "Los Angeles rain 1940s noir street",
      "Chandler rain San Francisco fog hill night",
      "film noir wet pavement street lamp reflection",
      "Tokyo alley rain neon reflection night narrow",
      "London grey drizzle Waterloo Bridge umbrella commute",
      "Edinburgh drizzle grey castle behind mist",
      "Dublin drizzle grey Georgian street umbrella",
      "Glasgow drizzle grey tenement street",
      "Portland Oregon grey drizzle everyday",
      "tropical downpour beach shelter dramatic",
      "Scottish highland sudden downpour open moor",
      "New York summer downpour steam street",
      "Paris summer downpour cafe awning shelter",
      "Rome sudden downpour fountain piazza",
      "Icelandic rain dramatic rainbow cliff",
      "Vancouver rain forest dramatic mist",
      "Japanese rain bamboo forest atmospheric",
      "Norwegian fjord rain mist dramatic",
      "New Zealand rain rainforest dramatic lush",
      "after rain Paris cobblestone reflection puddle golden",
      "after rain Tokyo neon reflection puddle night",
      "after rain London Victorian street reflection lamp",
      "rainbow after storm field dramatic",
      "after monsoon street reflection India dramatic"
    ],
    "poses": [
      "both Mumbai monsoon first rain arms open joy soaked",
      "both London drizzle umbrella one sharing",
      "both soaked downpour not caring laughing",
      "both shelter doorway watching rain fall",
      "both puddle reflection rain street",
      "both running through rain laughing",
      "both huddled umbrella rain diagonal",
      "both facing rain dramatic open",
      "both after rain reflection puddle city",
      "both monsoon flood wading street",
      "both rain window watching from inside",
      "both tropical downpour beach dramatic",
      "both noir rain street lamp night dramatic",
      "both Tokyo alley rain neon reflection",
      "both drizzle grey city umbrella commute",
      "both soaked through still walking",
      "both looking up rain falling on faces",
      "both rain garden dramatic natural",
      "both under single shop awning rain",
      "both rainbow aftermath dramatic field"
    ],
    "looks": [
      "Mumbai monsoon soaked cotton each colourful joy",
      "London commuter umbrella practical dark each",
      "noir rain trench coat each dramatic",
      "soaked through clothes each don't care",
      "Tokyo street fashion rain layer each",
      "dramatic coat rain each cinematic",
      "simple soaked each rain natural",
      "waterproof practical each rain outdoors",
      "festival rain casual mud each",
      "elegant soaked each formal rain"
    ],
    "promptSuffix": "Colour grade: the specific quality of different rains — Mumbai monsoon first rain joy, London grey drizzle flat, noir rain neon reflection, tropical downpour dramatic. The rain defines the world."
  },
  {
    "id": "gold",
    "name": "THE GOLD",
    "sub": "Excess, Power & the Price of Everything",
    "color": "#c8a800",
    "tensions": [
      "wealth vs. emptiness",
      "power vs. loneliness",
      "excess vs. hunger",
      "the gilded vs. the real",
      "new money vs. old",
      "bought vs. earned",
      "the surface vs. what's beneath",
      "luxury vs. guilt",
      "having everything vs. wanting more",
      "the golden cage vs. freedom"
    ],
    "affinities": {
      "wealth vs. emptiness": {
        "locs": [
          "1980s Texas oil money ranch interior excess",
          "Dubai glass tower penthouse night city below",
          "1920s Wall Street private club oak panelling"
        ],
        "poses": [
          "both in excess interior 1980s Texas uncomfortable",
          "both penthouse Dubai night city below vast"
        ],
        "looks": [
          "1980s Texas oil money excess each shoulder pad",
          "Dubai formal luxury each immaculate"
        ]
      }
    },
    "locs": [
      "1980s Texas oil money ranch interior excess gilt",
      "Dubai penthouse glass tower night city spread",
      "1920s Wall Street private club oak panelling whiskey",
      "Las Vegas high roller suite gold fixtures midnight",
      "Monaco grand prix paddock exclusive 1970s",
      "Mayfair private members club 1990s dark wood",
      "Beverly Hills mansion pool twilight excess",
      "1970s Studio 54 excess night velvet gold",
      "Saudi royal palace reception hall formal",
      "Aspen ski lodge excess fireplace wealthy",
      "Cannes film festival yacht harbour evening",
      "Swiss bank vault interior cold formal",
      "Monte Carlo casino floor evening gowns",
      "Hamptons waterfront estate summer",
      "1980s Wall Street trading floor chaos excess",
      "Venetian palazzo canal view evening candlelight",
      "Hong Kong Peninsula hotel lobby formal",
      "New York Plaza Hotel suite excess gold",
      "Marbella villa pool afternoon Spain excess",
      "Russian oligarch yacht Mediterranean afternoon"
    ],
    "poses": [
      "both in excess interior uncomfortable in their own wealth",
      "both penthouse window city below sense of cost",
      "both at private club table something unsaid",
      "both pool villa afternoon performance of relaxation",
      "both yacht Mediterranean afternoon not at peace",
      "both casino floor evening things at stake",
      "both formal function neither wanting to be there",
      "both in gilded room that doesn't quite fit",
      "both old money house something inherited awkward",
      "both surrounded by luxury looking at each other"
    ],
    "looks": [
      "1980s excess shoulder pad formal each gilt",
      "Dubai luxury immaculate formal each",
      "1920s Wall Street three-piece dark formal each",
      "Las Vegas high roller suit gown each",
      "Monte Carlo evening wear formal each",
      "1970s Studio 54 excess velvet each",
      "New money conspicuous labels each",
      "Old money understated correct each",
      "Beverly Hills casual expensive each",
      "Yacht Mediterranean linen tan each"
    ],
    "promptSuffix": "Colour grade: gold, dark wood, cold glass tower gleam at night. Warm and cold at once."
  },
  {
    "id": "cold",
    "name": "THE COLD",
    "sub": "Ice & Silence",
    "color": "#88ccdd",
    "tensions": [
      "warm vs. frozen",
      "breath vs. stillness",
      "buried vs. exposed",
      "motion vs. ice",
      "alive vs. still",
      "soft vs. brittle",
      "together vs. alone in cold",
      "fire vs. white",
      "held vs. numb",
      "burning inside vs. frozen out",
      "shelter vs. exposure",
      "thaw vs. freeze",
      "heartbeat vs. blizzard",
      "moving vs. hypothermic",
      "found vs. lost in white",
      "light vs. whiteout",
      "ice vs. skin",
      "body heat vs. cold air",
      "glacier vs. moment",
      "winter vs. will"
    ],
    "locs": [
      "frozen lake at first light crack pattern",
      "snowfield before storm dark sky",
      "ice hall empty arena",
      "ski resort predawn gondola loading",
      "tundra flat under white sky",
      "Lapland reindeer forest snow",
      "Svalbard glacier calving edge",
      "Iceland black sand and snow",
      "Greenland ice sheet horizon",
      "Alaska Brooks Range winter",
      "Canada Yukon wilderness freeze",
      "Siberian taiga frozen river",
      "Russia Baikal clear ice walking",
      "Finland ice lake sauna shore",
      "Norway frozen fjord reflection",
      "Sweden frozen archipelago island",
      "Faroe Islands frozen waterfall",
      "Scotland winter glen frozen burn",
      "Canada Quebec winter ice hotel",
      "Vermont maple forest snow",
      "Maine coast harbor frozen",
      "Colorado high alpine winter meadow",
      "Utah Bryce Canyon snow hoodoos",
      "Montana big sky winter open",
      "Wyoming Yellowstone winter steam",
      "Patagonia winter wind ice lake",
      "Antarctic research station exterior",
      "Sub-Antarctic island storm snow",
      "New Zealand South Island winter",
      "Japan Hokkaido snow forest",
      "Japan Aomori snow trees",
      "China Harbin ice sculpture",
      "South Korea Jiri mountain snow",
      "Kazakhstan steppe winter deep",
      "Kyrgyz winter yurt snow",
      "Tibet winter plateau wind",
      "Bhutan winter mountain dzong",
      "Pakistan K2 base camp winter",
      "Nepal Thorong La winter crossing",
      "Lesotho highland snow blanket",
      "Drakensberg winter frost dawn",
      "Morocco Atlas snow",
      "Spain Pyrenees winter pass",
      "Austria Dachstein glacier winter",
      "Switzerland Jungfrau winter",
      "Italy Dolomites winter ice",
      "Slovenia Triglav winter snow",
      "Poland Tatra winter ridge",
      "Czech Krkonose winter forest",
      "Romania Fagaras winter ridge",
      "Bulgaria Rila winter monastery"
    ],
    "poses": [
      "back-to-back in snowfall both exhaling visible breath",
      "both exhaling breath face to face close",
      "running across frozen lake boots sliding",
      "one pulling other through deep snow knee-deep",
      "crouched against wind together backs to gust",
      "both lying in snow looking up arms out",
      "one warming other's hands cupped both",
      "skating hand-in-hand frozen lake",
      "one catching other slipping ice",
      "both squinting into blizzard",
      "one scraping ice from windscreen other watches",
      "huddled together one blanket",
      "both arms around each other cold shivering genuinely",
      "running toward shelter from cold",
      "walking slow through deep snow both high-stepping",
      "building snow shelter together hands working",
      "snowball fight mid-throw both laughing",
      "one carrying other across deep drift",
      "sitting on frozen log breathing out steam",
      "both looking at frozen waterfall in awe",
      "one pointing at aurora other turns slowly",
      "both hands out catching snowflakes upturned",
      "pressed against each other in tent entrance cold",
      "both warming hands over small camp stove",
      "toboggan hill both mid-slide screaming laughing",
      "one behind other both watching ice crack",
      "skis on both facing downhill ready",
      "snowshoes both crossing meadow",
      "one first-aid treating cold exposed hands",
      "both sitting in snowbank looking at view",
      "making snow sculpture together both absorbed",
      "breath visible kissing in snow",
      "both walking into whiteout ahead resolute",
      "one behind other arms wrapped both cold",
      "silhouette against white sky frozen landscape",
      "both running from avalanche safe distance look back",
      "lying down making snow angels both",
      "one leading other by walking pole frozen traverse",
      "both peering into ice cave entrance",
      "ice fishing together hole drilled seated",
      "sitting on snowmobile together engine off",
      "both heads together watching storm approach",
      "one helping other with frozen zip gloves off",
      "walking on ice checking thickness each step",
      "both watching reindeer herd pass quietly",
      "hugging tight in open blizzard field",
      "one pointing at frozen animal tracks other crouches"
    ],
    "looks": [
      "base layers only streamlined indoor cold",
      "slim fitted thermals visible well-worn both",
      "insulated vest long-sleeve base layer both",
      "sport base layers steam rising athletic both",
      "minimal cold-weather athletic sets both form-fitting",
      "heavyweight parka open both voluminous",
      "down jacket puffy both quilted different colours",
      "ski jacket salopettes both technical",
      "wool coat both classic smart cold",
      "heavyweight wool jumper wool trousers both",
      "cable-knit sweater jeans snow boots each",
      "chunky puffer vest base layer both matching",
      "heavyweight fleece pants and pullover both",
      "waterproof trousers base layer both functional",
      "ski wear technical full suit both",
      "expedition cold-weather suit both massive layer",
      "snug puffer jacket slim pants boots both",
      "shearling collar jacket slim trousers each",
      "wool beanie and scarf visible above base layers both",
      "thermal turtleneck wool trousers both",
      "down sleeping bag worn as coat emergency both",
      "merino long-john base layer visible both",
      "heavyweight winter coat and trousers both classic",
      "wool-lined waterproof jacket pants both",
      "fur-trim parka both tundra appropriate",
      "technical mid-layer fleece pants both functional",
      "softshell jacket thermal pants both performance",
      "down gilet over sweater trousers boots each",
      "heritage wool military coat both classic winter",
      "Scandinavian wool knit sweater pants both",
      "traditional Sami layered wool both colourful",
      "Japanese souvenir jacket thickly lined both",
      "heavyweight canvas coverall insulated both",
      "shearling coat narrow pants both editorial",
      "oversized wool cardigan slim pants both",
      "Aran knit chunky trousers boots both",
      "waxed cotton jacket fleece liner pants boots both",
      "down-filled gilet wool jumper pants both",
      "ski après jacket warm pants boots both",
      "plaid wool blanket-coat slim pants boots both",
      "waterproof gaiter pants insulated jacket both",
      "summit jacket technical base layer pants both",
      "heavyweight wool shirt pants boots both layered",
      "sherpa-lined jacket cotton pants sturdy boots both",
      "insulated bib and jacket both full winter",
      "triple-layered parka slim technical pants boots both"
    ],
    "affinities": {
      "warm vs. frozen": {
        "locs": [
          "frozen lake at first light",
          "mountain hut in blizzard",
          "ice cave interior",
          "mountain hut exterior blizzard",
          "snowbound forest clearing"
        ],
        "poses": [
          "faces close sharing warmth",
          "one warming other hands",
          "both exhaling visible breath face to face",
          "breath mist close together",
          "one wrapped around other for warmth"
        ],
        "looks": [
          "base layers only no outer",
          "slim fitted thermals",
          "sport base layers steam rising",
          "down to thermals in snow",
          "compression sets in snow"
        ]
      },
      "breath vs. stillness": {
        "locs": [
          "snowfield before storm",
          "tundra flat under white sky",
          "polar ice plateau",
          "summit in whiteout",
          "wind scour ice plateau"
        ],
        "poses": [
          "both exhaling visible breath face to face",
          "standing still in blizzard",
          "breath mist close together",
          "both looking at ice horizon",
          "snowfield footprint trail toward camera"
        ],
        "looks": [
          "base layers only no outer",
          "slim fitted thermals",
          "minimal cold-weather athletic sets",
          "down to thermals in snow",
          "athletic cold gear hood down"
        ]
      },
      "buried vs. exposed": {
        "locs": [
          "avalanche debris field",
          "snow-buried road",
          "snow trench",
          "snowfield couloir",
          "frozen lake at first light"
        ],
        "poses": [
          "digging out together",
          "snow cave entry both",
          "building snow shelter together",
          "snow-buried car dig out",
          "carrying each other through snow"
        ],
        "looks": [
          "hardshell open to underlayer",
          "open technical jackets thermals",
          "insulated bib pants thermal above",
          "blizzard-wet thermals",
          "winter training kit minimal"
        ]
      },
      "motion vs. ice": {
        "locs": [
          "frozen lake at first light",
          "ice road surface",
          "ice rink after hours",
          "frozen river mid-span",
          "glacier tongue surface"
        ],
        "poses": [
          "running across frozen lake",
          "frozen lake crossing run",
          "skiing toward camera in sync",
          "ice rink stumble catch",
          "crampons climbing together"
        ],
        "looks": [
          "speedskating suit",
          "nordic ski race suit",
          "cold racing set",
          "ice-slick technical suit",
          "winter sprint set"
        ]
      },
      "alive vs. still": {
        "locs": [
          "snowfield before storm",
          "tundra flat under white sky",
          "polar ice plateau",
          "summit in whiteout",
          "wind scour ice plateau"
        ],
        "poses": [
          "standing still in blizzard",
          "both looking at ice horizon",
          "snowfield footprint trail toward camera",
          "seated on ice block back to back",
          "two figures in whiteout"
        ],
        "looks": [
          "base layers only no outer",
          "slim fitted thermals",
          "minimal cold-weather athletic sets",
          "down to thermals in snow",
          "athletic cold gear hood down"
        ]
      },
      "soft vs. brittle": {
        "locs": [
          "snowbound forest clearing",
          "winter forest track",
          "frozen lake island",
          "snow-dusted urban street",
          "backcountry ski camp"
        ],
        "poses": [
          "snow angel side by side",
          "post-fall in snow laughing",
          "mid-jump in snowfield",
          "both looking up at snowfall",
          "both arms out in blizzard"
        ],
        "looks": [
          "slim fitted thermals",
          "thin fleece layers fitted",
          "minimal cold-weather athletic sets",
          "winter run set no outer",
          "running gear in snowfall"
        ]
      },
      "together vs. alone in cold": {
        "locs": [
          "mountain hut in blizzard",
          "backcountry ski camp",
          "polar camp tent",
          "mountain hut exterior blizzard",
          "ice cave interior"
        ],
        "poses": [
          "one wrapped around other for warmth",
          "faces close sharing warmth",
          "both in ice cave face to face",
          "building snow shelter together",
          "seated on ice block back to back"
        ],
        "looks": [
          "base layers only no outer",
          "slim fitted thermals",
          "down to thermals in snow",
          "compression sets in snow",
          "one-piece thermal suit"
        ]
      },
      "fire vs. white": {
        "locs": [
          "snowfield before storm",
          "tundra flat under white sky",
          "polar ice plateau",
          "summit in whiteout",
          "wind scour ice plateau"
        ],
        "poses": [
          "both arms out in blizzard",
          "face into storm together",
          "leaning into blizzard",
          "blizzard walk into white",
          "standing still in blizzard"
        ],
        "looks": [
          "sport base layers steam rising",
          "compression sets in snow",
          "athletic cold gear hood down",
          "down to thermals in snow",
          "base layers only no outer"
        ]
      },
      "held vs. numb": {
        "locs": [
          "mountain hut in blizzard",
          "ice cave interior",
          "backcountry ski camp",
          "mountain rescue site winter",
          "snowbound forest clearing"
        ],
        "poses": [
          "one warming other hands",
          "cold hands in each other",
          "one glove off hands held cold",
          "faces close sharing warmth",
          "rescue carry through snow"
        ],
        "looks": [
          "base layers only no outer",
          "slim fitted thermals",
          "compression sets in snow",
          "down to thermals in snow",
          "minimal cold-weather athletic sets"
        ]
      },
      "burning inside vs. frozen out": {
        "locs": [
          "winter race finish line",
          "ski piste at close",
          "nordic ski trail",
          "snowfield before storm",
          "tundra flat under white sky"
        ],
        "poses": [
          "both panting steam post effort",
          "race finish line embrace winter",
          "running across frozen lake",
          "frozen in sprint across white ground",
          "racing on snowshoes"
        ],
        "looks": [
          "sport base layers steam rising",
          "winter sprint set",
          "cold racing set",
          "ski race suit vented open",
          "biathlon undersuit"
        ]
      },
      "shelter vs. exposure": {
        "locs": [
          "mountain hut in blizzard",
          "ice cave interior",
          "snow trench",
          "polar camp tent",
          "mountain hut exterior blizzard"
        ],
        "poses": [
          "building snow shelter together",
          "snow cave entry both",
          "crouched against wind together",
          "digging out together",
          "one wrapped around other for warmth"
        ],
        "looks": [
          "hardshell open to underlayer",
          "open technical jackets thermals",
          "insulated bib pants thermal above",
          "down interior layer shell open",
          "blizzard-wet thermals"
        ]
      },
      "thaw vs. freeze": {
        "locs": [
          "frozen lake at first light",
          "glacier tongue surface",
          "frozen dam top",
          "frozen waterfall face",
          "ice shelf edge"
        ],
        "poses": [
          "standing at frozen waterfall",
          "both looking at ice horizon",
          "leaping crevasse together",
          "one above crevasse one below",
          "frozen lake crossing run"
        ],
        "looks": [
          "base layers only no outer",
          "slim fitted thermals",
          "compression sets in snow",
          "athletic cold gear hood down",
          "open technical jackets thermals"
        ]
      },
      "heartbeat vs. blizzard": {
        "locs": [
          "snowfield before storm",
          "summit in whiteout",
          "blizzard highway shoulder",
          "mountain hut exterior blizzard",
          "wind scour ice plateau"
        ],
        "poses": [
          "standing wind brace holding each other",
          "face into storm together",
          "leaning into blizzard",
          "both arms out in blizzard",
          "blizzard walk into white"
        ],
        "looks": [
          "hardshell open to underlayer",
          "open technical jackets thermals",
          "blizzard-wet thermals",
          "insulated bib pants thermal above",
          "down interior layer shell open"
        ]
      },
      "moving vs. hypothermic": {
        "locs": [
          "arctic shoreline",
          "tundra flat under white sky",
          "avalanche debris field",
          "mountain rescue site winter",
          "polar ice plateau"
        ],
        "poses": [
          "rescue carry through snow",
          "carrying each other through snow",
          "one pulling other through deep snow",
          "running across frozen lake",
          "frozen in sprint across white ground"
        ],
        "looks": [
          "winter training kit minimal",
          "minimal cold-weather athletic sets",
          "down to thermals in snow",
          "sport base layers steam rising",
          "athletic cold gear hood down"
        ]
      },
      "found vs. lost in white": {
        "locs": [
          "summit in whiteout",
          "snowfield before storm",
          "tundra flat under white sky",
          "wind scour ice plateau",
          "polar ice plateau"
        ],
        "poses": [
          "snowfield footprint trail toward camera",
          "both looking at ice horizon",
          "blizzard walk into white",
          "face into storm together",
          "two figures in whiteout"
        ],
        "looks": [
          "base layers only no outer",
          "slim fitted thermals",
          "minimal cold-weather athletic sets",
          "down to thermals in snow",
          "athletic cold gear hood down"
        ]
      },
      "light vs. whiteout": {
        "locs": [
          "summit in whiteout",
          "snowfield before storm",
          "wind scour ice plateau",
          "polar ice plateau",
          "tundra flat under white sky"
        ],
        "poses": [
          "standing still in blizzard",
          "blizzard walk into white",
          "both looking at ice horizon",
          "face into storm together",
          "two figures in whiteout"
        ],
        "looks": [
          "base layers only no outer",
          "slim fitted thermals",
          "athletic cold gear hood down",
          "down to thermals in snow",
          "minimal cold-weather athletic sets"
        ]
      },
      "ice vs. skin": {
        "locs": [
          "frozen lake at first light",
          "ice cave interior",
          "glacier tongue surface",
          "arctic shoreline",
          "ice shelf edge"
        ],
        "poses": [
          "one glove off hands held cold",
          "cold hands in each other",
          "one warming other hands",
          "breath fog kiss moment",
          "standing at frozen waterfall"
        ],
        "looks": [
          "minimal thermal base layer",
          "insulated vests long sleeve base",
          "cold water wetsuit",
          "insulated vests base layer",
          "down to thermals in snow"
        ]
      },
      "body heat vs. cold air": {
        "locs": [
          "ski piste at close",
          "nordic ski trail",
          "winter race finish line",
          "snowfield couloir",
          "snowfield before storm"
        ],
        "poses": [
          "both panting steam post effort",
          "breath mist close together",
          "both exhaling visible breath face to face",
          "running across frozen lake",
          "sprinting across glacier together"
        ],
        "looks": [
          "sport base layers steam rising",
          "winter sprint set",
          "cold racing set",
          "ski race suit vented open",
          "compression sets in snow"
        ]
      },
      "glacier vs. moment": {
        "locs": [
          "glacier tongue surface",
          "glacial moraine field",
          "crevasse edge",
          "ice shelf edge",
          "polar ice plateau"
        ],
        "poses": [
          "both looking at ice horizon",
          "leaping crevasse together",
          "one above crevasse one below",
          "standing on glacier edge",
          "crampons climbing together"
        ],
        "looks": [
          "ice climbing base layer harness",
          "open technical jackets thermals",
          "alpine base layer set",
          "compression sets in snow",
          "down to thermals in snow"
        ]
      },
      "winter vs. will": {
        "locs": [
          "winter race finish line",
          "summit in whiteout",
          "snowfield couloir",
          "nordic ski trail",
          "avalanche debris field"
        ],
        "poses": [
          "race finish line embrace winter",
          "running across frozen lake",
          "frozen in sprint across white ground",
          "racing on snowshoes",
          "both panting steam post effort"
        ],
        "looks": [
          "winter sprint set",
          "cold racing set",
          "ski race suit vented open",
          "biathlon undersuit",
          "sport base layers steam rising"
        ]
      }
    },
    "promptSuffix": "Colour grade: cool, de-saturated, blue-white palette. Visible breath where temperatures warrant it. The cold should be palpable — not a backdrop but a physical presence."
  },
  {
    "id": "wild",
    "name": "THE WILD",
    "sub": "Raw & Unbuilt",
    "color": "#6aaa88",
    "tensions": [
      "human vs. nature",
      "shelter vs. exposure",
      "tamed vs. feral",
      "found vs. lost",
      "still vs. alive",
      "dry vs. soaked",
      "built vs. grown",
      "fragile vs. permanent",
      "instinct vs. reason",
      "home vs. nowhere",
      "cultivated vs. wild",
      "noise vs. silence",
      "trail vs. off-trail",
      "map vs. terrain",
      "body vs. elements",
      "small vs. vast",
      "familiar vs. unknown",
      "fed vs. hungry",
      "warm vs. cold night",
      "watched vs. alone"
    ],
    "locs": [
      "cliff face at golden hour lichen-covered",
      "dense forest clearing shafts of light",
      "tidal flat at low tide exposed",
      "open grassland in wind",
      "river gorge base spray rising",
      "bog moorland at dusk",
      "ancient woodland root tangle",
      "estuarine mudflat wide sky",
      "heath in flower purple wide",
      "chalk downland escarpment edge",
      "limestone pavement bare",
      "peat highland loch reflected",
      "sand dune blowout hollow",
      "flint shingle beach storm",
      "reed bed at dawn mist",
      "old growth redwood base",
      "Scottish glen river crossing",
      "Welsh upland reservoir edge",
      "Peak District gritstone edge",
      "New Forest ancient oak hollow",
      "Lake District fell top",
      "Dartmoor tor wind",
      "Exmoor coastline cliff path",
      "Pembrokeshire sea stack distant",
      "Cairngorm plateau tundra",
      "Skye Cuillin black rock",
      "Hebrides machair wildflowers",
      "Norwegian birch forest autumn",
      "Swedish elk forest dawn",
      "Finnish lake island landing",
      "Estonian bog wooden walkway",
      "Baltic sea coast pine",
      "Breton coastal heathland",
      "Galician mountain forest green",
      "Sardinian maquis scrub",
      "Corsican gorge river",
      "Croatian karst spring",
      "Slovenian Triglav plateau",
      "Turkish mountain lake turquoise",
      "Georgian Caucasus meadow",
      "Mongolian steppe endless",
      "Kyrgyz alpine pasture yurt distant",
      "Tibetan plateau wind-scoured",
      "Bhutanese forest monastery visible above",
      "Indian hill station mist",
      "Sri Lanka highland tea",
      "New Zealand beech forest",
      "Australian blue mountain heath",
      "Tasmanian alpine meadow",
      "Kiwi rainforest fern gully"
    ],
    "poses": [
      "running through tall grass arms trailing",
      "looking up through forest canopy both",
      "one carrying other across stream",
      "sprinting toward storm edge laughing",
      "wading carefully through rocky shallows ankle-deep",
      "both crouched examining animal tracks",
      "one helping other over fallen tree",
      "standing on rock above river both looking",
      "back-to-back in open field scanning horizon",
      "both lying in meadow looking up at clouds",
      "one pointing at bird of prey other looks",
      "walking single file narrow animal trail",
      "scrambling up rock together hand-over-hand",
      "both pressed against ancient tree listening",
      "one steadying other at river crossing",
      "watching deer in clearing both frozen",
      "building camp fire together crouched",
      "sitting on cliff edge feet hanging",
      "back-to-back reading maps together",
      "one tracking footprints other watches",
      "both in morning mist faces up",
      "running from sudden rain laughing",
      "both arms out on cliff edge wind",
      "one behind other binoculars shared",
      "crouching at water edge examining pool",
      "both looking back down trail they climbed",
      "one finding other in dense fog relief",
      "walking waist-deep through tall fern",
      "both watching sunset from rock perch",
      "one arm around other deer behind unaware",
      "picking wild berries together",
      "both sitting on bank feet in stream",
      "one helping other ford deep section",
      "both frozen at sound of something large",
      "sunrise watch both wrapped in one layer",
      "scrambling together across moorland",
      "both lying on heather looking up",
      "one lifting other to see over ridge",
      "cooking over open fire both crouched",
      "foraging together both bent examining",
      "both in silhouette on skyline ridge",
      "one pointing at distant smoke other looks",
      "building shelter together emergency",
      "one navigating with compass other steadies map",
      "both splashing through shallow stream laughing",
      "crossing boggy ground linking arms"
    ],
    "looks": [
      "worn linen shirt and canvas shorts both natural",
      "broken-in hiking boots trail pants each",
      "faded cotton tee and worn shorts both",
      "field shirt rolled sleeves walking trousers each",
      "sun-faded linen layers sandals both",
      "lightweight merino tee trail shorts each",
      "outdoor cotton shirt worn open hiking pants each",
      "packable rain jacket tee trail shoes each",
      "canvas shirt worn jeans broken-in boots each",
      "breathable base layer hiking pants each",
      "worn flannel shirt over tee hiking shorts each",
      "sun shirt wide brim hat trail pants each",
      "earth tone linen top loose trail pants each",
      "trail runners gaiters shorts each rugged",
      "wool shirt worn canvas trousers boots each",
      "sun-bleached field shirt rugged shorts each",
      "lightweight hiking dress and shorts each",
      "merino hoodie trail pants each muted colour",
      "outdoor vest over tee rugged pants each",
      "trail shorts moisture-wicking top each lightweight",
      "waxed cotton jacket worn jeans boots each",
      "natural cotton layers worn with use each",
      "fleece over base layer hiking pants each",
      "sun protection shirt leggings trail shoes each",
      "worn adventure shirt khaki trousers each",
      "lightweight tee board shorts trail shoes water-adjacent",
      "insect-shield shirt pants both practical",
      "long-sleeve merino sun protection pants each",
      "midlayer fleece open tee beneath trail pants each",
      "country tweed worn open field shirt each classic",
      "field jacket worn tee rugged trousers each",
      "soft-shell jacket hiking leggings trail shoes each",
      "ripstop pants moisture-wicking tee each",
      "canvas cap sun shirt trail pants each",
      "technical t-shirt shorts both trail running",
      "vintage outdoor shirt cotton trousers both worn",
      "gore-tex light jacket base layer pants each",
      "merino zip neck trail pants each",
      "woven belt canvas shorts boots each",
      "broken-in leather belt pack boots each with worn shirt",
      "outdoor shirt shorts socks visible boots each",
      "faded green field shirt khaki shorts each",
      "worn cotton dress and worn tee shorts each",
      "technical polo shirt trail pants each",
      "sun-protection hooded top trail pants each",
      "linen wide trouser cotton tee both relaxed",
      "packable down vest base layer trail pants each"
    ],
    "affinities": {
      "human vs. nature": {
        "locs": [
          "open grassland at wind",
          "coastal headland",
          "volcanic plain",
          "moorland at storm",
          "high plateau"
        ],
        "poses": [
          "back-to-back on open plain",
          "both arms open to weather",
          "sprinting toward storm edge",
          "storm watch together at cliff",
          "standing in fog at edge"
        ],
        "looks": [
          "worn linen sandals",
          "faded cotton sets",
          "raw cotton open fronts",
          "minimal natural fabrics",
          "earth-tone cotton sets"
        ]
      },
      "shelter vs. exposure": {
        "locs": [
          "dense forest clearing",
          "old growth forest interior",
          "boreal forest track",
          "pine forest at dawn",
          "ancient forest floor"
        ],
        "poses": [
          "tent door two silhouettes",
          "building fire together",
          "cooking over fire together",
          "open fire cooking arm around",
          "navigating dense brush"
        ],
        "looks": [
          "worn camp clothes",
          "earth-tone cotton sets",
          "worn hiking shorts simple tanks",
          "patched shorts sun-bleached tee",
          "worn linen sandals"
        ]
      },
      "tamed vs. feral": {
        "locs": [
          "jungle edge",
          "rainforest canopy break",
          "old growth forest interior",
          "lava field coast",
          "volcanic plain"
        ],
        "poses": [
          "running through tall grass",
          "racing down hillside",
          "emerging from tree line",
          "climbing tree trunk together",
          "jungle path narrow single file"
        ],
        "looks": [
          "raw cotton open fronts",
          "canvas shorts moisture-wicking tops",
          "minimal natural fabrics",
          "frayed shorts knotted vest",
          "ripped cotton earth tones"
        ]
      },
      "found vs. lost": {
        "locs": [
          "dense forest clearing",
          "high plateau",
          "canyon floor",
          "moorland at storm",
          "peat bog track"
        ],
        "poses": [
          "one pointing one looking",
          "crouched examining ground",
          "navigating dense brush",
          "one teaching other tracking",
          "standing in fog at edge"
        ],
        "looks": [
          "worn hiking shorts simple tanks",
          "earth-tone cotton sets",
          "worn camp clothes",
          "canvas shorts moisture-wicking tops",
          "worn linen sandals"
        ]
      },
      "still vs. alive": {
        "locs": [
          "ancient forest floor",
          "redwood forest floor",
          "peat bog track",
          "marshland at sunrise",
          "old growth forest interior"
        ],
        "poses": [
          "lying in open meadow looking up",
          "sitting on cliff edge facing out",
          "standing in fog at edge",
          "tent door two silhouettes",
          "both looking at same horizon"
        ],
        "looks": [
          "worn linen sandals",
          "faded cotton sets",
          "minimal natural fabrics",
          "earth-tone cotton sets",
          "unbleached cotton separates"
        ]
      },
      "dry vs. soaked": {
        "locs": [
          "desert wash after rain",
          "river gorge base",
          "jungle waterfall pool",
          "river rapid entry bank",
          "tidal flat at low tide"
        ],
        "poses": [
          "wading chest-deep in river",
          "bathing in river pool",
          "racing through shallow stream",
          "standing in waterfall",
          "cold water plunge together"
        ],
        "looks": [
          "board shorts cotton top",
          "surf boardshorts open linen",
          "beach wrap and board shorts",
          "canvas shorts moisture-wicking tops",
          "worn tee knotted shorts"
        ]
      },
      "built vs. grown": {
        "locs": [
          "ancient quarry now overgrown",
          "lava field coast",
          "volcanic plain",
          "limestone karst field",
          "rock arch desert"
        ],
        "poses": [
          "crouched examining ground",
          "both arms open to weather",
          "lying in open meadow looking up",
          "standing in fog at edge",
          "one pointing one looking"
        ],
        "looks": [
          "worn linen sandals",
          "raw cotton open fronts",
          "minimal natural fabrics",
          "earth-tone cotton sets",
          "unbleached cotton separates"
        ]
      },
      "fragile vs. permanent": {
        "locs": [
          "cliff face at golden hour",
          "chalk cliff top",
          "sea stack at dusk",
          "coastal headland",
          "open sea stack summit"
        ],
        "poses": [
          "sitting on cliff edge facing out",
          "cliff-edge wind brace",
          "storm watch together at cliff",
          "cliff base wave spray",
          "ocean jump off rock"
        ],
        "looks": [
          "worn linen sandals",
          "faded cotton sets",
          "minimal natural fabrics",
          "earth-tone cotton sets",
          "canvas shorts moisture-wicking tops"
        ]
      },
      "instinct vs. reason": {
        "locs": [
          "jungle edge",
          "rainforest canopy break",
          "moorland at storm",
          "lava field coast",
          "arctic coast"
        ],
        "poses": [
          "running from rain together",
          "sprinting toward storm edge",
          "racing down hillside",
          "cold water plunge together",
          "wild swimming entry together"
        ],
        "looks": [
          "raw cotton open fronts",
          "board shorts cotton top",
          "frayed shorts knotted vest",
          "minimal trail layers",
          "cargo shorts fitted cotton top"
        ]
      },
      "home vs. nowhere": {
        "locs": [
          "remote island shore",
          "high plateau",
          "canyon floor",
          "high desert plateau",
          "wetland island"
        ],
        "poses": [
          "tent door two silhouettes",
          "cooking over fire together",
          "building fire together",
          "open fire cooking arm around",
          "sitting back to back in meadow"
        ],
        "looks": [
          "worn camp clothes",
          "worn linen sandals",
          "earth-tone cotton sets",
          "camp shorts layered cottons",
          "patched shorts sun-bleached tee"
        ]
      },
      "cultivated vs. wild": {
        "locs": [
          "meadow at harvest time",
          "heath at golden hour",
          "valley floor at dusk",
          "birch forest in autumn",
          "ancient forest floor"
        ],
        "poses": [
          "lying in open meadow looking up",
          "hand in hand through grass",
          "caught mid-laugh in wind",
          "foraging side by side",
          "morning stretch wild campsite"
        ],
        "looks": [
          "worn linen sandals",
          "faded cotton sets",
          "linen scrub wear",
          "unbleached cotton separates",
          "windswept linen sandals"
        ]
      },
      "noise vs. silence": {
        "locs": [
          "ancient forest floor",
          "redwood forest floor",
          "peat bog track",
          "marshland at sunrise",
          "frost meadow"
        ],
        "poses": [
          "lying in open meadow looking up",
          "standing in fog at edge",
          "both looking at same horizon",
          "tent door two silhouettes",
          "sitting on cliff edge facing out"
        ],
        "looks": [
          "worn linen sandals",
          "faded cotton sets",
          "minimal natural fabrics",
          "earth-tone cotton sets",
          "unbleached cotton separates"
        ]
      },
      "trail vs. off-trail": {
        "locs": [
          "dense forest clearing",
          "ancient forest floor",
          "peat bog track",
          "boreal forest track",
          "highland glen"
        ],
        "poses": [
          "navigating dense brush",
          "crouched examining ground",
          "one teaching other tracking",
          "jungle path narrow single file",
          "two at forest stream mouth"
        ],
        "looks": [
          "worn hiking shorts simple tanks",
          "canvas shorts moisture-wicking tops",
          "trail shorts fitted athletic top",
          "field shirt open shorts",
          "earth-tone cotton sets"
        ]
      },
      "map vs. terrain": {
        "locs": [
          "high plateau",
          "canyon floor",
          "moorland at storm",
          "highland glen",
          "peat bog track"
        ],
        "poses": [
          "one pointing one looking",
          "crouched examining ground",
          "one teaching other tracking",
          "standing in fog at edge",
          "both looking at same horizon"
        ],
        "looks": [
          "worn hiking shorts simple tanks",
          "earth-tone cotton sets",
          "canvas shorts moisture-wicking tops",
          "field shirt open shorts",
          "worn camp clothes"
        ]
      },
      "body vs. elements": {
        "locs": [
          "coastal headland",
          "moorland at storm",
          "open grassland at wind",
          "arctic coast",
          "volcanic plain"
        ],
        "poses": [
          "both arms open to weather",
          "sprinting toward storm edge",
          "cliff-edge wind brace",
          "standing in rainfall",
          "storm watch together at cliff"
        ],
        "looks": [
          "raw cotton open fronts",
          "minimal natural fabrics",
          "canvas shorts moisture-wicking tops",
          "trail shorts fitted athletic top",
          "minimal trail layers"
        ]
      },
      "small vs. vast": {
        "locs": [
          "high plateau",
          "open grassland at wind",
          "open sea stack summit",
          "long beach at low tide",
          "empty beach winter"
        ],
        "poses": [
          "back-to-back on open plain",
          "both looking at same horizon",
          "both arms open to weather",
          "sitting on cliff edge facing out",
          "wild camp summit view"
        ],
        "looks": [
          "worn linen sandals",
          "faded cotton sets",
          "minimal natural fabrics",
          "earth-tone cotton sets",
          "canvas shorts moisture-wicking tops"
        ]
      },
      "familiar vs. unknown": {
        "locs": [
          "jungle edge",
          "lava field coast",
          "arctic coast",
          "volcanic plain",
          "limestone karst field"
        ],
        "poses": [
          "crouched examining ground",
          "one pointing one looking",
          "navigating dense brush",
          "standing in fog at edge",
          "one teaching other tracking"
        ],
        "looks": [
          "worn hiking shorts simple tanks",
          "earth-tone cotton sets",
          "canvas shorts moisture-wicking tops",
          "worn camp clothes",
          "field shirt open shorts"
        ]
      },
      "fed vs. hungry": {
        "locs": [
          "ancient forest floor",
          "valley floor at dusk",
          "highland glen",
          "meadow at harvest time",
          "forest stream crossing"
        ],
        "poses": [
          "foraging side by side",
          "cooking over fire together",
          "open fire cooking arm around",
          "building fire together",
          "kneeling at river bank"
        ],
        "looks": [
          "worn camp clothes",
          "worn linen sandals",
          "earth-tone cotton sets",
          "patched shorts sun-bleached tee",
          "camp shorts layered cottons"
        ]
      },
      "warm vs. cold night": {
        "locs": [
          "ancient forest floor",
          "boreal forest track",
          "highland glen",
          "frost meadow",
          "pine forest at dawn"
        ],
        "poses": [
          "tent door two silhouettes",
          "building fire together",
          "cooking over fire together",
          "open fire cooking arm around",
          "morning stretch wild campsite"
        ],
        "looks": [
          "worn camp clothes",
          "earth-tone cotton sets",
          "camp shorts layered cottons",
          "worn hiking shorts simple tanks",
          "patched shorts sun-bleached tee"
        ]
      },
      "watched vs. alone": {
        "locs": [
          "remote island shore",
          "high plateau",
          "wetland island",
          "open sea stack summit",
          "high desert plateau"
        ],
        "poses": [
          "both looking at same horizon",
          "sitting on cliff edge facing out",
          "tent door two silhouettes",
          "wild camp summit view",
          "sunrise silhouette together"
        ],
        "looks": [
          "worn linen sandals",
          "faded cotton sets",
          "minimal natural fabrics",
          "earth-tone cotton sets",
          "board shorts cotton top"
        ]
      }
    },
    "promptSuffix": "Colour grade: the light of the specific environment — woodland dapple, open moorland grey, highland gold. No studio. Whatever light was available is the right light."
  },
  {
    "id": "court",
    "name": "THE COURT",
    "sub": "Sport, Obsession & the Arena",
    "color": "#c8820a",
    "tensions": [
      "winning vs. losing",
      "the match vs. the life",
      "obsession vs. balance",
      "body vs. mind",
      "the opponent vs. the self",
      "peak vs. decline",
      "the crowd vs. the silence",
      "glory vs. aftermath",
      "control vs. surrender",
      "the last set vs. everything after"
    ],
    "affinities": {
      "winning vs. losing": {
        "locs": [
          "1970s Roland Garros clay court red dust late afternoon",
          "Harlem street basketball court chain-link night flood",
          "Wimbledon grass court morning dew empty"
        ],
        "poses": [
          "both mid-match clay dust red court intense",
          "both at chain-link fence basketball night exhausted"
        ],
        "looks": [
          "1970s tennis whites each clay dust",
          "basketball vest and shorts 1990s each worn"
        ]
      }
    },
    "locs": [
      "1970s Roland Garros clay court red dust late afternoon",
      "Harlem street basketball court chain-link night 1990s",
      "Wimbledon grass court morning dew empty pre-match",
      "1980s boxing gym ring ropes overhead single light",
      "1960s Flushing Meadows hard court crowd behind",
      "Soviet sports hall gymnasium late 1970s fluorescent",
      "1990s school gymnasium basketball finals night",
      "Brooklyn boxing gym 1950s leather bag dust",
      "indoor tennis court 1980s green carpet empty",
      "street football pitch Brazil favela evening",
      "outdoor basketball court Los Angeles sunset 1990s",
      "fencing hall épée 1970s European championship",
      "Rolland Garros press box 1980s clay below",
      "squash court white walls echo 1970s",
      "Olympic velodrome track banking 1980s",
      "snooker hall green baize single overhead lamp",
      "ice hockey rink empty practice dawn",
      "horse racing paddock morning dew 1960s",
      "wrestling mat gymnasium 1970s fluorescent",
      "stadium corridor tunnel pre-match concrete"
    ],
    "poses": [
      "both mid-match clay dust court faces intense",
      "both at chain-link fence basketball exhausted hands on knees",
      "one just won other just lost same court",
      "both in changing room after match emotional",
      "both mid-training sparring boxing ring",
      "one coaching other on court intense instruction",
      "both warming up parallel but separate",
      "both looking at scoreboard different reactions",
      "one mid-serve other watching frozen",
      "both walking off court together end of career"
    ],
    "looks": [
      "1970s tennis whites each clay dust stained",
      "basketball vest shorts 1990s worn each",
      "boxing shorts vest 1950s each worn",
      "fencing mask and whites 1970s each",
      "Olympic tracksuit 1980s each",
      "1960s court tennis whites pristine each",
      "Wimbledon whites traditional formal each",
      "street basketball casual 1990s each",
      "boxing ring robe dramatic entrance each",
      "sports hall kit 1970s fluorescent each"
    ],
    "promptSuffix": "Colour grade: clay dust red, gymnasium fluorescent, boxing ring single overhead light. Gritty and physical."
  },
  {
    "id": "stage",
    "name": "THE STAGE",
    "sub": "Performance, Theatricality & the Everyday Drama",
    "color": "#8a1a6a",
    "tensions": [
      "performance vs. sincerity",
      "audience vs. performer",
      "the role vs. the person",
      "watched vs. unwatched",
      "the mask vs. the face",
      "staged vs. caught",
      "the speech vs. the feeling",
      "dramatic vs. mundane",
      "playing vs. being",
      "the gesture vs. the truth"
    ],
    "affinities": {
      "performance vs. sincerity": {
        "locs": [
          "petrol station forecourt dramatic speech nobody watching",
          "supermarket aisle operatic gesture fluorescent",
          "laundromat 3am theatrical monologue empty"
        ],
        "poses": [
          "one delivering speech other is audience petrol station",
          "both theatrical gesture mundane location fluorescent"
        ],
        "looks": [
          "formal evening wear incongruous mundane location each",
          "theatrical dramatic clothes wrong context each"
        ]
      }
    },
    "locs": [
      "petrol station forecourt dramatic speech nobody watching night",
      "supermarket aisle operatic gesture fluorescent ordinary",
      "laundromat 3am theatrical monologue washing machines",
      "bus stop theatrical declaration nobody waiting",
      "hospital waiting room dramatic exit door",
      "car park rooftop theatrical confrontation empty night",
      "kebab shop 2am grand gesture fluorescent",
      "train carriage theatrical aside fellow passengers ignore",
      "airport arrivals hall dramatic reunion theatrical",
      "lift lobby theatrical pause before doors open",
      "office corridor dramatic walk away slow motion",
      "phone box raining theatrical call dramatic",
      "motorway services dramatic tableau ordinary setting",
      "underpass theatrical freeze frame urban",
      "corner shop theatrical argument fluorescent",
      "post office queue theatrical monologue",
      "swimming pool changing room dramatic exit",
      "railway platform theatrical goodbye overplayed",
      "department store escalator theatrical descent",
      "bowling alley theatrical celebration strike",
      "bus upper deck theatrical speech empty",
      "car wash theatrical moment soap suds",
      "dentist waiting room theatrical anxiety performance",
      "betting shop theatrical reaction to result",
      "library theatrical whispered intensity quiet",
      "chip shop 11pm theatrical romance counter",
      "newsagent morning theatrical significance ordinary",
      "cemetery theatrical grief performative",
      "wedding registry office theatrical entrance late",
      "rooftop car park theatrical last stand night"
    ],
    "poses": [
      "one delivering speech other is sole audience mundane location",
      "both theatrical freeze frame mid-mundane-task dramatic",
      "one dramatic exit mundane space other watches",
      "both operatic gesture ordinary fluorescent setting",
      "one monologue other bored mundane location",
      "both theatrical slow motion ordinary context",
      "one dramatic fall other nonplussed mundane",
      "both mid-theatrical-argument mundane public space",
      "one grand romantic gesture other embarrassed public space",
      "both theatrical curtain call wrong location entirely",
      "one pointing dramatically other indifferent ordinary",
      "both staged tableau mundane background",
      "one theatrical aside to camera other unaware",
      "both dramatic embrace incongruous mundane setting",
      "one theatrical collapse other steps over them ordinary",
      "both theatrical bow mundane location",
      "one soliloquy other on phone mundane",
      "both theatrical reconciliation supermarket aisle",
      "one dramatic entrance through ordinary door",
      "both theatrical freeze mid-ordinary-action"
    ],
    "looks": [
      "formal evening wear incongruous mundane location each",
      "theatrical costume wrong context entirely each",
      "dramatic cape ordinary setting each incongruous",
      "Shakespearean costume petrol station each",
      "opera costume supermarket each absurd",
      "everyday clothes performed theatrically each",
      "tuxedo and gown laundromat each",
      "Victorian theatrical ordinary location each",
      "commuter clothes performed grandly each",
      "casual clothes maximum theatrical intensity each"
    ],
    "promptSuffix": "Colour grade: the specific contrast of theatrical drama in mundane light — fluorescent supermarket, petrol station sodium, laundromat neon. Heightened emotion in ordinary space."
  },
  {
    "id": "romance",
    "name": "THE ROMANCE",
    "sub": "Dangerous, Obsessive & Undeniable",
    "color": "#8b1a4a",
    "tensions": [
      "obsession vs. devotion",
      "first vs. last",
      "passion vs. destruction",
      "pulled toward vs. pushed away",
      "the almost vs. the finally",
      "wanting vs. having",
      "forbidden vs. inevitable",
      "the secret vs. the confession",
      "intoxication vs. clarity",
      "desire vs. consequence",
      "the beginning vs. the ending",
      "love vs. need",
      "fire vs. tenderness",
      "the risk vs. the safety",
      "what if vs. what is"
    ],
    "affinities": {
      "obsession vs. devotion": {
        "locs": [
          "rain-soaked street night neon reflections",
          "rooftop city edge midnight",
          "hotel corridor single light night"
        ],
        "poses": [
          "one pulling other back by the wrist night rain",
          "both about to kiss stopped by something unseen"
        ],
        "looks": [
          "soaked dark clothes night rain each",
          "all black each night urban"
        ]
      }
    },
    "locs": [
      "rain-soaked street night neon reflections",
      "rooftop city edge midnight confession",
      "hotel corridor single light night",
      "fire escape night city below",
      "abandoned ballroom chandelier still lit",
      "lighthouse edge storm approaching",
      "midnight garden statuary shadow",
      "train departing platform one left behind",
      "cinema empty last showing",
      "rooftop pool city lights reflection midnight",
      "alleyway rain single lamp",
      "long corridor hotel night both ends dark",
      "bridge night fog below",
      "theatre wings backstage curtain",
      "Paris street rain autumn night",
      "empty restaurant after closing one candle",
      "car park top level night city view",
      "summer thunderstorm porch lit",
      "abandoned church single candle",
      "cliff edge storm sea below",
      "night train compartment moving",
      "library closed after hours one lamp",
      "phone box rain night neon",
      "hotel room morning light complicated",
      "museum closed after hours one guard lamp",
      "empty swimming pool night",
      "rooftop water tower night city",
      "jazz club late night last song",
      "night market closing stalls",
      "boardwalk end of season night"
    ],
    "poses": [
      "one pulling other back by wrist rain night urgent",
      "both about to kiss stopped by something unseen",
      "one pressed against wall other close not quite touching",
      "both standing apart wanting to close the distance",
      "one turning away other reaching toward them",
      "both mid-argument that is also about something else",
      "one catching other who almost fell more than physical",
      "both in doorway neither leaving nor entering",
      "one watching other sleep complicated feeling",
      "both slow dancing no music late night",
      "one confessing other listening very still",
      "both running toward each other rain",
      "one hand on face of other deciding",
      "both in same frame not yet touching",
      "over shoulder one leaving other watching them go"
    ],
    "looks": [
      "soaked dark clothes night rain each",
      "all black each night urban dangerous",
      "evening wear unravelling each end of night",
      "vintage 1940s noir each dramatic",
      "deep red and black each deliberate",
      "white shirt soaked rain each vulnerable",
      "leather jacket each night urban",
      "long coat rain each noir",
      "formal undone each complicated evening",
      "simple dark clothes each night intimate"
    ],
    "promptSuffix": "Colour grade: deep saturated cinematic darkness — wet streets, neon, blue-black midnight. Not sweet."
  },
  {
    "id": "music",
    "name": "THE MUSIC",
    "sub": "Listening & Playing",
    "color": "#aa5a9a",
    "tensions": [
      "sound vs. silence",
      "rhythm vs. chaos",
      "heard vs. felt",
      "solo vs. duet",
      "practiced vs. raw",
      "loud vs. intimate",
      "note vs. noise",
      "memory vs. melody",
      "analog vs. digital",
      "lyrics vs. wordless",
      "stage vs. bedroom",
      "tuned vs. broken",
      "beat vs. breath",
      "record vs. live",
      "echo vs. origin",
      "high vs. low",
      "major vs. minor",
      "crowd vs. empty room",
      "instrument vs. voice",
      "ending vs. encore"
    ],
    "locs": [
      "empty concert hall seats",
      "vinyl record store aisle",
      "garage band practice space",
      "piano shop showroom evening",
      "rooftop speaker setup",
      "recording studio control room",
      "mixing desk session both",
      "live venue empty soundcheck",
      "tour bus bunk corridor",
      "backstage catering area quiet",
      "green room pre-gig",
      "busker pitch underground empty",
      "jazz club stage between sets",
      "acoustic session stairwell",
      "music school practice room",
      "Abbey Road Studios crosswalk London",
      "Sun Studio Memphis empty",
      "Electric Lady Studio New York",
      "Muscle Shoals Alabama studio",
      "Criteria Studios Miami",
      "Capitol Studios Los Angeles",
      "Hansa Tonstudio Berlin",
      "Polar Studios Stockholm",
      "RAK Studios London",
      "Rockfield Studios Wales",
      "Rockfield Quadrangle Wales",
      "Konk Studios London",
      "Maida Vale Studios BBC London",
      "Air Studios Lyndhurst Hall London",
      "British Grove London",
      "Metropolis London",
      "Olympic Studios Barnes London",
      "Master Rock London",
      "Madison Square Garden empty",
      "O2 Arena London empty",
      "Radio City Music Hall empty",
      "Royal Albert Hall stage level",
      "Wembley Arena empty",
      "La Cigale Paris empty",
      "Olympia Paris empty",
      "Zenith Paris empty",
      "Berghain Berlin empty",
      "Fabric London empty",
      "Printworks London empty",
      "Tobacco Dock London empty",
      "The Warehouse Leeds empty",
      "Sub Club Glasgow empty",
      "Barrowland Glasgow stage",
      "King Tut's Glasgow stage",
      "SWG3 Glasgow warehouse",
      "Latitude Festival stage dawn"
    ],
    "poses": [
      "both headphones sharing one pair standing",
      "playing same guitar four hands",
      "conducting each other playfully laughing",
      "one singing one humming harmony",
      "back to back listening leaning",
      "one DJing other watches close",
      "both at piano one page turner",
      "one adjusting other's monitor mix",
      "sharing earphone listening back",
      "both air-guitaring simultaneously",
      "one recording other in vocal booth glass",
      "both lying on studio floor listening playback",
      "one teaching other chord hand placement",
      "both watching vinyl spin together",
      "mid-gig energy face to face both",
      "one crowd-surfing other in crowd below",
      "both at console mixing together",
      "one playing both singing",
      "both air-drumming in sync",
      "one at mic other at guitar facing each other",
      "stage exit arm around each other sweat",
      "post-soundcheck both sitting edge",
      "both studying setlist together",
      "one behind other air-guitar pose both",
      "both with different instruments session",
      "one pointing at speaker other listens",
      "both at record bins flipping through",
      "silent headphone dance together",
      "one holding vinyl other looks at sleeve",
      "both singing into same mic live",
      "one playing keys other leans on piano",
      "both air-conducting orchestra imagined",
      "one wearing headphones other listens to outside",
      "both on tour bus watching road",
      "both at merch table fan moment",
      "both signing vinyl for imagined fans",
      "one warming voice other listens backstage",
      "both watching support act from side stage",
      "both at festival fence front row",
      "one behind stage mic other adjusts stand",
      "both lying on Sofas listening playback studio",
      "one behind drums other on hi-hat",
      "both at reference speakers checking mix",
      "sitting back-to-back listening same thing"
    ],
    "looks": [
      "band tee ripped jeans both vintage",
      "vintage tour shirt soft worn both",
      "leather jacket band patches both",
      "silk slip stage worn both",
      "oversized hoodie headphones visible both",
      "record store casual both",
      "concert tee cut-off shorts both",
      "band merch and jeans both",
      "grunge flannel ripped tee both",
      "indie cool overalls tee both",
      "stage costume band-styled both",
      "music video outfit both editorial",
      "festival layers both practical and cool",
      "bedroom producer casual both",
      "vintage festival tee and shorts both",
      "punk-adjacent jacket and jeans both",
      "slick stage suit and dress each",
      "jazz musician smart-casual each",
      "classical concert formal both",
      "electronic artist minimalist black both",
      "hip-hop oversized streetwear both",
      "folk musician natural layers both",
      "country casual denim shirt jeans both",
      "R&B sleek minimalist each",
      "pop star stage outfit both polished",
      "rock band on-stage both leather",
      "jazz club smart casual both",
      "singer-songwriter casual warm both",
      "DJ both minimal dark functional",
      "orchestra formal concert dress each",
      "choir robes both",
      "music school casual practice both",
      "indie band charity-shop chic both",
      "stadium rock power outfit both",
      "music video camp styling both",
      "underground electronic minimal both",
      "funk-influenced colourful both",
      "soul singer elegant each",
      "psychedelic patterned both vintage",
      "emo layered dark both",
      "alternative muted earth tones both",
      "experimental avant-garde each",
      "ambient music minimal calm palette both",
      "metal band dark layers both"
    ],
    "affinities": {
      "sound vs. silence": {
        "locs": [
          "empty concert hall seats",
          "empty orchestra pit",
          "outdoor amphitheater empty",
          "drum room soundproof",
          "music school practice room"
        ],
        "poses": [
          "dancing to silent imagined song",
          "slow sway no music playing",
          "conducting invisible orchestra",
          "one humming the other's ear",
          "both with headphones sharing one pair"
        ],
        "looks": [
          "minimal all-black stage wear",
          "studio session casual minimal",
          "headphones-only minimal set",
          "practice room sweats tee",
          "oversized hoodie headphones"
        ]
      },
      "rhythm vs. chaos": {
        "locs": [
          "garage band practice space",
          "drum room soundproof",
          "marching band field",
          "brass band rehearsal hall",
          "DJ booth after hours"
        ],
        "poses": [
          "tapping rhythm on table together",
          "clapping rhythm together fast",
          "one drumming on other's back",
          "drumstick toss catch",
          "one playing air drums wild"
        ],
        "looks": [
          "punk patches denim vest",
          "band tee ripped jeans",
          "drumline uniform loosened",
          "grunge flannel ripped jeans",
          "marching band uniform loosened"
        ]
      },
      "heard vs. felt": {
        "locs": [
          "bedroom recording setup",
          "home studio soundproofed",
          "jazz club back booth",
          "headphone listening bar",
          "car stereo parking lot"
        ],
        "poses": [
          "sharing earbuds eyes closed",
          "one whispering lyrics close",
          "harmony singing face to face",
          "one recording other singing",
          "leaning into shared microphone"
        ],
        "looks": [
          "singer-songwriter cardigan jeans",
          "oversized hoodie headphones",
          "studio session casual minimal",
          "folk singer denim layered",
          "silk slip stage worn"
        ]
      },
      "solo vs. duet": {
        "locs": [
          "grand piano empty ballroom",
          "piano shop showroom",
          "street corner with guitar case",
          "busking corner subway",
          "string quartet rehearsal room"
        ],
        "poses": [
          "duet at piano shoulder to shoulder",
          "piano four hands overlapping",
          "one strumming other listening rapt",
          "violin bow guiding hand over hand",
          "call and response singing"
        ],
        "looks": [
          "jazz club smart casual",
          "singer-songwriter cardigan jeans",
          "folk singer denim layered",
          "string quartet formal minimal",
          "busking layered worn cottons"
        ]
      },
      "practiced vs. raw": {
        "locs": [
          "music school practice room",
          "violin maker workshop",
          "garage band practice space",
          "string quartet rehearsal room",
          "choir loft empty church"
        ],
        "poses": [
          "one teaching other chord shapes",
          "duet at piano shoulder to shoulder",
          "violin bow guiding hand over hand",
          "harmony singing face to face",
          "one teaching the other to whistle"
        ],
        "looks": [
          "practice room sweats tee",
          "string quartet formal minimal",
          "choir robe open collar",
          "orchestra formal black tie",
          "jazz club smart casual"
        ]
      },
      "loud vs. intimate": {
        "locs": [
          "sound check empty arena",
          "festival main stage empty morning",
          "amp stack empty stage",
          "bedroom recording setup",
          "jazz club back booth"
        ],
        "poses": [
          "air guitar mid-solo",
          "one playing air drums wild",
          "mic shared close together",
          "one whispering lyrics close",
          "slow sway no music playing"
        ],
        "looks": [
          "rockstar leather pants open jacket",
          "glam rock sequins open shirt",
          "band tee ripped jeans",
          "singer-songwriter cardigan jeans",
          "oversized hoodie headphones"
        ]
      },
      "note vs. noise": {
        "locs": [
          "sheet music library aisle",
          "tuning room backstage",
          "trumpet repair shop",
          "metronome shop ticking",
          "piano shop showroom"
        ],
        "poses": [
          "one tuning other watching close",
          "tapping rhythm on table together",
          "one teaching other chord shapes",
          "violin bow guiding hand over hand",
          "drumstick toss catch"
        ],
        "looks": [
          "sheet music cardigan glasses",
          "practice room sweats tee",
          "jazz club smart casual",
          "orchestra formal black tie",
          "string quartet formal minimal"
        ]
      },
      "memory vs. melody": {
        "locs": [
          "vinyl record store aisle",
          "cassette tape shop",
          "vinyl pressing plant",
          "turntable repair bench",
          "music box collection room"
        ],
        "poses": [
          "vinyl flip both reaching",
          "record scratch hand on hand",
          "slow dance to imagined tune",
          "slow waltz to remembered song",
          "one humming the other's ear"
        ],
        "looks": [
          "vinyl shop flannel worn",
          "cassette tee high-waist jeans",
          "mixtape era denim jacket",
          "retro band tee bell bottoms",
          "vintage tour shirt soft"
        ]
      },
      "analog vs. digital": {
        "locs": [
          "vinyl pressing plant",
          "mixing console studio dark",
          "radio station booth",
          "cassette tape shop",
          "DJ booth after hours"
        ],
        "poses": [
          "vinyl flip both reaching",
          "record scratch hand on hand",
          "one recording other singing",
          "one adjusting other's headphones",
          "both with headphones sharing one pair"
        ],
        "looks": [
          "DJ booth minimal black",
          "sound engineer headset casual",
          "radio DJ headphones casual",
          "vinyl shop flannel worn",
          "studio session casual minimal"
        ]
      },
      "lyrics vs. wordless": {
        "locs": [
          "bedroom recording setup",
          "karaoke room neon-free",
          "open mic empty stage",
          "piano bar after close",
          "home studio soundproofed"
        ],
        "poses": [
          "singing into hairbrush together",
          "one whispering lyrics close",
          "harmony singing face to face",
          "call and response singing",
          "one humming the other's ear"
        ],
        "looks": [
          "karaoke sequin top jeans",
          "singer-songwriter cardigan jeans",
          "open mic casual layered",
          "oversized hoodie headphones",
          "folk singer denim layered"
        ]
      },
      "stage vs. bedroom": {
        "locs": [
          "sound check empty arena",
          "festival main stage empty morning",
          "bedroom recording setup",
          "backstage instrument cases",
          "tour bus interior"
        ],
        "poses": [
          "air guitar mid-solo",
          "one recording other singing",
          "mic shared close together",
          "one falling asleep on speaker",
          "slow sway no music playing"
        ],
        "looks": [
          "rockstar leather pants open jacket",
          "tour merch oversized tee",
          "dressing gown over costume each",
          "minimal all-black stage wear",
          "oversized hoodie headphones"
        ]
      },
      "tuned vs. broken": {
        "locs": [
          "violin maker workshop",
          "piano shop showroom",
          "trumpet repair shop",
          "cello case hallway",
          "tuning room backstage"
        ],
        "poses": [
          "one tuning other watching close",
          "violin bow guiding hand over hand",
          "one teaching other chord shapes",
          "drumstick toss catch",
          "duet at piano shoulder to shoulder"
        ],
        "looks": [
          "string quartet formal minimal",
          "jazz club smart casual",
          "orchestra formal black tie",
          "sheet music cardigan glasses",
          "practice room sweats tee"
        ]
      },
      "beat vs. breath": {
        "locs": [
          "drum room soundproof",
          "brass band rehearsal hall",
          "choir loft empty church",
          "marching band field",
          "DJ booth after hours"
        ],
        "poses": [
          "clapping rhythm together fast",
          "tapping rhythm on table together",
          "one drumming on other's back",
          "one beatboxing other laughing",
          "drumstick toss catch"
        ],
        "looks": [
          "drumline uniform loosened",
          "brass band uniform jacket loosened",
          "choir robe open collar",
          "DJ booth minimal black",
          "grunge flannel ripped jeans"
        ]
      },
      "record vs. live": {
        "locs": [
          "home studio soundproofed",
          "mixing console studio dark",
          "sound check empty arena",
          "outdoor amphitheater empty",
          "radio station booth"
        ],
        "poses": [
          "one recording other singing",
          "mic shared close together",
          "air guitar mid-solo",
          "duet bow at finish",
          "call and response singing"
        ],
        "looks": [
          "studio session casual minimal",
          "sound engineer headset casual",
          "minimal all-black stage wear",
          "radio DJ headphones casual",
          "rockstar leather pants open jacket"
        ]
      },
      "echo vs. origin": {
        "locs": [
          "empty concert hall seats",
          "church organ loft",
          "outdoor amphitheater empty",
          "cello case hallway",
          "orchestra warm-up hallway"
        ],
        "poses": [
          "conducting invisible orchestra",
          "harmony singing face to face",
          "slow waltz to remembered song",
          "one humming the other's ear",
          "duet bow at finish"
        ],
        "looks": [
          "choir robe open collar",
          "orchestra formal black tie",
          "string quartet formal minimal",
          "sheet music cardigan glasses",
          "folk singer denim layered"
        ]
      },
      "high vs. low": {
        "locs": [
          "choir loft empty church",
          "brass band rehearsal hall",
          "string quartet rehearsal room",
          "grand piano empty ballroom",
          "accordion shop interior"
        ],
        "poses": [
          "harmony singing face to face",
          "duet at piano shoulder to shoulder",
          "piano four hands overlapping",
          "call and response singing",
          "conducting each other playfully"
        ],
        "looks": [
          "choir robe open collar",
          "orchestra formal black tie",
          "string quartet formal minimal",
          "jazz club smart casual",
          "folk singer denim layered"
        ]
      },
      "major vs. minor": {
        "locs": [
          "piano shop showroom",
          "grand piano empty ballroom",
          "jazz club back booth",
          "string quartet rehearsal room",
          "music school practice room"
        ],
        "poses": [
          "duet at piano shoulder to shoulder",
          "piano four hands overlapping",
          "one teaching other chord shapes",
          "harmony singing face to face",
          "slow waltz to remembered song"
        ],
        "looks": [
          "jazz club smart casual",
          "singer-songwriter cardigan jeans",
          "string quartet formal minimal",
          "orchestra formal black tie",
          "practice room sweats tee"
        ]
      },
      "crowd vs. empty room": {
        "locs": [
          "sound check empty arena",
          "festival main stage empty morning",
          "empty concert hall seats",
          "outdoor amphitheater empty",
          "open mic empty stage"
        ],
        "poses": [
          "air guitar mid-solo",
          "mic shared close together",
          "conducting invisible orchestra",
          "duet bow at finish",
          "one playing air drums wild"
        ],
        "looks": [
          "rockstar leather pants open jacket",
          "minimal all-black stage wear",
          "glam rock sequins open shirt",
          "open mic casual layered",
          "festival crop top denim shorts"
        ]
      },
      "instrument vs. voice": {
        "locs": [
          "piano shop showroom",
          "violin maker workshop",
          "trumpet repair shop",
          "karaoke room neon-free",
          "accordion shop interior"
        ],
        "poses": [
          "one teaching other chord shapes",
          "violin bow guiding hand over hand",
          "singing into hairbrush together",
          "harmony singing face to face",
          "duet at piano shoulder to shoulder"
        ],
        "looks": [
          "jazz club smart casual",
          "singer-songwriter cardigan jeans",
          "karaoke sequin top jeans",
          "folk singer denim layered",
          "string quartet formal minimal"
        ]
      },
      "ending vs. encore": {
        "locs": [
          "festival main stage empty morning",
          "sound check empty arena",
          "backstage instrument cases",
          "tour bus interior",
          "empty concert hall seats"
        ],
        "poses": [
          "duet bow at finish",
          "mic shared close together",
          "one falling asleep on speaker",
          "air guitar mid-solo",
          "conducting invisible orchestra"
        ],
        "looks": [
          "tour merch oversized tee",
          "dressing gown over costume each",
          "minimal all-black stage wear",
          "rockstar leather pants open jacket",
          "glam rock sequins open shirt"
        ]
      }
    },
    "promptSuffix": "Colour grade: stage-adjacent — practical light from monitors or spots, deep shadow between, the subjects lit as if mid-performance."
  },
  {
    "id": "history",
    "name": "THE HISTORY",
    "sub": "Events & Eras",
    "color": "#8a7a4a",
    "tensions": [
      "past vs. present",
      "remembered vs. forgotten",
      "ruin vs. monument",
      "conqueror vs. conquered",
      "myth vs. record",
      "preserved vs. decayed",
      "era vs. eternity",
      "ancestor vs. heir",
      "silence vs. testimony",
      "stone vs. flesh",
      "empire vs. dust",
      "witness vs. unseen",
      "timeless vs. dated",
      "relic vs. ruin",
      "archive vs. memory",
      "revolution vs. order",
      "crown vs. crowd",
      "battlefield vs. peace",
      "inscription vs. erasure",
      "then vs. now"
    ],
    "locs": [
      "ancient amphitheater stepped seats Athens",
      "crumbling castle courtyard Scotland",
      "battlefield memorial dawn silence",
      "abandoned monastery cloister Portugal",
      "colonial port warehouse Jamaica",
      "Roman forum at sunrise empty",
      "Egyptian pyramid at dawn no tourists",
      "Angkor Wat sunrise reflection pool",
      "Machu Picchu sun gate first light",
      "Colosseum interior arch looking up",
      "Parthenon pillars Athens dusk",
      "Stonehenge solstice dawn mist",
      "Avebury stone circle walking",
      "Newgrange Ireland winter solstice",
      "Hadrian's Wall northern edge",
      "Vindolanda excavation trench",
      "Viking longship museum interior",
      "Jorvik Viking Centre York exterior",
      "Norman castle motte and bailey",
      "Medieval cathedral chapter house",
      "Tudor manor hall interior timber",
      "Civil War battlefield marker dawn",
      "Napoleonic battlefield monument France",
      "Waterloo battlefield Belgium",
      "Auschwitz-Birkenau memorial path",
      "Berlin Wall remaining section",
      "Checkpoint Charlie museum exterior",
      "Stasi prison Leipzig exterior",
      "Dresden Frauenkirche rebuilt exterior",
      "Hiroshima Peace Memorial exterior",
      "Nagasaki museum exterior",
      "Pearl Harbor USS Arizona memorial water",
      "Gettysburg battlefield Pennsylvania",
      "Antietam battlefield Maryland dawn",
      "Bunker Hill monument Boston",
      "Independence Hall Philadelphia",
      "Colonial Williamsburg street",
      "Jamestown reconstruction Virginia",
      "Plymouth Rock Massachusetts coast",
      "Salem witch trial memorial",
      "Tombstone Arizona OK Corral",
      "Little Bighorn battlefield Montana",
      "Alamo San Antonio Texas exterior",
      "Mesa Verde cliff dwelling Colorado",
      "Chaco Canyon ruins New Mexico",
      "Cahokia mounds Illinois",
      "Serpent Mound Ohio aerial view possible",
      "Cahokia Monks Mound base"
    ],
    "poses": [
      "both reading same ancient inscription bent close",
      "standing before ruined throne contemplative",
      "one tracing carved stone other photographs",
      "walking in step through ancient arch",
      "kneeling at monument hands touching stone",
      "both looking up at scale of ancient structure",
      "one holding lantern other reads ancient text",
      "both silent at memorial heads bowed",
      "one pointing at detail other studies closely",
      "both imagining scene in front of ruin",
      "sitting on ancient steps both thoughtful",
      "both photographing different details same site",
      "one sketching other keeps notes serious",
      "both at battle map together planning",
      "holding period map both navigating site",
      "one describing scene other visualises it",
      "both at excavation trench looking in",
      "one behind other through ancient doorway",
      "both at artefact case museum close",
      "reading interpretive board together",
      "both looking at distant view from fortification",
      "walking parapet both looking out",
      "one helping other over ancient stile",
      "both in shadow of monolith looking up",
      "seated in theatre seating looking down at stage",
      "both at crypt entrance looking in",
      "examining mosaic floor together close",
      "both at ancient fresco wall fingers tracing",
      "looking through ruined window at view",
      "both at ancient well looking down",
      "sitting inside stone circle dusk together",
      "walking causeway toward island structure",
      "both at war memorial running fingers along names",
      "looking at battlefield from high point both",
      "both at ancient harbour edge sea beyond",
      "examining ancient coins museum together",
      "one demonstrating period skill other watches",
      "both at cannon or ancient weapon examining",
      "walking together across ancient bridge",
      "both at tomb entrance reading inscription"
    ],
    "looks": [
      "draped linen toga simple period appropriate",
      "medieval tunic and gown worn leather",
      "Renaissance doublet breeches and gown each",
      "colonial waistcoat open and period gown each",
      "Viking fur-trimmed cloak and tunic each",
      "ancient Greek chiton and peplos each",
      "Egyptian-influenced draped linen each",
      "Persian court robe both layered",
      "Mughal-influenced layered garment each",
      "Tang dynasty robe both Chinese influenced",
      "Aztec-influenced woven garment each",
      "Inca textile pattern layered each",
      "Mesoamerican weave and feather both",
      "Byzantine court layered mosaic-referencing each",
      "Ottoman kaftan layered each",
      "Samurai-influenced layered garment each",
      "Edo period kimono and hakama each",
      "Heian court layered many-coloured each",
      "Celtic Iron Age woven wool each",
      "Anglo-Saxon tunic and wrapped layers each",
      "Norman surcoat and bliaut each",
      "Crusader-era surcoat and gown each",
      "Tudor doublet and farthingale each",
      "Elizabethan ruff and brocade each",
      "Jacobean embroidered layers each",
      "Cavalier doublet and high-waist gown each",
      "Restoration period fitted coat and gown each",
      "Georgian frock coat waistcoat breeches each",
      "Regency high-waist empire gown and coat each",
      "Victorian frock coat and crinoline each",
      "Edwardian walking suit and blouse each",
      "WWI-era uniform and nursing uniform each",
      "1920s charleston dress and lounge suit each",
      "1930s bias cut and three-piece suit each",
      "1940s utility dress and demob suit each",
      "1950s full skirt and narrow lapel suit each",
      "contemporary researcher practical both site",
      "museum studies smart casual both",
      "archaeologist practical field wear both",
      "historian conference smart academic both",
      "re-enactor accurate period both"
    ],
    "affinities": {
      "past vs. present": {
        "locs": [
          "ancient amphitheater steps",
          "crumbling castle courtyard",
          "old battlefield at dawn",
          "ruined abbey window light",
          "ancient agora marketplace"
        ],
        "poses": [
          "one in armor one watching",
          "one in period dress one modern",
          "standing where history happened both still",
          "silhouette against ruined arch",
          "standing on old foundation stones"
        ],
        "looks": [
          "draped toga simple linen",
          "medieval tunic worn leather",
          "colonial waistcoat open and period gown",
          "empire era military coat",
          "period riding coat boots"
        ]
      },
      "remembered vs. forgotten": {
        "locs": [
          "archive reading room",
          "ancient library ruins",
          "ancient burial mound",
          "historic battlefield monument",
          "crumbling triumphal arch"
        ],
        "poses": [
          "both reading same ancient inscription",
          "reading epitaph together close",
          "one tracing carved stone together",
          "both touching same carved name",
          "kneeling at old monument together"
        ],
        "looks": [
          "scribe's robes ink-stained",
          "scholar's robe spectacles",
          "monk's robe simple rope belt",
          "period mourning black veil",
          "ancient priestess gold trim linen"
        ]
      },
      "ruin vs. monument": {
        "locs": [
          "crumbling castle courtyard",
          "ancient amphitheater steps",
          "crumbling fortress wall walk",
          "historic battlefield monument",
          "crumbling lighthouse base"
        ],
        "poses": [
          "standing before ruined throne together",
          "both looking up at ruined ceiling",
          "standing at old battlefield silent",
          "standing where wall once stood",
          "kneeling at old monument together"
        ],
        "looks": [
          "explorer's coat weathered",
          "empire soldier open armor chest plate",
          "soldier's uniform unbuttoned",
          "knight's chainmail underlayer",
          "ancient warrior leather kilt"
        ]
      },
      "conqueror vs. conquered": {
        "locs": [
          "old battlefield at dawn",
          "historic battlefield trench",
          "empire throne room empty",
          "ancient amphitheater tunnel",
          "historic prison cell block"
        ],
        "poses": [
          "one kneeling other standing guard",
          "one in chains one freeing",
          "standing at empire's edge",
          "one bowing the other watching",
          "standing where treaty was signed"
        ],
        "looks": [
          "soldier's uniform unbuttoned",
          "armor plate over linen",
          "royal guard ceremonial coat",
          "empire soldier open armor chest plate",
          "colonial soldier worn red coat"
        ]
      },
      "myth vs. record": {
        "locs": [
          "stone circle at dawn",
          "ancient temple steps",
          "viking burial ship site",
          "ancient burial mound",
          "old world observatory dome"
        ],
        "poses": [
          "one reading map other pointing",
          "reading scroll together close",
          "both at observatory looking up",
          "one unrolling old map together",
          "standing at crossroads of empire"
        ],
        "looks": [
          "ancient priestess gold trim linen",
          "stone age furs draped simple",
          "viking fur and leather",
          "scholar's robe spectacles",
          "priestess draped white linen"
        ]
      },
      "preserved vs. decayed": {
        "locs": [
          "catacombs entrance torch lit",
          "ancient bathhouse ruins",
          "old shipwreck museum hall",
          "ruined abbey window light",
          "historic shipyard dry dock"
        ],
        "poses": [
          "torch-lit corridor walk together",
          "one carrying torch through ruins",
          "both looking up at ruined ceiling",
          "one tracing carved stone together",
          "standing on old dock looking out"
        ],
        "looks": [
          "explorer's coat weathered",
          "sailor's period coat rolled",
          "monk's robe simple rope belt",
          "old world fisherman's wool",
          "period blacksmith leather apron"
        ]
      },
      "era vs. eternity": {
        "locs": [
          "gothic cathedral nave",
          "ancient temple steps",
          "stone circle at dawn",
          "old world observatory dome",
          "ancient agora marketplace"
        ],
        "poses": [
          "one lighting candle in old chapel",
          "both at altar facing each other",
          "standing where history happened both still",
          "both at observatory looking up",
          "walking colonnade in matched step"
        ],
        "looks": [
          "priestess draped white linen",
          "monk's robe simple rope belt",
          "period mourning black veil",
          "renaissance gown and noble doublet",
          "court gown and court dress coat"
        ]
      },
      "ancestor vs. heir": {
        "locs": [
          "royal palace empty hall",
          "colonial era plantation house",
          "empire throne room empty",
          "ancient burial mound",
          "old colonial governor's mansion"
        ],
        "poses": [
          "seated on ancient throne both",
          "one teaching other the old story",
          "both seated at ancient table",
          "kneeling at old monument together",
          "one in period dress one modern"
        ],
        "looks": [
          "court gown and formal court coat",
          "court gown and court dress coat",
          "governor's formal coat open",
          "empire era formal sash",
          "colonial waistcoat open and period gown"
        ]
      },
      "silence vs. testimony": {
        "locs": [
          "archive reading room",
          "ancient library ruins",
          "historic prison cell block",
          "plague-era town square",
          "catacombs entrance torch lit"
        ],
        "poses": [
          "both reading same ancient inscription",
          "reading epitaph together close",
          "one signing old document watching",
          "reading scroll together close",
          "one pressing ear to old door"
        ],
        "looks": [
          "scribe's robes ink-stained",
          "scholar's robe spectacles",
          "period mourning black veil",
          "monk's robe simple rope belt",
          "ancient warrior leather kilt"
        ]
      },
      "stone vs. flesh": {
        "locs": [
          "stone aqueduct arches",
          "ancient amphitheater steps",
          "crumbling castle courtyard",
          "stone circle at dawn",
          "ancient quarry steps"
        ],
        "poses": [
          "one tracing carved stone together",
          "touching same worn stone wall",
          "both touching same carved name",
          "standing on old foundation stones",
          "one polishing old armor together"
        ],
        "looks": [
          "draped toga simple linen",
          "gladiator leather armor straps",
          "ancient warrior leather kilt",
          "stone mason's worn tunic",
          "stone age furs draped simple"
        ]
      },
      "empire vs. dust": {
        "locs": [
          "roman forum at dusk",
          "empire throne room empty",
          "ancient amphitheater steps",
          "crumbling triumphal arch",
          "historic mint counting room"
        ],
        "poses": [
          "standing at empire's edge",
          "standing before ruined throne together",
          "seated on ancient throne both",
          "standing where wall once stood",
          "both looking up at ruined ceiling"
        ],
        "looks": [
          "empire era military coat",
          "court gown and court dress coat",
          "empire soldier open armor chest plate",
          "empire era formal sash",
          "draped toga simple linen"
        ]
      },
      "witness vs. unseen": {
        "locs": [
          "historic battlefield monument",
          "old battlefield at dawn",
          "plague-era town square",
          "historic battlefield trench",
          "ancient burial mound"
        ],
        "poses": [
          "standing at old battlefield silent",
          "one signing old document watching",
          "kneeling at old monument together",
          "both at altar facing each other",
          "one bowing the other watching"
        ],
        "looks": [
          "soldier's uniform unbuttoned",
          "period mourning black veil",
          "scribe's robes ink-stained",
          "colonial soldier worn red coat",
          "monk's robe simple rope belt"
        ]
      },
      "timeless vs. dated": {
        "locs": [
          "old world trading post",
          "historic train station platform",
          "old world clocktower interior",
          "old world customs house",
          "old world stock exchange floor"
        ],
        "poses": [
          "one signing old document watching",
          "both at customs counter waiting",
          "standing at crossroads of empire",
          "walking old trade route together",
          "one unrolling old map together"
        ],
        "looks": [
          "merchant's coat open vest",
          "trader's caravan layered cloth",
          "explorer's worn leather boots coat",
          "colonial linen shirt breeches",
          "governor's formal coat open"
        ]
      },
      "relic vs. ruin": {
        "locs": [
          "ancient temple steps",
          "catacombs entrance torch lit",
          "old shipwreck museum hall",
          "ancient burial mound",
          "crumbling lighthouse base"
        ],
        "poses": [
          "one holding old artifact together",
          "both touching same carved name",
          "kneeling at old monument together",
          "one tracing carved stone together",
          "standing on old foundation stones"
        ],
        "looks": [
          "ancient priestess gold trim linen",
          "priestess draped white linen",
          "scholar's robe spectacles",
          "old world fisherman's wool",
          "explorer's coat weathered"
        ]
      },
      "archive vs. memory": {
        "locs": [
          "archive reading room",
          "medieval scriptorium",
          "ancient library ruins",
          "historic university quad",
          "old world observatory dome"
        ],
        "poses": [
          "reading scroll together close",
          "one teaching other the old story",
          "both reading same ancient inscription",
          "one unrolling old map together",
          "seated at scriptorium desk together"
        ],
        "looks": [
          "scribe's robes ink-stained",
          "scholar's robe spectacles",
          "renaissance courtier silk hose",
          "monk's robe simple rope belt",
          "colonial waistcoat open and period gown"
        ]
      },
      "revolution vs. order": {
        "locs": [
          "plague-era town square",
          "old colonial governor's mansion",
          "historic battlefield trench",
          "colonial era plantation house",
          "empire throne room empty"
        ],
        "poses": [
          "one in chains one freeing",
          "standing where treaty was signed",
          "standing at crossroads of empire",
          "one bowing the other watching",
          "standing at empire's edge"
        ],
        "looks": [
          "soldier's uniform unbuttoned",
          "peasant linen worn earth tones",
          "colonial soldier worn red coat",
          "royal guard ceremonial coat",
          "period blacksmith leather apron"
        ]
      },
      "crown vs. crowd": {
        "locs": [
          "royal palace empty hall",
          "ancient agora marketplace",
          "empire throne room empty",
          "medieval drawbridge approach",
          "ancient amphitheater steps"
        ],
        "poses": [
          "seated on ancient throne both",
          "standing before ruined throne together",
          "one bowing the other watching",
          "one kneeling other standing guard",
          "walking processional path slow"
        ],
        "looks": [
          "court gown and formal court coat",
          "court gown and court dress coat",
          "noble's velvet cloak open",
          "royal guard ceremonial coat",
          "medieval lady's hennin draped"
        ]
      },
      "battlefield vs. peace": {
        "locs": [
          "old battlefield at dawn",
          "historic battlefield trench",
          "historic battlefield monument",
          "medieval drawbridge approach",
          "ancient agora marketplace"
        ],
        "poses": [
          "standing at old battlefield silent",
          "one kneeling other standing guard",
          "standing where treaty was signed",
          "one in armor one watching",
          "walking battlement wall together"
        ],
        "looks": [
          "armor plate over linen",
          "soldier's uniform unbuttoned",
          "knight's chainmail underlayer",
          "empire soldier open armor chest plate",
          "colonial soldier worn red coat"
        ]
      },
      "inscription vs. erasure": {
        "locs": [
          "ancient amphitheater steps",
          "stone aqueduct arches",
          "ancient burial mound",
          "crumbling triumphal arch",
          "historic battlefield monument"
        ],
        "poses": [
          "both reading same ancient inscription",
          "one tracing carved stone together",
          "both touching same carved name",
          "reading epitaph together close",
          "touching same worn stone wall"
        ],
        "looks": [
          "scribe's robes ink-stained",
          "stone mason's worn tunic",
          "monk's robe simple rope belt",
          "draped toga simple linen",
          "period mourning black veil"
        ]
      },
      "then vs. now": {
        "locs": [
          "historic train station platform",
          "old colonial governor's mansion",
          "old world clocktower interior",
          "ancient amphitheater steps",
          "old world observatory dome"
        ],
        "poses": [
          "one in period dress one modern",
          "standing where history happened both still",
          "silhouette against ruined arch",
          "one in armor one watching",
          "both at observatory looking up"
        ],
        "looks": [
          "colonial waistcoat open and period gown",
          "period riding coat boots",
          "explorer's worn leather boots coat",
          "renaissance courtier silk hose",
          "medieval tunic worn leather"
        ]
      }
    },
    "promptPrefix": "Period-accurate historical photograph, authentic to the era and location depicted — ",
    "promptSuffix": "Render with period-accurate costume, lighting and setting. The photographic style should match the era: daguerreotype for 1840s, sepia albumen print for Victorian, black-and-white documentary for mid-20th century, colour photography from the 1970s onward."
  },
  {
    "id": "mystery",
    "name": "THE MYSTERY",
    "sub": "Horror & Suspense",
    "color": "#5a3a5a",
    "tensions": [
      "hunted vs. hunting",
      "known vs. hidden",
      "calm vs. dread",
      "safe vs. exposed",
      "alone vs. watched",
      "escape vs. trapped",
      "truth vs. illusion",
      "silence vs. scream",
      "light vs. shadow",
      "real vs. imagined",
      "found vs. lost",
      "still vs. fleeing",
      "door vs. threshold",
      "clue vs. dead end",
      "breath vs. held breath",
      "footstep vs. silence",
      "face vs. mask",
      "memory vs. forgetting",
      "reflection vs. self",
      "ending vs. unresolved"
    ],
    "locs": [
      "abandoned asylum corridor tiles",
      "fog-bound forest path no end",
      "empty motel parking lot night",
      "derelict carnival midway",
      "candlelit cellar steps",
      "lighthouse keeper's cottage at night",
      "ruined manor house exterior",
      "fog-covered graveyard path",
      "drowned village reservoir edge",
      "Victorian factory floor dark",
      "underground tunnel bricked-up end",
      "secret passage bookcase entrance",
      "locked library night window",
      "empty theatre balcony creaking",
      "old hotel corridor 3am",
      "basement flooded ankle deep",
      "attic trapdoor looking down",
      "church crypt entrance stone",
      "estate maze centre alone",
      "walled garden overgrown locked",
      "old clock tower interior",
      "photography darkroom red light",
      "radio station night empty",
      "print room old newspaper rotary",
      "museum after hours case lit",
      "archive basement box rows",
      "police evidence room dim",
      "detective agency door frosted glass",
      "private eye office desk",
      "smoke-filled bar information",
      "dockside warehouse meeting",
      "industrial estate unit door",
      "abandoned school classroom",
      "empty hospital corridor night",
      "sanatorium courtyard overgrown",
      "institution corridor peeling",
      "haunted B&B corridor creaking",
      "village pub empty late",
      "country house library fire out",
      "whodunit manor hall chandelier",
      "locked room diagram scene",
      "crime scene before police arrive",
      "film noir street lamp rain",
      "1940s diner counter night",
      "jazz club back room door",
      "speakeasy behind bookcase",
      "numbers station forest clearing",
      "black site exterior ordinary"
    ],
    "poses": [
      "back to back scanning shadows both tense",
      "one pulling other through doorway urgent",
      "frozen mid-step both listening hard",
      "one covering other's mouth quiet signal",
      "running hand in hand fleeing dark",
      "both with torchlight searching dark space",
      "one behind other hand on shoulder reassure",
      "both pressed against wall breathing",
      "one checking pulse of fallen both concerned",
      "both reading clue together urgent",
      "one pointing at evidence other photographs",
      "both holding map in torchlight",
      "one picking lock other on watch both",
      "both at keyhole listening different side",
      "running down corridor both footsteps loud",
      "both hiding in shadow figure passing",
      "one calming other fear genuine both",
      "face-to-face in torch-lit cave both",
      "both looking at board of clues connected",
      "one receiving confession other witnessing",
      "both stepping over threshold uncertain",
      "one testing floorboard other waits result",
      "both at window watching arrival below",
      "back-to-back different directions corridor",
      "one lowering other on rope dark below",
      "both at cipher text working together",
      "one decoy distraction other moves unseen",
      "both confronting villain together resolute",
      "one finds other has been lying moment",
      "both realising simultaneously faces",
      "sitting together aftermath both shaken",
      "one behind other hand on arm cold comfort",
      "both looking at photograph key to mystery",
      "one bleeding other applying pressure both",
      "meeting in fog brief exchange both",
      "both running different directions split",
      "face reveal both caught or catching",
      "both in vehicle watching target below"
    ],
    "looks": [
      "torn cotton dress and jacket worn boots each dishevelled",
      "dishevelled formal wear party gone wrong both",
      "muddy coat ripped sleeve both through ordeal",
      "white shirt collar messed rain-soaked each",
      "oversized coat soaked through both",
      "1940s-influenced coat and suit each",
      "trench coat belted both classic noir",
      "fitted dark coat slim trousers each",
      "noir period suit and dress each",
      "practical investigation layers both",
      "dark casual clothes both blending",
      "survivor casual worn ordeal both",
      "detective smart practical each",
      "police plain clothes both",
      "villain elegant dark both",
      "victim elegant dishevelled before and after each",
      "witness ordinary clothes both",
      "journalist practical layers each",
      "lawyer smart professional each",
      "forensic practical both",
      "coroner professional both",
      "archivist practical bookish each",
      "estate staff uniform each",
      "butler and housekeeper formal each",
      "estate owner formal undone each",
      "aristocrat casual country estate each",
      "caretaker practical worn each",
      "paranormal investigator practical layers both",
      "occult-influenced layers subtle dark both",
      "night-watch practical uniform each",
      "armed protection professional dark each",
      "hacker casual dark layers each"
    ],
    "affinities": {
      "hunted vs. hunting": {
        "locs": [
          "fog-bound forest path",
          "empty subway tunnel",
          "dark forest clearing fog",
          "abandoned amusement park",
          "empty parking garage level B"
        ],
        "poses": [
          "running hand in hand fleeing",
          "one looking back over shoulder",
          "both backing away from something",
          "frozen mid-step listening",
          "standing back to back weapons ready"
        ],
        "looks": [
          "muddy coat ripped sleeve",
          "tattered cardigan short sleeves",
          "soaked oversized shirt",
          "mud-streaked overalls",
          "ripped jacket missing sleeve"
        ]
      },
      "known vs. hidden": {
        "locs": [
          "locked room interior",
          "attic door ajar",
          "basement furnace room",
          "dark closet door cracked open",
          "old well at night"
        ],
        "poses": [
          "one pulling other through doorway",
          "crouched behind furniture together",
          "crouched in closet together hiding",
          "one reaching through gap together",
          "pressed against wall hiding"
        ],
        "looks": [
          "disheveled formal wear",
          "unbuttoned shirt untucked",
          "tattered cardigan short sleeves",
          "worn flannel grass-stained",
          "dust-covered coveralls"
        ]
      },
      "calm vs. dread": {
        "locs": [
          "candlelit cellar steps",
          "old church basement crypt",
          "crumbling chapel altar dark",
          "candlelit ritual circle room",
          "old typewriter room dim light"
        ],
        "poses": [
          "both holding breath together",
          "one steadying shaking hands",
          "frozen in flashlight beam together",
          "both frozen mid-scream silent",
          "one comforting other's trembling"
        ],
        "looks": [
          "period nightclothes worn",
          "worn cardigan missing button",
          "loose cardigan frayed edges",
          "torn choir costume loosened",
          "disheveled period costume"
        ]
      },
      "safe vs. exposed": {
        "locs": [
          "boarded-up house porch",
          "crumbling mansion foyer",
          "empty theater seats dark",
          "abandoned drive-in screen",
          "old library after hours dark"
        ],
        "poses": [
          "one shielding other from unseen",
          "pressed against wall hiding",
          "both crouched under window",
          "one pulling curtain back slow",
          "standing at threshold not entering"
        ],
        "looks": [
          "torn cotton dress and torn jacket worn boots",
          "tattered cardigan short sleeves",
          "torn lace dress and dark torn layers",
          "frayed cardigan dirt hem",
          "torn dress and torn coat underneath"
        ]
      },
      "alone vs. watched": {
        "locs": [
          "abandoned asylum corridor",
          "empty subway tunnel",
          "dark attic crawlspace",
          "empty morgue hallway tiled",
          "derelict carnival midway"
        ],
        "poses": [
          "both staring at same dark corner",
          "one whispering warning close",
          "standing in spotlight surrounded dark",
          "both looking up at same noise",
          "frozen mid-step listening"
        ],
        "looks": [
          "disheveled formal wear",
          "ripped jacket and torn dress dark layers",
          "torn cotton dress and torn jacket worn boots",
          "unbuttoned vest loose tie",
          "streaked makeup torn collar"
        ]
      },
      "escape vs. trapped": {
        "locs": [
          "flooded basement stairwell",
          "derelict ship hold",
          "abandoned mine shaft entrance",
          "empty elevator shaft",
          "old asylum bathtub room"
        ],
        "poses": [
          "crawling through narrow gap together",
          "one pulling other away from mirror",
          "one dragging the other to safety",
          "running down corridor together",
          "one extending hand into dark"
        ],
        "looks": [
          "soaked cotton shirt bare feet",
          "muddy boots torn jeans",
          "mud-caked boots torn pants",
          "soaked cardigan clinging",
          "torn cloak layered underneath"
        ]
      },
      "truth vs. illusion": {
        "locs": [
          "mirror-lined hallway empty",
          "cracked mirror room",
          "old photograph darkroom",
          "creepy doll room",
          "empty theater seats dark"
        ],
        "poses": [
          "both staring into mirror together",
          "one pulling other away from mirror",
          "one tracing message on wall together",
          "both staring at empty chair",
          "one checking pulse worried"
        ],
        "looks": [
          "disheveled wedding dress torn",
          "streaked makeup torn collar",
          "torn veil layered top",
          "dirt-streaked white dress and dark coat",
          "torn lace dress and dark torn layers"
        ]
      },
      "silence vs. scream": {
        "locs": [
          "empty school hallway night",
          "crumbling mansion foyer",
          "empty motel parking lot night",
          "derelict carnival midway",
          "misty graveyard fence line"
        ],
        "poses": [
          "both frozen mid-scream silent",
          "one covering other's mouth quiet",
          "both holding breath together",
          "one covering candle flame together",
          "crouched behind furniture together"
        ],
        "looks": [
          "torn cotton dress and torn jacket worn boots",
          "ripped jacket and torn dress dark layers",
          "disheveled formal wear",
          "frayed cotton dress and frayed jacket",
          "torn dress and torn coat underneath"
        ]
      },
      "light vs. shadow": {
        "locs": [
          "dark stairwell single bulb",
          "flickering hospital hallway",
          "dark attic with one light",
          "candlelit cellar steps",
          "foggy pier at midnight"
        ],
        "poses": [
          "one holding flashlight shaking",
          "frozen in flashlight beam together",
          "standing in spotlight surrounded dark",
          "one closing door slow quiet",
          "silhouette in doorway both frozen"
        ],
        "looks": [
          "dust-covered coveralls",
          "worn flannel grass-stained",
          "ash-covered work shirt",
          "soot-streaked work clothes",
          "disheveled formal wear"
        ]
      },
      "real vs. imagined": {
        "locs": [
          "misty swamp boardwalk",
          "fog-covered bridge at night",
          "misty cemetery at midnight",
          "dark forest clearing fog",
          "abandoned radio tower base"
        ],
        "poses": [
          "both staring at same dark corner",
          "one looking back over shoulder",
          "both backing away from something",
          "one reaching for door handle slow",
          "frozen mid-step listening"
        ],
        "looks": [
          "torn cotton dress and torn jacket worn boots",
          "muddy coat ripped sleeve",
          "soaked oversized shirt",
          "tattered cardigan short sleeves",
          "ripped denim grass-stained"
        ]
      },
      "found vs. lost": {
        "locs": [
          "overgrown family plot",
          "misty graveyard fence line",
          "abandoned mine shaft entrance",
          "old well at night",
          "dark basement with chains"
        ],
        "poses": [
          "one carrying unconscious other",
          "one dragging the other to safety",
          "one pulling other from water",
          "crawling through narrow gap together",
          "one steadying shaking hands"
        ],
        "looks": [
          "mud-streaked overalls",
          "muddy boots torn jeans",
          "soaked cotton shirt bare feet",
          "torn cloak layered underneath",
          "frayed work jacket open"
        ]
      },
      "still vs. fleeing": {
        "locs": [
          "empty motel parking lot night",
          "abandoned drive-in screen",
          "dark forest clearing fog",
          "empty parking garage level B",
          "fog-bound forest path"
        ],
        "poses": [
          "frozen mid-step listening",
          "running hand in hand fleeing",
          "both frozen facing opposite directions",
          "standing back to back weapons ready",
          "running down corridor together"
        ],
        "looks": [
          "soaked oversized shirt",
          "tattered cardigan short sleeves",
          "muddy coat ripped sleeve",
          "ripped jacket missing sleeve",
          "torn linen shirt untucked"
        ]
      },
      "door vs. threshold": {
        "locs": [
          "attic door ajar",
          "boarded-up house porch",
          "crumbling mansion foyer",
          "old church basement crypt",
          "dark closet door cracked open"
        ],
        "poses": [
          "one pulling other through doorway",
          "one reaching for door handle slow",
          "standing at threshold not entering",
          "one closing door slow quiet",
          "silhouette in doorway both frozen"
        ],
        "looks": [
          "disheveled formal wear",
          "unbuttoned shirt untucked",
          "worn cardigan missing button",
          "tattered cardigan short sleeves",
          "unbuttoned coat missing buttons"
        ]
      },
      "clue vs. dead end": {
        "locs": [
          "old library after hours dark",
          "old photograph darkroom",
          "old typewriter room dim light",
          "creepy doll room",
          "cracked mirror room"
        ],
        "poses": [
          "one tracing message on wall together",
          "both staring into mirror together",
          "one checking pulse worried",
          "both staring at empty chair",
          "one checking behind the other"
        ],
        "looks": [
          "disheveled formal wear",
          "unbuttoned vest loose tie",
          "streaked makeup torn collar",
          "dust-covered coveralls",
          "worn pajamas dirt-marked"
        ]
      },
      "breath vs. held breath": {
        "locs": [
          "empty elevator shaft",
          "dark stairwell single bulb",
          "flooded basement stairwell",
          "dark attic crawlspace",
          "old asylum bathtub room"
        ],
        "poses": [
          "both holding breath together",
          "crouched in closet together hiding",
          "pressed against wall hiding",
          "both pressed into corner",
          "crouched behind furniture together"
        ],
        "looks": [
          "soaked cotton shirt bare feet",
          "torn dress and torn coat underneath",
          "frayed cotton dress and frayed jacket",
          "torn cotton dress and torn jacket worn boots",
          "ripped jacket and torn dress dark layers"
        ]
      },
      "footstep vs. silence": {
        "locs": [
          "empty subway tunnel",
          "flickering hospital hallway",
          "empty school hallway night",
          "dark stairwell single bulb",
          "empty morgue hallway tiled"
        ],
        "poses": [
          "frozen mid-step listening",
          "crouched at top of stairs listening",
          "one listening at door other waiting",
          "both staring at same dark corner",
          "running down corridor together"
        ],
        "looks": [
          "disheveled formal wear",
          "unbuttoned shirt dirt-streaked",
          "worn pajamas dirt-marked",
          "tattered cardigan short sleeves",
          "dust-covered coveralls"
        ]
      },
      "face vs. mask": {
        "locs": [
          "mirror-lined hallway empty",
          "cracked mirror room",
          "creepy doll room",
          "candlelit ritual circle room",
          "crumbling chapel altar dark"
        ],
        "poses": [
          "both staring into mirror together",
          "one wiping blood from other's face",
          "one pulling other away from mirror",
          "both staring at empty chair",
          "standing in spotlight surrounded dark"
        ],
        "looks": [
          "streaked makeup torn collar",
          "disheveled wedding dress torn",
          "torn veil layered top",
          "torn choir costume loosened",
          "unbuttoned coat missing buttons"
        ]
      },
      "memory vs. forgetting": {
        "locs": [
          "old photograph darkroom",
          "overgrown family plot",
          "old typewriter room dim light",
          "misty cemetery at midnight",
          "crumbling mansion foyer"
        ],
        "poses": [
          "one tracing message on wall together",
          "both staring at empty chair",
          "one checking pulse worried",
          "both staring into mirror together",
          "one comforting other's trembling"
        ],
        "looks": [
          "disheveled wedding dress torn",
          "torn veil layered top",
          "dirt-streaked white dress and dark coat",
          "period nightclothes worn",
          "disheveled period costume"
        ]
      },
      "reflection vs. self": {
        "locs": [
          "mirror-lined hallway empty",
          "cracked mirror room",
          "candlelit cellar steps",
          "old photograph darkroom",
          "empty theater seats dark"
        ],
        "poses": [
          "both staring into mirror together",
          "one pulling other away from mirror",
          "one wiping blood from other's face",
          "both frozen facing opposite directions",
          "standing in spotlight surrounded dark"
        ],
        "looks": [
          "streaked makeup torn collar",
          "torn lace dress and dark torn layers",
          "disheveled wedding dress torn",
          "ripped jacket and torn dress dark layers",
          "unbuttoned vest loose tie"
        ]
      },
      "ending vs. unresolved": {
        "locs": [
          "foggy pier at midnight",
          "fog-covered bridge at night",
          "abandoned radio tower base",
          "dark basement with chains",
          "empty morgue hallway tiled"
        ],
        "poses": [
          "both backing away from something",
          "one extending hand into dark",
          "standing where shadow just was",
          "both frozen facing opposite directions",
          "one dragging the other to safety"
        ],
        "looks": [
          "soaked oversized shirt",
          "torn cloak layered underneath",
          "frayed work jacket open",
          "muddy boots torn jeans",
          "ash-streaked overcoat"
        ]
      }
    },
    "promptPrefix": "Cinematic noir photograph, film grain, deep shadows, high contrast chiaroscuro lighting, atmosphere of unease or suspense — ",
    "promptSuffix": "Render with film noir visual language: deep blacks, practical light sources, fog or haze where appropriate, shadows that obscure as much as they reveal. The mood should feel like a still from a psychological thriller."
  },
  {
    "id": "hero",
    "name": "THE HERO",
    "sub": "Spaghetti Western, Noir, Samurai & the Last Stand",
    "color": "#5a3a1a",
    "tensions": [
      "the code vs. the cost",
      "honour vs. survival",
      "the mission vs. the person",
      "alone vs. together",
      "the last stand vs. the first step",
      "justice vs. vengeance",
      "the hero vs. what made them",
      "past vs. redemption",
      "the gun vs. the choice",
      "walking away vs. staying"
    ],
    "affinities": {
      "the code vs. the cost": {
        "locs": [
          "Leone extreme close-up eyes standoff dust noon sun",
          "Kurosawa samurai dawn mist field two opponents",
          "film noir Los Angeles rain street 1940s dynamic"
        ],
        "poses": [
          "both Leone extreme close-up eyes standoff dust noon",
          "both Kurosawa dawn mist draw dynamic samurai"
        ],
        "looks": [
          "Leone spaghetti western poncho dust each",
          "Kurosawa samurai robes practical worn each"
        ]
      },
      "honour vs. survival": {
        "locs": [
          "1970s Hong Kong rooftop kung fu choreography Shaws",
          "Peckinpah slow motion dust blood dramatic western",
          "French New Wave Paris chase streets 1960s"
        ],
        "poses": [
          "both Shaw Brothers kung fu rooftop 1970s dynamic mid-kick",
          "both Peckinpah slow motion dust dramatic mid-action"
        ],
        "looks": [
          "Shaw Brothers kung fu practical 1970s each",
          "Peckinpah western outlaw worn each"
        ]
      }
    },
    "locs": [
      "Leone spaghetti western main street standoff noon dust extreme",
      "Leone close-up eyes sweat dust standoff dramatic",
      "western saloon swing doors dramatic entrance",
      "western canyon ambush dramatic rocks dust",
      "western train robbery moving dramatic dynamic",
      "western dawn cemetery standoff dramatic light",
      "Kurosawa samurai dawn mist field two opponents dynamic",
      "Kurosawa rain mud samurai fight low angle dynamic",
      "samurai bamboo forest duel dynamic light",
      "Edo period Japan village samurai arrival dramatic",
      "samurai castle rooftop fight dramatic dynamic",
      "feudal Japan bridge standoff samurai dramatic",
      "film noir Los Angeles rain alley 1940s dynamic chase",
      "Chandler detective office venetian blind shadow dramatic",
      "noir San Francisco fog chase hill dramatic",
      "noir night club chase dramatic 1940s",
      "noir car chase night Los Angeles dynamic",
      "noir rooftop confrontation rain dramatic 1940s",
      "Shaw Brothers rooftop kung fu 1970s dynamic mid-fight",
      "John Woo dual pistol dramatic slow motion 1980s",
      "Hong Kong alley chase dynamic parkour dramatic",
      "Bruce Lee dojo fight scene dramatic dynamic",
      "1970s Hong Kong street fight dramatic dynamic",
      "kung fu training hall dramatic dynamic 1970s",
      "Peckinpah slow motion dust blood dramatic western shot",
      "great plains western final showdown dramatic vast",
      "western desert chase horses dramatic dynamic",
      "Blaxploitation 1970s urban chase night dynamic",
      "hardboiled detective rain chase dramatic dynamic",
      "film noir bridge confrontation rain dramatic"
    ],
    "poses": [
      "both Leone standoff extreme close-up eyes sweat dust noon",
      "both Kurosawa samurai draw dynamic dawn mist dramatic",
      "both Shaw Brothers mid-kick rooftop dynamic 1970s",
      "both Peckinpah slow motion falling dramatic western",
      "both John Woo dual pistol back to back dramatic",
      "both noir chase rain alley dynamic running",
      "both western saloon brawl dynamic action",
      "both samurai rain mud fight low angle dynamic",
      "both kung fu bamboo forest duel dynamic",
      "both noir rooftop confrontation rain dramatic",
      "both western train robbery moving dramatic",
      "both Blaxploitation chase urban night dynamic",
      "both hardboiled detective pursuit rain dynamic",
      "both samurai castle rooftop fight dramatic",
      "both western canyon ambush rocks dramatic",
      "both noir fog chase San Francisco hill",
      "both western final showdown vast plain dramatic",
      "both kung fu training dynamic dramatic",
      "both noir car chase night dynamic",
      "both samurai dawn cemetery dramatic light draw"
    ],
    "looks": [
      "Leone spaghetti western poncho duster dust each",
      "Kurosawa samurai practical worn robes each",
      "Shaw Brothers kung fu practical 1970s each",
      "Peckinpah western outlaw worn dust blood each",
      "film noir trench coat fedora 1940s each",
      "John Woo suit dramatic each 1980s",
      "Blaxploitation 1970s urban each dynamic",
      "Bruce Lee practical training each",
      "western gunfighter duster hat each",
      "noir detective rumpled suit each"
    ],
    "promptPrefix": "Cinematic genre still — spaghetti western, noir, samurai, kung fu — dynamic mid-action composition, low angles, extreme close-ups, Dutch tilts — ",
    "promptSuffix": "This is a mid-action genre film still. Dynamic angle, motion implied. Not a poster — a frame from the action. Low angle, extreme close-up, Dutch tilt, motion blur on the world. The subjects are in motion or about to move."
  },
  {
    "id": "space",
    "name": "THE SPACE",
    "sub": "Mission Control, Pale Blue Dot & the Long Way Home",
    "color": "#0a1a4a",
    "tensions": [
      "the mission vs. the person",
      "vastness vs. the small craft",
      "home vs. the void",
      "the launch vs. the return",
      "earth vs. orbit",
      "the astronaut vs. the human",
      "technical vs. emotional",
      "the countdown vs. the silence",
      "going vs. coming back",
      "the pale blue dot vs. the infinite"
    ],
    "affinities": {
      "the mission vs. the person": {
        "locs": [
          "NASA mission control 1969 Apollo celebration genuine Houston",
          "astronaut portrait before launch suit up genuine NASA",
          "ISS cupola window Earth below blue atmosphere"
        ],
        "poses": [
          "both NASA mission control 1969 genuine celebration",
          "both ISS cupola window Earth below looking"
        ],
        "looks": [
          "NASA 1960s mission control shirt tie each",
          "ISS flight suit practical each"
        ]
      }
    },
    "locs": [
      "NASA mission control 1969 Apollo celebration consoles Houston",
      "NASA astronaut suit-up room pre-launch genuine candid",
      "Cape Canaveral launch pad Saturn V 1969 dramatic",
      "NASA cafeteria astronaut training casual 1960s",
      "NASA press conference Apollo 1960s genuine",
      "Baikonur launch pad Soviet cosmonaut dramatic",
      "ISS cupola window Earth below blue atmosphere vast",
      "ISS interior cramped equipment floating objects",
      "ISS airlock EVA preparation suited dramatic",
      "space shuttle cockpit pre-launch countdown",
      "Earth from orbit blue marble vast",
      "terminator line Earth day night from orbit",
      "city lights Earth night from orbit dramatic",
      "aurora from orbit Earth green curtain",
      "deep space nebula vast colour impossible",
      "Mars surface mission dramatic vast rust",
      "moon surface Earth rise Apollo dramatic",
      "asteroid belt interior dramatic science fiction",
      "space station exterior dramatic Earth below",
      "spacecraft interior long journey dramatic",
      "1960s NASA space centre control room vintage",
      "Soviet space programme poster aesthetic Sputnik",
      "retro rocket cockpit chrome analogue 1950s",
      "space age furniture interior 1960s optimistic",
      "NASA canteen astronauts 1960s candid casual",
      "cosmonaut training pool weightless simulation",
      "SpaceX control room contemporary launch celebration",
      "Virgin Galactic window experience first time",
      "private space interior billionaire drama contemporary",
      "space tourism window first look Earth below"
    ],
    "poses": [
      "both NASA mission control 1969 genuine celebration consoles",
      "both ISS cupola window Earth vast below looking",
      "both astronaut suit-up room pre-launch genuine candid",
      "both Cape Canaveral launch pad dramatic countdown",
      "both NASA 1960s cafeteria casual astronaut training",
      "both Earth from orbit tiny spacecraft vast",
      "both ISS interior floating objects weightless candid",
      "both space shuttle cockpit dramatic launch countdown",
      "both mission control celebration screen dramatic",
      "both retro rocket cockpit chrome analogue dramatic",
      "both cosmonaut pool weightless training dramatic",
      "both Soviet poster aesthetic heroic dramatic",
      "both SpaceX control room contemporary celebration",
      "both space tourism window first Earth view genuine",
      "both astronaut portrait before launch serious genuine",
      "both moon surface Earth rise dramatic",
      "both deep space vast colour impossible behind",
      "both ISS airlock EVA preparation dramatic",
      "both NASA press conference 1960s candid genuine",
      "both space canteen candid casual astronaut"
    ],
    "looks": [
      "NASA 1960s mission control shirt tie short sleeve each",
      "ISS flight suit practical orange each",
      "Apollo spacesuit helmet visor dramatic each",
      "Soviet cosmonaut suit dramatic each",
      "1960s space age fashion optimistic each",
      "NASA casual training clothes 1960s each",
      "SpaceX contemporary flight suit each",
      "space tourist first time civilian each",
      "retro chrome space age 1950s each",
      "NASA formal presentation 1960s each"
    ],
    "promptPrefix": "Space photography aesthetic — the specific visual language of real space imagery from NASA, ESA and the Soviet programme — documentary candid quality — ",
    "promptSuffix": "Render with the specific quality of real space imagery: NASA film grain 1960s, ISS digital candid, the overwhelming scale of Earth from orbit. Human and warm despite the void. Not science fiction — real space, real humans."
  },
  {
    "id": "art",
    "name": "THE ART",
    "sub": "Masters, Movements & Visual Language",
    "color": "#7a5c2e",
    "tensions": [
      "Rembrandt",
      "Caravaggio",
      "Velázquez",
      "Goya",
      "Vermeer",
      "Rubens",
      "Van Gogh",
      "Klimt",
      "Picasso",
      "Matisse",
      "Modigliani",
      "Gauguin",
      "Toulouse-Lautrec",
      "Hopper",
      "Bacon",
      "Warhol",
      "Lichtenstein",
      "Banksy",
      "Mucha",
      "caricature"
    ],
    "affinities": {
      "Rembrandt": {
        "locs": [
          "Rembrandt intimate portrait amber glow single candle dark ground",
          "Rembrandt grand biblical scene figures emerging from darkness dramatic",
          "Rembrandt landscape winter bare trees cold grey sky Dutch"
        ],
        "poses": [
          "Rembrandt intimate portrait both close dark ground amber warmth",
          "Rembrandt both figures dramatic gesture biblical emerging darkness",
          "Rembrandt both in winter landscape cold grey small against bare trees"
        ],
        "looks": [
          "Dutch Golden Age formal dark velvet gold chain Rembrandt each",
          "Rembrandt period simple working dress linen collar each",
          "Rembrandt biblical loose draped cloth period each"
        ]
      },
      "Caravaggio": {
        "locs": [
          "Caravaggio single candle absolute darkness tenebrism stone floor",
          "Caravaggio outdoor dramatic scene strong sunlight deep shadow",
          "Caravaggio tavern interior low life scene dramatic light"
        ],
        "poses": [
          "Caravaggio both lit candle absolute darkness stone floor dramatic",
          "Caravaggio both strong outdoor sunlight deep shadow diagonal",
          "Caravaggio tavern scene both caught mid-action realist low life"
        ],
        "looks": [
          "16th century Roman formal dress Caravaggio dramatic each",
          "Caravaggio simple linen working clothes rough fabric each",
          "Caravaggio biblical loose cloth period draped each"
        ]
      },
      "Velázquez": {
        "locs": [
          "Velázquez royal portrait deep receding space atmospheric court",
          "Velázquez kitchen scene domestic realist foreground background",
          "Velázquez landscape outdoor light airy Spanish countryside"
        ],
        "poses": [
          "Velázquez royal portrait both formal dignified confident court",
          "Velázquez domestic scene both in kitchen realist natural",
          "Velázquez both in landscape outdoor airy light Spanish"
        ],
        "looks": [
          "Spanish Habsburg court black formal dress Velázquez each 17th century",
          "Velázquez domestic working dress simple servant each",
          "Velázquez period hunting casual outdoor Spanish each"
        ]
      },
      "Goya": {
        "locs": [
          "Goya dark period black paint visceral raw nightmare ground",
          "Goya court portrait formal yet psychologically exposed bright",
          "Goya Disasters of War documentary raw horror outdoor"
        ],
        "poses": [
          "Goya dark period both visceral raw expressive black ground",
          "Goya court portrait both formally posed yet psychologically raw",
          "Goya documentary both caught in moment horror outdoor raw"
        ],
        "looks": [
          "Goya dark period simple clothes dissolving into black ground each",
          "Spanish court late 18th century formal Goya each dress",
          "Goya maja traditional Spanish costume each dramatic"
        ]
      },
      "Vermeer": {
        "locs": [
          "Vermeer domestic interior pearl window light left soft tile floor",
          "Vermeer intimate detail close object foreground soft background",
          "Vermeer outdoor view through window city beyond interior frame"
        ],
        "poses": [
          "Vermeer both domestic lit soft left window pearl absorbed in task",
          "Vermeer one attending to detail other observes domestic still",
          "Vermeer both at window city seen beyond interior frame"
        ],
        "looks": [
          "Vermeer domestic yellow jacket blue skirt Dutch 17th century each",
          "Vermeer simple linen domestic dress head covering each",
          "Vermeer formal Dutch merchant dress dark Vermeer each"
        ]
      },
      "Rubens": {
        "locs": [
          "Rubens mythological scene dramatic sky dynamic figures outdoor",
          "Rubens hunting scene outdoor energetic movement horses",
          "Rubens allegorical interior rich drapery baroque dramatic"
        ],
        "poses": [
          "Rubens mythological both dynamic movement outdoor dramatic sky",
          "Rubens hunting both action energetic movement horses outdoor",
          "Rubens allegorical both draped baroque dramatic rich interior"
        ],
        "looks": [
          "Rubens baroque mythological dressed as gods each dramatic",
          "Rubens hunting dress practical outdoor Flemish each",
          "Rubens rich drapery baroque velvet silk each formal"
        ]
      },
      "Van Gogh": {
        "locs": [
          "Van Gogh Arles outdoor wheat field swirling sky impasto noon",
          "Van Gogh night café interior yellow gaslight swirling impasto",
          "Van Gogh bedroom Arles flat colour pattern simplified interior"
        ],
        "poses": [
          "Van Gogh outdoor wheat field both swirling sky noon impasto",
          "Van Gogh night café both interior yellow gaslight swirling",
          "Van Gogh bedroom interior both flat colour simplified Arles"
        ],
        "looks": [
          "Van Gogh subject peasant simple dress outdoor each 1880s Arles",
          "Van Gogh café patron working clothes interior each",
          "Van Gogh self portrait simple jacket each expressive brushwork"
        ]
      },
      "Klimt": {
        "locs": [
          "Klimt The Kiss embrace gold leaf ornamental flat decorative",
          "Klimt portrait woman gold background decorative pattern vertical",
          "Klimt landscape tree of life flat gold decorative scrolling"
        ],
        "poses": [
          "Klimt The Kiss both in gold embrace ornamental draped flat",
          "Klimt portrait one standing ornamental gold background vertical",
          "Klimt landscape both small against tree of life gold pattern"
        ],
        "looks": [
          "Klimt The Kiss gold patterned robe each ornamental draped",
          "Klimt portrait gown gold decorative pattern each Vienna",
          "Klimt period Vienna Secession dress ornamental each 1900s"
        ]
      },
      "Picasso": {
        "locs": [
          "Picasso Cubist fractured planes multiple viewpoints ochre grey",
          "Picasso Blue Period sparse melancholy blue tones flat",
          "Picasso Rose Period warm terracotta soft circus acrobats light"
        ],
        "poses": [
          "Picasso Cubist both fragmented simultaneously front profile sideways",
          "Picasso Blue Period both melancholy sparse blue interior flat",
          "Picasso Rose Period both soft terracotta acrobats tender warm"
        ],
        "looks": [
          "Picasso Cubist deconstructed geometric fractured dress each",
          "Picasso Blue Period thin ragged melancholy clothes each",
          "Picasso Rose Period acrobat costume soft terracotta each"
        ]
      },
      "Matisse": {
        "locs": [
          "Matisse Odalisque interior pattern on pattern flat colour decorative",
          "Matisse Dance flat colour figures outdoor against blue sky",
          "Matisse paper cut-out flat colour shape simplified collage"
        ],
        "poses": [
          "Matisse interior pattern both reclining flat colour decorative",
          "Matisse Dance both movement figures flat blue sky outdoor",
          "Matisse cut-out both flat simplified colour shape collage"
        ],
        "looks": [
          "Matisse Odalisque patterned robe decorative interior each flat",
          "Matisse Dance simple draped each movement outdoor flat",
          "Matisse cut-out flat simplified colour silhouette each"
        ]
      },
      "Modigliani": {
        "locs": [
          "Modigliani portrait warm ochre ground neutral Montparnasse simplified",
          "Modigliani reclining figure horizontal warm simplified ground",
          "Modigliani couple portrait warm ground two elongated simplified"
        ],
        "poses": [
          "Modigliani portrait both elongated oval faces warm ochre ground",
          "Modigliani reclining one horizontal simplified warm other observes",
          "Modigliani couple both oval elongated facing each warm ground"
        ],
        "looks": [
          "Modigliani subject simple open collar Montparnasse 1910s each",
          "Modigliani draped undress simple warm each ochre ground",
          "Modigliani period simple jacket dress 1910s Parisian each"
        ]
      },
      "Gauguin": {
        "locs": [
          "Gauguin Tahitian outdoor flat colour tropical lush dense",
          "Gauguin interior domestic Polynesian flat pattern mat floor",
          "Gauguin Breton outdoor pre-Tahiti flat colour Pont-Aven"
        ],
        "poses": [
          "Gauguin Tahitian outdoor both flat frontal tropical lush",
          "Gauguin domestic interior both seated mat floor Polynesian flat",
          "Gauguin Breton both outdoor Pont-Aven flat colour Pre-Tahiti"
        ],
        "looks": [
          "Gauguin Tahitian pareo cloth simple each flat tropical",
          "Gauguin Polynesian domestic dress each mat floor interior",
          "Gauguin Breton traditional dress each Pont-Aven flat colour"
        ]
      },
      "Toulouse-Lautrec": {
        "locs": [
          "Toulouse-Lautrec Moulin Rouge stage performance night poster flat",
          "Toulouse-Lautrec backstage dressing room intimate observation",
          "Toulouse-Lautrec brothel interior intimate domestic observation"
        ],
        "poses": [
          "Toulouse-Lautrec Moulin Rouge stage performance both flat graphic",
          "Toulouse-Lautrec backstage both intimate dressing room observation",
          "Toulouse-Lautrec brothel interior both domestic intimate flat"
        ],
        "looks": [
          "Toulouse-Lautrec can-can dancer dress stage each Moulin Rouge",
          "Toulouse-Lautrec backstage casual undress intimate each",
          "Toulouse-Lautrec 1890s Parisian street dress bourgeois each"
        ]
      },
      "Hopper": {
        "locs": [
          "Hopper Nighthawks diner late night three figures counter fluorescent",
          "Hopper interior woman alone window light morning melancholy",
          "Hopper New England exterior hard sunlight white house isolated"
        ],
        "poses": [
          "Hopper Nighthawks diner both at counter late night not touching",
          "Hopper interior one alone window light other enters melancholy",
          "Hopper exterior both hard sunlight white building isolated"
        ],
        "looks": [
          "Hopper Nighthawks 1942 diner clothes each casual working",
          "Hopper interior 1940s woman dress each melancholy American",
          "Hopper New England 1930s practical clothes each American"
        ]
      },
      "Bacon": {
        "locs": [
          "Bacon triptych three panels dark ground armature isolated figure",
          "Bacon Screaming Pope velvet curtain compressed space dark",
          "Bacon studio floor newspaper raw paint dark ground"
        ],
        "poses": [
          "Bacon triptych both isolated separate panels dark ground raw",
          "Bacon Screaming Pope both compressed velvet curtain dark distorted",
          "Bacon studio both raw floor newspaper paint dark ground"
        ],
        "looks": [
          "Bacon triptych simple suit distorted raw dark each",
          "Bacon compressed figure simple clothes dark ground each",
          "Bacon raw paint simple dress dark studio floor each"
        ]
      },
      "Warhol": {
        "locs": [
          "Warhol screen print single portrait repeated flat colour four grid",
          "Warhol Factory silver mylar balloons interior New York 1960s",
          "Warhol Death and Disaster flat newspaper image silkscreen"
        ],
        "poses": [
          "Warhol screen print both repeated flat colour four-panel grid",
          "Warhol Factory interior both silver mylar casual 1960s New York",
          "Warhol Disaster both flat newspaper image silkscreen stark"
        ],
        "looks": [
          "Warhol screen print flat colour simplified dress each repeated",
          "Warhol Factory 1960s New York casual underground each",
          "Warhol Disaster plain clothes flat silkscreen stark each"
        ]
      },
      "Lichtenstein": {
        "locs": [
          "Lichtenstein comic romance panel crying girl Ben-Day dots bold",
          "Lichtenstein war comic explosion Whaam bold primary action",
          "Lichtenstein brushstroke painting meta parody abstract Ben-Day"
        ],
        "poses": [
          "Lichtenstein romance panel one crying dramatic Ben-Day dots",
          "Lichtenstein war comic both action explosion bold primary",
          "Lichtenstein brushstroke meta both parody abstract bold"
        ],
        "looks": [
          "Lichtenstein romance comic girl dress bold outline dots each",
          "Lichtenstein war comic pilot uniform bold primary each",
          "Lichtenstein meta parody simple clothes Ben-Day dots each"
        ]
      },
      "Banksy": {
        "locs": [
          "Banksy urban wall stencil rat protest placard graphic street",
          "Banksy beach wall stencil girl balloon lost naive graphic",
          "Banksy museum wall stencil caveman shopping trolley subversive"
        ],
        "poses": [
          "Banksy stencil both protest graphic urban stark wall rat",
          "Banksy girl balloon one reaching other watching graphic naive",
          "Banksy museum both stencil subversive graphic wall context"
        ],
        "looks": [
          "Banksy stencil urban protest clothes each graphic stark",
          "Banksy naive child clothes each simple graphic stencil",
          "Banksy stencil simple silhouette each stark graphic"
        ]
      },
      "Mucha": {
        "locs": [
          "Mucha poster art nouveau flowing hair botanical border soft gold",
          "Mucha decorative panel four seasons circular border ornamental",
          "Mucha theatre poster dramatic flowing line colour spot flat"
        ],
        "poses": [
          "Mucha poster both flowing hair botanical ornamental border gold",
          "Mucha four seasons both circular ornamental border decorative",
          "Mucha theatre poster both dramatic flowing colour spot flat"
        ],
        "looks": [
          "Mucha flowing gown botanical ornamental border each soft gold",
          "Mucha four seasons draped each decorative ornamental circular",
          "Mucha theatre flowing dramatic dress each colour spot flat"
        ]
      },
      "caricature": {
        "locs": [
          "political caricature ink bold exaggerated satirical broadsheet",
          "Daumier 19th century lithograph street scene Paris satirical",
          "Gillray Georgian caricature excess grotesque colour hand"
        ],
        "poses": [
          "political caricature both exaggerated defining features bold ink",
          "Daumier lithograph both Paris street scene satirical observation",
          "Gillray Georgian both grotesque excess colour hand caricature"
        ],
        "looks": [
          "political caricature exaggerated costume satirical each bold",
          "Daumier 19th century bourgeois dress satirical each Paris",
          "Gillray Georgian excess dress grotesque each hand coloured"
        ]
      }
    },
    "locs": [
      "Rembrandt intimate portrait amber glow single candle dark ground",
      "Rembrandt grand biblical scene figures emerging from darkness dramatic",
      "Rembrandt landscape winter bare trees cold grey sky Dutch",
      "Caravaggio single candle absolute darkness tenebrism stone floor",
      "Caravaggio outdoor dramatic scene strong sunlight deep shadow",
      "Caravaggio tavern interior low life scene dramatic light",
      "Velázquez royal portrait deep receding space atmospheric court",
      "Velázquez kitchen scene domestic realist foreground background",
      "Velázquez landscape outdoor light airy Spanish countryside",
      "Goya dark period black paint visceral raw nightmare ground",
      "Goya court portrait formal yet psychologically exposed bright",
      "Goya Disasters of War documentary raw horror outdoor",
      "Vermeer domestic interior pearl window light left soft tile floor",
      "Vermeer intimate detail close object foreground soft background",
      "Vermeer outdoor view through window city beyond interior frame",
      "Rubens mythological scene dramatic sky dynamic figures outdoor",
      "Rubens hunting scene outdoor energetic movement horses",
      "Rubens allegorical interior rich drapery baroque dramatic",
      "Van Gogh Arles outdoor wheat field swirling sky impasto noon",
      "Van Gogh night café interior yellow gaslight swirling impasto",
      "Van Gogh bedroom Arles flat colour pattern simplified interior",
      "Klimt The Kiss embrace gold leaf ornamental flat decorative",
      "Klimt portrait woman gold background decorative pattern vertical",
      "Klimt landscape tree of life flat gold decorative scrolling",
      "Picasso Cubist fractured planes multiple viewpoints ochre grey",
      "Picasso Blue Period sparse melancholy blue tones flat",
      "Picasso Rose Period warm terracotta soft circus acrobats light",
      "Matisse Odalisque interior pattern on pattern flat colour decorative",
      "Matisse Dance flat colour figures outdoor against blue sky",
      "Matisse paper cut-out flat colour shape simplified collage",
      "Modigliani portrait warm ochre ground neutral Montparnasse simplified",
      "Modigliani reclining figure horizontal warm simplified ground",
      "Modigliani couple portrait warm ground two elongated simplified",
      "Gauguin Tahitian outdoor flat colour tropical lush dense",
      "Gauguin interior domestic Polynesian flat pattern mat floor",
      "Gauguin Breton outdoor pre-Tahiti flat colour Pont-Aven",
      "Toulouse-Lautrec Moulin Rouge stage performance night poster flat",
      "Toulouse-Lautrec backstage dressing room intimate observation",
      "Toulouse-Lautrec brothel interior intimate domestic observation",
      "Hopper Nighthawks diner late night three figures counter fluorescent",
      "Hopper interior woman alone window light morning melancholy",
      "Hopper New England exterior hard sunlight white house isolated",
      "Bacon triptych three panels dark ground armature isolated figure",
      "Bacon Screaming Pope velvet curtain compressed space dark",
      "Bacon studio floor newspaper raw paint dark ground",
      "Warhol screen print single portrait repeated flat colour four grid",
      "Warhol Factory silver mylar balloons interior New York 1960s",
      "Warhol Death and Disaster flat newspaper image silkscreen",
      "Lichtenstein comic romance panel crying girl Ben-Day dots bold",
      "Lichtenstein war comic explosion Whaam bold primary action",
      "Lichtenstein brushstroke painting meta parody abstract Ben-Day",
      "Banksy urban wall stencil rat protest placard graphic street",
      "Banksy beach wall stencil girl balloon lost naive graphic",
      "Banksy museum wall stencil caveman shopping trolley subversive",
      "Mucha poster art nouveau flowing hair botanical border soft gold",
      "Mucha decorative panel four seasons circular border ornamental",
      "Mucha theatre poster dramatic flowing line colour spot flat",
      "political caricature ink bold exaggerated satirical broadsheet",
      "Daumier 19th century lithograph street scene Paris satirical",
      "Gillray Georgian caricature excess grotesque colour hand"
    ],
    "poses": [
      "Rembrandt intimate portrait both close dark ground amber warmth",
      "Rembrandt both figures dramatic gesture biblical emerging darkness",
      "Rembrandt both in winter landscape cold grey small against bare trees",
      "Caravaggio both lit candle absolute darkness stone floor dramatic",
      "Caravaggio both strong outdoor sunlight deep shadow diagonal",
      "Caravaggio tavern scene both caught mid-action realist low life",
      "Velázquez royal portrait both formal dignified confident court",
      "Velázquez domestic scene both in kitchen realist natural",
      "Velázquez both in landscape outdoor airy light Spanish",
      "Goya dark period both visceral raw expressive black ground",
      "Goya court portrait both formally posed yet psychologically raw",
      "Goya documentary both caught in moment horror outdoor raw",
      "Vermeer both domestic lit soft left window pearl absorbed in task",
      "Vermeer one attending to detail other observes domestic still",
      "Vermeer both at window city seen beyond interior frame",
      "Rubens mythological both dynamic movement outdoor dramatic sky",
      "Rubens hunting both action energetic movement horses outdoor",
      "Rubens allegorical both draped baroque dramatic rich interior",
      "Van Gogh outdoor wheat field both swirling sky noon impasto",
      "Van Gogh night café both interior yellow gaslight swirling",
      "Van Gogh bedroom interior both flat colour simplified Arles",
      "Klimt The Kiss both in gold embrace ornamental draped flat",
      "Klimt portrait one standing ornamental gold background vertical",
      "Klimt landscape both small against tree of life gold pattern",
      "Picasso Cubist both fragmented simultaneously front profile sideways",
      "Picasso Blue Period both melancholy sparse blue interior flat",
      "Picasso Rose Period both soft terracotta acrobats tender warm",
      "Matisse interior pattern both reclining flat colour decorative",
      "Matisse Dance both movement figures flat blue sky outdoor",
      "Matisse cut-out both flat simplified colour shape collage",
      "Modigliani portrait both elongated oval faces warm ochre ground",
      "Modigliani reclining one horizontal simplified warm other observes",
      "Modigliani couple both oval elongated facing each warm ground",
      "Gauguin Tahitian outdoor both flat frontal tropical lush",
      "Gauguin domestic interior both seated mat floor Polynesian flat",
      "Gauguin Breton both outdoor Pont-Aven flat colour Pre-Tahiti",
      "Toulouse-Lautrec Moulin Rouge stage performance both flat graphic",
      "Toulouse-Lautrec backstage both intimate dressing room observation",
      "Toulouse-Lautrec brothel interior both domestic intimate flat",
      "Hopper Nighthawks diner both at counter late night not touching",
      "Hopper interior one alone window light other enters melancholy",
      "Hopper exterior both hard sunlight white building isolated",
      "Bacon triptych both isolated separate panels dark ground raw",
      "Bacon Screaming Pope both compressed velvet curtain dark distorted",
      "Bacon studio both raw floor newspaper paint dark ground",
      "Warhol screen print both repeated flat colour four-panel grid",
      "Warhol Factory interior both silver mylar casual 1960s New York",
      "Warhol Disaster both flat newspaper image silkscreen stark",
      "Lichtenstein romance panel one crying dramatic Ben-Day dots",
      "Lichtenstein war comic both action explosion bold primary",
      "Lichtenstein brushstroke meta both parody abstract bold",
      "Banksy stencil both protest graphic urban stark wall rat",
      "Banksy girl balloon one reaching other watching graphic naive",
      "Banksy museum both stencil subversive graphic wall context",
      "Mucha poster both flowing hair botanical ornamental border gold",
      "Mucha four seasons both circular ornamental border decorative",
      "Mucha theatre poster both dramatic flowing colour spot flat",
      "political caricature both exaggerated defining features bold ink",
      "Daumier lithograph both Paris street scene satirical observation",
      "Gillray Georgian both grotesque excess colour hand caricature"
    ],
    "looks": [
      "Dutch Golden Age formal dark velvet gold chain Rembrandt each",
      "Rembrandt period simple working dress linen collar each",
      "Rembrandt biblical loose draped cloth period each",
      "16th century Roman formal dress Caravaggio dramatic each",
      "Caravaggio simple linen working clothes rough fabric each",
      "Caravaggio biblical loose cloth period draped each",
      "Spanish Habsburg court black formal dress Velázquez each 17th century",
      "Velázquez domestic working dress simple servant each",
      "Velázquez period hunting casual outdoor Spanish each",
      "Goya dark period simple clothes dissolving into black ground each",
      "Spanish court late 18th century formal Goya each dress",
      "Goya maja traditional Spanish costume each dramatic",
      "Vermeer domestic yellow jacket blue skirt Dutch 17th century each",
      "Vermeer simple linen domestic dress head covering each",
      "Vermeer formal Dutch merchant dress dark Vermeer each",
      "Rubens baroque mythological dressed as gods each dramatic",
      "Rubens hunting dress practical outdoor Flemish each",
      "Rubens rich drapery baroque velvet silk each formal",
      "Van Gogh subject peasant simple dress outdoor each 1880s Arles",
      "Van Gogh café patron working clothes interior each",
      "Van Gogh self portrait simple jacket each expressive brushwork",
      "Klimt The Kiss gold patterned robe each ornamental draped",
      "Klimt portrait gown gold decorative pattern each Vienna",
      "Klimt period Vienna Secession dress ornamental each 1900s",
      "Picasso Cubist deconstructed geometric fractured dress each",
      "Picasso Blue Period thin ragged melancholy clothes each",
      "Picasso Rose Period acrobat costume soft terracotta each",
      "Matisse Odalisque patterned robe decorative interior each flat",
      "Matisse Dance simple draped each movement outdoor flat",
      "Matisse cut-out flat simplified colour silhouette each",
      "Modigliani subject simple open collar Montparnasse 1910s each",
      "Modigliani draped undress simple warm each ochre ground",
      "Modigliani period simple jacket dress 1910s Parisian each",
      "Gauguin Tahitian pareo cloth simple each flat tropical",
      "Gauguin Polynesian domestic dress each mat floor interior",
      "Gauguin Breton traditional dress each Pont-Aven flat colour",
      "Toulouse-Lautrec can-can dancer dress stage each Moulin Rouge",
      "Toulouse-Lautrec backstage casual undress intimate each",
      "Toulouse-Lautrec 1890s Parisian street dress bourgeois each",
      "Hopper Nighthawks 1942 diner clothes each casual working",
      "Hopper interior 1940s woman dress each melancholy American",
      "Hopper New England 1930s practical clothes each American",
      "Bacon triptych simple suit distorted raw dark each",
      "Bacon compressed figure simple clothes dark ground each",
      "Bacon raw paint simple dress dark studio floor each",
      "Warhol screen print flat colour simplified dress each repeated",
      "Warhol Factory 1960s New York casual underground each",
      "Warhol Disaster plain clothes flat silkscreen stark each",
      "Lichtenstein romance comic girl dress bold outline dots each",
      "Lichtenstein war comic pilot uniform bold primary each",
      "Lichtenstein meta parody simple clothes Ben-Day dots each",
      "Banksy stencil urban protest clothes each graphic stark",
      "Banksy naive child clothes each simple graphic stencil",
      "Banksy stencil simple silhouette each stark graphic",
      "Mucha flowing gown botanical ornamental border each soft gold",
      "Mucha four seasons draped each decorative ornamental circular",
      "Mucha theatre flowing dramatic dress each colour spot flat",
      "political caricature exaggerated costume satirical each bold",
      "Daumier 19th century bourgeois dress satirical each Paris",
      "Gillray Georgian excess dress grotesque each hand coloured"
    ],
    "promptPrefix": "Fine art portrait rendered in the visual language of the named artist or movement — the image IS the artwork — ",
    "promptSuffix": "Render entirely in the named artist's visual language — their brushwork, palette, composition and technique. The subjects exist inside the artwork, not in front of it."
  },
  {
    "id": "mexico",
    "name": "THE MEXICO",
    "sub": "Culture & Life",
    "color": "#cc4422",
    "tensions": [
      "tradition vs. modern",
      "fiesta vs. everyday",
      "ancient vs. colonial",
      "border vs. homeland",
      "ocean vs. desert",
      "market vs. mall",
      "family vs. solitude",
      "day of the dead vs. life",
      "mural vs. canvas",
      "spice vs. sweet",
      "local vs. tourist",
      "colonial vs. indigenous",
      "siesta vs. hustle",
      "carnival vs. quiet",
      "north vs. south",
      "coast vs. highlands",
      "artisan vs. factory",
      "sacred vs. street",
      "migrant vs. rooted",
      "celebration vs. mourning"
    ],
    "locs": [
      "Oaxacan market stall morning colour",
      "Chichen Itza pyramid sunrise empty",
      "Lucha libre arena ring between bouts",
      "Mexico City Zócalo plaza evening",
      "Frida Kahlo blue house Coyoacán",
      "Xochimilco trajinera canal flower boat",
      "Oaxaca Monte Albán ruins",
      "Teotihuacan pyramids dawn",
      "Palenque jungle ruins Chiapas",
      "Uxmal Yucatan ruins",
      "Merida colonial plaza Sunday",
      "San Cristóbal de las Casas highland",
      "Puerto Escondido surf beach Oaxaca",
      "Huatulco bay beach Oaxaca",
      "Sayulita beach Nayarit village",
      "Puerto Vallarta old town Jalisco",
      "Guadalajara Tlaquepaque craft market",
      "Guanajuato callejón del Beso lane",
      "Guanajuato Festival Cervantino stage",
      "San Miguel de Allende jardin",
      "Tulum ruins cliff sea below",
      "Tulum cenote swim jungle",
      "Bacalar lake colours Quintana Roo",
      "Coba pyramid climb top jungle",
      "Valladolid cenote swim Yucatan",
      "Izamal yellow town Yucatan",
      "Campeche colonial colour walls",
      "Veracruz malecon evening",
      "Xalapa anthro museum Veracruz",
      "Tlaxcala smallest state capital",
      "Morelia cathedral evening Michoacán",
      "Pátzcuaro Day of Dead lake",
      "Janitzio island midnight ceremony",
      "Cholula pyramid church top",
      "Puebla Azulejo tile building",
      "Taxco silver town hilltop",
      "Acapulco cliff diver platform",
      "Mazatlán old town Sinaloa",
      "Los Cabos arch sea rock",
      "Baja peninsula road trip",
      "Copper Canyon train Chihuahua",
      "Creel Tarahumara area Chihuahua"
    ],
    "poses": [
      "dancing salsa close hold street music",
      "mariachi serenade face to face close",
      "shared street taco vendor lean laughing",
      "carrying ofrenda flowers together Day of Dead",
      "both in lucha libre masks play-fight",
      "spinning in plaza music traditional both",
      "both at mole cookery class absorbed",
      "market stall vendor and customer together",
      "both watching sunset on beach warm",
      "posing at famous tile wall together",
      "both at pyramid summit arms wide",
      "descending pyramid together careful",
      "cenote jump holding hands both",
      "both swimming in cenote clear water",
      "eating tlayuda together street Oaxaca",
      "mezcal toast together clay cup both",
      "both at chocolate making workshop hands",
      "weaving demonstration both learning",
      "pottery class both clay-covered laughing",
      "embroidery lesson both trying",
      "both at Day of Dead altar placing flowers",
      "writing name on altar wall both",
      "both watching Guelaguetza dance absorbed",
      "joining circle dance both learning",
      "both at wrestling lucha match arms up",
      "selfie in front of pyramid classic both",
      "both at border crossing official queue",
      "both on colectivo van squeezing in",
      "both on horse in mountains together",
      "both at pulque bar local experience",
      "Frida museum garden both contemplative",
      "muralist work both studying Rivera",
      "both at silver market choosing together",
      "both at handicraft market buying"
    ],
    "looks": [
      "embroidered huipil and simple trousers each traditional Oaxacan",
      "Oaxacan floral dress and guayabera shirt each",
      "charro suit open collar and china poblana dress each",
      "talavera-print blouse and guayabera each",
      "floral crown embroidered dress and linen guayabera each",
      "Tehuana dress and linen shirt each Frida-inspired",
      "handwoven rebozo and cotton shirt each",
      "zapotec weave garment each traditional",
      "huipil and sandals each indigenous style",
      "Day of Dead makeup and black formal each",
      "calavera costume both festive",
      "lucha libre mask and street clothes each",
      "charro full suit and china poblana each",
      "traditional fiesta dress and shirt each",
      "colourful embroidery on white both",
      "Mexico City creative street style each",
      "Guadalajara artisanal modern both",
      "Oaxaca craft-market inspired both",
      "beach casual both Pacific Mexico",
      "cenote-ready swimwear each",
      "travel layers Mexico both practical",
      "mezcal bar casual both relaxed",
      "market casual both comfortable hot",
      "restaurant occasion smart each Mexico City",
      "Polanco restaurant smart both Mexico City",
      "Condesa café casual both",
      "Roma Norte street style each",
      "Coyoacán artist casual both",
      "Teotihuacan practical comfortable both",
      "pyramid climbing practical both",
      "coastal resort relaxed both",
      "Caribbean Mexico beach both"
    ],
    "affinities": {
      "tradition vs. modern": {
        "locs": [
          "Oaxacan market stall morning",
          "Mexico City Roma neighborhood cafe",
          "Frida Kahlo blue house patio",
          "Mexico City Zócalo plaza",
          "Tlaquepaque artisan workshop"
        ],
        "poses": [
          "one doing embroidery other watches",
          "both at colorful alley wall",
          "one weaving at loom other watching",
          "both in traditional dress pose",
          "street food bite shared laughing"
        ],
        "looks": [
          "embroidered huipil simple",
          "Oaxacan floral dress and guayabera shirt",
          "guayabera shirt linen pants",
          "hand-dyed cotton casual",
          "woven huipil modern cut"
        ]
      },
      "fiesta vs. everyday": {
        "locs": [
          "Guadalajara mariachi square",
          "Mazatlan Carnaval street float",
          "Tlaxcala carnival dance street",
          "Merida colonial plaza afternoon",
          "Oaxacan tlayuda street stall"
        ],
        "poses": [
          "dancing salsa close hold",
          "running through confetti together",
          "street carnival float wave together",
          "slow dance plaza evening",
          "shared street taco vendor lean"
        ],
        "looks": [
          "fiesta dress bright layers",
          "carnival costume loosened",
          "charro suit open collar",
          "floral crown dress and linen guayabera",
          "fiesta blouse dark skirt"
        ]
      },
      "ancient vs. colonial": {
        "locs": [
          "Chichen Itza pyramid sunrise",
          "Teotihuacan Avenue of the Dead",
          "Palenque jungle ruins mist",
          "Zacatecas colonial cathedral steps",
          "San Miguel de Allende rooftop"
        ],
        "poses": [
          "both at pyramid top arms wide",
          "both at cathedral arch looking up",
          "cliff ruins both looking out",
          "one painting mural other watching",
          "both at Bellas Artes steps"
        ],
        "looks": [
          "Mayan-inspired wrapped skirt",
          "colonial style white linen",
          "traditional Tehuana dress",
          "colonial blouse talavera skirt",
          "artisan apron colorful blouse"
        ]
      },
      "border vs. homeland": {
        "locs": [
          "Taos-adjacent border desert dawn",
          "Mexico City Tepito street market",
          "Copper Canyon rim overlook",
          "Monterrey Barrio Antiguo street",
          "Mexico City Tepito street market"
        ],
        "poses": [
          "carrying market basket hand in hand",
          "both at market stall bargaining",
          "both looking at ofrenda altar",
          "morning market flower carry both",
          "one carrying clay pot other beside"
        ],
        "looks": [
          "tianguis casual bright colors",
          "floral blouse skirt and loose linen shirt",
          "charro-lite boots dark jeans",
          "street art casual bright tee",
          "hand-dyed cotton casual"
        ]
      },
      "ocean vs. desert": {
        "locs": [
          "Tulum cliff beach below ruins",
          "Baja California surf break",
          "Zipolite beach hammock shade",
          "Copper Canyon rim overlook",
          "Taos-adjacent border desert dawn"
        ],
        "poses": [
          "watching sunset Lake Chapala together",
          "surf break both watching",
          "beach hammock side by side",
          "cliff ruins both looking out",
          "jumping from cenote edge together"
        ],
        "looks": [
          "beach guayabera linen shorts",
          "surf town linen open shirt",
          "beachside floral wrap",
          "swimsuit wrap and board shorts each",
          "huarache sandals cotton dress"
        ]
      },
      "market vs. mall": {
        "locs": [
          "Oaxacan market stall morning",
          "San Cristobal de las Casas market",
          "Chiapas highland village market",
          "Taxco silver market stall",
          "Mexico City Tepito street market"
        ],
        "poses": [
          "both at market stall bargaining",
          "morning market flower carry both",
          "carrying market basket hand in hand",
          "one carrying clay pot other beside",
          "both at market tile stall"
        ],
        "looks": [
          "floral blouse skirt and loose linen shirt",
          "tianguis casual bright colors",
          "reboso casual market layers",
          "market vendor apron bright",
          "braided embroidered dress and traditional shirt"
        ]
      },
      "family vs. solitude": {
        "locs": [
          "Cuernavaca garden courtyard",
          "Hacienda courtyard fountain",
          "Lake Chapala shore sunset",
          "Patzcuaro lake dock morning",
          "Yucatan hammock palapa shade"
        ],
        "poses": [
          "hammock shared together",
          "sitting on hacienda steps together",
          "watching sunset Lake Chapala together",
          "slow dance plaza evening",
          "beach hammock side by side"
        ],
        "looks": [
          "hacienda linen simple",
          "reboso casual market layers",
          "hand-dyed cotton casual",
          "Yucatan guayabera white",
          "huarache sandals cotton dress"
        ]
      },
      "day of the dead vs. life": {
        "locs": [
          "Day of the Dead ofrenda altar",
          "Frida mural street Mexico City",
          "Mexico City Zócalo plaza",
          "Oaxacan market stall morning",
          "Michoacan butterfly forest path"
        ],
        "poses": [
          "day of the dead face paint both",
          "both looking at ofrenda altar",
          "carrying ofrenda flowers together",
          "one face paint applying other",
          "both watching firefly butterfly forest"
        ],
        "looks": [
          "dia de muertos dress and printed shirt",
          "day of the dead skull print",
          "floral crown dress and linen guayabera",
          "folk art embroidered jacket",
          "traditional Tehuana dress"
        ]
      },
      "mural vs. canvas": {
        "locs": [
          "Frida mural street Mexico City",
          "Frida Kahlo blue house patio",
          "Mexico City Bellas Artes steps",
          "Guanajuato alley colored walls",
          "Tlaquepaque artisan workshop"
        ],
        "poses": [
          "one painting mural other watching",
          "both at colorful alley wall",
          "both at Bellas Artes steps",
          "talavera tile wall pose both",
          "one doing embroidery other watches"
        ],
        "looks": [
          "street art casual bright tee",
          "Oaxacan floral dress and guayabera shirt",
          "artisan apron colorful blouse",
          "folk art embroidered jacket",
          "Aztec print casual layers"
        ]
      },
      "spice vs. sweet": {
        "locs": [
          "Oaxacan tlayuda street stall",
          "Mexico City Tepito street market",
          "Oaxacan mezcal distillery",
          "Mezcal bar Oaxaca interior",
          "Puebla talavera tile workshop"
        ],
        "poses": [
          "street food bite shared laughing",
          "shared street taco vendor lean",
          "drinking mezcal toast together",
          "one pouring mezcal other receiving",
          "one cooking tortilla other beside"
        ],
        "looks": [
          "floral blouse skirt and loose linen shirt",
          "tianguis casual bright colors",
          "guayabera shirt linen pants",
          "Oaxacan textile blouse pants",
          "mezcalería casual linen"
        ]
      },
      "local vs. tourist": {
        "locs": [
          "Tulum cliff beach below ruins",
          "Chichen Itza pyramid sunrise",
          "Cancun cenote swim hole",
          "Riviera Maya white sand beach",
          "Coba pyramid jungle top"
        ],
        "poses": [
          "both at pyramid top arms wide",
          "jumping from cenote edge together",
          "cliff ruins both looking out",
          "waist-deep cenote swim together",
          "surf break both watching"
        ],
        "looks": [
          "beach guayabera linen shorts",
          "swimsuit wrap and board shorts each",
          "surf town linen open shirt",
          "beachside floral wrap",
          "huarache sandals cotton dress"
        ]
      },
      "colonial vs. indigenous": {
        "locs": [
          "Zacatecas colonial cathedral steps",
          "San Miguel de Allende rooftop",
          "Oaxacan weaving workshop loom",
          "Chiapas highland village market",
          "Palenque jungle ruins mist"
        ],
        "poses": [
          "both at cathedral arch looking up",
          "one weaving at loom other watching",
          "one doing embroidery other watches",
          "one braiding flower crown other",
          "both in traditional dress pose"
        ],
        "looks": [
          "colonial style white linen",
          "traditional Tehuana dress",
          "embroidered huipil simple",
          "handwoven textile wrap skirt",
          "traditional reboso wrap"
        ]
      },
      "siesta vs. hustle": {
        "locs": [
          "Yucatan hammock palapa shade",
          "Mexico City Roma neighborhood cafe",
          "Merida colonial plaza afternoon",
          "Cuernavaca garden courtyard",
          "Mexico City Tepito street market"
        ],
        "poses": [
          "hammock shared together",
          "sitting on hacienda steps together",
          "both at market stall bargaining",
          "slow cumbia dance hold",
          "shared street taco vendor lean"
        ],
        "looks": [
          "hacienda linen simple",
          "Yucatan guayabera white",
          "guayabera shirt linen pants",
          "mezcalería casual linen",
          "tianguis casual bright colors"
        ]
      },
      "carnival vs. quiet": {
        "locs": [
          "Mazatlan Carnaval street float",
          "Tlaxcala carnival dance street",
          "Patzcuaro lake dock morning",
          "Lake Chapala shore sunset",
          "Cuernavaca garden courtyard"
        ],
        "poses": [
          "running through confetti together",
          "street carnival float wave together",
          "watching sunset Lake Chapala together",
          "hammock shared together",
          "sitting on hacienda steps together"
        ],
        "looks": [
          "carnival costume loosened",
          "fiesta dress bright layers",
          "hacienda linen simple",
          "carnival bright body paint layers",
          "hand-dyed cotton casual"
        ]
      },
      "north vs. south": {
        "locs": [
          "Monterrey Barrio Antiguo street",
          "Copper Canyon rim overlook",
          "Chiapas highland village market",
          "Palenque jungle ruins mist",
          "Guadalajara tequila field rows"
        ],
        "poses": [
          "both at cathedral arch looking up",
          "both at pyramid top arms wide",
          "tequila field row walk together",
          "both looking at ofrenda altar",
          "cliff ruins both looking out"
        ],
        "looks": [
          "charro-lite boots dark jeans",
          "copper canyon trail layers",
          "Jalisco charro loosened",
          "Mayan-inspired wrapped skirt",
          "traditional Tehuana dress"
        ]
      },
      "coast vs. highlands": {
        "locs": [
          "Puerto Vallarta Malecon evening",
          "Veracruz port malecón sunset",
          "Chiapas highland village market",
          "San Cristobal de las Casas market",
          "Sayulita surf town street"
        ],
        "poses": [
          "slow dance plaza evening",
          "watching sunset Lake Chapala together",
          "surf break both watching",
          "morning market flower carry both",
          "sitting on trajinera canal"
        ],
        "looks": [
          "beach guayabera linen shorts",
          "surf town linen open shirt",
          "beachside floral wrap",
          "floral blouse skirt and loose linen shirt",
          "Oaxacan textile blouse pants"
        ]
      },
      "artisan vs. factory": {
        "locs": [
          "Taxco silver workshop bench",
          "Oaxacan weaving workshop loom",
          "Puebla talavera tile workshop",
          "Tlaquepaque artisan workshop",
          "Tlaquepaque artisan workshop"
        ],
        "poses": [
          "one weaving at loom other watching",
          "one doing embroidery other watches",
          "silver market stall examination",
          "talavera tile wall pose both",
          "one carrying clay pot other beside"
        ],
        "looks": [
          "silver artisan work apron",
          "artisan apron colorful blouse",
          "Oaxacan textile blouse pants",
          "embroidered huipil simple",
          "folk art embroidered jacket"
        ]
      },
      "sacred vs. street": {
        "locs": [
          "Day of the Dead ofrenda altar",
          "Zacatecas colonial cathedral steps",
          "Mexico City Zócalo plaza",
          "Mexico City Tepito street market",
          "Frida mural street Mexico City"
        ],
        "poses": [
          "both looking at ofrenda altar",
          "carrying ofrenda flowers together",
          "both at cathedral arch looking up",
          "day of the dead face paint both",
          "one painting mural other watching"
        ],
        "looks": [
          "dia de muertos dress and printed shirt",
          "traditional Tehuana dress",
          "embroidered huipil simple",
          "floral crown dress and linen guayabera",
          "street art casual bright tee"
        ]
      },
      "migrant vs. rooted": {
        "locs": [
          "Mexico City Zócalo plaza",
          "Guanajuato alley colored walls",
          "Oaxacan market stall morning",
          "Merida colonial plaza afternoon",
          "Hacienda courtyard fountain"
        ],
        "poses": [
          "both at colorful alley wall",
          "carrying market basket hand in hand",
          "sitting on hacienda steps together",
          "morning market flower carry both",
          "both at market stall bargaining"
        ],
        "looks": [
          "hand-dyed cotton casual",
          "tianguis casual bright colors",
          "hacienda linen simple",
          "traditional reboso wrap",
          "embroidered huipil simple"
        ]
      },
      "celebration vs. mourning": {
        "locs": [
          "Day of the Dead ofrenda altar",
          "Mazatlan Carnaval street float",
          "Michoacan butterfly forest path",
          "Tlaxcala carnival dance street",
          "Guanajuato alley colored walls"
        ],
        "poses": [
          "both looking at ofrenda altar",
          "carrying ofrenda flowers together",
          "day of the dead face paint both",
          "running through confetti together",
          "both watching firefly butterfly forest"
        ],
        "looks": [
          "dia de muertos dress and printed shirt",
          "day of the dead skull print",
          "carnival costume loosened",
          "folk art embroidered jacket",
          "floral crown dress and linen guayabera"
        ]
      }
    },
    "promptSuffix": "Colour grade: saturated and warm — the palette of painted walls, terracotta, marigold, deep shadow under brilliant sun."
  },
  {
    "id": "usa",
    "name": "THE USA",
    "sub": "American Life & Culture",
    "color": "#3355aa",
    "tensions": [
      "small town vs. big city",
      "east coast vs. west coast",
      "dream vs. reality",
      "road trip vs. roots",
      "diner vs. fine dining",
      "suburb vs. downtown",
      "national park vs. strip mall",
      "college town vs. working town",
      "coast vs. heartland",
      "fast vs. slow America",
      "old money vs. new hustle",
      "neon vs. nature",
      "tailgate vs. gallery opening",
      "porch vs. penthouse",
      "freedom vs. constraint",
      "rust belt vs. sun belt",
      "immigrant dream vs. local tradition",
      "sports bar vs. jazz club",
      "highway vs. main street",
      "flag vs. frontier"
    ],
    "locs": [
      "New York Times Square 5am empty",
      "Route 66 Cadillac Ranch Texas art",
      "Nashville Broadway honky-tonk stage exterior",
      "New Orleans French Quarter Bourbon exterior",
      "Brooklyn rooftop summer Manhattan behind",
      "LA Venice Beach boardwalk morning",
      "San Francisco Lombard Street",
      "Chicago Bean Millennium Park reflection",
      "Miami South Beach art deco morning",
      "Seattle Pike Place Market dawn",
      "Portland Oregon Powell's Books exterior",
      "Austin 6th Street music row",
      "New Orleans Garden District mansion",
      "Savannah mossy square Georgia",
      "Charleston Rainbow Row South Carolina",
      "Annapolis harbour Maryland",
      "Cape Cod beach Massachusetts summer",
      "Maine Portland lobster pier",
      "Vermont fall foliage road General Store",
      "New Hampshire White Mountains",
      "Alaska Denali clear day base",
      "Hawaii Na Pali coast Kauai",
      "Grand Canyon south rim early",
      "Bryce Canyon hoodoos Utah dawn",
      "Zion Narrows Utah hiking",
      "Arches Utah Delicate Arch sunrise",
      "Monument Valley Arizona Navajo",
      "Death Valley salt pan California",
      "Yosemite Valley El Capitan view",
      "Sequoia forest drive-through tree",
      "Pacific Coast Highway Big Sur",
      "Malibu beach LA adjacent",
      "Santa Monica pier evening",
      "Hollywood Sign hillside view",
      "Bourbon Street parade day",
      "Mardi Gras New Orleans crowd",
      "Super Bowl adjacent city street",
      "NBA Finals watch party bar",
      "Fourth of July fireworks open",
      "Thanksgiving parade New York both",
      "Black Friday mall opening queue",
      "American diner any state any time"
    ],
    "poses": [
      "diner booth face to face classic American",
      "road trip car window open arm out both",
      "both arms out at Route 66 sign quintessential",
      "front porch swing side by side summer",
      "baseball park both cheering same direction",
      "both at diner counter on stools",
      "both at drive-through window ordering",
      "both at gas station convenience store",
      "walking across pedestrian crossing both",
      "both at food truck lunchtime queue",
      "both at farmer's market Saturday morning",
      "backyard BBQ both around grill",
      "both at pool party American summer",
      "both at tailgate party before game",
      "high school gym bleachers both",
      "prom night dressed up both American",
      "college campus quad both students",
      "graduation both cap and gown",
      "Fourth of July backyard both",
      "apple pie making kitchen both",
      "rodeo watching both spectating",
      "country fair both rides and games",
      "outdoor amphitheater concert both",
      "stadium both hands up cheering",
      "mall food court both eating varied",
      "drive-in movie front seat both",
      "bowling alley both competitive",
      "mini golf both taking too seriously",
      "ice cream parlour both large portions",
      "beach bonfire coastal both",
      "Times Square midnight New Year both",
      "Las Vegas casino floor both",
      "National Park visitor centre both",
      "Mount Rushmore distance view both",
      "Statue of Liberty ferry both approaching",
      "Empire State observation both",
      "Hollywood Walk of Fame both looking",
      "Santa Monica pier end both"
    ],
    "looks": [
      "baseball cap denim jacket each American classic",
      "flannel shirt worn jeans each American casual",
      "summer dress and tee flip flops each warm South",
      "preppy polo chinos each Northeast",
      "vintage band tee cutoffs each festival US",
      "collegiate sweatshirt chinos each campus",
      "high school letter jacket and jeans each",
      "cheerleader outfit and football jersey each Halloween",
      "Thanksgiving sweater jeans each festive",
      "Fourth of July red white blue casual each",
      "cowboy hat boots jeans each Western",
      "Stetson and boots formal each Texas",
      "Southern Belle dress and linen shirt each",
      "New England smart casual each autumn",
      "Pacific Northwest fleece layers each practical",
      "California casual relaxed each",
      "New York Fashion Week street style each",
      "Brooklyn creative casual each",
      "Miami beach resort each",
      "Hamptons summer smart casual each",
      "Nashville cowboy chic each",
      "New Orleans colourful occasion each",
      "Austin quirky casual each",
      "Portland Oregon pacific northwest each",
      "Seattle tech casual each startup",
      "Silicon Valley casual each",
      "Chicago blue collar casual each",
      "Detroit industrial revival each",
      "New Orleans jazz burial second line each",
      "Mardi Gras costume each creative",
      "Halloween costume each creative American",
      "Thanksgiving comfortable family each"
    ],
    "affinities": {
      "small town vs. big city": {
        "locs": [
          "Iowa cornfield back road",
          "Route 66 desert diner",
          "New York City Times Square dawn",
          "Brooklyn rooftop summer",
          "New York subway platform"
        ],
        "poses": [
          "diner booth face to face",
          "both staring at big sky highway",
          "Times Square look-up together",
          "front porch swing side by side",
          "road trip car window lean"
        ],
        "looks": [
          "flannel shirt worn jeans",
          "baseball cap denim jacket",
          "NYC all-black fitted",
          "NYC streetwear minimal",
          "Midwest hoodie casual jeans"
        ]
      },
      "east coast vs. west coast": {
        "locs": [
          "New York City Times Square dawn",
          "Boston Fenway Park steps",
          "Los Angeles sunset boulevard",
          "San Francisco cable car hill",
          "Pacific Coast Highway pullout"
        ],
        "poses": [
          "Times Square look-up together",
          "both arms out canyon rim",
          "rooftop city view seated",
          "ferry deck wind blown together",
          "both in diner booth sharing pie"
        ],
        "looks": [
          "NYC all-black fitted",
          "New England nautical stripe",
          "LA casual white tee sunglasses",
          "surf town open linen shirt",
          "New York fitted blazer tee"
        ]
      },
      "dream vs. reality": {
        "locs": [
          "Las Vegas strip neon",
          "Los Angeles sunset boulevard",
          "Silicon Valley office park",
          "Detroit auto factory tour",
          "Route 66 desert diner"
        ],
        "poses": [
          "neon sign selfie laughing",
          "one pointing at neon sign",
          "road trip map spread on hood",
          "both arms out Route 66 sign",
          "Times Square look-up together"
        ],
        "looks": [
          "LA casual white tee sunglasses",
          "NYC all-black fitted",
          "vintage band tee cutoffs",
          "rust belt work jacket",
          "road trip worn travel layers"
        ]
      },
      "road trip vs. roots": {
        "locs": [
          "Route 66 desert diner",
          "Pacific Coast Highway pullout",
          "Montana big sky highway",
          "Texas Hill Country back road",
          "Iowa cornfield back road"
        ],
        "poses": [
          "road trip car window lean",
          "both arms out Route 66 sign",
          "road trip map spread on hood",
          "country road hands-out-window drive",
          "pickup truck bed sunset seated"
        ],
        "looks": [
          "flannel shirt worn jeans",
          "baseball cap denim jacket",
          "trucker hat flannel open",
          "road trip worn travel layers",
          "Midwest hoodie casual jeans"
        ]
      },
      "diner vs. fine dining": {
        "locs": [
          "Route 66 desert diner",
          "New York deli counter",
          "Chicago deep dish pizza parlor",
          "Philadelphia cheesesteak stand",
          "Austin food truck park"
        ],
        "poses": [
          "diner booth face to face",
          "both in diner booth sharing pie",
          "diner counter spin stool",
          "one pouring coffee other receives",
          "New York pizza fold share"
        ],
        "looks": [
          "baseball cap denim jacket",
          "flannel shirt worn jeans",
          "diner waitress uniform ironic",
          "NYC all-black fitted",
          "Midwest hoodie casual jeans"
        ]
      },
      "suburb vs. downtown": {
        "locs": [
          "Brooklyn rooftop summer",
          "Chicago Riverwalk evening",
          "Outer Banks beach house porch",
          "Charleston waterfront park",
          "Silicon Valley office park"
        ],
        "poses": [
          "front porch swing side by side",
          "rooftop city view seated",
          "park bench autumn leaves",
          "front porch guitar one plays",
          "both leaning on diner counter"
        ],
        "looks": [
          "preppy polo chinos",
          "Ivy League casual layers",
          "NYC all-black fitted",
          "New England nautical stripe",
          "Chicago sport team jacket"
        ]
      },
      "national park vs. strip mall": {
        "locs": [
          "Grand Canyon south rim",
          "Yellowstone geyser meadow",
          "Smoky Mountains foggy overlook",
          "Alaska glacier viewpoint",
          "Navajo Nation red rock vista"
        ],
        "poses": [
          "both arms out canyon rim",
          "both staring at big sky highway",
          "campfire roast marshmallows together",
          "kayak tandem river paddle",
          "fireworks watch blanket together"
        ],
        "looks": [
          "Pacific Northwest rain jacket jeans",
          "Pacific trail gear casual",
          "ski town fleece vest jeans",
          "mountain west flannel layers",
          "Great Plains wind breaker layers"
        ]
      },
      "college town vs. working town": {
        "locs": [
          "Boston Fenway Park steps",
          "Austin food truck park",
          "Portland farmers market",
          "Detroit auto factory tour",
          "Denver craft brewery"
        ],
        "poses": [
          "baseball park both cheering",
          "craft beer flight toast",
          "farmers market sample together",
          "college football tailgate hug",
          "both arms out Route 66 sign"
        ],
        "looks": [
          "college sweatshirt leggings",
          "Ivy League casual layers",
          "college town casual hoodie",
          "farm town overalls work shirt",
          "rust belt work jacket"
        ]
      },
      "coast vs. heartland": {
        "locs": [
          "Miami South Beach boardwalk",
          "Cape Cod beach boardwalk",
          "Iowa cornfield back road",
          "Montana big sky highway",
          "Mississippi River levee top"
        ],
        "poses": [
          "beach boardwalk slow walk",
          "both staring at big sky highway",
          "pickup truck bed sunset seated",
          "kayak tandem river paddle",
          "country road hands-out-window drive"
        ],
        "looks": [
          "beach casual linen",
          "summer dress and tee flip flops each",
          "flannel shirt worn jeans",
          "Midwest hoodie casual jeans",
          "Great Plains wind breaker layers"
        ]
      },
      "fast vs. slow America": {
        "locs": [
          "New York City Times Square dawn",
          "New York subway platform",
          "Iowa cornfield back road",
          "Appalachian trail shelter",
          "Louisiana bayou dock"
        ],
        "poses": [
          "Times Square look-up together",
          "subway pole lean together",
          "front porch swing side by side",
          "campfire roast marshmallows together",
          "both staring at big sky highway"
        ],
        "looks": [
          "NYC streetwear minimal",
          "NYC all-black fitted",
          "Midwest hoodie casual jeans",
          "flannel shirt worn jeans",
          "road trip worn travel layers"
        ]
      },
      "old money vs. new hustle": {
        "locs": [
          "Boston Fenway Park steps",
          "Charleston waterfront park",
          "Silicon Valley office park",
          "Nashville recording studio",
          "Los Angeles sunset boulevard"
        ],
        "poses": [
          "rooftop city view seated",
          "bourbon bar toast together",
          "craft beer flight toast",
          "one cowboy hat tips to other",
          "both leaning on diner counter"
        ],
        "looks": [
          "Ivy League casual layers",
          "New England nautical stripe",
          "preppy polo chinos",
          "LA casual white tee sunglasses",
          "New York fitted blazer tee"
        ]
      },
      "neon vs. nature": {
        "locs": [
          "Las Vegas strip neon",
          "Nashville Broadway neon",
          "Grand Canyon south rim",
          "Yellowstone geyser meadow",
          "Alaska glacier viewpoint"
        ],
        "poses": [
          "neon sign selfie laughing",
          "one pointing at neon sign",
          "both arms out canyon rim",
          "campfire roast marshmallows together",
          "fireworks watch blanket together"
        ],
        "looks": [
          "NYC all-black fitted",
          "Nashville glam sequin top jeans",
          "Pacific trail gear casual",
          "Pacific Northwest rain jacket jeans",
          "mountain west flannel layers"
        ]
      },
      "tailgate vs. gallery opening": {
        "locs": [
          "Boston Fenway Park steps",
          "Wyoming rodeo arena",
          "Portland Oregon bridge walk",
          "Chicago Riverwalk evening",
          "Austin food truck park"
        ],
        "poses": [
          "baseball park both cheering",
          "tailgate pickup truck seated",
          "college football tailgate hug",
          "craft beer flight toast",
          "live music front row swaying"
        ],
        "looks": [
          "baseball cap denim jacket",
          "Chicago sport team jacket",
          "college sweatshirt leggings",
          "art crowd downtown minimal",
          "New York fitted blazer tee"
        ]
      },
      "porch vs. penthouse": {
        "locs": [
          "Outer Banks beach house porch",
          "Brooklyn rooftop summer",
          "Charleston waterfront park",
          "New York City Times Square dawn",
          "Savannah Spanish moss alley"
        ],
        "poses": [
          "front porch swing side by side",
          "front porch guitar one plays",
          "rooftop city view seated",
          "park bench autumn leaves",
          "fireworks watch blanket together"
        ],
        "looks": [
          "sundress and linen shirt straw hat each",
          "beach casual linen",
          "preppy polo chinos",
          "NYC all-black fitted",
          "New England nautical stripe"
        ]
      },
      "freedom vs. constraint": {
        "locs": [
          "Route 66 desert diner",
          "Montana big sky highway",
          "New Mexico adobe pueblo",
          "Navajo Nation red rock vista",
          "Pacific Coast Highway pullout"
        ],
        "poses": [
          "both arms out Route 66 sign",
          "road trip car window lean",
          "country road hands-out-window drive",
          "both staring at big sky highway",
          "pickup truck bed sunset seated"
        ],
        "looks": [
          "flannel shirt worn jeans",
          "road trip worn travel layers",
          "Midwest hoodie casual jeans",
          "Southwest turquoise jewelry linen",
          "trucker hat flannel open"
        ]
      },
      "rust belt vs. sun belt": {
        "locs": [
          "Detroit auto factory tour",
          "Baltimore Inner Harbor dock",
          "Miami South Beach boardwalk",
          "Austin food truck park",
          "Nashville Broadway neon"
        ],
        "poses": [
          "both leaning on diner counter",
          "subway pole lean together",
          "beach boardwalk slow walk",
          "live music front row swaying",
          "neon sign selfie laughing"
        ],
        "looks": [
          "rust belt work jacket",
          "farm town overalls work shirt",
          "beach casual linen",
          "summer dress and tee flip flops each",
          "Nashville glam sequin top jeans"
        ]
      },
      "immigrant dream vs. local tradition": {
        "locs": [
          "New York deli counter",
          "New York subway platform",
          "New Orleans jazz club street",
          "Mardi Gras parade street",
          "New Mexico adobe pueblo"
        ],
        "poses": [
          "subway pole lean together",
          "jazz club slow sway",
          "tourist photo monument laughing",
          "airport reunion run embrace",
          "tourist photo monument laughing"
        ],
        "looks": [
          "NYC streetwear minimal",
          "New Orleans jazz smart casual",
          "hip hop streetwear casual",
          "Southwest turquoise jewelry linen",
          "road trip worn travel layers"
        ]
      },
      "sports bar vs. jazz club": {
        "locs": [
          "New Orleans jazz club street",
          "Memphis Beale Street evening",
          "Nashville honky-tonk stage",
          "Boston Fenway Park steps",
          "Denver craft brewery"
        ],
        "poses": [
          "jazz club slow sway",
          "live music front row swaying",
          "baseball park both cheering",
          "bourbon bar toast together",
          "one puts jukebox coin in"
        ],
        "looks": [
          "jazz fan smart casual",
          "New Orleans jazz smart casual",
          "Chicago sport team jacket",
          "baseball cap denim jacket",
          "bourbon country flannel dark jeans"
        ]
      },
      "highway vs. main street": {
        "locs": [
          "Route 66 desert diner",
          "Montana big sky highway",
          "Savannah Spanish moss alley",
          "Charleston waterfront park",
          "Twin Cities winter lake"
        ],
        "poses": [
          "road trip car window lean",
          "both arms out Route 66 sign",
          "street art mural wall pose",
          "night market wander together",
          "park bench autumn leaves"
        ],
        "looks": [
          "road trip worn travel layers",
          "flannel shirt worn jeans",
          "sundress and linen shirt straw hat each",
          "preppy polo chinos",
          "Midwest hoodie casual jeans"
        ]
      },
      "flag vs. frontier": {
        "locs": [
          "Wyoming rodeo arena",
          "Montana big sky highway",
          "Alaska glacier viewpoint",
          "Navajo Nation red rock vista",
          "Twin Cities winter lake"
        ],
        "poses": [
          "both staring at big sky highway",
          "campfire roast marshmallows together",
          "one cowboy hat tips to other",
          "kayak tandem river paddle",
          "rodeo chute gate pose both"
        ],
        "looks": [
          "Texan boots button-down",
          "denim dress and flannel shirt country boots",
          "mountain west flannel layers",
          "Southwest turquoise jewelry linen",
          "Great Plains wind breaker layers"
        ]
      }
    },
    "promptSuffix": "Colour grade: American vernacular — the particular flatness of strip-lit diners, the blue-white of parking lots, the warm amber of the golden hour on open highway."
  },
  {
    "id": "canada",
    "name": "THE CANADA",
    "sub": "Ice Roads, Northern Light & Vast Silence",
    "color": "#2a5c8a",
    "tensions": [
      "vastness vs. intimacy",
      "isolation vs. connection",
      "wilderness vs. civilisation",
      "ice vs. warmth",
      "the north vs. the south",
      "staying vs. leaving",
      "French vs. English",
      "the land vs. the city",
      "winter vs. the idea of summer",
      "silence vs. the sound of distance"
    ],
    "affinities": {
      "vastness vs. intimacy": {
        "locs": [
          "northern lights aurora borealis vast dark sky",
          "ice road frozen lake truck headlights night",
          "Quebec City Old Town winter snow lanterns"
        ],
        "poses": [
          "both tiny under northern lights vast sky",
          "both on ice road truck headlights behind vast"
        ],
        "looks": [
          "heavy winter parka fur hood each northern",
          "Quebecois winter layers wool each"
        ]
      }
    },
    "locs": [
      "northern lights aurora borealis vast dark sky lake",
      "ice road frozen lake truck headlights vast night",
      "Quebec City Old Town winter snow lanterns cobblestone",
      "Niagara Falls frozen winter mist",
      "Pacific coast British Columbia old growth forest fog",
      "Prairie flat horizon grain elevator sky vast",
      "Cape Breton coastal cliff Atlantic fog",
      "Banff frozen lake mountain reflection winter",
      "Toronto winter street snow CN Tower behind",
      "Churchill Manitoba polar bear tundra twilight",
      "Yukon wilderness log cabin smoke rising winter",
      "Montreal alley winter snow graffiti",
      "Vancouver harbour night mountains snow behind",
      "Newfoundland outport fishing village fog",
      "Arctic tundra vast flat horizon midnight sun",
      "Whistler ski run empty dawn fresh snow",
      "Lake Louise turquoise impossible colour summer",
      "Canadian Rockies glacier valley vast",
      "Algonquin Park autumn reflection lake",
      "Iqaluit Arctic settlement winter dark noon"
    ],
    "poses": [
      "both tiny under vast northern lights dark sky",
      "both on frozen lake vast white horizon",
      "both in blizzard barely visible each other",
      "both watching aurora borealis faces lit green",
      "both on ice road looking ahead vast",
      "both in Quebec winter street snow steam breath",
      "both emerging from forest edge vast behind",
      "both on coastal cliff fog Atlantic",
      "both in prairie vast horizon all around",
      "both at lake edge mountain reflection winter"
    ],
    "looks": [
      "heavy winter parka fur hood northern each",
      "Quebecois winter layers wool toque each",
      "Pacific coast outdoor technical each rain",
      "Prairie casual worn practical each",
      "Maritime fisherman waterproof each coastal",
      "Arctic expedition gear each serious",
      "Canadian winter smart casual each urban",
      "Hockey jersey and jeans each Canadian casual",
      "Flannel and work boots each Canadian practical",
      "Ski gear mountain each colourful"
    ],
    "promptSuffix": "Colour grade: aurora green, ice blue, Pacific grey, Quebec stone, prairie gold. Vast and cold."
  },
  {
    "id": "caribbean",
    "name": "THE CARIBBEAN",
    "sub": "Havana, Kingston & the Blue Between",
    "color": "#0a7a5c",
    "tensions": [
      "paradise vs. reality",
      "colonial vs. free",
      "past vs. present",
      "the tourist vs. the local",
      "heat vs. cool sea",
      "music vs. silence",
      "stay vs. leave",
      "the island vs. the world outside",
      "colour vs. decay",
      "joy vs. history"
    ],
    "affinities": {
      "paradise vs. reality": {
        "locs": [
          "Havana crumbling colonial street 1950s cars midday",
          "Kingston dancehall night neon Jamaica",
          "Trinidad carnival street costume night"
        ],
        "poses": [
          "both Havana street midday 1950s car behind",
          "both Kingston dancehall night neon"
        ],
        "looks": [
          "Havana 1950s dress and guayabera each vintage",
          "Kingston dancehall costume each vibrant"
        ]
      }
    },
    "locs": [
      "Havana crumbling colonial street 1950s Chevrolet midday",
      "Kingston dancehall night neon Jamaica",
      "Trinidad carnival mas costume street night",
      "Barbados chattel house painted bright afternoon",
      "San Juan Old City colonial walls sunset Puerto Rico",
      "Martinique rum distillery afternoon French colonial",
      "Cuba tobacco farm interior morning light",
      "Havana rooftop sunset Malecón below",
      "Jamaica Blue Mountains coffee farm morning mist",
      "Trinidad Savannah carnival stage night",
      "Dominican Republic baseball field afternoon dust",
      "Haiti Port-au-Prince street market colour",
      "Grenada nutmeg plantation afternoon",
      "Antigua English Harbour colonial dockyard",
      "St Lucia Piton volcanic peak mist morning",
      "Curaçao Willemstad colonial coloured buildings",
      "Tobago rainforest waterfall morning",
      "Barbados rum shop interior afternoon",
      "Cayman Islands turtle farm",
      "Jamaica country road sugarcane afternoon"
    ],
    "poses": [
      "both Havana street midday vintage car behind",
      "both Kingston dancehall night neon movement",
      "both Trinidad carnival costume night street",
      "both on Malecón Havana sunset sea behind",
      "both in rum shop afternoon Jamaica",
      "both watching carnival pass street Trinidad",
      "both on colonial rooftop sunset Havana",
      "both in sugarcane field Jamaica afternoon",
      "both old San Juan colonial gate sunset",
      "both watching Caribbean sea from cliff afternoon"
    ],
    "looks": [
      "Havana 1950s dress and guayabera each vintage",
      "Kingston dancehall costume each vibrant night",
      "Trinidad carnival elaborate costume each",
      "Caribbean summer cotton simple each",
      "Havana musician white shirt each",
      "Colombian coastal dress each vibrant",
      "Caribbean practical fishing each",
      "Plantation worker historical cotton each",
      "Creole dress colonial French Caribbean each",
      "Caribbean casual colourful cotton each"
    ],
    "promptSuffix": "Colour grade: Havana ochre and decay, Kingston neon night, Trinidad carnival saturated, impossible Caribbean blue."
  },
  {
    "id": "wedding",
    "name": "THE WEDDING",
    "sub": "The Vow, the Risk & the Moment Before",
    "color": "#a0785a",
    "tensions": [
      "the elopement vs. the ceremony",
      "the wrong person vs. the right moment",
      "the vow vs. the doubt",
      "together vs. everyone watching",
      "the dress vs. the marriage",
      "love vs. obligation",
      "the moment before vs. the moment after",
      "the arranged vs. the chosen",
      "the second wedding vs. the first",
      "the almost vs. the finally"
    ],
    "affinities": {
      "the elopement vs. the ceremony": {
        "locs": [
          "city hall steps elopement simple morning",
          "Las Vegas wedding chapel neon night kitsch",
          "cliffside elopement just two sunset witness"
        ],
        "poses": [
          "both city hall steps just married simple morning",
          "both Las Vegas neon chapel night kitsch"
        ],
        "looks": [
          "simple civil ceremony dress and suit each understated",
          "Las Vegas wedding kitsch each deliberate"
        ]
      }
    },
    "locs": [
      "city hall steps elopement simple morning",
      "Las Vegas wedding chapel neon night kitsch",
      "cliffside elopement two and officiant sunset",
      "church aisle traditional formal procession",
      "marquee reception evening dancing",
      "courthouse simple just the two civil",
      "beach barefoot ceremony sunset",
      "greenhouse botanical wedding ceremony",
      "destination wedding Italy villa afternoon",
      "reception empty after guests gone one couple",
      "Jewish wedding chuppah traditional formal",
      "Indian wedding mandap ceremony elaborate",
      "Mexican civil wedding vibrant tradition",
      "Scottish highland estate ceremony dramatic",
      "Paris bridge elopement spontaneous rain",
      "registry office morning queue practical",
      "chapel of ease rural small ceremony",
      "stately home grand formal traditional",
      "outdoor festival wedding summer",
      "hotel suite morning after complicated light"
    ],
    "poses": [
      "both city hall just married simple morning laughing",
      "both Las Vegas neon chapel kitsch deliberately",
      "both cliffside elopement just them sunset",
      "both church aisle walking formal traditional",
      "both first dance reception floor",
      "both escaped reception quiet moment outside",
      "both vow exchange face to face formal",
      "both just before ceremony backstage nervous",
      "both morning after hotel light complicated",
      "both running from venue raining laughing"
    ],
    "looks": [
      "simple civil dress and suit each understated elopement",
      "Las Vegas kitsch bridal each deliberate camp",
      "traditional white and formal each classic",
      "Indian bridal elaborate lehenga and sherwani each",
      "Jewish wedding traditional formal each",
      "destination wedding relaxed linen each",
      "barefoot beach simple cotton each",
      "Scottish highland formal each tartan",
      "Mexican wedding vibrant traditional each",
      "morning after dishevelled formal each complicated"
    ],
    "promptSuffix": "Colour grade: city hall morning light, Las Vegas neon night, cliffside golden hour, church formal candlelight."
  },
  {
    "id": "jungle",
    "name": "THE JUNGLE",
    "sub": "Tropics & Deep Wilderness",
    "color": "#3a8a4a",
    "tensions": [
      "canopy vs. floor",
      "predator vs. prey",
      "ancient vs. alive",
      "light vs. undergrowth",
      "track vs. trailless",
      "wet vs. dry",
      "loud vs. silent jungle",
      "known vs. uncharted",
      "ruin vs. root",
      "small vs. vast canopy",
      "breathe vs. sweat",
      "found vs. consumed",
      "species vs. human",
      "river vs. ridge",
      "dawn vs. midday heat",
      "tamed vs. feral",
      "temple vs. tree",
      "map vs. moss",
      "creature vs. stillness",
      "enter vs. return"
    ],
    "locs": [
      "Borneo rainforest canopy walkway",
      "Amazon river camp at dawn",
      "Costa Rica cloud forest mist",
      "Cambodia temple overgrown vines",
      "Papua New Guinea highland trail",
      "Daintree rainforest Queensland",
      "Congo basin clearing giant trees",
      "Sumatra jungle river crossing",
      "Thailand hill tribe forest edge",
      "Vietnam karst limestone jungle",
      "Ecuador Amazon tributary camp",
      "Peru cloud forest epiphyte trees",
      "Belize cenote jungle clearing",
      "Guatemala Tikal temple above canopy",
      "Mexico Yucatan jungle ruin",
      "Sri Lanka jungle leopard territory",
      "India Corbett forest trail edge",
      "Kenya jungle border savannah",
      "Rwanda gorilla trekking forest",
      "Uganda Bwindi forest trail",
      "Pantanal waterway jungle edge Brazil",
      "Orinoco delta mangrove channel",
      "Mekong river bank jungle Cambodia",
      "Irrawaddy river jungle bank Myanmar",
      "Salween river jungle edge",
      "Kinabalu rainforest lower slope",
      "Sabah jungle river crossing",
      "Sarawak longhouse river arrival",
      "Sulawesi jungle crater lake",
      "Flores jungle volcanic forest",
      "Philippines Palawan jungle cove",
      "Mindanao highland forest trail",
      "Luzon rice terrace edge forest",
      "Hawaii fern gully waterfall",
      "Maui bamboo forest path",
      "Kauai Na Pali coast jungle",
      "Puerto Rico El Yunque cloud forest",
      "Jamaica Blue Mountain forest",
      "Trinidad Northern Range forest",
      "Trinidad Caroni swamp dawn",
      "Grenada Grand Etang crater forest",
      "Dominica rainforest river gorge",
      "St Lucia banana plantation edge",
      "Martinique Pelée lower forest",
      "Guadeloupe volcanic forest",
      "Madagascar rainforest lemur clearing",
      "Comoros forest ancient tree",
      "Reunion Cirque de Cilaos",
      "Seychelles Vallée de Mai palm",
      "Mauritius Black River Gorges"
    ],
    "poses": [
      "both looking up through canopy arms shielding sun",
      "one machete-clearing path other follows close",
      "crouching at jungle floor examining tracks",
      "both waist-deep in slow jungle river wading",
      "one spotting animal other raises binoculars",
      "crossing rope bridge single file both careful",
      "one steadying other on slippery log bridge",
      "both frozen watching unseen animal",
      "scanning canopy both necks craned",
      "one helping other out of mud sucking",
      "both crouched at jungle pool drinking carefully",
      "running from sudden downpour laughing",
      "both hands on same vine steadying",
      "one pointing at butterfly other watches",
      "photographing orchid together both crouched",
      "one lifting other to reach canopy fruit",
      "both pressing against tree trunk hiding",
      "one navigating phone and compass other scans",
      "resting against tree root buttress both",
      "drinking from filtered water both leaning",
      "both examining giant spider neither moving",
      "one first-aiding other's leech bite",
      "both looking over jungle river for crossing",
      "one lowering other down steep jungle bank",
      "both silhouette at forest edge light behind",
      "standing in shaft of light through canopy",
      "both covered in mud boots deep laughing",
      "one carrying other's pack exhausted other",
      "listening at dawn bird calls both still",
      "both lying in hammock side by side jungle",
      "crossing shallow jungle stream rocks each",
      "one removing spider web from other laughing",
      "back-to-back jungle birds landing near",
      "both crouched at army ant column watching",
      "one holding back branch for other to pass",
      "both at camp fire jungle darkness around",
      "one finding way through tangle other watches",
      "both squinting at GPS deep jungle",
      "sitting on giant root buttress both resting",
      "one applying insect repellent to other's neck",
      "both drenched in sweat and rain jungle run",
      "one catching other's arm for balance",
      "both wide-eyed at bioluminescent fungi",
      "scanning river for caiman both very still",
      "one behind other slow-walk in grass tall",
      "both drinking coconut at jungle camp"
    ],
    "looks": [
      "lightweight khaki long-sleeve shirt and pants both insect-shield",
      "moisture-wicking jungle shirt shorts both rolled",
      "technical outdoor pants long-sleeve sun protection top each",
      "jungle guide worn cotton layers each practical",
      "expedition base layer open-vented shirt and pants each",
      "light nylon pants moisture-wicking tee each",
      "insect-proof long sleeve and long pants both tucked in boots",
      "merino base layer jungle pants each",
      "earth tone field shirt hiking trousers each",
      "sun protection hooded shirt trail pants each",
      "lightweight ripstop shirt pants both packable",
      "canvas expedition shirt worn trousers each",
      "rain poncho over trail clothes both soaked",
      "wicking tee trail shorts boots and gaiters each",
      "long-sleeve technical shirt and pants both mud-streaked",
      "sun-faded khaki shirt and shorts each",
      "field shirt many pockets and pants each expedition",
      "quick-dry shorts and sun shirt both drenched",
      "jungle green long-sleeve and pants both camouflage",
      "worn cotton shirt trail pants boots each",
      "lightweight fleece over moisture-wicking tee for cool morning",
      "vented sun hat field shirt trail pants each",
      "waterproof trail shoes long pants rolled tee each",
      "neck gaiter sun shirt trail pants each practical",
      "field vest over tee trail pants each pocketed",
      "tan worn linen shirt jungle pants both",
      "biodegradable cotton shirt trail shorts each light",
      "technical polo trail pants each smart casual",
      "amphibious shorts and sun shirt both wade-ready",
      "short-sleeve field shirt trail shorts above-knee both",
      "jungle boot over long sock pants tucked each protection",
      "earth-tone cotton layers worn travel each",
      "mesh trail shoe long sock pants tucked each",
      "canvas shirt worn khaki shorts boots each",
      "UPF-rated shirt long trail pants hat each",
      "woven fabric shirt traditional pattern trail pants each",
      "open button field shirt tee beneath trail pants each",
      "lightweight down-proof trail pants tee each",
      "humidity-wicking shirt and pants both breathable",
      "sun protection arm sleeves shirt trail pants each",
      "thin wool long-sleeve trail pants both temperature-neutral",
      "worn expedition cotton layers aged and practical each",
      "river-crossing sandals shorts and dry shirt each",
      "wet-dry quick shorts water shirt both",
      "trail running shoes shorts moisture-wicking tee each",
      "safari-style shirt pants boots both",
      "traditional handwoven shirt trail pants each cultural",
      "camp shirt worn cotton trail pants both"
    ],
    "affinities": {
      "canopy vs. floor": {
        "locs": [
          "Borneo rainforest canopy walk",
          "Daintree rainforest floor",
          "Malaysian tree canopy hide",
          "Borneo night jungle torch walk",
          "Sumatra orangutan forest path"
        ],
        "poses": [
          "both looking up through canopy",
          "both flat on ground looking up",
          "both arms wide canopy platform",
          "one pointing at canopy creature",
          "one swinging one watching below"
        ],
        "looks": [
          "lightweight khaki trail layers",
          "birdwatcher muted cotton layers",
          "primatologist field layers",
          "expedition base layer open",
          "foliage-merged muted tones"
        ]
      },
      "predator vs. prey": {
        "locs": [
          "Rwanda gorilla forest track",
          "Uganda jungle canopy lodge",
          "Sri Lanka leopard forest path",
          "Gabon forest elephant crossing",
          "New Guinea bird of paradise forest"
        ],
        "poses": [
          "both frozen listening to jungle sound",
          "one spotting animal other binoculars",
          "both scanning river bank quiet",
          "both back to tree trunk listening",
          "snake encounter both frozen"
        ],
        "looks": [
          "primatologist field layers",
          "conservation worker khaki",
          "birdwatcher muted cotton layers",
          "foliage-merged muted tones",
          "field research cotton open"
        ]
      },
      "ancient vs. alive": {
        "locs": [
          "Cambodian temple overgrown vines",
          "Guatemala Tikal pyramid jungle",
          "Honduras Copan jungle ruin",
          "Vietnam Phong Nha cave mouth",
          "Peru Machu Picchu cloud forest"
        ],
        "poses": [
          "both crouching at ancient carving",
          "temple ruin step both looking out",
          "temple doorway silhouette both",
          "both at base of ancient tree",
          "tree root arch both standing"
        ],
        "looks": [
          "temple explorer worn linen",
          "ancient temple explorer linen",
          "anthropologist field clothes",
          "field research cotton open",
          "jungle guide worn cotton"
        ]
      },
      "light vs. undergrowth": {
        "locs": [
          "Costa Rican cloud forest mist",
          "Ecuador cloud forest bridge",
          "Malaysian jungle waterfall pool",
          "Fiji highland jungle waterfall",
          "Papua highlands morning fog"
        ],
        "poses": [
          "both standing in mist clearing",
          "dawn light both eyes closed in mist",
          "dawn birdwatch both still",
          "both looking up through canopy",
          "torch walk single file night"
        ],
        "looks": [
          "morning mist layered warm",
          "rainforest poncho minimal",
          "jungle sunrise layers warm",
          "dawn watch layered warm",
          "highland fog warm layers"
        ]
      },
      "track vs. trailless": {
        "locs": [
          "Papua New Guinea highland trail",
          "Congo basin river crossing",
          "Bolivia Amazon basin camp",
          "Nicaragua cloud forest peak",
          "Panama jungle canal cut"
        ],
        "poses": [
          "one machete clearing other follows",
          "one guiding other over root tangle",
          "reading map together in rain",
          "one pointing river route map",
          "both back to tree trunk listening"
        ],
        "looks": [
          "machete belt worn field shirt",
          "expedition base layer open",
          "technical outdoor pants rolled",
          "waterproof trail set open",
          "jungle guide worn cotton"
        ]
      },
      "wet vs. dry": {
        "locs": [
          "Malaysian jungle waterfall pool",
          "Belize jungle cenote swim",
          "Amazon anaconda river shore",
          "Brazilian Pantanal river platform",
          "Borneo proboscis river boat"
        ],
        "poses": [
          "waterfall base both soaked laughing",
          "waist-deep river crossing together",
          "river swim both splashing",
          "both wading through swamp",
          "jungle rain both accepting it"
        ],
        "looks": [
          "river-soaked cotton essentials",
          "waterfall-soaked casual minimal",
          "tropical light cotton layers",
          "moisture-wicking jungle shirt shorts",
          "river crossing trail gear"
        ]
      },
      "loud vs. silent jungle": {
        "locs": [
          "Daintree rainforest floor",
          "Papua highlands morning fog",
          "Costa Rican cloud forest mist",
          "Amazon river camp dawn",
          "Ecuador cloud forest bridge"
        ],
        "poses": [
          "both frozen listening to jungle sound",
          "dawn birdwatch both still",
          "both back to tree trunk listening",
          "dawn light both eyes closed in mist",
          "both standing in mist clearing"
        ],
        "looks": [
          "birdwatcher muted cotton layers",
          "morning mist layered warm",
          "foliage-merged muted tones",
          "dawn watch layered warm",
          "night walk dark minimal layers"
        ]
      },
      "known vs. uncharted": {
        "locs": [
          "Colombian Amazon research camp",
          "Bolivia Amazon basin camp",
          "Papua New Guinea highland trail",
          "Congo basin river crossing",
          "Orinoco delta water channel"
        ],
        "poses": [
          "reading map together in rain",
          "one pointing river route map",
          "one machete clearing other follows",
          "both scanning river bank quiet",
          "one translating sign language bird"
        ],
        "looks": [
          "expedition base layer open",
          "field research cotton open",
          "bio-survey worn layers",
          "jungle medic field kit",
          "photojournalist vest field shirt"
        ]
      },
      "ruin vs. root": {
        "locs": [
          "Cambodian temple overgrown vines",
          "Guatemala Tikal pyramid jungle",
          "Honduras Copan jungle ruin",
          "Peru Machu Picchu cloud forest",
          "Cambodia Cardamom forest trail"
        ],
        "poses": [
          "both crouching at ancient carving",
          "temple ruin step both looking out",
          "tree root arch both standing",
          "both at base of ancient tree",
          "temple doorway silhouette both"
        ],
        "looks": [
          "ancient temple explorer linen",
          "temple explorer worn linen",
          "anthropologist field clothes",
          "field research cotton open",
          "jungle guide worn cotton"
        ]
      },
      "small vs. vast canopy": {
        "locs": [
          "Borneo rainforest canopy walk",
          "Daintree rainforest floor",
          "Malaysian tree canopy hide",
          "Borneo night jungle torch walk",
          "Amazon river camp dawn"
        ],
        "poses": [
          "both arms wide canopy platform",
          "both looking up through canopy",
          "both flat on ground looking up",
          "one swinging one watching below",
          "dusk lookout jungle platform both"
        ],
        "looks": [
          "expedition base layer open",
          "lightweight khaki trail layers",
          "primatologist field layers",
          "birdwatcher muted cotton layers",
          "foliage-merged muted tones"
        ]
      },
      "breathe vs. sweat": {
        "locs": [
          "Costa Rican cloud forest mist",
          "Fiji highland jungle waterfall",
          "Malaysian jungle waterfall pool",
          "Papua highlands morning fog",
          "Ecuador Galapagos jungle path"
        ],
        "poses": [
          "waterfall base both soaked laughing",
          "dawn light both eyes closed in mist",
          "both standing in mist clearing",
          "jungle rain both accepting it",
          "butterfly swarm both arms out"
        ],
        "looks": [
          "moisture-wicking jungle shirt shorts",
          "tropical light cotton layers",
          "trail layers heat-light",
          "rainforest poncho minimal",
          "tropical linen minimal layers"
        ]
      },
      "found vs. consumed": {
        "locs": [
          "Amazon anaconda river shore",
          "Congo basin river crossing",
          "Sumatra orangutan forest path",
          "Gabon forest elephant crossing",
          "Amazon floating village dock"
        ],
        "poses": [
          "snake encounter both frozen",
          "both frozen listening to jungle sound",
          "one catching other on wet rock",
          "one pulling other up steep bank",
          "both wading through swamp"
        ],
        "looks": [
          "jungle guide worn cotton",
          "river crossing trail gear",
          "machete belt worn field shirt",
          "expedition base layer open",
          "trail layers heat-light"
        ]
      },
      "species vs. human": {
        "locs": [
          "Rwanda gorilla forest track",
          "Andaman islands jungle beach",
          "Sri Lanka leopard forest path",
          "New Guinea bird of paradise forest",
          "Solomon Islands mangrove channel"
        ],
        "poses": [
          "one spotting animal other binoculars",
          "both frozen listening to jungle sound",
          "orchid find both crouching",
          "butterfly swarm both arms out",
          "one translating sign language bird"
        ],
        "looks": [
          "conservation worker khaki",
          "primatologist field layers",
          "birdwatcher muted cotton layers",
          "conservation vest field shirt",
          "field research cotton open"
        ]
      },
      "river vs. ridge": {
        "locs": [
          "Amazon river camp dawn",
          "Peru Madre de Dios river bend",
          "Laos Nam Ou river jungle bank",
          "Vietnam Mekong delta channel",
          "Borneo proboscis river boat"
        ],
        "poses": [
          "canoe paddle tandem river",
          "waist-deep river crossing together",
          "river swim both splashing",
          "one carrying other across river",
          "both watching river from bank"
        ],
        "looks": [
          "river guide cotton layers",
          "river crossing trail gear",
          "moisture-wicking jungle shirt shorts",
          "tropical linen minimal layers",
          "camp shorts trail vest"
        ]
      },
      "dawn vs. midday heat": {
        "locs": [
          "Amazon river camp dawn",
          "Papua highlands morning fog",
          "Costa Rican cloud forest mist",
          "Borneo rainforest canopy walk",
          "Brazilian Atlantic forest clearing"
        ],
        "poses": [
          "dawn birdwatch both still",
          "dawn light both eyes closed in mist",
          "jungle rain both accepting it",
          "both at fire jungle camp",
          "hammock jungle camp side by side"
        ],
        "looks": [
          "jungle sunrise layers warm",
          "dawn watch layered warm",
          "morning mist layered warm",
          "camp shorts trail vest",
          "eco-camp cotton relaxed"
        ]
      },
      "tamed vs. feral": {
        "locs": [
          "Thai elephant sanctuary forest",
          "Costa Rica zip line platform",
          "Belize jungle cenote swim",
          "Ecuador Galapagos jungle path",
          "Vanuatu jungle village path"
        ],
        "poses": [
          "one swinging one watching below",
          "hanging from jungle vine together",
          "both arms wide canopy platform",
          "rope bridge crossing one steadying",
          "waterfall base both soaked laughing"
        ],
        "looks": [
          "tropical light cotton layers",
          "hammock camp minimal layers",
          "trail layers heat-light",
          "jungle guide worn cotton",
          "tropical linen minimal layers"
        ]
      },
      "temple vs. tree": {
        "locs": [
          "Cambodian temple overgrown vines",
          "Guatemala Tikal pyramid jungle",
          "Honduras Copan jungle ruin",
          "Vietnam Phong Nha cave mouth",
          "Peru Machu Picchu cloud forest"
        ],
        "poses": [
          "temple ruin step both looking out",
          "temple doorway silhouette both",
          "both at base of ancient tree",
          "tree root arch both standing",
          "both crouching at ancient carving"
        ],
        "looks": [
          "temple explorer worn linen",
          "ancient temple explorer linen",
          "anthropologist field clothes",
          "indigenous inspired wrap minimal",
          "field research cotton open"
        ]
      },
      "map vs. moss": {
        "locs": [
          "Papua New Guinea highland trail",
          "Congo basin river crossing",
          "Bolivia Amazon basin camp",
          "Nicaragua cloud forest peak",
          "Colombian Amazon research camp"
        ],
        "poses": [
          "reading map together in rain",
          "one pointing river route map",
          "one machete clearing other follows",
          "one guiding other over root tangle",
          "both crouching at ancient carving"
        ],
        "looks": [
          "expedition base layer open",
          "field research cotton open",
          "bio-survey worn layers",
          "machete belt worn field shirt",
          "technical outdoor pants rolled"
        ]
      },
      "creature vs. stillness": {
        "locs": [
          "Malaysian tree canopy hide",
          "Borneo night jungle torch walk",
          "Uganda jungle canopy lodge",
          "Sri Lanka leopard forest path",
          "New Guinea bird of paradise forest"
        ],
        "poses": [
          "both frozen listening to jungle sound",
          "dawn birdwatch both still",
          "one spotting animal other binoculars",
          "both back to tree trunk listening",
          "snake encounter both frozen"
        ],
        "looks": [
          "birdwatcher muted cotton layers",
          "foliage-merged muted tones",
          "night walk dark minimal layers",
          "night trail dark layers minimal",
          "primatologist field layers"
        ]
      },
      "enter vs. return": {
        "locs": [
          "Amazon river camp dawn",
          "Borneo rainforest canopy walk",
          "Congo basin river crossing",
          "Costa Rican cloud forest mist",
          "Papua New Guinea highland trail"
        ],
        "poses": [
          "torch walk single file night",
          "one machete clearing other follows",
          "two at jungle camp fire talking",
          "hammock jungle camp side by side",
          "both at fire jungle camp"
        ],
        "looks": [
          "expedition base layer open",
          "jungle guide worn cotton",
          "camp shorts trail vest",
          "eco-camp cotton relaxed",
          "hammock camp minimal layers"
        ]
      }
    },
    "promptSuffix": "Colour grade: deep, saturated greens with shafts of filtered light. The jungle should feel dense and enveloping — not a backdrop but a presence. Humidity, dappled light through canopy, the subjects dwarfed by vegetation."
  },
  {
    "id": "runway",
    "name": "THE RUNWAY",
    "sub": "Fashion & Editorial",
    "color": "#cc44aa",
    "tensions": [
      "clothes vs. body",
      "editorial vs. commercial",
      "trend vs. timeless",
      "dressed vs. undone",
      "camera vs. mirror",
      "season vs. off-season",
      "designer vs. street",
      "front row vs. backstage",
      "beauty vs. bizarre",
      "high fashion vs. wearable",
      "styled vs. raw",
      "model vs. character",
      "motion vs. pose",
      "haute couture vs. ready-to-wear",
      "collection vs. single look",
      "luxury vs. accessible",
      "theatrical vs. minimal",
      "body vs. silhouette",
      "brand vs. person",
      "moment vs. campaign"
    ],
    "locs": [
      "Paris fashion week backstage Palais Royal",
      "empty runway post-show dust settling",
      "Milan Brera showroom white space",
      "studio white cyc wall full-length",
      "New York garment district loft",
      "London Somerset House courtyard show",
      "Copenhagen show space industrial",
      "Berlin show space former power plant",
      "Lagos Lagos Fashion Week backstage",
      "Seoul DDP show exterior",
      "Tokyo Rainbow Bridge show exterior",
      "Shanghai former factory show space",
      "Palais de Tokyo Paris show",
      "Grand Palais Paris interior nave",
      "Louvre Cour Carrée show Paris",
      "Champs-Elysées midnight show",
      "Eiffel Tower platform show Paris",
      "Versailles garden show Paris",
      "Uffizi Piazzale Michelangelo show Florence",
      "Colosseum exterior show Rome",
      "Guggenheim rotunda show New York",
      "Whitney Biennial adjacent show",
      "MoMA garden show New York",
      "Brooklyn Navy Yard show space",
      "Hudson Yards public show New York",
      "Met Stairs show New York",
      "Tate Modern Bankside show London",
      "V&A Cromwell Road steps London",
      "Natural History Museum London show",
      "BFI Southbank show London",
      "Barbican Centre show London",
      "Roundhouse show London",
      "BAFTA 195 Piccadilly show London",
      "Selfridges rooftop show London",
      "Fashion East venue London",
      "Goldsmiths show London",
      "Central Saint Martins BA show",
      "RCA show London",
      "LCF MA show London",
      "Birmingham Custard Factory show",
      "Manchester Victoria Warehouse show",
      "Glasgow SWG3 show",
      "Edinburgh Dovecot Studios show",
      "Dublin National Museum show",
      "Lisbon LX Factory show",
      "Barcelona Palo Alto show"
    ],
    "poses": [
      "editorial stride catwalk both in motion",
      "both holding same garment examining texture",
      "one dressing other from behind final touch",
      "mirrored pose symmetrical fashion editorial",
      "over-the-shoulder both looking back",
      "back-to-back garment architecture visible",
      "face-to-face garment detail between",
      "one stepping into outfit other assists",
      "both mid-look confident ahead",
      "behind-the-scenes genuinely moment both",
      "one pinning other's hem both still",
      "both looking at monitor checking footage",
      "over-styled shoot both absurdist fashion",
      "both holding hands runway end pause",
      "one fan both cooling down studio hot",
      "close-up focus detail one holds other examines",
      "both standing before window white light",
      "garment movement test both walking",
      "one reaching back gesture other fills gap",
      "both in tableau final look",
      "both facing away from camera garment back",
      "character back story both in role",
      "both reading notes from stylist absorbed",
      "one stepping over puddle other watches",
      "back to back garment layers building",
      "editorial stare both one direction",
      "both moving through translucent material curtain",
      "one behind fabric other in front",
      "both emerging from hanging garment rail",
      "sitting runway edge both feet hanging",
      "one holding garment mid-air other walks through",
      "both caught mid-laughter brief genuine",
      "standing at end of runway sea of empty chairs both",
      "both facing panel of judges unseen",
      "both in movement different speeds",
      "walking in opposite directions passing",
      "one fitting toile on other both focused",
      "both in identical looks slight difference",
      "back-to-back garments responding to each",
      "both looking at collection on rail together"
    ],
    "looks": [
      "avant-garde structured editorial both",
      "minimalist white on white both",
      "all-black high fashion both",
      "couture gown and sharp street suit each",
      "deconstructed suit editorial both",
      "oversized architectural silhouette both",
      "sculptural fashion both three-dimensional",
      "sheer and opaque combination both",
      "monochrome statement colour both",
      "volume and constraint contrast each",
      "raw edge finish both intentional",
      "repurposed luxury material both",
      "craft-focused hand-sewn visible both",
      "tech fabric both innovative",
      "bio-material both future fashion",
      "sustainable luxury both",
      "pattern-cutting focus both geometric",
      "draped without cutting both",
      "knit innovation both performance",
      "leather alternative both ethical",
      "digital print on analogue silhouette both",
      "vintage couture reference updated both",
      "streetwear elevated both",
      "sportswear couture crossover both",
      "uniform as fashion both subverted",
      "workwear as fashion both elevated",
      "costume as fashion both dramatic",
      "protective wear as fashion both",
      "gender-fluid silhouette both",
      "size-inclusive design both",
      "adaptive design both functional",
      "colour theory outfit both",
      "textile exploration outfit both",
      "embellishment study outfit both",
      "deconstruction study outfit both",
      "reconstruction study outfit both",
      "sampling archive both editorial",
      "one-of-one garments both",
      "concept-led both explain if asked",
      "capsule wardrobe perfected both",
      "collaboration garment both dual-credited",
      "performance wear fashion both",
      "archive reference both period-drawn",
      "contemporary classic both enduring"
    ],
    "affinities": {
      "clothes vs. body": {
        "locs": [
          "studio white cyc wall",
          "designer atelier fitting room",
          "fashion studio skylight top",
          "magazine editorial studio set",
          "backstage costume rail corridor"
        ],
        "poses": [
          "one draping fabric over other",
          "one pinning other's garment fitting",
          "one holding other's hem",
          "wind machine hair both",
          "dramatic coat sweep one"
        ],
        "looks": [
          "avant-garde structured editorial",
          "sculptural fashion piece editorial",
          "layered mesh overlay fashion",
          "couture gown and sharp street suit",
          "deconstructed suit editorial"
        ]
      },
      "editorial vs. commercial": {
        "locs": [
          "studio white cyc wall",
          "magazine editorial studio set",
          "empty runway post-show",
          "concept store interior minimal",
          "fashion archive storage room"
        ],
        "poses": [
          "editorial stride catwalk both",
          "magazine cover symmetry pose",
          "editorial rooftop dramatic both",
          "dramatic silhouette both backlit",
          "both staring into distance editorial"
        ],
        "looks": [
          "minimalist white on white",
          "all-black high fashion",
          "mono-color head to toe",
          "bold print editorial set",
          "colour block high fashion"
        ]
      },
      "trend vs. timeless": {
        "locs": [
          "Paris fashion week backstage",
          "Milan showroom white space",
          "fashion archive storage room",
          "Rome editorial cobblestone street",
          "Vienna opera house steps editorial"
        ],
        "poses": [
          "backstage mirror final look both",
          "both holding same garment examining",
          "one adjusting accessories other",
          "concept store browse together",
          "editorial chair one seated one standing"
        ],
        "looks": [
          "vintage archive fashion look",
          "heritage tweed modern cut",
          "tailored androgynous suit",
          "bias cut satin editorial",
          "mono-color head to toe"
        ]
      },
      "dressed vs. undone": {
        "locs": [
          "backstage costume rail corridor",
          "designer atelier fitting room",
          "model agency casting room",
          "polaroid wall model agency",
          "designer atelier fitting room"
        ],
        "poses": [
          "backstage embrace before show",
          "both laughing breaking pose",
          "fitting room mirror look",
          "polaroid review both looking down",
          "one dressing other from behind"
        ],
        "looks": [
          "deconstructed suit editorial",
          "oversized coat minimal inside",
          "relaxed tailoring editorial",
          "vintage inspired editorial",
          "fashion week street casual elevated"
        ]
      },
      "camera vs. mirror": {
        "locs": [
          "studio white cyc wall",
          "model agency casting room",
          "polaroid wall model agency",
          "backstage costume rail corridor",
          "magazine editorial studio set"
        ],
        "poses": [
          "both looking at same polaroid",
          "backstage mirror final look both",
          "one photographing other editorial",
          "fitting room mirror look",
          "polaroid review both looking down"
        ],
        "looks": [
          "minimalist white on white",
          "all-black high fashion",
          "tailored androgynous suit",
          "luxury knitwear editorial",
          "editorial jumpsuit minimal"
        ]
      },
      "season vs. off-season": {
        "locs": [
          "Paris fashion week backstage",
          "fashion week guest street shot",
          "fashion week guest street shot",
          "London fashion week tent backstage",
          "backstage costume rail corridor"
        ],
        "poses": [
          "fashion week gate waiting pose",
          "backstage embrace before show",
          "backstage mirror final look both",
          "both looking at same polaroid",
          "editorial stride catwalk both"
        ],
        "looks": [
          "bold print editorial set",
          "avant-garde structured editorial",
          "dramatic cape editorial",
          "statement hat outfit editorial",
          "editorial jumpsuit minimal"
        ]
      },
      "designer vs. street": {
        "locs": [
          "Tokyo Harajuku street shoot",
          "Berlin industrial fashion loft",
          "Lagos editorial street shoot",
          "Seoul streetwear concept store",
          "fashion week street outside tent"
        ],
        "poses": [
          "street style candid walk together",
          "street shot mid-crowd isolated",
          "editorial run toward camera both",
          "catwalk walk mid-stride both",
          "both in movement editorial blur"
        ],
        "looks": [
          "luxury streetwear oversized",
          "graphic tee luxury trousers",
          "double denim elevated",
          "sportswear luxury editorial",
          "fashion week street casual elevated"
        ]
      },
      "front row vs. backstage": {
        "locs": [
          "Paris fashion week backstage",
          "empty runway post-show",
          "backstage costume rail corridor",
          "runway catwalk empty before show",
          "fashion week guest street shot"
        ],
        "poses": [
          "editorial stride catwalk both",
          "runway finale bow together",
          "backstage embrace before show",
          "backstage mirror final look both",
          "both looking at same polaroid"
        ],
        "looks": [
          "couture gown and sharp street suit",
          "luxury streetwear oversized",
          "tailored androgynous suit",
          "all-black high fashion",
          "vintage archive fashion look"
        ]
      },
      "beauty vs. bizarre": {
        "locs": [
          "studio white cyc wall",
          "Berlin industrial fashion loft",
          "Tokyo Harajuku street shoot",
          "underground parking editorial shoot",
          "concept store interior minimal"
        ],
        "poses": [
          "dramatic fall catch fashion",
          "wind machine hair both",
          "dramatic hood raise editorial",
          "dramatic silhouette both backlit",
          "both arms out fashion wide"
        ],
        "looks": [
          "avant-garde structured editorial",
          "sculptural fashion piece editorial",
          "patchwork mixed pattern look",
          "neon editorial statement",
          "feather trim evening editorial"
        ]
      },
      "high fashion vs. wearable": {
        "locs": [
          "Milan showroom white space",
          "Paris apartment editorial window",
          "high street editorial morning",
          "concept store interior minimal",
          "luxury boutique interior shoot"
        ],
        "poses": [
          "editorial lean wall one foot up",
          "both staring into distance editorial",
          "concept store browse together",
          "over-the-shoulder both looking back",
          "editorial floor sit both"
        ],
        "looks": [
          "minimalist white on white",
          "tailored androgynous suit",
          "relaxed tailoring editorial",
          "graphic tee luxury trousers",
          "luxury knitwear editorial"
        ]
      },
      "styled vs. raw": {
        "locs": [
          "studio white cyc wall",
          "Lagos editorial street shoot",
          "Amsterdam canal editorial bridge",
          "editorial beach dunes shot",
          "model agency casting room"
        ],
        "poses": [
          "mirrored pose symmetrical fashion",
          "street style candid walk together",
          "both laughing breaking pose",
          "editorial crouch one standing one low",
          "detail shot both hands garment"
        ],
        "looks": [
          "all-black high fashion",
          "vintage archive fashion look",
          "double denim elevated",
          "utility fashion editorial",
          "editorial jumpsuit minimal"
        ]
      },
      "model vs. character": {
        "locs": [
          "magazine editorial studio set",
          "studio white cyc wall",
          "editorial beach dunes shot",
          "rooftop penthouse editorial night",
          "evening show empty theater"
        ],
        "poses": [
          "editorial stride catwalk both",
          "dramatic fall catch fashion",
          "both in movement editorial blur",
          "both arms crossed high fashion",
          "editorial window frame both"
        ],
        "looks": [
          "avant-garde structured editorial",
          "dramatic gown and editorial suit",
          "bold shoulder editorial jacket",
          "embellished evening editorial",
          "architectural fashion editorial"
        ]
      },
      "motion vs. pose": {
        "locs": [
          "empty runway post-show",
          "studio white cyc wall",
          "editorial beach dunes shot",
          "rooftop penthouse editorial night",
          "underground parking editorial shoot"
        ],
        "poses": [
          "editorial stride catwalk both",
          "catwalk walk mid-stride both",
          "both in movement editorial blur",
          "editorial run toward camera both",
          "dramatic coat sweep one"
        ],
        "looks": [
          "luxury streetwear oversized",
          "all-black high fashion",
          "deconstructed suit editorial",
          "bold print editorial set",
          "dramatic cape editorial"
        ]
      },
      "haute couture vs. ready-to-wear": {
        "locs": [
          "Paris fashion week backstage",
          "designer atelier fitting room",
          "Milan showroom white space",
          "fashion archive storage room",
          "empty runway post-show"
        ],
        "poses": [
          "one pinning other's garment fitting",
          "one draping fabric over other",
          "runway finale bow together",
          "backstage mirror final look both",
          "editorial stride catwalk both"
        ],
        "looks": [
          "couture gown and sharp street suit",
          "avant-garde structured editorial",
          "embellished evening editorial",
          "dramatic gown and editorial suit",
          "feather trim evening editorial"
        ]
      },
      "collection vs. single look": {
        "locs": [
          "backstage costume rail corridor",
          "fashion archive storage room",
          "designer atelier fitting room",
          "polaroid wall model agency",
          "studio white cyc wall"
        ],
        "poses": [
          "both holding same garment examining",
          "one adjusting accessories other",
          "polaroid review both looking down",
          "both looking at same polaroid",
          "backstage mirror final look both"
        ],
        "looks": [
          "vintage archive fashion look",
          "avant-garde structured editorial",
          "tailored androgynous suit",
          "mono-color head to toe",
          "bold print editorial set"
        ]
      },
      "luxury vs. accessible": {
        "locs": [
          "Milan showroom white space",
          "luxury boutique interior shoot",
          "high street editorial morning",
          "concept store interior minimal",
          "Singapore rooftop luxury shoot"
        ],
        "poses": [
          "editorial lean wall one foot up",
          "concept store browse together",
          "over-the-shoulder both looking back",
          "both staring into distance editorial",
          "street style candid walk together"
        ],
        "looks": [
          "luxury knitwear editorial",
          "all-black high fashion",
          "graphic tee luxury trousers",
          "relaxed tailoring editorial",
          "fashion week street casual elevated"
        ]
      },
      "theatrical vs. minimal": {
        "locs": [
          "evening show empty theater",
          "Rome editorial cobblestone street",
          "Athens marble editorial exterior",
          "Vienna opera house steps editorial",
          "studio white cyc wall"
        ],
        "poses": [
          "dramatic fall catch fashion",
          "dramatic hood raise editorial",
          "dramatic silhouette both backlit",
          "mirrored pose symmetrical fashion",
          "both arms out fashion wide"
        ],
        "looks": [
          "avant-garde structured editorial",
          "minimalist white on white",
          "dramatic cape editorial",
          "dramatic gown and editorial suit",
          "sculptural fashion piece editorial"
        ]
      },
      "body vs. silhouette": {
        "locs": [
          "studio white cyc wall",
          "magazine editorial studio set",
          "editorial beach dunes shot",
          "rooftop penthouse editorial night",
          "underground parking editorial shoot"
        ],
        "poses": [
          "dramatic silhouette both backlit",
          "both arms out fashion wide",
          "dramatic coat sweep one",
          "one on elevated surface other below",
          "editorial window frame both"
        ],
        "looks": [
          "mesh overlay evening editorial",
          "layered mesh overlay fashion",
          "all-black high fashion",
          "bias cut satin editorial",
          "sculptural fashion piece editorial"
        ]
      },
      "brand vs. person": {
        "locs": [
          "Paris fashion week backstage",
          "model agency casting room",
          "polaroid wall model agency",
          "concept store interior minimal",
          "luxury boutique interior shoot"
        ],
        "poses": [
          "both looking at same polaroid",
          "backstage mirror final look both",
          "both laughing breaking pose",
          "one photographing other editorial",
          "fitting room mirror look"
        ],
        "looks": [
          "all-black high fashion",
          "minimalist white on white",
          "tailored androgynous suit",
          "vintage archive fashion look",
          "editorial jumpsuit minimal"
        ]
      },
      "moment vs. campaign": {
        "locs": [
          "studio white cyc wall",
          "magazine editorial studio set",
          "editorial beach dunes shot",
          "Paris apartment editorial window",
          "rooftop penthouse editorial night"
        ],
        "poses": [
          "magazine cover symmetry pose",
          "editorial rooftop dramatic both",
          "both in movement editorial blur",
          "dramatic silhouette both backlit",
          "editorial run toward camera both"
        ],
        "looks": [
          "avant-garde structured editorial",
          "bold print editorial set",
          "all-black high fashion",
          "colour block high fashion",
          "dramatic gown and editorial suit"
        ]
      }
    },
    "promptPrefix": "High fashion editorial photograph, fashion week or luxury magazine quality — ",
    "promptSuffix": "Render with the precision and intentionality of high fashion photography: every element of the frame is considered, the garments are the protagonist, the lighting is deliberate and sculptural. The quality should read as Vogue, i-D or AnOther Magazine."
  },
  {
    "id": "protest",
    "name": "THE PROTEST",
    "sub": "Resistance & Voice",
    "color": "#cc3344",
    "tensions": [
      "individual vs. crowd",
      "sign vs. silence",
      "marching vs. standing still",
      "anger vs. hope",
      "arrested vs. free",
      "chant vs. quiet",
      "seen vs. ignored",
      "together vs. alone in cause",
      "fear vs. conviction",
      "front line vs. witness",
      "voice vs. power",
      "peaceful vs. tense",
      "symbol vs. person",
      "media vs. moment",
      "movement vs. state",
      "demand vs. plea",
      "exhausted vs. resolved",
      "unity vs. division",
      "act vs. consequence",
      "present vs. history"
    ],
    "locs": [
      "city street march crowd placard density",
      "courthouse steps vigil candles",
      "barricade police line stand-off",
      "memorial vigil square candles wind",
      "occupation sit-in steps long-stay",
      "university campus quad gathering",
      "Parliament Square Westminster London",
      "Trafalgar Square London gathering",
      "Tiananmen Square adjacent Beijing",
      "Tahrir Square Cairo archive feeling",
      "Maidan Square Kyiv historic feeling",
      "Wenceslas Square Prague historic",
      "Zuccotti Park New York Occupy",
      "Union Square New York rally",
      "Hyde Park Speakers' Corner London",
      "The Mall Washington DC march",
      "Lafayette Square Washington DC",
      "Martin Luther King Memorial Washington",
      "Lincoln Memorial steps Washington",
      "Capitol Building exterior demonstration",
      "Selma bridge Edmund Pettus Alabama",
      "Birmingham Alabama Kelly Ingram Park",
      "Montgomery Alabama Dexter Avenue",
      "Little Rock Arkansas school exterior",
      "Stonewall Inn New York exterior",
      "Stonewall National Monument area",
      "Harvey Milk Plaza San Francisco",
      "Castro District San Francisco march",
      "Grant Park Chicago rally point",
      "Federal Plaza Chicago march",
      "Millennium Park Chicago gathering",
      "City Hall Los Angeles steps",
      "Pershing Square Los Angeles rally",
      "Venice Beach boardwalk demonstration",
      "Rodeo Drive protest Palm Springs",
      "Climate march London Embankment",
      "XR blockade London bridge",
      "Anti-war vigil Grosvenor Square London",
      "Greenham Common memorial Berkshire",
      "Faslane Peace Camp Scotland gate",
      "G8 Gleneagles approach road",
      "COP26 Glasgow approach march",
      "George Square Glasgow rally",
      "Kelvingrove Glasgow vigil"
    ],
    "poses": [
      "one holding sign other arm raised both facing forward",
      "both fists raised mid-chant",
      "one megaphone raised other fist up",
      "back to back crowd pressing both",
      "linked arms march forward resolute",
      "one shielding other from crowd surge",
      "both sitting down peaceful occupation",
      "both kneeling both hands up",
      "one helping other up from ground both",
      "both looking at each other exhausted hopeful",
      "back to back standing ground calm",
      "both lying down die-in peaceful",
      "both arms out human chain middle",
      "one speaking crowd other listens intently",
      "both holding banner between them",
      "both watching water cannon approach calm",
      "one being arrested other watches powerless",
      "both crying at outcome together",
      "sitting on ground back to back vigil night",
      "both writing on placard together",
      "both at megaphone different messages",
      "one covering other's face for camera",
      "both handing out leaflets together",
      "looking at each other through tear gas",
      "both running from confrontation hand-in-hand",
      "both helping injured stranger down",
      "sitting on steps after long day both",
      "one behind other arms wrapped cold",
      "both singing together faces up",
      "one singing other playing guitar march",
      "both at police barrier line holding",
      "face-to-face silent communication protest",
      "both wet from rain march continuing",
      "one first-aiding other's hand both",
      "both holding flowers vigil candles",
      "march front both holding banner proud",
      "both at fence memorial reading names",
      "sitting vigil night long both tired resolve"
    ],
    "looks": [
      "protest black casual layers both practical",
      "march comfortable worn shoes jeans each",
      "vigil dark simple layers appropriate both",
      "occupation casual worn long-stay both",
      "union colours jacket each representing",
      "campaign t-shirt and jeans both",
      "practical waterproof layers march both",
      "all-black bloc both",
      "brightly coloured costume point both",
      "high-vis steward vest over casual each",
      "climate protest green layers both",
      "feminist march layers comfortable both",
      "peace movement practical both",
      "anti-war vigil sombre layers both",
      "LGBTQ pride colourful both celebratory",
      "disability rights accessible casual both",
      "racial justice powerful simple both",
      "immigration rights layers colourful flag both",
      "environmental direct action practical both",
      "animal rights ethical fashion both",
      "student protest casual layers both",
      "workers' rights trade union both",
      "housing protest local community clothes both",
      "anti-fascist black practical both",
      "nuclear disarmament CND layers both",
      "suffragette white and purple historically-informed both",
      "civil rights movement suited both formal",
      "counter-cultural layers both expressive",
      "political art performance costume both",
      "long march comfortable practical both",
      "overnight occupation sleeping bag over clothes both",
      "police liaison bright vest over casual each",
      "legal observer neon over casual each",
      "medic cross vest over casual each",
      "media journalist vest over casual each",
      "organiser lanyard casual professional each",
      "faith group dignity appropriate layers both"
    ],
    "affinities": {
      "individual vs. crowd": {
        "locs": [
          "city street march crowd",
          "night protest phone light crowd",
          "peaceful blockade intersection",
          "march approach capitol steps",
          "rally stage crowd facing"
        ],
        "poses": [
          "standing still crowd surges around",
          "one on shoulders sees crowd",
          "both looking at camera direct",
          "back of march looking forward",
          "two alone after march ends"
        ],
        "looks": [
          "protest black casual layers",
          "march comfortable worn shoes",
          "arrest risk black minimal",
          "solidarity simple minimal",
          "march worn comfortable layers"
        ]
      },
      "sign vs. silence": {
        "locs": [
          "memorial vigil candles square",
          "solidarity vigil park candles",
          "courthouse steps vigil",
          "memorial wall names touching",
          "anti-war vigil park"
        ],
        "poses": [
          "both kneeling silent protest",
          "sign held between them both",
          "silent stare authority both",
          "candle vigil both cupped hands",
          "one holding sign other arm raised"
        ],
        "looks": [
          "vigil dark simple layers",
          "memorial march dark formal",
          "anti-war peace symbol top",
          "solidarity march simple layers",
          "white dress and white shirt candle vigil"
        ]
      },
      "marching vs. standing still": {
        "locs": [
          "city street march crowd",
          "freedom march open highway",
          "climate march city bridge",
          "historic march bridge famous",
          "march approach capitol steps"
        ],
        "poses": [
          "linked arms march forward",
          "marching step-in-step crowd",
          "both fists raised chant",
          "march approach bridge horizon",
          "standing still crowd surges around"
        ],
        "looks": [
          "march comfortable worn shoes",
          "march worn comfortable layers",
          "civil rights formal Sunday march",
          "historic march formal dignified",
          "banner-bold bright protest tee"
        ]
      },
      "anger vs. hope": {
        "locs": [
          "barricade police line street",
          "courthouse steps vigil",
          "memorial vigil candles square",
          "capitol building steps rally",
          "university campus protest lawn"
        ],
        "poses": [
          "both fists raised chant",
          "candle vigil both cupped hands",
          "chant face to face close",
          "one speaking crowd listening",
          "hands joined raised together"
        ],
        "looks": [
          "protest black casual layers",
          "vigil dark simple layers",
          "civil rights formal Sunday march",
          "chant leader bright visible",
          "community organizer casual layers"
        ]
      },
      "arrested vs. free": {
        "locs": [
          "police standoff street corner",
          "barricade police line street",
          "checkpoint confrontation border",
          "courthouse steps vigil",
          "peaceful blockade intersection"
        ],
        "poses": [
          "both hands up surrender pose",
          "facing police line side by side",
          "both arms locked barrier sit",
          "one comforting arrested other",
          "one shielding other from crowd"
        ],
        "looks": [
          "protest black casual layers",
          "arrest risk black minimal",
          "legal observer bright vest",
          "run-ready protest layers",
          "march comfortable worn shoes"
        ]
      },
      "chant vs. quiet": {
        "locs": [
          "town square speech platform",
          "rally stage crowd facing",
          "memorial vigil candles square",
          "university campus protest lawn",
          "solidarity vigil park candles"
        ],
        "poses": [
          "one megaphone other listening",
          "chant face to face close",
          "chant leader crowd response",
          "both kneeling silent protest",
          "silent stare authority both"
        ],
        "looks": [
          "chant leader bright visible",
          "protest black casual layers",
          "vigil dark simple layers",
          "rally speaker visible layers",
          "solidarity march simple layers"
        ]
      },
      "seen vs. ignored": {
        "locs": [
          "press conference protest steps",
          "press pool protest scrum",
          "banner drop building side",
          "public square occupation tent",
          "memorial wall names touching"
        ],
        "poses": [
          "both looking at camera direct",
          "one filming other speaks",
          "press photo moment both posed",
          "banner unfurl both holding ends",
          "sign held between them both"
        ],
        "looks": [
          "documentary-style journalist casual",
          "press vest casual journalist",
          "banner-bold bright protest tee",
          "chant leader bright visible",
          "protest artist paint-marked layers"
        ]
      },
      "together vs. alone in cause": {
        "locs": [
          "tent city occupation park",
          "occupation sit-in building steps",
          "protest camp morning wake",
          "solidarity vigil park candles",
          "community meeting outdoor evening"
        ],
        "poses": [
          "solidarity hug mid-march",
          "linked arms march forward",
          "both arms locked barrier sit",
          "camp fire vigil both seated",
          "tent camp morning both waking"
        ],
        "looks": [
          "occupation long-haul worn layers",
          "tent camp worn layered",
          "solidarity march simple layers",
          "community organizer casual layers",
          "sit-in dignified formal protest"
        ]
      },
      "fear vs. conviction": {
        "locs": [
          "police standoff street corner",
          "barricade police line street",
          "checkpoint confrontation border",
          "barricade police line street",
          "peaceful blockade intersection"
        ],
        "poses": [
          "facing police line side by side",
          "standing still crowd surges around",
          "one shielding other from crowd",
          "both hands up surrender pose",
          "silent stare authority both"
        ],
        "looks": [
          "protest black casual layers",
          "arrest risk black minimal",
          "march comfortable worn shoes",
          "run-ready protest layers",
          "line-holder dark layered warm"
        ]
      },
      "front line vs. witness": {
        "locs": [
          "barricade police line street",
          "press conference protest steps",
          "press conference protest steps",
          "memorial vigil candles square",
          "waterfront protest march"
        ],
        "poses": [
          "one filming other speaks",
          "press photo moment both posed",
          "one shielding other from crowd",
          "facing police line side by side",
          "back of march looking forward"
        ],
        "looks": [
          "press vest casual journalist",
          "documentary-style journalist casual",
          "legal observer bright vest",
          "medic red cross vest casual",
          "march medic neutral vest"
        ]
      },
      "voice vs. power": {
        "locs": [
          "capitol building steps rally",
          "courthouse steps vigil",
          "town square speech platform",
          "checkpoint confrontation border",
          "historic march bridge famous"
        ],
        "poses": [
          "one speaking crowd listening",
          "one megaphone other listening",
          "both looking at camera direct",
          "silent stare authority both",
          "chant leader crowd response"
        ],
        "looks": [
          "civil rights formal Sunday march",
          "chant leader bright visible",
          "solidarity march simple layers",
          "historic march formal dignified",
          "community organizer casual layers"
        ]
      },
      "peaceful vs. tense": {
        "locs": [
          "police standoff street corner",
          "peaceful blockade intersection",
          "barricade police line street",
          "university campus protest lawn",
          "memorial vigil candles square"
        ],
        "poses": [
          "linked arms march forward",
          "facing police line side by side",
          "both kneeling silent protest",
          "one steadying other on line",
          "crowd surge both holding firm"
        ],
        "looks": [
          "march comfortable worn shoes",
          "protest black casual layers",
          "solidarity march simple layers",
          "vigil dark simple layers",
          "arrest risk black minimal"
        ]
      },
      "symbol vs. person": {
        "locs": [
          "protest art installation plaza",
          "graffiti wall protest art",
          "banner drop building side",
          "memorial wall names touching",
          "historic march bridge famous"
        ],
        "poses": [
          "sign held between them both",
          "banner unfurl both holding ends",
          "memorial name trace together",
          "one holding sign other arm raised",
          "both looking at camera direct"
        ],
        "looks": [
          "banner-bold bright protest tee",
          "protest artist paint-marked layers",
          "civil rights formal Sunday march",
          "solidarity simple minimal",
          "memorial solemn dark layers"
        ]
      },
      "media vs. moment": {
        "locs": [
          "press conference protest steps",
          "press pool protest scrum",
          "rally stage crowd facing",
          "night protest phone light crowd",
          "press conference protest steps"
        ],
        "poses": [
          "one filming other speaks",
          "press photo moment both posed",
          "both looking at camera direct",
          "one speaking crowd listening",
          "candlelight face glow both"
        ],
        "looks": [
          "press vest casual journalist",
          "documentary-style journalist casual",
          "legal observer bright vest",
          "community organizer casual layers",
          "protest black casual layers"
        ]
      },
      "movement vs. state": {
        "locs": [
          "capitol building steps rally",
          "courthouse steps vigil",
          "checkpoint confrontation border",
          "historic march bridge famous",
          "freedom march open highway"
        ],
        "poses": [
          "march approach bridge horizon",
          "facing police line side by side",
          "hands joined raised together",
          "silent stare authority both",
          "both fists raised chant"
        ],
        "looks": [
          "civil rights formal Sunday march",
          "historic march formal dignified",
          "solidarity march simple layers",
          "protest black casual layers",
          "community organizer casual layers"
        ]
      },
      "demand vs. plea": {
        "locs": [
          "courthouse steps vigil",
          "capitol building steps rally",
          "town square speech platform",
          "memorial vigil candles square",
          "tenant protest landlord building"
        ],
        "poses": [
          "one speaking crowd listening",
          "one megaphone other listening",
          "chant face to face close",
          "candle vigil both cupped hands",
          "one holding sign other arm raised"
        ],
        "looks": [
          "vigil dark simple layers",
          "civil rights formal Sunday march",
          "community organizer casual layers",
          "memorial solemn dark layers",
          "solidarity march simple layers"
        ]
      },
      "exhausted vs. resolved": {
        "locs": [
          "tent city occupation park",
          "protest camp morning wake",
          "occupation sit-in building steps",
          "hunger strike vigil steps",
          "solidarity vigil park candles"
        ],
        "poses": [
          "exhausted ground sit after march",
          "tent camp morning both waking",
          "camp fire vigil both seated",
          "two alone after march ends",
          "solidarity hug mid-march"
        ],
        "looks": [
          "tent camp worn layered",
          "occupation long-haul worn layers",
          "hunger strike thin simple white",
          "dawn march cold layered",
          "march worn comfortable layers"
        ]
      },
      "unity vs. division": {
        "locs": [
          "solidarity vigil park candles",
          "pride parade street march",
          "climate march city bridge",
          "community meeting outdoor evening",
          "freedom march open highway"
        ],
        "poses": [
          "linked arms march forward",
          "hands joined raised together",
          "solidarity hug mid-march",
          "fist bump solidarity after",
          "banner unfurl both holding ends"
        ],
        "looks": [
          "solidarity march simple layers",
          "pride march colorful expressive",
          "community organizer casual layers",
          "climate protest earthy layers",
          "banner-bold bright protest tee"
        ]
      },
      "act vs. consequence": {
        "locs": [
          "courthouse steps vigil",
          "police standoff street corner",
          "barricade police line street",
          "checkpoint confrontation border",
          "peaceful blockade intersection"
        ],
        "poses": [
          "one comforting arrested other",
          "both hands up surrender pose",
          "one shielding other from crowd",
          "facing police line side by side",
          "one tending other's wound"
        ],
        "looks": [
          "arrest risk black minimal",
          "march comfortable worn shoes",
          "legal observer bright vest",
          "medic red cross vest casual",
          "run-ready protest layers"
        ]
      },
      "present vs. history": {
        "locs": [
          "historic march bridge famous",
          "civil rights march downtown",
          "memorial wall names touching",
          "armistice day memorial crowd",
          "freedom march open highway"
        ],
        "poses": [
          "memorial name trace together",
          "march approach bridge horizon",
          "both looking at camera direct",
          "hands joined raised together",
          "back of march looking forward"
        ],
        "looks": [
          "civil rights formal Sunday march",
          "historic march formal dignified",
          "memorial solemn dark layers",
          "armistice formal heritage dark",
          "solidarity march simple layers"
        ]
      }
    },
    "promptPrefix": "Documentary reportage photograph, editorial quality, photojournalism aesthetic — ",
    "promptSuffix": "Render as a serious documentary photograph: available light, the energy of the real moment, not a staged portrait. The quality should feel like it belongs in a newspaper front page or a World Press Photo submission."
  },
  {
    "id": "desert",
    "name": "THE DESERT",
    "sub": "Vast, Ancient & Indifferent",
    "color": "#c87820",
    "tensions": [
      "vastness vs. intimacy",
      "ancient vs. present",
      "heat vs. cold night",
      "the mirage vs. the real",
      "survival vs. surrender",
      "the dune vs. the horizon",
      "silence vs. the wind",
      "small vs. infinite",
      "lost vs. found",
      "the oasis vs. the illusion"
    ],
    "affinities": {
      "vastness vs. intimacy": {
        "locs": [
          "Wadi Rum red rock Jordan dawn long shadow",
          "Sahara dune sea sunset two figures tiny",
          "Death Valley salt flat noon bleached vast"
        ],
        "poses": [
          "both tiny against vast Wadi Rum red rock dawn",
          "both Sahara dune crest sunset figures small horizon"
        ],
        "looks": [
          "desert traveller wrapped cloth dust each",
          "explorer practical desert each heat"
        ]
      }
    },
    "locs": [
      "Wadi Rum red rock Jordan dawn long shadow",
      "Sahara dune sea sunset two figures tiny horizon",
      "Death Valley salt flat noon bleached vast white",
      "Atacama Chile night sky clearest stars world",
      "Namib vlei dead trees orange dune dawn iconic",
      "Jordanian desert ancient Nabataean rock city Petra dusk",
      "Moroccan desert Merzouga dune sea sunset gold",
      "Arizona Monument Valley sandstone butte long shadow",
      "White Sands New Mexico gypsum dune noon",
      "Sossusvlei Namibia dune red iron oxide dawn",
      "Gobi Mongolia vast flat sand storm approaching",
      "Rub al Khali Empty Quarter dune sea endless",
      "Sonoran desert saguaro cactus sunset Arizona",
      "Atacama salt flat mirror sky reflection",
      "Death Valley Zabriskie Point badlands dawn",
      "Sahara oasis palm trees mirage heat shimmer",
      "Wadi Rum desert camp fire night stars",
      "Arabian desert camel caravan horizon line dawn",
      "Painted Desert Arizona colour band formation",
      "Great Sand Dunes Colorado snow mountain beyond",
      "Lencois Maranhenses Brazil white dune lagoon",
      "Black Rock Desert Nevada vast flat nothing",
      "Danakil Depression Ethiopia hottest place earth",
      "Simpson Desert Australia red dune noon",
      "Taklamakan China Silk Road ancient route",
      "Namib fog coastal desert ghost ship distant",
      "Negev desert Ramon crater vast geological",
      "Judean desert cave dwelling ancient",
      "Chilean Atacama lava field volcanic moon",
      "Rub al Khali dune crest wind sand stream"
    ],
    "poses": [
      "both tiny against vast desert landscape horizon",
      "both dune crest sunset silhouette small against sky",
      "both salt flat white vast foreground tiny",
      "both long shadow dawn desert red rock",
      "both walking toward horizon desert vast behind",
      "both resting shade rock desert noon",
      "both looking out over dune sea sunset",
      "both standing apart vast desert between them implied",
      "both silhouette against desert dawn colour",
      "both at oasis edge real or mirage",
      "both back to back desert vast all directions",
      "both kneeling desert floor something discovered",
      "both facing each other desert wind",
      "both looking up night sky Atacama stars",
      "both emerging from dust storm approaching",
      "both at ancient rock dwelling desert cliff",
      "both desert floor heat exhaustion late afternoon",
      "both camel caravan horizon line dawn",
      "both watching sand storm approach vast",
      "both at desert camp fire night vast dark"
    ],
    "looks": [
      "desert traveller wrapped linen cloth dust protection each",
      "explorer practical desert hat shade each",
      "Bedouin inspired wrapped cloth each desert",
      "adventurer practical layers desert each",
      "minimal simple clothes desert heat each",
      "desert worn clothes dust stained each",
      "wrapped keffiyeh desert dust each",
      "lightweight layers desert traveller each",
      "simple cotton desert pale each heat",
      "expedition practical desert technical each"
    ],
    "promptSuffix": "Colour grade: the specific palettes of specific deserts — Wadi Rum red, Sahara gold, Death Valley bleached white, Atacama violet night. The scale of the land against the smallness of the person."
  },
  {
    "id": "surreal",
    "name": "THE SURREAL",
    "sub": "Impossible & Dreamlike",
    "color": "#9955cc",
    "tensions": [
      "real vs. impossible",
      "waking vs. dreaming",
      "gravity vs. float",
      "inside vs. outside",
      "scaled vs. vast",
      "whole vs. fragmented",
      "visible vs. transparent",
      "time vs. still",
      "organic vs. geometric",
      "self vs. mirror",
      "light vs. sourceless",
      "near vs. infinite",
      "familiar vs. wrong",
      "solid vs. dissolving",
      "one vs. many selves",
      "memory vs. place",
      "above vs. below reversed",
      "door vs. nowhere",
      "human vs. element",
      "silence vs. impossible sound"
    ],
    "locs": [
      "room floating in open sky above clouds",
      "staircase descending into ocean depth",
      "corridor of infinite identical doors",
      "forest growing on ceiling roots up",
      "library with books falling upward slowly",
      "clock face enormous walkable surface",
      "mirror room reflecting into infinity",
      "chess board landscape full size",
      "giant flower field house-sized blooms",
      "city inverted above head walking",
      "door in middle of open field nowhere",
      "bed floating in dark space",
      "kitchen with ocean instead of floor",
      "office with desert instead of carpet",
      "wedding beneath water both dry somehow",
      "train arriving through bedroom wall",
      "telephone booth inside out ringing",
      "painting stepped into both inside art",
      "mouth of cave that is a face enormous",
      "eye looking back from pond surface",
      "shadows going wrong direction both",
      "clocks all different times melting",
      "hands visible not the body they belong",
      "spiral staircase going both up and down same",
      "window looking at same room from inside",
      "door knob too large to turn reasonable",
      "tree growing sideways defying gravity",
      "rain falling upward both normal about it",
      "snow falling in one spot only precision",
      "crowd all moving same direction both still",
      "moon on ground everyone else ignores",
      "sun underground ceiling window",
      "horizon too close walking impossible",
      "sky below feet walking on clouds solid",
      "two of the same place same time both",
      "echo of selves visible slight delay",
      "objects frozen mid-fall both normal",
      "animals acting human ignored by both",
      "architecture bending around both normally",
      "two moons different sizes both checking"
    ],
    "poses": [
      "floating horizontal arms at sides calm completely",
      "walking up vertical wall nonchalant both",
      "standing inside own mirror reflection touching it",
      "sitting on nothing mid-air cross-legged calm",
      "two identical poses facing each other impossible",
      "one upside down other normal conversation",
      "both looking at impossible object calmly",
      "one pulling own shadow other holds theirs",
      "both walking through each other momentarily",
      "one turning into birds other watches interested",
      "reading newspaper made of water both",
      "flying both just horizontal above ground",
      "looking at hands that aren't there both",
      "both reaching into hole in air something",
      "one is reflection of other glitching",
      "eating food that is air both savouring it",
      "shaking hands that extend impossibly far",
      "both walking normally world upside down",
      "one in background of other's dream appearing",
      "both enormous and tiny same frame",
      "opening door to same room just left",
      "both standing in rain that stops exactly at them",
      "one holding sun like balloon other holds moon",
      "both in two places visible both versions",
      "pouring liquid up into glass defying",
      "both reading the same book different stories",
      "both at table but no table just sitting",
      "one waving at self from distance same place",
      "both dressed same then switch seamlessly",
      "sitting at window from outside and inside same",
      "watching own thoughts form visible clouds",
      "both in black and white in colour scene",
      "one made of paper other concerned both",
      "meeting halfway in mirror both reaching"
    ],
    "looks": [
      "clothing made of shifting watercolour both",
      "suit of mirrored fragments reflecting each",
      "gown dissolving to moths at hem each",
      "coat of frozen fog worn naturally each",
      "outfit matching whatever background is each",
      "clothes printed with interior organs both",
      "dress and suit made of newspaper both",
      "outfit entirely of flowers growing both",
      "clothes in reverse colours inverted both",
      "fabric shifting texture as light changes both",
      "one fully dressed one in reflection white each",
      "shadow-fabric dark transparent both",
      "clouds worn as garments both casual",
      "lightning bolt as scarf each stylish",
      "ocean as skirt and jacket respectively",
      "mountain range miniature as coat each",
      "constellation pattern glowing subtly both",
      "both wearing the same colour as background",
      "one solid colour one pattern matching each",
      "vintage style both slightly wrong somehow",
      "contemporary both with impossible element each",
      "formal both with surreal detail",
      "wedding both in wrong setting inappropriate",
      "pyjamas both perfectly calm wrong context",
      "workwear both wildly wrong location",
      "swimwear both in winter indoors calm",
      "period costume both contemporary setting",
      "futuristic both historical setting",
      "animal print that moves subtly both",
      "geometric pattern shifting both",
      "both dressed for different weathers same time",
      "clothes visible through clothes both layers",
      "outfit has extra arm or sleeve each",
      "garment reversing colour slowly both"
    ],
    "affinities": {
      "real vs. impossible": {
        "locs": [
          "room floating in open sky",
          "doorway opening onto clouds",
          "door standing alone in open field",
          "mirror reflecting a different room",
          "house with windows showing other worlds"
        ],
        "poses": [
          "floating horizontal arms at sides calm",
          "standing inside own mirror reflection",
          "one transparent other fully solid",
          "one solid one made of smoke same pose",
          "stepping through frame of own portrait"
        ],
        "looks": [
          "clothing half-solid half-ethereal",
          "outfit that matches whatever is behind",
          "suit of mirrored fragments reflecting room",
          "clothing of woven starlight soft",
          "gown dissolving to moths and suit dissolving at cuffs"
        ]
      },
      "waking vs. dreaming": {
        "locs": [
          "bedroom with ceiling as floor",
          "corridor of infinite doors",
          "hallway that bends back on itself",
          "snow falling upward inside lit room",
          "window showing yesterday outside"
        ],
        "poses": [
          "sitting on nothing mid-air cross-legged",
          "both inside a painting looking out",
          "both looking at same point nothing there",
          "looking through window at inverted self",
          "face half-present half-dissolved into air"
        ],
        "looks": [
          "clothing made of shifting watercolour",
          "rain dress and rain coat suspended",
          "robes of slow smoke held in shape",
          "silence gown and silence coat",
          "exposure dress and exposure coat"
        ]
      },
      "gravity vs. float": {
        "locs": [
          "staircase descending into ocean",
          "forest growing on ceiling",
          "library with books falling upward",
          "snow falling upward inside lit room",
          "river flowing upward cliff face"
        ],
        "poses": [
          "floating horizontal arms at sides calm",
          "walking up vertical wall nonchalant",
          "one upside down other right way up face to face",
          "lying on ceiling looking down at floor",
          "standing still while world rotates around"
        ],
        "looks": [
          "coat of frozen fog worn naturally",
          "reversed-gravity gown and coat",
          "rain dress and rain coat suspended",
          "garment of folded light geometric",
          "crystallised gown and crystallised coat"
        ]
      },
      "inside vs. outside": {
        "locs": [
          "desert inside a glass bottle",
          "theatre stage inside a raindrop",
          "cathedral filled with fog and birds",
          "underwater ballroom lit chandelier",
          "cave filled with geometric light"
        ],
        "poses": [
          "both enclosed inside glass sphere together",
          "stepping out of own shadow leaving it behind",
          "both standing in pool reflecting different sky",
          "figure emerging from flat wall surface",
          "holding a door that opens onto self"
        ],
        "looks": [
          "garment made of open windows",
          "outfit that shows interior light",
          "blueprint gown and blueprint suit",
          "robes of layered maps and territory",
          "coat of frozen fog worn naturally"
        ]
      },
      "scaled vs. vast": {
        "locs": [
          "city built on a single enormous tree",
          "chess board landscape human scale",
          "floating island with roots hanging",
          "giant hourglass half-buried desert",
          "giant eye reflected in still lake"
        ],
        "poses": [
          "one figure eight feet tall same room",
          "one reflected in other's eye enormous",
          "standing inside a giant hourglass",
          "both walking toward horizon that recedes",
          "standing still while world rotates around"
        ],
        "looks": [
          "suit of geometric void patches",
          "robes of impossible geometry fabric",
          "robes of layered maps and territory",
          "garment of folded light geometric",
          "blueprint gown and blueprint suit"
        ]
      },
      "whole vs. fragmented": {
        "locs": [
          "mirror reflecting a different room",
          "double exposure city and forest merged",
          "labyrinth viewed from above as face",
          "forest of mirrors no reflections",
          "room where walls are moving clouds"
        ],
        "poses": [
          "both merging at the edges dissolving",
          "one casting shadow of different person",
          "two faces sharing one body from different angles",
          "both reflected infinitely between mirrors",
          "face half-present half-dissolved into air"
        ],
        "looks": [
          "suit of mirrored fragments reflecting room",
          "photograph dress and photograph suit",
          "coat of layered old photographs luminous",
          "clothing of woven starlight soft",
          "suit of fractured colour fields"
        ]
      },
      "visible vs. transparent": {
        "locs": [
          "sky below ground through glass floor",
          "human figure cast as long shadow only",
          "two figures sharing one shadow",
          "figure standing inside a burning portrait",
          "hands emerging from wallpaper"
        ],
        "poses": [
          "one transparent other fully solid",
          "one made of light other of shadow",
          "arms becoming branches or roots",
          "both suspended in amber mid-gesture",
          "silhouette filled with stars daylight outside"
        ],
        "looks": [
          "clothing half-solid half-ethereal",
          "robes of slow smoke held in shape",
          "suit of dark matter approximated",
          "salt-crystal gown and crystal coat",
          "clothing of woven starlight soft"
        ]
      },
      "time vs. still": {
        "locs": [
          "clock faces melting on walls",
          "corridor lined with clocks all stopped",
          "giant hourglass half-buried desert",
          "room lit by trapped lightning",
          "window showing yesterday outside"
        ],
        "poses": [
          "both suspended in amber mid-gesture",
          "one made of clock parts still moving",
          "both holding opposite ends of broken time",
          "both walking toward horizon that recedes",
          "standing still while world rotates around"
        ],
        "looks": [
          "suit of clock parts still ticking",
          "robes of slowly turning calendar pages",
          "outfit that ages and reverses visibly",
          "music-notation dress and notation coat",
          "last-moments gown and last-moments coat"
        ]
      },
      "organic vs. geometric": {
        "locs": [
          "cave filled with geometric light",
          "chess board landscape human scale",
          "field of eyes growing like flowers",
          "garden inside a human skull",
          "city built on a single enormous tree"
        ],
        "poses": [
          "arms becoming branches or roots",
          "arms extended birds flying from fingertips",
          "both folding space between their hands",
          "one made of clock parts still moving",
          "figure emerging from flat wall surface"
        ],
        "looks": [
          "robes of living moss and root",
          "robes of impossible geometry fabric",
          "suit of geometric void patches",
          "garment of folded light geometric",
          "flower-glass dress and flower-glass suit"
        ]
      },
      "self vs. mirror": {
        "locs": [
          "mirror reflecting a different room",
          "forest of mirrors no reflections",
          "infinite reflection hallway both ends open",
          "labyrinth viewed from above as face",
          "giant eye reflected in still lake"
        ],
        "poses": [
          "standing inside own mirror reflection",
          "two identical poses facing each other",
          "hands reaching through a mirror meeting",
          "looking through window at inverted self",
          "seated back to back on opposite sides of mirror"
        ],
        "looks": [
          "suit of mirrored fragments reflecting room",
          "outfit that matches whatever is behind",
          "suit of dark mirror panels moving",
          "photograph dress and photograph suit",
          "coat of layered old photographs luminous"
        ]
      },
      "light vs. sourceless": {
        "locs": [
          "room lit by trapped lightning",
          "cave filled with geometric light",
          "cathedral filled with fog and birds",
          "impossible bridge connecting two moons",
          "room where walls are moving clouds"
        ],
        "poses": [
          "one made of light other of shadow",
          "silhouette filled with stars daylight outside",
          "one casting shadow of different person",
          "one figure casting two different shadows",
          "figure emerging from flat wall surface"
        ],
        "looks": [
          "clothing of woven starlight soft",
          "robes of borrowed light worn softly",
          "garment of folded light geometric",
          "suit of mirrored fragments reflecting room",
          "sunrise dress and sunrise jacket"
        ]
      },
      "near vs. infinite": {
        "locs": [
          "corridor of infinite doors",
          "infinite reflection hallway both ends open",
          "corridor ending in another corridor beginning",
          "staircase circling a floating boulder",
          "floating island with roots hanging"
        ],
        "poses": [
          "both reflected infinitely between mirrors",
          "both walking toward horizon that recedes",
          "one reflected in other's eye enormous",
          "stepping through frame of own portrait",
          "both holding opposite ends of broken time"
        ],
        "looks": [
          "outfit of looping ribbon no end",
          "robes of layered maps and territory",
          "outfit that matches whatever is behind",
          "clothing of woven starlight soft",
          "suit of dark matter approximated"
        ]
      },
      "familiar vs. wrong": {
        "locs": [
          "room full of identical chairs one occupied",
          "museum of doors none lead anywhere",
          "house slowly sinking into sand",
          "train station at edge of space",
          "opera house submerged in shallow water"
        ],
        "poses": [
          "sitting at table with no floor beneath",
          "both looking at same point nothing there",
          "walking away becoming part of the wall",
          "one speaking words visible as objects",
          "both inside a painting looking out"
        ],
        "looks": [
          "outfit that matches whatever is behind",
          "clothing made of shifting watercolour",
          "unravelling dress and unravelling jacket",
          "accumulated-years coat each",
          "outfit that casts wrong coloured shadow"
        ]
      },
      "solid vs. dissolving": {
        "locs": [
          "house slowly sinking into sand",
          "figure standing inside a burning portrait",
          "double exposure city and forest merged",
          "human figure cast as long shadow only",
          "hands emerging from wallpaper"
        ],
        "poses": [
          "dissolving from feet upward still smiling",
          "both merging at the edges dissolving",
          "face half-present half-dissolved into air",
          "one solid one made of smoke same pose",
          "walking away becoming part of the wall"
        ],
        "looks": [
          "gown dissolving to moths and suit dissolving at cuffs",
          "robes of slow smoke held in shape",
          "clothing half-solid half-ethereal",
          "salt-crystal gown and crystal coat",
          "suit of dark matter approximated"
        ]
      },
      "one vs. many selves": {
        "locs": [
          "infinite reflection hallway both ends open",
          "labyrinth viewed from above as face",
          "forest of mirrors no reflections",
          "room full of identical chairs one occupied",
          "double exposure city and forest merged"
        ],
        "poses": [
          "two identical poses facing each other",
          "both reflected infinitely between mirrors",
          "two figures one inside the other",
          "two faces sharing one body from different angles",
          "one figure casting two different shadows"
        ],
        "looks": [
          "suit of interlocked human silhouettes",
          "photograph dress and photograph suit",
          "coat of layered old photographs luminous",
          "suit of dark mirror panels moving",
          "outfit that ages and reverses visibly"
        ]
      },
      "memory vs. place": {
        "locs": [
          "window showing yesterday outside",
          "house with windows showing other worlds",
          "museum of doors none lead anywhere",
          "garden inside a human skull",
          "faces carved in cumulus cloud bank"
        ],
        "poses": [
          "both inside a painting looking out",
          "stepping through frame of own portrait",
          "looking through window at inverted self",
          "both reaching into hole in reality",
          "one speaking words visible as objects"
        ],
        "looks": [
          "robes of layered maps and territory",
          "exposure dress and exposure coat",
          "coat of layered old photographs luminous",
          "last-moments gown and last-moments coat",
          "robes of slowly turning calendar pages"
        ]
      },
      "above vs. below reversed": {
        "locs": [
          "bedroom with ceiling as floor",
          "sky below ground through glass floor",
          "forest growing on ceiling",
          "staircase descending into ocean",
          "river flowing upward cliff face"
        ],
        "poses": [
          "lying on ceiling looking down at floor",
          "one upside down other right way up face to face",
          "walking up vertical wall nonchalant",
          "both standing on water surface dry",
          "floating horizontal arms at sides calm"
        ],
        "looks": [
          "reversed-gravity gown and coat",
          "coat of frozen fog worn naturally",
          "rain dress and rain coat suspended",
          "garment of folded light geometric",
          "clothing of woven starlight soft"
        ]
      },
      "door vs. nowhere": {
        "locs": [
          "door standing alone in open field",
          "corridor of infinite doors",
          "museum of doors none lead anywhere",
          "doorway opening onto clouds",
          "corridor ending in another corridor beginning"
        ],
        "poses": [
          "holding a door that opens onto self",
          "stepping through frame of own portrait",
          "both reaching into hole in reality",
          "walking away becoming part of the wall",
          "both walking toward horizon that recedes"
        ],
        "looks": [
          "garment made of open windows",
          "robes of layered maps and territory",
          "outfit that matches whatever is behind",
          "blueprint gown and blueprint suit",
          "accumulated-years coat each"
        ]
      },
      "human vs. element": {
        "locs": [
          "figure standing inside a burning portrait",
          "river flowing upward cliff face",
          "room lit by trapped lightning",
          "field of eyes growing like flowers",
          "two suns over impossible horizon"
        ],
        "poses": [
          "arms becoming branches or roots",
          "arms extended birds flying from fingertips",
          "one made of light other of shadow",
          "one pouring other from a vessel",
          "dissolving from feet upward still smiling"
        ],
        "looks": [
          "robes of living moss and root",
          "clothing of slow fire not burning",
          "coat of liquid mercury held still",
          "clothing of deep ocean pressure worn",
          "compass dress and compass coat"
        ]
      },
      "silence vs. impossible sound": {
        "locs": [
          "cathedral filled with fog and birds",
          "opera house submerged in shallow water",
          "room lit by trapped lightning",
          "faces carved in cumulus cloud bank",
          "theatre stage inside a raindrop"
        ],
        "poses": [
          "one speaking words visible as objects",
          "both looking at same point nothing there",
          "arms extended birds flying from fingertips",
          "figure emerging from flat wall surface",
          "both holding opposite ends of broken time"
        ],
        "looks": [
          "silence gown and silence coat",
          "music-notation dress and notation coat",
          "robes of slow smoke held in shape",
          "clothing of woven starlight soft",
          "rain dress and rain coat suspended"
        ]
      }
    },
    "promptPrefix": "Surrealist fine art photograph, dreamlike and impossible, rendered with photographic realism but depicting something that cannot exist — ",
    "promptSuffix": "The impossible element should feel completely natural within the frame. Render with the crisp, hyper-real quality of fine art photography — the surrealism comes from the subject matter, not degraded image quality."
  },
  {
    "id": "underworld",
    "name": "THE UNDERWORLD",
    "sub": "Myth & Shadow",
    "color": "#6633aa",
    "tensions": [
      "living vs. dead",
      "mortal vs. divine",
      "descent vs. return",
      "judgment vs. mercy",
      "light vs. darkness absolute",
      "memory vs. forgetting",
      "love vs. loss eternal",
      "obedience vs. defiance",
      "fear vs. acceptance",
      "human vs. god",
      "bargain vs. surrender",
      "shadow vs. flame",
      "myth vs. truth",
      "hero vs. fate",
      "grief vs. release",
      "known vs. unknown realm",
      "river vs. shore",
      "heaven vs. underworld",
      "cursed vs. redeemed",
      "silence vs. echo"
    ],
    "locs": [
      "river Styx dark water crossing ferry",
      "Hades palace obsidian hall throne",
      "Elysian fields golden light peace",
      "Charon ferry dark river midpoint",
      "Fields of Asphodel pale grey wandering",
      "Tartarus edge looking down abyss",
      "Persephone garden pomegranate tree",
      "Oracle at Delphi smoke chamber below",
      "Orpheus descent path backward",
      "Hero's journey threshold crossing",
      "Dante's inscription gate above",
      "Virgil's guided path dark forest",
      "Egyptian Duat weighing hall scales",
      "Ma'at feather judgement chamber",
      "Norse Helheim mist entrance Hel gate",
      "Valhalla great hall feast",
      "Bifrost bridge approaching end Asgard side",
      "Niflheim frost mist plain",
      "Aztec Mictlan ninth level dark",
      "Xibalba Mayan lords' hall",
      "Japanese Yomi dark world descent",
      "Buddhist hell realms border",
      "Chinese Diyu court first judgement",
      "Ten Kings of Hell court formal",
      "Hindu Naraka gate boundary",
      "Bardo Tibetan intermediate state mist",
      "Celtic Tir na nÓg island approach",
      "Annwn Welsh otherworld entrance",
      "Slavic Nav dark world fog",
      "Inuit Adlivun cold underworld",
      "Yoruba underworld crossroads",
      "Candomblé spirit world threshold",
      "Vodou spirit world intersection",
      "New Orleans cemetery midnight",
      "Mexican Day of Dead altar approach",
      "Ofrenda marigold path",
      "Guatemalan cemetery coloured tombs",
      "Bolivian Ñatitas festival skull ceremony",
      "Peruvian Pachamama offering ground",
      "Andean sacred mountain spirit",
      "Shinto Yomi crossing Izanagi's retreat",
      "Shinto spirit gate torii path"
    ],
    "poses": [
      "forehead to forehead eyes closed underworld peace",
      "one reaching back other pulls them forward",
      "both looking into dark water below reflection",
      "one kneeling other hand on shoulder solemn",
      "slow walk forward together into dark",
      "one leading other eyes closed trusting",
      "both looking up at what was left behind",
      "one shielding other from the weighing",
      "both at threshold one unwilling one urging",
      "both hands intertwined crossing together",
      "one already across reaching for other",
      "sitting at river's edge waiting both",
      "both looking at own reflection different faces",
      "one reciting other listening eyes closed",
      "both watching boat arriving for them",
      "one paying ferryman other watches carefully",
      "both facing judge or ruler solemn",
      "one defending other speaking for them",
      "both at pomegranate tree temptation moment",
      "one eating one watching too late",
      "both looking back at life left above",
      "both arms wrapped final moment",
      "one dissolving into mist other holds tighter",
      "both walking through field of asphodel",
      "one recognising other long-lost reunion",
      "both at scales heart against feather solemn",
      "one being weighed other watches tense",
      "both stepping into Elysian light",
      "both in moment between life and beyond",
      "both slow walk toward light from dark",
      "one sitting wait other searching for them",
      "found each other deep place both relief",
      "both looking at map of afterlife together",
      "one translating other listens crossing guide"
    ],
    "looks": [
      "black silk draped gown and dark robe each mythological",
      "obsidian beaded gown and dark formal coat each",
      "pomegranate red gown and black coat each Persephone-Hades",
      "pale grey chiffon and ashen robe each",
      "white burial shroud elevated both",
      "black velvet gown and suit both formal dark",
      "silver thread dark gown and coat both",
      "midnight blue draped formal both",
      "deep purple velvet both rich dark",
      "black lace overlay gown and dark suit each",
      "dark floral gown and dark suit botanical each",
      "gold detail dark gown and suit each",
      "pearl-detail dark formal both",
      "bone-white shroud elevated fashion both",
      "charcoal silk formal both",
      "dark moss green formal both",
      "blood-dark red formal both",
      "shadow-black with gold edge both",
      "underworld court formal both ancient",
      "Greek tragedy draped both",
      "Egyptian death rite linen white both",
      "Norse funeral costume both",
      "Aztec death ceremonial layers both",
      "Japanese mourning white formal both",
      "Chinese funeral white formal both",
      "Victorian mourning black full both",
      "Georgian mourning black edged both",
      "contemporary death-positive black both",
      "Dia de Muertos sugar-skull makeup formal each",
      "skull-motif wearable art both",
      "memento mori jewellery visible formal both",
      "marigold detail on dark formal both"
    ],
    "affinities": {
      "living vs. dead": {
        "locs": [
          "river Styx dark water crossing",
          "Charon ferry dark river",
          "cave mouth underworld entrance",
          "dark forest path no light",
          "stone bridge over dark chasm"
        ],
        "poses": [
          "one reaching back other pulls forward",
          "one stepping forward other holding back",
          "one turning back other waits",
          "forehead to forehead eyes closed",
          "eyes closed leaning toward each other"
        ],
        "looks": [
          "pale grey chiffon gown and ashen robe",
          "bone-white gown and pale formal layers",
          "ghost-white layers and dark shadow coat each",
          "Elysian white gown and white robe each",
          "pale silk and dark silk contrast layers each"
        ]
      },
      "mortal vs. divine": {
        "locs": [
          "judgment hall scales weighing",
          "Persephone pomegranate throne",
          "Hades palace obsidian hall",
          "vast hall pillars torch shadows",
          "throne room dark gold accents"
        ],
        "poses": [
          "one kneeling other hand on shoulder",
          "both arms raised dramatic divine scale",
          "both on knees facing each other",
          "arms wide both facing vast space",
          "dramatic arms wide mirrored pose"
        ],
        "looks": [
          "gold leaf crown dark silk and formal gold-trim coat",
          "Persephone floral crown dark dress and Hades dark suit",
          "crown of shadows gown and robe each",
          "dark velvet gown gold-trim and coat each",
          "Elysian gold crown white layers each"
        ]
      },
      "descent vs. return": {
        "locs": [
          "Orpheus descent stone steps",
          "cave mouth underworld entrance",
          "dark forest path no light",
          "stone bridge over dark chasm",
          "ferryman dock stone steps worn"
        ],
        "poses": [
          "one leading other through dark passage",
          "slow walk forward together into dark",
          "one stepping forward other holding back",
          "one turning back other waits",
          "walking hand in hand arms swaying"
        ],
        "looks": [
          "dark velvet layered gown and velvet coat",
          "ash-grey layered gown and dark layered robe",
          "ancient draped linen gown and robe each",
          "river-dark silk layers and dark draped coat",
          "dark mythic layers embroidered each"
        ]
      },
      "judgment vs. mercy": {
        "locs": [
          "judgment hall scales weighing",
          "Egyptian Duat weighing hall",
          "bronze doors of Tartarus sealed",
          "throne dais obsidian steps",
          "throne room dark gold accents"
        ],
        "poses": [
          "both hands clasped prayer or plea",
          "one kneeling other hand on shoulder",
          "both seated back to back solemn",
          "seated face to face close",
          "both frozen looking same point"
        ],
        "looks": [
          "obsidian beaded gown and dark formal coat",
          "dark brocade gown and matching coat",
          "ancient Greek chiton dark draped each",
          "dark embroidered gown and embroidered dark coat",
          "Hades dark formal layers each"
        ]
      },
      "light vs. darkness absolute": {
        "locs": [
          "Elysian fields golden light",
          "Elysian feast long table golden",
          "meadow of heroes golden dusk",
          "crystal cavern underground lit",
          "torchlit corridor carved stone"
        ],
        "poses": [
          "both looking into torchlight faces lit",
          "both silhouette against dark light",
          "one shielding other from shadow",
          "forehead to forehead eyes closed",
          "cheek to cheek looking same direction"
        ],
        "looks": [
          "torch gold silk gown and dark draped coat",
          "torchlit amber gown and amber-trim coat",
          "Elysian white gown and white robe each",
          "Elysian gold crown white layers each",
          "pale flowing gown and dark contrast coat"
        ]
      },
      "memory vs. forgetting": {
        "locs": [
          "Lethe river forgetting edge",
          "Fields of Asphodel pale grey",
          "ashen plain lost souls wandering",
          "shadow realm mist and form",
          "underground lake black still"
        ],
        "poses": [
          "one traces other's face gently",
          "both looking into dark water below",
          "face cupped in both hands close",
          "forehead to forehead hands on each other's face",
          "one lying other kneeling beside"
        ],
        "looks": [
          "pale grey chiffon gown and ashen robe",
          "shadow-grey draped gown and grey coat",
          "ashen lace gown and ash formal coat",
          "river-dark silk layers and dark draped coat",
          "ash-grey layered gown and dark layered robe"
        ]
      },
      "love vs. loss eternal": {
        "locs": [
          "Orpheus descent stone steps",
          "Elysian fields golden light",
          "pomegranate grove underworld",
          "pomegranate orchard dark light",
          "Persephone pomegranate throne"
        ],
        "poses": [
          "forehead to forehead eyes closed",
          "dramatic dip one supporting other",
          "face cupped in both hands close",
          "noses touching about to kiss",
          "eyes closed leaning toward each other"
        ],
        "looks": [
          "Persephone floral crown dark dress and Hades dark suit",
          "pomegranate red gown and black coat",
          "dark floral gown and dark botanical coat",
          "Persephone spring crown dark gown and formal coat",
          "black floral crown dark silk and dark suit each"
        ]
      },
      "obedience vs. defiance": {
        "locs": [
          "Cerberus gate three-headed",
          "bronze doors of Tartarus sealed",
          "throne dais obsidian steps",
          "Hades palace obsidian hall",
          "bone archway ancient towering"
        ],
        "poses": [
          "back to back standing guard",
          "one stepping forward other holding back",
          "dramatic arms wide mirrored pose",
          "arms wide both facing vast space",
          "both silhouette against dark light"
        ],
        "looks": [
          "crimson goddess gown and dark warrior coat",
          "dark embroidered gown and embroidered dark coat",
          "obsidian beaded gown and dark formal coat",
          "black silk draped gown and dark robe",
          "deep purple silk gown and purple coat"
        ]
      },
      "fear vs. acceptance": {
        "locs": [
          "Tartarus fire pit depths",
          "burning plain Tartarus edge",
          "river Phlegethon fire current",
          "Cerberus gate three-headed",
          "cave mouth underworld entrance"
        ],
        "poses": [
          "one shielding other from shadow",
          "both frozen looking same point",
          "one collapsed other supporting",
          "slow walk forward together into dark",
          "hug from behind arms wrapped swaying"
        ],
        "looks": [
          "dark velvet layered gown and velvet coat",
          "black lace overlay gown and dark formal suit",
          "midnight blue silk and midnight coat each",
          "ash-grey layered gown and dark layered robe",
          "shadow-grey draped gown and grey coat"
        ]
      },
      "human vs. god": {
        "locs": [
          "judgment hall scales weighing",
          "vast hall pillars torch shadows",
          "dark cathedral underworld scale",
          "stone amphitheatre underworld",
          "ancient mosaic floor mythic"
        ],
        "poses": [
          "one kneeling other hand on shoulder",
          "both arms raised dramatic divine scale",
          "dramatic arms wide mirrored pose",
          "both on knees facing each other",
          "arms wide both facing vast space"
        ],
        "looks": [
          "gold leaf crown dark silk and formal gold-trim coat",
          "Persephone floral crown dark dress and Hades dark suit",
          "crown of shadows gown and robe each",
          "ancient Greek chiton dark draped each",
          "dark mythic layers embroidered each"
        ]
      },
      "bargain vs. surrender": {
        "locs": [
          "Charon ferry dark river",
          "ferryman dock stone steps worn",
          "obsidian mirror reflection pool",
          "judgment hall scales weighing",
          "dark throne two seats carved"
        ],
        "poses": [
          "hands outstretched reaching toward each other",
          "both hands clasped prayer or plea",
          "one lifting veil or cloth from other",
          "seated face to face close",
          "both reaching same direction"
        ],
        "looks": [
          "obsidian beaded gown and dark formal coat",
          "black silk draped gown and dark robe",
          "Hades dark formal layers each",
          "dark brocade gown and matching coat",
          "pale silk and dark silk contrast layers each"
        ]
      },
      "shadow vs. flame": {
        "locs": [
          "river Phlegethon fire current",
          "Tartarus fire pit depths",
          "torchlit corridor carved stone",
          "temple of the dead torchlit",
          "burning plain Tartarus edge"
        ],
        "poses": [
          "both looking into torchlight faces lit",
          "both silhouette against dark light",
          "one shielding other from shadow",
          "dramatic dip one supporting other",
          "back to back standing guard"
        ],
        "looks": [
          "torch gold silk gown and dark draped coat",
          "torchlit amber gown and amber-trim coat",
          "crimson goddess gown and dark warrior coat",
          "pomegranate red gown and black coat",
          "dark velvet gown gold-trim and coat each"
        ]
      },
      "myth vs. truth": {
        "locs": [
          "ancient Greek temple ruin moonlit",
          "ancient mosaic floor mythic",
          "stone amphitheatre underworld",
          "Mayan Xibalba stone labyrinth",
          "Egyptian Duat weighing hall"
        ],
        "poses": [
          "both looking up at vast dark above",
          "both seated back to back solemn",
          "one whispering in other's ear",
          "one pointing into darkness other follows gaze",
          "tandem walk one step behind hands linked"
        ],
        "looks": [
          "ancient Greek chiton dark draped each",
          "dark mythic layers embroidered each",
          "ancient draped linen gown and robe each",
          "Styx dark layered robes each",
          "dark embroidered gown and embroidered dark coat"
        ]
      },
      "hero vs. fate": {
        "locs": [
          "Sisyphus boulder slope endless",
          "Orpheus descent stone steps",
          "labyrinth stone walls narrow",
          "bone archway ancient towering",
          "dark forest path no light"
        ],
        "poses": [
          "one reaching back other pulls forward",
          "slow walk forward together into dark",
          "one leading other through dark passage",
          "walking hand in hand arms swaying",
          "back to back standing guard"
        ],
        "looks": [
          "crimson goddess gown and dark warrior coat",
          "dark embellished gown and embellished coat each",
          "dark brocade gown and matching coat",
          "obsidian beaded gown and dark formal coat",
          "black silk draped gown and dark robe"
        ]
      },
      "grief vs. release": {
        "locs": [
          "Elysian fields golden light",
          "Lethe river forgetting edge",
          "meadow of heroes golden dusk",
          "ashen plain lost souls wandering",
          "pomegranate grove underworld"
        ],
        "poses": [
          "one lying other kneeling beside",
          "one collapsed other supporting",
          "forehead to forehead eyes closed",
          "face cupped in both hands close",
          "hug from behind arms wrapped swaying"
        ],
        "looks": [
          "mourning veil dark gown and formal dark suit",
          "pale grey chiffon gown and ashen robe",
          "dark floral gown and dark botanical coat",
          "bone-white gown and pale formal layers",
          "ghost-white layers and dark shadow coat each"
        ]
      },
      "known vs. unknown realm": {
        "locs": [
          "cave mouth underworld entrance",
          "shadow realm mist and form",
          "underground lake black still",
          "echo chamber stone vast",
          "dark forest path no light"
        ],
        "poses": [
          "both looking into dark water below",
          "one pointing into darkness other follows gaze",
          "both frozen looking same point",
          "slow walk forward together into dark",
          "both mid-step suspended"
        ],
        "looks": [
          "shadow-grey draped gown and grey coat",
          "ash-grey layered gown and dark layered robe",
          "river-dark silk layers and dark draped coat",
          "dark mythic layers embroidered each",
          "Styx dark layered robes each"
        ]
      },
      "river vs. shore": {
        "locs": [
          "river Styx dark water crossing",
          "Charon ferry dark river",
          "river Phlegethon fire current",
          "Lethe river forgetting edge",
          "river delta underworld branching"
        ],
        "poses": [
          "both looking into dark water below",
          "one reaching back other pulls forward",
          "one pointing into darkness other follows gaze",
          "walking hand in hand arms swaying",
          "one turning back other waits"
        ],
        "looks": [
          "river goddess dark blues and matching coat",
          "Styx dark layered robes each",
          "obsidian silk and dark wool coat each",
          "river-dark silk layers and dark draped coat",
          "dark pleated silk gown and pleated dark coat"
        ]
      },
      "heaven vs. underworld": {
        "locs": [
          "Elysian fields golden light",
          "Elysian feast long table golden",
          "meadow of heroes golden dusk",
          "Tartarus fire pit depths",
          "burning plain Tartarus edge"
        ],
        "poses": [
          "arms wide both facing vast space",
          "both looking up at vast dark above",
          "dramatic arms wide mirrored pose",
          "both silhouette against dark light",
          "slow dance spin soft twirl"
        ],
        "looks": [
          "pale silk and dark silk contrast layers each",
          "Elysian white gown and white robe each",
          "Elysian gold crown white layers each",
          "ghost-white layers and dark shadow coat each",
          "pale flowing gown and dark contrast coat"
        ]
      },
      "cursed vs. redeemed": {
        "locs": [
          "Sisyphus boulder slope endless",
          "Tantalus water pool edge",
          "bronze doors of Tartarus sealed",
          "Elysian fields golden light",
          "meadow of heroes golden dusk"
        ],
        "poses": [
          "one kneeling other hand on shoulder",
          "both hands clasped prayer or plea",
          "one collapsed other supporting",
          "forehead to forehead eyes closed",
          "noses touching about to kiss"
        ],
        "looks": [
          "mourning veil dark gown and formal dark suit",
          "dark floral gown and dark botanical coat",
          "Elysian gold crown white layers each",
          "Persephone spring crown dark gown and formal coat",
          "pale flowing gown and dark contrast coat"
        ]
      },
      "silence vs. echo": {
        "locs": [
          "echo chamber stone vast",
          "underground lake black still",
          "vast hall pillars torch shadows",
          "stone amphitheatre underworld",
          "dark cathedral underworld scale"
        ],
        "poses": [
          "both seated back to back solemn",
          "both still facing each other",
          "both looking into dark water below",
          "both frozen looking same point",
          "side by side hands linked solemn"
        ],
        "looks": [
          "shadow-grey draped gown and grey coat",
          "midnight blue silk and midnight coat each",
          "deep indigo silk gown and indigo coat",
          "Hades dark formal layers each",
          "deep purple silk gown and purple coat"
        ]
      }
    },
    "promptPrefix": "Mythological fine art, painterly and dramatic, the visual language of classical mythology or dark fantasy — ",
    "promptSuffix": "Render with the dramatic, painterly quality of mythological art: deep atmospheric lighting, symbolic visual elements, the subjects feel timeless and archetypal rather than contemporary. Draw on the visual language of Gustave Moreau, John William Waterhouse or contemporary dark fantasy photography."
  },
  {
    "id": "storm",
    "name": "THE STORM",
    "sub": "Before, During & the Silence After",
    "color": "#4a4a6a",
    "tensions": [
      "before vs. after",
      "calm vs. chaos",
      "the warning vs. the arrival",
      "shelter vs. exposure",
      "power vs. fragility",
      "the eye vs. the edge",
      "held vs. broken",
      "the sky vs. the earth",
      "inevitable vs. preventable",
      "the storm within vs. the storm without"
    ],
    "affinities": {
      "before vs. after": {
        "locs": [
          "pre-storm sky bruised purple green light eerie flat",
          "tornado alley Great Plains storm wall approaching vast",
          "North Sea storm wave lighthouse spray dramatic"
        ],
        "poses": [
          "both watching storm wall approach Great Plains vast sky",
          "both lighthouse storm spray sea dramatic"
        ],
        "looks": [
          "storm watcher practical layers wind each",
          "caught in storm soaked dramatic each"
        ]
      }
    },
    "locs": [
      "pre-storm sky bruised purple green light eerie flat calm",
      "tornado alley Great Plains storm wall approaching vast",
      "North Sea storm wave lighthouse spray dramatic",
      "tropical storm eye wall approach Caribbean coast",
      "Scottish moor storm approaching dramatic light shafts",
      "Turner painting storm sea ship dramatic",
      "storm aftermath debris calm eerie light",
      "lightning strike plain night dramatic single bolt",
      "monsoon India storm wall approaching dust first",
      "storm light dramatic shafts through cloud dramatic countryside",
      "Patagonia storm mountain dramatic wind bent tree",
      "Norwegian coast storm fjord dramatic wave",
      "Great Plains supercell storm rotating vast sky",
      "storm tide surge coastal town dramatic",
      "Alpine storm lightning peak dramatic",
      "Australian outback storm red dust approaching wall",
      "storm drain rushing water urban aftermath",
      "storm at sea container ship wave dramatic",
      "Yorkshire moor storm approaching Brontë register",
      "Mediterranean storm dramatic cliff wave spray",
      "Great Lakes storm grey vast water horizon",
      "storm shelter doorway waiting dramatic light",
      "hurricane eye approach coast dramatic satellite",
      "winter storm blizzard white out reduced visibility",
      "dust storm haboob Arizona wall approaching",
      "storm electricity pylon lightning dramatic",
      "Cornish coast storm wave dramatic heritage",
      "storm abandoned car park flooding dramatic",
      "typhoon approach Hong Kong dramatic sky",
      "storm rainbow aftermath dramatic light field"
    ],
    "poses": [
      "both watching storm wall approach vast sky behind",
      "both storm spray lighthouse dramatic sea",
      "both pre-storm light eerie dramatic pause",
      "both caught mid-storm wind and rain dramatic",
      "both storm aftermath calm eerie light around",
      "both running from storm approaching",
      "both sheltering doorway storm outside dramatic",
      "both looking up at storm sky dramatic",
      "both lightning illuminated dramatic night flash",
      "both storm wind dramatic lean against",
      "both watching storm drain rush past feet",
      "both storm beach wave dramatic behind",
      "both emerging after storm calm dramatic",
      "both in eye of storm brief calm dramatic",
      "both pre-storm field light dramatic shafts",
      "both storm debris aftermath walking through",
      "both dramatic storm light portrait dramatic",
      "both blizzard white out barely visible",
      "both storm tide flooding dramatic wading",
      "both watching distant lightning plain night"
    ],
    "looks": [
      "storm caught soaked dramatic each",
      "storm watcher practical layers wind each",
      "dramatic coat storm wind dramatic each",
      "oilskin waterproof storm coastal each",
      "dramatic dark clothes storm light each",
      "exposed to elements simple each storm",
      "storm practical outdoors each",
      "dramatic formal wrong weather each incongruous",
      "storm ready practical each technical",
      "simple exposed storm dramatic each"
    ],
    "promptSuffix": "Colour grade: the specific drama of storm light — bruised purple-green pre-storm, lightning white flash, aftermath golden eerie. Turner at sea. The sky is the subject."
  },
  {
    "id": "underground",
    "name": "THE UNDERGROUND",
    "sub": "Subway, Tunnel & the City Beneath",
    "color": "#2a2a4a",
    "tensions": [
      "above vs. below",
      "public vs. private",
      "seen vs. invisible",
      "moving vs. still",
      "the commute vs. the life",
      "the city vs. what it hides",
      "alone in a crowd",
      "fast vs. slow",
      "the system vs. the individual",
      "surface vs. depth"
    ],
    "affinities": {
      "above vs. below": {
        "locs": [
          "1970s New York subway graffiti car moving night",
          "Paris Métro Art Nouveau station 1960s",
          "London Tube Blitz shelter 1940s platform"
        ],
        "poses": [
          "both 1970s NYC subway graffiti car night moving",
          "both Paris Métro 1960s platform waiting"
        ],
        "looks": [
          "1970s New York street casual each subway",
          "Paris 1960s casual French each Métro"
        ]
      }
    },
    "locs": [
      "1970s New York subway graffiti covered car moving",
      "Paris Métro Art Nouveau iron station Abbesses",
      "London Tube platform 1940s Blitz shelter night",
      "Tokyo rush hour platform press of people",
      "Moscow Metro marble hall chandelier Stalin",
      "Berlin U-Bahn East West meeting point",
      "Chicago elevated train curve city above",
      "Hong Kong MTR night crowd neon",
      "São Paulo Metro rush hour colour",
      "New York City Hall station abandoned ghost",
      "Berlin bunker tunnel 1945 historic",
      "Paris catacombs skull lined tunnel",
      "London Tube 1940s carriage wartime",
      "Moscow Metro escalator long marble",
      "New York subway platform late night empty",
      "Tokyo station corridor endless wayfinding",
      "Chicago riveted steel elevated track exterior",
      "Berlin U5 DDR era station concrete",
      "Paris Métro rubber tyres 1960s modern",
      "San Francisco BART tube underwater bay"
    ],
    "poses": [
      "both 1970s NYC subway graffiti moving car night",
      "both Paris Métro platform waiting 1960s",
      "both London Tube 1940s shelter platform",
      "both Tokyo rush hour press impossible",
      "both Moscow Metro marble hall escalator",
      "both late night subway platform empty",
      "both Berlin U-Bahn Cold War crossing point",
      "both elevated track exterior city below Chicago",
      "both Paris catacombs tunnel skull lined",
      "both Tokyo station corridor endless wayfinding"
    ],
    "looks": [
      "1970s New York street casual each subway era",
      "Paris 1960s French casual each Métro",
      "London 1940s wartime practical each",
      "Tokyo office worker suit each rush hour",
      "Moscow 1950s Soviet formal each Metro",
      "Berlin East West crossing practical each",
      "Chicago 1920s elevated era each",
      "contemporary transit casual each modern",
      "night subway late casual each tired",
      "commuter formal work clothes each"
    ],
    "promptSuffix": "Colour grade: 1970s NYC fluorescent and graffiti, Paris Métro amber iron, London Tube wartime, Moscow marble chandelier."
  },
  {
    "id": "expedition",
    "name": "THE EXPEDITION",
    "sub": "Lost Worlds, Impossible Geography & the Edge of the Map",
    "color": "#1a6a4a",
    "tensions": [
      "known vs. unknown",
      "discovery vs. intrusion",
      "the map vs. the territory",
      "the creature vs. the human",
      "ancient vs. present",
      "myth vs. reality",
      "the explorer vs. the explored",
      "wonder vs. danger",
      "found vs. lost",
      "the impossible vs. the real"
    ],
    "affinities": {
      "known vs. unknown": {
        "locs": [
          "bioluminescent cave impossible blue vast underground",
          "lost temple jungle consumed impossible vegetation",
          "giant creature footprint fresh impossible scale"
        ],
        "poses": [
          "both bioluminescent cave blue light impossible wonder",
          "both lost temple jungle consumed finding"
        ],
        "looks": [
          "expedition practical worn each discovery",
          "explorer Victorian impossible location each"
        ]
      }
    },
    "locs": [
      "bioluminescent cave impossible blue vast underground",
      "bioluminescent sea bay night blue fire water",
      "bioluminescent forest floor impossible blue mushroom",
      "bioluminescent waterfall cave impossible beauty",
      "lost temple jungle consumed impossible vegetation",
      "sunken city coral reef impossible underwater",
      "ancient city cloud forest mist impossible",
      "impossible library cave books water inside",
      "underground ocean vast impossible cave vast",
      "crystal cave geode impossible giant interior",
      "floating island chain impossible geology vast",
      "inverted waterfall water goes up impossible",
      "door in cliff face ancient impossible",
      "impossible vertical forest hanging cliff",
      "sky island above cloud vast impossible",
      "underground river cave impossible blue",
      "giant footprint fresh impossible scale jungle",
      "bone structure vast impossible creature ancient",
      "impossible nest vast woven jungle canopy",
      "cave painting moving animated ancient impossible",
      "ancient creature track impossible fresh desert",
      "enormous egg impossible scale discovered",
      "Victorian expedition camp impossible landscape tent",
      "explorer notebook impossible creature sketch",
      "expedition map edge of known world illustrated",
      "Victorian naturalist discovery impossible creature",
      "deep sea vent impossible creature thermal",
      "cave diving impossible blue darkness vast",
      "polar expedition impossible light phenomenon",
      "high altitude impossible landscape oxygen thin",
      "volcano crater impossible approach dramatic",
      "ancient cave impossible size interior vast"
    ],
    "poses": [
      "both bioluminescent cave blue wonder impossible vast",
      "both lost temple jungle consumed discovering",
      "both impossible giant footprint scale found",
      "both crystal cave interior impossible wonder",
      "both floating island impossible vast below",
      "both sunken city coral impossible wonder",
      "both ancient impossible creature bone structure vast",
      "both Victorian expedition camp impossible landscape",
      "both cave diving impossible blue dark vast",
      "both sky island above cloud impossible",
      "both impossible nest found jungle canopy",
      "both deep sea vent impossible creature watching",
      "both ancient cave painting moving impossible",
      "both inverted waterfall impossible wonder",
      "both impossible underground ocean vast cave",
      "both enormous egg impossible discovery",
      "both bioluminescent sea night blue fire",
      "both edge of map illustrated impossible",
      "both impossible vertical forest cliff hanging",
      "both volcanic crater impossible approach"
    ],
    "looks": [
      "Victorian expedition practical impossible location each",
      "explorer worn practical each discovery",
      "expedition technical contemporary each wonder",
      "naturalist practical each field impossible",
      "cave diver wetsuit impossible blue each",
      "deep sea diving suit impossible pressure each",
      "polar expedition extreme gear each",
      "high altitude technical each thin air",
      "jungle expedition practical each worn",
      "expedition simple layers each discovery"
    ],
    "promptPrefix": "Documentary exploration photography at the edge of what is possible — impossible geography, lost worlds, fantastical natural phenomena, the sense of discovery of something that should not exist — ",
    "promptSuffix": "The world in this image should feel like it should not exist: bioluminescent, impossible in scale, ancient beyond reckoning, or simply too beautiful to be real. The subjects are the witnesses. Their scale against the impossible makes the image."
  },
  {
    "id": "rooftop",
    "name": "THE ROOFTOP",
    "sub": "Havana Lines, Tokyo Neon & the City from Above",
    "color": "#2a6a5a",
    "tensions": [
      "above vs. below",
      "escape vs. city",
      "private vs. public height",
      "the city vs. the person on it",
      "seen from above vs. unseen",
      "the roof vs. the world beneath",
      "freedom vs. exposure",
      "the edge vs. the centre",
      "dawn vs. dusk from above",
      "small vs. vast city spread"
    ],
    "affinities": {
      "above vs. below": {
        "locs": [
          "Havana rooftop washing lines crumbling colonial city below",
          "Tokyo neon rooftop water tower city spread night",
          "New York water tower rooftop Manhattan skyline dawn"
        ],
        "poses": [
          "both Havana rooftop washing lines colonial city below",
          "both Tokyo neon rooftop water tower night city"
        ],
        "looks": [
          "Havana casual rooftop heat each",
          "Tokyo rooftop street fashion neon each"
        ]
      }
    },
    "locs": [
      "Havana rooftop washing lines crumbling colonial city below",
      "Havana rooftop 1950s Chevrolet visible below dawn",
      "Havana rooftop Malecón sea beyond crumbling beautiful",
      "Tokyo neon rooftop water tank city spread night dense",
      "Hong Kong cage home rooftop dense city beyond dramatic",
      "Seoul rooftop Han River beyond night neon",
      "Osaka rooftop dense city night neon sign",
      "New York water tower rooftop Manhattan skyline dawn",
      "Brooklyn rooftop Manhattan bridge view sunset",
      "New York rooftop 1970s vintage city behind",
      "New York rooftop party night skyline",
      "Paris Haussmann rooftop chimney zinc dawn golden",
      "Paris rooftop Eiffel visible golden light",
      "Paris rooftop 6th arrondissement zinc slate dawn",
      "Lisbon Alfama rooftop tile fado city below",
      "Porto rooftop azulejo tile city below river",
      "Rome rooftop terracotta dome city eternal",
      "Naples rooftop Vesuvius beyond city below",
      "Athens rooftop Acropolis visible dramatic dusk",
      "Istanbul rooftop mosque minaret city both sides",
      "Detroit abandoned factory rooftop city below dramatic",
      "Chicago water tower rooftop industrial city",
      "São Paulo rooftop favela meets glass tower",
      "Beirut rooftop bullet holes city rebuild",
      "Cairo rooftop minaret city ancient sprawl",
      "Mumbai rooftop slum city beyond contrast",
      "rooftop garden city dawn first light plants",
      "rooftop pool city below luxury night reflection",
      "rooftop helipad empty city spread dramatic",
      "rooftop solar panels practical city beyond"
    ],
    "poses": [
      "both Havana rooftop washing lines colonial city below",
      "both Tokyo neon water tank city night",
      "both Paris chimney zinc rooftop dawn golden",
      "both New York water tower Manhattan skyline",
      "both Istanbul minaret rooftop city both sides",
      "both Rome terracotta rooftop eternal city",
      "both Barcelona rooftop Gaudí visible dramatic",
      "both Lisbon rooftop tile city fado below",
      "both Detroit rooftop abandoned dramatic city",
      "both Seoul rooftop Han River night neon",
      "both rooftop edge city vast below dramatic",
      "both rooftop garden dawn city waking",
      "both rooftop pool night city reflection luxury",
      "both looking down on city street far below",
      "both rooftop back to city looking at each other",
      "both rooftop watching city sunrise",
      "both rooftop dramatic wind city spread",
      "both rooftop simple moment city noise below",
      "both rooftop night cold city bright below",
      "both rooftop dawn city waking around them"
    ],
    "looks": [
      "Havana casual summer rooftop heat each",
      "Tokyo street fashion rooftop neon each",
      "Paris rooftop chic morning each dawn",
      "New York rooftop casual city view each",
      "Istanbul casual rooftop city each",
      "dramatic coat rooftop wind each",
      "simple casual rooftop city each",
      "rooftop party dressed up each night",
      "practical urban each rooftop exploration",
      "simple dawn rooftop casual each"
    ],
    "promptSuffix": "Colour grade: specific to each city rooftop — Havana ochre and decay, Tokyo neon dense, Paris zinc dawn gold, New York water tower dramatic. The city below is always part of the frame."
  },
  {
    "id": "circus",
    "name": "THE CIRCUS",
    "sub": "Big Top, Soviet Ring & the Art of Impossible",
    "color": "#c41464",
    "tensions": [
      "performance vs. reality",
      "risk vs. safety",
      "applause vs. silence",
      "the act vs. the life",
      "grace vs. danger",
      "spectacle vs. ordinary",
      "the big top vs. the world outside",
      "peak vs. descent",
      "together vs. alone in the ring",
      "the crowd vs. the performer"
    ],
    "affinities": {
      "performance vs. reality": {
        "locs": [
          "Soviet state circus ring spotlight 1960s",
          "Depression-era circus big top sawdust 1930s",
          "Cirque du Soleil contemporary rig dramatic"
        ],
        "poses": [
          "both in Soviet circus ring red spotlight 1960s",
          "both Depression-era circus performers 1930s dramatic"
        ],
        "looks": [
          "Soviet circus costume acrobat 1960s each",
          "Depression-era circus costume 1930s worn each"
        ]
      }
    },
    "locs": [
      "Soviet state circus ring red spotlight 1960s",
      "Depression-era big top sawdust 1930s",
      "Cirque du Soleil contemporary rig dramatic",
      "Moscow State Circus dressing room backstage 1970s",
      "Barnum Bailey travelling circus poster backdrop 1920s",
      "circus ring empty between shows sawdust",
      "wire act high above no net ring below",
      "flying trapeze platform height big top",
      "Soviet circus animal trainer ring 1960s",
      "1950s Italian circus Fellini register outdoor",
      "circus train car siding dawn performers",
      "big top exterior night lights",
      "clown alley backstage dressing tables",
      "circus parade street 1920s elephants",
      "Depression water for elephants register 1930s",
      "circus ring single spotlight performer dust",
      "big top collapsed in wind aftermath",
      "Moscow circus school practice hall",
      "circus wagon painted carved travelling",
      "aerial silks rig warehouse rehearsal contemporary"
    ],
    "poses": [
      "both Soviet circus ring spotlight red dramatic 1960s",
      "both Depression-era performers 1930s wire act",
      "both Cirque contemporary rig dramatic height",
      "both in ring after act sawdust exhausted",
      "both big top exterior night lights behind",
      "both circus dressing room backstage mirror",
      "both on wire platform height below visible",
      "both circus parade 1920s street",
      "both aerial silks rehearsal warehouse",
      "both clown alley backstage before act"
    ],
    "looks": [
      "Soviet circus costume acrobat sequin 1960s each",
      "Depression-era circus worn costume 1930s each",
      "Cirque du Soleil contemporary dramatic each",
      "Moscow circus school training wear 1970s each",
      "1920s circus parade costume elaborate each",
      "big top clown costume classic each",
      "trapeze artist sequin dramatic each",
      "circus ringmaster top hat coat each",
      "contortionist costume flexible each",
      "tightrope walker minimal balanced each"
    ],
    "promptSuffix": "Colour grade: big top red and gold, Soviet poster primary, Depression sepia and dust, single ring spotlight darkness."
  },
  {
    "id": "cctv",
    "name": "THE CCTV",
    "sub": "Caught, Candid & Gloriously Human",
    "color": "#5a5a3a",
    "tensions": [
      "caught vs. private",
      "the camera vs. the moment",
      "seen vs. unaware",
      "public vs. private",
      "the record vs. the feeling",
      "surveilled vs. free",
      "the accidental vs. the posed",
      "the mundane vs. the extraordinary",
      "the system vs. the human",
      "watched vs. forgotten"
    ],
    "affinities": {
      "caught vs. private": {
        "locs": [
          "casino CCTV overhead roulette table caught mid-celebration",
          "supermarket CCTV caught spontaneous dance aisle midnight",
          "ATM CCTV night proposal outside caught"
        ],
        "poses": [
          "both casino CCTV overhead mid-celebration genuine",
          "both supermarket CCTV caught dancing midnight aisle"
        ],
        "looks": [
          "casino night out each caught genuine",
          "supermarket casual midnight each"
        ]
      }
    },
    "locs": [
      "casino CCTV overhead roulette table win celebration genuine",
      "casino corridor CCTV caught running toward exit laughing",
      "casino elevator CCTV caught mid-argument resolved",
      "supermarket CCTV midnight spontaneous dance empty aisle",
      "supermarket CCTV proposal breakfast cereal aisle",
      "supermarket CCTV caught sharing earphones frozen food",
      "ATM CCTV night proposal caught genuine unposed",
      "street corner CCTV caught reunion unexpected",
      "petrol station CCTV caught slow dance forecourt night",
      "bus stop CCTV caught first kiss waiting",
      "taxi dashcam caught back seat conversation genuine",
      "underground CCTV platform caught missing train laughing",
      "airport CCTV arrivals hall reunion genuine caught",
      "train station CCTV platform caught unexpected meeting",
      "bus CCTV upper deck caught secret told",
      "ferry CCTV deck caught storm reaction genuine",
      "hospital corridor CCTV good news received genuine",
      "school corridor CCTV caught celebration exam result",
      "office CCTV lift caught honest conversation",
      "library CCTV caught laughing inappropriate",
      "street CCTV fishmonger caught proposal over ice",
      "market CCTV caught argument over price genuine",
      "park CCTV caught spontaneous picnic rain coming",
      "beach CCTV lifeguard station caught sunset watching",
      "gym CCTV caught giving up gracefully",
      "café CCTV caught reading same book at same time",
      "cinema CCTV foyer caught reaction to film genuine",
      "bookshop CCTV caught same book reached for same time",
      "museum CCTV caught asleep in gallery same painting",
      "laundrette CCTV 3am caught genuine conversation"
    ],
    "poses": [
      "CCTV overhead angle both caught mid-genuine-celebration casino",
      "CCTV fisheye both caught dancing supermarket midnight",
      "CCTV high angle both caught reunion unexpected genuine",
      "CCTV dashcam both caught back seat conversation honest",
      "CCTV platform both caught missing train laughing",
      "CCTV airport arrivals both caught genuine reunion",
      "CCTV corner both caught first kiss unposed genuine",
      "CCTV overhead both caught spontaneous dance petrol station",
      "CCTV lift both caught honest conversation nobody watching",
      "CCTV hospital both caught good news genuine reaction",
      "CCTV high angle both unaware of camera natural",
      "CCTV fisheye both mid-argument that just resolved",
      "CCTV overhead both caught sharing something secret",
      "CCTV street both caught moment of pure joy",
      "CCTV angle both caught helping stranger genuine",
      "CCTV both caught laughing inappropriate quiet place",
      "CCTV both caught reading same page same time",
      "CCTV both caught same impulse same moment",
      "CCTV both caught sleeping same gallery bench",
      "CCTV both caught mid-proposal ordinary location"
    ],
    "looks": [
      "casino night out each genuine caught",
      "supermarket casual midnight each real",
      "airport arrival clothes each travel worn genuine",
      "office work clothes each caught off guard",
      "hospital visitor clothes each emotional genuine",
      "street casual each caught unaware",
      "gym clothes each caught giving up",
      "date night each caught in genuine moment",
      "casual everyday each CCTV reality",
      "commuter clothes each caught human moment"
    ],
    "promptPrefix": "Security camera or dashcam footage aesthetic — overhead or wide angle, slightly grainy, timestamp in corner optional, the subjects completely unaware they are being filmed — ",
    "promptSuffix": "This is candid surveillance footage of a genuinely human moment. The subjects do not know they are being filmed. The camera catches something real — joy, love, argument resolved, spontaneous dance, unexpected reunion. Grainy, overhead, wide angle, real."
  },
  {
    "id": "studio",
    "name": "THE STUDIO",
    "sub": "Light, Form & Intention",
    "color": "#8a8a8a",
    "tensions": [
      "composed vs. candid",
      "power vs. vulnerability",
      "distance vs. closeness",
      "formal vs. intimate",
      "performance vs. presence",
      "controlled vs. unravelling",
      "strength vs. tenderness",
      "seen vs. hidden",
      "stillness vs. tension",
      "classical vs. raw",
      "surface vs. depth",
      "together vs. alone in the same frame",
      "eye contact vs. avoidance",
      "dressed vs. undressed",
      "public self vs. private self",
      "confidence vs. doubt",
      "connection vs. isolation",
      "beauty vs. truth",
      "light vs. shadow",
      "past vs. present"
    ],
    "affinities": {
      "composed vs. candid": {
        "locs": [
          "seamless white infinity curve studio",
          "grey graduated backdrop",
          "black velvet sweep"
        ],
        "poses": [
          "formally posed hands clasped both upright",
          "mid-laugh caught between takes both unguarded",
          "one adjusting other's collar before take"
        ],
        "looks": [
          "black tie both formal",
          "white shirt open collar both relaxed formal",
          "matching grey knitwear each"
        ]
      },
      "light vs. shadow": {
        "locs": [
          "single key light setup black background",
          "Rembrandt three-quarter lighting neutral grey",
          "hard side light white background split"
        ],
        "poses": [
          "both turned toward single light source",
          "one in light one in shadow facing each other",
          "profile both lit from same side"
        ],
        "looks": [
          "all black each tonal monochrome",
          "all white each tonal monochrome",
          "charcoal and black tonal both dark"
        ]
      }
    },
    "locs": [
      "seamless white paper backdrop studio infinity curve",
      "seamless black paper backdrop studio infinity curve",
      "seamless mid-grey paper backdrop studio",
      "seamless warm grey paper backdrop studio",
      "seamless cream paper backdrop studio",
      "seamless pale blush paper backdrop studio",
      "seamless deep charcoal paper backdrop studio",
      "seamless forest green paper backdrop studio",
      "seamless dusty blue paper backdrop studio",
      "seamless burgundy paper backdrop studio",
      "hand-painted grey muslin backdrop studio",
      "hand-painted white-to-dark graduated muslin studio",
      "cream linen textured backdrop studio",
      "dark velvet fabric backdrop studio deep black",
      "raw canvas unpainted backdrop studio neutral",
      "draped silk fabric backdrop studio ivory",
      "mottled hand-painted backdrop studio warm grey",
      "torn edge paper backdrop studio textured white",
      "layered fabric draped backdrop studio improvised dark",
      "painted concrete effect backdrop studio flat grey",
      "bare white plaster studio wall clean",
      "bare off-white plaster studio wall textured",
      "raw concrete studio wall exposed aggregate",
      "whitewashed interior studio wall flat",
      "painted brick interior studio wall white",
      "dark painted studio wall charcoal matte",
      "studio wall with single large window frame practical",
      "studio wall mirror full length floor to ceiling",
      "white painted studio floor with white backdrop seamless",
      "black painted studio floor with black backdrop seamless",
      "polished concrete studio floor with grey backdrop",
      "light wood studio floor with white backdrop",
      "dark wood studio floor with dark backdrop",
      "white studio floor posing platform raised",
      "plain wooden stool studio white backdrop",
      "plain wooden stool studio black backdrop",
      "director's chair canvas studio grey backdrop",
      "mid-century posing chair studio neutral backdrop",
      "chaise longue upholstered studio white backdrop",
      "chaise longue upholstered studio dark backdrop",
      "floor level white studio both seated",
      "floor level black studio both seated",
      "minimal white cube set studio",
      "minimal black plinth set studio",
      "clear perspex block prop studio white backdrop",
      "seamless silver reflective backdrop studio",
      "seamless gold reflective backdrop studio warm",
      "frosted perspex panel backlit studio white glow",
      "coloured gel background studio deep blue",
      "coloured gel background studio deep red"
    ],
    "poses": [
      "both facing camera formal upright hands at sides",
      "both facing camera relaxed hands in pockets",
      "one standing one seated eye level difference",
      "both seated facing camera symmetrical",
      "both in profile facing each other",
      "one in profile one full face to camera",
      "back to back both facing camera",
      "back to back both facing away from camera",
      "forehead to forehead eyes closed both",
      "one resting chin on other's shoulder both facing camera",
      "one standing behind other hands on shoulders both facing camera",
      "one kneeling one standing height difference dramatic",
      "both seated floor level casual legs crossed",
      "both lying floor level facing camera overhead angle",
      "one lying other leaning over both calm",
      "both leaning against wall casual arms crossed",
      "hand study both hands interlocked foreground close",
      "face study both faces close together sharp detail",
      "both looking away from camera same direction",
      "both looking away from camera opposite directions",
      "one looking camera one looking away",
      "mid-conversation both animated unaware of camera",
      "laughing both unguarded mid-expression",
      "serious both direct eye contact with camera",
      "one whispering other listening eyes closed",
      "one adjusting other's clothing detail gesture",
      "one touching other's face gently",
      "both arms around each other facing camera",
      "side by side shoulders touching both facing camera",
      "one seated other standing hand on seated shoulder",
      "both leaning toward each other heads tilted",
      "both facing away camera sees only backs",
      "over shoulder one facing camera other away",
      "both arms raised overhead dramatic gesture",
      "both crouched down low to ground same level",
      "one lifting other dramatic scale",
      "both holding single object between them",
      "both looking down at something below frame",
      "close crop faces only filling frame",
      "full length both standing maximum space around",
      "three-quarter length mid-shot natural",
      "both turned ninety degrees profile to camera"
    ],
    "looks": [
      "black tie both formal tuxedo evening wear",
      "white shirt open collar both relaxed formal",
      "all black each tonal monochrome",
      "all white each tonal monochrome",
      "all grey each tonal monochrome",
      "cream and white tonal both soft",
      "navy and white classic both clean",
      "charcoal and black tonal both dark",
      "matching outfits identical both deliberate",
      "coordinated palette same colour family each",
      "contrast each opposite end of tonal spectrum",
      "minimalist each single garment clean lines",
      "tailored each well-cut structured formal",
      "oversized each relaxed voluminous",
      "fitted each close to body structured",
      "textured each different fabric stories",
      "sheer and opaque each contrast transparency",
      "knitwear each relaxed soft tactile",
      "denim each casual unpretentious",
      "leather jacket each urban edge",
      "evening dress and suit each formal occasion",
      "wedding white both ceremonial",
      "black dress and black suit each matched dark",
      "cream dress and cream suit each matched light",
      "printed fabric each bold pattern",
      "solid colours each no pattern",
      "layered each multiple textures depth",
      "deconstructed each unfinished raw hem",
      "draped each fabric falling loosely",
      "structured jacket each architectural shoulder",
      "collarless shirt each clean minimal",
      "turtleneck each close to neck clean",
      "vest and shirt each layered warm",
      "coat each covered outerwear presence",
      "suit each tailored sharp professional",
      "suit no tie each smart relaxed",
      "casual smart each elevated everyday",
      "fashion editorial each directional intentional",
      "classic each timeless nothing trend-specific",
      "nude palette each skin tones only clothing",
      "jewel tones each rich saturated colour",
      "earth tones each warm natural palette"
    ],
    "promptPrefix": "Professional studio portrait photographed entirely inside a controlled photography studio with artificial studio lighting only — no natural light, no outdoor elements — medium format quality, intentional composition — ",
    "promptSuffix": "This is a controlled studio environment: no windows, no natural light, no outdoor elements. Artificial studio lighting only — strobes, softboxes, or continuous LED. The background is a studio backdrop or studio wall, nothing else. Render in rich colour or high-contrast black and white — black and white when form, mood or contrast calls for it, colour when skin tone, wardrobe or warmth carries meaning. Every element in the frame is deliberate."
  },
  {
    "id": "bmovie",
    "name": "THE B-MOVIE",
    "sub": "Sci-Fi & Horror Stills",
    "color": "#7a1a2e",
    "tensions": [
      "terror vs. desire",
      "alive vs. undead",
      "human vs. other",
      "run vs. stay",
      "rational vs. irrational",
      "known vs. unknown",
      "safety vs. dread",
      "victim vs. survivor",
      "ordinary vs. monstrous",
      "love vs. survival",
      "science vs. nature",
      "before vs. after",
      "hunter vs. hunted",
      "awake vs. nightmare",
      "alone vs. together in the dark",
      "scream vs. silence",
      "real vs. hallucination",
      "trust vs. betrayal",
      "past vs. haunting",
      "escape vs. trapped"
    ],
    "affinities": {
      "terror vs. desire": {
        "locs": [
          "1950s laboratory neon green glow",
          "drive-in movie screen at night",
          "abandoned drive-in lot"
        ],
        "poses": [
          "one reaching toward other in warning both frozen",
          "both looking at something off-frame in horror"
        ],
        "looks": [
          "1950s prom dress and suit both pristine",
          "torn lab coat blood-smeared each"
        ]
      }
    },
    "locs": [
      "1950s laboratory neon green glow",
      "abandoned space station corridor flickering",
      "drive-in movie screen at night",
      "alien landscape matte painting sky",
      "B-movie spaceship control room retro",
      "fog-covered graveyard at night practical light",
      "suburban house at night exterior one light on",
      "1950s American street night creature approaching",
      "carnival haunted house entrance",
      "mad scientist laboratory bubbling tubes",
      "motel room at night single lamp",
      "dark forest practical torch light",
      "small town main street deserted night",
      "underground bunker red emergency lighting",
      "retro rocket ship launch pad",
      "crumbling mansion exterior night",
      "1960s diner night fluorescent",
      "rural highway night headlights",
      "swamp at night fog mist",
      "abandoned factory night emergency exit green",
      "vintage observatory dome night",
      "crashed UFO crater smoking",
      "beach at night bonfirelight",
      "submarine interior cramped red light",
      "nuclear test site restricted zone",
      "1950s suburban basement den night",
      "carnival ferris wheel night neon",
      "research station arctic storm outside",
      "hospital corridor night emergency red",
      "church at night single candle interior",
      "drive-in car park night",
      "trailer park night one porch light",
      "cave entrance dark night fog",
      "radio tower blink red night",
      "old mill exterior night",
      "school corridor at night lockers",
      "theatre balcony single spotlight",
      "pier at night fog horn",
      "power plant cooling towers night",
      "quarry at night floodlit",
      "warehouse district night one lamp",
      "rooftop at night city glow below",
      "funfair ghost train entrance night",
      "clock tower night storm",
      "basement stairs single overhead bulb",
      "corn field at night path through",
      "gas station night rural isolated",
      "lighthouse beam night fog",
      "bowling alley at night empty",
      "roadside motel neon sign night",
      "alien mothership interior command deck retro blinking",
      "bowling alley night creature in shadows 1950s",
      "high school gymnasium prom night monster gate-crashes",
      "giant spider web forest clearing victims wrapped"
    ],
    "poses": [
      "both frozen looking at something off-frame in horror",
      "one pulling other away from danger urgent",
      "one shielding other both crouched",
      "both backs to camera looking ahead into dark",
      "one pointing at sky other looking up both terrified",
      "both running camera behind them",
      "one unconscious other holding vigil",
      "both hiding behind object peering over",
      "one reaching toward other warning hand out",
      "both in embrace face of one shows horror over shoulder",
      "one illuminating with torch both tense",
      "both pressing against wall backs flat",
      "one fallen other pulling them up urgent",
      "both mid-scream frozen frame",
      "one barricading door other watching windows",
      "both looking at same thing different reactions",
      "one skeptic other believer arguing mid-gesture",
      "both slowly backing away hands raised",
      "one protecting other both facing threat",
      "over shoulder both running toward camera"
    ],
    "looks": [
      "1950s prom dress and suit both pristine before",
      "torn prom dress suit dishevelled both",
      "lab coat white pristine each scientist",
      "lab coat torn bloodied each survivor",
      "1950s housewife dress and delivery man uniform",
      "varsity jacket and cheerleader skirt 1950s",
      "military uniform each khaki 1950s",
      "space suit silver retro each",
      "1950s swimwear beach each",
      "ripped casual clothes survival mode each",
      "trench coat and dress noir 1950s",
      "overalls work clothes rural each",
      "nurse uniform and orderly uniform 1950s",
      "evening wear formal interrupted mid-event",
      "camping gear practical outdoors each",
      "1960s mod dress and suit each",
      "drive-in casual 1950s each",
      "leather jacket and jeans rebel each",
      "police uniform 1950s each",
      "nightwear pyjamas interrupted sleep each"
    ],
    "promptPrefix": "Vintage science-fiction or horror B-movie film still, 1950s to 1970s aesthetic, Technicolor or grainy monochrome, theatrical lighting, low-budget practical effects aesthetic — ",
    "promptSuffix": "Render as an authentic B-movie film still: theatrical lighting, practical effects aesthetic, period-accurate costume and setting. Alternate between saturated Technicolor and high-contrast black and white. The image should feel like a frame from a real 1950s–1970s genre film — camp, earnest, visually dramatic."
  },
  {
    "id": "archive",
    "name": "THE PHOTOGRAPH",
    "sub": "Portraiture Across the Ages",
    "color": "#8a7355",
    "tensions": [
      "formal vs. candid",
      "posed vs. caught",
      "preserved vs. faded",
      "public face vs. private moment",
      "stiff vs. tender",
      "the sitter vs. the subject",
      "performance vs. presence",
      "past vs. present",
      "remembered vs. forgotten",
      "the person vs. the image",
      "together vs. separate in time",
      "dignity vs. vulnerability",
      "dressed up vs. undone",
      "looking vs. looked at",
      "light vs. shadow",
      "known vs. unrecognised",
      "held vs. released",
      "the face given vs. the face kept",
      "then vs. now",
      "love vs. loss"
    ],
    "affinities": {
      "formal vs. candid": {
        "locs": [
          "Victorian photographer studio painted backdrop",
          "1940s press photo studio",
          "1970s Polaroid casual moment"
        ],
        "poses": [
          "both formally posed upright Victorian studio hands in lap",
          "both caught laughing 1970s snapshot candid"
        ],
        "looks": [
          "Victorian formal dress and frock coat period accurate",
          "1970s casual everyday Polaroid clothes"
        ]
      }
    },
    "locs": [
      "daguerreotype studio 1850s painted backdrop column",
      "Victorian parlour formal sitting 1860s",
      "early photography studio plate camera 1850s",
      "Victorian conservatory glass light 1860s",
      "Victorian photographer studio painted garden backdrop",
      "Edwardian seaside portrait studio pier",
      "Victorian cabinet card studio velvet chair",
      "Edwardian country house drawing room formal",
      "Victorian studio painted landscape backdrop",
      "Edwardian portrait studio electric light early",
      "1920s glamour portrait studio dramatic light",
      "1930s Hollywood studio portrait backdrop",
      "1920s art deco portrait studio",
      "1930s press photograph studio flash",
      "1940s studio portrait wartime formal",
      "1940s press photo studio flash powder",
      "1940s wartime goodbye platform station",
      "1940s family portrait studio Sunday best",
      "1950s colour portrait studio Kodachrome",
      "1950s suburban garden snapshot summer",
      "1950s school portrait individual backdrop",
      "1950s department store portrait studio",
      "1960s portrait studio soft focus colour",
      "1960s snapshot garden party Kodak",
      "1960s photobooth strip four frames",
      "1960s news photograph street candid",
      "1970s Polaroid instant kitchen casual",
      "1970s family portrait velvet studio backdrop",
      "1970s snapshot holiday beach Kodak",
      "1970s school photograph class outdoor",
      "1980s portrait studio laser background",
      "1980s snapshot disposable camera party",
      "1980s passport photograph strip booth",
      "1980s wedding portrait formal studio",
      "1990s disposable camera snapshot casual",
      "1990s portrait studio soft focus",
      "1990s photobooth mall strip",
      "1990s school portrait blue gradient backdrop",
      "early 2000s digital camera party low resolution",
      "2000s photo print kiosk portrait",
      "2000s candid phone photograph first generation",
      "2010s instagram square portrait early",
      "1930s documentary press photograph street",
      "1950s news agency portrait flash",
      "1960s photojournalism candid street",
      "1970s documentary portrait natural light",
      "black and white film portrait studio grain",
      "sepia toned portrait formal studio",
      "colour slide transparency 1960s portrait",
      "instant Polaroid border white portrait",
      "35mm film grain portrait casual snapshot",
      "medium format portrait studio sharp",
      "large format studio portrait 1940s sharp",
      "cyanotype portrait early experimental"
    ],
    "poses": [
      "both formally posed upright Victorian studio hands in lap",
      "both seated formal Edwardian portrait symmetrical",
      "one standing one seated Victorian height formal",
      "both looking directly at camera 1940s studio serious",
      "both in profile facing each other Victorian",
      "both caught laughing 1970s snapshot candid",
      "both looking away from camera 1960s candid",
      "one arm around other 1950s casual snapshot",
      "both mid-conversation 1960s documentary candid",
      "both looking at same thing off frame 1970s",
      "formal portrait both upright dignified Victorian",
      "both seated close 1930s intimate studio",
      "one behind other hands on shoulders Victorian formal",
      "both relaxed 1970s Polaroid moment candid",
      "both looking at camera slight smile 1950s",
      "one holding other hand visible 1940s formal",
      "both in photobooth strip sequence four poses",
      "both caught unaware 1960s documentary",
      "both formal and stiff early daguerreotype long exposure",
      "both slightly blurred early long exposure daguerreotype"
    ],
    "looks": [
      "Victorian formal dress and frock coat period accurate",
      "Edwardian morning dress and blouse formal",
      "1920s flapper dress and dinner suit",
      "1930s bias cut dress and lounge suit",
      "1940s wartime utility dress and uniform",
      "1940s Sunday best church clothes formal",
      "1950s full skirt dress and sport coat Kodachrome",
      "1950s casual suburban everyday clothes snapshot",
      "1960s mod dress and slim suit period",
      "1960s casual everyday snapshot clothes",
      "1970s wide lapel suit and maxi dress",
      "1970s casual everyday Polaroid clothes",
      "1980s power shoulder dress and suit formal",
      "1980s casual everyday snapshot party",
      "1990s grunge casual everyday snapshot",
      "1990s formal portrait smart casual",
      "2000s casual early digital everyday",
      "timeless simple clothes no era marker neutral",
      "period formal best clothes Sunday occasion",
      "working clothes everyday period candid"
    ],
    "promptPrefix": "Authentic period portrait photograph, historically accurate to the era and photographic technology depicted — ",
    "promptSuffix": "The image must look like a genuine photograph from its era: period-accurate photographic format, lighting technology, costume and aesthetic throughout. The image should feel like it was genuinely taken then."
  },
  {
    "id": "carnival",
    "name": "THE CARNIVAL",
    "sub": "Garish Light & Sweet Sadness",
    "color": "#d4156a",
    "tensions": [
      "joy vs. melancholy",
      "real vs. performance",
      "beautiful vs. ugly",
      "childhood vs. adulthood",
      "winning vs. losing",
      "bright vs. dark",
      "together vs. alone in a crowd",
      "magical vs. mechanical",
      "freedom vs. routine",
      "laughter vs. loneliness",
      "season vs. end of season",
      "spectacle vs. ordinary",
      "sugar vs. bitter",
      "anticipation vs. disappointment",
      "last night vs. first night",
      "seen vs. overlooked in the crowd",
      "love vs. heartbreak midway",
      "gaudy vs. sublime",
      "passing vs. permanent",
      "innocent vs. knowing"
    ],
    "affinities": {
      "joy vs. melancholy": {
        "locs": [
          "ferris wheel top night city glow",
          "waltzers spinning neon blur night",
          "candyfloss stall dusk light pink"
        ],
        "poses": [
          "both at top of ferris wheel city below",
          "both mid-waltzer blur motion laughing"
        ],
        "looks": [
          "carnival casual summer each warm night",
          "vintage fairground dress and shirt 1960s each"
        ]
      }
    },
    "locs": [
      "ferris wheel top night city glow",
      "waltzers spinning neon blur night",
      "candyfloss stall dusk light pink",
      "hook-a-duck stall fairground lights",
      "ghost train entrance carnival night",
      "hall of mirrors funfair interior",
      "carnival midway night both sides lit",
      "big wheel base looking up night",
      "coconut shy stall string lights",
      "dodgems arena carnival neon",
      "carnival food van candleapple dusk",
      "helter skelter base night",
      "fortune teller caravan carnival exterior",
      "carnival entrance arch neon night",
      "toffee apple stall amber light",
      "test your strength tower carnival",
      "carousel horses night lights spinning",
      "carnival back lot behind rides",
      "shooting gallery neon prizes",
      "carnival crowd midway night",
      "ferris wheel reflection puddle rain",
      "funfair at closing time lights going out",
      "carnival field dawn before opening",
      "waltzer operator platform night",
      "carnival generator truck back area",
      "candy stripe tent interior carnival",
      "prize soft toy stall overloaded",
      "carnival fireworks above ferris wheel",
      "trailer park carnival workers housing",
      "carousel empty morning after",
      "carnival ticket booth night queue",
      "funfair field afternoon setup",
      "cotton candy machine spinning pink",
      "carnival stage performance area",
      "hook-a-duck water reflection lights",
      "big wheel gondola night suspended",
      "carnival back lot empty evening",
      "fairground organ carousel music",
      "carnival field last night season",
      "ghost train car interior dark",
      "dodgem car stationary waiting",
      "carnival arc lights full night",
      "funfair entrance gates daytime",
      "carnival midway dawn packing up",
      "waltzer stationary between rides",
      "hall of mirrors reflection infinite",
      "carnival fire eater performance area",
      "prize wheel spin carnival neon",
      "bumper cars overhead sparks night",
      "carnival field first light morning"
    ],
    "poses": [
      "both at top of ferris wheel city below",
      "both mid-waltzer blur motion laughing",
      "one winning prize handing to other",
      "both reflected infinite hall of mirrors",
      "both eating candyfloss same stick",
      "one on carousel other watching waving",
      "both looking up at fireworks faces lit",
      "one shooting gallery other watching focused",
      "both mid-crowd carnival looking at each other",
      "one carrying other on back carnival crowd",
      "both mid-game competitive each",
      "one scared ghost train other laughing",
      "both sitting on steps carnival background",
      "one pointing at prize other calculating",
      "both eating toffee apple same bite",
      "one on shoulders other at carnival",
      "both dodgem cars same car",
      "one fortune teller other having reading done",
      "both last on ferris wheel night closing",
      "over-shoulder both carnival crowd receding"
    ],
    "looks": [
      "carnival casual summer each warm night",
      "vintage fairground dress and shirt 1960s each",
      "denim jacket and sundress each warm",
      "carnival worker practical each uniform",
      "date night casual each effort made",
      "festival casual layers each evening",
      "childhood nostalgia casual each simple",
      "tourist casual family each",
      "local teen casual each bored",
      "first date nervous dressed up each",
      "summer dress and shorts each casual",
      "vintage 1970s fairground each",
      "hooded top and jeans each night chill",
      "carnival costume contest dressed up each",
      "worker off shift casual each tired",
      "school holiday casual each young",
      "couple anniversary revisit each nostalgic",
      "travelling show worker practical each",
      "night out dressed up each",
      "locals casual modest each"
    ],
    "promptSuffix": "Colour grade: saturated carnival neon — magenta, electric blue, acid yellow, warm amber of bulb strings. The beauty should feel slightly too much, slightly sad, the way carnival light always does. The emotional tension is atmosphere only. Do not illustrate it literally."
  },
  {
    "id": "valentines",
    "name": "VALENTINE'S DAY",
    "sub": "Love, Longing & Red Roses",
    "color": "#c4143c",
    "tensions": [
      "love vs. longing",
      "given vs. received",
      "said vs. unsaid",
      "romantic vs. real",
      "expectation vs. presence",
      "desire vs. fear",
      "together vs. apart",
      "first vs. last",
      "sweet vs. bitter",
      "hope vs. heartbreak",
      "public vs. private love",
      "gesture vs. feeling",
      "passion vs. comfort",
      "new vs. familiar love",
      "the card vs. the truth"
    ],
    "affinities": {
      "love vs. longing": {
        "locs": [
          "candlelit restaurant table for two red roses",
          "paris bridge padlock city view evening",
          "red roses delivered doorstep evening"
        ],
        "poses": [
          "both leaning across table toward each other candlelight",
          "one presenting roses other receiving eyes closed"
        ],
        "looks": [
          "red dress and dark suit formal evening occasion",
          "casual soft colours at-home intimate evening"
        ]
      }
    },
    "locs": [
      "candlelit restaurant table for two red roses",
      "paris bridge padlock city view evening",
      "red roses delivered doorstep evening",
      "valentine card envelope table morning",
      "hotel room rose petals champagne evening",
      "restaurant window table rain outside candlelight",
      "home dining table candles simple intimate",
      "florist shop red roses morning selection",
      "park bench winter afternoon couples",
      "cinema queue cold evening together",
      "kitchen table breakfast heart pancakes morning",
      "wine bar intimate corner evening",
      "bridge city lights reflection evening",
      "café window seat rainy afternoon",
      "restaurant bar waiting evening dressed up",
      "home sofa evening candles wine",
      "valentine card writing desk lamp evening",
      "apartment balcony city evening lights",
      "rooftop restaurant city view evening",
      "harbour evening lights reflection",
      "small restaurant neighbourhood intimate evening",
      "kitchen cooking together evening home",
      "doorstep moment evening arrival flowers",
      "park winter afternoon hand in hand",
      "bedroom morning light flowers on bedside",
      "dining room home candles occasion",
      "flower market morning red roses selection",
      "letter box valentine card morning discovered",
      "table for two empty setting waiting",
      "restaurant exterior evening arriving dressed"
    ],
    "poses": [
      "both leaning across table toward each other candlelight",
      "one presenting roses other receiving eyes closed",
      "both holding same champagne glass",
      "one reading valentine card other watches anxious",
      "both at restaurant window watching rain together",
      "over shoulder both walking city evening",
      "both in kitchen cooking together laughing",
      "both on sofa evening facing each other",
      "one arriving doorstep other opening door",
      "both looking out at city evening view",
      "both mid-toast champagne glasses raised",
      "one writing card other reading over shoulder",
      "both walking park winter hand in hand",
      "both seated restaurant waiting for other",
      "both mid-kiss restaurant candlelight",
      "one giving chocolates other opening box",
      "both laughing at failed romantic gesture",
      "both looking at menu restaurant together",
      "one falling asleep other watching fondly",
      "both dancing kitchen no music"
    ],
    "looks": [
      "red dress and dark suit formal evening occasion",
      "casual soft colours at-home intimate evening",
      "all black each elegant simple evening",
      "red and white tonal each festive",
      "smart casual each restaurant evening",
      "matching red accessories each deliberate",
      "formal evening wear both occasion dressed",
      "cosy home clothes each comfortable",
      "winter coat each arriving cold evening",
      "simple clean clothes each understated"
    ],
    "promptSuffix": "Colour grade: deep red, rose, candlelight amber — the palette of Valentine’s Day done with restraint. Warm and intimate, never garish. The emotional tension is atmosphere only. Do not illustrate it literally."
  },
  {
    "id": "mothersday",
    "name": "MOTHER'S DAY",
    "sub": "Love Across Generations",
    "color": "#e8a0b4",
    "tensions": [
      "given vs. received",
      "past vs. present",
      "child vs. adult",
      "remembered vs. present",
      "gratitude vs. guilt",
      "love vs. time",
      "then vs. now",
      "the mother vs. the woman",
      "sacrifice vs. self",
      "held vs. let go"
    ],
    "affinities": {
      "given vs. received": {
        "locs": [
          "spring garden flowers morning sunlight",
          "breakfast tray bedroom morning flowers",
          "kitchen table Sunday morning flowers bouquet"
        ],
        "poses": [
          "one presenting flowers other receiving both emotional",
          "both in garden spring morning holding flowers"
        ],
        "looks": [
          "spring floral dress each soft occasion",
          "casual home morning clothes comfortable each"
        ]
      }
    },
    "locs": [
      "spring garden flowers morning sunlight",
      "breakfast tray bedroom morning flowers",
      "kitchen table Sunday morning flowers bouquet",
      "garden table lunch spring afternoon",
      "florist shop spring flowers selection morning",
      "front door flowers delivered morning",
      "living room spring afternoon light flowers",
      "dining table sunday lunch spring",
      "garden path spring flowers either side",
      "restaurant sunday lunch spring afternoon",
      "conservatory morning light spring flowers",
      "garden bench spring afternoon flowers",
      "kitchen flowers vase morning light",
      "bedroom morning light flowers bedside",
      "garden gate spring morning arrival",
      "porch steps spring morning flowers",
      "park spring afternoon flowers blooming",
      "café sunday morning flowers on table",
      "home garden spring evening golden hour",
      "sunday morning light through window flowers"
    ],
    "poses": [
      "one presenting flowers other receiving both emotional",
      "both in garden spring morning holding flowers",
      "one in bed other bringing breakfast tray",
      "both at kitchen table morning coffee flowers",
      "both in garden looking at flowers spring",
      "one reading card other watches smiling",
      "both walking garden arm in arm spring",
      "both at lunch table spring afternoon",
      "one cooking other setting table spring morning",
      "both looking at old photographs together spring"
    ],
    "looks": [
      "spring floral dress each soft occasion",
      "casual home morning clothes comfortable each",
      "spring smart casual lunch each",
      "simple elegant each understated occasion",
      "garden casual layers spring each",
      "soft colours each pastel spring"
    ],
    "promptSuffix": "Colour grade: soft spring light — pale gold, blush, the fresh green of new growth. Warm and tender. The emotional tension is atmosphere only. Do not illustrate it literally."
  },
  {
    "id": "fourthofjuly",
    "name": "FOURTH OF JULY",
    "sub": "Fireworks, Flags & Americana",
    "color": "#1a3a8a",
    "tensions": [
      "freedom vs. belonging",
      "celebration vs. weight of history",
      "together vs. divided",
      "pride vs. complexity",
      "past vs. present",
      "spectacle vs. meaning",
      "red vs. blue",
      "loud vs. quiet",
      "patriot vs. citizen",
      "one nation vs. many"
    ],
    "affinities": {
      "freedom vs. belonging": {
        "locs": [
          "fireworks over city harbour night",
          "small town parade main street day",
          "backyard barbecue american flag bunting afternoon"
        ],
        "poses": [
          "both watching fireworks sky faces lit",
          "both in parade crowd american flags"
        ],
        "looks": [
          "red white blue casual americana each",
          "denim and white tee each american casual"
        ]
      }
    },
    "locs": [
      "fireworks over city harbour night",
      "small town parade main street day",
      "backyard barbecue american flag bunting afternoon",
      "beach bonfire fourth of july night",
      "rooftop fireworks city view night",
      "small town main street flags bunting day",
      "public park fireworks crowd night",
      "suburban front porch american flag evening",
      "lake fireworks reflection night",
      "fairground fourth of july afternoon",
      "baseball field small town afternoon",
      "dock lake fireworks night",
      "small town bandstand afternoon",
      "suburban backyard pool afternoon",
      "memorial park flags afternoon",
      "bridge fireworks city view night",
      "small town church steps afternoon",
      "carnival midway fourth afternoon",
      "pier end fireworks over water night",
      "sunset beach american flags evening"
    ],
    "poses": [
      "both watching fireworks faces lit from above",
      "both in parade crowd flags raised",
      "both at barbecue laughing mid-celebration",
      "both on rooftop city fireworks behind",
      "both at lake edge fireworks reflection",
      "both in small town parade waving",
      "both mid-sparkler dark field night",
      "both on porch swing evening before dark",
      "both at beach bonfire night",
      "both watching parade from sidewalk"
    ],
    "looks": [
      "red white blue casual americana each deliberate",
      "denim shorts and white tee each american summer",
      "american flag print casual each",
      "summer casual americana patriotic each",
      "small town sunday best parade each",
      "beach casual americana summer each",
      "backyard barbecue casual each",
      "vintage americana each 1960s classic",
      "summer dress and shorts americana each",
      "casual celebration american red white blue each"
    ],
    "promptSuffix": "Colour grade: red, white, blue — the saturated palette of American Independence Day. Fireworks gold and silver against night sky, or the warm afternoon of small-town celebration. The emotional tension is atmosphere only. Do not illustrate it literally."
  },
  {
    "id": "septiembre16",
    "name": "SEPTIEMBRE 16",
    "sub": "El Grito & La Independencia",
    "color": "#006847",
    "tensions": [
      "pride vs. history",
      "past vs. present",
      "freedom vs. memory",
      "celebration vs. weight",
      "together vs. divided",
      "identity vs. belonging",
      "the grito vs. the silence after",
      "tradition vs. change",
      "roots vs. future",
      "national vs. personal"
    ],
    "affinities": {
      "pride vs. history": {
        "locs": [
          "zocalo mexico city grito de independencia night",
          "plaza principal pueblo grito night fireworks",
          "charro escaramuza horse arena afternoon"
        ],
        "poses": [
          "both in plaza grito night crowd fireworks",
          "both in charro and china poblana traditional"
        ],
        "looks": [
          "charro suit and china poblana traditional mexican",
          "green white red tricolor formal each"
        ]
      }
    },
    "locs": [
      "zocalo mexico city grito de independencia night",
      "plaza principal pueblo night fireworks grito",
      "charro escaramuza horse arena afternoon",
      "traditional market dia de independencia stalls",
      "cathedral facade green white red lights night",
      "town square mariachi performance evening",
      "hacienda colonial courtyard evening",
      "mexican flag green white red waving plaza",
      "traditional feast table day of independence",
      "folk dance performance plaza evening",
      "colonial town square fireworks night",
      "traditional dress parade main street day",
      "charreada arena afternoon traditional",
      "small pueblo plaza morning independence",
      "cathedral bells ringing independence night",
      "market stalls mexican crafts independence",
      "colonial archway green white red bunting",
      "traditional kitchen independence feast morning",
      "plaza de armas provincial town evening",
      "mountain village independence celebration afternoon"
    ],
    "poses": [
      "both in plaza grito night crowd fireworks above",
      "both in traditional charro and poblana formal posed",
      "both watching charreada arena afternoon",
      "both mid-mariachi dance plaza evening",
      "both at traditional feast table independence",
      "both in crowd cathedral bells ringing night",
      "both waving mexican flags plaza night",
      "both in folk dance traditional dress movement",
      "both watching fireworks zocalo night faces lit",
      "both at market stalls independence day morning"
    ],
    "looks": [
      "charro suit silver buttons and china poblana traditional",
      "green white red tricolor formal occasion each",
      "traditional huipil and guayabera each regional",
      "traditional embroidered dress and suit each",
      "mestizo formal best clothes occasion each",
      "charro suit and tehuana dress each regional",
      "traditional mexican independence colours each",
      "folk dance traditional dress each regional",
      "casual mexican patriotic colours each",
      "simple traditional each cotton embroidered"
    ],
    "promptSuffix": "Colour grade: green, white, red — the colours of the Mexican flag, the light of the plaza at night, fireworks over the cathedral. Warm, celebratory, deeply proud. The emotional tension is atmosphere only. Do not illustrate it literally."
  },
  {
    "id": "thanksgiving",
    "name": "THANKSGIVING",
    "sub": "Harvest, Gratitude & the American Table",
    "color": "#c4620a",
    "tensions": [
      "gratitude vs. guilt",
      "abundance vs. absence",
      "together vs. apart",
      "tradition vs. change",
      "past vs. present",
      "the table vs. who is missing",
      "warmth vs. obligation",
      "feast vs. famine",
      "family vs. chosen family",
      "home vs. displacement"
    ],
    "affinities": {
      "gratitude vs. guilt": {
        "locs": [
          "thanksgiving table full harvest decorations afternoon",
          "front porch autumn leaves afternoon golden",
          "kitchen cooking thanksgiving morning steam"
        ],
        "poses": [
          "both at table feast before them heads bowed",
          "both cooking kitchen thanksgiving morning"
        ],
        "looks": [
          "thanksgiving smart casual autumn each",
          "apron over clothes kitchen each thanksgiving"
        ]
      }
    },
    "locs": [
      "thanksgiving table full harvest decorations afternoon",
      "front porch autumn leaves afternoon golden",
      "kitchen cooking thanksgiving morning steam",
      "dining room set table thanksgiving anticipation",
      "living room after dinner thanksgiving evening",
      "backyard afternoon thanksgiving football",
      "parade crowd thanksgiving morning city",
      "supermarket thanksgiving eve last minute",
      "front door wreath autumn thanksgiving",
      "kitchen table morning coffee thanksgiving preparation",
      "dining table empty setting thanksgiving anticipation",
      "autumn farm stand harvest thanksgiving morning",
      "family living room thanksgiving afternoon football",
      "airport arrival thanksgiving reunion",
      "kitchen sink washing up thanksgiving evening",
      "dining room candles thanksgiving evening",
      "backyard bonfire after thanksgiving evening",
      "autumn park walk thanksgiving afternoon",
      "small town parade thanksgiving morning",
      "neighbourhood thanksgiving morning quiet"
    ],
    "poses": [
      "both at table feast before them thankful",
      "both cooking kitchen thanksgiving morning laughing",
      "both on porch swing autumn afternoon",
      "both watching parade street morning crowd",
      "both after dinner sofa sleepy evening",
      "both arriving front door thanksgiving reunion",
      "both washing dishes together kitchen evening",
      "both setting table together preparation",
      "both in kitchen tasting arguing recipe",
      "both looking out window autumn afternoon"
    ],
    "looks": [
      "thanksgiving smart casual autumn each occasion",
      "apron over clothes kitchen thanksgiving each",
      "autumn layers smart casual each",
      "family gathering best casual each autumn",
      "comfortable thanksgiving dinner clothes each",
      "autumn earth tones each harvest palette",
      "casual warm layers thanksgiving each",
      "smart family occasion clothes each"
    ],
    "promptSuffix": "Colour grade: amber, burnt orange, deep rust — the harvest palette. Warm indoor light, autumn afternoon gold outside. The emotional tension is atmosphere only. Do not illustrate it literally."
  },
  {
    "id": "halloween",
    "name": "HALLOWEEN",
    "sub": "Darkness, Costume & the Veil Between",
    "color": "#e85a00",
    "tensions": [
      "costume vs. self",
      "fear vs. delight",
      "real vs. imagined",
      "child vs. adult",
      "darkness vs. light",
      "trick vs. treat",
      "seen vs. hidden",
      "the mask vs. the face",
      "dead vs. alive",
      "sacred vs. spectacle"
    ],
    "affinities": {
      "costume vs. self": {
        "locs": [
          "halloween porch carved pumpkins night",
          "suburban trick or treat street night",
          "halloween costume party interior"
        ],
        "poses": [
          "both in halloween costumes posing porch",
          "both trick or treating suburban night"
        ],
        "looks": [
          "witch and vampire couples costume each halloween",
          "classic horror costumes each matched theme"
        ]
      }
    },
    "locs": [
      "halloween porch carved pumpkins orange night",
      "suburban trick or treat street night",
      "halloween costume party interior crowded",
      "haunted house decorated exterior night",
      "cemetery halloween decorated night moon",
      "corn maze halloween night torches",
      "halloween parade street costumes night",
      "carved pumpkin line porch steps evening",
      "halloween bonfire field night dark",
      "school halloween parade daytime",
      "halloween carnival funfair night orange",
      "graveyard fog machine night halloween",
      "halloween market stalls night orange",
      "front door decorated cobwebs night",
      "haunted hayride field night dark",
      "halloween street blocked cars candy night",
      "apple bobbing tub indoor halloween party",
      "halloween disco venue costumes night",
      "jack o lantern lit porch dark night",
      "halloween fog street night orange glow"
    ],
    "poses": [
      "both in halloween costumes posed porch carved pumpkins",
      "both trick or treating suburban night pillow cases",
      "both at halloween party costumes crowd behind",
      "both in scary costume confrontational playful",
      "one in horror costume other pretending scared",
      "both carving pumpkins kitchen evening",
      "both mid-halloween parade street costumes",
      "both at cemetery halloween night atmospheric",
      "both answering door halloween costumes candy",
      "both at corn maze entrance torches night",
      "both lit by jack o lantern faces orange",
      "both in couples costume matched theme",
      "both mid-scream playful halloween party",
      "both in masks halloween atmospheric",
      "both sitting porch carved pumpkins night"
    ],
    "looks": [
      "witch and vampire couples costume classic each",
      "classic horror monsters each matched",
      "skeleton body suit each halloween",
      "zombie undead makeup each dishevelled",
      "ghost white sheet cut simple each",
      "devil horns tail each red",
      "horror film character each iconic",
      "1950s halloween costume retro each",
      "diy costume creative each homemade",
      "gothic dressed up each dark elaborate"
    ],
    "promptSuffix": "Colour grade: deep orange, black, the flickering of candlelit jack o lanterns. Darkness punctuated by warm orange — atmospheric, slightly unsettling, delightful. The emotional tension is atmosphere only. Do not illustrate it literally."
  },
  {
    "id": "diadelosmuertos",
    "name": "DÍA DE LOS MUERTOS",
    "sub": "Marigolds, Memory & the Return",
    "color": "#d4780a",
    "tensions": [
      "death vs. life",
      "memory vs. forgetting",
      "grief vs. celebration",
      "here vs. gone",
      "the living vs. the dead",
      "past vs. present",
      "love vs. loss",
      "colour vs. darkness",
      "sacred vs. festive",
      "held vs. let go"
    ],
    "affinities": {
      "death vs. life": {
        "locs": [
          "day of the dead altar marigolds candles ofrenda",
          "cemetery marigold path dia de los muertos night",
          "parade dia de los muertos street costume night"
        ],
        "poses": [
          "both in calavera face paint formal posed",
          "both at ofrenda altar candles marigolds"
        ],
        "looks": [
          "calavera face paint elaborate traditional each",
          "marigold yellow and white dress and suit each"
        ]
      }
    },
    "locs": [
      "day of the dead altar ofrenda marigolds candles photographs",
      "cemetery marigold path candles night procession",
      "parade dia de los muertos street costume night",
      "ofrenda home altar photographs candles marigolds",
      "marigold market stalls cempasuchil october",
      "cemetery grave decorated marigolds candles night",
      "traditional dia de los muertos performance plaza",
      "calavera parade float street night elaborate",
      "cemetery night candles thousands marigolds",
      "altar community display photographs flowers",
      "traditional market dia de los muertos crafts",
      "sugar skull making workshop table",
      "paper marigold decorating workshop",
      "home ofrenda setting photographs loved ones",
      "traditional dance dia de los muertos plaza",
      "cemetery family gathering candles night",
      "marigold petal path cemetery candles",
      "procession street candles elaborate costumes night",
      "town plaza altar community display",
      "colonial church decorated marigolds night"
    ],
    "poses": [
      "both in calavera face paint formal posed ofrenda behind",
      "both at ofrenda altar candles marigolds photographs",
      "both in parade procession elaborate costumes night",
      "both at cemetery grave candles marigolds",
      "both carrying marigold offerings processional",
      "both in traditional dance dia de los muertos",
      "both making sugar skulls workshop table",
      "both placing photographs on ofrenda",
      "both in elaborate calavera costume and makeup parade",
      "both lit by candles cemetery night marigolds"
    ],
    "looks": [
      "calavera face paint elaborate floral traditional each",
      "marigold yellow and white dress and suit traditional each",
      "traditional huipil embroidered day of dead each",
      "calavera catrina dress and suit formal each",
      "elaborate sugar skull makeup and traditional dress each",
      "simple calavera face paint casual traditional each",
      "traditional mexican day of dead embroidered each",
      "catrina elegant hat veil and suit each formal",
      "folk embroidered dress and guayabera each",
      "day of dead elaborate crown flowers makeup each"
    ],
    "promptSuffix": "Colour grade: marigold gold, deep purple, the warm flicker of hundreds of candles. Rich, saturated, deeply beautiful — this is death celebrated as colour. The emotional tension is atmosphere only. Do not illustrate it literally."
  },
  {
    "id": "christmas",
    "name": "CHRISTMAS",
    "sub": "Candlelight, Snow & the Return Home",
    "color": "#8b0000",
    "tensions": [
      "joy vs. longing",
      "warmth vs. cold",
      "together vs. absent",
      "magic vs. commercial",
      "childhood vs. adulthood",
      "giving vs. receiving",
      "sacred vs. secular",
      "expectation vs. reality",
      "home vs. elsewhere",
      "past vs. present"
    ],
    "affinities": {
      "joy vs. longing": {
        "locs": [
          "christmas tree lights interior night warm",
          "snow exterior house christmas lights evening",
          "christmas market stall mulled wine lights winter"
        ],
        "poses": [
          "both under christmas tree lights evening",
          "both in snow exterior christmas evening"
        ],
        "looks": [
          "christmas sweater cosy each festive",
          "formal christmas dinner each occasion"
        ]
      }
    },
    "locs": [
      "christmas tree lights interior night warm",
      "snow exterior house christmas lights evening",
      "christmas market stall mulled wine lights winter",
      "fireplace stockings interior christmas eve night",
      "christmas morning unwrapping living room",
      "church midnight mass candles christmas eve",
      "snow street christmas lights evening town",
      "kitchen christmas cooking morning steam",
      "christmas table set dinner candles formal",
      "carol singing exterior night lanterns",
      "christmas window shop lights snow exterior",
      "train station christmas arrival reunion",
      "airport arrivals christmas reunion",
      "bedroom christmas morning first light",
      "snowy landscape christmas day quiet",
      "christmas fair outdoor stalls lights winter",
      "pub christmas eve fire interior warm",
      "christmas tree farm choosing morning snow",
      "chapel candles christmas eve service",
      "christmas dinner table full family afternoon"
    ],
    "poses": [
      "both under christmas tree lights evening warm",
      "both in snow exterior christmas evening",
      "both opening gifts christmas morning floor",
      "both at christmas dinner table raised glasses",
      "both at carol service candles exterior night",
      "both arriving home christmas reunion door",
      "both cooking christmas kitchen morning",
      "both at christmas market mulled wine cold",
      "both reading by fire christmas eve",
      "both in matching christmas jumpers deliberate",
      "both decorating christmas tree evening",
      "both outside in snow christmas morning",
      "both at midnight mass candles christmas eve",
      "both mid-christmas dinner laughing",
      "both on sofa christmas afternoon sleepy"
    ],
    "looks": [
      "matching christmas jumpers ugly festive each",
      "christmas formal dinner dress and suit each",
      "cosy christmas eve pyjamas each warm",
      "winter coat arriving christmas each",
      "smart casual christmas day each festive",
      "simple elegant each understated christmas",
      "traditional christmas colours red green each",
      "christmas party dressed up each festive",
      "warm layers christmas morning casual each",
      "carol service winter coats scarves each"
    ],
    "promptSuffix": "Colour grade: deep red, gold, warm candlelight — the palette of Christmas done with warmth and restraint. Firelight, fairy lights, the cold blue of snow outside. The emotional tension is atmosphere only. Do not illustrate it literally."
  },
  {
    "id": "newyearseve",
    "name": "NEW YEAR'S EVE",
    "sub": "Midnight, Fireworks & the Turn",
    "color": "#c8a800",
    "tensions": [
      "past vs. future",
      "celebration vs. melancholy",
      "midnight vs. morning",
      "what was vs. what will be",
      "together vs. the year alone",
      "hope vs. resignation",
      "the countdown vs. the silence after",
      "old vs. new",
      "held vs. released",
      "the last vs. the first"
    ],
    "affinities": {
      "past vs. future": {
        "locs": [
          "rooftop fireworks city view midnight countdown",
          "bridge city fireworks midnight countdown",
          "ballroom countdown midnight champagne"
        ],
        "poses": [
          "both mid-countdown rooftop fireworks midnight",
          "both midnight kiss new year"
        ],
        "looks": [
          "formal evening wear new year midnight each",
          "gold and silver glitter new year each"
        ]
      }
    },
    "locs": [
      "rooftop fireworks city view midnight countdown",
      "bridge city fireworks river reflection midnight",
      "ballroom countdown midnight champagne",
      "times square style crowd countdown night",
      "harbour fireworks water reflection midnight",
      "restaurant midnight countdown champagne toast",
      "house party countdown midnight interior",
      "city street midnight fireworks crowd",
      "pub midnight new year crowd interior",
      "beach bonfire new year midnight",
      "rooftop small group midnight city glow",
      "penthouse view fireworks midnight toast",
      "countdown clock public square midnight",
      "hotel bar new year midnight formal",
      "quiet home midnight just two champagne",
      "riverside fireworks midnight cold",
      "theatre new year midnight performance",
      "casino countdown midnight glamour",
      "city park fireworks crowd midnight",
      "dawn new year morning aftermath quiet"
    ],
    "poses": [
      "both mid-countdown rooftop fireworks faces lit",
      "both midnight kiss new year city behind",
      "both mid-toast champagne glasses midnight",
      "both watching fireworks city view midnight",
      "both in crowd countdown midnight arms raised",
      "both mid-dance ballroom midnight",
      "both on bridge fireworks reflection midnight",
      "both quiet moment midnight just two",
      "both laughing midnight new year party",
      "both watching clock seconds to midnight"
    ],
    "looks": [
      "formal evening wear new year midnight each",
      "gold and silver new year festive each glitter",
      "glamour evening dress and suit each",
      "sequin and tuxedo each new year",
      "smart casual new year party each",
      "all black elegant each new year",
      "champagne gold dress and dark suit each",
      "simple elegant new year eve each",
      "festive colour block each celebration",
      "midnight blue and silver each"
    ],
    "promptSuffix": "Colour grade: gold, silver, midnight blue — the palette of New Year’s Eve. Fireworks above, champagne in hand, the city lit up. Glamorous, slightly melancholy, full of possibility. The emotional tension is atmosphere only. Do not illustrate it literally."
  },
  {
    "id": "diwali",
    "name": "DIWALI",
    "sub": "Light Over Darkness",
    "color": "#e8920a",
    "tensions": [
      "light vs. darkness",
      "good vs. evil",
      "together vs. apart",
      "old vs. new",
      "sacred vs. festive",
      "gift vs. gratitude",
      "the diya vs. the dark",
      "past vs. future",
      "family vs. change",
      "tradition vs. modernity"
    ],
    "affinities": {
      "light vs. darkness": {
        "locs": [
          "diwali diyas lit doorstep rangoli night",
          "rooftop fireworks diwali night city",
          "home diwali lights decorations evening"
        ],
        "poses": [
          "both lighting diyas together doorstep evening",
          "both in traditional dress fireworks rooftop diwali"
        ],
        "looks": [
          "traditional salwar kameez and kurta diwali each",
          "saree and sherwani formal diwali each"
        ]
      }
    },
    "locs": [
      "diwali diyas lit doorstep rangoli night",
      "rooftop fireworks diwali night city",
      "home diwali lights decorations lanterns evening",
      "market diwali sweets and lights shopping",
      "temple diwali celebration lights evening",
      "street diwali lights procession night",
      "home puja room diwali candles evening",
      "rangoli design doorstep diwali morning",
      "diwali mela fairground lights evening",
      "community diwali celebration hall lights",
      "balcony diyas lit city lights below diwali",
      "sweet shop diwali selection morning",
      "diwali fireworks park night crowd",
      "home drawing room diwali decorations evening",
      "traditional diwali puja table offerings",
      "street rangoli competition diwali morning",
      "diwali lights market shopping evening",
      "family home diwali gathering evening warm",
      "rooftop diyas city spread below diwali",
      "diwali lantern release night sky"
    ],
    "poses": [
      "both lighting diyas together doorstep diwali evening",
      "both in traditional dress rooftop fireworks diwali",
      "both making rangoli together doorstep morning",
      "both at puja ceremony traditional diwali",
      "both exchanging diwali gifts traditional",
      "both at diwali mela fairground evening",
      "both watching fireworks diwali rooftop night",
      "both at diwali feast table traditional",
      "both releasing sky lanterns diwali night",
      "both in traditional dress diwali family gathering"
    ],
    "looks": [
      "traditional salwar kameez and kurta diwali each",
      "saree and sherwani formal diwali each elaborate",
      "embroidered kurta pyjama and lehenga each",
      "silk saree and bandhgala suit each formal",
      "casual kurta and churidar each diwali",
      "gold embroidered traditional each jewel tones",
      "deep jewel tones traditional each diwali",
      "contemporary indo-western fusion diwali each",
      "traditional gold and red each diwali",
      "simple cotton kurta each informal diwali"
    ],
    "promptSuffix": "Colour grade: deep jewel tones — emerald, ruby, sapphire, gold — the light of a thousand diyas. Warm firelight against deep night sky. Rich, luminous, celebratory. The emotional tension is atmosphere only. Do not illustrate it literally."
  },
  {
    "id": "chinesenewyear",
    "name": "CHINESE NEW YEAR",
    "sub": "Red Lanterns & the Lunar Turn",
    "color": "#c41400",
    "tensions": [
      "old vs. new",
      "luck vs. fear",
      "together vs. scattered",
      "tradition vs. change",
      "past vs. future",
      "the family table vs. the world outside",
      "red vs. the ordinary",
      "celebration vs. longing",
      "the year ending vs. the year beginning",
      "home vs. diaspora"
    ],
    "affinities": {
      "old vs. new": {
        "locs": [
          "chinese new year lanterns street night red gold",
          "lion dance street performance chinese new year morning",
          "family reunion dinner table chinese new year eve"
        ],
        "poses": [
          "both holding red lanterns chinese new year night",
          "both at reunion dinner table new year"
        ],
        "looks": [
          "red qipao cheongsam and changshan traditional each",
          "red and gold traditional chinese new year each"
        ]
      }
    },
    "locs": [
      "chinese new year lanterns street night red gold",
      "lion dance street performance chinese new year morning",
      "family reunion dinner table chinese new year eve",
      "temple prayers new year morning incense",
      "fireworks chinatown street midnight new year",
      "lantern festival street night chinese new year",
      "market new year goods red decorations morning",
      "chinatown parade dragon lion dance day",
      "red envelope giving family chinese new year",
      "family home decorations red gold new year",
      "night market chinese new year lanterns evening",
      "temple fair new year blessing morning",
      "dumpling making family table new year eve",
      "chinese new year fair stalls lights evening",
      "harbour fireworks chinese new year midnight",
      "restaurant family new year dinner formal",
      "flower market new year morning purchases",
      "chinatown exterior red lanterns night",
      "community hall chinese new year celebration",
      "family home new year eve countdown midnight"
    ],
    "poses": [
      "both holding red lanterns chinese new year night",
      "both at reunion dinner table new year eve",
      "both watching lion dance street morning",
      "both giving red envelope traditional gesture",
      "both at temple new year prayers morning incense",
      "both at night market lanterns evening chinese new year",
      "both watching fireworks chinatown midnight",
      "both making dumplings together family new year eve",
      "both in parade crowd chinese new year day",
      "both at flower market morning new year"
    ],
    "looks": [
      "red qipao cheongsam and changshan traditional each",
      "red and gold traditional chinese new year each elaborate",
      "silk embroidered traditional each chinese new year",
      "contemporary red formal each chinese new year",
      "simple red accent traditional each",
      "mandarin collar suit and dress each traditional",
      "red and black formal each chinese new year",
      "traditional embroidered each regional chinese",
      "casual red each chinese new year lucky",
      "gold and red festive each chinese new year"
    ],
    "promptSuffix": "Colour grade: deep red, gold, the warm orange of lantern light — the palette of Chinese New Year. Fireworks, silk, the warmth of family reunion. Rich and celebratory. The emotional tension is atmosphere only. Do not illustrate it literally."
  }
];

const ERAS=[
  {label:'1940s',tone:'1940s',hint:'high-waist trousers, utility tops'},
  {label:'1960s',tone:'1960s',hint:'slim-cut separates, polo necks'},
  {label:'1970s',tone:'1970s',hint:'wide-leg silhouettes, earth tones'},
  {label:'1980s',tone:'1980s',hint:'oversized shoulders, acid-wash denim'},
  {label:'1990s',tone:'1990s',hint:'baggy jeans, cropped tees'},
  {label:'Early 2000s',tone:'early 2000s',hint:'low-rise cuts, jersey fabric'},
  {label:'2010s',tone:'2010s',hint:'normcore basics, minimal layers'},
  {label:'Now',tone:'contemporary',hint:'oversized technical wear'}
];

const CONNECTORS={
  fight:['locked in','caught between','pressed into','burning through','held at'],
  road:['chasing','burning through','defined by','racing through','cutting across'],
  water:['suspended in','pulled between','surrendered to','drifting through','submerged in'],
  city:['swallowed by','cut from','pressed into','lost inside','framed by'],
  mountain:['exposed to','measured against','dwarfed by','set against','standing above'],
  night:['buried in','found inside','lit by','hidden within','burning through'],
  rain:['lost in','caught inside','moving through','drenched in','surrendered to'],
  dust:['lost in','dissolving into','surviving in','swallowed by','bleached by'],
  gold:['consumed by','hollow inside','glittering against','drowning in','edged by'],
  cold:['buried in','burning through','exposed to','frozen inside','cut by'],
  concrete:['dwarfed by','pressed into','cut from','locked inside','set against'],
  iron:['shaped by','pressed against','built inside','forged in','heavy with'],
  glass:['doubled in','divided by','dissolved into','reflected across','caught in'],
  wild:['released into','stripped to','running through','swallowed by','lost in'],
  court:['competing through','decided by','equal in','divided by','locked in'],
  stage:['performing in','collapsing into','lit by','exposed inside','framed by'],
  romance:['drawn toward','held inside','falling through','suspended in','reaching across'],
  music:['carried by','lost inside','vibrating through','suspended in','found in'],
  history:['standing inside','framed by','measured against','buried in','marked by'],
  mystery:['hunted through','hidden inside','dissolving into','caught in','watching from'],
  spring:['blooming through','released into','waking inside','softened by','opening toward'],
  hero:['forged in','burning through','rising from','locked in','defined by'],
  space:['adrift in','suspended against','lost inside','measured against','orbiting'],
  travel:['arriving into','wandering through','lost inside','defined by','crossing'],
  art:['rendered in','dissolving into','framed by','translated through','held inside'],
  mexico:['rooted in','alive inside','burning through','suspended in','framed by'],
  usa:['caught between','defined by','burning through','held inside','pressed against'],
  canada:['exposed to','held inside','lost in','measured against','released into'],
  caribbean:['dissolved in','carried by','burning through','suspended in','alive inside']
,
  desert:['adrift in','crossing','lost in','under','carved from'],
  surreal:['suspended in','within','dissolving into','becoming','reflected as'],
  summer:['under','basking in','along','amid','caught in'],
  autumn:['through','beneath','along','amid','into'],
  winter:['in','against','beside','sheltered by','surrounded by'],
  absurd:['inexplicably in','despite','somehow amid','oblivious to','attempting'],
  underworld:['descending into','passing through','at the edge of','within','before'],
  storm:['against','beneath','inside','through','caught in'],
  underground:['in','amid','within','deep in','part of'],
  expedition:['discovering','deep within','at the edge of','amid','mapping'],
  rooftop:['above','overlooking','high over','on top of','above the'],
  monastery:['within','beside','at the edge of','in the silence of','inside'],
  pier:['at the end of','along','above','beside','at'],
  market:['amid','through','between','inside','along'],
  circus:['inside','beneath','above','under the lights of','in the ring of'],
  farm:['across','through','beside','amid','at the edge of']};;

const TEMPLATES=[
  // Variant 1 — Cinematic Scale
  function(t){
    var ten=t.tension?translateTension(t.tension):null;
    var conn=t.connector||'amid';
    var sentence='';
    if(ten&&t.pose&&t.loc)
      sentence=ten+' \u2014 '+t.pose+' '+conn+' '+t.loc;
    else if(ten&&t.pose)
      sentence=ten+', '+t.pose;
    else if(ten&&t.loc)
      sentence=ten+' '+conn+' '+t.loc;
    else if(t.pose&&t.loc)
      sentence=t.pose+' '+conn+' '+t.loc;
    else sentence=ten||t.pose||t.loc||'';
    if(t.look) sentence+=', wearing '+t.look;
    if(t.lighting) sentence+=', bathed in '+t.lighting;
    if(t.era&&!t.hasPrefix) sentence+=', '+t.era+' aesthetic';
    return sentence+'.';
  },
  // Variant 2 — Human Scale: 50mm reportage, full body, body language reads
  function(t){
    var ten=t.tension?translateTension(t.tension):null;
    var conn=t.connector||'amid';
    var sentence='';
    if(t.pose&&t.loc) sentence=t.pose+', '+conn+' '+t.loc;
    else if(t.pose) sentence=t.pose;
    else if(t.loc) sentence=t.loc;
    if(ten) sentence=(sentence?sentence+' — ':'')+ten;
    if(t.look) sentence+=', wearing '+t.look;
    if(t.lighting&&!t.hasPrefix) sentence+=', '+t.lighting;
    if(t.era&&!t.hasPrefix) sentence+=', '+t.era+' aesthetic';
    return sentence+'.';
  },
  // Variant 3 — Intimacy
  function(t){
    var ten=t.tension?translateTension(t.tension):null;
    var conn=t.connector||'inside';
    var sentence='';
    if(t.pose&&t.loc)
      sentence=t.pose+', '+conn+' '+t.loc;
    else if(t.pose)
      sentence=t.pose;
    else if(t.loc)
      sentence=conn+' '+t.loc;
    if(ten) sentence+=' \u2014 '+ten;
    if(t.look) sentence+=', dressed in '+t.look;
    if(t.lighting) sentence+=', under '+t.lighting;
    if(t.era&&!t.hasPrefix) sentence+=', '+t.era+' palette';
    return sentence+'.';
  },
  // Variant 4 — Essential
  function(t){
    var ten=t.tension?translateTension(t.tension):null;
    var conn=t.connector||'against';
    var sentence='';
    if(t.pose&&t.loc)
      sentence=t.pose+' '+conn+' '+t.loc;
    else if(t.pose)
      sentence=t.pose;
    else if(t.loc)
      sentence=t.loc;
    if(ten) sentence=ten+'. '+sentence;
    if(t.lighting&&!t.hasPrefix) sentence+=', '+t.lighting;
    if(t.look) sentence+=', wearing '+t.look;
    return sentence+'.';
  },
  // Variant 5 — Location-Led
  function(t){
    var ten=t.tension?translateTension(t.tension):null;
    var sentence='';
    if(t.loc&&t.pose)
      sentence=t.loc+' — '+t.pose;
    else if(t.loc)
      sentence=t.loc;
    else if(t.pose)
      sentence=t.pose;
    if(ten) sentence+=', '+ten;
    if(t.look) sentence+=', wearing '+t.look;
    if(t.lighting&&!t.hasPrefix) sentence+=', '+t.lighting;
    if(t.era&&!t.hasPrefix) sentence+=', '+t.era+' era';
    return sentence+'.';
  },
  // Variant 6 — Wardrobe-Led
  function(t){
    var ten=t.tension?translateTension(t.tension):null;
    var conn=t.connector||'amid';
    var sentence='';
    if(t.look)
      sentence='Dressed in '+t.look;
    if(t.pose&&t.loc)
      sentence+=(t.look?', ':'')+t.pose+' '+conn+' '+t.loc;
    else if(t.pose)
      sentence+=(t.look?', ':'')+t.pose;
    else if(t.loc)
      sentence+=(t.look?', '+conn+' ':'')+t.loc;
    if(ten) sentence+='. '+ten;
    if(t.lighting&&!t.hasPrefix) sentence+=', '+t.lighting;
    if(t.era&&!t.hasPrefix) sentence+=', '+t.era+' aesthetic';
    return sentence+'.';
  }
];



function buildFixed(){
  const subj = SUBJECTS.find(s=>s.value===S.subject) || SUBJECTS[1];
  return 'Create a '+S.ratio+' '+subj.prefix+' \u2014';
}

const S = { world:null, tension:null, loc:null, pose:null, look:null, era:null, lighting:null, shot:null, ratio:'4:5', subject:'couple' };
const LOCKS = { world:false, tension:false, loc:false, pose:false, look:false };
const history = [];

function pick(a){ return a[Math.floor(Math.random()*a.length)]; }
function getWorld(){ return WORLDS.find(w=>w.id===S.world); }

function applyWorldColor(color){
  document.documentElement.style.setProperty('--wc', color || '#4a8fff');
}

// ── INIT ──────────────────────────────────────────────────────
function updateDynamicStats(){
  var worldCount=WORLDS.length;
  var tensionCount=WORLDS.reduce(function(sum,w){return sum+w.tensions.length;},0);
  var tensionLabel=tensionCount+'+';
  var sw=document.getElementById('stat-worlds');
  var st=document.getElementById('stat-tensions');
  if(sw) sw.textContent=worldCount;
  if(st) st.textContent=tensionLabel;
  var hw=document.getElementById('hero-sub-worlds');
  var ht=document.getElementById('hero-sub-tensions');
  if(hw) hw.textContent=worldCount;
  if(ht) ht.textContent=tensionLabel;
  document.title='CouplesAI Portrait Generator — '+worldCount+' Worlds · Cinematic AI Portrait Prompts';
  var md=document.getElementById('meta-desc');
  if(md) md.setAttribute('content','Generate cinematic AI portrait prompts for couples, solo subjects and groups. '+worldCount+' worlds, '+tensionLabel+' tensions, lighting, shot type and wardrobe — all in one click.');
}

function init(){
  const ws = document.getElementById('s-world');
  const WORLD_CATS=[
    ['❤️  Emotion & Relationship',['romance','stage','mystery','protest','wedding','underworld']],
    ['🌏  Nature & Landscape',['mountain','water','wild','jungle','desert','rain','cold']],
    ['🌆  Time & Atmosphere',['night','history','dust','storm']],
    ['🌍  Place & Culture',['city','road','canada','caribbean','mexico','usa','rooftop']],
    ['🎵  Performance & Life',['music','court','circus','hero']],
    ['✨  Style & Craft',['gold','art','runway','studio','archive']],
    ['🚀  Beyond Reality',['space','surreal','underground','expedition','cctv','bmovie']],
    ['🎉  Celebrations & Holidays',['valentines','mothersday','fourthofjuly','septiembre16','thanksgiving','halloween','diadelosmuertos','christmas','newyearseve','diwali','chinesenewyear']]
  ];
  const wMap={};
  WORLDS.forEach(function(w){wMap[w.id]=w;});
  WORLD_CATS.forEach(function(cat){
    const grp=document.createElement('optgroup');
    grp.label=cat[0];
    cat[1].forEach(function(id){
      const w=wMap[id]; if(!w) return;
      const o=document.createElement('option');
      o.value=w.id; o.textContent=w.name+' — '+w.sub;
      grp.appendChild(o);
    });
    ws.appendChild(grp);
  });
  renderEras();
  initLightingShot();
  initRatioSubject();
  initWorldTicker();
  updateDynamicStats();
  updatePrompt();
}

// ── WORLD ─────────────────────────────────────────────────────
const MOOD_WORLDS_LIGHTING_AI=['dusk','spring','romance','gold','night','rain','cold'];
function onWorldChange(){
  if(LOCKS.world) return;
  const id=document.getElementById('s-world').value;
  S.world=id||null;
  document.getElementById('s-world').classList.toggle('has-val',!!id);
  applyWorldColor(id?WORLDS.find(w=>w.id===id)?.color:null);
  if(!LOCKS.tension){S.tension=null;}
  if(!LOCKS.loc){S.loc=null;}
  if(!LOCKS.pose){S.pose=null;}
  if(!LOCKS.look){S.look=null;}
  if(id&&MOOD_WORLDS_LIGHTING_AI.includes(id)&&!LOCKS.lighting){
    S.lighting='__ai__';
    const ls=document.getElementById('s-lighting');
    if(ls){ls.value='__ai__';ls.classList.remove('has-val');}
  } else if(!LOCKS.lighting){
    S.lighting=null;
    const ls=document.getElementById('s-lighting');
    if(ls){ls.value='';ls.classList.remove('has-val');}
  }
  populateTension();
  populateDials();
  updatePrompt();
  if(typeof updateWorldBar==='function') updateWorldBar();
}

function populateTension(){
  const sel = document.getElementById('s-tension');
  const w = getWorld();
  sel.innerHTML = '<option value="">\u2014 choose tension \u2014</option>';
  sel.disabled = !w;
  if(!w){ S.tension=null; return; }
  w.tensions.forEach(t=>{
    const o=document.createElement('option'); o.value=t; o.textContent=t; sel.appendChild(o);
  });
  if(S.tension && w.tensions.includes(S.tension)) sel.value = S.tension;
  sel.classList.toggle('has-val', !!S.tension);
}

function onTensionChange(){
  if(LOCKS.tension) return;
  S.tension = document.getElementById('s-tension').value || null;
  document.getElementById('s-tension').classList.toggle('has-val', !!S.tension);
  // repopulate dials with affinity suggestions
  populateDials();
  updatePrompt();
}

// ── DIALS ─────────────────────────────────────────────────────
function populateDials(){
  populateDial('loc'); populatePoseForSubject(); populateDial('look');
}

function populateDial(key){
  const sel = document.getElementById('s-'+key);
  const w = getWorld();
  const pool = key==='loc'?'locs':key==='pose'?'poses':'looks';
  sel.innerHTML = '<option value="">\u2014 choose '+key+' \u2014</option><option value="__ai__">✦ AI decides</option>';
  sel.disabled = !w;
  if(!w) return;
  const aff = S.tension && w.affinities && w.affinities[S.tension] ? (w.affinities[S.tension][pool]||[]) : [];
  if(aff.length){
    const sg=document.createElement('optgroup'); sg.label='▸ Best for this tension';
    aff.forEach(v=>{ const o=document.createElement('option');o.value=v;o.textContent=v;sg.appendChild(o); });
    sel.appendChild(sg);
    const ag=document.createElement('optgroup'); ag.label='▸ All options';
    w[pool].filter(v=>!aff.includes(v)).forEach(v=>{ const o=document.createElement('option');o.value=v;o.textContent=v;ag.appendChild(o); });
    sel.appendChild(ag);
  } else {
    w[pool].forEach(v=>{ const o=document.createElement('option');o.value=v;o.textContent=v;sel.appendChild(o); });
  }
  if(S[key]) { try{ sel.value=S[key]; }catch(e){} }
  sel.classList.toggle('has-val', !!(S[key] && S[key]!=='__ai__'));
}

function onDialChange(key){
  if(LOCKS[key]) return;
  const v = document.getElementById('s-'+key).value;
  S[key] = v || null;
  document.getElementById('s-'+key).classList.toggle('has-val', !!(v && v!=='__ai__'));
  if(key==='loc'&&typeof repopulateLighting==='function') repopulateLighting();
  updatePrompt();
}

// ── LOCK ──────────────────────────────────────────────────────
function toggleLock(key){
  LOCKS[key] = !LOCKS[key];
  const btn = document.getElementById('lk-'+key);
  btn.classList.toggle('locked', LOCKS[key]);
  btn.innerHTML = LOCKS[key] ? '&#x1F512;' : '&#x1F513;';
  const sel = document.getElementById('s-'+key);
  if(sel) sel.style.opacity = LOCKS[key] ? '.6' : '1';
}

// ── REROLL ────────────────────────────────────────────────────
function rerollDial(key){
  const w = getWorld(); if(!w) return;
  if(LOCKS[key]) return;
  if(key==='tension'){
    S.tension = pick(w.tensions);
    document.getElementById('s-tension').value = S.tension;
    document.getElementById('s-tension').classList.add('has-val');
    populateDials();
    updatePrompt(); return;
  }
  const pool = key==='loc'?'locs':key==='pose'?'poses':'looks';
  const aff = S.tension && w.affinities && w.affinities[S.tension] ? (w.affinities[S.tension][pool]||[]) : [];
  const src = aff.length && Math.random()<.7 ? aff : w[pool];
  S[key] = pick(src);
  const sel = document.getElementById('s-'+key);
  sel.value = S[key]; sel.classList.add('has-val');
  updatePrompt();
}

// ── ERA ───────────────────────────────────────────────────────
function renderEras(){
  const c = document.getElementById('era-pills');
  ERAS.forEach(e=>{
    const b=document.createElement('button'); b.className='pill'; b.textContent=e.label;
    b.onclick=()=>{
      S.era = S.era===e.label ? null : e.label;
      document.querySelectorAll('.pill').forEach(p=>p.classList.toggle('active', p.textContent===S.era));
      updatePrompt();
    };
    c.appendChild(b);
  });
}


const LIGHTING_OPTIONS = [
  "golden hour backlight",
  "harsh overhead midday sun",
  "flat overcast diffused light",
  "blue hour last light before dark",
  "sunrise side rim light",
  "moonlight cold and directional",
  "fog-diffused ambient no source",
  "desert bleached high noon",
  "storm light bruised pre-rain",
  "dappled forest canopy light",
  "open shade soft directional",
  "tungsten window light warm interior",
  "candlelight close intimate warm",
  "fire glow flickering warm orange",
  "neon spill city night colour",
  "sodium street light orange night",
  "fluorescent flat institutional",
  "deep shadow minimal available light",
  "backlight silhouette blown out behind",
  "rain-diffused ambient wet reflections"
];

const LIGHTING_OUTDOOR = ["golden hour backlight", "harsh overhead midday sun", "flat overcast diffused light", "blue hour last light before dark", "sunrise side rim light", "moonlight cold and directional", "fog-diffused ambient no source", "desert bleached high noon", "storm light bruised pre-rain", "dappled forest canopy light", "open shade soft directional", "rain-diffused ambient wet reflections", "backlight silhouette blown out behind", "deep shadow minimal available light"];
const LIGHTING_INDOOR = ["tungsten window light warm interior", "candlelight close intimate warm", "fire glow flickering warm orange", "neon spill city night colour", "sodium street light orange night", "fluorescent flat institutional", "deep shadow minimal available light", "backlight silhouette blown out behind", "single window soft side light", "bare bulb overhead warm", "practical lamp warm pool", "strip light cool overhead"];
const LOC_TYPES = {"desert highway at dusk heat shimmer": "outdoor", "empty highway rest stop": "outdoor", "wet asphalt overpass night reflection": "outdoor", "mountain switchback edge vertiginous": "outdoor", "motorway at night light trails": "outdoor", "freeway on-ramp shoulder": "outdoor", "interstate service road empty": "outdoor", "empty airstrip tarmac heat": "outdoor", "state highway no buildings horizon": "outdoor", "Route 66 desert diner exterior": "outdoor", "Route 66 motel sign rusted": "outdoor", "Route 66 filling station abandoned": "outdoor", "road tunnel exit light end": "outdoor", "bridge expansion joint middle": "outdoor", "highway billboard empty": "outdoor", "level crossing arms down alone": "outdoor", "toll booth abandoned": "outdoor", "weigh station closed": "outdoor", "truck stop empty 3am": "outdoor", "drive-in movie screen empty": "outdoor", "car wash tunnel entrance": "outdoor", "highway flyover construction": "outdoor", "motorway service park dark": "outdoor", "roundabout centre at dawn": "outdoor", "main road empty market town": "outdoor", "B-road countryside both verges": "outdoor", "coastal highway cliff edge": "outdoor", "mountain pass summit road": "outdoor", "valley road river beside": "outdoor", "forest road canopy over": "outdoor", "desert road mirage ahead": "outdoor", "dirt road becoming tarmac": "outdoor", "gravel road end tarmac starts": "outdoor", "North American highway billboard": "outdoor", "Australian outback highway road train track": "outdoor", "Irish bog road endless narrow": "outdoor", "Scottish single-track passing place": "outdoor", "Norwegian fjord road tunnel": "outdoor", "Icelandic ring road empty": "outdoor", "New Zealand coastal highway": "outdoor", "South African coastal road": "outdoor", "Patagonian ruta 40 gravel": "outdoor", "Chilean carretera austral": "outdoor", "Bolivian salar crossing white": "outdoor", "Brazilian BR-116 jungle edge": "outdoor", "Colombian Pan-American mountain": "outdoor", "Peru Cusco mountain road": "outdoor", "Mexico highway free road": "outdoor", "Trans-Siberian highway winter": "outdoor", "Silk Road Kyrgyzstan pass": "outdoor", "ocean at horizon golden hour": "outdoor", "empty pool at dawn": "both", "harbor pier edge": "outdoor", "cliff above ocean": "outdoor", "surf break line": "both", "sea cave entrance low tide": "both", "rocky tidal pool exposed": "both", "kelp forest shallows": "outdoor", "lake at first light still water": "outdoor", "waterfall base mist rising": "outdoor", "river bend at dusk": "outdoor", "open sea swell no land": "outdoor", "estuary at golden hour": "outdoor", "coral reef shallows clear": "both", "mountain lake snow-edged": "outdoor", "mangrove channel slow water": "both", "delta mouth wide sky": "both", "ocean trench research vessel deck": "outdoor", "fjord still water reflection": "both", "reservoir concrete dam edge": "both", "hot spring sulfur mist": "both", "geyser field Iceland": "outdoor", "alpine lake turquoise": "outdoor", "cenote entrance Mexico": "both", "limestone pool Halong Bay": "both", "infinity pool edge ocean drop": "outdoor", "lido pool 1930s architecture": "both", "sea loch Scotland mist": "outdoor", "frozen lake crack line": "outdoor", "lagoon atoll Pacific": "both", "beach at low tide sandbars": "outdoor", "submerged ruins shallow water": "outdoor", "rain-swollen river bank": "outdoor", "dam spillway roar": "both", "canal Venice dawn": "outdoor", "Venice canal gondola point": "outdoor", "tide pool Oregon coast": "outdoor", "Amazon tributary dawn": "both", "Lake Baikal winter ice": "outdoor", "Lake Titicaca reed island": "outdoor", "Dead Sea float horizon": "outdoor", "Maldives lagoon clear": "both", "Irish sea cliffs base": "outdoor", "Sardinia grotto entrance": "both", "Faroe Islands sea stack": "outdoor", "Iceland black sand waves": "both", "Nile at dusk feluccas": "both", "Ganges ghat at dawn": "both", "Thames at low tide mud": "both", "Hudson River pier dusk": "outdoor", "empty intersection at night signal change": "both", "parking structure roof level top": "outdoor", "fire escape above street view": "outdoor", "overpass concrete shadow below": "outdoor", "dawn construction site steel and scaffold": "outdoor", "subway platform empty off-peak": "indoor", "city park bench early morning": "outdoor", "coffee shop window condensation": "both", "laundromat 4am": "indoor", "24h bodega neon light": "both", "rooftop water tower base": "outdoor", "alley between glass towers": "outdoor", "bridge pedestrian walkway empty": "outdoor", "skateable plaza granite empty": "outdoor", "civic square fountain off": "both", "brutalist estate courtyard": "outdoor", "social housing balcony tower block": "both", "independent cinema marquee": "indoor", "corner phone box smashed": "both", "urban canal towpath": "outdoor", "disused railway viaduct arch": "both", "street art mural two-story": "outdoor", "fire station apron empty": "both", "police precinct steps empty night": "both", "boxing gym exterior early": "outdoor", "record store closing time": "both", "bookshop after hours window": "both", "bus station predawn": "both", "taxi rank 3am": "both", "dive bar exterior empty": "outdoor", "New York Meatpacking district predawn": "both", "Brooklyn bridge walk empty": "outdoor", "Manhattan skyline from Queens": "both", "Chicago L track level": "outdoor", "Los Angeles freeway overpass empty": "outdoor", "San Francisco Castro slope": "both", "London Borough Market early": "both", "East London railway arch": "both", "Manchester Northern Quarter": "both", "Berlin Kreuzberg street dawn": "outdoor", "Paris Canal St Martin": "outdoor", "Lyon traboule passage": "both", "Tokyo Shinjuku empty 5am": "both", "Tokyo Harajuku street alone": "outdoor", "Osaka Dotonbori night reflection": "outdoor", "Seoul Hongdae street art": "outdoor", "Singapore shop house row": "both", "Hong Kong back street incense": "outdoor", "Mumbai Marine Drive empty": "both", "Delhi Lodi Estate night": "both", "Cairo Khan el Khalili at dusk": "both", "ridge at altitude blue sky above": "outdoor", "snowfield at dusk pink light": "outdoor", "glacier crevasse edge": "outdoor", "rock face midway pitch": "outdoor", "alpine meadow wildflowers": "outdoor", "summit cairn wind-blown": "outdoor", "tree line edge looking up": "outdoor", "scree slope descent": "outdoor", "high camp tent door morning": "outdoor", "alpine lake reflection": "outdoor", "frozen waterfall ice wall": "outdoor", "boulder field at sunrise": "outdoor", "mountain hut exterior dawn": "outdoor", "narrow couloir ice": "outdoor", "ridgeline silhouette both sides visible": "outdoor", "cable car tower base": "outdoor", "rocky summit cross": "outdoor", "lookout tower wooden stairs": "outdoor", "talus slope scramble": "outdoor", "snow cornice edge careful": "outdoor", "Dolomite rock tower base": "outdoor", "Patagonia spire mist": "outdoor", "Himalayan base camp prayer flags": "outdoor", "Alaska glacier terminus": "outdoor", "Scottish highland ridge": "outdoor", "Swiss alpine meadow cowbell": "outdoor", "Rocky Mountain aspen grove autumn": "outdoor", "Norwegian fjord above": "outdoor", "New Zealand Southern Alps": "outdoor", "Andes condor sky above": "outdoor", "Atlas Mountains red earth": "outdoor", "Ethiopian Simien ridge": "outdoor", "Caucasus range ancient stone": "outdoor", "Pyrenees pass stone refuge": "outdoor", "Japanese Alps cedar forest": "outdoor", "Taiwan high mountain fog": "outdoor", "Philippine volcano caldera rim": "outdoor", "East African rift escarpment": "outdoor", "Carpathian forest ridge": "outdoor", "Urals ancient low ridge": "outdoor", "Appalachian bald summit": "outdoor", "Sierra Nevada granite dome": "outdoor", "Rockies moraine lake": "outdoor", "Mt Cook glacier New Zealand": "outdoor", "Iceland lava field above cloud": "outdoor", "Faroe plateau edge cliff": "outdoor", "Ben Nevis CIC hut below": "outdoor", "Chamonix aiguille needle": "outdoor", "street lamp cone of light empty": "outdoor", "predawn empty boulevard": "outdoor", "24h diner at 3am": "outdoor", "rooftop at midnight city below": "outdoor", "rain-soaked empty street lamp reflection": "outdoor", "neon sign alley close": "outdoor", "night club exterior queue gone": "outdoor", "casino exit early hours": "outdoor", "hotel lobby late night": "indoor", "city bridge walking both sides empty": "outdoor", "underground car park empty level": "outdoor", "hospital exterior 4am": "outdoor", "night bus last stop end line": "outdoor", "kebab shop 2am queue": "outdoor", "phone box interior lit": "indoor", "underpass graffiti night colour": "outdoor", "harbour lights reflection water night": "outdoor", "ferry terminal last boat gone": "outdoor", "train station concourse empty night": "outdoor", "airport arrivals 5am": "outdoor", "fuel station forecourt night": "outdoor", "empty beach night city beyond": "outdoor", "park night fountain lit": "outdoor", "botanical garden night event": "outdoor", "stadium exterior night event over": "outdoor", "theatre stage door night": "both", "concert venue exit after": "outdoor", "bar exterior last call street": "outdoor", "arcade empty closing time": "outdoor", "bowling alley last game": "outdoor", "Tokyo Shinjuku Kabukicho neon": "outdoor", "Seoul Hongdae night street": "outdoor", "Hong Kong Mong Kok night dense": "outdoor", "Taipei night market open": "outdoor", "Bangkok Patpong night market": "outdoor", "Ho Chi Minh night street food": "outdoor", "Singapore Clarke Quay night": "outdoor", "Kuala Lumpur Petaling night": "outdoor", "New York Times Square 4am": "outdoor", "Las Vegas strip 3am": "outdoor", "Chicago Riverwalk night": "outdoor", "Miami South Beach night": "outdoor", "New Orleans Bourbon St late": "outdoor", "Nashville Broadway night": "outdoor", "London West End 2am": "outdoor", "Paris Pigalle night": "outdoor", "Berlin Kurfürstendamm night": "outdoor", "Amsterdam red light area outside": "outdoor", "Brussels Grande Place night": "outdoor", "Prague Wenceslas night": "outdoor", "rain-soaked empty intersection": "outdoor", "wet concrete underpass columns": "outdoor", "open field in downpour dark sky": "outdoor", "flooded alley mid-storm": "outdoor", "motorway hard shoulder rain": "outdoor", "coastal path in gale rain horizontal": "outdoor", "park bench under tree both soaked": "outdoor", "railway platform empty rain": "outdoor", "market awning shelter shelter": "outdoor", "canal towpath downpour reflection": "outdoor", "football pitch waterlogged rain": "outdoor", "dockside warehouse rain sheeting": "outdoor", "London night rain street empty": "outdoor", "Tokyo rain alley lanterns": "outdoor", "New York rain fire escape dripping": "outdoor", "Paris rain cobblestones reflecting": "outdoor", "Edinburgh castle rain mist": "outdoor", "Dublin rain Georgian terrace": "outdoor", "Amsterdam canal bridge rain": "outdoor", "Prague rain old town cobble": "outdoor", "Lisbon rain hills tram tracks": "outdoor", "Barcelona rain Gothic quarter": "outdoor", "Rome rain colosseum deserted": "outdoor", "Naples rain narrow alley": "outdoor", "Bangkok rain monsoon street": "outdoor", "Ho Chi Minh rain street vendor": "outdoor", "Mumbai monsoon empty road": "outdoor", "Dhaka monsoon flooding knee-deep": "outdoor", "Kolkata rain tram tracks": "outdoor", "Jakarta monsoon flooded lane": "outdoor", "Manila typhoon shelter overpass": "outdoor", "Seoul rain Cheonggyecheon stream": "outdoor", "Taipei rain night market closed": "outdoor", "Hong Kong rain typhoon shelter": "outdoor", "Singapore rain Marina Bay": "outdoor", "Kuala Lumpur rain twin towers mist": "outdoor", "Sydney rain opera house steps": "outdoor", "Melbourne rain tram city": "outdoor", "Auckland rain harbour bridge": "outdoor", "Cape Town rain waterfront": "outdoor", "Rio rain favela rooftop": "outdoor", "Bogota rain colonial centre": "outdoor", "Lima rain Pacific mist": "outdoor", "Buenos Aires rain cobblestone": "outdoor", "Santiago rain Andes clouds": "outdoor", "Mexico City rain Zocalo": "outdoor", "Havana rain Malecon wave spray": "outdoor", "Kingston rain waterfront": "outdoor", "Lagos rain flooded street": "outdoor", "Nairobi rain red earth road": "outdoor", "Addis Ababa rain mountain mist": "outdoor", "salt flat at noon heat shimmer": "outdoor", "cracked desert floor geometric pattern": "outdoor", "ghost town main street tumbleweed": "outdoor", "red rock canyon base shadow": "outdoor", "dry riverbed sand exposed": "outdoor", "abandoned mine entrance dust motes": "outdoor", "ranch road dirt horizon heat": "outdoor", "western film set deserted main street": "outdoor", "dried-up lake bed white crust": "outdoor", "Oklahoma dust bowl farmhouse ruin": "outdoor", "Texas panhandle flat nothing": "outdoor", "New Mexico arroyo red earth": "outdoor", "Arizona mesa top wind": "outdoor", "Nevada high desert empty": "outdoor", "Utah canyon narrows sand": "outdoor", "Kansas wheat field harvest dust": "outdoor", "Colorado eastern plains empty": "outdoor", "Nebraska sandhills ridge wind": "outdoor", "Montana badlands dry ravine": "outdoor", "Wyoming oil field pump jack": "outdoor", "Idaho lava plain empty": "outdoor", "Australia outback red earth track": "outdoor", "Pilbara red dust horizon": "outdoor", "Kimberley dry season gorge": "outdoor", "Northern Territory red rock formation": "outdoor", "South Australia Flinders dry": "outdoor", "Victorian mallee scrub dust": "outdoor", "New South Wales western plains heat": "outdoor", "Queensland channel country dry": "outdoor", "Tasmania dry east coast scrub": "outdoor", "South Africa Karoo scrub kopje": "outdoor", "Namibia Fish River Canyon dry": "outdoor", "Botswana Makgadikgadi salt pan": "outdoor", "Zimbabwe Matobo boulders dry grass": "outdoor", "Zambia dry season valley": "outdoor", "Tanzania dry savannah dust": "outdoor", "Kenya Amboseli dust with Kilimanjaro": "outdoor", "Ethiopia Danakil salt flat heat": "outdoor", "Mali Sahel scrub dry": "outdoor", "Senegal Sahel dust harmattan": "outdoor", "Niger river bend dry season": "outdoor", "Chad scrubland dry season": "outdoor", "Sudan Meroe pyramids sand": "outdoor", "Egypt desert plateau beyond pyramid": "outdoor", "Libya Akakus rock desert": "outdoor", "Algeria Grand Erg dune sea": "outdoor", "Morocco pre-Sahara plains dust": "outdoor", "Tunisia Chott el-Jerid salt": "outdoor", "Iraq Mesopotamia dust plain": "outdoor", "Syria ancient ruins dust": "outdoor", "Jordan desert highway empty": "outdoor", "penthouse terrace at dusk city gold": "both", "private pool party after last guests": "both", "hotel corridor at 2am marble": "indoor", "empty casino floor chips scattered": "both", "rooftop helipad edge gold hour": "outdoor", "yacht deck Mediterranean sun": "both", "private club interior empty morning": "indoor", "art deco ballroom empty night": "both", "museum gala after hours": "both", "champagne bar last bottle": "both", "five-star hotel suite terrace": "both", "private jet interior leather": "indoor", "Concorde Lounge empty Heathrow now museum": "both", "airport first class lounge": "outdoor", "Paris Ritz bar last guest": "both", "Paris George V lobby empty": "indoor", "Monaco Casino terrace": "both", "Cannes Hotel Martinez terrace": "both", "Venice Cipriani water entrance": "both", "Amalfi cliffside hotel pool": "outdoor", "Lake Como villa terrace water": "outdoor", "Portofino harbour superyacht": "outdoor", "Capri faraglioni rocks view hotel": "both", "Côte d'Azur beach club": "outdoor", "Saint-Tropez pampelonne beach": "outdoor", "Antibes villa garden": "outdoor", "Marbella Golden Mile terrace": "both", "Ibiza Destino cliffside pool": "outdoor", "Mykonos Scorpios terrace": "both", "Santorini caldera infinity pool": "both", "Athens Acropolis view hotel": "both", "Istanbul Bosphorus hotel terrace": "both", "Dubai Burj Al Arab suite": "both", "Abu Dhabi Emirates Palace pool": "both", "Doha Museum of Islamic Art terrace": "both", "Singapore Marina Bay Sands pool rooftop": "outdoor", "Hong Kong Mandarin Oriental bar": "both", "Tokyo Park Hyatt bar Lost in Translation": "outdoor", "Bali Four Seasons rice terrace pool": "outdoor", "Maldives overwater villa deck": "both", "Seychelles Fregate private pool": "both", "New York Plaza Oak Bar empty": "outdoor", "New York Mandarin Oriental bar": "both", "LA Chateau Marmont garden": "outdoor", "Miami Faena pool dawn": "both", "London Claridge's bar empty": "outdoor", "London Savoy terrace": "both", "Edinburgh Balmoral palm court": "both", "Paris L'Espadon empty Ritz": "both", "Barcelona Arts hotel pool": "both", "frozen lake at first light crack pattern": "outdoor", "snowfield before storm dark sky": "outdoor", "ice hall empty arena": "outdoor", "ski resort predawn gondola loading": "outdoor", "tundra flat under white sky": "outdoor", "Lapland reindeer forest snow": "outdoor", "Svalbard glacier calving edge": "outdoor", "Iceland black sand and snow": "outdoor", "Greenland ice sheet horizon": "outdoor", "Alaska Brooks Range winter": "outdoor", "Canada Yukon wilderness freeze": "outdoor", "Siberian taiga frozen river": "outdoor", "Russia Baikal clear ice walking": "outdoor", "Finland ice lake sauna shore": "outdoor", "Norway frozen fjord reflection": "outdoor", "Sweden frozen archipelago island": "outdoor", "Faroe Islands frozen waterfall": "outdoor", "Scotland winter glen frozen burn": "outdoor", "Canada Quebec winter ice hotel": "outdoor", "Vermont maple forest snow": "outdoor", "Maine coast harbor frozen": "outdoor", "Colorado high alpine winter meadow": "outdoor", "Utah Bryce Canyon snow hoodoos": "outdoor", "Montana big sky winter open": "outdoor", "Wyoming Yellowstone winter steam": "outdoor", "Patagonia winter wind ice lake": "outdoor", "Antarctic research station exterior": "outdoor", "Sub-Antarctic island storm snow": "outdoor", "New Zealand South Island winter": "outdoor", "Japan Hokkaido snow forest": "outdoor", "Japan Aomori snow trees": "outdoor", "China Harbin ice sculpture": "outdoor", "South Korea Jiri mountain snow": "outdoor", "Kazakhstan steppe winter deep": "outdoor", "Kyrgyz winter yurt snow": "outdoor", "Tibet winter plateau wind": "outdoor", "Bhutan winter mountain dzong": "outdoor", "Pakistan K2 base camp winter": "outdoor", "Nepal Thorong La winter crossing": "outdoor", "Lesotho highland snow blanket": "outdoor", "Drakensberg winter frost dawn": "outdoor", "Morocco Atlas snow": "outdoor", "Spain Pyrenees winter pass": "outdoor", "Austria Dachstein glacier winter": "outdoor", "Switzerland Jungfrau winter": "outdoor", "Italy Dolomites winter ice": "outdoor", "Slovenia Triglav winter snow": "outdoor", "Poland Tatra winter ridge": "outdoor", "Czech Krkonose winter forest": "outdoor", "Romania Fagaras winter ridge": "outdoor", "Bulgaria Rila winter monastery": "outdoor", "brutalist tower base shadow": "both", "empty car park top floor": "outdoor", "underpass pillar zone": "both", "stadium concourse predawn": "both", "modernist housing block exterior": "outdoor", "Barbican London estate walkway": "both", "Robin Hood Gardens ramp": "outdoor", "Trellick Tower base London": "both", "Park Hill Sheffield walkway": "outdoor", "Keeling House balcony": "both", "Balfron Tower base London": "both", "Spa Green Estate London": "both", "Boston City Hall plaza": "outdoor", "Buffalo City Court exterior": "outdoor", "Chicago Daley Center": "both", "Detroit Civic Centre": "both", "Berlin Plattenbauwohnung stairwell": "indoor", "East Berlin Plattenbau exterior": "outdoor", "Prague Panelák courtyard": "outdoor", "Warsaw Muranów block": "both", "Budapest Kelenföld block": "both", "Bucharest Ceaușescu block": "both", "Moscow Khrushchevka courtyard": "outdoor", "St Petersburg industrial canal": "outdoor", "Minsk Government House": "both", "Kyiv modernist institute": "both", "Tbilisi Soviet bloc courtyard": "outdoor", "Yerevan opera square concrete": "both", "Almaty Soviet district": "both", "Tashkent Lenin era concrete": "both", "Pyongyang broad avenue concrete": "outdoor", "Shanghai brutalist university": "both", "Beijing Soviet-era ministry": "both", "Hong Kong public estate walkway": "both", "Singapore HDB void deck": "both", "Chandigarh High Court Le Corbusier": "both", "Ahmedabad IIM Kahn building": "both", "Dhaka National Assembly Louis Kahn": "both", "Islamabad secretariat": "both", "Brasília Oscar Niemeyer piloti": "both", "São Paulo Copan building": "both", "Caracas 23 de Enero block": "both", "Bogotá El Tunal estate": "both", "Mexico City Tlatelolco plaza": "outdoor", "Havana Soviet-era ministry": "both", "Santiago brutalist university": "both", "Lima housing estate concrete": "both", "Lagos National Theatre": "both", "Accra State House exterior": "outdoor", "steel mill floor at shift end glow": "both", "foundry catwalk heat below": "both", "shipyard dry dock ship above": "outdoor", "rail yard at dusk engine steam": "outdoor", "power plant turbine hall enormous": "both", "blast furnace taphole red glow": "both", "crane cab above dock": "outdoor", "rolling mill steel strip bright": "both", "coking plant tower exterior": "outdoor", "drop forge press building interior": "indoor", "scrap metal yard crusher": "outdoor", "industrial chimney base ladder": "both", "welder's bay sparks falling": "outdoor", "rivet hall aircraft construction": "both", "submarine dry dock interior": "indoor", "oil rig platform deck sea around": "outdoor", "bridge construction steel above": "outdoor", "tunnel boring machine front": "both", "viaduct under construction arches": "both", "railway workshop steam": "indoor", "Bessemer converter museum Sheffield": "outdoor", "Ironbridge Telford original location": "outdoor", "Blaenavon ironworks Wales ruin": "outdoor", "Cyfarthfa Castle Merthyr iron": "both", "Port Talbot steelworks Wales": "outdoor", "Scunthorpe steelworks exterior": "outdoor", "Redcar blast furnace ruin": "outdoor", "Motherwell steelworks ruin Scotland": "outdoor", "Cambuslang iron ruin Scotland": "outdoor", "Coatbridge ironworks Scotland": "outdoor", "Essen Zollverein colliery Germany": "both", "Duisburg Landschaftspark industrial ruin": "outdoor", "Völklingen Hütte ironworks Saar": "both", "Bochum industrial museum Ruhr": "both", "Dortmund Hoesch steelwork ruin": "outdoor", "Pittsburgh steel mill converted": "both", "Gary Indiana mill exterior": "outdoor", "Bethlehem PA blast furnace": "both", "Youngstown mill ruin Ohio": "outdoor", "Cleveland Flats industrial": "both", "Detroit industrial waterfront": "both", "Chicago industrial south side": "both", "Birmingham Alabama blast furnace": "both", "Gadsden Alabama iron ruin": "outdoor", "Pueblo Colorado steelwork": "both", "Provo Utah steel mill": "both", "Fontana California Kaiser mill ruin": "outdoor", "Hamilton Ontario Stelco exterior": "outdoor", "Sydney Steelworks Newcastle Australia": "both", "glass tower atrium morning": "both", "floor-to-ceiling window high rise": "both", "mirrored elevator interior": "indoor", "greenhouse botanical winter garden": "outdoor", "glass bridge high crossing": "outdoor", "transparent observation deck": "both", "ice rink glass-enclosed winter": "both", "glass-floored walkway canyon": "outdoor", "crystal palace replica interior": "indoor", "Lloyd's of London interior atrium": "both", "Shard viewing level London": "both", "Gherkin lobby London": "indoor", "Shanghai Tower sky bridge": "outdoor", "Burj Khalifa observation floor": "both", "Taipei 101 observation sky": "both", "One World Trade observation New York": "both", "Rockefeller Center Top of Rock": "both", "Empire State observation day": "both", "Eiffel Tower glass floor second level": "both", "Louvre glass pyramid interior": "indoor", "Centre Pompidou pipe exterior": "outdoor", "Fondation Louis Vuitton glass hull": "both", "Apple Store glass staircase New York": "indoor", "Apple Fifth Ave glass cube": "both", "Milan Galleria Vittorio floor detail": "both", "Crystal Palace Barcelona Ciutadella": "both", "Palacio de Cristal Madrid": "both", "Glass Museum Corning New York": "both", "Corning glass bridge walkway": "outdoor", "Glass Museum Tacoma Washington": "both", "Glassmuseum Ebeltoft Denmark": "both", "Palm House Kew Gardens London": "outdoor", "Temperate House Kew London": "both", "Barbican conservatory London": "both", "Eden Project biome interior": "indoor", "National Glass Centre Sunderland": "both", "Olympic Park velodrome interior": "indoor", "National Aquatics Centre Beijing": "both", "Grimshaw greenhouse Darwin": "both", "Frankfurt glass finance district": "both", "Munich BMW Welt glass atrium": "both", "Hamburg Elbphilharmonie interior": "indoor", "Copenhagen Diamanten glass building": "both", "Helsinki library Oodi interior": "indoor", "Lahti Sibelius Hall interior": "indoor", "Oslo Opera House glass slope": "both", "Bergen Aquarium glass corridor": "indoor", "Stavanger Oil Museum interior": "indoor", "cliff face at golden hour lichen-covered": "outdoor", "dense forest clearing shafts of light": "outdoor", "tidal flat at low tide exposed": "outdoor", "open grassland in wind": "outdoor", "river gorge base spray rising": "outdoor", "bog moorland at dusk": "outdoor", "ancient woodland root tangle": "outdoor", "estuarine mudflat wide sky": "outdoor", "heath in flower purple wide": "outdoor", "chalk downland escarpment edge": "outdoor", "limestone pavement bare": "outdoor", "peat highland loch reflected": "outdoor", "sand dune blowout hollow": "outdoor", "flint shingle beach storm": "outdoor", "reed bed at dawn mist": "outdoor", "old growth redwood base": "outdoor", "Scottish glen river crossing": "outdoor", "Welsh upland reservoir edge": "outdoor", "Peak District gritstone edge": "outdoor", "New Forest ancient oak hollow": "outdoor", "Lake District fell top": "outdoor", "Dartmoor tor wind": "outdoor", "Exmoor coastline cliff path": "outdoor", "Pembrokeshire sea stack distant": "outdoor", "Cairngorm plateau tundra": "outdoor", "Skye Cuillin black rock": "outdoor", "Hebrides machair wildflowers": "outdoor", "Norwegian birch forest autumn": "outdoor", "Swedish elk forest dawn": "outdoor", "Finnish lake island landing": "outdoor", "Estonian bog wooden walkway": "outdoor", "Baltic sea coast pine": "outdoor", "Breton coastal heathland": "outdoor", "Galician mountain forest green": "outdoor", "Sardinian maquis scrub": "outdoor", "Corsican gorge river": "outdoor", "Croatian karst spring": "outdoor", "Slovenian Triglav plateau": "outdoor", "Turkish mountain lake turquoise": "outdoor", "Georgian Caucasus meadow": "outdoor", "Mongolian steppe endless": "outdoor", "Kyrgyz alpine pasture yurt distant": "outdoor", "Tibetan plateau wind-scoured": "outdoor", "Bhutanese forest monastery visible above": "outdoor", "Indian hill station mist": "outdoor", "Sri Lanka highland tea": "outdoor", "New Zealand beech forest": "outdoor", "Australian blue mountain heath": "outdoor", "Tasmanian alpine meadow": "outdoor", "Kiwi rainforest fern gully": "outdoor", "basketball court empty dusk streetlights on": "outdoor", "floodlit court night summer empty": "both", "outdoor basketball court chalk lines faded": "outdoor", "half-court concrete urban playground": "both", "rooftop basketball court city below": "outdoor", "community centre court folded bleachers": "both", "high school gym court morning empty": "both", "college court arena empty pre-game": "both", "NBA arena floor level empty": "both", "Madison Square Garden court empty": "outdoor", "Staples Center floor level empty": "both", "United Center floor empty Chicago": "both", "TD Garden floor Boston empty": "outdoor", "Chase Center floor San Francisco empty": "both", "Barclays Center floor Brooklyn empty": "both", "Crypto.com Arena floor LA empty": "both", "Kia Center floor Orlando empty": "both", "FTX Arena floor Miami empty": "both", "American Airlines Center floor Dallas empty": "both", "Toyota Center floor Houston empty": "both", "tennis clay court Roland Garros empty": "both", "Wimbledon Centre Court grass empty": "both", "US Open hard court Flushing Meadows empty": "outdoor", "Australian Open hard court Melbourne empty": "both", "indoor hard court evening session empty": "indoor", "grass court country club summer": "both", "clay court private estate Mediterranean": "both", "beach volleyball court sand": "outdoor", "volleyball indoor court sports hall": "indoor", "badminton court sports centre": "outdoor", "squash court glass back wall": "both", "racquetball court enclosed": "both", "bocce ball court Italian village": "both", "pétanque court French village shade": "both", "boules court South of France": "both", "table tennis outdoor park": "outdoor", "handball court urban outdoor": "outdoor", "five-a-side astroturf floodlit": "both", "futsal court indoor competitive": "indoor", "padel court glass enclosed modern": "both", "pickleball court USA growing sport": "outdoor", "netball court UK school": "both", "hockey pitch astroturf Olympic": "both", "lacrosse field open": "outdoor", "polo field open expanse": "outdoor", "croquet lawn country house summer": "both", "bowls green English village": "both", "martial arts dojo wooden floor": "both", "boxing ring corner pre-fight": "both", "theater wings offstage spotlight beyond": "both", "empty stage single spotlight overhead": "both", "dressing room mirror strip lights": "both", "backstage corridor low ceiling": "indoor", "loading dock behind venue": "outdoor", "rehearsal space bare walls marked": "both", "fly tower above stage looking down": "both", "pit level orchestra empty": "both", "empty auditorium performer POV": "both", "stage door external night": "both", "green room pre-show nervous": "both", "Royal Opera House stage London": "both", "Sydney Opera House stage": "both", "New York Metropolitan Opera stage": "indoor", "Vienna Staatsoper stage empty": "both", "La Scala Milan stage": "both", "Paris Opéra Garnier stage": "both", "Moscow Bolshoi stage empty": "both", "Berlin Deutsche Oper stage": "both", "Barcelona Liceu stage": "both", "RSC Stratford stage empty": "both", "National Theatre London Lyttelton": "both", "Globe Theatre stage London": "both", "Carnegie Hall stage empty": "both", "Lincoln Center stage New York": "both", "Kennedy Center stage Washington": "both", "Royal Albert Hall stage London": "both", "Barbican Pit London": "both", "Almeida Theatre London stage": "both", "Young Vic stage London": "both", "Donmar Warehouse stage London": "indoor", "Gate Theatre Dublin stage": "both", "Abbey Theatre Dublin stage": "both", "Gaiety Theatre Dublin": "both", "National Theatre Dublin stage": "both", "Broadway stage empty 42nd": "outdoor", "Off-Broadway black box stage": "outdoor", "Edinburgh Fringe venue stage": "both", "Festival Theatre Edinburgh": "both", "Traverse Edinburgh stage": "both", "Usher Hall Edinburgh empty": "both", "Sage Gateshead stage empty": "both", "Bridgewater Hall Manchester stage": "outdoor", "City Varieties Leeds stage": "both", "Theatre Royal Glasgow stage": "both", "Citizens Theatre Glasgow": "both", "King's Theatre Glasgow stage": "both", "Welsh Millennium Centre stage Cardiff": "both", "Sherman Theatre Cardiff": "both", "Chapter Arts Cardiff": "both", "candlelit table for two restaurant": "both", "rooftop golden hour fairy lights": "outdoor", "empty late-night diner last customers": "both", "bookshop aisle corner hidden": "both", "record store listening booth small": "both", "beach at sunset last light": "outdoor", "train carriage night long journey": "both", "cinema back row late showing": "indoor", "corner of a house party quieter": "both", "coffee shop rain outside window": "outdoor", "botanical garden bench afternoon": "outdoor", "night market lanterns above": "both", "ferry crossing at dusk city both sides": "both", "art gallery quieter room afternoon": "both", "park lake bench autumn light": "outdoor", "hotel room curtains light through": "indoor", "breakfast in bed hotel morning": "both", "balcony Mediterranean morning": "both", "bridge over river evening": "outdoor", "kitchen cooking together evening": "indoor", "vintage car drive-in movie": "both", "lakeside dock summer evening": "outdoor", "picnic in park blanket afternoon": "outdoor", "wine bar last two there": "both", "flower market morning": "both", "bed-and-breakfast terrace morning": "both", "lighthouse keeper's cottage exterior": "outdoor", "canal boat evening": "outdoor", "log fire evening cottage interior": "indoor", "hammock between trees afternoon": "both", "ice cream parlour window seat": "outdoor", "vintage diner both side booth": "both", "cinema foyer pre-show": "indoor", "jazz club intimate table": "both", "library reading room empty afternoon": "indoor", "botanical glass house steamy": "both", "sea front promenade evening": "outdoor", "fairground ferris wheel top": "both", "Christmas market mulled wine": "both", "rooftop at sunrise both still up": "outdoor", "apartment window city night": "both", "record shop listening station": "both", "second-hand bookshop afternoon browsing": "both", "independent café rainy Sunday": "both", "vintage theatre matinee": "both", "gallery café after exhibition": "both", "cathedral cloister quiet afternoon": "both", "walled garden summer": "outdoor", "open-air cinema summer evening": "indoor", "food market Saturday both": "both", "empty concert hall seats": "outdoor", "vinyl record store aisle": "both", "garage band practice space": "indoor", "piano shop showroom evening": "both", "rooftop speaker setup": "outdoor", "recording studio control room": "indoor", "mixing desk session both": "both", "live venue empty soundcheck": "both", "tour bus bunk corridor": "indoor", "backstage catering area quiet": "both", "green room pre-gig": "both", "busker pitch underground empty": "both", "jazz club stage between sets": "both", "acoustic session stairwell": "indoor", "music school practice room": "both", "Abbey Road Studios crosswalk London": "indoor", "Sun Studio Memphis empty": "indoor", "Electric Lady Studio New York": "indoor", "Muscle Shoals Alabama studio": "indoor", "Criteria Studios Miami": "indoor", "Capitol Studios Los Angeles": "indoor", "Hansa Tonstudio Berlin": "indoor", "Polar Studios Stockholm": "indoor", "RAK Studios London": "indoor", "Rockfield Studios Wales": "indoor", "Rockfield Quadrangle Wales": "outdoor", "Konk Studios London": "indoor", "Maida Vale Studios BBC London": "indoor", "Air Studios Lyndhurst Hall London": "indoor", "British Grove London": "both", "Metropolis London": "indoor", "Olympic Studios Barnes London": "indoor", "Master Rock London": "both", "Madison Square Garden empty": "outdoor", "O2 Arena London empty": "both", "Radio City Music Hall empty": "both", "Royal Albert Hall stage level": "both", "Wembley Arena empty": "both", "La Cigale Paris empty": "both", "Olympia Paris empty": "both", "Zenith Paris empty": "both", "Berghain Berlin empty": "both", "Fabric London empty": "both", "Printworks London empty": "both", "Tobacco Dock London empty": "outdoor", "The Warehouse Leeds empty": "indoor", "Sub Club Glasgow empty": "both", "Barrowland Glasgow stage": "both", "King Tut's Glasgow stage": "both", "SWG3 Glasgow warehouse": "indoor", "Latitude Festival stage dawn": "both", "ancient amphitheater stepped seats Athens": "outdoor", "crumbling castle courtyard Scotland": "outdoor", "battlefield memorial dawn silence": "outdoor", "abandoned monastery cloister Portugal": "both", "colonial port warehouse Jamaica": "indoor", "Roman forum at sunrise empty": "both", "Egyptian pyramid at dawn no tourists": "both", "Angkor Wat sunrise reflection pool": "both", "Machu Picchu sun gate first light": "both", "Colosseum interior arch looking up": "indoor", "Parthenon pillars Athens dusk": "both", "Stonehenge solstice dawn mist": "both", "Avebury stone circle walking": "both", "Newgrange Ireland winter solstice": "both", "Hadrian's Wall northern edge": "both", "Vindolanda excavation trench": "both", "Viking longship museum interior": "indoor", "Jorvik Viking Centre York exterior": "outdoor", "Norman castle motte and bailey": "both", "Medieval cathedral chapter house": "both", "Tudor manor hall interior timber": "indoor", "Civil War battlefield marker dawn": "outdoor", "Napoleonic battlefield monument France": "outdoor", "Waterloo battlefield Belgium": "outdoor", "Auschwitz-Birkenau memorial path": "outdoor", "Berlin Wall remaining section": "both", "Checkpoint Charlie museum exterior": "outdoor", "Stasi prison Leipzig exterior": "indoor", "Dresden Frauenkirche rebuilt exterior": "outdoor", "Hiroshima Peace Memorial exterior": "outdoor", "Nagasaki museum exterior": "outdoor", "Pearl Harbor USS Arizona memorial water": "outdoor", "Gettysburg battlefield Pennsylvania": "outdoor", "Antietam battlefield Maryland dawn": "outdoor", "Bunker Hill monument Boston": "indoor", "Independence Hall Philadelphia": "both", "Colonial Williamsburg street": "outdoor", "Jamestown reconstruction Virginia": "both", "Plymouth Rock Massachusetts coast": "outdoor", "Salem witch trial memorial": "both", "Tombstone Arizona OK Corral": "both", "Little Bighorn battlefield Montana": "outdoor", "Alamo San Antonio Texas exterior": "outdoor", "Mesa Verde cliff dwelling Colorado": "outdoor", "Chaco Canyon ruins New Mexico": "outdoor", "Cahokia mounds Illinois": "both", "Serpent Mound Ohio aerial view possible": "both", "Cahokia Monks Mound base": "both", "abandoned asylum corridor tiles": "indoor", "fog-bound forest path no end": "outdoor", "empty motel parking lot night": "both", "derelict carnival midway": "both", "candlelit cellar steps": "indoor", "lighthouse keeper's cottage at night": "both", "ruined manor house exterior": "outdoor", "fog-covered graveyard path": "outdoor", "drowned village reservoir edge": "both", "Victorian factory floor dark": "indoor", "underground tunnel bricked-up end": "both", "secret passage bookcase entrance": "both", "locked library night window": "indoor", "empty theatre balcony creaking": "both", "old hotel corridor 3am": "indoor", "basement flooded ankle deep": "indoor", "attic trapdoor looking down": "indoor", "church crypt entrance stone": "both", "estate maze centre alone": "both", "walled garden overgrown locked": "outdoor", "old clock tower interior": "indoor", "photography darkroom red light": "both", "radio station night empty": "both", "print room old newspaper rotary": "both", "museum after hours case lit": "both", "archive basement box rows": "indoor", "police evidence room dim": "both", "detective agency door frosted glass": "both", "private eye office desk": "indoor", "smoke-filled bar information": "both", "dockside warehouse meeting": "indoor", "industrial estate unit door": "both", "abandoned school classroom": "indoor", "empty hospital corridor night": "indoor", "sanatorium courtyard overgrown": "outdoor", "institution corridor peeling": "indoor", "haunted B&B corridor creaking": "indoor", "village pub empty late": "both", "country house library fire out": "indoor", "whodunit manor hall chandelier": "both", "locked room diagram scene": "both", "crime scene before police arrive": "both", "film noir street lamp rain": "outdoor", "1940s diner counter night": "both", "jazz club back room door": "both", "speakeasy behind bookcase": "outdoor", "numbers station forest clearing": "outdoor", "black site exterior ordinary": "outdoor", "cherry blossom grove path Japan": "outdoor", "tulip field Keukenhof Netherlands rows": "outdoor", "wildflower meadow at dawn mist": "outdoor", "botanical garden greenhouse glass warm": "outdoor", "apple orchard in bloom England": "outdoor", "wisteria tunnel Japan Kawachi": "outdoor", "bluebell wood England May carpet": "outdoor", "lavender field early Provence France": "outdoor", "jasmine market India Madurai": "outdoor", "magnolia grove Central Park New York": "outdoor", "peach blossom field China Guilin": "outdoor", "Korean azalea mountain Hwangmaesan": "outdoor", "Dutch daffodil bulb fields early": "outdoor", "allium field purple English garden": "outdoor", "ranunculus flower farm California": "outdoor", "dahlia field September to spring": "outdoor", "sunflower first field France baby heads": "outdoor", "poppy field Flanders Belgium": "outdoor", "rapeseed field England yellow": "outdoor", "mustard field California Napa golden": "outdoor", "vine blossom Burgundy France early": "outdoor", "citrus blossom grove Sicily": "outdoor", "almond blossom Spain Extremadura": "outdoor", "olive blossom grove Italy Umbria": "outdoor", "camellia garden Cornwall England": "outdoor", "rhododendron garden Cornwall estate": "outdoor", "azalea garden Exbury England": "outdoor", "garden open day English country house": "outdoor", "allotment spring first dig": "outdoor", "community garden first planting": "outdoor", "Kyoto Philosopher's Path cherry": "outdoor", "Yoshino Mountain Japan cherry blossom": "outdoor", "Washington DC tidal basin cherry": "outdoor", "Vancouver Stanley Park cherry": "outdoor", "Seoul Yeouido park cherry Korea": "outdoor", "Taipei Yangmingshan azalea mountain": "outdoor", "Canberra Floriade festival tulips": "outdoor", "Melbourne Royal Botanic Garden": "outdoor", "Sydney Royal Botanic Garden first spring": "outdoor", "Adelaide Botanic Garden spring": "outdoor", "Buenos Aires Parque Tres de Febrero jacaranda": "outdoor", "Montevideo Rambla jacaranda street": "outdoor", "collapsing building exterior running from": "outdoor", "rooftop helicopter pad extraction": "outdoor", "exploding gas station forecourt": "outdoor", "car chase highway overpass": "outdoor", "burning warehouse interior smoke": "indoor", "abandoned factory fight sequence": "indoor", "dockside container confrontation": "outdoor", "airport tarmac last minute": "outdoor", "jungle compound extraction": "outdoor", "embassy exterior hostage situation": "outdoor", "desert oil field explosion": "outdoor", "arctic facility escape": "both", "submarine control room emergency": "both", "space shuttle launch pad": "both", "nuclear plant control room": "both", "dam spillway chase on foot": "both", "bridge car fall below car chase": "outdoor", "tunnel chase underground": "both", "mountain pass vehicle standoff": "outdoor", "forest pursuit on foot both": "outdoor", "villain's lair interior reveal": "indoor", "underground bunker finale": "indoor", "ancient temple booby trap": "outdoor", "underwater ruins race against time": "outdoor", "mine shaft descent together": "both", "crane top city confrontation": "both", "skyscraper window cleaner exterior": "outdoor", "radio tower climb final": "both", "power station roof fight": "both", "cargo plane tail ramp drop": "both", "helicopter exterior city hover": "outdoor", "speed boat chase coastal": "outdoor", "submarine exterior underwater suit": "outdoor", "jet ski dock escape": "outdoor", "sports stadium crowd finale": "outdoor", "opera house roof confrontation": "both", "casino vault escape": "indoor", "museum gallery heist escape": "both", "art auction interruption": "both", "black tie gala gone wrong": "both", "embassy rooftop garden escape": "outdoor", "safe house interior blow": "indoor", "railway carriage fight sequence": "both", "metro station platform confrontation": "indoor", "bus roof fight moving": "both", "taxi chase narrow streets": "outdoor", "launch pad pre-ignition T-minus hold": "both", "mission control empty overnight": "both", "space station observation cupola window Earth": "both", "lunar surface crater rim Earth above": "both", "Mars red dust plain horizon flat": "outdoor", "asteroid mining platform exterior": "outdoor", "exoplanet first landing alien sky": "both", "black hole research vessel safe distance": "outdoor", "Jupiter cloud layer research station": "outdoor", "Saturn ring station exterior": "outdoor", "Pluto flyby exterior frozen": "outdoor", "comet surface landing tethered": "both", "deep space transit vessel corridor": "indoor", "cryosleep chamber awakening": "both", "space elevator ascent halfway": "both", "orbital hotel view deck Earth": "both", "Kennedy Space Centre launch control": "both", "Houston JSC mission simulator": "both", "Baikonur Cosmodrome launch site Kazakhstan": "both", "Star City training facility Russia": "both", "ESA training centre Cologne": "both", "Astronaut hall of fame Florida": "both", "Space Shuttle Atlantis display interior": "indoor", "Saturn V rocket base Florida": "both", "Soyuz capsule training interior": "indoor", "ISS training pool underwater": "both", "neutral buoyancy pool astronaut training": "both", "zero-G aircraft parabola inside": "indoor", "planetarium dome below projection": "both", "observatory telescope control room": "both", "radio telescope base signal listening": "both", "space museum corridor display both": "indoor", "observatory on volcano Mauna Kea Hawaii": "both", "Atacama Observatory Chile exterior night": "outdoor", "Very Large Telescope Chile exterior": "outdoor", "Arecibo-equivalent structure exterior": "outdoor", "Control room Hubble maintenance": "both", "James Webb team celebration room": "both", "Mars Curiosity control room JPL": "both", "New Horizons flyby celebration JPL": "outdoor", "Apollo mission anniversary meeting": "both", "Artemis crew announcement": "both", "SpaceX factory floor Falcon": "indoor", "Blue Origin factory Shepard beside": "indoor", "Virgin Galactic spaceport exterior": "outdoor", "JAXA control room Tokyo": "both", "Eiffel Tower base Paris predawn": "both", "Colosseum arch Rome morning empty": "both", "Times Square empty early morning": "both", "Santorini caldera edge sunset domes": "both", "Machu Picchu sun gate at dawn": "both", "Taj Mahal garden axis front": "outdoor", "Great Wall of China isolated section": "both", "Great Barrier Reef underwater snorkelling": "both", "Victoria Falls Zambia mist platform": "both", "Iguazu Falls Argentina walkway": "both", "Grand Canyon south rim early empty": "outdoor", "Yellowstone hot spring boardwalk": "outdoor", "Northern Lights field Iceland wide": "outdoor", "Bora Bora overwater bungalow deck": "both", "Easter Island Moai row dawn": "both", "Angkor Wat reflection pool sunrise": "both", "Petra treasury facade dawn first light": "both", "Wadi Rum Jordan camp fire night": "both", "Sahara camel dune sunrise": "outdoor", "Serengeti migration open plain": "outdoor", "Masai Mara balloon morning drift": "both", "Cape of Good Hope lighthouse": "both", "Table Mountain cable car arrival": "outdoor", "Robben Island ferry approach": "both", "Kruger Park sunset vehicle": "outdoor", "Okavango Delta mokoro boat": "both", "Nile felucca sailing sunset": "both", "Abu Simbel facade dawn laser show": "both", "Pyramids Giza sunset alone": "both", "Luxor temple night lit": "both", "Valley of Kings tomb entrance": "both", "Karnak temple hypostyle dawn": "both", "Dead Sea float horizon Jordan": "outdoor", "Wailing Wall Jerusalem quiet": "both", "Church of Holy Sepulchre Jerusalem": "both", "Hagia Sophia Istanbul interior": "indoor", "Cappadocia balloon field dawn": "outdoor", "Pamukkale travertine pool Turkey": "both", "Ephesus library facade Turkey": "indoor", "Bosphorus strait crossing sunrise": "both", "Dubrovnik walls morning empty": "both", "Plitvice Lakes Croatia boardwalk": "outdoor", "Kotor Bay Montenegro water edge": "both", "Mostar bridge Bosnia clear water": "outdoor", "artist studio with skylight afternoon": "indoor", "blank canvas before first stroke": "both", "watercolour wash drying table": "both", "life drawing class empty": "both", "white cube gallery installation": "both", "Tate Modern Turbine Hall London": "both", "Turbine Hall vast floor looking up": "both", "National Gallery London grand stair": "both", "Royal Academy London courtyard": "outdoor", "Serpentine Pavilion exterior": "outdoor", "Hayward Gallery concrete London": "both", "MoMA atrium New York": "both", "Whitney Museum terrace New York": "both", "Guggenheim spiral New York": "both", "Met Roof Garden New York": "outdoor", "Pace Gallery New York white": "both", "Chelsea gallery white New York": "outdoor", "Centre Pompidou escalator exterior Paris": "outdoor", "Louvre Pyramid interior glass": "indoor", "Musée d'Orsay clock window": "both", "Fondation Louis Vuitton hull Paris": "both", "Palais de Tokyo raw space Paris": "both", "Fondation Cartier exterior Paris": "outdoor", "Uffizi courtyard Florence": "outdoor", "Galleria Borghese garden Rome": "outdoor", "MAXXI Rome interior": "indoor", "Palazzo Grassi Venice": "both", "Punta della Dogana Venice": "both", "Biennale Giardini pavilion": "both", "Städel Museum Frankfurt": "both", "Pinakothek Munich white room": "both", "Documenta Kassel site": "both", "Hamburger Bahnhof Berlin industrial": "both", "KW Institute Berlin raw": "both", "Hamburger Kunsthalle": "both", "Rijksmuseum Amsterdam hall": "both", "Stedelijk Museum Amsterdam": "both", "Eye Film Museum Amsterdam": "both", "Guggenheim Bilbao titanium exterior": "outdoor", "MACBA Barcelona terrace": "both", "Reina Sofia Madrid": "both", "Serralves Porto garden": "outdoor", "Moderna Museet Stockholm island": "both", "Kiasma Helsinki interior": "indoor", "Ateneum Helsinki stair": "both", "Louisiana Museum Denmark sea view": "outdoor", "Arken Museum Denmark": "both", "Oaxacan market stall morning colour": "outdoor", "Chichen Itza pyramid sunrise empty": "outdoor", "Lucha libre arena ring between bouts": "outdoor", "Mexico City Zócalo plaza evening": "outdoor", "Frida Kahlo blue house Coyoacán": "outdoor", "Xochimilco trajinera canal flower boat": "outdoor", "Oaxaca Monte Albán ruins": "outdoor", "Teotihuacan pyramids dawn": "outdoor", "Palenque jungle ruins Chiapas": "outdoor", "Uxmal Yucatan ruins": "outdoor", "Merida colonial plaza Sunday": "outdoor", "San Cristóbal de las Casas highland": "outdoor", "Puerto Escondido surf beach Oaxaca": "outdoor", "Huatulco bay beach Oaxaca": "outdoor", "Sayulita beach Nayarit village": "outdoor", "Puerto Vallarta old town Jalisco": "outdoor", "Guadalajara Tlaquepaque craft market": "outdoor", "Guanajuato callejón del Beso lane": "outdoor", "Guanajuato Festival Cervantino stage": "outdoor", "San Miguel de Allende jardin": "outdoor", "Tulum ruins cliff sea below": "outdoor", "Tulum cenote swim jungle": "outdoor", "Bacalar lake colours Quintana Roo": "outdoor", "Coba pyramid climb top jungle": "outdoor", "Valladolid cenote swim Yucatan": "outdoor", "Izamal yellow town Yucatan": "outdoor", "Campeche colonial colour walls": "outdoor", "Veracruz malecon evening": "outdoor", "Xalapa anthro museum Veracruz": "outdoor", "Tlaxcala smallest state capital": "outdoor", "Morelia cathedral evening Michoacán": "outdoor", "Pátzcuaro Day of Dead lake": "outdoor", "Janitzio island midnight ceremony": "outdoor", "Cholula pyramid church top": "outdoor", "Puebla Azulejo tile building": "outdoor", "Taxco silver town hilltop": "outdoor", "Acapulco cliff diver platform": "outdoor", "Mazatlán old town Sinaloa": "outdoor", "Los Cabos arch sea rock": "outdoor", "Baja peninsula road trip": "outdoor", "Copper Canyon train Chihuahua": "outdoor", "Creel Tarahumara area Chihuahua": "outdoor", "New York Times Square 5am empty": "outdoor", "Route 66 Cadillac Ranch Texas art": "outdoor", "Nashville Broadway honky-tonk stage exterior": "outdoor", "New Orleans French Quarter Bourbon exterior": "outdoor", "Brooklyn rooftop summer Manhattan behind": "outdoor", "LA Venice Beach boardwalk morning": "outdoor", "San Francisco Lombard Street": "outdoor", "Chicago Bean Millennium Park reflection": "outdoor", "Miami South Beach art deco morning": "outdoor", "Seattle Pike Place Market dawn": "outdoor", "Portland Oregon Powell's Books exterior": "outdoor", "Austin 6th Street music row": "outdoor", "New Orleans Garden District mansion": "outdoor", "Savannah mossy square Georgia": "outdoor", "Charleston Rainbow Row South Carolina": "outdoor", "Annapolis harbour Maryland": "outdoor", "Cape Cod beach Massachusetts summer": "outdoor", "Maine Portland lobster pier": "outdoor", "Vermont fall foliage road General Store": "outdoor", "New Hampshire White Mountains": "outdoor", "Alaska Denali clear day base": "outdoor", "Hawaii Na Pali coast Kauai": "outdoor", "Grand Canyon south rim early": "outdoor", "Bryce Canyon hoodoos Utah dawn": "outdoor", "Zion Narrows Utah hiking": "outdoor", "Arches Utah Delicate Arch sunrise": "outdoor", "Monument Valley Arizona Navajo": "outdoor", "Death Valley salt pan California": "outdoor", "Yosemite Valley El Capitan view": "outdoor", "Sequoia forest drive-through tree": "outdoor", "Pacific Coast Highway Big Sur": "outdoor", "Malibu beach LA adjacent": "outdoor", "Santa Monica pier evening": "outdoor", "Hollywood Sign hillside view": "outdoor", "Bourbon Street parade day": "outdoor", "Mardi Gras New Orleans crowd": "outdoor", "Super Bowl adjacent city street": "outdoor", "NBA Finals watch party bar": "outdoor", "Fourth of July fireworks open": "outdoor", "Thanksgiving parade New York both": "outdoor", "Black Friday mall opening queue": "outdoor", "American diner any state any time": "outdoor", "Banff Lake Louise turquoise shoreline": "outdoor", "Niagara Falls mist observation deck": "outdoor", "Toronto CN Tower base exterior": "outdoor", "Vancouver Stanley Park seawall": "outdoor", "Quebec City Old Town cobblestone": "outdoor", "Montreal Plateau neighbourhood mural": "outdoor", "Ottawa Parliament Hill exterior": "outdoor", "Victoria Inner Harbour BC": "outdoor", "Whistler village snow BC": "outdoor", "Jasper National Park Alberta": "outdoor", "Icefields Parkway Alberta drive": "outdoor", "Columbia Icefield glacier walk": "outdoor", "Tofino beach BC surf remote": "outdoor", "Pacific Rim National Park BC": "outdoor", "Haida Gwaii remote BC island": "outdoor", "Nahanni River Yukon remote": "outdoor", "Kluane National Park Yukon": "outdoor", "Dawson City Yukon gold rush": "outdoor", "Whitehorse northern lights Yukon": "outdoor", "Yellowknife Great Slave Lake NWT": "outdoor", "Inuvik tundra NWT remote": "outdoor", "Churchill polar bear season Manitoba": "outdoor", "Churchill beluga whale summer Manitoba": "outdoor", "Prince Edward Island red sand beach": "outdoor", "Cape Breton Cabot Trail NS": "outdoor", "Halifax waterfront NS": "outdoor", "Saint John covered bridge NB": "outdoor", "Fredericton legislative assembly NB": "outdoor", "Charlottetown Green Gables PEI": "outdoor", "Confederation Bridge crossing PEI": "outdoor", "Newfoundland L'Anse aux Meadows": "outdoor", "Signal Hill St John's Newfoundland": "outdoor", "Fogo Island Newfoundland remote": "outdoor", "Gros Morne Newfoundland fjord": "outdoor", "Toronto Kensington Market": "outdoor", "Toronto Distillery District": "outdoor", "Montreal Mile End neighbourhood": "outdoor", "Vancouver Granville Island market": "outdoor", "Calgary Heritage Park historic": "outdoor", "Edmonton Ice Palace winter": "outdoor", "Saskatoon riverbank trail": "outdoor", "Regina Wascana Centre park": "outdoor", "Jamaica Negril cliff sunset dive spot": "outdoor", "Trinidad Carnival Queen Park Savannah stage": "outdoor", "Barbados Bathsheba Atlantic coast rock": "outdoor", "Cuba Havana Malecón sea wall sunset": "outdoor", "Puerto Rico Old San Juan cobblestone blue": "outdoor", "Dominican Republic Samaná waterfall pool": "outdoor", "Haiti Citadelle la Ferrière approach": "outdoor", "Martinique Saint-Pierre volcanic ruin": "outdoor", "Guadeloupe Basse-Terre waterfall": "outdoor", "Saint Lucia Pitons beach between": "outdoor", "Dominica Boiling Lake trail approach": "outdoor", "Grenada spice plantation nutmeg": "outdoor", "Barbados Bridgetown Cheapside market": "outdoor", "Antigua English Harbour Nelson's Dockyard": "outdoor", "Sint Maarten both sides beach": "outdoor", "Saint Kitts Brimstone Hill fortress": "outdoor", "Montserrat volcano exclusion edge": "outdoor", "Anguilla Shoal Bay beach quiet": "outdoor", "British Virgin Islands tortola bay": "outdoor", "US Virgin Islands Charlotte Amalie": "outdoor", "Turks and Caicos Grace Bay clear": "outdoor", "Cayman Islands 7 Mile Beach": "outdoor", "Bahamas Exuma swimming pigs": "outdoor", "Nassau Atlantis approach": "outdoor", "Cuba Viñales valley tobacco farm": "outdoor", "Cuba Trinidad colonial pastel": "outdoor", "Cuba Varadero beach resort": "outdoor", "Cuba Santiago Carnival": "outdoor", "Jamaica Blue Mountains coffee tour": "outdoor", "Jamaica Cockpit Country remote": "outdoor", "Jamaica Port Antonio Blue Lagoon": "outdoor", "Jamaica Dunn's River Falls climb": "outdoor", "Trinidad Caroni swamp scarlet ibis": "outdoor", "Trinidad Maracas Bay beach": "outdoor", "Barbados Fish Fry Oistins Friday": "outdoor", "Barbados Morgan Lewis sugar mill": "outdoor", "Puerto Rico Bioluminescent Bay night": "outdoor", "Puerto Rico Arecibo radio telescope": "outdoor", "Dominican Republic Pico Duarte hike": "outdoor", "Dominican Republic Saona Island beach": "outdoor", "chapel altar candlelit intimate": "both", "outdoor ceremony wildflower arch": "outdoor", "bridal suite mirror morning light": "both", "registry office stone steps": "indoor", "vineyard ceremony at dusk vines": "outdoor", "country house parkland ceremony": "outdoor", "cathedral nave enormous light shafts": "both", "marquee interior lanterns hung": "indoor", "city rooftop ceremony skyline": "outdoor", "beach ceremony barefoot sand": "outdoor", "cliff top ceremony sea below": "outdoor", "walled garden ceremony flower walls": "outdoor", "barn interior dressed timber": "indoor", "greenhouse botanical ceremony": "both", "castle courtyard ceremony Scotland": "outdoor", "Lake District fell backdrop ceremony": "indoor", "Cotswold church exterior yew trees": "outdoor", "Scottish loch ceremony shoreline": "outdoor", "Irish country house ceremony": "both", "Devon coast ceremony headland": "outdoor", "Cornwall sea ceremony cliff": "outdoor", "Norfolk barn ceremony harvest feel": "both", "Suffolk church flint exterior": "outdoor", "Yorkshire moors ceremony exposed": "both", "Peak District ceremony hill above": "outdoor", "Welsh mountain ceremony Snowdonia": "outdoor", "Tuscan villa ceremony cypress trees": "both", "Amalfi Villa ceremony cliff terrace": "outdoor", "Positano ceremony sea stack": "outdoor", "Ravello Villa Rufolo ceremony": "both", "Lake Como ceremony jetty": "outdoor", "French château ceremony formal garden": "outdoor", "Provence lavender field ceremony": "outdoor", "Côte d'Azur villa ceremony": "both", "Greek island ceremony whitewashed": "both", "Santorini ceremony caldera edge": "both", "Mykonos windmill ceremony": "both", "Crete beach ceremony taverna": "outdoor", "Portuguese Alentejo vineyard ceremony": "outdoor", "Douro Valley ceremony terraced vines": "outdoor", "Sintra Palace ceremony garden": "outdoor", "Lisbon rooftop ceremony tiles": "outdoor", "New York City Hall ceremony": "both", "Brooklyn ceremony Williamsburg loft": "both", "home kitchen counter morning coffee": "indoor", "professional kitchen pass window service": "indoor", "street food cart night busy": "outdoor", "wood-fired pizza oven exterior": "outdoor", "outdoor market prep table": "outdoor", "restaurant kitchen mid-service": "indoor", "cafe counter opening ritual": "both", "butcher's cold room doorway": "both", "fish market slab first light": "both", "vegetable market stall sorting": "both", "fermentation cellar shelves rows": "indoor", "bakery 4am before opening": "both", "patisserie counter morning": "both", "ramen shop kitchen small hectic": "both", "sushi counter chef preparation": "both", "teppanyaki grill both sides": "both", "pizza restaurant back kitchen": "indoor", "pasta restaurant handmade bench": "both", "wine cellar tasting table": "indoor", "farmhouse kitchen AGA morning": "indoor", "Georgian kitchen hearth fire": "indoor", "Victorian scullery restoration": "both", "Basque pintxos bar kitchen small": "both", "Madrid tapas bar kitchen": "indoor", "Barcelona market stall La Boqueria": "both", "Paris boulangerie counter morning": "both", "Lyon bouchon kitchen small": "both", "Marseille fish quay morning": "outdoor", "Neapolitan pizza back kitchen": "indoor", "Roman trattoria kitchen simple": "indoor", "Sicilian kitchen nonna's": "indoor", "Moroccan riad kitchen courtyard": "indoor", "Lebanese kitchen mezze spread": "indoor", "Turkish gözleme street stall": "outdoor", "Japanese izakaya small kitchen": "both", "Korean BBQ grill table": "both", "Vietnamese pho kitchen 4am": "indoor", "Thai street wok cart night": "outdoor", "Indian dhal kitchen simple": "indoor", "Bengali fish curry kitchen": "indoor", "Mexican cocina simple home": "both", "Peruvian ceviche kitchen fresh": "indoor", "Argentine asado fire outdoor": "outdoor", "New York deli counter": "both", "New Orleans creole kitchen": "indoor", "Louisiana cajun outdoor cook": "outdoor", "Borneo rainforest canopy walkway": "outdoor", "Amazon river camp at dawn": "outdoor", "Costa Rica cloud forest mist": "outdoor", "Cambodia temple overgrown vines": "outdoor", "Papua New Guinea highland trail": "outdoor", "Daintree rainforest Queensland": "outdoor", "Congo basin clearing giant trees": "outdoor", "Sumatra jungle river crossing": "outdoor", "Thailand hill tribe forest edge": "outdoor", "Vietnam karst limestone jungle": "outdoor", "Ecuador Amazon tributary camp": "outdoor", "Peru cloud forest epiphyte trees": "outdoor", "Belize cenote jungle clearing": "outdoor", "Guatemala Tikal temple above canopy": "outdoor", "Mexico Yucatan jungle ruin": "outdoor", "Sri Lanka jungle leopard territory": "outdoor", "India Corbett forest trail edge": "outdoor", "Kenya jungle border savannah": "outdoor", "Rwanda gorilla trekking forest": "outdoor", "Uganda Bwindi forest trail": "outdoor", "Pantanal waterway jungle edge Brazil": "outdoor", "Orinoco delta mangrove channel": "outdoor", "Mekong river bank jungle Cambodia": "outdoor", "Irrawaddy river jungle bank Myanmar": "outdoor", "Salween river jungle edge": "outdoor", "Kinabalu rainforest lower slope": "outdoor", "Sabah jungle river crossing": "outdoor", "Sarawak longhouse river arrival": "outdoor", "Sulawesi jungle crater lake": "outdoor", "Flores jungle volcanic forest": "outdoor", "Philippines Palawan jungle cove": "outdoor", "Mindanao highland forest trail": "outdoor", "Luzon rice terrace edge forest": "outdoor", "Hawaii fern gully waterfall": "outdoor", "Maui bamboo forest path": "outdoor", "Kauai Na Pali coast jungle": "outdoor", "Puerto Rico El Yunque cloud forest": "outdoor", "Jamaica Blue Mountain forest": "outdoor", "Trinidad Northern Range forest": "outdoor", "Trinidad Caroni swamp dawn": "outdoor", "Grenada Grand Etang crater forest": "outdoor", "Dominica rainforest river gorge": "outdoor", "St Lucia banana plantation edge": "outdoor", "Martinique Pelée lower forest": "outdoor", "Guadeloupe volcanic forest": "outdoor", "Madagascar rainforest lemur clearing": "outdoor", "Comoros forest ancient tree": "outdoor", "Reunion Cirque de Cilaos": "outdoor", "Seychelles Vallée de Mai palm": "outdoor", "Mauritius Black River Gorges": "outdoor", "Paris fashion week backstage Palais Royal": "both", "empty runway post-show dust settling": "outdoor", "Milan Brera showroom white space": "both", "studio white cyc wall full-length": "indoor", "New York garment district loft": "both", "London Somerset House courtyard show": "outdoor", "Copenhagen show space industrial": "both", "Berlin show space former power plant": "both", "Lagos Lagos Fashion Week backstage": "both", "Seoul DDP show exterior": "outdoor", "Tokyo Rainbow Bridge show exterior": "outdoor", "Shanghai former factory show space": "indoor", "Palais de Tokyo Paris show": "both", "Grand Palais Paris interior nave": "indoor", "Louvre Cour Carrée show Paris": "both", "Champs-Elysées midnight show": "both", "Eiffel Tower platform show Paris": "both", "Versailles garden show Paris": "outdoor", "Uffizi Piazzale Michelangelo show Florence": "both", "Colosseum exterior show Rome": "outdoor", "Guggenheim rotunda show New York": "both", "Whitney Biennial adjacent show": "both", "MoMA garden show New York": "outdoor", "Brooklyn Navy Yard show space": "outdoor", "Hudson Yards public show New York": "outdoor", "Met Stairs show New York": "both", "Tate Modern Bankside show London": "both", "V&A Cromwell Road steps London": "outdoor", "Natural History Museum London show": "both", "BFI Southbank show London": "both", "Barbican Centre show London": "both", "Roundhouse show London": "both", "BAFTA 195 Piccadilly show London": "both", "Selfridges rooftop show London": "outdoor", "Fashion East venue London": "both", "Goldsmiths show London": "both", "Central Saint Martins BA show": "both", "RCA show London": "both", "LCF MA show London": "both", "Birmingham Custard Factory show": "indoor", "Manchester Victoria Warehouse show": "indoor", "Glasgow SWG3 show": "both", "Edinburgh Dovecot Studios show": "indoor", "Dublin National Museum show": "both", "Lisbon LX Factory show": "indoor", "Barcelona Palo Alto show": "both", "city street march crowd placard density": "outdoor", "courthouse steps vigil candles": "outdoor", "barricade police line stand-off": "outdoor", "memorial vigil square candles wind": "outdoor", "occupation sit-in steps long-stay": "outdoor", "university campus quad gathering": "outdoor", "Parliament Square Westminster London": "outdoor", "Trafalgar Square London gathering": "outdoor", "Tiananmen Square adjacent Beijing": "outdoor", "Tahrir Square Cairo archive feeling": "outdoor", "Maidan Square Kyiv historic feeling": "outdoor", "Wenceslas Square Prague historic": "outdoor", "Zuccotti Park New York Occupy": "outdoor", "Union Square New York rally": "outdoor", "Hyde Park Speakers' Corner London": "outdoor", "The Mall Washington DC march": "outdoor", "Lafayette Square Washington DC": "outdoor", "Martin Luther King Memorial Washington": "outdoor", "Lincoln Memorial steps Washington": "outdoor", "Capitol Building exterior demonstration": "outdoor", "Selma bridge Edmund Pettus Alabama": "outdoor", "Birmingham Alabama Kelly Ingram Park": "outdoor", "Montgomery Alabama Dexter Avenue": "outdoor", "Little Rock Arkansas school exterior": "outdoor", "Stonewall Inn New York exterior": "outdoor", "Stonewall National Monument area": "outdoor", "Harvey Milk Plaza San Francisco": "outdoor", "Castro District San Francisco march": "outdoor", "Grant Park Chicago rally point": "outdoor", "Federal Plaza Chicago march": "outdoor", "Millennium Park Chicago gathering": "outdoor", "City Hall Los Angeles steps": "outdoor", "Pershing Square Los Angeles rally": "outdoor", "Venice Beach boardwalk demonstration": "outdoor", "Rodeo Drive protest Palm Springs": "outdoor", "Climate march London Embankment": "outdoor", "XR blockade London bridge": "outdoor", "Anti-war vigil Grosvenor Square London": "outdoor", "Greenham Common memorial Berkshire": "outdoor", "Faslane Peace Camp Scotland gate": "outdoor", "G8 Gleneagles approach road": "outdoor", "COP26 Glasgow approach march": "outdoor", "George Square Glasgow rally": "outdoor", "Kelvingrove Glasgow vigil": "outdoor", "rooftop golden hour city amber": "outdoor", "coastal cliff dusk edge last light": "outdoor", "open field last light warm": "outdoor", "lake surface golden hour reflection": "outdoor", "mountain ridge dusk silhouette": "outdoor", "desert highway dusk warm": "outdoor", "vineyard last light harvest rows": "outdoor", "harbour dusk boats rocking": "outdoor", "beach last light families leaving": "outdoor", "park bench dusk city behind": "outdoor", "canal towpath dusk reflection": "outdoor", "river bridge dusk city both sides": "outdoor", "cathedral steps dusk warm stone": "outdoor", "castle ramparts dusk light": "outdoor", "country house lawn dusk evening": "outdoor", "walled garden dusk last bees": "outdoor", "orchard dusk fruit heavy": "outdoor", "meadow dusk grass gold": "outdoor", "clifftop bench dusk coast": "outdoor", "lighthouse dusk beam starting": "outdoor", "sea front promenade dusk stroll": "outdoor", "pier end dusk water colour": "outdoor", "esplanade dusk families evening": "outdoor", "nature reserve dusk birds settling": "outdoor", "bog moorland dusk purple heather": "outdoor", "upland tarn dusk reflected": "outdoor", "Sahara dusk orange sky vast": "outdoor", "Rajasthan dusk pink stone": "outdoor", "Bali rice terrace dusk green gold": "outdoor", "Ha Long Bay dusk karst silhouette": "outdoor", "Angkor Wat dusk reflection gold": "outdoor", "Petra dusk rose-red fade": "outdoor", "Cappadocia dusk balloon silhouette": "outdoor", "Santorini dusk caldera famous": "outdoor", "Positano dusk colour stack": "outdoor", "Dubrovnik walls dusk Adriatic": "outdoor", "Oia dusk famous blue dome": "outdoor", "Mykonos windmill dusk": "outdoor", "Lisbon dusk Tagus golden": "outdoor", "Porto dusk Douro bridge": "outdoor", "Istanbul dusk Bosphorus gold": "outdoor", "Marrakech dusk rooftop call": "outdoor", "Cairo dusk pyramids outline": "outdoor", "Kenya dusk Acacia tree line": "outdoor", "Sahara dune ridge at dawn": "outdoor", "Atacama salt flat mirror surface": "outdoor", "Arizona red rock canyon base": "outdoor", "Namibia dead vlei white trees": "outdoor", "Arabian Rub al Khali endless dunes": "outdoor", "Gobi Desert rock plain heat": "outdoor", "Sonoran cactus saguaro forest": "outdoor", "Patagonian steppe endless wind": "outdoor", "Iranian salt desert cracked": "outdoor", "Wadi Rum Jordan red sandstone": "outdoor", "Dasht-e Kavir Iran salt crust": "outdoor", "Taklamakan China dune sea": "outdoor", "Tibetan plateau windswept gravel": "outdoor", "Karakum Turkmenistan gas crater": "outdoor", "Chilean Atacama geysers dawn": "outdoor", "Peruvian coastal desert fog": "outdoor", "Baja California cardon cactus": "outdoor", "Mojave Joshua tree silhouette": "outdoor", "White Sands New Mexico gypsum": "outdoor", "Death Valley salt pan noon": "outdoor", "Bonneville salt flat Utah": "outdoor", "Namib coastal dune sea fog": "outdoor", "Kalahari red dune grassland": "outdoor", "Great Karoo kopje rock": "outdoor", "Sudan Nubian desert ruins": "outdoor", "Libya Fezzan sand sea": "outdoor", "Tunisia Erg Chebbi dune": "outdoor", "Morocco Draa valley palms": "outdoor", "Egypt Sinai mountain desert": "outdoor", "Jordan Wadi Mujib canyon": "outdoor", "Oman Wahiba Sands camp": "outdoor", "UAE Liwa Oasis dune": "outdoor", "Kuwait desert sunset flat": "outdoor", "Qatar desert scrub evening": "outdoor", "Pakistan Thar desert village edge": "outdoor", "India Thar camel track": "outdoor", "Rajasthan sand dunes sunset": "outdoor", "Ladakh Nubra Valley sand": "outdoor", "Pakistan Cholistan dune": "outdoor", "Afghanistan Hindu Kush foothills dry": "outdoor", "Uzbekistan Kyzylkum steppe": "outdoor", "Kazakhstan steppe flat horizon": "outdoor", "Mongolia Gobi dune oasis": "outdoor", "China Badain Jaran singing dunes": "outdoor", "Russia Kalmyk steppe dry": "outdoor", "Peru Nazca lines plateau": "outdoor", "Chile Valle de la Luna Moon Valley": "outdoor", "Bolivia Uyuni salt flat season": "outdoor", "Argentina Atacama extension": "outdoor", "room floating in open sky above clouds": "both", "staircase descending into ocean depth": "both", "corridor of infinite identical doors": "both", "forest growing on ceiling roots up": "both", "library with books falling upward slowly": "both", "clock face enormous walkable surface": "both", "mirror room reflecting into infinity": "both", "chess board landscape full size": "both", "giant flower field house-sized blooms": "both", "city inverted above head walking": "both", "door in middle of open field nowhere": "both", "bed floating in dark space": "both", "kitchen with ocean instead of floor": "both", "office with desert instead of carpet": "both", "wedding beneath water both dry somehow": "both", "train arriving through bedroom wall": "both", "telephone booth inside out ringing": "both", "painting stepped into both inside art": "both", "mouth of cave that is a face enormous": "both", "eye looking back from pond surface": "both", "shadows going wrong direction both": "both", "clocks all different times melting": "both", "hands visible not the body they belong": "both", "spiral staircase going both up and down same": "both", "window looking at same room from inside": "both", "door knob too large to turn reasonable": "both", "tree growing sideways defying gravity": "both", "rain falling upward both normal about it": "both", "snow falling in one spot only precision": "both", "crowd all moving same direction both still": "both", "moon on ground everyone else ignores": "both", "sun underground ceiling window": "both", "horizon too close walking impossible": "both", "sky below feet walking on clouds solid": "both", "two of the same place same time both": "both", "echo of selves visible slight delay": "both", "objects frozen mid-fall both normal": "both", "animals acting human ignored by both": "both", "architecture bending around both normally": "both", "two moons different sizes both checking": "both", "crowded beach high noon heat": "outdoor", "empty beach early morning first light": "outdoor", "rooftop pool city summer late afternoon": "outdoor", "outdoor festival field heat dust": "outdoor", "beachside bar open air wave sound": "outdoor", "public lido 1930s tiles noon": "outdoor", "outdoor cinema summer evening": "outdoor", "beer garden pub afternoon": "outdoor", "coastal path headland summer": "outdoor", "beach hut row colourful": "outdoor", "seaside pier amusement end": "outdoor", "bucket and spade beach family": "outdoor", "harbour wall fishing boats": "outdoor", "marina sailboat deck": "outdoor", "outdoor market summer Saturday": "outdoor", "street food festival summer": "outdoor", "park fountain summer city splash": "outdoor", "river towpath cycle summer": "outdoor", "botanic garden summer afternoon": "outdoor", "outdoor theatre shakespeare summer": "outdoor", "county show agricultural summer": "outdoor", "village fete quintessential English": "outdoor", "garden party summer best behaviour": "outdoor", "tennis club summer heatwave": "outdoor", "cricket ground pavilion summer": "outdoor", "polo ground spectators summer": "outdoor", "Wimbledon queue strawberries summer": "outdoor", "Henley Regatta riverside summer": "outdoor", "Goodwood Festival of Speed summer": "outdoor", "Isle of Wight Festival summer": "outdoor", "Glastonbury wellies mud summer": "outdoor", "Latitude festival Suffolk summer": "outdoor", "La Tomatina Spain Buñol August": "outdoor", "San Fermin Pamplona white red summer": "outdoor", "Ibiza San Antonio summer sunset": "outdoor", "Mykonos windmill summer evening": "outdoor", "Santorini pool summer heat noon": "outdoor", "Positano beach coloured houses summer": "outdoor", "Cinque Terre harbour summer": "outdoor", "Amalfi coastal walk summer": "outdoor", "Barcelona Barceloneta beach summer": "outdoor", "Valencia beach summer chiringuito": "outdoor", "Seville rooftop evening summer late": "outdoor", "Lisbon miradouro summer evening": "outdoor", "New England forest peak colour road": "outdoor", "orchard apple harvest rows England": "outdoor", "bonfire field twilight smoke": "outdoor", "fog-covered valley morning October": "outdoor", "pumpkin patch open farm England": "outdoor", "Japanese momiji maple garden Kyoto": "outdoor", "Korean naejangsan national park autumn": "outdoor", "Seoraksan peak colour Korea": "outdoor", "Changgyeonggung Palace garden Seoul": "outdoor", "Vermont road tunnel colour": "outdoor", "Catskills NY peak autumn weekend": "outdoor", "Blue Ridge Parkway Virginia colour": "outdoor", "Great Smoky Mountains NC peak colour": "outdoor", "Acadia National Park Maine autumn": "outdoor", "Adirondacks NY peak colour": "outdoor", "Lake District fells England autumn": "outdoor", "Yorkshire Dales autumn bracken gold": "outdoor", "Dartmoor Devon autumn bracken": "outdoor", "Exmoor Somerset red deer rut autumn": "outdoor", "New Forest Hampshire autumn": "outdoor", "Richmond Park London rutting season": "outdoor", "Epping Forest Essex autumn": "outdoor", "Kew Gardens autumn colour walk": "outdoor", "Westonbirt Arboretum Gloucestershire peak": "outdoor", "Nymans West Sussex autumn garden": "outdoor", "Bodnant Garden Wales autumn": "outdoor", "Crarae Garden Argyll Scotland autumn": "outdoor", "Brodick Castle Arran autumn": "outdoor", "Glenfinnich distillery autumn Scotland": "outdoor", "Speyside autumn whisky country": "outdoor", "Black Forest Germany Schwarzwald autumn": "outdoor", "Bavarian forest autumn Germany": "outdoor", "Vienna Prater park autumn Austria": "outdoor", "Budapest City Park autumn Hungary": "outdoor", "Prague Stromovka park autumn Czech": "outdoor", "Bialowieza Forest Poland primeval autumn": "outdoor", "Białka Valley Tatra autumn Poland": "outdoor", "Rila Monastery Bulgaria autumn": "outdoor", "Rhodopes mountain autumn Bulgaria": "outdoor", "Carpathian forest Romania autumn": "outdoor", "Retezat National Park Romania autumn": "outdoor", "Piatra Craiului autumn Romania": "outdoor", "snow-covered city street morning fresh": "outdoor", "log fire living room evening cosy": "indoor", "Christmas market glühwein stall Germany": "outdoor", "frozen pond edge ice skate": "outdoor", "snow-covered forest path silent": "outdoor", "outdoor ice rink city centre": "outdoor", "Christmas tree farm choosing": "outdoor", "winter market late evening lights": "outdoor", "indoor ski slope practice area": "indoor", "luxury chalet balcony mountain below": "outdoor", "après-ski bar exterior snow boots": "outdoor", "ski resort village evening": "outdoor", "Lapland reindeer sleigh destination": "outdoor", "Rovaniemi Santa experience Finland": "outdoor", "Jokkmokk winter market Sweden": "outdoor", "Tromsø northern lights field Norway": "outdoor", "Lofoten Islands winter red cabin": "outdoor", "Bergen Bryggen winter Norway": "outdoor", "Copenhagen Tivoli winter lights": "outdoor", "Stockholm Gamla Stan snow winter": "outdoor", "Helsinki Christmas market Senate Square": "outdoor", "Tallinn old town Christmas Estonia": "outdoor", "Riga Christmas market Latvia historic": "outdoor", "Vilnius Christmas market Lithuania": "outdoor", "Krakow Christmas market Cloth Hall Poland": "both", "Vienna Christmas market Rathausplatz": "outdoor", "Prague Christmas market Old Town Square": "outdoor", "Budapest Christmas market Vörösmarty": "outdoor", "Strasbourg Christmas market France": "outdoor", "Colmar Christmas market Alsace": "outdoor", "Rothenburg ob der Tauber Christmas Germany": "outdoor", "Nuremberg Christmas market Germany": "outdoor", "Bath Christmas market England Abbey": "outdoor", "Edinburgh Christmas market Scotland": "outdoor", "York Christmas market England medieval": "outdoor", "Winchester Christmas market Cathedral": "outdoor", "Canterbury Christmas market Cathedral": "outdoor", "Lincoln Christmas market Castle": "outdoor", "New York Bryant Park winter rink": "outdoor", "New York Rockefeller Center tree": "outdoor", "Montreal Igloofest winter festival": "outdoor", "Quebec Winter Carnival ice palace": "outdoor", "tightrope between two office buildings": "indoor", "wedding cake slowly sinking in park": "outdoor", "grocery superstore catwalk runway": "outdoor", "stuck in revolving door together still": "both", "formal dinner wrong restaurant joined anyway": "both", "queue for something invisible both": "both", "meeting in total blank white void both": "both", "underwater office normal working both": "indoor", "upside-down room both acting right way up": "both", "gravity wrong direction both stepping carefully": "both", "too small car both squeezed comfortable": "both", "elevator too full both last in": "both", "wrong film set wandered onto both": "both", "background extras main action elsewhere": "both", "waiting room for something unspecified both": "indoor", "form-filling for impossible thing together": "both", "race track on foot very slowly both": "outdoor", "airport runway walking to gate too far": "both", "wrong wedding both sitting front row": "both", "someone else's birthday party both": "both", "wrong job interview both together": "both", "wrong city both realising slowly": "both", "wrong century both confused period clothes": "both", "wrong planet both unconcerned": "both", "wrong size room both too tall or small": "both", "mirror showing different room both": "both", "train going both directions same time": "both", "bus route circle back to start endlessly": "both", "museum exhibit become both looking out": "both", "portrait frame both looking from painting": "outdoor", "clock tower manually turning time both": "both", "world on pause both walking through": "both", "single spotlight everything else dark both": "both", "stage set obviously fake both acting real": "both", "weather presenter map not matching both": "both", "newsreader reading impossible news both": "both", "customer service call centre impossible hold": "both", "automated phone menu labyrinth both": "both", "river Styx dark water crossing ferry": "outdoor", "Hades palace obsidian hall throne": "both", "Elysian fields golden light peace": "outdoor", "Charon ferry dark river midpoint": "outdoor", "Fields of Asphodel pale grey wandering": "outdoor", "Tartarus edge looking down abyss": "both", "Persephone garden pomegranate tree": "outdoor", "Oracle at Delphi smoke chamber below": "both", "Orpheus descent path backward": "outdoor", "Hero's journey threshold crossing": "both", "Dante's inscription gate above": "both", "Virgil's guided path dark forest": "outdoor", "Egyptian Duat weighing hall scales": "both", "Ma'at feather judgement chamber": "both", "Norse Helheim mist entrance Hel gate": "both", "Valhalla great hall feast": "both", "Bifrost bridge approaching end Asgard side": "outdoor", "Niflheim frost mist plain": "outdoor", "Aztec Mictlan ninth level dark": "both", "Xibalba Mayan lords' hall": "both", "Japanese Yomi dark world descent": "both", "Buddhist hell realms border": "outdoor", "Chinese Diyu court first judgement": "both", "Ten Kings of Hell court formal": "both", "Hindu Naraka gate boundary": "both", "Bardo Tibetan intermediate state mist": "both", "Celtic Tir na nÓg island approach": "both", "Annwn Welsh otherworld entrance": "both", "Slavic Nav dark world fog": "both", "Inuit Adlivun cold underworld": "both", "Yoruba underworld crossroads": "outdoor", "Candomblé spirit world threshold": "both", "Vodou spirit world intersection": "both", "New Orleans cemetery midnight": "outdoor", "Mexican Day of Dead altar approach": "both", "Ofrenda marigold path": "outdoor", "Guatemalan cemetery coloured tombs": "outdoor", "Bolivian Ñatitas festival skull ceremony": "both", "Peruvian Pachamama offering ground": "both", "Andean sacred mountain spirit": "outdoor", "Shinto Yomi crossing Izanagi's retreat": "both", "Shinto spirit gate torii path": "both", "open field storm wall approaching dark": "outdoor", "cliff edge dark sky building": "outdoor", "car sheltering underpass rain heavy": "outdoor", "doorway watching storm arrive lightning": "outdoor", "empty beach dark clouds low horizon": "outdoor", "tornado alley plain Oklahoma warning": "outdoor", "hurricane shelter exterior shuttered": "outdoor", "cyclone coast Queensland aftermath": "outdoor", "monsoon street Mumbai flooded": "outdoor", "typhoon shelter Hong Kong boat": "outdoor", "blizzard highway car stopped white-out": "outdoor", "ice storm city trees snapping": "outdoor", "storm surge coast sandbag line": "outdoor", "hailstorm shelter awning both": "outdoor", "lightning field observation tower": "outdoor", "weather station exterior highest point": "outdoor", "storm chasers vehicle prairie": "outdoor", "doppler radar facility exterior": "outdoor", "waterspout coastal distance watching": "outdoor", "storm cell interior aircraft research": "outdoor", "atmospheric research balloon launch": "outdoor", "weather ship deck Atlantic swell": "outdoor", "North Sea platform wave impact": "outdoor", "Antarctic station storm wind sustained": "outdoor", "Arctic research camp blizzard": "outdoor", "volcano storm lightning ash": "outdoor", "dust storm approaching ahead running": "outdoor", "haboob wall Arizona red": "outdoor", "wildfires near smoke orange sky": "outdoor", "flood evacuation boat street": "outdoor", "earthquake aftershock ruin exterior": "outdoor", "tsunami warning coast running": "outdoor", "derecho linear wind damage trail": "outdoor", "supercell thunderhead base approaching": "outdoor", "mesocyclone rotation visible base": "outdoor", "wall cloud lowering both watching": "outdoor", "shelf cloud roll extending horizon": "outdoor", "mammatus cloud field looking up both": "outdoor", "rainbow after storm double light": "outdoor", "clearing storm sun breaking through": "outdoor", "storm-washed beach debris aftermath": "outdoor", "river flood subsiding mud": "outdoor", "ice storm aftermath trees glazed": "outdoor", "snow aftermath city still": "outdoor", "record shop basement listening booth": "indoor", "late night diner corner booth": "both", "graffiti wall back alley": "outdoor", "skate park dusk empty bowls": "outdoor", "underground club low ceiling bass": "both", "warehouse party corridor between rooms": "indoor", "DIY venue basement show": "indoor", "art squat corridor": "indoor", "bookshop basement cult section": "indoor", "comic shop back room": "both", "zine fair tables community": "both", "independent cinema screening room small": "both", "repertory theatre foyer before show": "both", "coffee shop poetry open mic": "both", "spoken word venue small intimate": "both", "pub back room acoustic gig": "both", "folk club cellar intimate": "indoor", "roots reggae sound system": "both", "hip-hop cipher circle outdoor": "outdoor", "grime scene studio corridor": "indoor", "UK garage era venue exterior": "indoor", "jungle rave warehouse 1993 feel": "indoor", "drum and bass club basement": "indoor", "techno bunker low concrete ceiling": "indoor", "LGBTQ bar historic gay bar": "both", "lesbian bar small intimate corner": "both", "trans venue safe community space": "both", "queer arts festival venue small": "both", "punk DIY venue toilet adjacent": "both", "hardcore show basement sweaty": "indoor", "metal club dark corner stage": "both", "goth night ornate Victorian venue": "both", "alternative night eighties venue": "both", "indie disco student union": "both", "skate shop back storage hangout": "both", "tattoo studio waiting area": "indoor", "piercing studio corridor wall art": "indoor", "barber shop waiting chair": "both", "boxing gym between rounds": "both", "wrestling gym wall mats": "both", "martial arts dojo evening class": "both", "parkour spot industrial loading bay": "outdoor", "street art studio planning board": "indoor", "activist meeting above shop": "both", "community radio station booth small": "both", "pirate radio rooftop aerial": "outdoor", "bioluminescent bay dinoflagellate night": "outdoor", "moss-covered ancient volcanic field glowing": "outdoor", "crystal cave entrance light within": "outdoor", "obsidian formation field mist rolling": "outdoor", "giant mushroom grove twilight fog": "outdoor", "deep ocean floor research vessel window": "outdoor", "cave system river underground boat": "outdoor", "lava tube Hawaii interior light end": "outdoor", "ice cave Vatnajokull interior Iceland": "outdoor", "sea cave bioluminescent grotto": "outdoor", "underground lake chamber vaulted": "outdoor", "sinkhole edge looking down": "outdoor", "canyon slot light beam narrow": "outdoor", "cave painting ancient torch-lit": "outdoor", "geothermal vent field bubbling ground": "outdoor", "fumarole Iceland steam column": "outdoor", "Waitomo glowworm cave New Zealand": "outdoor", "Son Doong cave Vietnam enormous": "outdoor", "Carlsbad Caverns New Mexico vast": "outdoor", "Mammoth Cave Kentucky historic": "outdoor", "Cappadocia underground city Turkey": "outdoor", "Derinkuyu underground city Turkey": "outdoor", "Lalibela rock-hewn church Ethiopia": "outdoor", "Ajanta caves India carved": "outdoor", "Ellora caves India exterior": "outdoor", "Petra carved rose-red facade": "outdoor", "Barabar caves Bihar oldest": "outdoor", "Dunhuang Mogao caves China": "outdoor", "Longmen grottoes Luoyang China": "outdoor", "Yungang grottoes Datong China": "outdoor", "Tiger's Nest monastery Bhutan approach": "outdoor", "Meteora monastery rock Greece approach": "outdoor", "Taktsang Palphug monastery above Paro": "outdoor", "Kellie's Castle ruin Malaysia": "outdoor", "Sigiriya Lion Rock Sri Lanka top": "outdoor", "Pidurangala Rock above Sri Lanka": "outdoor", "Adam's Peak Sri Lanka predawn": "outdoor", "Shwe Dagon Pagoda Myanmar dusk": "outdoor", "Bagan temple plain balloon Myanmar": "outdoor", "Inle Lake floating garden Myanmar": "outdoor", "Ha Long Bay limestone karst Vietnam": "outdoor", "Phong Nha cave Vietnam river": "outdoor", "Mulu cave Sarawak deer cave entrance": "outdoor", "Gunung Mulu plateau Sarawak": "outdoor", "New York water tower rooftop dusk": "outdoor", "city skyline rooftop golden hour": "outdoor", "rooftop terrace bar evening lights": "outdoor", "fire escape landing city view": "both", "rooftop garden planted city behind": "outdoor", "industrial rooftop downtown gravel": "outdoor", "converted warehouse rooftop party space": "indoor", "Tokyo rooftop shrine torii gate": "both", "Seoul rooftop hanok traditional tile": "outdoor", "Hong Kong rooftop dense stack city": "outdoor", "Shanghai rooftop art space Bund visible": "outdoor", "Singapore rooftop MBFC towers around": "outdoor", "Dubai rooftop glass building forest": "outdoor", "Istanbul rooftop Bosphorus view": "outdoor", "Athens rooftop Acropolis lit": "outdoor", "Rome rooftop San Pietro visible": "outdoor", "Paris rooftop Sacre Coeur visible": "outdoor", "Barcelona rooftop Sagrada Familia behind": "outdoor", "Milan rooftop Duomo behind": "outdoor", "Florence rooftop Brunelleschi dome": "outdoor", "London Tate Modern rooftop": "outdoor", "London Borough Market rooftop chimney": "outdoor", "London Shard base terrace": "both", "Edinburgh rooftop castle behind": "outdoor", "Glasgow rooftop riverside crane": "outdoor", "Manchester rooftop converted mill": "outdoor", "Liverpool rooftop docks Royal Liver": "outdoor", "Berlin Alexanderplatz TV tower behind": "both", "Munich rooftop beer garden above": "outdoor", "Vienna rooftop Stephansdom": "outdoor", "Amsterdam rooftop canal grid below": "outdoor", "Brussels rooftop Grand Place": "outdoor", "Copenhagen rooftop Nyhavn colour": "outdoor", "Stockholm rooftop Gamla Stan below": "outdoor", "Oslo rooftop Operahuset below": "outdoor", "Helsinki rooftop harbour ferry": "outdoor", "Warsaw rooftop Palace of Culture": "outdoor", "Prague rooftop Charles Bridge": "outdoor", "Budapest rooftop Parliament below": "outdoor", "Bratislava rooftop castle above": "outdoor", "Bucharest rooftop People's Palace": "outdoor", "Sofia rooftop Alexander Nevsky": "outdoor", "Lisbon rooftop Alfama terracotta": "outdoor", "Porto rooftop Douro river below": "outdoor", "Seville rooftop Giralda beside": "outdoor", "Granada rooftop Alhambra lit": "outdoor", "Cape Town rooftop Table Mountain": "outdoor", "cloister walk stone columns dawn light": "both", "candlelit chapel evening vespers": "both", "monastery bell tower stairs narrow": "both", "prayer hall incense slow rising": "both", "Tibetan monastery mountain backdrop": "both", "Bhutanese dzong exterior fortress": "outdoor", "Greek Meteora cliff monastery approach": "outdoor", "Greek Athos mountain peninsula": "outdoor", "Cappadocia rock-cut church interior": "indoor", "Armenian Geghard monastery carved": "both", "Georgian Jvari monastery hilltop": "both", "Mount Athos monastery exterior": "outdoor", "Ethiopian Lalibela underground church": "both", "Ethiopian Debre Damo access rope": "both", "Egyptian Sinai St Catherine's exterior": "outdoor", "Coptic Cairo monastery Egypt": "both", "Syrian Deir Mar Musa monastery": "both", "Lebanese Qadisha valley hermitage": "outdoor", "Jordan Wadi Rum monastery ruin": "outdoor", "Israel Dead Sea Qumran caves approach": "outdoor", "Cyprus Kykkos monastery gold": "both", "Malta Mdina cathedral cloister": "both", "Valletta co-cathedral Malta interior": "indoor", "Hagia Sophia Istanbul Byzantine": "both", "Chora Church Istanbul mosaic": "both", "Kariye museum Istanbul mosaic": "both", "Bulgarian Rila monastery courtyard": "outdoor", "Bulgarian Bachkovo monastery": "both", "Serbian Studenica monastery medieval": "both", "Serbian Sopocani fresco hall": "both", "Romanian Voronet blue monastery": "both", "Romanian Sucevita painted monastery": "both", "Romanian Moldovita monastery exterior": "outdoor", "Romanian Putna monastery": "both", "Polish Jasna Gora monastery Czestochowa": "both", "Czech Kladruby Benedictine": "both", "German Ettal Benedictine exterior Bavaria": "outdoor", "German Andechs pilgrimage hill": "both", "Austrian Melk Benedictine cliff Danube": "outdoor", "Austrian Klosterneuburg exterior": "outdoor", "Spanish Montserrat exterior Catalonia": "outdoor", "Spanish Silos Gregorian chant": "both", "Portuguese Batalha Gothic monastery": "outdoor", "Portuguese Jerónimos cloister Lisbon": "both", "French Mont Saint-Michel tidal approach": "both", "French Sénanque lavender Provençal": "both", "pier end open sea all around": "outdoor", "Victorian pier amusement arcade closed": "outdoor", "pier at dusk golden planks": "outdoor", "empty pier winter morning fog": "outdoor", "pier railing looking out to sea": "outdoor", "fishermen's pier working boats moored": "outdoor", "Brighton Palace Pier England": "outdoor", "Brighton West Pier ruin sea": "outdoor", "Worthing Pier England quiet": "outdoor", "Eastbourne Pier England Victorian": "outdoor", "Southend Pier England longest": "outdoor", "Weston-super-Mare Grand Pier": "outdoor", "Clevedon Pier Somerset Victorian": "outdoor", "Cromer Pier Norfolk crab": "outdoor", "Hunstanton Pier Norfolk sunset": "outdoor", "Colwyn Bay pier Wales": "outdoor", "Bangor pier Wales Victorian": "outdoor", "Beaumaris pier Anglesey Wales": "outdoor", "Penarth pier Wales Victorian": "outdoor", "Swansea pier Wales": "outdoor", "Mumbles pier Gower Wales": "outdoor", "Llandudno pier Wales ornate": "outdoor", "Aberystwyth pier Wales": "outdoor", "Saltburn Pier Yorkshire Victorian": "outdoor", "Redcar Pier Yorkshire site only": "outdoor", "Whitby Pier Yorkshire harbour both sides": "outdoor", "Scarborough South Bay pier": "outdoor", "Blyth Pier Northumberland": "outdoor", "South Shields pier": "outdoor", "Tynemouth pier both sides estuary": "outdoor", "Cullercoats pier Tyne": "outdoor", "Seaham pier County Durham": "outdoor", "Santa Monica pier California": "outdoor", "Venice Beach pier LA": "outdoor", "Hermosa Beach pier California": "outdoor", "Malibu pier California private": "outdoor", "San Clemente pier Southern California": "outdoor", "Oceanside pier California": "outdoor", "Galveston pier Texas Gulf": "outdoor", "Panama City pier Florida": "outdoor", "Jacksonville pier Florida": "outdoor", "Melbourne St Kilda pier": "outdoor", "Geelong Eastern Beach pier": "outdoor", "Busselton Jetty Western Australia longest": "outdoor", "Henley Beach pier Adelaide": "outdoor", "Port Noarlunga jetty South Australia": "outdoor", "Marrakech souk narrow alley spice": "outdoor", "Istanbul Grand Bazaar carpet hall": "outdoor", "Tokyo Tsukiji outer market dawn": "outdoor", "Chelsea Flower Market London early": "outdoor", "Borough Market London cheese stall": "outdoor", "Portobello Road London Saturday antique": "outdoor", "Camden Market London alternative": "outdoor", "Brick Lane Sunday Market East London": "outdoor", "Spitalfields Market London covered": "outdoor", "Columbia Road Flower Market London Sunday": "outdoor", "Billingsgate Fish Market London early": "outdoor", "Smithfield Meat Market London early": "outdoor", "Broadway Market London Saturday": "outdoor", "Maltby Street Market London weekend": "outdoor", "Bermondsey Antique Market London Friday": "outdoor", "Greenwich Market London covered": "outdoor", "Brixton Market London Covered Arcade": "outdoor", "Ridley Road Market Dalston London": "outdoor", "Chapel Market Islington London": "outdoor", "Shepherd's Bush Market London": "outdoor", "Walthamstow Market London open air": "outdoor", "Leather Lane London workers": "outdoor", "Paris Marché d'Aligre antique and food": "outdoor", "Paris Marché Bastille Sunday fresh": "outdoor", "Paris Marché des Enfants Rouges oldest": "outdoor", "Amsterdam Waterlooplein flea market": "outdoor", "Amsterdam Albert Cuyp Market daily": "outdoor", "Barcelona La Boqueria La Rambla": "outdoor", "Madrid El Rastro Sunday flea": "outdoor", "Madrid San Miguel covered gourmet": "outdoor", "Valencia Mercado Central morning": "outdoor", "Bilbao La Ribera indoor": "indoor", "Porto Mercado do Bolhão covered": "outdoor", "Lisbon Mercado da Ribeira covered": "outdoor", "Funchal Mercado dos Lavradores Madeira": "outdoor", "Seville Triana market covered": "outdoor", "Granada covered market central": "outdoor", "Malaga Mercado Atarazanas": "outdoor", "Naschmarkt Vienna oldest": "outdoor", "Fischmarkt Hamburg Sunday dawn": "outdoor", "Viktualienmarkt Munich daily": "outdoor", "Mercato Centrale Florence covered": "outdoor", "Rialto Market Venice morning fish": "outdoor", "Campo de' Fiori Rome morning": "outdoor", "Porta Portese Rome Sunday flea": "outdoor", "Porta Palazzo Turin outdoor largest Europe": "outdoor", "big top entrance sawdust smell": "both", "ring centre spotlight single overhead": "both", "aerial rigging above ring looking down": "both", "backstage circus wagon exterior": "outdoor", "costume wagon mirror strip light": "both", "trapeze platform above ring edge": "both", "tightrope wire strung between platforms": "both", "clown alley backstage makeup": "outdoor", "animal-free circus performance space": "both", "contemporary circus venue industrial": "both", "Cirque du Soleil stage interior": "indoor", "Giffords Circus England summer": "both", "Zippo's Circus England touring": "both", "Moscow State Circus winter tent": "both", "Chinese State Circus UK tour": "both", "Australian Circus Oz contemporary": "both", "Cirque Éloize Montreal contemporary": "both", "No Fit State Circus Wales touring": "both", "Mimbre company London studio": "indoor", "Upswing aerial company space": "both", "National Centre for Circus Arts London": "both", "Centre National des Arts du Cirque France": "both", "ESAC Belgium circus school": "both", "Codarts Rotterdam circus school": "both", "NICA Australia circus school": "both", "Circa Australia Brisbane": "both", "Gravity and Other Myths Adelaide": "both", "Casus Circus Brisbane": "both", "Acrobat company contemporary UK": "both", "Ockham's Razor company aerial UK": "both", "Mechanimal company UK mechanical": "both", "Retina company Spain aerial": "both", "Compagnie Moisés Mahiques Spain": "both", "Gandini Juggling UK company": "both", "Company XY France flying": "both", "Les 7 Doigts de la Main Montreal": "both", "Teatro Zinzanni Seattle supper club": "outdoor", "Spiegeltent festival venue": "both", "vintage circus photograph archive location": "both", "abandoned circus lot winter": "both", "circus school practice space high ceiling": "both", "summer circus school performance space": "both", "site-specific circus urban exterior": "outdoor", "touring circus overnight field": "outdoor", "hay bale field golden hour warm": "outdoor", "barn interior shafts of light dust": "indoor", "tractor field at dawn furrow mist": "outdoor", "farmhouse kitchen morning fire": "indoor", "orchard ladder apple picking autumn": "outdoor", "sheep field lambing spring England": "outdoor", "cow milking parlour morning routine": "outdoor", "pig sty exterior feeding": "outdoor", "chicken coop morning egg collection": "outdoor", "kitchen garden vegetable harvest": "indoor", "greenhouse tomato vine summer": "outdoor", "root cellar stone stair entrance": "outdoor", "grain store exterior harvest": "outdoor", "combine harvester field harvest": "outdoor", "ploughed field winter brown": "outdoor", "seed drill field spring": "outdoor", "irrigation pivot summer heat": "outdoor", "hop garden Kent summer climbing": "outdoor", "lavender farm Provence summer row": "outdoor", "sunflower farm Tuscany summer": "outdoor", "vineyard harvest France": "outdoor", "olive grove harvest Spain": "outdoor", "truffle forest oak edge France": "outdoor", "mushroom shed dark England": "outdoor", "cheese dairy morning England": "outdoor", "cider press apple autumn England": "outdoor", "jam making kitchen preserve": "indoor", "farmers market own stall selling": "outdoor", "CSA box collection farm gate": "outdoor", "U-pick berry farm summer": "outdoor", "pick-your-own pumpkin autumn": "outdoor", "Christmas tree farm winter choosing": "outdoor", "rare breed cattle show summer": "outdoor", "sheepdog trial field Scotland": "outdoor", "horse yard early morning mucking": "outdoor", "stable yard tack room morning": "outdoor", "hay meadow ancient England summer": "outdoor", "wildflower set-aside field spring": "outdoor", "hedgerow restoration both working": "outdoor", "stream bank restoration riparian": "outdoor", "dry stone wall repair Dales": "outdoor", "coppice woodland management both": "outdoor", "reed bed cutting winter both": "outdoor", "empty supermarket aisle 23:47 timestamp corner": "indoor", "ATM vestibule ceiling camera angle": "both", "lift interior descending floor counter": "indoor", "car park level 3 stairwell emergency exit": "indoor", "convenience store entrance fish-eye lens": "both", "bus station waiting hall overhead bracket": "both", "underground station concourse sweep camera": "both", "hospital corridor night shift fluorescent": "indoor", "office lobby after hours motion triggered": "indoor", "pedestrian underpass sodium light bracket": "both", "service station forecourt pump 4 elevated": "outdoor", "airport security queue serpentine elevated": "outdoor", "border crossing checkpoint queue angle": "outdoor", "railway platform number board behind": "both", "shopping centre escalator top bracket": "both", "empty fast food restaurant 3am corner": "both", "hotel corridor room numbers stretching": "indoor", "casino floor above density crowd": "both", "nightclub cloakroom queue elevated": "indoor", "sports stadium concourse between halves": "outdoor", "school corridor empty holidays ceiling": "indoor", "library study room motion sensor angle": "indoor", "museum gallery after hours motion": "both", "post office counter above queuing": "indoor", "bank interior counter queue angle": "indoor", "pharmacy counter overhead prescription": "both", "laundromat 4am all machines running": "indoor", "car wash tunnel entrance elevated": "both", "petrol station shop interior overnight": "indoor", "off-licence corner camera high": "both", "kebab shop 2am entrance overhead": "both", "taxi rank camera pole overnight": "both", "bus interior forward-facing elevated": "indoor", "train carriage end camera both": "both", "police station entrance high security": "both", "court building exterior elevated sweep": "outdoor", "social housing communal entrance": "both", "council flat corridor overhead strip": "indoor", "multi-storey top floor open concrete": "both", "industrial estate unit row camera pole": "both", "road junction camera housing bracket": "outdoor", "motorway overhead gantry sweep": "outdoor", "port container terminal elevated wide": "outdoor", "dock security camera sweep night": "outdoor", "underground car park exit ramp": "outdoor", "back of department store loading bay": "both", "prison exercise yard elevated corner": "indoor", "immigration hall queue angle overhead": "both", "cash and carry warehouse interior overhead": "indoor", "wholesaler loading area exterior overnight": "outdoor", "seamless white paper backdrop studio infinity curve": "indoor", "seamless black paper backdrop studio infinity curve": "indoor", "seamless mid-grey paper backdrop studio": "indoor", "seamless warm grey paper backdrop studio": "indoor", "seamless cream paper backdrop studio": "indoor", "seamless pale blush paper backdrop studio": "indoor", "seamless deep charcoal paper backdrop studio": "indoor", "seamless forest green paper backdrop studio": "indoor", "seamless dusty blue paper backdrop studio": "indoor", "seamless burgundy paper backdrop studio": "indoor", "hand-painted grey muslin backdrop studio": "indoor", "hand-painted white-to-dark graduated muslin studio": "indoor", "cream linen textured backdrop studio": "indoor", "dark velvet fabric backdrop studio deep black": "indoor", "raw canvas unpainted backdrop studio neutral": "indoor", "draped silk fabric backdrop studio ivory": "indoor", "mottled hand-painted backdrop studio warm grey": "indoor", "torn edge paper backdrop studio textured white": "indoor", "layered fabric draped backdrop studio improvised dark": "indoor", "painted concrete effect backdrop studio flat grey": "indoor", "bare white plaster studio wall clean": "indoor", "bare off-white plaster studio wall textured": "indoor", "raw concrete studio wall exposed aggregate": "indoor", "whitewashed interior studio wall flat": "indoor", "painted brick interior studio wall white": "indoor", "dark painted studio wall charcoal matte": "indoor", "studio wall with single large window frame practical": "indoor", "studio wall mirror full length floor to ceiling": "indoor", "white painted studio floor with white backdrop seamless": "indoor", "black painted studio floor with black backdrop seamless": "indoor", "polished concrete studio floor with grey backdrop": "indoor", "light wood studio floor with white backdrop": "indoor", "dark wood studio floor with dark backdrop": "indoor", "white studio floor posing platform raised": "indoor", "plain wooden stool studio white backdrop": "indoor", "plain wooden stool studio black backdrop": "indoor", "director's chair canvas studio grey backdrop": "indoor", "mid-century posing chair studio neutral backdrop": "indoor", "chaise longue upholstered studio white backdrop": "indoor", "chaise longue upholstered studio dark backdrop": "indoor", "floor level white studio both seated": "indoor", "floor level black studio both seated": "indoor", "minimal white cube set studio": "indoor", "minimal black plinth set studio": "indoor", "clear perspex block prop studio white backdrop": "indoor", "seamless silver reflective backdrop studio": "indoor", "seamless gold reflective backdrop studio warm": "indoor", "frosted perspex panel backlit studio white glow": "indoor", "coloured gel background studio deep blue": "indoor", "coloured gel background studio deep red": "indoor", "1950s laboratory neon green glow": "indoor", "abandoned space station corridor flickering": "indoor", "drive-in movie screen at night": "outdoor", "alien landscape matte painting sky": "outdoor", "B-movie spaceship control room retro": "both", "fog-covered graveyard at night practical light": "outdoor", "suburban house at night exterior one light on": "outdoor", "1950s American street night creature approaching": "both", "carnival haunted house entrance": "both", "mad scientist laboratory bubbling tubes": "indoor", "motel room at night single lamp": "both", "dark forest practical torch light": "both", "small town main street deserted night": "both", "underground bunker red emergency lighting": "indoor", "retro rocket ship launch pad": "outdoor", "crumbling mansion exterior night": "outdoor", "1960s diner night fluorescent": "indoor", "rural highway night headlights": "outdoor", "swamp at night fog mist": "outdoor", "abandoned factory night emergency exit green": "both", "vintage observatory dome night": "indoor", "crashed UFO crater smoking": "both", "beach at night bonfirelight": "outdoor", "submarine interior cramped red light": "indoor", "nuclear test site restricted zone": "outdoor", "1950s suburban basement den night": "indoor", "carnival ferris wheel night neon": "outdoor", "research station arctic storm outside": "indoor", "hospital corridor night emergency red": "indoor", "church at night single candle interior": "indoor", "drive-in car park night": "both", "trailer park night one porch light": "outdoor", "cave entrance dark night fog": "outdoor", "radio tower blink red night": "both", "old mill exterior night": "both", "school corridor at night lockers": "indoor", "theatre balcony single spotlight": "indoor", "pier at night fog horn": "outdoor", "power plant cooling towers night": "outdoor", "quarry at night floodlit": "outdoor", "warehouse district night one lamp": "indoor", "rooftop at night city glow below": "outdoor", "funfair ghost train entrance night": "both", "clock tower night storm": "both", "basement stairs single overhead bulb": "indoor", "corn field at night path through": "outdoor", "gas station night rural isolated": "outdoor", "lighthouse beam night fog": "outdoor", "bowling alley at night empty": "indoor", "roadside motel neon sign night": "both", "corner booth red vinyl diner night": "indoor", "counter stools chrome diner 2am": "indoor", "window booth rain outside diner": "indoor", "parking lot diner neon sign reflection": "indoor", "diner counter late night single cook": "indoor", "pie case glass diner fluorescent": "indoor", "jukebox corner diner neon glow": "indoor", "diner exterior neon night roadside": "indoor", "booth back of diner near kitchen": "indoor", "diner restroom corridor narrow": "indoor", "diner kitchen pass-through window": "indoor", "truck stop diner highway dawn": "indoor", "small town diner main street morning": "indoor", "diner exterior parking lot night": "indoor", "diner counter end seat alone": "indoor", "diner booth sunday morning sunlight": "indoor", "diner steps outside night rain": "indoor", "diner pay phone corner night": "indoor", "highway diner dawn truckers": "indoor", "diner coat rack entrance winter": "indoor", "diner window seat fog outside": "indoor", "diner counter spin stool chrome": "indoor", "breakfast diner morning light golden": "indoor", "diner table laminate formica": "indoor", "diner exterior dawn empty lot": "indoor", "roadside diner desert highway": "indoor", "diner booth torn vinyl red": "indoor", "diner counter pie slice coffee": "indoor", "diner neon sign night reflections puddle": "indoor", "diner exterior small town snow": "indoor", "diner back booth private corner": "indoor", "diner counter newspaper morning": "indoor", "drive-in diner car hop night": "indoor", "diner exterior holiday lights christmas": "indoor", "diner stool end counter alone night": "indoor", "diner exit door rain outside": "indoor", "diner booth couple window night city": "indoor", "diner interior empty 4am": "indoor", "diner counter dawn regulars": "indoor", "diner parking lot summer night moths": "indoor", "diner jukebox selection 1960s": "indoor", "diner booth anniversary dinner simple": "indoor", "diner exterior morning mist rural": "indoor", "diner counter coffee refill steam": "indoor", "diner table salt pepper ketchup foreground": "indoor", "diner exterior neon red blue night": "indoor", "diner kitchen pass window orders up": "indoor", "diner booth near door cold draft": "indoor", "diner back alley delivery entrance": "indoor", "diner counter late shift end": "indoor", "darkroom red light developing trays": "indoor", "contact sheet light table loupe": "indoor", "archive box acid-free folders": "indoor", "slide projector beam dust particles": "both", "photo album open on table": "indoor", "negative strips held to light": "both", "old newspaper archive reading room": "indoor", "family photograph on mantelpiece": "both", "shoebox of photographs scattered": "indoor", "darkroom hanging prints drying": "indoor", "film canister collection shelf": "both", "glass plate negative collection": "both", "archive reading room table lamp": "indoor", "microfilm reader old library": "indoor", "photographer's studio 1950s backdrop": "indoor", "attic trunk old photographs": "indoor", "war memorial photographs displayed": "both", "school photograph class 1960s": "both", "family cine projector home movie": "both", "passport photograph strip booth": "indoor", "darkroom chemical trays amber light": "indoor", "contact sheet magnified loupe": "indoor", "old photograph album leather bound": "both", "newspaper morgue filing cabinets": "indoor", "photographic studio Victorian backdrop": "indoor", "archive vault temperature controlled": "indoor", "family home wall of photographs": "both", "wedding album open flowers pressed": "both", "photo lab counter 1970s": "indoor", "developing tank agitation process": "both", "enlarger darkroom printing paper": "indoor", "archive table white gloves documents": "indoor", "old camera collection shelf display": "both", "newspaper clippings pinboard investigation": "both", "family portrait formal 1940s studio": "indoor", "press photo archive filing 1960s": "indoor", "slide carousel projector 1970s": "indoor", "darkroom timer development process": "indoor", "photograph restoration desk magnifying": "both", "archive digitisation scanning desk": "indoor", "press photographer press pool 1950s": "both", "memorial wall photographs flowers": "both", "family reunion photograph lawn 1970s": "both", "old photo booth strip taken together": "indoor", "archive room floor-to-ceiling shelves": "indoor", "darkroom safelight printing session": "indoor", "contact print album 1960s studio": "indoor", "negative filing system archive light": "indoor", "photo kiosk print collection 1980s": "both", "archive conservation bench tools": "indoor", "ferris wheel top night city glow": "outdoor", "waltzers spinning neon blur night": "outdoor", "candyfloss stall dusk light pink": "outdoor", "hook-a-duck stall fairground lights": "outdoor", "ghost train entrance carnival night": "outdoor", "hall of mirrors funfair interior": "both", "carnival midway night both sides lit": "outdoor", "big wheel base looking up night": "both", "coconut shy stall string lights": "outdoor", "dodgems arena carnival neon": "both", "carnival food van candleapple dusk": "both", "helter skelter base night": "both", "fortune teller caravan carnival exterior": "outdoor", "carnival entrance arch neon night": "both", "toffee apple stall amber light": "outdoor", "test your strength tower carnival": "both", "carousel horses night lights spinning": "outdoor", "carnival back lot behind rides": "both", "shooting gallery neon prizes": "both", "carnival crowd midway night": "both", "ferris wheel reflection puddle rain": "outdoor", "funfair at closing time lights going out": "both", "carnival field dawn before opening": "outdoor", "waltzer operator platform night": "both", "carnival generator truck back area": "both", "candy stripe tent interior carnival": "indoor", "prize soft toy stall overloaded": "both", "carnival fireworks above ferris wheel": "outdoor", "trailer park carnival workers housing": "outdoor", "carousel empty morning after": "outdoor", "carnival ticket booth night queue": "both", "funfair field afternoon setup": "both", "cotton candy machine spinning pink": "both", "carnival stage performance area": "both", "hook-a-duck water reflection lights": "both", "big wheel gondola night suspended": "both", "carnival back lot empty evening": "both", "fairground organ carousel music": "outdoor", "carnival field last night season": "outdoor", "ghost train car interior dark": "indoor", "dodgem car stationary waiting": "both", "carnival arc lights full night": "both", "funfair entrance gates daytime": "both", "carnival midway dawn packing up": "outdoor", "waltzer stationary between rides": "both", "hall of mirrors reflection infinite": "both", "carnival fire eater performance area": "both", "prize wheel spin carnival neon": "both", "bumper cars overhead sparks night": "both", "carnival field first light morning": "outdoor", "christmas tree lights interior night warm": "indoor", "halloween porch carved pumpkins night": "outdoor", "day of the dead altar marigolds candles": "outdoor", "easter garden flowers morning light": "outdoor", "thanksgiving table full harvest decorations": "both", "new year eve fireworks rooftop": "outdoor", "valentine's day restaurant candles red roses": "both", "mothers day garden flowers morning": "outdoor", "diwali lights rangoli doorstep night": "outdoor", "hanukkah menorah window evening light": "indoor", "mardi gras street parade night beads": "outdoor", "halloween haunted house decorated exterior": "both", "christmas market stall lights winter": "both", "bonfire night sparklers field dark": "outdoor", "easter egg hunt garden morning": "outdoor", "st patrick's day street celebration green": "outdoor", "eid celebration table food family": "both", "chinese new year lanterns night red": "outdoor", "halloween cemetery decorated night": "outdoor", "christmas stockings fireplace interior": "indoor", "new year countdown party interior": "indoor", "birthday garden party summer flowers": "outdoor", "halloween costume party interior": "indoor", "christmas exterior lights house night": "indoor", "day of the dead parade street costume": "both", "valentine's day park afternoon flowers": "both", "christmas carol singing exterior night": "outdoor", "thanksgiving front porch autumn leaves": "outdoor", "halloween trick or treat suburban night": "outdoor", "christmas morning unwrapping interior light": "indoor", "bonfire night fire glow dark field": "both", "easter church flowers morning light": "both", "midsummer solstice flowers sunset": "outdoor", "carnival rio costume feathers night": "outdoor", "halloween corn maze night torches": "outdoor", "christmas eve anticipation interior": "indoor", "new year morning quiet aftermath": "both", "mothers day breakfast tray bedroom morning": "both", "fathers day garden barbecue afternoon": "outdoor", "halloween school parade daytime": "both", "christmas nativity scene church interior": "indoor", "diwali fireworks rooftop night": "indoor", "hanukkah family game night interior": "indoor", "thanksgiving door wreath autumn exterior": "outdoor", "birthday balloon arch interior party": "indoor", "anniversary celebration restaurant evening": "both", "new year fireworks river bridge night": "outdoor", "christmas eve candle service exterior": "outdoor", "daguerreotype studio 1850s painted backdrop column": "indoor", "Victorian parlour formal sitting 1860s": "both", "early photography studio plate camera 1850s": "indoor", "Victorian conservatory glass light 1860s": "both", "Victorian photographer studio painted garden backdrop": "indoor", "Edwardian seaside portrait studio pier": "indoor", "Victorian cabinet card studio velvet chair": "indoor", "Edwardian country house drawing room formal": "indoor", "Victorian studio painted landscape backdrop": "indoor", "Edwardian portrait studio electric light early": "indoor", "1920s glamour portrait studio dramatic light": "indoor", "1930s Hollywood studio portrait backdrop": "indoor", "1920s art deco portrait studio": "indoor", "1930s press photograph studio flash": "indoor", "1940s studio portrait wartime formal": "indoor", "1940s press photo studio flash powder": "indoor", "1940s wartime goodbye platform station": "both", "1940s family portrait studio Sunday best": "indoor", "1950s colour portrait studio Kodachrome": "indoor", "1950s suburban garden snapshot summer": "outdoor", "1950s school portrait individual backdrop": "indoor", "1950s department store portrait studio": "indoor", "1960s portrait studio soft focus colour": "indoor", "1960s snapshot garden party Kodak": "outdoor", "1960s photobooth strip four frames": "both", "1960s news photograph street candid": "outdoor", "1970s Polaroid instant kitchen casual": "indoor", "1970s family portrait velvet studio backdrop": "indoor", "1970s snapshot holiday beach Kodak": "outdoor", "1970s school photograph class outdoor": "indoor", "1980s portrait studio laser background": "indoor", "1980s snapshot disposable camera party": "both", "1980s passport photograph strip booth": "both", "1980s wedding portrait formal studio": "indoor", "1990s disposable camera snapshot casual": "both", "1990s portrait studio soft focus": "indoor", "1990s photobooth mall strip": "both", "1990s school portrait blue gradient backdrop": "indoor", "early 2000s digital camera party low resolution": "both", "2000s photo print kiosk portrait": "both", "2000s candid phone photograph first generation": "both", "2010s instagram square portrait early": "outdoor", "1930s documentary press photograph street": "outdoor", "1950s news agency portrait flash": "both", "1960s photojournalism candid street": "outdoor", "1970s documentary portrait natural light": "both", "black and white film portrait studio grain": "indoor", "sepia toned portrait formal studio": "indoor", "colour slide transparency 1960s portrait": "both", "instant Polaroid border white portrait": "both", "35mm film grain portrait casual snapshot": "both", "medium format portrait studio sharp": "indoor", "large format studio portrait 1940s sharp": "indoor", "cyanotype portrait early experimental": "both", "candlelit restaurant table for two red roses": "indoor", "paris bridge padlock city view evening": "outdoor", "red roses delivered doorstep evening": "outdoor", "valentine card envelope table morning": "both", "hotel room rose petals champagne evening": "indoor", "restaurant window table rain outside candlelight": "indoor", "home dining table candles simple intimate": "indoor", "florist shop red roses morning selection": "both", "park bench winter afternoon couples": "outdoor", "cinema queue cold evening together": "both", "kitchen table breakfast heart pancakes morning": "indoor", "wine bar intimate corner evening": "both", "bridge city lights reflection evening": "outdoor", "café window seat rainy afternoon": "indoor", "restaurant bar waiting evening dressed up": "indoor", "home sofa evening candles wine": "indoor", "valentine card writing desk lamp evening": "both", "apartment balcony city evening lights": "both", "rooftop restaurant city view evening": "indoor", "harbour evening lights reflection": "outdoor", "small restaurant neighbourhood intimate evening": "indoor", "kitchen cooking together evening home": "indoor", "doorstep moment evening arrival flowers": "outdoor", "park winter afternoon hand in hand": "outdoor", "bedroom morning light flowers on bedside": "indoor", "dining room home candles occasion": "indoor", "flower market morning red roses selection": "outdoor", "letter box valentine card morning discovered": "both", "table for two empty setting waiting": "both", "restaurant exterior evening arriving dressed": "indoor", "spring garden flowers morning sunlight": "outdoor", "breakfast tray bedroom morning flowers": "indoor", "kitchen table Sunday morning flowers bouquet": "indoor", "garden table lunch spring afternoon": "outdoor", "florist shop spring flowers selection morning": "both", "front door flowers delivered morning": "outdoor", "living room spring afternoon light flowers": "indoor", "dining table sunday lunch spring": "both", "garden path spring flowers either side": "outdoor", "restaurant sunday lunch spring afternoon": "indoor", "conservatory morning light spring flowers": "both", "garden bench spring afternoon flowers": "outdoor", "kitchen flowers vase morning light": "indoor", "bedroom morning light flowers bedside": "indoor", "garden gate spring morning arrival": "outdoor", "porch steps spring morning flowers": "outdoor", "park spring afternoon flowers blooming": "outdoor", "café sunday morning flowers on table": "indoor", "home garden spring evening golden hour": "indoor", "sunday morning light through window flowers": "both", "fireworks over city harbour night": "outdoor", "small town parade main street day": "outdoor", "backyard barbecue american flag bunting afternoon": "both", "beach bonfire fourth of july night": "outdoor", "rooftop fireworks city view night": "outdoor", "small town main street flags bunting day": "outdoor", "public park fireworks crowd night": "indoor", "suburban front porch american flag evening": "outdoor", "lake fireworks reflection night": "outdoor", "fairground fourth of july afternoon": "both", "baseball field small town afternoon": "outdoor", "dock lake fireworks night": "outdoor", "small town bandstand afternoon": "both", "suburban backyard pool afternoon": "both", "memorial park flags afternoon": "outdoor", "bridge fireworks city view night": "outdoor", "small town church steps afternoon": "indoor", "carnival midway fourth afternoon": "outdoor", "pier end fireworks over water night": "outdoor", "sunset beach american flags evening": "outdoor", "zocalo mexico city grito de independencia night": "both", "plaza principal pueblo night fireworks grito": "outdoor", "charro escaramuza horse arena afternoon": "both", "traditional market dia de independencia stalls": "both", "cathedral facade green white red lights night": "both", "town square mariachi performance evening": "outdoor", "hacienda colonial courtyard evening": "both", "mexican flag green white red waving plaza": "outdoor", "traditional feast table day of independence": "both", "folk dance performance plaza evening": "outdoor", "colonial town square fireworks night": "outdoor", "traditional dress parade main street day": "outdoor", "charreada arena afternoon traditional": "both", "small pueblo plaza morning independence": "outdoor", "cathedral bells ringing independence night": "both", "market stalls mexican crafts independence": "outdoor", "colonial archway green white red bunting": "both", "traditional kitchen independence feast morning": "indoor", "plaza de armas provincial town evening": "outdoor", "mountain village independence celebration afternoon": "both", "thanksgiving table full harvest decorations afternoon": "both", "front porch autumn leaves afternoon golden": "outdoor", "kitchen cooking thanksgiving morning steam": "indoor", "dining room set table thanksgiving anticipation": "indoor", "living room after dinner thanksgiving evening": "indoor", "backyard afternoon thanksgiving football": "both", "parade crowd thanksgiving morning city": "outdoor", "supermarket thanksgiving eve last minute": "both", "front door wreath autumn thanksgiving": "outdoor", "kitchen table morning coffee thanksgiving preparation": "indoor", "dining table empty setting thanksgiving anticipation": "both", "autumn farm stand harvest thanksgiving morning": "outdoor", "family living room thanksgiving afternoon football": "indoor", "airport arrival thanksgiving reunion": "both", "kitchen sink washing up thanksgiving evening": "indoor", "dining room candles thanksgiving evening": "indoor", "backyard bonfire after thanksgiving evening": "both", "autumn park walk thanksgiving afternoon": "outdoor", "small town parade thanksgiving morning": "outdoor", "neighbourhood thanksgiving morning quiet": "both", "halloween porch carved pumpkins orange night": "outdoor", "suburban trick or treat street night": "outdoor", "halloween costume party interior crowded": "indoor", "haunted house decorated exterior night": "outdoor", "cemetery halloween decorated night moon": "outdoor", "corn maze halloween night torches": "outdoor", "halloween parade street costumes night": "outdoor", "carved pumpkin line porch steps evening": "outdoor", "halloween bonfire field night dark": "outdoor", "school halloween parade daytime": "indoor", "halloween carnival funfair night orange": "outdoor", "graveyard fog machine night halloween": "both", "halloween market stalls night orange": "outdoor", "front door decorated cobwebs night": "outdoor", "haunted hayride field night dark": "outdoor", "halloween street blocked cars candy night": "outdoor", "apple bobbing tub indoor halloween party": "indoor", "halloween disco venue costumes night": "both", "jack o lantern lit porch dark night": "outdoor", "halloween fog street night orange glow": "outdoor", "day of the dead altar ofrenda marigolds candles photographs": "both", "cemetery marigold path candles night procession": "outdoor", "parade dia de los muertos street costume night": "outdoor", "ofrenda home altar photographs candles marigolds": "indoor", "marigold market stalls cempasuchil october": "outdoor", "cemetery grave decorated marigolds candles night": "outdoor", "traditional dia de los muertos performance plaza": "outdoor", "calavera parade float street night elaborate": "indoor", "cemetery night candles thousands marigolds": "outdoor", "altar community display photographs flowers": "both", "traditional market dia de los muertos crafts": "both", "sugar skull making workshop table": "indoor", "paper marigold decorating workshop": "indoor", "home ofrenda setting photographs loved ones": "indoor", "traditional dance dia de los muertos plaza": "outdoor", "cemetery family gathering candles night": "outdoor", "marigold petal path cemetery candles": "outdoor", "procession street candles elaborate costumes night": "indoor", "town plaza altar community display": "outdoor", "colonial church decorated marigolds night": "indoor", "snow exterior house christmas lights evening": "outdoor", "christmas market stall mulled wine lights winter": "outdoor", "fireplace stockings interior christmas eve night": "indoor", "christmas morning unwrapping living room": "indoor", "church midnight mass candles christmas eve": "indoor", "snow street christmas lights evening town": "outdoor", "kitchen christmas cooking morning steam": "indoor", "christmas table set dinner candles formal": "both", "carol singing exterior night lanterns": "outdoor", "christmas window shop lights snow exterior": "outdoor", "train station christmas arrival reunion": "outdoor", "airport arrivals christmas reunion": "outdoor", "bedroom christmas morning first light": "indoor", "snowy landscape christmas day quiet": "outdoor", "christmas fair outdoor stalls lights winter": "outdoor", "pub christmas eve fire interior warm": "indoor", "christmas tree farm choosing morning snow": "outdoor", "chapel candles christmas eve service": "indoor", "christmas dinner table full family afternoon": "both", "rooftop fireworks city view midnight countdown": "outdoor", "bridge city fireworks river reflection midnight": "outdoor", "ballroom countdown midnight champagne": "indoor", "times square style crowd countdown night": "outdoor", "harbour fireworks water reflection midnight": "outdoor", "restaurant midnight countdown champagne toast": "indoor", "house party countdown midnight interior": "indoor", "city street midnight fireworks crowd": "outdoor", "pub midnight new year crowd interior": "indoor", "beach bonfire new year midnight": "outdoor", "rooftop small group midnight city glow": "outdoor", "penthouse view fireworks midnight toast": "outdoor", "countdown clock public square midnight": "indoor", "hotel bar new year midnight formal": "indoor", "quiet home midnight just two champagne": "indoor", "riverside fireworks midnight cold": "outdoor", "theatre new year midnight performance": "indoor", "casino countdown midnight glamour": "indoor", "city park fireworks crowd midnight": "outdoor", "dawn new year morning aftermath quiet": "both", "diwali diyas lit doorstep rangoli night": "outdoor", "rooftop fireworks diwali night city": "outdoor", "home diwali lights decorations lanterns evening": "indoor", "market diwali sweets and lights shopping": "both", "temple diwali celebration lights evening": "both", "street diwali lights procession night": "outdoor", "home puja room diwali candles evening": "indoor", "rangoli design doorstep diwali morning": "outdoor", "diwali mela fairground lights evening": "both", "community diwali celebration hall lights": "both", "balcony diyas lit city lights below diwali": "both", "sweet shop diwali selection morning": "both", "diwali fireworks park night crowd": "outdoor", "home drawing room diwali decorations evening": "indoor", "traditional diwali puja table offerings": "both", "street rangoli competition diwali morning": "outdoor", "diwali lights market shopping evening": "both", "family home diwali gathering evening warm": "indoor", "rooftop diyas city spread below diwali": "outdoor", "diwali lantern release night sky": "both", "chinese new year lanterns street night red gold": "outdoor", "lion dance street performance chinese new year morning": "outdoor", "family reunion dinner table chinese new year eve": "both", "temple prayers new year morning incense": "both", "fireworks chinatown street midnight new year": "outdoor", "lantern festival street night chinese new year": "outdoor", "market new year goods red decorations morning": "both", "chinatown parade dragon lion dance day": "outdoor", "red envelope giving family chinese new year": "both", "family home decorations red gold new year": "indoor", "night market chinese new year lanterns evening": "outdoor", "temple fair new year blessing morning": "outdoor", "dumpling making family table new year eve": "both", "chinese new year fair stalls lights evening": "both", "harbour fireworks chinese new year midnight": "outdoor", "restaurant family new year dinner formal": "indoor", "flower market new year morning purchases": "outdoor", "chinatown exterior red lanterns night": "outdoor", "community hall chinese new year celebration": "indoor", "family home new year eve countdown midnight": "indoor", "1980s Texas oil money ranch interior excess gilt": "indoor", "Dubai penthouse glass tower night city spread": "both", "1920s Wall Street private club oak panelling whiskey": "indoor", "Las Vegas high roller suite gold fixtures midnight": "indoor", "Monaco grand prix paddock exclusive 1970s": "outdoor", "Mayfair private members club 1990s dark wood": "indoor", "Beverly Hills mansion pool twilight excess": "both", "1970s Studio 54 excess night velvet gold": "indoor", "Saudi royal palace reception hall formal": "indoor", "Aspen ski lodge excess fireplace wealthy": "both", "Cannes film festival yacht harbour evening": "outdoor", "Swiss bank vault interior cold formal": "indoor", "Monte Carlo casino floor evening gowns": "indoor", "Hamptons waterfront estate summer": "both", "1980s Wall Street trading floor chaos excess": "outdoor", "Venetian palazzo canal view evening candlelight": "both", "Hong Kong Peninsula hotel lobby formal": "indoor", "New York Plaza Hotel suite excess gold": "indoor", "Marbella villa pool afternoon Spain excess": "both", "Russian oligarch yacht Mediterranean afternoon": "both", "Pittsburgh steel mill 1950s furnace molten pour": "indoor", "Sheffield cutlery works grinding wheel 1960s": "indoor", "Soviet Magnitogorsk steel propaganda aesthetic 1930s": "both", "Victorian foundry iron casting crucible": "indoor", "Welsh coal mining valley pithead 1950s": "outdoor", "Ruhr industrial complex Germany 1930s": "both", "Detroit auto plant assembly line 1960s": "indoor", "Glasgow shipyard Clyde 1960s hull": "outdoor", "Birmingham metal works Victorian forge": "indoor", "Manchester cotton mill interior 1900s": "indoor", "Newcastle tyne bridge construction workers": "outdoor", "Soviet Donbass industrial night furnace": "both", "Sheffield steel works 1970s night shift": "indoor", "Glasgow Beardmore works 1916 wartime": "indoor", "Pittsburgh blast furnace exterior vast night": "outdoor", "Middlesbrough steel transporter bridge fog": "outdoor", "Sunderland shipyard launch ceremony 1950s": "outdoor", "Bethlehem steel night shift Pennsylvania 1940s": "both", "Krupp works Essen industrial Germany 1920s": "indoor", "abandoned Detroit auto plant now ruins": "indoor", "greenhouse Victorian glass structure mist morning plants": "indoor", "glass house mid-century forest transparent trees outside": "outdoor", "aquarium large tank deep blue fish passing": "indoor", "phone box red rain night reflection outside": "outdoor", "conservatory Victorian glass plants afternoon light": "indoor", "glass lift hotel atrium rising view": "indoor", "greenhouse commercial flowers for cutting winter": "indoor", "glass bridge walkway transparent beneath": "outdoor", "Crystal Palace style glass exhibition hall Victorian": "indoor", "glass pyramid Louvre evening Paris": "both", "glazed Victorian arcade shopping covered": "both", "greenhouse botanical garden tropical plants mist": "indoor", "glass floored walkway cliff edge transparent": "outdoor", "Mies van der Rohe glass house interior forest": "indoor", "greenhouse winter forcing house tomatoes": "indoor", "bus shelter glass rain night neon reflection": "both", "glass pavilion modern art park transparent": "outdoor", "ice hotel interior ice walls translucent": "indoor", "glass observatory dome night stars above": "both", "glass floored pool underwater below": "both", "1970s Roland Garros clay court red dust late afternoon": "outdoor", "Harlem street basketball court chain-link night 1990s": "outdoor", "Wimbledon grass court morning dew empty pre-match": "outdoor", "1980s boxing gym ring ropes overhead single light": "indoor", "1960s Flushing Meadows hard court crowd behind": "outdoor", "Soviet sports hall gymnasium late 1970s fluorescent": "indoor", "1990s school gymnasium basketball finals night": "indoor", "Brooklyn boxing gym 1950s leather bag dust": "indoor", "indoor tennis court 1980s green carpet empty": "indoor", "street football pitch Brazil favela evening": "outdoor", "outdoor basketball court Los Angeles sunset 1990s": "outdoor", "fencing hall épée 1970s European championship": "indoor", "Rolland Garros press box 1980s clay below": "both", "squash court white walls echo 1970s": "outdoor", "Olympic velodrome track banking 1980s": "outdoor", "snooker hall green baize single overhead lamp": "indoor", "ice hockey rink empty practice dawn": "both", "horse racing paddock morning dew 1960s": "outdoor", "wrestling mat gymnasium 1970s fluorescent": "indoor", "stadium corridor tunnel pre-match concrete": "indoor", "rain-soaked street night neon reflections": "outdoor", "rooftop city edge midnight confession": "outdoor", "hotel corridor single light night": "indoor", "fire escape night city below": "both", "abandoned ballroom chandelier still lit": "indoor", "lighthouse edge storm approaching": "both", "midnight garden statuary shadow": "outdoor", "train departing platform one left behind": "both", "cinema empty last showing": "both", "rooftop pool city lights reflection midnight": "outdoor", "alleyway rain single lamp": "both", "long corridor hotel night both ends dark": "indoor", "bridge night fog below": "outdoor", "theatre wings backstage curtain": "indoor", "Paris street rain autumn night": "outdoor", "empty restaurant after closing one candle": "indoor", "car park top level night city view": "outdoor", "summer thunderstorm porch lit": "both", "abandoned church single candle": "indoor", "cliff edge storm sea below": "outdoor", "night train compartment moving": "both", "library closed after hours one lamp": "both", "phone box rain night neon": "both", "hotel room morning light complicated": "indoor", "museum closed after hours one guard lamp": "indoor", "empty swimming pool night": "both", "rooftop water tower night city": "outdoor", "jazz club late night last song": "indoor", "night market closing stalls": "outdoor", "boardwalk end of season night": "outdoor", "Sergio Leone spaghetti western dust main street high noon": "outdoor", "film noir Los Angeles rain 1940s street lamp": "outdoor", "Kurosawa samurai village mist dawn feudal Japan": "both", "1970s Hong Kong kung fu rooftop fight choreography": "outdoor", "Sam Peckinpah slow motion western dust blood": "both", "French New Wave Paris existential street 1960s": "outdoor", "John Woo Hong Kong action slow motion 1980s": "both", "Chandler Los Angeles detective office venetian blinds": "indoor", "Dashiell Hammett San Francisco noir fog rain": "both", "Leone close up extreme dust eyes standoff": "both", "1950s western saloon interior practical light": "indoor", "samurai dojo interior dawn training": "indoor", "noir hotel room venetian blinds shadow": "indoor", "1970s cop car American interior night": "indoor", "western desert landscape vast Leone": "outdoor", "Japanese chambara sword fight cherry blossom": "both", "Blaxploitation 1970s urban exterior night": "outdoor", "Shaw Brothers 1970s set fight choreography": "both", "hardboiled detective office rain window": "indoor", "western station platform dust one train leaving": "both", "Rembrandt Dutch Golden Age chiaroscuro amber interior warm shadow": "indoor", "Rembrandt Self-portrait study rich dark background amber glow": "outdoor", "Rembrandt Night Watch composition dramatic group amber light": "both", "Caravaggio tenebrism absolute darkness single candle source dramatic": "both", "Caravaggio biblical scene stone floor darkness single light beam": "both", "Caravaggio dramatic chiaroscuro deep shadow sharp light shaft": "both", "Velázquez Spanish royal court deep atmospheric shadow warm": "outdoor", "Velázquez Las Meninas studio composition interior atmospheric": "indoor", "Velázquez portrait deep background receding space warm shadow": "outdoor", "Goya dark period black paint expressive raw ground visceral": "both", "Goya Saturn devouring dark expressive atmospheric horror": "indoor", "Goya court portrait formal yet psychologically raw": "outdoor", "Vermeer domestic interior window light soft pearl left side": "indoor", "Vermeer Dutch interior tile floor map on wall window light": "indoor", "Vermeer intimate domestic scene soft window light pearl glow": "both", "Rubens Flemish baroque rich colour monumental composition dynamic": "both", "Rubens mythological landscape dramatic sky rich warm": "both", "Rubens allegorical composition rich drapery baroque dynamic": "both", "Van Gogh swirling impasto background emotional thick paint yellow": "both", "Van Gogh Arles bedroom flat saturated colour swirling": "both", "Van Gogh Starry Night swirling sky impasto emotional charged": "both", "Klimt gold leaf decorative ornamental surface Art Nouveau Vienna": "both", "Klimt The Kiss gold embrace ornamental decorative flat": "both", "Klimt portrait gold background decorative pattern Vienna": "outdoor", "Picasso Cubist fractured planes multiple viewpoints bold colour": "both", "Picasso Blue Period melancholy blue monochrome flat": "both", "Picasso Rose Period warm terracotta acrobats soft": "both", "Matisse Fauve flat bold colour joyful interior pattern": "indoor", "Matisse cut-outs flat colour shape bold simple": "both", "Matisse decorative interior bold pattern colour flat": "indoor", "Modigliani elongated oval face simplified warm ground Montparnasse": "both", "Modigliani portrait neutral warm ground elongated simplified": "outdoor", "Modigliani Parisian studio warm ochre ground simplified": "indoor", "Gauguin Tahiti flat saturated colour bold outline tropical": "both", "Gauguin Polynesian landscape flat colour simplified tropical": "both", "Gauguin Where Do We Come From flat mural colour tropical": "both", "Toulouse-Lautrec Moulin Rouge poster flat graphic line colour": "both", "Toulouse-Lautrec Montmartre cabaret flat graphic silhouette": "both", "Toulouse-Lautrec poster art flat bold line shadow": "both", "Hopper American Realist lonely interior light melancholy window": "indoor", "Hopper Nighthawks diner interior light isolation": "indoor", "Hopper New England exterior hard light loneliness American": "outdoor", "Bacon distorted flesh psychological raw dark ground triptych": "both", "Bacon isolated figure on armature dark ground raw": "both", "Bacon studio dark ground raw paint distorted psychological": "indoor", "Warhol Pop Art screen print flat repeated colour silk": "both", "Warhol Factory silver mylar balloons flat colour": "indoor", "Warhol repeated portrait grid flat colour screen print": "outdoor", "Lichtenstein Ben-Day dots bold black outline comic book panel": "both", "Lichtenstein comic panel bold outline dots primary colour": "both", "Lichtenstein Pop Art comic strip bold dots black outline": "both", "Banksy stencil street wall stark graphic urban black white": "outdoor", "Banksy urban wall stencil rat graphic stark": "both", "Banksy stencil graphic protest stark wall urban": "both", "Mucha Art Nouveau poster flowing line floral ornament gold": "both", "Mucha decorative panel flowing hair ornamental border botanical": "both", "Mucha poster art flowing line botanical ornament soft colour": "both", "political caricature ink line exaggerated satirical bold": "both", "Daumier 19th century lithograph satirical caricature stark": "both", "classical caricature Carracci exaggerated features pen ink": "both", "northern lights aurora borealis vast dark sky lake": "outdoor", "ice road frozen lake truck headlights vast night": "outdoor", "Quebec City Old Town winter snow lanterns cobblestone": "both", "Niagara Falls frozen winter mist": "both", "Pacific coast British Columbia old growth forest fog": "outdoor", "Prairie flat horizon grain elevator sky vast": "outdoor", "Cape Breton coastal cliff Atlantic fog": "outdoor", "Banff frozen lake mountain reflection winter": "outdoor", "Toronto winter street snow CN Tower behind": "outdoor", "Churchill Manitoba polar bear tundra twilight": "indoor", "Yukon wilderness log cabin smoke rising winter": "both", "Montreal alley winter snow graffiti": "both", "Vancouver harbour night mountains snow behind": "outdoor", "Newfoundland outport fishing village fog": "outdoor", "Arctic tundra vast flat horizon midnight sun": "outdoor", "Whistler ski run empty dawn fresh snow": "both", "Lake Louise turquoise impossible colour summer": "outdoor", "Canadian Rockies glacier valley vast": "outdoor", "Algonquin Park autumn reflection lake": "outdoor", "Iqaluit Arctic settlement winter dark noon": "both", "Havana crumbling colonial street 1950s Chevrolet midday": "outdoor", "Kingston dancehall night neon Jamaica": "indoor", "Trinidad carnival mas costume street night": "outdoor", "Barbados chattel house painted bright afternoon": "both", "San Juan Old City colonial walls sunset Puerto Rico": "both", "Martinique rum distillery afternoon French colonial": "both", "Cuba tobacco farm interior morning light": "indoor", "Havana rooftop sunset Malecón below": "outdoor", "Jamaica Blue Mountains coffee farm morning mist": "outdoor", "Trinidad Savannah carnival stage night": "both", "Dominican Republic baseball field afternoon dust": "indoor", "Haiti Port-au-Prince street market colour": "outdoor", "Grenada nutmeg plantation afternoon": "indoor", "Antigua English Harbour colonial dockyard": "outdoor", "St Lucia Piton volcanic peak mist morning": "both", "Curaçao Willemstad colonial coloured buildings": "both", "Tobago rainforest waterfall morning": "outdoor", "Barbados rum shop interior afternoon": "indoor", "Cayman Islands turtle farm": "both", "Jamaica country road sugarcane afternoon": "outdoor", "city hall steps elopement simple morning": "indoor", "Las Vegas wedding chapel neon night kitsch": "indoor", "cliffside elopement two and officiant sunset": "outdoor", "church aisle traditional formal procession": "indoor", "marquee reception evening dancing": "both", "courthouse simple just the two civil": "indoor", "beach barefoot ceremony sunset": "outdoor", "greenhouse botanical wedding ceremony": "indoor", "destination wedding Italy villa afternoon": "both", "reception empty after guests gone one couple": "both", "Jewish wedding chuppah traditional formal": "both", "Indian wedding mandap ceremony elaborate": "both", "Mexican civil wedding vibrant tradition": "both", "Scottish highland estate ceremony dramatic": "both", "Paris bridge elopement spontaneous rain": "outdoor", "registry office morning queue practical": "indoor", "chapel of ease rural small ceremony": "indoor", "stately home grand formal traditional": "both", "outdoor festival wedding summer": "outdoor", "hotel suite morning after complicated light": "indoor", "1970s New York subway graffiti covered car moving": "both", "Paris Métro Art Nouveau iron station Abbesses": "both", "London Tube platform 1940s Blitz shelter night": "both", "Tokyo rush hour platform press of people": "both", "Moscow Metro marble hall chandelier Stalin": "indoor", "Berlin U-Bahn East West meeting point": "both", "Chicago elevated train curve city above": "both", "Hong Kong MTR night crowd neon": "both", "São Paulo Metro rush hour colour": "indoor", "New York City Hall station abandoned ghost": "indoor", "Berlin bunker tunnel 1945 historic": "indoor", "Paris catacombs skull lined tunnel": "indoor", "London Tube 1940s carriage wartime": "indoor", "Moscow Metro escalator long marble": "indoor", "New York subway platform late night empty": "both", "Tokyo station corridor endless wayfinding": "indoor", "Chicago riveted steel elevated track exterior": "outdoor", "Berlin U5 DDR era station concrete": "both", "Paris Métro rubber tyres 1960s modern": "both", "San Francisco BART tube underwater bay": "both", "Soviet state circus ring red spotlight 1960s": "indoor", "Depression-era big top sawdust 1930s": "both", "Cirque du Soleil contemporary rig dramatic": "both", "Moscow State Circus dressing room backstage 1970s": "indoor", "Barnum Bailey travelling circus poster backdrop 1920s": "both", "circus ring empty between shows sawdust": "indoor", "wire act high above no net ring below": "indoor", "flying trapeze platform height big top": "both", "Soviet circus animal trainer ring 1960s": "indoor", "1950s Italian circus Fellini register outdoor": "outdoor", "circus train car siding dawn performers": "both", "big top exterior night lights": "outdoor", "clown alley backstage dressing tables": "both", "circus parade street 1920s elephants": "outdoor", "Depression water for elephants register 1930s": "both", "circus ring single spotlight performer dust": "indoor", "big top collapsed in wind aftermath": "both", "Moscow circus school practice hall": "indoor", "circus wagon painted carved travelling": "both", "aerial silks rig warehouse rehearsal contemporary": "indoor", "alien mothership interior command deck retro blinking": "indoor", "bowling alley night creature in shadows 1950s": "both", "high school gymnasium prom night monster gate-crashes": "indoor", "giant spider web forest clearing victims wrapped": "indoor", "Tokyo Shibuya crossing rush hour crowd blur long exposure night": "outdoor", "New York Times Square neon night crowd ghost streaks long exposure": "both", "London Oxford Street Christmas crowd blur long exposure day": "outdoor", "Hong Kong central crossing crowd blur night neon streaks": "outdoor", "Grand Central Station commuter rush hour blur shafts light": "indoor", "Paris Gare du Nord rush hour crowd blur platform long exposure": "indoor", "Shanghai Nanjing Road night crowd blur neon long exposure": "both", "Naples street market crowd blur afternoon long exposure": "outdoor", "Istanbul Grand Bazaar crowd blur interior long exposure": "indoor", "Mumbai train station rush hour blur crowd platform": "outdoor", "city intersection traffic light trails night long exposure": "outdoor", "motorway overpass light trails night long exposure city beyond": "outdoor", "San Francisco cable car blur street long exposure night": "outdoor", "Times Square taxi yellow streak night long exposure": "both", "Tokyo expressway flyover light trails night long exposure": "both", "New York bridge traffic blur night long exposure": "outdoor", "Las Vegas Strip light trails night long exposure crowd blur": "both", "Chicago Lake Shore Drive light trails night long exposure": "both", "Seoul Gangnam crossing light trails night crowd blur": "outdoor", "Bangkok traffic night light trails chaos long exposure": "both", "waterfall silk water long exposure forest sharp rocks": "outdoor", "mountain stream silk water long exposure boulders sharp": "outdoor", "ocean wave silk blur long exposure rock foreground sharp": "outdoor", "fountain city square silk water long exposure crowd blur": "outdoor", "Niagara Falls silk mist long exposure edge sharp": "both", "Norwegian fjord waterfall silk long exposure": "outdoor", "Icelandic river silk water long exposure lava rock sharp": "outdoor", "Scottish highland waterfall silk long exposure heather sharp": "outdoor", "Japanese onsen steam and silk water long exposure": "both", "Venice canal water silk blur gondola long exposure night": "both", "train platform train blur streak past both still": "outdoor", "Tokyo Metro platform train blur long exposure": "indoor", "London Tube platform train streak blur long exposure": "indoor", "Paris Métro blur streak train platform long exposure": "outdoor", "Berlin U-Bahn platform train blur long exposure": "indoor", "airport concourse crowd blur long exposure both still": "indoor", "train station clock crowd blur below long exposure": "indoor", "subway escalator blur crowd long exposure sharp": "indoor", "railway station concourse pigeons blur long exposure": "both", "ferry terminal crowd boarding blur long exposure": "outdoor", "carnival parade crowd blur float passing both still": "outdoor", "street protest march blur crowd both still long exposure": "outdoor", "concert crowd blur movement both still foreground": "indoor", "marathon runners blur both still pavement long exposure": "outdoor", "carnival dancers blur both still watching long exposure": "both", "fireworks streak blur both still looking up long exposure": "both", "stock exchange trading floor blur crowd both still": "indoor", "airport departure board flicker blur long exposure": "outdoor", "sports stadium crowd blur wave both still pitch long exposure": "outdoor", "night market crowd blur both still stall long exposure": "outdoor", "Los Angeles rain 1940s noir street lamp wet reflection": "outdoor", "Chicago noir El train overhead rain night shadow": "both", "San Francisco Chandler fog hill cable car night": "both", "New York fire escape rain night noir": "both", "Tokyo Shinjuku neon night alley narrow dense kanji": "both", "Hong Kong Mong Kok neon night dense vertical signs": "outdoor", "Seoul Gangnam neon night K-beauty signage": "both", "Osaka Dotonbori neon canal reflection night": "both", "Las Vegas strip neon day garish": "both", "Bangkok Chinatown neon night dense traffic": "both", "East Berlin Plattenbau brutalist block 1970s grey": "both", "Moscow Khrushchyovka block estate winter": "both", "London Barbican brutalist concrete walkways": "both", "Marseille Unité d'Habitation Le Corbusier": "both", "Belgrade brutalist monument vast dramatic": "both", "Minsk Soviet boulevard vast ceremonial": "both", "Paris Haussmann boulevard golden stone dawn": "outdoor", "Edinburgh Old Town stone alley gaslight": "both", "Prague Old Town square golden cobblestone dawn": "both", "Budapest Parliament Danube reflection night": "both", "Vienna Ringstrasse imperial architecture dusk": "both", "Barcelona Gothic Quarter narrow golden": "both", "Shanghai Pudong glass tower forest night": "outdoor", "Dubai glass tower desert edge dawn": "outdoor", "Singapore Marina Bay night reflection water": "both", "New York Hudson Yards contemporary glass": "both", "London Canary Wharf glass canyon night": "outdoor", "Singapore Jewel Changi waterfall interior": "outdoor", "New York City steam vent night dramatic": "both", "Paris catacombs skull lined narrow torch": "both", "London Soho alley night neon sign": "both", "New York Chinatown night dense narrow": "both", "Mumbai monsoon first rain flooding street joy dancing": "outdoor", "Kerala monsoon paddy field rain dramatic": "both", "Bangkok monsoon flood street motorbike spray": "outdoor", "Hanoi monsoon street rain dramatic tropical": "outdoor", "Kolkata monsoon street rain reflection puddle": "outdoor", "Blade Runner noir rain alley neon wet reflection night": "both", "Los Angeles rain 1940s noir street": "outdoor", "Chandler rain San Francisco fog hill night": "both", "film noir wet pavement street lamp reflection": "outdoor", "Tokyo alley rain neon reflection night narrow": "both", "London grey drizzle Waterloo Bridge umbrella commute": "both", "Edinburgh drizzle grey castle behind mist": "both", "Dublin drizzle grey Georgian street umbrella": "outdoor", "Glasgow drizzle grey tenement street": "outdoor", "Portland Oregon grey drizzle everyday": "both", "tropical downpour beach shelter dramatic": "outdoor", "Scottish highland sudden downpour open moor": "outdoor", "New York summer downpour steam street": "outdoor", "Paris summer downpour cafe awning shelter": "both", "Rome sudden downpour fountain piazza": "both", "Icelandic rain dramatic rainbow cliff": "outdoor", "Vancouver rain forest dramatic mist": "outdoor", "Japanese rain bamboo forest atmospheric": "indoor", "Norwegian fjord rain mist dramatic": "outdoor", "New Zealand rain rainforest dramatic lush": "outdoor", "after rain Paris cobblestone reflection puddle golden": "both", "after rain Tokyo neon reflection puddle night": "outdoor", "after rain London Victorian street reflection lamp": "outdoor", "rainbow after storm field dramatic": "both", "after monsoon street reflection India dramatic": "outdoor", "petrol station forecourt dramatic speech nobody watching night": "indoor", "supermarket aisle operatic gesture fluorescent ordinary": "indoor", "laundromat 3am theatrical monologue washing machines": "indoor", "bus stop theatrical declaration nobody waiting": "indoor", "hospital waiting room dramatic exit door": "both", "car park rooftop theatrical confrontation empty night": "outdoor", "kebab shop 2am grand gesture fluorescent": "both", "train carriage theatrical aside fellow passengers ignore": "both", "airport arrivals hall dramatic reunion theatrical": "both", "lift lobby theatrical pause before doors open": "indoor", "office corridor dramatic walk away slow motion": "indoor", "phone box raining theatrical call dramatic": "both", "motorway services dramatic tableau ordinary setting": "both", "underpass theatrical freeze frame urban": "both", "corner shop theatrical argument fluorescent": "both", "post office queue theatrical monologue": "indoor", "swimming pool changing room dramatic exit": "indoor", "railway platform theatrical goodbye overplayed": "both", "department store escalator theatrical descent": "indoor", "bowling alley theatrical celebration strike": "indoor", "bus upper deck theatrical speech empty": "indoor", "car wash theatrical moment soap suds": "both", "dentist waiting room theatrical anxiety performance": "indoor", "betting shop theatrical reaction to result": "indoor", "library theatrical whispered intensity quiet": "indoor", "chip shop 11pm theatrical romance counter": "indoor", "newsagent morning theatrical significance ordinary": "indoor", "cemetery theatrical grief performative": "both", "wedding registry office theatrical entrance late": "indoor", "rooftop car park theatrical last stand night": "outdoor", "Leone spaghetti western main street standoff noon dust extreme": "outdoor", "Leone close-up eyes sweat dust standoff dramatic": "both", "western saloon swing doors dramatic entrance": "indoor", "western canyon ambush dramatic rocks dust": "outdoor", "western train robbery moving dramatic dynamic": "both", "western dawn cemetery standoff dramatic light": "outdoor", "Kurosawa samurai dawn mist field two opponents dynamic": "both", "Kurosawa rain mud samurai fight low angle dynamic": "both", "samurai bamboo forest duel dynamic light": "outdoor", "Edo period Japan village samurai arrival dramatic": "outdoor", "samurai castle rooftop fight dramatic dynamic": "outdoor", "feudal Japan bridge standoff samurai dramatic": "outdoor", "film noir Los Angeles rain alley 1940s dynamic chase": "both", "Chandler detective office venetian blind shadow dramatic": "indoor", "noir San Francisco fog chase hill dramatic": "both", "noir night club chase dramatic 1940s": "indoor", "noir car chase night Los Angeles dynamic": "both", "noir rooftop confrontation rain dramatic 1940s": "outdoor", "Shaw Brothers rooftop kung fu 1970s dynamic mid-fight": "outdoor", "John Woo dual pistol dramatic slow motion 1980s": "both", "Hong Kong alley chase dynamic parkour dramatic": "outdoor", "Bruce Lee dojo fight scene dramatic dynamic": "indoor", "1970s Hong Kong street fight dramatic dynamic": "outdoor", "kung fu training hall dramatic dynamic 1970s": "indoor", "Peckinpah slow motion dust blood dramatic western shot": "both", "great plains western final showdown dramatic vast": "outdoor", "western desert chase horses dramatic dynamic": "outdoor", "Blaxploitation 1970s urban chase night dynamic": "both", "hardboiled detective rain chase dramatic dynamic": "both", "film noir bridge confrontation rain dramatic": "both", "NASA mission control 1969 Apollo celebration consoles Houston": "indoor", "NASA astronaut suit-up room pre-launch genuine candid": "both", "Cape Canaveral launch pad Saturn V 1969 dramatic": "outdoor", "NASA cafeteria astronaut training casual 1960s": "indoor", "NASA press conference Apollo 1960s genuine": "indoor", "Baikonur launch pad Soviet cosmonaut dramatic": "outdoor", "ISS cupola window Earth below blue atmosphere vast": "both", "ISS interior cramped equipment floating objects": "indoor", "ISS airlock EVA preparation suited dramatic": "both", "space shuttle cockpit pre-launch countdown": "indoor", "Earth from orbit blue marble vast": "outdoor", "terminator line Earth day night from orbit": "both", "city lights Earth night from orbit dramatic": "both", "aurora from orbit Earth green curtain": "both", "deep space nebula vast colour impossible": "both", "Mars surface mission dramatic vast rust": "outdoor", "moon surface Earth rise Apollo dramatic": "outdoor", "asteroid belt interior dramatic science fiction": "outdoor", "space station exterior dramatic Earth below": "both", "spacecraft interior long journey dramatic": "both", "1960s NASA space centre control room vintage": "both", "Soviet space programme poster aesthetic Sputnik": "both", "retro rocket cockpit chrome analogue 1950s": "indoor", "space age furniture interior 1960s optimistic": "both", "NASA canteen astronauts 1960s candid casual": "both", "cosmonaut training pool weightless simulation": "both", "SpaceX control room contemporary launch celebration": "both", "Virgin Galactic window experience first time": "both", "private space interior billionaire drama contemporary": "both", "space tourism window first look Earth below": "both", "Rembrandt intimate portrait amber glow single candle dark ground": "both", "Rembrandt grand biblical scene figures emerging from darkness dramatic": "both", "Rembrandt landscape winter bare trees cold grey sky Dutch": "both", "Caravaggio single candle absolute darkness tenebrism stone floor": "both", "Caravaggio outdoor dramatic scene strong sunlight deep shadow": "both", "Caravaggio tavern interior low life scene dramatic light": "both", "Velázquez royal portrait deep receding space atmospheric court": "indoor", "Velázquez kitchen scene domestic realist foreground background": "both", "Velázquez landscape outdoor light airy Spanish countryside": "both", "Goya dark period black paint visceral raw nightmare ground": "both", "Goya court portrait formal yet psychologically exposed bright": "both", "Goya Disasters of War documentary raw horror outdoor": "both", "Vermeer domestic interior pearl window light left soft tile floor": "both", "Vermeer intimate detail close object foreground soft background": "both", "Vermeer outdoor view through window city beyond interior frame": "both", "Rubens mythological scene dramatic sky dynamic figures outdoor": "both", "Rubens hunting scene outdoor energetic movement horses": "both", "Rubens allegorical interior rich drapery baroque dramatic": "both", "Van Gogh Arles outdoor wheat field swirling sky impasto noon": "both", "Van Gogh night café interior yellow gaslight swirling impasto": "indoor", "Van Gogh bedroom Arles flat colour pattern simplified interior": "both", "Klimt The Kiss embrace gold leaf ornamental flat decorative": "both", "Klimt portrait woman gold background decorative pattern vertical": "both", "Klimt landscape tree of life flat gold decorative scrolling": "both", "Picasso Cubist fractured planes multiple viewpoints ochre grey": "both", "Picasso Blue Period sparse melancholy blue tones flat": "both", "Picasso Rose Period warm terracotta soft circus acrobats light": "both", "Matisse Odalisque interior pattern on pattern flat colour decorative": "both", "Matisse Dance flat colour figures outdoor against blue sky": "both", "Matisse paper cut-out flat colour shape simplified collage": "both", "Modigliani portrait warm ochre ground neutral Montparnasse simplified": "both", "Modigliani reclining figure horizontal warm simplified ground": "both", "Modigliani couple portrait warm ground two elongated simplified": "both", "Gauguin Tahitian outdoor flat colour tropical lush dense": "both", "Gauguin interior domestic Polynesian flat pattern mat floor": "both", "Gauguin Breton outdoor pre-Tahiti flat colour Pont-Aven": "both", "Toulouse-Lautrec Moulin Rouge stage performance night poster flat": "both", "Toulouse-Lautrec backstage dressing room intimate observation": "both", "Toulouse-Lautrec brothel interior intimate domestic observation": "both", "Hopper Nighthawks diner late night three figures counter fluorescent": "both", "Hopper interior woman alone window light morning melancholy": "both", "Hopper New England exterior hard sunlight white house isolated": "both", "Bacon triptych three panels dark ground armature isolated figure": "both", "Bacon Screaming Pope velvet curtain compressed space dark": "both", "Bacon studio floor newspaper raw paint dark ground": "both", "Warhol screen print single portrait repeated flat colour four grid": "both", "Warhol Factory silver mylar balloons interior New York 1960s": "both", "Warhol Death and Disaster flat newspaper image silkscreen": "both", "Lichtenstein comic romance panel crying girl Ben-Day dots bold": "both", "Lichtenstein war comic explosion Whaam bold primary action": "both", "Lichtenstein brushstroke painting meta parody abstract Ben-Day": "both", "Banksy urban wall stencil rat protest placard graphic street": "outdoor", "Banksy beach wall stencil girl balloon lost naive graphic": "outdoor", "Banksy museum wall stencil caveman shopping trolley subversive": "indoor", "Mucha poster art nouveau flowing hair botanical border soft gold": "both", "Mucha decorative panel four seasons circular border ornamental": "both", "Mucha theatre poster dramatic flowing line colour spot flat": "both", "political caricature ink bold exaggerated satirical broadsheet": "both", "Daumier 19th century lithograph street scene Paris satirical": "outdoor", "Gillray Georgian caricature excess grotesque colour hand": "both", "Wadi Rum red rock Jordan dawn long shadow": "outdoor", "Sahara dune sea sunset two figures tiny horizon": "outdoor", "Death Valley salt flat noon bleached vast white": "outdoor", "Atacama Chile night sky clearest stars world": "outdoor", "Namib vlei dead trees orange dune dawn iconic": "outdoor", "Jordanian desert ancient Nabataean rock city Petra dusk": "outdoor", "Moroccan desert Merzouga dune sea sunset gold": "outdoor", "Arizona Monument Valley sandstone butte long shadow": "outdoor", "White Sands New Mexico gypsum dune noon": "outdoor", "Sossusvlei Namibia dune red iron oxide dawn": "outdoor", "Gobi Mongolia vast flat sand storm approaching": "both", "Rub al Khali Empty Quarter dune sea endless": "outdoor", "Sonoran desert saguaro cactus sunset Arizona": "outdoor", "Atacama salt flat mirror sky reflection": "outdoor", "Death Valley Zabriskie Point badlands dawn": "outdoor", "Sahara oasis palm trees mirage heat shimmer": "outdoor", "Wadi Rum desert camp fire night stars": "outdoor", "Arabian desert camel caravan horizon line dawn": "outdoor", "Painted Desert Arizona colour band formation": "outdoor", "Great Sand Dunes Colorado snow mountain beyond": "outdoor", "Lencois Maranhenses Brazil white dune lagoon": "outdoor", "Black Rock Desert Nevada vast flat nothing": "outdoor", "Danakil Depression Ethiopia hottest place earth": "both", "Simpson Desert Australia red dune noon": "outdoor", "Taklamakan China Silk Road ancient route": "both", "Namib fog coastal desert ghost ship distant": "outdoor", "Negev desert Ramon crater vast geological": "outdoor", "Judean desert cave dwelling ancient": "outdoor", "Chilean Atacama lava field volcanic moon": "outdoor", "Rub al Khali dune crest wind sand stream": "outdoor", "pre-storm sky bruised purple green light eerie flat calm": "both", "tornado alley Great Plains storm wall approaching vast": "outdoor", "North Sea storm wave lighthouse spray dramatic": "both", "tropical storm eye wall approach Caribbean coast": "outdoor", "Scottish moor storm approaching dramatic light shafts": "outdoor", "Turner painting storm sea ship dramatic": "both", "storm aftermath debris calm eerie light": "both", "lightning strike plain night dramatic single bolt": "outdoor", "monsoon India storm wall approaching dust first": "both", "storm light dramatic shafts through cloud dramatic countryside": "both", "Patagonia storm mountain dramatic wind bent tree": "outdoor", "Norwegian coast storm fjord dramatic wave": "outdoor", "Great Plains supercell storm rotating vast sky": "outdoor", "storm tide surge coastal town dramatic": "outdoor", "Alpine storm lightning peak dramatic": "both", "Australian outback storm red dust approaching wall": "both", "storm drain rushing water urban aftermath": "both", "storm at sea container ship wave dramatic": "both", "Yorkshire moor storm approaching Brontë register": "outdoor", "Mediterranean storm dramatic cliff wave spray": "outdoor", "Great Lakes storm grey vast water horizon": "both", "storm shelter doorway waiting dramatic light": "both", "hurricane eye approach coast dramatic satellite": "outdoor", "winter storm blizzard white out reduced visibility": "both", "dust storm haboob Arizona wall approaching": "both", "storm electricity pylon lightning dramatic": "both", "Cornish coast storm wave dramatic heritage": "outdoor", "storm abandoned car park flooding dramatic": "both", "typhoon approach Hong Kong dramatic sky": "outdoor", "storm rainbow aftermath dramatic light field": "both", "bioluminescent cave impossible blue vast underground": "both", "bioluminescent sea bay night blue fire water": "both", "bioluminescent forest floor impossible blue mushroom": "both", "bioluminescent waterfall cave impossible beauty": "both", "lost temple jungle consumed impossible vegetation": "both", "sunken city coral reef impossible underwater": "both", "ancient city cloud forest mist impossible": "both", "impossible library cave books water inside": "both", "underground ocean vast impossible cave vast": "both", "crystal cave geode impossible giant interior": "both", "floating island chain impossible geology vast": "both", "inverted waterfall water goes up impossible": "both", "door in cliff face ancient impossible": "both", "impossible vertical forest hanging cliff": "both", "sky island above cloud vast impossible": "both", "underground river cave impossible blue": "both", "giant footprint fresh impossible scale jungle": "both", "bone structure vast impossible creature ancient": "both", "impossible nest vast woven jungle canopy": "both", "cave painting moving animated ancient impossible": "both", "ancient creature track impossible fresh desert": "both", "enormous egg impossible scale discovered": "both", "Victorian expedition camp impossible landscape tent": "both", "explorer notebook impossible creature sketch": "both", "expedition map edge of known world illustrated": "both", "Victorian naturalist discovery impossible creature": "both", "deep sea vent impossible creature thermal": "both", "cave diving impossible blue darkness vast": "both", "polar expedition impossible light phenomenon": "both", "high altitude impossible landscape oxygen thin": "both", "volcano crater impossible approach dramatic": "both", "ancient cave impossible size interior vast": "both", "Havana rooftop washing lines crumbling colonial city below": "outdoor", "Havana rooftop 1950s Chevrolet visible below dawn": "outdoor", "Havana rooftop Malecón sea beyond crumbling beautiful": "outdoor", "Tokyo neon rooftop water tank city spread night dense": "outdoor", "Hong Kong cage home rooftop dense city beyond dramatic": "outdoor", "Seoul rooftop Han River beyond night neon": "outdoor", "Osaka rooftop dense city night neon sign": "outdoor", "New York water tower rooftop Manhattan skyline dawn": "outdoor", "Brooklyn rooftop Manhattan bridge view sunset": "outdoor", "New York rooftop 1970s vintage city behind": "outdoor", "New York rooftop party night skyline": "outdoor", "Paris Haussmann rooftop chimney zinc dawn golden": "outdoor", "Paris rooftop Eiffel visible golden light": "outdoor", "Paris rooftop 6th arrondissement zinc slate dawn": "outdoor", "Lisbon Alfama rooftop tile fado city below": "outdoor", "Porto rooftop azulejo tile city below river": "outdoor", "Rome rooftop terracotta dome city eternal": "outdoor", "Naples rooftop Vesuvius beyond city below": "outdoor", "Athens rooftop Acropolis visible dramatic dusk": "outdoor", "Istanbul rooftop mosque minaret city both sides": "outdoor", "Detroit abandoned factory rooftop city below dramatic": "outdoor", "Chicago water tower rooftop industrial city": "outdoor", "São Paulo rooftop favela meets glass tower": "outdoor", "Beirut rooftop bullet holes city rebuild": "outdoor", "Cairo rooftop minaret city ancient sprawl": "outdoor", "Mumbai rooftop slum city beyond contrast": "outdoor", "rooftop garden city dawn first light plants": "outdoor", "rooftop pool city below luxury night reflection": "outdoor", "rooftop helipad empty city spread dramatic": "outdoor", "rooftop solar panels practical city beyond": "outdoor", "casino CCTV overhead roulette table win celebration genuine": "indoor", "casino corridor CCTV caught running toward exit laughing": "indoor", "casino elevator CCTV caught mid-argument resolved": "indoor", "supermarket CCTV midnight spontaneous dance empty aisle": "indoor", "supermarket CCTV proposal breakfast cereal aisle": "indoor", "supermarket CCTV caught sharing earphones frozen food": "indoor", "ATM CCTV night proposal caught genuine unposed": "indoor", "street corner CCTV caught reunion unexpected": "outdoor", "petrol station CCTV caught slow dance forecourt night": "both", "bus stop CCTV caught first kiss waiting": "indoor", "taxi dashcam caught back seat conversation genuine": "both", "underground CCTV platform caught missing train laughing": "indoor", "airport CCTV arrivals hall reunion genuine caught": "indoor", "train station CCTV platform caught unexpected meeting": "both", "bus CCTV upper deck caught secret told": "both", "ferry CCTV deck caught storm reaction genuine": "both", "hospital corridor CCTV good news received genuine": "indoor", "school corridor CCTV caught celebration exam result": "indoor", "office CCTV lift caught honest conversation": "indoor", "library CCTV caught laughing inappropriate": "indoor", "street CCTV fishmonger caught proposal over ice": "outdoor", "market CCTV caught argument over price genuine": "both", "park CCTV caught spontaneous picnic rain coming": "both", "beach CCTV lifeguard station caught sunset watching": "outdoor", "gym CCTV caught giving up gracefully": "indoor", "café CCTV caught reading same book at same time": "indoor", "cinema CCTV foyer caught reaction to film genuine": "indoor", "bookshop CCTV caught same book reached for same time": "indoor", "museum CCTV caught asleep in gallery same painting": "indoor", "laundrette CCTV 3am caught genuine conversation": "indoor"};

const SHOT_OPTIONS = [
  "extreme close-up faces","tight two-shot","medium two-shot",
  "cowboy shot waist up","full body shot","wide environmental",
  "over-shoulder","low angle heroic","high angle overhead",
  "Dutch angle tilt","silhouette backlit","foreground frame",
  "symmetrical centered","rule of thirds offset","deep focus wide"
];

// ── TENSION TRANSLATIONS ──────────────────────────────────────
// Maps each tension string to a natural-language cinematic phrase

const RATIOS = [
  {label:'9:16 \u2014 Portrait', value:'9:16'},
  {label:'16:9 \u2014 Landscape', value:'16:9'},
  {label:'1:1 \u2014 Square', value:'1:1'},
  {label:'4:5 \u2014 Instagram', value:'4:5'},
  {label:'3:4 \u2014 Classic', value:'3:4'},
  {label:'2:3 \u2014 Print', value:'2:3'},
  {label:'21:9 \u2014 Cinematic', value:'21:9'},
];

const SUBJECTS = [
  {label:'Solo \u2014 1 person', value:'solo', prefix:'solo portrait of the person in the provided image keeping their facial features exactly the same'},
  {label:'Couple \u2014 2 people', value:'couple', prefix:'portrait of the couple in the provided image keeping their facial features exactly the same'},
  {label:'Group \u2014 3 or more', value:'group', prefix:'group portrait of the people in the provided image keeping their facial features exactly the same'},
];

const SOLO_POSES = ["standing tall arms at sides", "looking off into distance", "leaning against wall one shoulder", "seated looking directly at camera", "crouched low looking up", "walking toward camera slow", "back to camera looking over shoulder", "sitting on ground arms wrapped knees", "one hand raised shielding eyes squint", "mid-stride walking candid", "arms crossed confident stance", "hand in hair windswept candid", "looking down contemplative", "standing in profile sharp", "reaching toward camera one hand", "seated side-on looking away", "running toward camera", "head down hands in pockets", "looking up arms wide open", "silhouette standing at edge", "leaning on railing both arms", "crouched examining something ground", "one foot up on surface casual lean", "spinning mid-turn arms out", "hands cupping face close", "seated on steps elbows on knees", "walking away slow half-turn", "jumping mid-air arms out", "standing still crowd moving around", "one hand on wall leaning in"];
const GROUP_POSES = ["group huddled close all looking camera", "laughing together one joke", "walking abreast toward camera", "back to back to back three-wide", "one in front arms wide others behind", "group arms around each other", "all looking in different directions", "one elevated others below", "group running toward camera", "seated circle all facing in", "layered depth one close one far", "group jump mid-air", "one speaking others listening", "hands in middle team stack", "group silhouette against light", "scattered through space candid", "all pointing same direction", "group celebration arms raised", "intimate cluster all close", "one leading others following", "group seated steps descending", "back row standing front row seated", "all mid-laugh candid", "group embrace wrap around", "fanning out from center", "group toast raised together", "walking away as group", "scattered park bench cluster", "group kneeling one standing center", "all looking up together"];

const TENSION_TRANSLATIONS = {
  "French vs. English": "French pressing against English",
  "above vs. below": "above pressing against below",
  "abstract vs. realistic": "the tension between abstract and realistic",
  "act vs. consequence": "the act and the consequence arriving together",
  "after vs. before": "the tension between after and before",
  "aggression vs. calm": "aggression pressing against calm",
  "alive vs. still": "alive and still in the same frame",
  "alone vs. surrounded": "alone held at the edge of surrounded",
  "alone vs. together": "alone pressing against together",
  "alone vs. together at stove": "solitude at the stove broken by company",
  "alone vs. watched": "alone held at the edge of watched",
  "altar vs. exit": "the altar behind them, the exit ahead",
  "altitude vs. body": "altitude and body in the same frame",
  "analog vs. digital": "analog held at the edge of digital",
  "ancestor vs. heir": "the tension between ancestor and heir",
  "ancient vs. alive": "ancient beyond measure and completely alive",
  "ancient vs. colonial": "the tension between ancient and colonial",
  "ancient vs. now": "ancient pressing against now",
  "anger vs. hope": "anger and hope occupying the same body",
  "animal vs. landscape": "animal and landscape in the same frame",
  "applause vs. silence": "applause cracking under the weight of silence",
  "archive vs. memory": "archive pressing against memory",
  "arrested vs. free": "the arrested and the free facing each other",
  "arriving vs. leaving": "arriving pressing against leaving",
  "artifact vs. void": "artifact pressing against void",
  "artisan vs. factory": "artisan pressing against factory",
  "artist vs. craft": "artist cracking under the weight of craft",
  "ascent vs. fall": "ascent cracking under the weight of fall",
  "asphalt vs. sky": "asphalt cracking under the weight of sky",
  "attack vs. defense": "attack pressing against defense",
  "awake vs. asleep": "the tension between awake and asleep",
  "awakening vs. asleep": "the tension between awakening and asleep",
  "backup vs. alone": "the tension between backup and alone",
  "battlefield vs. peace": "battlefield and peace in the same frame",
  "beat vs. breath": "beat held at the edge of breath",
  "beauty vs. bizarre": "beauty pushed one degree past into the bizarre",
  "beginning vs. end": "beginning held at the edge of end",
  "beginning vs. everything before": "the beginning pressing against everything that came before",
  "beginning vs. settled": "beginning pressing against settled",
  "bleached vs. vivid": "bleached held at the edge of vivid",
  "bloom vs. bud": "bloom held at the edge of bud",
  "body heat vs. cold air": "body heat cracking under the weight of cold air",
  "body vs. elements": "body pressing against elements",
  "body vs. mass": "body pressing against mass",
  "body vs. mechanism": "body cracking under the weight of mechanism",
  "body vs. silhouette": "the body against the silhouette it makes",
  "bold stroke vs. fine detail": "bold stroke held at the edge of fine detail",
  "border vs. homeland": "border held at the edge of homeland",
  "bought vs. felt": "bought pressing against felt",
  "bouquet vs. bare hands": "bouquet set down, hands finally bare and held",
  "brand vs. person": "the brand name pressing against the person wearing it",
  "breaking vs. holding": "breaking and holding in the same frame",
  "breath vs. drowning": "breath pressing against drowning",
  "breath vs. held breath": "breath and held breath in the same frame",
  "breath vs. stillness": "breath held at the edge of stillness",
  "breath vs. weight": "the tension between breath and weight",
  "breathe vs. sweat": "breathing through the sweat",
  "brief vs. eternal": "brief as a dusk can be, feeling eternal",
  "brilliant vs. hollow": "brilliant and hollow in the same frame",
  "brushwork vs. pencil": "brushwork and pencil in the same frame",
  "budget vs. luxury": "the tension between budget and luxury",
  "built vs. broken": "built pressing against broken",
  "built vs. felt": "the tension between built and felt",
  "built vs. grown": "built and grown in the same frame",
  "buried vs. exposed": "buried beneath the surface or left exposed to everything",
  "burned vs. gentle": "burned golden or gone gently into blue",
  "burning inside vs. frozen out": "burning inside and frozen out in the same frame",
  "burning vs. freezing": "burning held at the edge of freezing",
  "calm vs. dread": "calm held at the edge of dread",
  "calm vs. undertow": "calm cracking under the weight of undertow",
  "camera vs. mirror": "performing for the camera or only for the mirror",
  "canopy vs. floor": "canopy light filtering down to the floor",
  "caricature vs. portrait": "caricature and portrait in the same frame",
  "carnival vs. everyday": "carnival and everyday in the same frame",
  "carnival vs. quiet": "carnival and quiet in the same frame",
  "celebrated vs. alone": "celebrated pressing against alone",
  "celebration vs. mourning": "celebration pressing against mourning",
  "center vs. edge": "center and edge in the same frame",
  "ceremony vs. marriage": "the ceremony over, the marriage just beginning",
  "champion vs. challenger": "the tension between champion and challenger",
  "chant vs. quiet": "the chant breaking through the enforced quiet",
  "chaos vs. mise en place": "chaos pressing against perfect order",
  "character vs. likeness": "the tension between character and likeness",
  "character vs. self": "character cracking under the weight of self",
  "chasing vs. fleeing": "chasing and fleeing in the same frame",
  "choreographed vs. felt": "every planned moment giving way to what is actually felt",
  "choreographed vs. instinct": "choreographed cracking under the weight of instinct",
  "chosen vs. caught": "chosen and caught in the same frame",
  "cinematic vs. real": "the tension between cinematic and real",
  "civilian vs. weapon": "civilian held at the edge of weapon",
  "clean vs. fractured": "clean and fractured in the same frame",
  "clean vs. soaked": "clean held at the edge of soaked",
  "clean vs. worn": "clean pressing against worn",
  "clear vs. obscured": "clear and obscured in the same frame",
  "close vs. apart": "the tension between close and apart",
  "clothes vs. body": "clothes as architecture for the body beneath",
  "clue vs. dead end": "clue and dead end in the same frame",
  "coast vs. heartland": "coast and heartland in the same frame",
  "coast vs. highlands": "coast held at the edge of highlands",
  "coast vs. prairie": "coast cracking under the weight of prairie",
  "cold vs. alive": "cold cracking under the weight of alive",
  "cold vs. warmth": "cold held at the edge of warmth",
  "collection vs. single look": "the collection distilled into one single look",
  "college town vs. working town": "college town and working town in the same frame",
  "colonial vs. indigenous": "colonial cracking under the weight of indigenous",
  "color vs. grey": "color cracking under the weight of grey",
  "color vs. monochrome": "vivid color draining slowly into monochrome",
  "comfort vs. adventure": "comfort held at the edge of adventure",
  "comic vs. serious": "comic pressing against serious",
  "compete vs. cooperate": "compete cracking under the weight of cooperate",
  "conqueror vs. conquered": "the tension between conqueror and conquered",
  "contact vs. distance": "the tension between contact and distance",
  "control vs. abandon": "control held at the edge of abandon",
  "control vs. current": "the tension between control and current",
  "controlled vs. abandoned": "the tension between controlled and abandoned",
  "cool vs. desperate": "cool and desperate in the same frame",
  "coral vs. concrete": "coral and concrete in the same frame",
  "countdown vs. abort": "countdown held at the edge of abort",
  "countdown vs. stillness": "countdown pressing against stillness",
  "craft vs. production": "craft held at the edge of production",
  "creature vs. stillness": "the creature requiring absolute stillness",
  "crew vs. alone": "the tension between crew and alone",
  "crowd vs. empty room": "crowd pressing against empty room",
  "crowded vs. alone": "crowded held at the edge of alone",
  "crown vs. crowd": "crown pressing against crowd",
  "cultivated vs. wild": "cultivated held at the edge of wild",
  "culture vs. cliche": "culture cracking under the weight of cliche",
  "danger vs. safety": "danger held at the edge of safety",
  "dawn vs. midday heat": "dawn coolness burning away to midday heat",
  "day of the dead vs. life": "day of the dead held at the edge of life",
  "day vs. night": "the day releasing into night",
  "demand vs. plea": "the demand that refuses to become a plea",
  "designer vs. street": "designer language spoken back in street terms",
  "desire vs. disgust": "desire held at the edge of disgust",
  "desire vs. restraint": "desire cracking under the weight of restraint",
  "destination vs. journey": "destination and journey in the same frame",
  "diaspora vs. home island": "diaspora cracking under the weight of home island",
  "diner vs. fine dining": "diner held at the edge of fine dining",
  "discovery vs. dread": "discovery cracking under the weight of dread",
  "distance vs. closeness": "distance and closeness in the same frame",
  "domination vs. surrender": "domination held at the edge of surrender",
  "door vs. threshold": "door cracking under the weight of threshold",
  "doubled vs. alone": "doubled held at the edge of alone",
  "dream vs. reality": "dream and reality in the same frame",
  "dressed vs. undone": "dressed to a point then deliberately undone",
  "drift vs. purpose": "drift pressing against purpose",
  "dry memory vs. wet reality": "dry memory and wet reality in the same frame",
  "dry vs. memory of water": "dry pressing against memory of water",
  "dry vs. soaked": "dry pressing against soaked",
  "dust vs. bone": "dust cracking under the weight of bone",
  "earned vs. given": "earned and given in the same frame",
  "earned vs. inherited": "earned cracking under the weight of inherited",
  "earned vs. taken": "earned held at the edge of taken",
  "east coast vs. west coast": "east coast cracking under the weight of west coast",
  "echo vs. origin": "echo cracking under the weight of origin",
  "editorial vs. commercial": "editorial vision against commercial demand",
  "editorial vs. gallery": "the tension between editorial and gallery",
  "effort vs. effortless": "effort and effortless in the same frame",
  "ego vs. survival": "the tension between ego and survival",
  "empire vs. dust": "empire pressing against dust",
  "end vs. beginning": "the end of the pier and the beginning of the water",
  "ending vs. encore": "the tension between ending and encore",
  "ending vs. unresolved": "the tension between ending and unresolved",
  "endurance vs. collapse": "endurance pressing against collapse",
  "endurance vs. surrender": "endurance cracking under the weight of surrender",
  "energy vs. exhaustion": "energy cracking under the weight of exhaustion",
  "engine vs. silence": "engine and silence in the same frame",
  "enter vs. return": "entering and the long question of returning",
  "era vs. eternity": "era cracking under the weight of eternity",
  "eroded vs. standing": "eroded held at the edge of standing",
  "escape vs. return": "escape held at the edge of return",
  "escape vs. trapped": "escape held at the edge of trapped",
  "everyday vs. magic": "everyday and magic in the same frame",
  "exaggerated vs. restrained": "exaggerated cracking under the weight of restrained",
  "excess vs. restraint": "excess pressing against restraint",
  "exhausted vs. resolved": "exhausted and still resolved",
  "exhaustion vs. will": "exhaustion cracking under the weight of will",
  "expected vs. chosen": "what was expected set aside for what was chosen",
  "explosion vs. calm": "explosion cracking under the weight of calm",
  "exposure vs. shelter": "exposure pressing against shelter",
  "face up vs. face down": "face up and face down in the same frame",
  "face vs. mask": "the tension between face and mask",
  "fall vs. catch": "the tension between fall and catch",
  "familiar vs. foreign": "the tension between familiar and foreign",
  "familiar vs. unknown": "familiar pressing against unknown",
  "family vs. couple": "the couple held inside the larger pull of family",
  "family vs. solitude": "family pressing against solitude",
  "far vs. near": "the tension between far and near",
  "fast vs. forgotten": "fast held at the edge of forgotten",
  "fast vs. slow America": "fast pressing against slow America",
  "fast vs. slow cook": "fast heat against long patience",
  "fast vs. slow travel": "the tension between fast and slow travel",
  "fast vs. stranded": "fast and stranded in the same frame",
  "fear vs. conviction": "fear and conviction arriving at the same moment",
  "fear vs. readiness": "fear pressing against readiness",
  "fed vs. hungry": "fed pressing against hungry",
  "feeding vs. fed": "the act of feeding and the grace of being fed",
  "festival vs. weekday": "festival pressing against weekday",
  "fiesta vs. everyday": "fiesta pressing against everyday",
  "fire vs. dark": "the fire of it before the dark takes over",
  "fire vs. white": "fire pressing against white",
  "first contact vs. solitude": "first contact cracking under the weight of solitude",
  "first dance vs. last song": "the first dance already edging toward the last song",
  "first vs. familiar": "first cracking under the weight of familiar",
  "first vs. forever": "first cracking under the weight of forever",
  "fishing vs. feasting": "the tension between fishing and feasting",
  "flag vs. frontier": "flag and frontier in the same frame",
  "flat color vs. depth": "the tension between flat color and depth",
  "flesh vs. steel": "flesh cracking under the weight of steel",
  "float vs. sink": "float pressing against sink",
  "fluid vs. rigid": "fluid cracking under the weight of rigid",
  "footstep vs. silence": "footstep pressing against silence",
  "formal vs. tender": "formal occasion cracked open by tenderness",
  "forward vs. nowhere": "the tension between forward and nowhere",
  "forward vs. stopped": "the tension between forward and stopped",
  "found vs. consumed": "found inside something vast enough to consume",
  "found vs. lost": "found in the world and lost in it at the same time",
  "found vs. lost in white": "the tension between found and lost in white",
  "fragile vs. permanent": "the tension between fragile and permanent",
  "fragrant vs. plain": "fragrant cracking under the weight of plain",
  "framed vs. free": "the tension between framed and free",
  "free vs. surrounded": "free cracking under the weight of surrounded",
  "freedom vs. constraint": "freedom pressing against constraint",
  "freedom vs. direction": "the tension between freedom and direction",
  "fresh vs. leftover": "the fresh against what remains",
  "fresh vs. worn": "fresh and worn in the same frame",
  "front line vs. witness": "standing at the front line or bearing witness from behind",
  "front row vs. backstage": "the front row watching what backstage already knows",
  "fuel vs. fumes": "fuel held at the edge of fumes",
  "fury vs. control": "fury and control in the same frame",
  "gear vs. skin": "the tension between gear and skin",
  "geometry vs. organic": "the tension between geometry and organic",
  "gilded vs. cracked": "gilded and cracked in the same frame",
  "glacier vs. moment": "glacier and moment in the same frame",
  "glamour vs. grief": "glamour and grief in the same frame",
  "glass vs. churn": "glass pressing against churn",
  "glass vs. flesh": "glass cracking under the weight of flesh",
  "glass vs. torrent": "glass pressing against torrent",
  "glittering vs. empty": "glittering and empty in the same frame",
  "glory vs. cost": "the tension between glory and cost",
  "glory vs. defeat": "glory and defeat in the same frame",
  "gold vs. rust underneath": "gold held at the edge of rust underneath",
  "golden vs. grey": "the golden hour giving way to grey",
  "granite vs. human": "granite held at the edge of human",
  "graphic novel vs. fine art": "graphic novel held at the edge of fine art",
  "gravity vs. weightless": "gravity and weightless in the same frame",
  "green vs. grey": "green and grey in the same frame",
  "grip vs. release": "the tension between grip and release",
  "growth vs. stillness": "growth and stillness in the same frame",
  "guided vs. wandering": "guided and wandering in the same frame",
  "gunfire vs. silence": "gunfire pressing against silence",
  "hand vs. tool": "the tension between hand and tool",
  "hands vs. tools": "hands alone against the full weight of tools",
  "hard vs. soft": "the tension between hard and soft",
  "haute couture vs. ready-to-wear": "the couture ideal against ready-to-wear reality",
  "having vs. losing": "the tension between having and losing",
  "heard vs. felt": "heard pressing against felt",
  "heartbeat vs. blizzard": "the tension between heartbeat and blizzard",
  "heat vs. body": "the tension between heat and body",
  "heat vs. cold metal": "heat cracking under the weight of cold metal",
  "heat vs. patience": "heat demanding patience",
  "held vs. free": "held held at the edge of free",
  "held vs. letting go": "held close before the letting go",
  "held vs. numb": "held pressing against numb",
  "held vs. swept": "held pressing against swept",
  "hidden vs. exposed": "hidden pressing against exposed",
  "high fashion vs. wearable": "high fashion translated into something almost wearable",
  "high vs. low": "high pressing against low",
  "highway vs. main street": "highway and main street in the same frame",
  "history vs. paradise": "history and paradise in the same frame",
  "hockey rink vs. art gallery": "hockey rink held at the edge of art gallery",
  "hockey vs. everything else": "hockey cracking under the weight of everything else",
  "home vs. nowhere": "home pressing against nowhere",
  "home vs. restaurant": "home kitchen warmth against the precision of the restaurant",
  "horizon vs. overhead": "the horizon burning while overhead goes dark",
  "horizon vs. past": "the tension between horizon and past",
  "human mark vs. concrete blank": "human mark cracking under the weight of concrete blank",
  "human vs. cosmos": "the tension between human and cosmos",
  "human vs. machine": "human held at the edge of machine",
  "human vs. nature": "human cracking under the weight of nature",
  "human vs. structure": "human cracking under the weight of structure",
  "hunger vs. fullness": "hunger and the memory of fullness",
  "hunted vs. hunting": "hunted cracking under the weight of hunting",
  "hunting vs. hunted": "hunting cracking under the weight of hunted",
  "ice vs. skin": "the tension between ice and skin",
  "iconic vs. hidden": "the tension between iconic and hidden",
  "illustration vs. photograph": "illustration pressing against photograph",
  "immigrant dream vs. local tradition": "immigrant dream and local tradition in the same frame",
  "immigrant wave vs. old stock": "immigrant wave and old stock in the same frame",
  "impressionist vs. exact": "impressionist and exact in the same frame",
  "in vs. out": "in held at the edge of out",
  "independence vs. colonial": "the tension between independence and colonial",
  "indigenous vs. settler": "indigenous held at the edge of settler",
  "individual vs. crowd": "the individual held inside the crowd",
  "individual vs. mass": "individual and mass in the same frame",
  "individual vs. system": "individual cracking under the weight of system",
  "individual vs. team": "individual and team in the same frame",
  "inscription vs. erasure": "inscription held at the edge of erasure",
  "inside vs. outside": "inside and outside folded into the same space",
  "instinct vs. reason": "instinct pressing against reason",
  "instinct vs. strategy": "instinct held at the edge of strategy",
  "instrument vs. voice": "the tension between instrument and voice",
  "interior vs. exterior": "interior cracking under the weight of exterior",
  "invited vs. intruding": "invited held at the edge of intruding",
  "island time vs. mainland pace": "island time cracking under the weight of mainland pace",
  "jet lag vs. wonder": "jet lag held at the edge of wonder",
  "journey vs. destination": "the tension between journey and destination",
  "joy vs. grief": "joy and grief arriving in the same breath",
  "knife vs. flame": "blade and flame as the two instruments",
  "known vs. hidden": "known and hidden in the same frame",
  "known vs. uncharted": "the known path giving way to uncharted ground",
  "known vs. unknown": "the known world at the edge of the completely unknown",
  "known vs. unmapped": "known cracking under the weight of unmapped",
  "labor vs. rest": "labor cracking under the weight of rest",
  "landmark vs. street": "the tension between landmark and street",
  "language barrier vs. connection": "language barrier pressing against connection",
  "last light vs. first dark": "the last light holding against the first dark",
  "last stand vs. new beginning": "last stand and new beginning in the same frame",
  "late vs. early": "late cracking under the weight of early",
  "launch vs. landing": "launch cracking under the weight of landing",
  "leaving vs. arriving": "leaving cracking under the weight of arriving",
  "light speed vs. still": "light speed held at the edge of still",
  "light vs. dark": "light and dark in the same frame",
  "light vs. density": "light and density in the same frame",
  "light vs. heavy": "light held at the edge of heavy",
  "light vs. lingering chill": "light pressing against lingering chill",
  "light vs. shadow": "light pressing against shadow",
  "light vs. undergrowth": "light failing at the edge of undergrowth",
  "light vs. whiteout": "the tension between light and whiteout",
  "line vs. color": "the tension between line and color",
  "linger vs. go": "the choice to linger or go when the light says go",
  "lit vs. shadow": "still lit on one side, shadow on the other",
  "lived vs. monumental": "lived cracking under the weight of monumental",
  "loaded vs. free": "loaded pressing against free",
  "local vs. tourist": "local and tourist in the same frame",
  "log cabin vs. condo": "log cabin and condo in the same frame",
  "longing vs. arrived": "longing and arrived in the same frame",
  "lost vs. found": "lost in the vast and then suddenly completely found",
  "loud vs. intimate": "loud cracking under the weight of intimate",
  "loud vs. silent jungle": "the jungle deafening then suddenly completely silent",
  "loyalty vs. mission": "loyalty cracking under the weight of mission",
  "luxury vs. accessible": "luxury pressed against what is actually accessible",
  "lyrics vs. wordless": "lyrics and wordless in the same frame",
  "made vs. natural": "made and natural in the same frame",
  "made vs. unmade": "the tension between made and unmade",
  "major vs. minor": "the tension between major and minor",
  "mangrove vs. marina": "mangrove held at the edge of marina",
  "map vs. lost": "map pressing against lost",
  "map vs. moss": "the map irrelevant against the moss",
  "map vs. terrain": "map pressing against terrain",
  "maple syrup vs. Tim Hortons": "maple syrup pressing against Tim Hortons",
  "maple vs. concrete": "the tension between maple and concrete",
  "marching vs. standing still": "marching forward or standing still as the act",
  "market vs. mall": "market cracking under the weight of mall",
  "market vs. pantry": "the abundance of the market against the quiet of the pantry",
  "mask vs. face": "the tension between mask and face",
  "match point vs. nowhere": "match point cracking under the weight of nowhere",
  "media vs. moment": "the media presence against the unmediated moment",
  "melt vs. freeze": "the tension between melt and freeze",
  "memory vs. forgetting": "memory and the river that takes it",
  "memory vs. melody": "memory held at the edge of melody",
  "mess vs. clean counter": "the mess earned against the clean counter imagined",
  "migrant vs. rooted": "migrant held at the edge of rooted",
  "mirage vs. real": "mirage and real in the same frame",
  "mission vs. survival": "mission pressing against survival",
  "model vs. character": "the model dissolving into the character",
  "moment vs. campaign": "the unrepeatable moment against the manufactured campaign",
  "moment vs. eternity": "moment and eternity in the same frame",
  "monochrome vs. vivid": "monochrome cracking under the weight of vivid",
  "morning vs. midday": "morning cracking under the weight of midday",
  "morning vs. midnight": "the morning kitchen against the midnight one",
  "motion vs. ice": "motion and ice in the same frame",
  "motion vs. pose": "motion caught and held as pose",
  "motion vs. stillness": "motion pressing against stillness",
  "mountain vs. flatland": "mountain and flatland in the same frame",
  "movement vs. state": "the movement pressing against the state",
  "moving vs. drenched": "moving and drenched in the same frame",
  "moving vs. hypothermic": "moving held at the edge of hypothermic",
  "moving vs. paralyzed": "moving held at the edge of paralyzed",
  "moving vs. rooted": "moving pressing against rooted",
  "moving vs. stopped": "the tension between moving and stopped",
  "moving vs. watched": "moving and watched in the same frame",
  "mural vs. canvas": "the tension between mural and canvas",
  "myth vs. record": "the tension between myth and record",
  "national park vs. strip mall": "national park held at the edge of strip mall",
  "national park vs. suburb": "the tension between national park and suburb",
  "near vs. far": "near pressing against far",
  "near vs. far from home": "near held at the edge of far from home",
  "neon vs. nature": "neon and nature in the same frame",
  "neon-free dark vs. lit": "neon-free dark and lit in the same frame",
  "nervous vs. sure": "the tension between nervous and sure",
  "new vs. known": "new pressing against known",
  "new vs. returning": "new pressing against returning",
  "night shift vs. day world": "the tension between night shift and day world",
  "noise vs. quiet hour": "the tension between noise and quiet hour",
  "noise vs. silence": "the tension between noise and silence",
  "north vs. south": "the tension between north and south",
  "note vs. noise": "note cracking under the weight of noise",
  "nourish vs. indulge": "nourishment pressed against pure indulgence",
  "now vs. after": "suspended between now and what comes after",
  "ocean vs. desert": "ocean held at the edge of desert",
  "offense vs. defense": "offense held at the edge of defense",
  "old money vs. new hustle": "old money pressing against new hustle",
  "old vs. new": "old held at the edge of new",
  "old vs. replaced": "old held at the edge of replaced",
  "one shot vs. army": "one shot cracking under the weight of army",
  "open sky vs. no shelter": "open sky pressing against no shelter",
  "open vs. caged": "open cracking under the weight of caged",
  "open vs. closed": "open and closed in the same frame",
  "open vs. closed petal": "open and closed petal in the same frame",
  "open vs. enclosed": "open pressing against enclosed",
  "orbit vs. freefall": "orbit and freefall in the same frame",
  "order vs. chaos": "order cracking under the weight of chaos",
  "ordinary vs. chosen": "the tension between ordinary and chosen",
  "organic vs. built": "organic cracking under the weight of built",
  "organic vs. engineered": "organic cracking under the weight of engineered",
  "outnumbered vs. fearless": "the tension between outnumbered and fearless",
  "outside vs. inside": "the tension between outside and inside",
  "owned vs. borrowed": "owned cracking under the weight of borrowed",
  "oxygen vs. pressure": "the tension between oxygen and pressure",
  "oxygen vs. void": "oxygen pressing against void",
  "pace vs. fatigue": "pace cracking under the weight of fatigue",
  "pain vs. focus": "pain held at the edge of focus",
  "painted vs. drawn": "painted held at the edge of drawn",
  "parched vs. sustained": "parched pressing against sustained",
  "partner vs. self": "partner and self in the same frame",
  "passport stamp vs. roots": "passport stamp held at the edge of roots",
  "past vs. present": "past held at the edge of present",
  "peaceful vs. tense": "peaceful intention pressed against a tense moment",
  "peak vs. fatigue": "peak and fatigue in the same frame",
  "perfect vs. error": "the tension between perfect and error",
  "performer vs. audience": "the performer and the audience as two kinds of courage",
  "photo vs. memory": "photo pressing against memory",
  "planet vs. star": "planet and star in the same frame",
  "planned vs. discovered": "planned held at the edge of discovered",
  "planted vs. cast": "planted and cast in the same frame",
  "playful vs. serious": "playful and serious in the same frame",
  "polite vs. passionate": "polite cracking under the weight of passionate",
  "pollen vs. clarity": "pollen pressing against clarity",
  "pop art vs. classical": "the tension between pop art and classical",
  "porch vs. penthouse": "the tension between porch and penthouse",
  "poutine vs. fine dining": "poutine cracking under the weight of fine dining",
  "power vs. fragility": "power that makes everything feel fragile",
  "power vs. performance": "the tension between power and performance",
  "practiced vs. raw": "practiced cracking under the weight of raw",
  "precise vs. broken": "precise cracking under the weight of broken",
  "precision vs. brute force": "precision and brute force in the same frame",
  "predator vs. predator": "predator pressing against predator",
  "predator vs. prey": "predator and prey breathing the same air",
  "present vs. history": "standing in the present knowing it is becoming history",
  "present vs. memory": "the present moment already becoming memory",
  "present vs. past": "present and past in the same frame",
  "preserved vs. decayed": "preserved held at the edge of decayed",
  "pressure vs. nerve": "the tension between pressure and nerve",
  "pride vs. exhaustion": "pride held at the edge of exhaustion",
  "private vs. public": "private and public in the same frame",
  "privileged vs. aware": "privileged held at the edge of aware",
  "promise vs. doubt": "promise held at the edge of doubt",
  "promise vs. fear": "a promise spoken straight through the fear",
  "protected vs. soaked": "the tension between protected and soaked",
  "public vs. private": "public pressing against private",
  "public vs. private moment": "a private moment made suddenly, completely public",
  "push vs. hold": "the push of the storm and the holding against it",
  "push vs. stop": "the tension between push and stop",
  "quiet vs. electric": "quiet pressing against electric",
  "rage vs. precision": "the tension between rage and precision",
  "rain vs. sunshine": "rain and sunshine in the same frame",
  "raw vs. cooked": "raw material transformed by heat and attention",
  "read vs. react": "read held at the edge of react",
  "real vs. imagined": "real and imagined in the same frame",
  "real vs. reflected": "the tension between real and reflected",
  "recipe vs. instinct": "the recipe abandoned for pure instinct",
  "record vs. live": "record held at the edge of live",
  "reef vs. resort": "reef cracking under the weight of resort",
  "reflection vs. self": "reflection held at the edge of self",
  "reggae vs. silence": "reggae held at the edge of silence",
  "rehearsal vs. real": "rehearsal and real in the same frame",
  "rehearsed vs. broken": "the rehearsed moment broken open by something true",
  "relic vs. ruin": "relic held at the edge of ruin",
  "remembered vs. forgotten": "the tension between remembered and forgotten",
  "repetition vs. creation": "repetition pressing against creation",
  "return vs. lost": "the tension between return and lost",
  "revolution vs. order": "revolution held at the edge of order",
  "rhythm vs. chaos": "rhythm pressing against chaos",
  "rich sea vs. poor land": "the tension between rich sea and poor land",
  "rich vs. costing": "rich pressing against costing",
  "ring vs. finger": "the ring finding its way home to the finger",
  "risk vs. reward": "the tension between risk and reward",
  "ritual vs. survival": "ritual eating against eating for survival",
  "rival vs. partner": "the tension between rival and partner",
  "river vs. ridge": "the river route against the ridge route",
  "road trip vs. roots": "road trip held at the edge of roots",
  "rope vs. void": "rope pressing against void",
  "ruin vs. monument": "ruin cracking under the weight of monument",
  "ruin vs. root": "ruin reclaimed by root",
  "rum shack vs. five star": "the tension between rum shack and five star",
  "rum vs. water": "rum held at the edge of water",
  "running from vs. running toward": "running from and running toward in the same frame",
  "running vs. standing": "running and standing in the same frame",
  "rushing vs. stopped": "rushing held at the edge of stopped",
  "rust belt vs. sun belt": "rust belt pressing against sun belt",
  "sacred vs. street": "sacred held at the edge of street",
  "sacrifice vs. survival": "sacrifice held at the edge of survival",
  "safe vs. exposed": "safe held at the edge of exposed",
  "salt air vs. city air": "the tension between salt air and city air",
  "salt vs. sweet": "the pull between salt and sweet",
  "saturated vs. muted palette": "saturated held at the edge of muted palette",
  "saved vs. lost": "the tension between saved and lost",
  "scored vs. conceded": "scored cracking under the weight of conceded",
  "scored vs. free": "scored and free in the same frame",
  "searching vs. found": "searching held at the edge of found",
  "season vs. off-season": "in season and already moving toward what comes next",
  "season vs. plain": "the seasoned against the plain",
  "seed vs. flower": "seed held at the edge of flower",
  "seen vs. about to disappear": "seen clearly and about to disappear",
  "seen vs. hidden": "the tension between seen and hidden",
  "seen vs. ignored": "demanding to be seen by those who refuse to look",
  "seen vs. invisible": "seen by the right people and invisible to everyone else",
  "seen vs. shy": "seen cracking under the weight of shy",
  "seen vs. submerged": "seen pressing against submerged",
  "seen vs. unseen": "seen by the city and unseen by everyone in it",
  "seen vs. witnessed": "not just seen — genuinely witnessed",
  "self vs. image": "self pressing against image",
  "serve vs. return": "serve cracking under the weight of return",
  "shade vs. blaze": "the tension between shade and blaze",
  "shallow vs. abyss": "the tension between shallow and abyss",
  "sharp vs. dissolved": "sharp pressing against dissolved",
  "shelter vs. exposure": "shelter pressing against exposure",
  "shift end vs. shift start": "shift end and shift start in the same frame",
  "shore vs. open sea": "the tension between shore and open sea",
  "shown vs. hidden": "the tension between shown and hidden",
  "shy vs. bold": "shy and bold in the same frame",
  "siesta vs. hustle": "siesta cracking under the weight of hustle",
  "sign vs. silence": "the sign raised against a silence that refuses to end",
  "signal vs. silence": "signal and silence in the same frame",
  "silence vs. scream": "silence held at the edge of scream",
  "silence vs. testimony": "silence cracking under the weight of testimony",
  "simple vs. elaborate": "the simple against the elaborate",
  "singular vs. multiple": "singular and multiple in the same frame",
  "singular vs. repeated": "singular and repeated in the same frame",
  "sketch vs. finished": "sketch pressing against finished",
  "skill vs. scale": "skill held at the edge of scale",
  "skin vs. aggregate": "skin held at the edge of aggregate",
  "slow motion vs. chaos": "slow motion and chaos in the same frame",
  "slow vs. mass": "slow held at the edge of mass",
  "slow vs. urgent": "slow and urgent in the same frame",
  "small town vs. Toronto": "the tension between small town and Toronto",
  "small town vs. big city": "the tension between small town and big city",
  "small vs. immense": "small held at the edge of immense",
  "small vs. scale": "small held at the edge of scale",
  "small vs. vast": "the tension between small and vast",
  "small vs. vast canopy": "human-small under the vast canopy",
  "snowstorm vs. sunshine": "snowstorm held at the edge of sunshine",
  "soaked vs. wringing": "soaked cracking under the weight of wringing",
  "sober vs. dreaming": "sober pressing against dreaming",
  "soft vs. brittle": "the tension between soft and brittle",
  "soft vs. hard": "soft held at the edge of hard",
  "soft vs. sharp light": "the soft light that makes everything gentle",
  "soft vs. violent": "soft held at the edge of violent",
  "solo vs. duet": "solo cracking under the weight of duet",
  "solo wilderness vs. community": "solo wilderness pressing against community",
  "sound vs. silence": "sound held at the edge of silence",
  "species vs. human": "the species watching the human",
  "spectacle vs. truth": "the tension between spectacle and truth",
  "speed vs. precision": "the tension between speed and precision",
  "speed vs. strength": "speed and strength in the same frame",
  "speed vs. weight": "speed cracking under the weight of weight",
  "spice vs. sweet": "spice cracking under the weight of sweet",
  "spoken vs. silent": "spoken held at the edge of silent",
  "spontaneous vs. deliberate": "the tension between spontaneous and deliberate",
  "sports bar vs. jazz club": "sports bar cracking under the weight of jazz club",
  "spotlight vs. shadow": "spotlight and shadow in the same frame",
  "stage vs. bedroom": "stage held at the edge of bedroom",
  "staying vs. leaving": "the held moment before staying or leaving",
  "steel drum vs. quiet": "steel drum and quiet in the same frame",
  "still vs. alive": "the tension between still and alive",
  "still vs. distorted": "still pressing against distorted",
  "still vs. fading": "perfectly still as everything fades",
  "still vs. fleeing": "still pressing against fleeing",
  "still vs. racing": "still pressing against racing",
  "still vs. surge": "still cracking under the weight of surge",
  "still vs. swept": "still and swept in the same frame",
  "stone vs. flesh": "the tension between stone and flesh",
  "streetlit vs. shadow": "the tension between streetlit and shadow",
  "styled vs. raw": "styled to the edge of raw",
  "submission vs. resistance": "submission cracking under the weight of resistance",
  "suburb vs. downtown": "suburb cracking under the weight of downtown",
  "summit fever vs. reason": "summit fever cracking under the weight of reason",
  "summit vs. abyss": "summit pressing against abyss",
  "sun bleached vs. vivid": "sun bleached and vivid in the same frame",
  "sun vs. hurricane": "sun held at the edge of hurricane",
  "surface vs. beneath": "surface cracking under the weight of beneath",
  "surface vs. depth": "the surface and the depth underneath",
  "surrender vs. fight": "surrender held at the edge of fight",
  "surrendered vs. fighting": "surrendered cracking under the weight of fighting",
  "symbol vs. person": "the symbol carried by the full weight of the person",
  "system vs. chaos": "system pressing against chaos",
  "tailgate vs. gallery opening": "tailgate cracking under the weight of gallery opening",
  "tamed vs. feral": "tamed returning to feral at the jungle edge",
  "temple vs. tree": "the temple and the tree in equal contest",
  "temporary vs. permanent": "temporary cracking under the weight of permanent",
  "tender vs. hungry": "the tension between tender and hungry",
  "terraform vs. accept": "terraform held at the edge of accept",
  "thaw vs. freeze": "thaw and freeze in the same frame",
  "theatrical vs. minimal": "theatrical excess against radical minimalism",
  "then vs. now": "then pressing against now",
  "throttle vs. brake": "throttle pressing against brake",
  "through vs. under": "through cracking under the weight of under",
  "tidal vs. still": "tidal cracking under the weight of still",
  "timeless vs. dated": "timeless held at the edge of dated",
  "titled vs. undeserving": "titled pressing against undeserving",
  "together vs. alone in cause": "together in the cause, alone in what it costs",
  "together vs. alone in cold": "the tension between together and alone in cold",
  "together vs. alone in crowd": "together in a room full of people, entirely alone with each other",
  "tourist vs. local": "the tourist version and the local one of the same pier",
  "track vs. trailless": "the track ending where the trailless begins",
  "tradition vs. elopement": "tradition bent toward the private choice to simply go",
  "tradition vs. modern": "the tension between tradition and modern",
  "tradition vs. tourism": "tradition pressing against tourism",
  "trail vs. off-trail": "trail held at the edge of off-trail",
  "trained vs. raw": "trained pressing against raw",
  "trained vs. untrained": "trained pressing against untrained",
  "transmission vs. static": "the tension between transmission and static",
  "transparent vs. opaque": "transparent pressing against opaque",
  "trend vs. timeless": "the trend pressing against what will outlast it",
  "truth vs. illusion": "truth cracking under the weight of illusion",
  "truth vs. surface": "truth pressing against surface",
  "tundra vs. farmland": "tundra and farmland in the same frame",
  "tuned vs. broken": "the tension between tuned and broken",
  "unity vs. division": "unity as the only answer to division",
  "unstoppable vs. wounded": "unstoppable cracking under the weight of wounded",
  "up vs. down": "up held at the edge of down",
  "vast vs. small": "the tension between vast and small",
  "vertical vs. horizontal": "vertical pressing against horizontal",
  "villain vs. hero": "villain pressing against hero",
  "violence vs. grace": "the tension between violence and grace",
  "visible vs. invisible": "the tension between visible and invisible",
  "voice vs. power": "voice pressed against power",
  "vows vs. doubt": "the weight of a vow spoken over quiet doubt",
  "walked vs. driven": "the tension between walked and driven",
  "walking away vs. looking back": "walking away held at the edge of looking back",
  "waning vs. surge": "the light waning as something else surges",
  "wanting vs. having": "wanting held at the edge of having",
  "warm vs. cold": "warm pressing against cold",
  "warm vs. cold coming": "warmth still present with cold already on its way",
  "warm vs. cold night": "warm cracking under the weight of cold night",
  "warm vs. frozen": "the tension between warm and frozen",
  "warmth vs. cold geometry": "warmth held at the edge of cold geometry",
  "warmth vs. memory of cold": "warmth and memory of cold in the same frame",
  "watched vs. alone": "watched pressing against alone",
  "watercolor wash vs. oil precision": "watercolor wash cracking under the weight of oil precision",
  "wave vs. stillness": "wave cracking under the weight of stillness",
  "wealth vs. hunger": "wealth and hunger in the same frame",
  "weather vs. will": "the tension between weather and will",
  "weight vs. lift": "the tension between weight and lift",
  "wet vs. dry": "soaked through in a place that is never dry",
  "white vs. real": "white dress against the full weight of what is real",
  "whole vs. shattered": "whole and shattered in the same frame",
  "wild vs. disciplined": "wild held at the edge of disciplined",
  "wild vs. tended": "wild pressing against tended",
  "wilderness vs. city": "wilderness pressing against city",
  "win vs. lose": "win cracking under the weight of lose",
  "wind vs. stillness": "the wind and the stillness that exists inside it",
  "winter vs. brief summer": "winter cracking under the weight of brief summer",
  "winter vs. will": "winter held at the edge of will",
  "witness vs. unseen": "witness and unseen in the same frame",
  "wonder vs. exhaustion": "wonder held at the edge of exhaustion",
  "worked vs. abandoned": "worked held at the edge of abandoned",
  "worn vs. new machine": "the tension between worn and new machine",
  "worn vs. set": "the tension between worn and set",
  "wreckage vs. standing tall": "wreckage pressing against standing tall",
  "young vs. ancient ground": "young and ancient ground in the same frame",
  "heat vs. mirage": "heat pressing into a horizon that keeps moving",
  "ancient vs. eroded": "ancient forms worn down to almost nothing by time and sand",
  "stillness vs. wind": "perfect stillness broken by wind that carries the whole desert",
  "thirst vs. water": "thirst as the only thought until water becomes everything",
  "vast vs. alone": "vast enough to make two people feel like one small thing",
  "dune vs. horizon": "the dune pressing against a horizon that refuses to arrive",
  "shadow vs. sun": "shadow as the only shelter in a world made of sun",
  "survival vs. surrender": "survival and the quiet temptation to surrender to the sand",
  "map vs. nothing": "the map ending where the nothing begins",
  "oasis vs. illusion": "the oasis real until it is not",
  "day vs. blue hour": "the burning day releasing into the cold blue hour",
  "nomad vs. settled": "the nomad carrying everything the settled never needed to carry",
  "bone vs. bloom": "bone-white and dead beside something quietly impossibly blooming",
  "silence vs. storm": "silence so deep the coming storm feels personal",
  "scorched vs. cool night": "scorched through the day the night arriving cold and enormous",
  "small vs. infinite sand": "small against the infinite patience of the sand",
  "track vs. dune": "the track giving out where the dune takes over",
  "sacred vs. forgotten": "sacred to someone once and now completely forgotten",
  "real vs. impossible": "the real and the impossible occupying the same frame",
  "waking vs. dreaming": "waking logic pressed against dream logic in the same moment",
  "gravity vs. float": "gravity abandoned and the body discovering what comes after",
  "scaled vs. vast": "human scale made absurd by the scale of everything else",
  "whole vs. fragmented": "the whole self and the self in pieces at the same time",
  "visible vs. transparent": "visible to some eyes and completely transparent to others",
  "time vs. still": "time moving and time stopped in the same image",
  "organic vs. geometric": "the organic form inside a world of impossible geometry",
  "self vs. mirror": "the self and the mirror refusing to agree",
  "light vs. sourceless": "light with no source and shadow with no object",
  "near vs. infinite": "near enough to touch and infinite in every direction",
  "familiar vs. wrong": "familiar in every detail and completely wrong",
  "solid vs. dissolving": "solid in one moment and dissolving into the next",
  "one vs. many selves": "one self and the many selves it contains",
  "memory vs. place": "a memory that has become a physical place",
  "above vs. below reversed": "above and below exchanging places quietly",
  "door vs. nowhere": "a door that opens onto nothing and everything",
  "human vs. element": "the human form becoming elemental",
  "silence vs. impossible sound": "the silence of an image that should be deafening",
  "shade vs. sun": "the shade holding out against the full force of the sun",
  "peak vs. fade": "at the peak of it before the fading starts",
  "overripe vs. fresh": "overripe and still beautiful beside something fresh",
  "crowded vs. empty beach": "the crowded beach against the memory of the empty one",
  "lazy vs. restless": "laziness and restlessness occupying the same long afternoon",
  "sweat vs. breeze": "the sweat and the breeze arriving at the same moment",
  "abundance vs. fleeting": "abundance that feels fleeting precisely because it is",
  "day vs. long evening": "the long day finally releasing into the longer evening",
  "burned vs. golden": "burned golden by something that doesn't last",
  "festival vs. everyday": "the festival version of life pressed against the everyday one",
  "still water vs. wave": "the still water and the wave as two different truths",
  "ripe vs. waiting": "ripe and waiting to be picked or left",
  "tourist vs. local heat": "the tourist version of the heat against the local one",
  "ice vs. heat": "ice melting in the heat of it",
  "skin vs. cover": "skin and the impulse to cover or uncover",
  "drought vs. bloom": "drought cracked beside an impossible bloom",
  "noon vs. dusk light": "noon light against the mercy of dusk",
  "open vs. shade": "the open sun and the shelter of shade as a choice",
  "carefree vs. melting": "carefree and melting into the best version of summer",
  "long day vs. short night": "the longest day and the shortest night holding the same light",
  "holding vs. releasing": "holding on and releasing at the same time",
  "peak colour vs. bare branch": "peak colour with bare branch already promised",
  "harvest vs. end": "the harvest and the end arriving together",
  "warm coat vs. cold breath": "the warm coat against the cold breath visible in air",
  "last warm day vs. first frost": "the last warm day before the first frost changes everything",
  "abundance vs. scarcity": "abundance that remembers scarcity",
  "fire vs. chill": "the fire and the chill as equal forces",
  "fallen vs. still hanging": "fallen beside what is still hanging on",
  "ripe vs. rotting": "ripe and rotting as two sides of the same thing",
  "fog vs. clarity": "fog that burns off into unexpected clarity",
  "bronze vs. grey": "bronze light giving way to grey",
  "gather vs. scatter": "gathering before everything scatters",
  "ember vs. ash": "the ember and the ash as what remains",
  "preserve vs. let go": "preserving what can be kept and releasing what cannot",
  "golden vs. gone": "golden and gone in the same breath",
  "preparation vs. surrender": "preparation giving way to surrender to the season",
  "inside vs. outside pull": "the warmth inside and the storm that pulls you out",
  "the last vs. the next": "the last of this season and the first of the next",
  "memory vs. present season": "the memory of last autumn against this present one",
  "melancholy vs. beauty": "melancholy and beauty as the same feeling",
  "warm inside vs. cold outside": "the warmth inside held against the cold pressing from outside",
  "bare vs. covered": "bare branches and covered ground as winter's two languages",
  "frozen vs. thaw": "frozen through with the memory of thaw",
  "dark afternoon vs. candlelight": "the dark afternoon answered by candlelight",
  "silence vs. crunch underfoot": "silence broken only by the crunch of frost underfoot",
  "waiting vs. arriving": "waiting for something already on its way",
  "still vs. blizzard": "the stillness before and inside the blizzard",
  "cosy vs. exposed": "cosy against what is fully exposed to the cold",
  "bare tree vs. evergreen": "the bare tree and the evergreen in the same frame",
  "short day vs. long night": "the shortest day releasing into the longest night",
  "ice vs. fire": "ice and fire as winter's essential argument",
  "layered vs. stripped": "layered against the cold or stripped to what remains",
  "dormant vs. alive": "dormant on the surface and alive underneath",
  "frost vs. warmth": "frost at the edges warming toward the centre",
  "hibernation vs. movement": "hibernation and the impulse to move anyway",
  "grey sky vs. snow brightness": "grey sky giving back brightness through snow",
  "solitude vs. gathering": "winter solitude and the pull toward gathering",
  "cold hands vs. warm heart": "cold hands and the warm heart that holds them",
  "sparse vs. abundant memory": "sparse winter against the abundant memory of summer",
  "dignified vs. ridiculous": "dignified in every detail and completely ridiculous",
  "straight face vs. chaos": "straight face held through surrounding chaos",
  "formal vs. completely wrong": "formally correct in a completely wrong situation",
  "expert vs. hopeless": "absolute expert in the wrong thing entirely",
  "planned vs. catastrophic": "planned to perfection and catastrophically wrong",
  "serious vs. slapstick": "completely serious inside a slapstick universe",
  "composed vs. unravelling": "composed on the outside while fully unravelling",
  "correct vs. spectacular failure": "technically correct and a spectacular failure",
  "stubborn vs. obvious": "stubborn in the face of something completely obvious",
  "refined vs. chaotic": "refined instincts in total chaos",
  "pretending vs. panicking": "pretending everything is fine while quietly panicking",
  "winning vs. losing spectacularly": "winning by any measure except the obvious one",
  "proud vs. covered in something": "enormously proud while covered in something",
  "sophisticated vs. total disaster": "sophisticated bearing in a total disaster",
  "calm vs. everything on fire": "completely calm while everything is on fire",
  "prepared vs. completely unprepared": "overprepared for the wrong thing entirely",
  "confident vs. hopelessly lost": "absolutely confident and hopelessly lost",
  "polished vs. falling apart": "polished surface and falling apart underneath",
  "maintaining dignity vs. impossible": "maintaining dignity against impossible odds",
  "graceful exit vs. memorable crash": "planning a graceful exit and making a memorable crash",
  "living vs. dead": "the living and the dead occupying the same frame",
  "mortal vs. divine": "mortal scale pressed against the divine",
  "descent vs. return": "the descent and the hope of return",
  "judgment vs. mercy": "judgment and mercy as two sides of the same moment",
  "light vs. darkness absolute": "light that exists only because the darkness is absolute",
  "love vs. loss eternal": "love that outlasts everything including the self",
  "obedience vs. defiance": "obedience and the defiance that lives beside it",
  "fear vs. acceptance": "fear giving way to something that looks like acceptance",
  "human vs. god": "human scale inside a space built for gods",
  "bargain vs. surrender": "the bargain and the surrender as the same gesture",
  "shadow vs. flame": "shadow and flame as the underworld's two languages",
  "myth vs. truth": "the myth and the truth it contains",
  "hero vs. fate": "the hero and the fate they cannot outrun",
  "grief vs. release": "grief that becomes release without becoming forgetting",
  "known vs. unknown realm": "the known world at the edge of the unknown one",
  "river vs. shore": "the river and the shore as departure and arrival",
  "heaven vs. underworld": "heaven and the underworld in the same image",
  "cursed vs. redeemed": "cursed and the possibility of redemption in the same frame",
  "silence vs. echo": "silence and the echo that proves something happened here",
  "force vs. shelter": "force that demands shelter and shelter that gives way",
  "exposed vs. protected": "exposed to everything and protected by each other",
  "fear vs. exhilaration": "fear and exhilaration as the same rush",
  "chaos vs. calm": "chaos and the calm that waits inside it",
  "before vs. after": "the before and the after with the storm between",
  "wild vs. still": "wild and the stillness that follows",
  "run vs. stand": "the impulse to run and the choice to stand",
  "dark sky vs. open ground": "dark sky and open ground as equal forces",
  "drenched vs. dry": "drenched through and laughing about it",
  "warning vs. arrival": "the warning and the arrival as one continuous moment",
  "damage vs. survive": "the damage and the surviving of it",
  "roar vs. silence after": "the roar and the silence that follows",
  "lightning vs. dark": "lightning that makes the dark more absolute",
  "sky vs. earth tension": "sky pressing down and earth holding up",
  "lost vs. found in storm": "lost in it and found in each other",
  "small vs. vast weather": "small against the vast indifference of the weather",
  "break vs. hold on": "the break that almost happens and the holding on",
  "belong vs. outside": "belonging and the memory of being outside it",
  "mainstream vs. counter": "the mainstream and everything running counter to it",
  "loud vs. quiet rebellion": "loud rebellion and the quiet kind that lasts longer",
  "known vs. discovered": "known to some and discovered by others right now",
  "authentic vs. performed": "authentic and the performance of authenticity",
  "local vs. scene": "the local and the scene it feeds",
  "night vs. day identity": "the night version and the day version of the same person",
  "old school vs. new wave": "old school and the new wave that owes it everything",
  "pure vs. sold out": "pure and the argument about what that means",
  "insider vs. outsider": "inside and the outside pressing against the glass",
  "alone vs. together in it": "alone in it and together in it at the same time",
  "signal vs. noise": "the signal and the noise you learn to ignore",
  "underground vs. above ground": "underground and the world above that doesn't know it exists",
  "passion vs. cool": "passion and the cool that tries to hide it",
  "raw vs. polished": "raw and the polish that sometimes gets in the way",
  "secret vs. shared": "a secret place and the sharing of it with one person",
  "found vs. lost in it": "found in it and lost in it at the same time",
  "now vs. then scene": "now and then as the same scene at different moments",
  "human vs. alien natural": "the human and the alien-natural in the same frame",
  "discovery vs. danger": "the discovery and the danger that comes with it",
  "wonder vs. fear": "wonder and fear as the same feeling",
  "map vs. unmapped": "the map ending where the unmapped begins",
  "light vs. deep dark": "light that exists only because the dark is absolute",
  "creature vs. observer": "the creature and the observer watching each other",
  "fragile vs. vast": "fragile and small against the vast indifference of the place",
  "science vs. myth": "the science and the myth pointing at the same thing",
  "still vs. moving world": "still while the world moves around them",
  "near vs. unearthly": "near enough to touch and completely unearthly",
  "threshold vs. beyond": "standing at the threshold and what waits beyond",
  "tool vs. instinct": "the tool and the instinct that overrides it",
  "record vs. experience": "recording it and the experience that makes recording impossible",
  "alone vs. witnessed": "alone except for the things watching",
  "small vs. impossible scale": "small against an impossible scale",
  "ordinary vs. luminous": "ordinary human forms inside something luminous",
  "arrival vs. what comes next": "the arrival and the weight of what comes next",
  "city vs. sky": "the city below and the sky above as equal forces",
  "ground vs. above": "the ground far below and the height between them",
  "private vs. public height": "private at the top of a very public city",
  "near vs. far city": "the near rooftop and the far city as the same view",
  "day vs. night city": "the day city and the night city as different worlds",
  "small vs. vast skyline": "small against a skyline that does not notice",
  "illegal vs. belonging": "belonging somewhere that did not invite them",
  "noise below vs. quiet above": "the noise below and the quiet that lives above it",
  "work vs. escape": "the work below and the escape that height allows",
  "concrete vs. open air": "concrete and the open air it finally gives way to",
  "alone vs. city around": "alone with the city watching from every direction",
  "warm light vs. cold city": "the warm light and the cold city it illuminates",
  "moment vs. permanence": "a moment against a skyline that will outlast it",
  "high vs. falling": "height and the awareness of falling it creates",
  "dawn vs. city waking": "the dawn and the city waking beneath it",
  "golden hour vs. blue hour": "the golden hour and the blue hour as two different truths",
  "ordinary vs. elevated": "ordinary people in an elevated place",
  "silence vs. the world": "the silence and the world it holds at a distance",
  "devotion vs. doubt": "devotion and the doubt that makes it real",
  "solitude vs. community": "the solitude and the community it belongs to",
  "sacred vs. ordinary": "the sacred and the ordinary occupying the same stone",
  "ritual vs. feeling": "the ritual and the feeling that either fills or empties it",
  "bell vs. stillness": "the bell and the stillness that answers it",
  "ancient vs. present": "ancient stone and the present moment standing inside it",
  "prayer vs. action": "the prayer and the action that follows or replaces it",
  "inner vs. outer life": "the inner life and the outer world it holds apart",
  "surrender vs. will": "surrender and the will it takes to arrive at it",
  "simplicity vs. complexity": "simplicity that contains everything complex",
  "light vs. stone": "the light and the stone that has held it for centuries",
  "breath vs. the infinite": "one breath inside something infinite",
  "monk vs. visitor": "the monk and the visitor standing in the same doorway",
  "contemplation vs. distraction": "contemplation and the distraction that proves it matters",
  "time vs. eternity": "time passing inside a place built for eternity",
  "discipline vs. longing": "the discipline and the longing it cannot quite contain",
  "the body vs. the spirit": "the body and the spirit as two versions of the same thing",
  "known vs. divine mystery": "what is known and what will never be",
  "passing vs. permanent": "what passes through and what was here before and will remain",
  "land vs. sea": "the land behind and the sea ahead as a choice",
  "old vs. decay": "old and decaying and still beautiful",
  "memory vs. present": "the memory of what this was and the present of what it is",
  "held vs. let go": "held back from the sea and almost letting go",
  "solid vs. water beneath": "solid wood and water moving beneath every step",
  "day vs. storm": "the calm day and the storm that changes everything",
  "amusement vs. melancholy": "the amusement and the melancholy that was always underneath",
  "summer vs. off-season": "the summer pier and the off-season one as two different places",
  "light vs. fog": "the light and the fog that softens or erases it",
  "walking toward vs. turning back": "walking toward the sea and the moment of turning back",
  "hope vs. drift": "the hope and the drift as the same direction",
  "wood vs. wave": "the wood and the wave as the pier's essential argument",
  "the gap vs. the plank": "the gap between planks and the water it reveals",
  "busy vs. abandoned": "the busy version and the abandoned one as the same place",
  "seaside joy vs. winter grey": "the seaside joy and the winter grey as equal truths",
  "bright vs. weathered": "the bright paint and the weathered wood beneath it",
  "near vs. open water": "the near water and the open sea as distance and invitation",
  "known vs. horizon": "what they know and the horizon that holds the rest",
  "buyer vs. seller": "the buyer and the seller as equal protagonists",
  "local vs. foreign": "the local and the foreign in the same narrow alley",
  "colour vs. grey": "colour that makes the grey impossible to remember",
  "noise vs. quiet stall": "the noise of the market and the quiet at one still stall",
  "fresh vs. end of day": "the fresh morning market and the end of day one",
  "haggle vs. fixed": "the haggle and the fixed price as two philosophies",
  "hidden vs. displayed": "what is hidden and what is displayed in the same market",
  "routine vs. discovery": "the routine and the discovery that breaks it",
  "crowd vs. still moment": "the crowd and the still moment inside it",
  "dawn vs. dusk market": "the dawn market and the dusk one as different worlds",
  "spice vs. plain": "the spice and the plain as the market's two registers",
  "old trade vs. new world": "the old trade route and the new world it feeds",
  "hand vs. machine made": "the handmade and the machine-made side by side",
  "waste vs. treasure": "the waste and the treasure as one person's judgment",
  "trust vs. suspicion": "the trust and the suspicion that make a transaction",
  "familiar vs. exotic": "the familiar and the exotic in the same basket",
  "passage vs. pause": "the passage through and the pause that changes everything",
  "cheap vs. precious": "cheap to one and precious to another",
  "market time vs. real time": "market time and real time as two different speeds",
  "wonder vs. danger": "wonder and the danger that makes it real",
  "magic vs. mechanics": "the magic and the mechanics it depends on",
  "high vs. ground": "the height and the ground below as the circus's essential tension",
  "rehearsal vs. performance": "the rehearsal and the performance as two different truths",
  "skill vs. spectacle": "the skill and the spectacle that hides it",
  "seen vs. backstage": "the seen performance and the backstage that makes it possible",
  "glitter vs. sawdust": "the glitter and the sawdust underneath",
  "together vs. alone on the wire": "together and alone on the same wire",
  "trust vs. fear": "trust and fear as the same act at height",
  "ephemeral vs. remembered": "ephemeral and remembered as the circus's gift",
  "costume vs. body": "the costume and the body that wears it",
  "applause vs. silence after": "the applause and the silence after as equal things",
  "risk vs. safety net": "the risk and the net that makes it possible",
  "old world vs. modern circus": "the old world circus and the modern one looking back at it",
  "family vs. outsider": "the circus family and the outsider who becomes one",
  "gravity vs. defiance": "gravity and the defiance of it",
  "centre ring vs. wings": "the centre ring and the wings as two versions of the same show",
  "night show vs. day rehearsal": "the night show and the day rehearsal as parallel truths",
  "intimate vs. vast big top": "intimate under the vast canvas",
  "labour vs. rest": "the labour and the rest that makes it mean something",
  "season vs. work": "the season and the work it demands",
  "land vs. weather": "the land and the weather as equal authorities",
  "old way vs. new": "the old way and the new one looking at each other across the field",
  "early vs. late": "the early morning and the late light as the farm's two gifts",
  "abundance vs. hard year": "the abundance and the hard year in the same field",
  "body vs. machine": "the body and the machine doing the same work differently",
  "silence vs. industry": "the silence and the industry that fills and empties it",
  "soil vs. sky": "the soil and the sky as the farm's two horizons",
  "tradition vs. change": "the tradition and the change that threatens or renews it",
  "dawn vs. dusk field": "the dawn field and the dusk field as different places",
  "near vs. far field": "the near field and the far one as different kinds of belonging",
  "animal vs. human time": "the animal time and the human time that tries to match it",
  "seed vs. harvest": "the seed and the harvest as the farm's essential faith",
  "mud vs. clean": "the mud and the clean as a daily negotiation",
  "owned vs. borrowed land": "the owned land and the borrowed one as the same earth",
  "family vs. worker": "the family and the worker as the same person at different hours",
  "rain vs. dry earth": "the rain and the dry earth as a conversation without end",
  "the field vs. the farmhouse": "the field and the farmhouse as two kinds of shelter",
  "held vs. let go season": "the holding on and the letting go of a season",
  "watched vs. unwatched": "the strange freedom of a moment before the camera swings back",
  "caught vs. escaping": "halfway through a door that opens both ways",
  "ordinary vs. extraordinary": "something luminous happening in the least likely aisle",
  "observed vs. observer": "the eye behind the eye behind the lens",
  "recorded vs. forgotten": "archived in a server no one will check for a reason",
  "exposed vs. hidden": "visible only to the machine that doesn't care",
  "documented vs. erased": "evidence of a feeling that left no other trace",
  "framed vs. unframed": "the rectangle that decides what counts as real",
  "evidence vs. absence": "proof of something that might never be believed",
  "archive vs. present": "thirty days of retention then gone like it never happened",
  "timestamp vs. timeless": "23:47 frozen forever in a server no one visits",
  "surveillance vs. intimacy": "the most private moment in the most public recording",
  "proximity vs. distance": "close enough to touch in a frame that keeps everyone separate",
  "mundane vs. transcendent": "grace notes in a fish-eye lens",
  "banal vs. beautiful": "beauty doing its work in a place that wasn't ready for it",
  "routine vs. rupture": "the exact frame where ordinary became something else",
  "expected vs. surprising": "what the algorithm flagged as an anomaly",
  "mechanical vs. human": "the human moment inside the mechanical system",
  "composed vs. candid": "the gap between who you prepare to be and who you actually are",
  "power vs. vulnerability": "the strength it takes to let someone see you clearly",
  "formal vs. intimate": "the ceremony of being seen giving way to something unguarded",
  "performance vs. presence": "when the act drops and there is only the person",
  "controlled vs. unravelling": "the precise moment composure becomes something more honest",
  "strength vs. tenderness": "force held softly, held back for someone",
  "stillness vs. tension": "the body at rest but the mind at full stretch",
  "classical vs. raw": "the old language of beauty meeting something that refuses to be beautiful on command",
  "together vs. alone in the same frame": "proximity without connection, or connection across impossible distance",
  "eye contact vs. avoidance": "the most intimate thing two people can do, and its refusal",
  "dressed vs. undressed": "what clothes perform and what they protect",
  "public self vs. private self": "the version you put on and the one that slips through",
  "confidence vs. doubt": "certainty worn on the surface, uncertainty underneath",
  "connection vs. isolation": "reaching and not reaching, in the same breath",
  "beauty vs. truth": "the flattering lie versus the accurate fact",
  "terror vs. desire": "the pull toward what frightens you most",
  "alive vs. undead": "the question of what separates the living from those who only seem to be",
  "human vs. other": "the moment recognition fails",
  "run vs. stay": "the choice the body makes before the mind does",
  "rational vs. irrational": "the argument reason loses",
  "safety vs. dread": "the feeling that safety is temporary",
  "victim vs. survivor": "the difference made only in retrospect",
  "ordinary vs. monstrous": "the monster wearing a familiar face",
  "love vs. survival": "what you would sacrifice for whom",
  "science vs. nature": "the experiment that went further than intended",
  "hunter vs. hunted": "the moment the roles reversed",
  "awake vs. nightmare": "the uncertainty about which one this is",
  "alone vs. together in the dark": "the company that makes darkness worse",
  "scream vs. silence": "what the throat does when the mind shuts down",
  "real vs. hallucination": "the unreliable evidence of your own senses",
  "past vs. haunting": "the thing that followed you home",
  "ordinary vs. transcendent": "the moment the diner stopped being just a diner",
  "full vs. empty": "the hunger that coffee doesn’t fix",
  "home vs. elsewhere": "the place you left and the place you can’t find",
  "hope vs. resignation": "the difference between one more cup and the last",
  "belonging vs. exile": "the regular and the stranger at the same counter",
  "hunger vs. satisfaction": "what the pie can’t fix",
  "late night vs. early morning": "the hour between what happened and what comes next",
  "local vs. passing through": "the ones who know each other’s names and the ones who don’t",
  "spoken vs. unspoken": "what the napkin said that the mouth couldn’t",
  "comfort vs. restlessness": "the booth that held you and the door that called",
  "real vs. dreamed": "the diner you’re not sure you ever left",
  "known vs. stranger": "the face you recognise from somewhere you can’t place",
  "warmth vs. cold outside": "the glass between the heated inside and the winter street",
  "one more cup vs. time to leave": "the small decision that changes everything",
  "authentic vs. reconstructed": "the original and the careful copy",
  "known vs. unrecognised": "the face in the photograph that no one can name",
  "kept vs. discarded": "what someone thought worth saving",
  "frozen vs. changed": "the person in the photograph and the person now",
  "public vs. private record": "the archive and the shoebox",
  "named vs. unnamed": "the caption and the face with none",
  "original vs. copy": "the print and what it was made from",
  "the before vs. the after": "the photograph taken just before",
  "held vs. released": "what the archive keeps and what it lets go",
  "seen vs. overlooked": "the face at the edge of the frame",
  "catalogued vs. forgotten": "the reference number and the person it was",
  "grief vs. celebration": "the same photograph meaning different things",
  "the person vs. the photograph": "what the image keeps and what it loses",
  "real vs. performance": "the person behind the face paint",
  "beautiful vs. ugly": "the thing that is both at once under carnival light",
  "winning vs. losing": "the prize and the walk home without it",
  "bright vs. dark": "the gap between the lit ride and the field beyond",
  "together vs. alone in a crowd": "the loneliness of the midway",
  "magical vs. mechanical": "the ride and its engine",
  "laughter vs. loneliness": "the sound that covers the other",
  "season vs. end of season": "the carnival on its last night",
  "spectacle vs. ordinary": "the waltzer and the man who runs it",
  "sugar vs. bitter": "the candyfloss and what comes after",
  "anticipation vs. disappointment": "the game before and after the throw",
  "last night vs. first night": "the carnival opening and the carnival closing",
  "seen vs. overlooked in the crowd": "the face that nobody clocked",
  "love vs. heartbreak midway": "the couple and the ghost of the couple",
  "gaudy vs. sublime": "the moment the neon becomes something else",
  "innocent vs. knowing": "the child who believed and the adult who remembers",
  "celebration vs. grief": "the holiday and the chair that’s empty",
  "family vs. chosen family": "the table you were born to and the one you chose",
  "joy vs. obligation": "the holiday you love and the one you perform",
  "present vs. absent": "the seat that should be filled",
  "costume vs. self": "who you are under the halloween mask",
  "giving vs. receiving": "the gift and who it was really for",
  "ritual vs. meaning": "the tradition and the reason it started",
  "seasonal vs. timeless": "the once a year and the always",
  "expectation vs. reality": "the christmas morning and the christmas morning imagined",
  "love vs. duty": "showing up because you want to and showing up because you must",
  "sacred vs. secular": "the meaning kept and the meaning lost",
  "festive vs. tired": "the person smiling and the person behind the smile",
  "excess vs. simplicity": "the table that has everything and the one that has enough",
  "formal vs. candid": "the gap between the face prepared for the camera and the one caught without warning",
  "posed vs. caught": "the difference between what was arranged and what happened",
  "preserved vs. faded": "what the photograph kept and what it let go",
  "public face vs. private moment": "the version given to the lens and the version that slipped through",
  "stiff vs. tender": "the posture held for the exposure and the feeling underneath it",
  "the sitter vs. the subject": "who came to be photographed and who the photograph found",
  "the person vs. the image": "what the camera recorded and what it missed entirely",
  "together vs. separate in time": "two people in the same frame from different moments",
  "dignity vs. vulnerability": "the composure maintained and the composure that almost broke",
  "dressed up vs. undone": "the Sunday best and the person inside it",
  "looking vs. looked at": "the eye behind the lens and the eye in front of it",
  "the face given vs. the face kept": "what was offered to the photographer and what was withheld",
  "love vs. longing": "the presence that still feels like absence",
  "said vs. unsaid": "the words the gesture carried instead",
  "romantic vs. real": "the valentine and the person who gave it",
  "expectation vs. presence": "the occasion imagined and the evening that actually happened",
  "desire vs. fear": "wanting and not knowing what comes after wanting",
  "first vs. last": "the first valentine and the one you didn’t know was the last",
  "sweet vs. bitter": "the chocolate and the aftertaste",
  "public vs. private love": "love performed and love kept",
  "gesture vs. feeling": "the roses and what they stood in for",
  "passion vs. comfort": "the fire and what comes after the fire",
  "new vs. familiar love": "the first time and the thousandth time",
  "the card vs. the truth": "what was written and what was meant",
  "given vs. received": "the act of giving and the weight of receiving",
  "child vs. adult": "who you were when she held you and who you are now",
  "remembered vs. present": "the mother in the memory and the person in the room",
  "gratitude vs. guilt": "thank you and I’m sorry in the same breath",
  "love vs. time": "what the years do to love and what love does to years",
  "the mother vs. the woman": "the role and the person beneath the role",
  "sacrifice vs. self": "what was given up and what that cost",
  "freedom vs. belonging": "the country you love and the country that doesn’t always love back",
  "celebration vs. weight of history": "the fireworks and what they light up beneath them",
  "together vs. divided": "the flag everyone salutes and what everyone means differently",
  "pride vs. complexity": "loving something that is also complicated",
  "spectacle vs. meaning": "the show and what the show is for",
  "red vs. blue": "the divide that fireworks briefly close",
  "loud vs. quiet": "the crowd and the moment alone inside it",
  "patriot vs. citizen": "the flag and the responsibility it carries",
  "one nation vs. many": "the motto and the reality",
  "the grito vs. the silence after": "the cry of independence and what followed it",
  "roots vs. future": "where you came from and where you’re going",
  "national vs. personal": "the history of a country and the history of a family",
  "the table vs. who is missing": "every chair that is filled and the one that isn’t",
  "warmth vs. obligation": "showing up because you want to and showing up because you must",
  "feast vs. famine": "the abundance on one table and what it means",
  "home vs. displacement": "the place the holiday imagines and the place some people can’t return to",
  "fear vs. delight": "the scare and the pleasure of the scare",
  "trick vs. treat": "the threat and the sweetness",
  "the mask vs. the face": "what you put on and what it reveals",
  "dead vs. alive": "the line the holiday plays with",
  "sacred vs. spectacle": "the old meaning and the costume party it became",
  "here vs. gone": "the person remembered on the altar and the fact of their absence",
  "the living vs. the dead": "the two sides of the marigold path",
  "colour vs. darkness": "the brightness of dia de los muertos against what it mourns",
  "magic vs. commercial": "the wonder and the receipt",
  "what was vs. what will be": "the year closing and the year that hasn’t started yet",
  "the countdown vs. the silence after": "midnight and the twelve seconds that follow",
  "the last vs. the first": "the last moment of the year and the first",
  "the family table vs. the world outside": "reunion and the world that made reunion necessary",
  "red vs. the ordinary": "the colour of luck against everything that isn’t",
  "celebration vs. longing": "the new year and the people not at the table",
  "the year ending vs. the year beginning": "the hinge between what was and what might be",
  "home vs. diaspora": "chinese new year in the country you left and the country you’re in",
  "the diya vs. the dark": "the single flame and the darkness it addresses",
  "gift vs. gratitude": "the sweet given and the feeling it carries",
  "family vs. change": "the table that stays the same and the people who don’t",
  "tradition vs. modernity": "the old way and the new year",
  "Rembrandt": "rendered in Rembrandt's golden chiaroscuro — amber light from darkness, Dutch Golden Age",
  "Caravaggio": "rendered in Caravaggio's tenebrism — absolute darkness, single dramatic light source",
  "Velázquez": "rendered in Velázquez's atmospheric court style — deep shadow, warm Spanish light",
  "Goya": "rendered in Goya's dark period — raw expressive paint, psychological intensity",
  "Vermeer": "rendered in Vermeer's domestic light — soft pearl window, intimate Dutch interior",
  "Rubens": "rendered in Rubens's Flemish baroque — rich colour, monumental dynamic composition",
  "Van Gogh": "rendered in Van Gogh's impasto style — swirling thick paint, emotional charged colour",
  "Klimt": "rendered in Klimt's Art Nouveau — gold leaf, decorative ornamental surface, Vienna",
  "Picasso": "rendered in Picasso's Cubist language — fragmented planes, multiple simultaneous viewpoints",
  "Matisse": "rendered in Matisse's Fauvist style — flat bold colour, joyful simplified form",
  "Modigliani": "rendered in Modigliani's style — elongated oval faces, simplified warm ground",
  "Gauguin": "rendered in Gauguin's Polynesian palette — flat saturated tropical colour, bold outline",
  "Toulouse-Lautrec": "rendered in Toulouse-Lautrec's poster style — flat graphic line, Montmartre colour",
  "Hopper": "rendered in Hopper's American Realism — lonely interior light, melancholy isolation",
  "Bacon": "rendered in Francis Bacon's style — distorted flesh, raw paint, psychological dark ground",
  "Warhol": "rendered in Warhol's Pop Art — screen print, flat repeated colour, silk screen",
  "Lichtenstein": "rendered in Lichtenstein's comic style — Ben-Day dots, bold black outline, primary colour",
  "Banksy": "rendered in Banksy's stencil style — stark graphic, urban wall, black and white",
  "Mucha": "rendered in Mucha's Art Nouveau — flowing decorative line, botanical ornament, soft colour",
  "caricature": "rendered as satirical caricature — exaggerated defining features, bold ink line",
  "still vs. moving": "the two of them the only fixed thing in a world that won’t stop",
  "fixed vs. fleeting": "what holds and what passes through",
  "permanent vs. passing": "the ones who stay and the ones who streak past",
  "rooted vs. rushing": "the stillness that is not passivity but choice",
  "clarity vs. blur": "what is sharp and what has already gone",
  "the anchor vs. the current": "what keeps still while everything else flows",
  "held vs. dissolved": "the body that holds its shape and the crowd that doesn’t",
  "seen vs. ghosted": "the subject who is there and the passerby who isn’t quite",
  "sharp vs. streaked": "what the long exposure keeps and what it loses",
  "present vs. passing through": "the ones who are here and the ones who are already gone",
  "the centre vs. the spin": "stillness at the eye of it",
  "solid vs. liquid": "the body that holds and the world that flows",
  "waiting vs. rushing past": "who waits and what rushes past them",
  "the chosen vs. the crowd": "the two in focus and everyone else dissolving",
  "time stopped vs. time flowing": "the shutter open, the world moving, the subjects still"
};
