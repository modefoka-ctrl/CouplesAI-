// GENERATED FILE: data.js is built by tools/build.py from worlds/*.json + src/data.template.js. Do not edit it by hand.
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
          "alleyway rain single lamp",
          "Paris street rain autumn night"
        ],
        "poses": [
          "one pulling the other back by the wrist, urgent",
          "both running toward each other, hair soaked",
          "one pressed against the wall, the other close, not quite touching"
        ],
        "looks": [
          "soaked dark coat and plastered hair each",
          "all black, collars up each",
          "white shirt clinging, vulnerable each"
        ]
      },
      "first vs. last": {
        "locs": [
          "train departing platform one left behind",
          "night train compartment moving",
          "jazz club late night last song"
        ],
        "poses": [
          "over the shoulder, one leaving, the other watching them go",
          "both in each other's space, eyes locked",
          "both smiling, not quite saying it"
        ],
        "looks": [
          "vintage dramatic outfit each",
          "simple dark clothes, intimate each",
          "leather jacket and knit scarf each"
        ]
      },
      "passion vs. destruction": {
        "locs": [
          "lighthouse edge storm approaching",
          "cliff edge storm sea below",
          "summer thunderstorm porch lit"
        ],
        "poses": [
          "one catching the other who almost fell, more than physical",
          "both facing the wind, hands clasped",
          "one hand on the other's face, deciding"
        ],
        "looks": [
          "wind-whipped coats each",
          "white shirt soaked, hair blown each",
          "long dark coat each"
        ]
      },
      "pulled toward vs. pushed away": {
        "locs": [
          "hotel corridor single light night",
          "long corridor hotel night both ends dark",
          "hotel room morning light complicated"
        ],
        "poses": [
          "both mid-argument that is also about something else",
          "one turning away, the other reaching toward them",
          "both about to kiss, stopped by something unseen"
        ],
        "looks": [
          "rumpled white shirt and loosened tie each",
          "silk robe and dress shirt each",
          "deep red and black, deliberate each"
        ]
      },
      "the almost vs. the finally": {
        "locs": [
          "abandoned ballroom chandelier still lit",
          "cinema empty last showing",
          "empty restaurant after closing one candle"
        ],
        "poses": [
          "both slow dancing with no music",
          "both sitting far apart, sharing one candle's glow",
          "one reading aloud, the other listening with eyes closed"
        ],
        "looks": [
          "formal evening clothes, bow tie undone each",
          "vintage dress and rumpled suit each",
          "dark elegant coat over evening wear each"
        ]
      },
      "wanting vs. having": {
        "locs": [
          "rooftop city edge midnight confession",
          "fire escape night city below",
          "rooftop pool city lights reflection midnight"
        ],
        "poses": [
          "both standing apart, wanting to close the distance",
          "one confessing, the other listening very still",
          "both leaning on the edge, faces turned to the glow"
        ],
        "looks": [
          "leather jacket and dark trousers each",
          "long coat caught by the wind each",
          "evening wear unravelling at the end of the night each"
        ]
      },
      "forbidden vs. inevitable": {
        "locs": [
          "phone box rain night neon",
          "bridge night fog below",
          "rain-soaked street night neon reflections"
        ],
        "poses": [
          "both running toward each other, hair soaked",
          "one pressed against the wall, the other close, not quite touching",
          "one pulling the other back by the wrist, urgent"
        ],
        "looks": [
          "all black, collars up each",
          "white shirt clinging, vulnerable each",
          "soaked dark coat and plastered hair each"
        ]
      },
      "the secret vs. the confession": {
        "locs": [
          "car park top level night city view",
          "rooftop water tower night city",
          "rooftop city edge midnight confession"
        ],
        "poses": [
          "one confessing, the other listening very still",
          "both leaning on the edge, faces turned to the glow",
          "both standing apart, wanting to close the distance"
        ],
        "looks": [
          "long coat caught by the wind each",
          "evening wear unravelling at the end of the night each",
          "leather jacket and dark trousers each"
        ]
      },
      "intoxication vs. clarity": {
        "locs": [
          "night market closing stalls",
          "boardwalk end of season night",
          "train departing platform one left behind"
        ],
        "poses": [
          "both in each other's space, eyes locked",
          "both smiling, not quite saying it",
          "over the shoulder, one leaving, the other watching them go"
        ],
        "looks": [
          "simple dark clothes, intimate each",
          "leather jacket and knit scarf each",
          "vintage dramatic outfit each"
        ]
      },
      "desire vs. consequence": {
        "locs": [
          "hotel corridor single light night",
          "long corridor hotel night both ends dark",
          "hotel room morning light complicated"
        ],
        "poses": [
          "one turning away, the other reaching toward them",
          "both about to kiss, stopped by something unseen",
          "both mid-argument that is also about something else"
        ],
        "looks": [
          "silk robe and dress shirt each",
          "deep red and black, deliberate each",
          "rumpled white shirt and loosened tie each"
        ]
      },
      "the beginning vs. the ending": {
        "locs": [
          "midnight garden statuary shadow",
          "lighthouse edge storm approaching",
          "cliff edge storm sea below"
        ],
        "poses": [
          "both facing the wind, hands clasped",
          "one hand on the other's face, deciding",
          "one catching the other who almost fell, more than physical"
        ],
        "looks": [
          "white shirt soaked, hair blown each",
          "long dark coat each",
          "wind-whipped coats each"
        ]
      },
      "love vs. need": {
        "locs": [
          "abandoned church single candle",
          "library closed after hours one lamp",
          "museum closed after hours one guard lamp"
        ],
        "poses": [
          "both sitting far apart, sharing one candle's glow",
          "one reading aloud, the other listening with eyes closed",
          "both slow dancing with no music"
        ],
        "looks": [
          "vintage dress and rumpled suit each",
          "dark elegant coat over evening wear each",
          "formal evening clothes, bow tie undone each"
        ]
      },
      "fire vs. tenderness": {
        "locs": [
          "empty swimming pool night",
          "theatre wings backstage curtain",
          "abandoned ballroom chandelier still lit"
        ],
        "poses": [
          "one reading aloud, the other listening with eyes closed",
          "both slow dancing with no music",
          "both sitting far apart, sharing one candle's glow"
        ],
        "looks": [
          "dark elegant coat over evening wear each",
          "formal evening clothes, bow tie undone each",
          "vintage dress and rumpled suit each"
        ]
      },
      "the risk vs. the safety": {
        "locs": [
          "fire escape night city below",
          "rooftop pool city lights reflection midnight",
          "car park top level night city view"
        ],
        "poses": [
          "both leaning on the edge, faces turned to the glow",
          "both standing apart, wanting to close the distance",
          "one confessing, the other listening very still"
        ],
        "looks": [
          "evening wear unravelling at the end of the night each",
          "leather jacket and dark trousers each",
          "long coat caught by the wind each"
        ]
      },
      "what if vs. what is": {
        "locs": [
          "alleyway rain single lamp",
          "Paris street rain autumn night",
          "phone box rain night neon"
        ],
        "poses": [
          "one pressed against the wall, the other close, not quite touching",
          "one pulling the other back by the wrist, urgent",
          "both running toward each other, hair soaked"
        ],
        "looks": [
          "white shirt clinging, vulnerable each",
          "soaked dark coat and plastered hair each",
          "all black, collars up each"
        ]
      }
    },
    "locs": [
      "rain-soaked street night neon reflections",
      "alleyway rain single lamp",
      "Paris street rain autumn night",
      "phone box rain night neon",
      "bridge night fog below",
      "rooftop city edge midnight confession",
      "fire escape night city below",
      "rooftop pool city lights reflection midnight",
      "car park top level night city view",
      "rooftop water tower night city",
      "abandoned ballroom chandelier still lit",
      "cinema empty last showing",
      "empty restaurant after closing one candle",
      "abandoned church single candle",
      "library closed after hours one lamp",
      "museum closed after hours one guard lamp",
      "empty swimming pool night",
      "theatre wings backstage curtain",
      "hotel corridor single light night",
      "long corridor hotel night both ends dark",
      "hotel room morning light complicated",
      "lighthouse edge storm approaching",
      "cliff edge storm sea below",
      "summer thunderstorm porch lit",
      "midnight garden statuary shadow",
      "train departing platform one left behind",
      "night train compartment moving",
      "jazz club late night last song",
      "night market closing stalls",
      "boardwalk end of season night"
    ],
    "poses": [
      "one pulling the other back by the wrist, urgent",
      "both running toward each other, hair soaked",
      "one pressed against the wall, the other close, not quite touching",
      "both standing apart, wanting to close the distance",
      "one confessing, the other listening very still",
      "both leaning on the edge, faces turned to the glow",
      "both slow dancing with no music",
      "both sitting far apart, sharing one candle's glow",
      "one reading aloud, the other listening with eyes closed",
      "both mid-argument that is also about something else",
      "one turning away, the other reaching toward them",
      "both about to kiss, stopped by something unseen",
      "one catching the other who almost fell, more than physical",
      "both facing the wind, hands clasped",
      "one hand on the other's face, deciding",
      "over the shoulder, one leaving, the other watching them go",
      "both in each other's space, eyes locked",
      "both smiling, not quite saying it"
    ],
    "looks": [
      "soaked dark coat and plastered hair each",
      "all black, collars up each",
      "white shirt clinging, vulnerable each",
      "leather jacket and dark trousers each",
      "long coat caught by the wind each",
      "evening wear unravelling at the end of the night each",
      "formal evening clothes, bow tie undone each",
      "vintage dress and rumpled suit each",
      "dark elegant coat over evening wear each",
      "rumpled white shirt and loosened tie each",
      "silk robe and dress shirt each",
      "deep red and black, deliberate each",
      "wind-whipped coats each",
      "white shirt soaked, hair blown each",
      "long dark coat each",
      "vintage dramatic outfit each",
      "simple dark clothes, intimate each",
      "leather jacket and knit scarf each"
    ],
    "promptSuffix": "Colour grade: deep saturated cinematic darkness — wet streets, neon, blue-black midnight. Not sweet."
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
          "supermarket aisle operatic gesture fluorescent ordinary",
          "kebab shop 2am grand gesture fluorescent",
          "corner shop theatrical argument fluorescent"
        ],
        "poses": [
          "one delivering a speech to the other, who is the only audience",
          "both frozen mid-gesture, arms flung wide",
          "one sinking to their knees, the other stepping over them"
        ],
        "looks": [
          "full tuxedo and ball gown each",
          "Shakespearean doublet and ruff each",
          "clown costume and full makeup each"
        ]
      },
      "audience vs. performer": {
        "locs": [
          "petrol station forecourt dramatic speech nobody watching night",
          "bus stop theatrical declaration nobody waiting",
          "car park rooftop theatrical confrontation empty night"
        ],
        "poses": [
          "both striking a heroic tableau, chins high",
          "one making a grand exit, the other watching with a raised eyebrow",
          "both embracing as if on a stage, bags dropped"
        ],
        "looks": [
          "knight's armour and princess gown each",
          "Roman toga and laurel wreath each",
          "wedding dress and morning suit each"
        ]
      },
      "the role vs. the person": {
        "locs": [
          "laundromat 3am theatrical monologue washing machines",
          "hospital waiting room dramatic exit door",
          "lift lobby theatrical pause before doors open"
        ],
        "poses": [
          "both walking in slow motion, hair flying, no wind",
          "one pointing dramatically, the other quite indifferent",
          "both in a stormy argument, whispering furiously"
        ],
        "looks": [
          "opera costume in full each",
          "Victorian mourning dress each",
          "ballet tutu and tights each"
        ]
      },
      "watched vs. unwatched": {
        "locs": [
          "post office queue theatrical monologue",
          "department store escalator theatrical descent",
          "betting shop theatrical reaction to result"
        ],
        "poses": [
          "both frozen mid-gesture, arms flung wide",
          "one sinking to their knees, the other stepping over them",
          "both taking an elaborate bow to an empty room"
        ],
        "looks": [
          "Shakespearean doublet and ruff each",
          "clown costume and full makeup each",
          "full tuxedo and ball gown each"
        ]
      },
      "the mask vs. the face": {
        "locs": [
          "train carriage theatrical aside fellow passengers ignore",
          "airport arrivals hall dramatic reunion theatrical",
          "motorway services dramatic tableau ordinary setting"
        ],
        "poses": [
          "one making a grand exit, the other watching with a raised eyebrow",
          "both embracing as if on a stage, bags dropped",
          "one declaiming to the sky, the other checking a phone"
        ],
        "looks": [
          "Roman toga and laurel wreath each",
          "wedding dress and morning suit each",
          "knight's armour and princess gown each"
        ]
      },
      "staged vs. caught": {
        "locs": [
          "office corridor dramatic walk away slow motion",
          "phone box raining theatrical call dramatic",
          "swimming pool changing room dramatic exit"
        ],
        "poses": [
          "one pointing dramatically, the other quite indifferent",
          "both in a stormy argument, whispering furiously",
          "one fainting into the other's arms, eyes on the camera"
        ],
        "looks": [
          "Victorian mourning dress each",
          "ballet tutu and tights each",
          "everyday clothes worn with maximum theatrical intensity each"
        ]
      },
      "the speech vs. the feeling": {
        "locs": [
          "chip shop 11pm theatrical romance counter",
          "newsagent morning theatrical significance ordinary",
          "supermarket aisle operatic gesture fluorescent ordinary"
        ],
        "poses": [
          "one sinking to their knees, the other stepping over them",
          "both taking an elaborate bow to an empty room",
          "one delivering a speech to the other, who is the only audience"
        ],
        "looks": [
          "clown costume and full makeup each",
          "full tuxedo and ball gown each",
          "Shakespearean doublet and ruff each"
        ]
      },
      "dramatic vs. mundane": {
        "locs": [
          "underpass theatrical freeze frame urban",
          "railway platform theatrical goodbye overplayed",
          "bus upper deck theatrical speech empty"
        ],
        "poses": [
          "both embracing as if on a stage, bags dropped",
          "one declaiming to the sky, the other checking a phone",
          "both striking a heroic tableau, chins high"
        ],
        "looks": [
          "wedding dress and morning suit each",
          "knight's armour and princess gown each",
          "Roman toga and laurel wreath each"
        ]
      },
      "playing vs. being": {
        "locs": [
          "bowling alley theatrical celebration strike",
          "car wash theatrical moment soap suds",
          "dentist waiting room theatrical anxiety performance"
        ],
        "poses": [
          "both in a stormy argument, whispering furiously",
          "one fainting into the other's arms, eyes on the camera",
          "both walking in slow motion, hair flying, no wind"
        ],
        "looks": [
          "ballet tutu and tights each",
          "everyday clothes worn with maximum theatrical intensity each",
          "opera costume in full each"
        ]
      },
      "the gesture vs. the truth": {
        "locs": [
          "kebab shop 2am grand gesture fluorescent",
          "corner shop theatrical argument fluorescent",
          "post office queue theatrical monologue"
        ],
        "poses": [
          "both taking an elaborate bow to an empty room",
          "one delivering a speech to the other, who is the only audience",
          "both frozen mid-gesture, arms flung wide"
        ],
        "looks": [
          "full tuxedo and ball gown each",
          "Shakespearean doublet and ruff each",
          "clown costume and full makeup each"
        ]
      }
    },
    "locs": [
      "supermarket aisle operatic gesture fluorescent ordinary",
      "kebab shop 2am grand gesture fluorescent",
      "corner shop theatrical argument fluorescent",
      "post office queue theatrical monologue",
      "department store escalator theatrical descent",
      "betting shop theatrical reaction to result",
      "chip shop 11pm theatrical romance counter",
      "newsagent morning theatrical significance ordinary",
      "petrol station forecourt dramatic speech nobody watching night",
      "bus stop theatrical declaration nobody waiting",
      "car park rooftop theatrical confrontation empty night",
      "train carriage theatrical aside fellow passengers ignore",
      "airport arrivals hall dramatic reunion theatrical",
      "motorway services dramatic tableau ordinary setting",
      "underpass theatrical freeze frame urban",
      "railway platform theatrical goodbye overplayed",
      "bus upper deck theatrical speech empty",
      "rooftop car park theatrical last stand night",
      "laundromat 3am theatrical monologue washing machines",
      "hospital waiting room dramatic exit door",
      "lift lobby theatrical pause before doors open",
      "office corridor dramatic walk away slow motion",
      "phone box raining theatrical call dramatic",
      "swimming pool changing room dramatic exit",
      "bowling alley theatrical celebration strike",
      "car wash theatrical moment soap suds",
      "dentist waiting room theatrical anxiety performance",
      "library theatrical whispered intensity quiet",
      "cemetery theatrical grief performative",
      "wedding registry office theatrical entrance late"
    ],
    "poses": [
      "one delivering a speech to the other, who is the only audience",
      "both frozen mid-gesture, arms flung wide",
      "one sinking to their knees, the other stepping over them",
      "both taking an elaborate bow to an empty room",
      "both striking a heroic tableau, chins high",
      "one making a grand exit, the other watching with a raised eyebrow",
      "both embracing as if on a stage, bags dropped",
      "one declaiming to the sky, the other checking a phone",
      "both walking in slow motion, hair flying, no wind",
      "one pointing dramatically, the other quite indifferent",
      "both in a stormy argument, whispering furiously",
      "one fainting into the other's arms, eyes on the camera"
    ],
    "looks": [
      "full tuxedo and ball gown each",
      "Shakespearean doublet and ruff each",
      "clown costume and full makeup each",
      "knight's armour and princess gown each",
      "Roman toga and laurel wreath each",
      "wedding dress and morning suit each",
      "opera costume in full each",
      "Victorian mourning dress each",
      "ballet tutu and tights each",
      "everyday clothes worn with maximum theatrical intensity each"
    ],
    "promptSuffix": "Colour grade: the specific contrast of theatrical drama in mundane light — fluorescent supermarket, petrol station sodium, laundromat neon. Heightened emotion in ordinary space."
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
    "promptSuffix": "Render with film noir visual language: deep blacks, practical light sources, fog or haze where appropriate, shadows that obscure as much as they reveal. The mood should feel like a still from a psychological thriller.",
    "variantDirectives": [
      "Wide noir frame, the figures small among shadows and architecture: ",
      "Full-length frame in deep shadow, posture and gesture carry the suspense: ",
      "Tight close-up half in shadow, faces fill the frame: ",
      "One hard light source, near-black frame, stark and minimal: ",
      "The fog-bound setting dominates the frame, the figures secondary: ",
      "Coats, hats and costume take centre stage, the figures framed to show them: "
    ]
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
    "promptSuffix": "Render as a serious documentary photograph: available light, the energy of the real moment, not a staged portrait. The quality should feel like it belongs in a newspaper front page or a World Press Photo submission.",
    "variantDirectives": [
      "Wide documentary frame, the figures small within the crowd and street: ",
      "Full-length frame in the thick of it, posture and gesture carry the moment: ",
      "Tight close-up, faces fill the frame: ",
      "Stark available-light composition, minimal detail: ",
      "The street and scene dominate the frame, the figures secondary: ",
      "Clothing, signs and banners take centre stage, the figures framed to show them: "
    ]
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
          "courthouse simple just the two civil",
          "registry office morning queue practical"
        ],
        "poses": [
          "both laughing on the steps, confetti in their hair",
          "one holding the other's hand, signing the register",
          "both running down the steps, shoes in hand"
        ],
        "looks": [
          "simple cream dress and plain suit each",
          "short white dress and tailored jacket each",
          "smart casual best clothes each"
        ]
      },
      "the wrong person vs. the right moment": {
        "locs": [
          "Las Vegas wedding chapel neon night kitsch",
          "outdoor festival wedding summer"
        ],
        "poses": [
          "both striking a ridiculous pose, arms wide",
          "both kissing beneath the glow, veil flying",
          "both dancing mid-song, grinning at the camera"
        ],
        "looks": [
          "sequined dress and rhinestone suit each",
          "bright costume bridal outfit and sparkling tuxedo each",
          "outrageous themed outfits each"
        ]
      },
      "the vow vs. the doubt": {
        "locs": [
          "church aisle traditional formal procession",
          "chapel of ease rural small ceremony",
          "stately home grand formal traditional"
        ],
        "poses": [
          "both standing hand in hand, looking ahead",
          "one lifting the veil as the other smiles",
          "both exchanging rings, eyes locked"
        ],
        "looks": [
          "full white gown and morning suit each",
          "long veil and dark suit each",
          "formal dress and long coat each"
        ]
      },
      "together vs. everyone watching": {
        "locs": [
          "marquee reception evening dancing",
          "reception empty after guests gone one couple",
          "hotel suite morning after complicated light"
        ],
        "poses": [
          "both dancing slowly, foreheads together, eyes closed",
          "both slipping out for a quiet moment, shoes off",
          "one resting a head on the other's shoulder, tired and happy"
        ],
        "looks": [
          "rumpled wedding dress and loosened tie each",
          "evening dress and shirtsleeves each",
          "half-undone formal wear each"
        ]
      },
      "the dress vs. the marriage": {
        "locs": [
          "cliffside elopement two and officiant sunset",
          "beach barefoot ceremony sunset",
          "Scottish highland estate ceremony dramatic"
        ],
        "poses": [
          "both facing each other, hands joined, wind in their clothes",
          "both barefoot, forehead to forehead",
          "both kissing as the sun goes down"
        ],
        "looks": [
          "flowing white dress and linen suit each",
          "simple slip dress and rolled-up trousers each",
          "wind-whipped veil and loosened tie each"
        ]
      },
      "love vs. obligation": {
        "locs": [
          "Indian wedding mandap ceremony elaborate",
          "Mexican civil wedding vibrant tradition"
        ],
        "poses": [
          "both seated side by side, heads bowed in ritual",
          "both circling together, garlands around their necks",
          "both smiling through the ritual, hands joined"
        ],
        "looks": [
          "richly embroidered red outfit each",
          "gold-trimmed formal dress and long embroidered coat each",
          "bright traditional wedding costume each"
        ]
      },
      "the moment before vs. the moment after": {
        "locs": [
          "greenhouse botanical wedding ceremony",
          "marquee reception evening dancing",
          "reception empty after guests gone one couple"
        ],
        "poses": [
          "both dancing slowly, foreheads together, eyes closed",
          "both slipping out for a quiet moment, shoes off",
          "one resting a head on the other's shoulder, tired and happy"
        ],
        "looks": [
          "rumpled wedding dress and loosened tie each",
          "evening dress and shirtsleeves each",
          "half-undone formal wear each"
        ]
      },
      "the arranged vs. the chosen": {
        "locs": [
          "Mexican civil wedding vibrant tradition",
          "Indian wedding mandap ceremony elaborate"
        ],
        "poses": [
          "both seated side by side, heads bowed in ritual",
          "both circling together, garlands around their necks",
          "both smiling through the ritual, hands joined"
        ],
        "looks": [
          "richly embroidered red outfit each",
          "gold-trimmed formal dress and long embroidered coat each",
          "bright traditional wedding costume each"
        ]
      },
      "the second wedding vs. the first": {
        "locs": [
          "destination wedding Italy villa afternoon",
          "cliffside elopement two and officiant sunset",
          "beach barefoot ceremony sunset"
        ],
        "poses": [
          "both facing each other, hands joined, wind in their clothes",
          "both barefoot, forehead to forehead",
          "both kissing as the sun goes down"
        ],
        "looks": [
          "flowing white dress and linen suit each",
          "simple slip dress and rolled-up trousers each",
          "wind-whipped veil and loosened tie each"
        ]
      },
      "the almost vs. the finally": {
        "locs": [
          "Jewish wedding chuppah traditional formal",
          "church aisle traditional formal procession",
          "chapel of ease rural small ceremony"
        ],
        "poses": [
          "both standing hand in hand, looking ahead",
          "one lifting the veil as the other smiles",
          "both exchanging rings, eyes locked"
        ],
        "looks": [
          "full white gown and morning suit each",
          "long veil and dark suit each",
          "formal dress and long coat each"
        ]
      }
    },
    "locs": [
      "city hall steps elopement simple morning",
      "courthouse simple just the two civil",
      "registry office morning queue practical",
      "Paris bridge elopement spontaneous rain",
      "Las Vegas wedding chapel neon night kitsch",
      "outdoor festival wedding summer",
      "cliffside elopement two and officiant sunset",
      "beach barefoot ceremony sunset",
      "Scottish highland estate ceremony dramatic",
      "destination wedding Italy villa afternoon",
      "church aisle traditional formal procession",
      "chapel of ease rural small ceremony",
      "stately home grand formal traditional",
      "Jewish wedding chuppah traditional formal",
      "Indian wedding mandap ceremony elaborate",
      "Mexican civil wedding vibrant tradition",
      "marquee reception evening dancing",
      "reception empty after guests gone one couple",
      "hotel suite morning after complicated light",
      "greenhouse botanical wedding ceremony"
    ],
    "poses": [
      "both laughing on the steps, confetti in their hair",
      "one holding the other's hand, signing the register",
      "both running down the steps, shoes in hand",
      "both striking a ridiculous pose, arms wide",
      "both kissing beneath the glow, veil flying",
      "both dancing mid-song, grinning at the camera",
      "both facing each other, hands joined, wind in their clothes",
      "both barefoot, forehead to forehead",
      "both kissing as the sun goes down",
      "both standing hand in hand, looking ahead",
      "one lifting the veil as the other smiles",
      "both exchanging rings, eyes locked",
      "both seated side by side, heads bowed in ritual",
      "both circling together, garlands around their necks",
      "both smiling through the ritual, hands joined",
      "both dancing slowly, foreheads together, eyes closed",
      "both slipping out for a quiet moment, shoes off",
      "one resting a head on the other's shoulder, tired and happy"
    ],
    "looks": [
      "simple cream dress and plain suit each",
      "short white dress and tailored jacket each",
      "smart casual best clothes each",
      "sequined dress and rhinestone suit each",
      "bright costume bridal outfit and sparkling tuxedo each",
      "outrageous themed outfits each",
      "flowing white dress and linen suit each",
      "simple slip dress and rolled-up trousers each",
      "wind-whipped veil and loosened tie each",
      "full white gown and morning suit each",
      "long veil and dark suit each",
      "formal dress and long coat each",
      "richly embroidered red outfit each",
      "gold-trimmed formal dress and long embroidered coat each",
      "bright traditional wedding costume each",
      "rumpled wedding dress and loosened tie each",
      "evening dress and shirtsleeves each",
      "half-undone formal wear each"
    ],
    "promptSuffix": "Colour grade: city hall morning light, Las Vegas neon night, cliffside golden hour, church formal candlelight."
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
    "promptSuffix": "Deep atmospheric lighting, symbolic elements; the subjects timeless and archetypal rather than contemporary.",
    "variantDirectives": [
      "Vast painted frame, the figures small within a mythic landscape: ",
      "Three-quarter length, posture and gesture carry the drama: ",
      "Tight head-and-shoulders portrait, faces fill the canvas: ",
      "Bold simplified composition, one dominant shape, minimal detail: ",
      "The mythic setting dominates the canvas, the figures secondary: ",
      "Robes and regalia take centre stage, the figures posed to show them: "
    ]
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
      "snowfield at dusk pink light",
      "glacier crevasse edge",
      "frozen waterfall ice wall",
      "narrow couloir ice",
      "snow cornice edge careful",
      "Alaska glacier terminus",
      "Mt Cook glacier New Zealand",
      "rock face midway pitch",
      "scree slope descent",
      "rocky summit cross",
      "talus slope scramble",
      "Dolomite rock tower base",
      "Patagonia spire mist",
      "Sierra Nevada granite dome",
      "Chamonix aiguille needle",
      "ridge at altitude blue sky above",
      "summit cairn wind-blown",
      "ridgeline silhouette both sides visible",
      "Scottish highland ridge",
      "Philippine volcano caldera rim",
      "East African rift escarpment",
      "Urals ancient low ridge",
      "Appalachian bald summit",
      "Faroe plateau edge cliff",
      "alpine meadow wildflowers",
      "tree line edge looking up",
      "alpine lake reflection",
      "Swiss alpine meadow cowbell",
      "Rocky Mountain aspen grove autumn",
      "Norwegian fjord above",
      "Pyrenees pass stone refuge",
      "Japanese Alps cedar forest",
      "Taiwan high mountain fog",
      "Carpathian forest ridge",
      "Rockies moraine lake",
      "high camp tent door morning",
      "mountain hut exterior dawn",
      "cable car tower base",
      "lookout tower wooden stairs",
      "Himalayan base camp prayer flags",
      "Ben Nevis CIC hut below",
      "boulder field at sunrise",
      "New Zealand Southern Alps",
      "Andes condor sky above",
      "Atlas Mountains red earth",
      "Ethiopian Simien ridge",
      "Caucasus range ancient stone",
      "Iceland lava field above cloud"
    ],
    "poses": [
      "both roped together, picking their way across the white, breath steaming",
      "one belaying the other up the ice, axes swinging",
      "both lying back, arms wide, laughing at the sky",
      "both sliding down the slope, grinning, snow flying",
      "one hanging by one hand, the other grinning from the next hold",
      "both resting on a ledge, sharing a flask, legs dangling",
      "one checking the other's harness, both focused",
      "both scrambling hand over hand, chalk on their palms",
      "both striding into the wind, arms out for balance",
      "both standing at the edge, arms around each other, the world below",
      "one pointing out the route, the other holding the map",
      "both high-fiving, flushed and breathless",
      "both lying in the flowers, looking up at the clouds",
      "both walking hand in hand along the shore, boots in their hands",
      "both sharing a flask, leaning on a boulder",
      "both skipping stones, laughing at each splash",
      "both wrapped in one blanket, steaming mugs in hand",
      "one lighting the stove, the other pulling on boots",
      "both leaning on the door frame, watching the light change",
      "both sitting on the step, comparing blisters, laughing",
      "both tiny against the enormous peaks, hand in hand",
      "both resting on a rock, eyes on the horizon",
      "both cresting the pass, hair wild in the wind",
      "both sitting side by side, watching a bird of prey wheel overhead"
    ],
    "looks": [
      "down jackets and goggles each",
      "hard-shell jackets and helmets each",
      "insulated suit and mittens each",
      "climbing harness and chalk-bag each",
      "helmet and technical pants each",
      "sleeveless top and climbing trousers each",
      "windbreaker and trail pants each",
      "fleece and beanie each",
      "wool sweater and hiking trousers each",
      "light jacket and hiking trousers each",
      "plaid shirt and trail shoes each",
      "sun hat and linen shirt each",
      "wool jumper and beanie each",
      "down vest and thermal top each",
      "fleece and thick socks each",
      "expedition jackets and sun hats each",
      "wool poncho and sturdy boots each",
      "layered technical gear in bright colours each"
    ],
    "affinities": {
      "small vs. immense": {
        "locs": [
          "boulder field at sunrise",
          "New Zealand Southern Alps",
          "Andes condor sky above"
        ],
        "poses": [
          "both tiny against the enormous peaks, hand in hand",
          "both resting on a rock, eyes on the horizon",
          "both cresting the pass, hair wild in the wind"
        ],
        "looks": [
          "expedition jackets and sun hats each",
          "wool poncho and sturdy boots each",
          "layered technical gear in bright colours each"
        ]
      },
      "summit vs. abyss": {
        "locs": [
          "ridge at altitude blue sky above",
          "summit cairn wind-blown",
          "ridgeline silhouette both sides visible"
        ],
        "poses": [
          "both striding into the wind, arms out for balance",
          "both standing at the edge, arms around each other, the world below",
          "one pointing out the route, the other holding the map"
        ],
        "looks": [
          "windbreaker and trail pants each",
          "fleece and beanie each",
          "wool sweater and hiking trousers each"
        ]
      },
      "endurance vs. surrender": {
        "locs": [
          "snowfield at dusk pink light",
          "glacier crevasse edge",
          "frozen waterfall ice wall"
        ],
        "poses": [
          "both roped together, picking their way across the white, breath steaming",
          "one belaying the other up the ice, axes swinging",
          "both lying back, arms wide, laughing at the sky"
        ],
        "looks": [
          "down jackets and goggles each",
          "hard-shell jackets and helmets each",
          "insulated suit and mittens each"
        ]
      },
      "ascent vs. fall": {
        "locs": [
          "rock face midway pitch",
          "scree slope descent",
          "rocky summit cross"
        ],
        "poses": [
          "one hanging by one hand, the other grinning from the next hold",
          "both resting on a ledge, sharing a flask, legs dangling",
          "one checking the other's harness, both focused"
        ],
        "looks": [
          "climbing harness and chalk-bag each",
          "helmet and technical pants each",
          "sleeveless top and climbing trousers each"
        ]
      },
      "exposure vs. shelter": {
        "locs": [
          "high camp tent door morning",
          "mountain hut exterior dawn",
          "cable car tower base"
        ],
        "poses": [
          "both wrapped in one blanket, steaming mugs in hand",
          "one lighting the stove, the other pulling on boots",
          "both leaning on the door frame, watching the light change"
        ],
        "looks": [
          "wool jumper and beanie each",
          "down vest and thermal top each",
          "fleece and thick socks each"
        ]
      },
      "push vs. stop": {
        "locs": [
          "Scottish highland ridge",
          "Philippine volcano caldera rim",
          "East African rift escarpment"
        ],
        "poses": [
          "both standing at the edge, arms around each other, the world below",
          "one pointing out the route, the other holding the map",
          "both high-fiving, flushed and breathless"
        ],
        "looks": [
          "fleece and beanie each",
          "wool sweater and hiking trousers each",
          "windbreaker and trail pants each"
        ]
      },
      "cold vs. alive": {
        "locs": [
          "narrow couloir ice",
          "snow cornice edge careful",
          "Alaska glacier terminus"
        ],
        "poses": [
          "one belaying the other up the ice, axes swinging",
          "both lying back, arms wide, laughing at the sky",
          "both sliding down the slope, grinning, snow flying"
        ],
        "looks": [
          "hard-shell jackets and helmets each",
          "insulated suit and mittens each",
          "down jackets and goggles each"
        ]
      },
      "vertical vs. horizontal": {
        "locs": [
          "talus slope scramble",
          "Dolomite rock tower base",
          "Patagonia spire mist"
        ],
        "poses": [
          "both resting on a ledge, sharing a flask, legs dangling",
          "one checking the other's harness, both focused",
          "both scrambling hand over hand, chalk on their palms"
        ],
        "looks": [
          "helmet and technical pants each",
          "sleeveless top and climbing trousers each",
          "climbing harness and chalk-bag each"
        ]
      },
      "earned vs. given": {
        "locs": [
          "alpine meadow wildflowers",
          "tree line edge looking up",
          "alpine lake reflection"
        ],
        "poses": [
          "both lying in the flowers, looking up at the clouds",
          "both walking hand in hand along the shore, boots in their hands",
          "both sharing a flask, leaning on a boulder"
        ],
        "looks": [
          "light jacket and hiking trousers each",
          "plaid shirt and trail shoes each",
          "sun hat and linen shirt each"
        ]
      },
      "risk vs. reward": {
        "locs": [
          "Sierra Nevada granite dome",
          "Chamonix aiguille needle",
          "rock face midway pitch"
        ],
        "poses": [
          "one checking the other's harness, both focused",
          "both scrambling hand over hand, chalk on their palms",
          "one hanging by one hand, the other grinning from the next hold"
        ],
        "looks": [
          "sleeveless top and climbing trousers each",
          "climbing harness and chalk-bag each",
          "helmet and technical pants each"
        ]
      },
      "altitude vs. body": {
        "locs": [
          "Atlas Mountains red earth",
          "Ethiopian Simien ridge",
          "Caucasus range ancient stone"
        ],
        "poses": [
          "both resting on a rock, eyes on the horizon",
          "both cresting the pass, hair wild in the wind",
          "both sitting side by side, watching a bird of prey wheel overhead"
        ],
        "looks": [
          "wool poncho and sturdy boots each",
          "layered technical gear in bright colours each",
          "expedition jackets and sun hats each"
        ]
      },
      "granite vs. human": {
        "locs": [
          "Iceland lava field above cloud",
          "boulder field at sunrise",
          "New Zealand Southern Alps"
        ],
        "poses": [
          "both cresting the pass, hair wild in the wind",
          "both sitting side by side, watching a bird of prey wheel overhead",
          "both tiny against the enormous peaks, hand in hand"
        ],
        "looks": [
          "layered technical gear in bright colours each",
          "expedition jackets and sun hats each",
          "wool poncho and sturdy boots each"
        ]
      },
      "rope vs. void": {
        "locs": [
          "Mt Cook glacier New Zealand",
          "snowfield at dusk pink light",
          "glacier crevasse edge"
        ],
        "poses": [
          "both lying back, arms wide, laughing at the sky",
          "both sliding down the slope, grinning, snow flying",
          "both roped together, picking their way across the white, breath steaming"
        ],
        "looks": [
          "insulated suit and mittens each",
          "down jackets and goggles each",
          "hard-shell jackets and helmets each"
        ]
      },
      "pace vs. fatigue": {
        "locs": [
          "Swiss alpine meadow cowbell",
          "Rocky Mountain aspen grove autumn",
          "Norwegian fjord above"
        ],
        "poses": [
          "both walking hand in hand along the shore, boots in their hands",
          "both sharing a flask, leaning on a boulder",
          "both skipping stones, laughing at each splash"
        ],
        "looks": [
          "plaid shirt and trail shoes each",
          "sun hat and linen shirt each",
          "light jacket and hiking trousers each"
        ]
      },
      "loaded vs. free": {
        "locs": [
          "lookout tower wooden stairs",
          "Himalayan base camp prayer flags",
          "Ben Nevis CIC hut below"
        ],
        "poses": [
          "one lighting the stove, the other pulling on boots",
          "both leaning on the door frame, watching the light change",
          "both sitting on the step, comparing blisters, laughing"
        ],
        "looks": [
          "down vest and thermal top each",
          "fleece and thick socks each",
          "wool jumper and beanie each"
        ]
      },
      "partner vs. self": {
        "locs": [
          "Pyrenees pass stone refuge",
          "Japanese Alps cedar forest",
          "Taiwan high mountain fog"
        ],
        "poses": [
          "both sharing a flask, leaning on a boulder",
          "both skipping stones, laughing at each splash",
          "both lying in the flowers, looking up at the clouds"
        ],
        "looks": [
          "sun hat and linen shirt each",
          "light jacket and hiking trousers each",
          "plaid shirt and trail shoes each"
        ]
      },
      "weather vs. will": {
        "locs": [
          "high camp tent door morning",
          "mountain hut exterior dawn",
          "cable car tower base"
        ],
        "poses": [
          "both leaning on the door frame, watching the light change",
          "both sitting on the step, comparing blisters, laughing",
          "both wrapped in one blanket, steaming mugs in hand"
        ],
        "looks": [
          "fleece and thick socks each",
          "wool jumper and beanie each",
          "down vest and thermal top each"
        ]
      },
      "trail vs. off-trail": {
        "locs": [
          "Carpathian forest ridge",
          "Rockies moraine lake",
          "alpine meadow wildflowers"
        ],
        "poses": [
          "both skipping stones, laughing at each splash",
          "both lying in the flowers, looking up at the clouds",
          "both walking hand in hand along the shore, boots in their hands"
        ],
        "looks": [
          "light jacket and hiking trousers each",
          "plaid shirt and trail shoes each",
          "sun hat and linen shirt each"
        ]
      },
      "gear vs. skin": {
        "locs": [
          "Andes condor sky above",
          "Atlas Mountains red earth",
          "Ethiopian Simien ridge"
        ],
        "poses": [
          "both sitting side by side, watching a bird of prey wheel overhead",
          "both tiny against the enormous peaks, hand in hand",
          "both resting on a rock, eyes on the horizon"
        ],
        "looks": [
          "expedition jackets and sun hats each",
          "wool poncho and sturdy boots each",
          "layered technical gear in bright colours each"
        ]
      },
      "summit fever vs. reason": {
        "locs": [
          "Urals ancient low ridge",
          "Appalachian bald summit",
          "Faroe plateau edge cliff"
        ],
        "poses": [
          "one pointing out the route, the other holding the map",
          "both high-fiving, flushed and breathless",
          "both striding into the wind, arms out for balance"
        ],
        "looks": [
          "wool sweater and hiking trousers each",
          "windbreaker and trail pants each",
          "fleece and beanie each"
        ]
      }
    },
    "promptSuffix": "Colour grade: high-altitude clarity, crisp air, vivid blue sky or dramatic cloud. The subjects are in the landscape, not posed before it."
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
      "cliff above ocean",
      "surf break line",
      "open sea swell no land",
      "ocean trench research vessel deck",
      "beach at low tide sandbars",
      "Irish sea cliffs base",
      "Faroe Islands sea stack",
      "Iceland black sand waves",
      "coral reef shallows clear",
      "mangrove channel slow water",
      "limestone pool Halong Bay",
      "lagoon atoll Pacific",
      "submerged ruins shallow water",
      "Amazon tributary dawn",
      "Lake Titicaca reed island",
      "Maldives lagoon clear",
      "empty pool at dawn",
      "harbor pier edge",
      "reservoir concrete dam edge",
      "infinity pool edge ocean drop",
      "lido pool 1930s architecture",
      "dam spillway roar",
      "canal Venice dawn",
      "Venice canal gondola point",
      "Thames at low tide mud",
      "Hudson River pier dusk",
      "lake at first light still water",
      "estuary at golden hour",
      "mountain lake snow-edged",
      "delta mouth wide sky",
      "fjord still water reflection",
      "alpine lake turquoise",
      "sea loch Scotland mist",
      "frozen lake crack line",
      "Lake Baikal winter ice",
      "Dead Sea float horizon",
      "sea cave entrance low tide",
      "rocky tidal pool exposed",
      "kelp forest shallows",
      "waterfall base mist rising",
      "hot spring sulfur mist",
      "geyser field Iceland",
      "cenote entrance Mexico",
      "rain-swollen river bank",
      "tide pool Oregon coast",
      "Sardinia grotto entrance",
      "river bend at dusk",
      "Nile at dusk feluccas",
      "Ganges ghat at dawn"
    ],
    "poses": [
      "both running into the surf, arms flung wide",
      "one diving through a wave, the other catching the spray",
      "both floating on their backs, fingertips touching, the swell lifting them",
      "both clinging to a board, laughing, salt in their hair",
      "both gliding below the surface, hands linked, bubbles rising",
      "one handing the other a shell, grinning through a snorkel",
      "both lying on a floating mat, the sun on their skin",
      "both wading waist-deep, shoes in their hands",
      "both sitting on the edge, feet dangling, ripples around them",
      "one jumping in with a whoop, the other watching from the edge",
      "both treading and talking, chins at the surface",
      "both leaning on the rail, shoulders touching, reflections trembling beneath",
      "both wading in up to their knees, arms wrapped around themselves, laughing",
      "both standing still on the shore, steam rising from their shoulders",
      "one plunging in, the other cheering with a towel ready",
      "both floating motionless, mirrored in the surface",
      "both pressed against the rock, breath held, looking up at the spray",
      "both swimming through the narrow gap, torches in their hands",
      "one crouching to examine the pool, the other holding their hand",
      "both sitting under the cascade, eyes closed, soaked",
      "both sitting on the stone steps, feet in the current",
      "one launching a small boat, the other pushing it off",
      "both standing waist-deep in the current, hands raised to the sun",
      "both bathing in the dawn light, hair streaming"
    ],
    "looks": [
      "surf shorts and bikini top each",
      "wetsuits peeled to the waist each",
      "rash guards and board shorts each",
      "bikini and swim trunks each",
      "sarong over swimsuit and board shorts each",
      "snorkels pushed up and swimsuits each",
      "vintage swimsuit and retro trunks each",
      "swim dress and tailored swim shorts each",
      "linen shirt open over swimwear each",
      "thermal wetsuits and neoprene boots each",
      "wool hats and swimsuits each",
      "robes and bare feet each",
      "swimsuits and water shoes each",
      "soaked cotton shirts and shorts each",
      "wetsuits and helmets each",
      "white cotton robes and wrapped cloth each",
      "simple linen clothes rolled to the knee each",
      "light cotton shirts and trousers each"
    ],
    "affinities": {
      "surface vs. depth": {
        "locs": [
          "coral reef shallows clear",
          "mangrove channel slow water",
          "limestone pool Halong Bay"
        ],
        "poses": [
          "both gliding below the surface, hands linked, bubbles rising",
          "one handing the other a shell, grinning through a snorkel",
          "both lying on a floating mat, the sun on their skin"
        ],
        "looks": [
          "bikini and swim trunks each",
          "sarong over swimsuit and board shorts each",
          "snorkels pushed up and swimsuits each"
        ]
      },
      "breath vs. drowning": {
        "locs": [
          "sea cave entrance low tide",
          "rocky tidal pool exposed",
          "kelp forest shallows"
        ],
        "poses": [
          "both pressed against the rock, breath held, looking up at the spray",
          "both swimming through the narrow gap, torches in their hands",
          "one crouching to examine the pool, the other holding their hand"
        ],
        "looks": [
          "swimsuits and water shoes each",
          "soaked cotton shirts and shorts each",
          "wetsuits and helmets each"
        ]
      },
      "cold vs. warmth": {
        "locs": [
          "lake at first light still water",
          "estuary at golden hour",
          "mountain lake snow-edged"
        ],
        "poses": [
          "both wading in up to their knees, arms wrapped around themselves, laughing",
          "both standing still on the shore, steam rising from their shoulders",
          "one plunging in, the other cheering with a towel ready"
        ],
        "looks": [
          "thermal wetsuits and neoprene boots each",
          "wool hats and swimsuits each",
          "robes and bare feet each"
        ]
      },
      "float vs. sink": {
        "locs": [
          "empty pool at dawn",
          "harbor pier edge",
          "reservoir concrete dam edge"
        ],
        "poses": [
          "both sitting on the edge, feet dangling, ripples around them",
          "one jumping in with a whoop, the other watching from the edge",
          "both treading and talking, chins at the surface"
        ],
        "looks": [
          "vintage swimsuit and retro trunks each",
          "swim dress and tailored swim shorts each",
          "linen shirt open over swimwear each"
        ]
      },
      "control vs. current": {
        "locs": [
          "river bend at dusk",
          "Nile at dusk feluccas",
          "Ganges ghat at dawn"
        ],
        "poses": [
          "both sitting on the stone steps, feet in the current",
          "one launching a small boat, the other pushing it off",
          "both standing waist-deep in the current, hands raised to the sun"
        ],
        "looks": [
          "white cotton robes and wrapped cloth each",
          "simple linen clothes rolled to the knee each",
          "light cotton shirts and trousers each"
        ]
      },
      "still vs. surge": {
        "locs": [
          "ocean at horizon golden hour",
          "cliff above ocean",
          "surf break line"
        ],
        "poses": [
          "both running into the surf, arms flung wide",
          "one diving through a wave, the other catching the spray",
          "both floating on their backs, fingertips touching, the swell lifting them"
        ],
        "looks": [
          "surf shorts and bikini top each",
          "wetsuits peeled to the waist each",
          "rash guards and board shorts each"
        ]
      },
      "seen vs. submerged": {
        "locs": [
          "lagoon atoll Pacific",
          "submerged ruins shallow water",
          "Amazon tributary dawn"
        ],
        "poses": [
          "one handing the other a shell, grinning through a snorkel",
          "both lying on a floating mat, the sun on their skin",
          "both wading waist-deep, shoes in their hands"
        ],
        "looks": [
          "sarong over swimsuit and board shorts each",
          "snorkels pushed up and swimsuits each",
          "bikini and swim trunks each"
        ]
      },
      "rhythm vs. chaos": {
        "locs": [
          "open sea swell no land",
          "ocean trench research vessel deck",
          "beach at low tide sandbars"
        ],
        "poses": [
          "one diving through a wave, the other catching the spray",
          "both floating on their backs, fingertips touching, the swell lifting them",
          "both clinging to a board, laughing, salt in their hair"
        ],
        "looks": [
          "wetsuits peeled to the waist each",
          "rash guards and board shorts each",
          "surf shorts and bikini top each"
        ]
      },
      "weight vs. lift": {
        "locs": [
          "infinity pool edge ocean drop",
          "lido pool 1930s architecture",
          "dam spillway roar"
        ],
        "poses": [
          "one jumping in with a whoop, the other watching from the edge",
          "both treading and talking, chins at the surface",
          "both leaning on the rail, shoulders touching, reflections trembling beneath"
        ],
        "looks": [
          "swim dress and tailored swim shorts each",
          "linen shirt open over swimwear each",
          "vintage swimsuit and retro trunks each"
        ]
      },
      "held vs. swept": {
        "locs": [
          "river bend at dusk",
          "Nile at dusk feluccas",
          "Ganges ghat at dawn"
        ],
        "poses": [
          "one launching a small boat, the other pushing it off",
          "both standing waist-deep in the current, hands raised to the sun",
          "both bathing in the dawn light, hair streaming"
        ],
        "looks": [
          "simple linen clothes rolled to the knee each",
          "light cotton shirts and trousers each",
          "white cotton robes and wrapped cloth each"
        ]
      },
      "calm vs. undertow": {
        "locs": [
          "Irish sea cliffs base",
          "Faroe Islands sea stack",
          "Iceland black sand waves"
        ],
        "poses": [
          "both floating on their backs, fingertips touching, the swell lifting them",
          "both clinging to a board, laughing, salt in their hair",
          "both running into the surf, arms flung wide"
        ],
        "looks": [
          "rash guards and board shorts each",
          "surf shorts and bikini top each",
          "wetsuits peeled to the waist each"
        ]
      },
      "oxygen vs. pressure": {
        "locs": [
          "waterfall base mist rising",
          "hot spring sulfur mist",
          "geyser field Iceland"
        ],
        "poses": [
          "both swimming through the narrow gap, torches in their hands",
          "one crouching to examine the pool, the other holding their hand",
          "both sitting under the cascade, eyes closed, soaked"
        ],
        "looks": [
          "soaked cotton shirts and shorts each",
          "wetsuits and helmets each",
          "swimsuits and water shoes each"
        ]
      },
      "shore vs. open sea": {
        "locs": [
          "canal Venice dawn",
          "Venice canal gondola point",
          "Thames at low tide mud"
        ],
        "poses": [
          "both treading and talking, chins at the surface",
          "both leaning on the rail, shoulders touching, reflections trembling beneath",
          "both sitting on the edge, feet dangling, ripples around them"
        ],
        "looks": [
          "linen shirt open over swimwear each",
          "vintage swimsuit and retro trunks each",
          "swim dress and tailored swim shorts each"
        ]
      },
      "wave vs. stillness": {
        "locs": [
          "delta mouth wide sky",
          "fjord still water reflection",
          "alpine lake turquoise"
        ],
        "poses": [
          "both standing still on the shore, steam rising from their shoulders",
          "one plunging in, the other cheering with a towel ready",
          "both floating motionless, mirrored in the surface"
        ],
        "looks": [
          "wool hats and swimsuits each",
          "robes and bare feet each",
          "thermal wetsuits and neoprene boots each"
        ]
      },
      "glass vs. churn": {
        "locs": [
          "sea loch Scotland mist",
          "frozen lake crack line",
          "Lake Baikal winter ice"
        ],
        "poses": [
          "one plunging in, the other cheering with a towel ready",
          "both floating motionless, mirrored in the surface",
          "both wading in up to their knees, arms wrapped around themselves, laughing"
        ],
        "looks": [
          "robes and bare feet each",
          "thermal wetsuits and neoprene boots each",
          "wool hats and swimsuits each"
        ]
      },
      "tidal vs. still": {
        "locs": [
          "cenote entrance Mexico",
          "rain-swollen river bank",
          "tide pool Oregon coast"
        ],
        "poses": [
          "one crouching to examine the pool, the other holding their hand",
          "both sitting under the cascade, eyes closed, soaked",
          "both pressed against the rock, breath held, looking up at the spray"
        ],
        "looks": [
          "wetsuits and helmets each",
          "swimsuits and water shoes each",
          "soaked cotton shirts and shorts each"
        ]
      },
      "shallow vs. abyss": {
        "locs": [
          "Lake Titicaca reed island",
          "Maldives lagoon clear",
          "coral reef shallows clear"
        ],
        "poses": [
          "both lying on a floating mat, the sun on their skin",
          "both wading waist-deep, shoes in their hands",
          "both gliding below the surface, hands linked, bubbles rising"
        ],
        "looks": [
          "snorkels pushed up and swimsuits each",
          "bikini and swim trunks each",
          "sarong over swimsuit and board shorts each"
        ]
      },
      "fluid vs. rigid": {
        "locs": [
          "Hudson River pier dusk",
          "empty pool at dawn",
          "harbor pier edge"
        ],
        "poses": [
          "both leaning on the rail, shoulders touching, reflections trembling beneath",
          "both sitting on the edge, feet dangling, ripples around them",
          "one jumping in with a whoop, the other watching from the edge"
        ],
        "looks": [
          "vintage swimsuit and retro trunks each",
          "swim dress and tailored swim shorts each",
          "linen shirt open over swimwear each"
        ]
      },
      "surrender vs. fight": {
        "locs": [
          "Dead Sea float horizon",
          "lake at first light still water",
          "estuary at golden hour"
        ],
        "poses": [
          "both floating motionless, mirrored in the surface",
          "both wading in up to their knees, arms wrapped around themselves, laughing",
          "both standing still on the shore, steam rising from their shoulders"
        ],
        "looks": [
          "thermal wetsuits and neoprene boots each",
          "wool hats and swimsuits each",
          "robes and bare feet each"
        ]
      },
      "visible vs. invisible": {
        "locs": [
          "Sardinia grotto entrance",
          "sea cave entrance low tide",
          "rocky tidal pool exposed"
        ],
        "poses": [
          "both sitting under the cascade, eyes closed, soaked",
          "both pressed against the rock, breath held, looking up at the spray",
          "both swimming through the narrow gap, torches in their hands"
        ],
        "looks": [
          "swimsuits and water shoes each",
          "soaked cotton shirts and shorts each",
          "wetsuits and helmets each"
        ]
      }
    },
    "promptSuffix": "The subjects must be in, on or entering the water, not beside it: wet skin, wet fabric, the physics of water present."
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
      "dense forest clearing shafts of light",
      "ancient woodland root tangle",
      "old growth redwood base",
      "New Forest ancient oak hollow",
      "Norwegian birch forest autumn",
      "Swedish elk forest dawn",
      "Galician mountain forest green",
      "Bhutanese forest monastery visible above",
      "New Zealand beech forest",
      "Kiwi rainforest fern gully",
      "tidal flat at low tide exposed",
      "estuarine mudflat wide sky",
      "sand dune blowout hollow",
      "flint shingle beach storm",
      "reed bed at dawn mist",
      "Exmoor coastline cliff path",
      "Pembrokeshire sea stack distant",
      "Finnish lake island landing",
      "Baltic sea coast pine",
      "Breton coastal heathland",
      "Turkish mountain lake turquoise",
      "bog moorland at dusk",
      "heath in flower purple wide",
      "limestone pavement bare",
      "peat highland loch reflected",
      "Welsh upland reservoir edge",
      "Peak District gritstone edge",
      "Lake District fell top",
      "Dartmoor tor wind",
      "Cairngorm plateau tundra",
      "Estonian bog wooden walkway",
      "cliff face at golden hour lichen-covered",
      "river gorge base spray rising",
      "chalk downland escarpment edge",
      "Scottish glen river crossing",
      "Skye Cuillin black rock",
      "Corsican gorge river",
      "Croatian karst spring",
      "Slovenian Triglav plateau",
      "open grassland in wind",
      "Hebrides machair wildflowers",
      "Sardinian maquis scrub",
      "Georgian Caucasus meadow",
      "Mongolian steppe endless",
      "Kyrgyz alpine pasture yurt distant",
      "Tibetan plateau wind-scoured",
      "Indian hill station mist",
      "Sri Lanka highland tea",
      "Australian blue mountain heath",
      "Tasmanian alpine meadow"
    ],
    "poses": [
      "both walking single file, ferns brushing their knees",
      "one lifting the other over a fallen log",
      "both sitting against a huge trunk, listening",
      "both looking up, hands on the bark, awestruck",
      "both running along the tideline, shoes in their hands",
      "both crouched over a rock pool, heads together",
      "both bracing against the wind, hair streaming",
      "both sitting on a log, wrapped in a blanket",
      "both striding into the wind, the open land spread out around them",
      "both lying in the heather, looking at the sky",
      "both sharing a flask on a rock, backs to the weather",
      "one pointing out a bird, the other raising binoculars",
      "both standing at the edge, arms out, the drop below",
      "both scrambling up the rock, hands reaching",
      "one steadying the other across the stepping stones",
      "both leaning together against the rock, catching their breath",
      "both walking toward the horizon, shadows long",
      "both sitting in the grass, a flask between them, watching the herd",
      "both with arms spread wide, running into the wind",
      "both sheltering under one blanket as the weather turns"
    ],
    "looks": [
      "waxed jacket and wool hat each",
      "earth-toned layers and boots each",
      "green field shirt and trail trousers each",
      "oilskin and wellies each",
      "chunky knit and rolled jeans each",
      "raincoat and wool scarf each",
      "tweed jacket and boots each",
      "fleece and waterproof trousers each",
      "wax coat and flat cap each",
      "walking boots and windproof jackets each",
      "light rain jackets and trail shorts each",
      "rolled-up trousers and sturdy shoes each",
      "wool coat and scarf each",
      "embroidered jacket and sturdy boots each",
      "sun hat and loose shirt each"
    ],
    "affinities": {
      "human vs. nature": {
        "locs": [
          "dense forest clearing shafts of light",
          "ancient woodland root tangle",
          "old growth redwood base"
        ],
        "poses": [
          "both walking single file, ferns brushing their knees",
          "one lifting the other over a fallen log",
          "both sitting against a huge trunk, listening"
        ],
        "looks": [
          "waxed jacket and wool hat each",
          "earth-toned layers and boots each",
          "green field shirt and trail trousers each"
        ]
      },
      "shelter vs. exposure": {
        "locs": [
          "bog moorland at dusk",
          "heath in flower purple wide",
          "limestone pavement bare"
        ],
        "poses": [
          "both striding into the wind, the open land spread out around them",
          "both lying in the heather, looking at the sky",
          "both sharing a flask on a rock, backs to the weather"
        ],
        "looks": [
          "tweed jacket and boots each",
          "fleece and waterproof trousers each",
          "wax coat and flat cap each"
        ]
      },
      "tamed vs. feral": {
        "locs": [
          "open grassland in wind",
          "Hebrides machair wildflowers",
          "Sardinian maquis scrub"
        ],
        "poses": [
          "both walking toward the horizon, shadows long",
          "both sitting in the grass, a flask between them, watching the herd",
          "both with arms spread wide, running into the wind"
        ],
        "looks": [
          "wool coat and scarf each",
          "embroidered jacket and sturdy boots each",
          "sun hat and loose shirt each"
        ]
      },
      "found vs. lost": {
        "locs": [
          "New Forest ancient oak hollow",
          "Norwegian birch forest autumn",
          "Swedish elk forest dawn"
        ],
        "poses": [
          "one lifting the other over a fallen log",
          "both sitting against a huge trunk, listening",
          "both looking up, hands on the bark, awestruck"
        ],
        "looks": [
          "earth-toned layers and boots each",
          "green field shirt and trail trousers each",
          "waxed jacket and wool hat each"
        ]
      },
      "still vs. alive": {
        "locs": [
          "tidal flat at low tide exposed",
          "estuarine mudflat wide sky",
          "sand dune blowout hollow"
        ],
        "poses": [
          "both running along the tideline, shoes in their hands",
          "both crouched over a rock pool, heads together",
          "both bracing against the wind, hair streaming"
        ],
        "looks": [
          "oilskin and wellies each",
          "chunky knit and rolled jeans each",
          "raincoat and wool scarf each"
        ]
      },
      "dry vs. soaked": {
        "locs": [
          "flint shingle beach storm",
          "reed bed at dawn mist",
          "Exmoor coastline cliff path"
        ],
        "poses": [
          "both crouched over a rock pool, heads together",
          "both bracing against the wind, hair streaming",
          "both sitting on a log, wrapped in a blanket"
        ],
        "looks": [
          "chunky knit and rolled jeans each",
          "raincoat and wool scarf each",
          "oilskin and wellies each"
        ]
      },
      "built vs. grown": {
        "locs": [
          "Galician mountain forest green",
          "Bhutanese forest monastery visible above",
          "New Zealand beech forest"
        ],
        "poses": [
          "both sitting against a huge trunk, listening",
          "both looking up, hands on the bark, awestruck",
          "both walking single file, ferns brushing their knees"
        ],
        "looks": [
          "green field shirt and trail trousers each",
          "waxed jacket and wool hat each",
          "earth-toned layers and boots each"
        ]
      },
      "fragile vs. permanent": {
        "locs": [
          "cliff face at golden hour lichen-covered",
          "river gorge base spray rising",
          "chalk downland escarpment edge"
        ],
        "poses": [
          "both standing at the edge, arms out, the drop below",
          "both scrambling up the rock, hands reaching",
          "one steadying the other across the stepping stones"
        ],
        "looks": [
          "walking boots and windproof jackets each",
          "light rain jackets and trail shorts each",
          "rolled-up trousers and sturdy shoes each"
        ]
      },
      "instinct vs. reason": {
        "locs": [
          "peat highland loch reflected",
          "Welsh upland reservoir edge",
          "Peak District gritstone edge"
        ],
        "poses": [
          "both lying in the heather, looking at the sky",
          "both sharing a flask on a rock, backs to the weather",
          "one pointing out a bird, the other raising binoculars"
        ],
        "looks": [
          "fleece and waterproof trousers each",
          "wax coat and flat cap each",
          "tweed jacket and boots each"
        ]
      },
      "home vs. nowhere": {
        "locs": [
          "Georgian Caucasus meadow",
          "Mongolian steppe endless",
          "Kyrgyz alpine pasture yurt distant"
        ],
        "poses": [
          "both sitting in the grass, a flask between them, watching the herd",
          "both with arms spread wide, running into the wind",
          "both sheltering under one blanket as the weather turns"
        ],
        "looks": [
          "embroidered jacket and sturdy boots each",
          "sun hat and loose shirt each",
          "wool coat and scarf each"
        ]
      },
      "cultivated vs. wild": {
        "locs": [
          "Tibetan plateau wind-scoured",
          "Indian hill station mist",
          "Sri Lanka highland tea"
        ],
        "poses": [
          "both with arms spread wide, running into the wind",
          "both sheltering under one blanket as the weather turns",
          "both walking toward the horizon, shadows long"
        ],
        "looks": [
          "sun hat and loose shirt each",
          "wool coat and scarf each",
          "embroidered jacket and sturdy boots each"
        ]
      },
      "noise vs. silence": {
        "locs": [
          "Lake District fell top",
          "Dartmoor tor wind",
          "Cairngorm plateau tundra"
        ],
        "poses": [
          "both sharing a flask on a rock, backs to the weather",
          "one pointing out a bird, the other raising binoculars",
          "both striding into the wind, the open land spread out around them"
        ],
        "looks": [
          "wax coat and flat cap each",
          "tweed jacket and boots each",
          "fleece and waterproof trousers each"
        ]
      },
      "trail vs. off-trail": {
        "locs": [
          "Scottish glen river crossing",
          "Skye Cuillin black rock",
          "Corsican gorge river"
        ],
        "poses": [
          "both scrambling up the rock, hands reaching",
          "one steadying the other across the stepping stones",
          "both leaning together against the rock, catching their breath"
        ],
        "looks": [
          "light rain jackets and trail shorts each",
          "rolled-up trousers and sturdy shoes each",
          "walking boots and windproof jackets each"
        ]
      },
      "map vs. terrain": {
        "locs": [
          "Kiwi rainforest fern gully",
          "dense forest clearing shafts of light",
          "ancient woodland root tangle"
        ],
        "poses": [
          "both looking up, hands on the bark, awestruck",
          "both walking single file, ferns brushing their knees",
          "one lifting the other over a fallen log"
        ],
        "looks": [
          "waxed jacket and wool hat each",
          "earth-toned layers and boots each",
          "green field shirt and trail trousers each"
        ]
      },
      "body vs. elements": {
        "locs": [
          "Pembrokeshire sea stack distant",
          "Finnish lake island landing",
          "Baltic sea coast pine"
        ],
        "poses": [
          "both bracing against the wind, hair streaming",
          "both sitting on a log, wrapped in a blanket",
          "both running along the tideline, shoes in their hands"
        ],
        "looks": [
          "raincoat and wool scarf each",
          "oilskin and wellies each",
          "chunky knit and rolled jeans each"
        ]
      },
      "small vs. vast": {
        "locs": [
          "Australian blue mountain heath",
          "Tasmanian alpine meadow",
          "open grassland in wind"
        ],
        "poses": [
          "both sheltering under one blanket as the weather turns",
          "both walking toward the horizon, shadows long",
          "both sitting in the grass, a flask between them, watching the herd"
        ],
        "looks": [
          "wool coat and scarf each",
          "embroidered jacket and sturdy boots each",
          "sun hat and loose shirt each"
        ]
      },
      "familiar vs. unknown": {
        "locs": [
          "Estonian bog wooden walkway",
          "bog moorland at dusk",
          "heath in flower purple wide"
        ],
        "poses": [
          "one pointing out a bird, the other raising binoculars",
          "both striding into the wind, the open land spread out around them",
          "both lying in the heather, looking at the sky"
        ],
        "looks": [
          "tweed jacket and boots each",
          "fleece and waterproof trousers each",
          "wax coat and flat cap each"
        ]
      },
      "fed vs. hungry": {
        "locs": [
          "Croatian karst spring",
          "Slovenian Triglav plateau",
          "cliff face at golden hour lichen-covered"
        ],
        "poses": [
          "one steadying the other across the stepping stones",
          "both leaning together against the rock, catching their breath",
          "both standing at the edge, arms out, the drop below"
        ],
        "looks": [
          "rolled-up trousers and sturdy shoes each",
          "walking boots and windproof jackets each",
          "light rain jackets and trail shorts each"
        ]
      },
      "warm vs. cold night": {
        "locs": [
          "Hebrides machair wildflowers",
          "Sardinian maquis scrub",
          "Georgian Caucasus meadow"
        ],
        "poses": [
          "both walking toward the horizon, shadows long",
          "both sitting in the grass, a flask between them, watching the herd",
          "both with arms spread wide, running into the wind"
        ],
        "looks": [
          "embroidered jacket and sturdy boots each",
          "sun hat and loose shirt each",
          "wool coat and scarf each"
        ]
      },
      "watched vs. alone": {
        "locs": [
          "Breton coastal heathland",
          "Turkish mountain lake turquoise",
          "tidal flat at low tide exposed"
        ],
        "poses": [
          "both sitting on a log, wrapped in a blanket",
          "both running along the tideline, shoes in their hands",
          "both crouched over a rock pool, heads together"
        ],
        "looks": [
          "oilskin and wellies each",
          "chunky knit and rolled jeans each",
          "raincoat and wool scarf each"
        ]
      }
    },
    "promptSuffix": "Colour grade: natural light only, as the place gives it."
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
      "Amazon river camp at dawn",
      "Sumatra jungle river crossing",
      "Ecuador Amazon tributary camp",
      "Pantanal waterway jungle edge Brazil",
      "Orinoco delta mangrove channel",
      "Mekong river bank jungle Cambodia",
      "Irrawaddy river jungle bank Myanmar",
      "Salween river jungle edge",
      "Sabah jungle river crossing",
      "Sarawak longhouse river arrival",
      "Trinidad Caroni swamp dawn",
      "Costa Rica cloud forest mist",
      "Papua New Guinea highland trail",
      "Peru cloud forest epiphyte trees",
      "Rwanda gorilla trekking forest",
      "Uganda Bwindi forest trail",
      "Kinabalu rainforest lower slope",
      "Mindanao highland forest trail",
      "Puerto Rico El Yunque cloud forest",
      "Jamaica Blue Mountain forest",
      "Trinidad Northern Range forest",
      "Cambodia temple overgrown vines",
      "Thailand hill tribe forest edge",
      "Vietnam karst limestone jungle",
      "Belize cenote jungle clearing",
      "Guatemala Tikal temple above canopy",
      "Mexico Yucatan jungle ruin",
      "Luzon rice terrace edge forest",
      "Borneo rainforest canopy walkway",
      "Daintree rainforest Queensland",
      "Congo basin clearing giant trees",
      "Sri Lanka jungle leopard territory",
      "India Corbett forest trail edge",
      "Kenya jungle border savannah",
      "Madagascar rainforest lemur clearing",
      "Comoros forest ancient tree",
      "Sulawesi jungle crater lake",
      "Flores jungle volcanic forest",
      "Hawaii fern gully waterfall",
      "Maui bamboo forest path",
      "Grenada Grand Etang crater forest",
      "Dominica rainforest river gorge",
      "Martinique Pelée lower forest",
      "Guadeloupe volcanic forest",
      "Reunion Cirque de Cilaos",
      "Philippines Palawan jungle cove",
      "Kauai Na Pali coast jungle",
      "St Lucia banana plantation edge",
      "Seychelles Vallée de Mai palm",
      "Mauritius Black River Gorges"
    ],
    "poses": [
      "both wading waist-deep, holding their packs overhead",
      "one steering the narrow boat, the other trailing a hand in the current",
      "both crouched at the bank, drinking from cupped hands",
      "both laughing as the rain hammers down, soaked to the skin",
      "both pushing through dripping leaves, hand in hand",
      "one pointing at a bird in the mist, the other raising binoculars",
      "both crossing a swaying rope bridge, step by step",
      "both standing very still, listening to the dawn chorus",
      "both climbing worn stone steps, roots curling around them",
      "one brushing moss from a carving, the other holding a torch",
      "both sitting on a fallen block, looking up at the green ceiling",
      "both small beneath the huge, vine-wrapped stone",
      "both crouched in the shade, binoculars raised, frozen",
      "one holding back a branch for the other, both eyes wide",
      "both lying flat in the grass, watching something move",
      "one whispering and pointing, the other mid-step, perfectly still",
      "both craning to see the top of the falls, spray on their faces",
      "both scrambling over wet rocks, laughing",
      "both standing at the edge of the crater, mist swirling",
      "both bathing in the pool beneath the cascade, hair streaming",
      "both strolling between the palms, bags swinging",
      "both sitting on a log at the water's edge, eating fruit",
      "both laughing, a banana leaf held over their heads",
      "both climbing the steps, hands full of flowers"
    ],
    "looks": [
      "quick-dry shirts and rolled trousers each",
      "sun hats and lightweight long sleeves each",
      "waterproof ponchos over trail clothes each",
      "rain jackets and hiking boots each",
      "long sleeves and sun hats each",
      "light waterproofs and neck scarves each",
      "linen shirts and canvas trousers each",
      "explorer's vest and boots each",
      "light cotton layers and wide-brimmed hats each",
      "khaki safari shirts and trousers each",
      "muted green long sleeves and boots each",
      "field vests and sun hats each",
      "swimwear and water shoes each",
      "quick-dry shorts and sun shirts each",
      "light cotton clothes, soaked each",
      "bright printed shirts and shorts each",
      "light linen dress and open shirt each",
      "straw hats and loose cotton each"
    ],
    "affinities": {
      "canopy vs. floor": {
        "locs": [
          "Borneo rainforest canopy walkway",
          "Daintree rainforest Queensland",
          "Congo basin clearing giant trees"
        ],
        "poses": [
          "both crouched in the shade, binoculars raised, frozen",
          "one holding back a branch for the other, both eyes wide",
          "both lying flat in the grass, watching something move"
        ],
        "looks": [
          "khaki safari shirts and trousers each",
          "muted green long sleeves and boots each",
          "field vests and sun hats each"
        ]
      },
      "predator vs. prey": {
        "locs": [
          "Sri Lanka jungle leopard territory",
          "India Corbett forest trail edge",
          "Kenya jungle border savannah"
        ],
        "poses": [
          "one holding back a branch for the other, both eyes wide",
          "both lying flat in the grass, watching something move",
          "one whispering and pointing, the other mid-step, perfectly still"
        ],
        "looks": [
          "muted green long sleeves and boots each",
          "field vests and sun hats each",
          "khaki safari shirts and trousers each"
        ]
      },
      "ancient vs. alive": {
        "locs": [
          "Cambodia temple overgrown vines",
          "Thailand hill tribe forest edge",
          "Vietnam karst limestone jungle"
        ],
        "poses": [
          "both climbing worn stone steps, roots curling around them",
          "one brushing moss from a carving, the other holding a torch",
          "both sitting on a fallen block, looking up at the green ceiling"
        ],
        "looks": [
          "linen shirts and canvas trousers each",
          "explorer's vest and boots each",
          "light cotton layers and wide-brimmed hats each"
        ]
      },
      "light vs. undergrowth": {
        "locs": [
          "Costa Rica cloud forest mist",
          "Papua New Guinea highland trail",
          "Peru cloud forest epiphyte trees"
        ],
        "poses": [
          "both pushing through dripping leaves, hand in hand",
          "one pointing at a bird in the mist, the other raising binoculars",
          "both crossing a swaying rope bridge, step by step"
        ],
        "looks": [
          "rain jackets and hiking boots each",
          "long sleeves and sun hats each",
          "light waterproofs and neck scarves each"
        ]
      },
      "track vs. trailless": {
        "locs": [
          "Rwanda gorilla trekking forest",
          "Uganda Bwindi forest trail",
          "Kinabalu rainforest lower slope"
        ],
        "poses": [
          "one pointing at a bird in the mist, the other raising binoculars",
          "both crossing a swaying rope bridge, step by step",
          "both standing very still, listening to the dawn chorus"
        ],
        "looks": [
          "long sleeves and sun hats each",
          "light waterproofs and neck scarves each",
          "rain jackets and hiking boots each"
        ]
      },
      "wet vs. dry": {
        "locs": [
          "Amazon river camp at dawn",
          "Sumatra jungle river crossing",
          "Ecuador Amazon tributary camp"
        ],
        "poses": [
          "both wading waist-deep, holding their packs overhead",
          "one steering the narrow boat, the other trailing a hand in the current",
          "both crouched at the bank, drinking from cupped hands"
        ],
        "looks": [
          "quick-dry shirts and rolled trousers each",
          "sun hats and lightweight long sleeves each",
          "waterproof ponchos over trail clothes each"
        ]
      },
      "loud vs. silent jungle": {
        "locs": [
          "Mindanao highland forest trail",
          "Puerto Rico El Yunque cloud forest",
          "Jamaica Blue Mountain forest"
        ],
        "poses": [
          "both crossing a swaying rope bridge, step by step",
          "both standing very still, listening to the dawn chorus",
          "both pushing through dripping leaves, hand in hand"
        ],
        "looks": [
          "light waterproofs and neck scarves each",
          "rain jackets and hiking boots each",
          "long sleeves and sun hats each"
        ]
      },
      "known vs. uncharted": {
        "locs": [
          "Sulawesi jungle crater lake",
          "Flores jungle volcanic forest",
          "Hawaii fern gully waterfall"
        ],
        "poses": [
          "both craning to see the top of the falls, spray on their faces",
          "both scrambling over wet rocks, laughing",
          "both standing at the edge of the crater, mist swirling"
        ],
        "looks": [
          "swimwear and water shoes each",
          "quick-dry shorts and sun shirts each",
          "light cotton clothes, soaked each"
        ]
      },
      "ruin vs. root": {
        "locs": [
          "Belize cenote jungle clearing",
          "Guatemala Tikal temple above canopy",
          "Mexico Yucatan jungle ruin"
        ],
        "poses": [
          "one brushing moss from a carving, the other holding a torch",
          "both sitting on a fallen block, looking up at the green ceiling",
          "both small beneath the huge, vine-wrapped stone"
        ],
        "looks": [
          "explorer's vest and boots each",
          "light cotton layers and wide-brimmed hats each",
          "linen shirts and canvas trousers each"
        ]
      },
      "small vs. vast canopy": {
        "locs": [
          "Maui bamboo forest path",
          "Grenada Grand Etang crater forest",
          "Dominica rainforest river gorge"
        ],
        "poses": [
          "both scrambling over wet rocks, laughing",
          "both standing at the edge of the crater, mist swirling",
          "both bathing in the pool beneath the cascade, hair streaming"
        ],
        "looks": [
          "quick-dry shorts and sun shirts each",
          "light cotton clothes, soaked each",
          "swimwear and water shoes each"
        ]
      },
      "breathe vs. sweat": {
        "locs": [
          "Pantanal waterway jungle edge Brazil",
          "Orinoco delta mangrove channel",
          "Mekong river bank jungle Cambodia"
        ],
        "poses": [
          "one steering the narrow boat, the other trailing a hand in the current",
          "both crouched at the bank, drinking from cupped hands",
          "both laughing as the rain hammers down, soaked to the skin"
        ],
        "looks": [
          "sun hats and lightweight long sleeves each",
          "waterproof ponchos over trail clothes each",
          "quick-dry shirts and rolled trousers each"
        ]
      },
      "found vs. consumed": {
        "locs": [
          "Luzon rice terrace edge forest",
          "Cambodia temple overgrown vines",
          "Thailand hill tribe forest edge"
        ],
        "poses": [
          "both sitting on a fallen block, looking up at the green ceiling",
          "both small beneath the huge, vine-wrapped stone",
          "both climbing worn stone steps, roots curling around them"
        ],
        "looks": [
          "light cotton layers and wide-brimmed hats each",
          "linen shirts and canvas trousers each",
          "explorer's vest and boots each"
        ]
      },
      "species vs. human": {
        "locs": [
          "Madagascar rainforest lemur clearing",
          "Comoros forest ancient tree",
          "Borneo rainforest canopy walkway"
        ],
        "poses": [
          "both lying flat in the grass, watching something move",
          "one whispering and pointing, the other mid-step, perfectly still",
          "both crouched in the shade, binoculars raised, frozen"
        ],
        "looks": [
          "field vests and sun hats each",
          "khaki safari shirts and trousers each",
          "muted green long sleeves and boots each"
        ]
      },
      "river vs. ridge": {
        "locs": [
          "Martinique Pelée lower forest",
          "Guadeloupe volcanic forest",
          "Reunion Cirque de Cilaos"
        ],
        "poses": [
          "both standing at the edge of the crater, mist swirling",
          "both bathing in the pool beneath the cascade, hair streaming",
          "both craning to see the top of the falls, spray on their faces"
        ],
        "looks": [
          "light cotton clothes, soaked each",
          "swimwear and water shoes each",
          "quick-dry shorts and sun shirts each"
        ]
      },
      "dawn vs. midday heat": {
        "locs": [
          "Philippines Palawan jungle cove",
          "Kauai Na Pali coast jungle",
          "St Lucia banana plantation edge"
        ],
        "poses": [
          "both strolling between the palms, bags swinging",
          "both sitting on a log at the water's edge, eating fruit",
          "both laughing, a banana leaf held over their heads"
        ],
        "looks": [
          "bright printed shirts and shorts each",
          "light linen dress and open shirt each",
          "straw hats and loose cotton each"
        ]
      },
      "tamed vs. feral": {
        "locs": [
          "Seychelles Vallée de Mai palm",
          "Mauritius Black River Gorges",
          "Philippines Palawan jungle cove"
        ],
        "poses": [
          "both sitting on a log at the water's edge, eating fruit",
          "both laughing, a banana leaf held over their heads",
          "both climbing the steps, hands full of flowers"
        ],
        "looks": [
          "light linen dress and open shirt each",
          "straw hats and loose cotton each",
          "bright printed shirts and shorts each"
        ]
      },
      "temple vs. tree": {
        "locs": [
          "Vietnam karst limestone jungle",
          "Belize cenote jungle clearing",
          "Guatemala Tikal temple above canopy"
        ],
        "poses": [
          "both small beneath the huge, vine-wrapped stone",
          "both climbing worn stone steps, roots curling around them",
          "one brushing moss from a carving, the other holding a torch"
        ],
        "looks": [
          "linen shirts and canvas trousers each",
          "explorer's vest and boots each",
          "light cotton layers and wide-brimmed hats each"
        ]
      },
      "map vs. moss": {
        "locs": [
          "Trinidad Northern Range forest",
          "Costa Rica cloud forest mist",
          "Papua New Guinea highland trail"
        ],
        "poses": [
          "both standing very still, listening to the dawn chorus",
          "both pushing through dripping leaves, hand in hand",
          "one pointing at a bird in the mist, the other raising binoculars"
        ],
        "looks": [
          "rain jackets and hiking boots each",
          "long sleeves and sun hats each",
          "light waterproofs and neck scarves each"
        ]
      },
      "creature vs. stillness": {
        "locs": [
          "Irrawaddy river jungle bank Myanmar",
          "Salween river jungle edge",
          "Sabah jungle river crossing"
        ],
        "poses": [
          "both crouched at the bank, drinking from cupped hands",
          "both laughing as the rain hammers down, soaked to the skin",
          "both wading waist-deep, holding their packs overhead"
        ],
        "looks": [
          "waterproof ponchos over trail clothes each",
          "quick-dry shirts and rolled trousers each",
          "sun hats and lightweight long sleeves each"
        ]
      },
      "enter vs. return": {
        "locs": [
          "Sarawak longhouse river arrival",
          "Trinidad Caroni swamp dawn",
          "Amazon river camp at dawn"
        ],
        "poses": [
          "both laughing as the rain hammers down, soaked to the skin",
          "both wading waist-deep, holding their packs overhead",
          "one steering the narrow boat, the other trailing a hand in the current"
        ],
        "looks": [
          "quick-dry shirts and rolled trousers each",
          "sun hats and lightweight long sleeves each",
          "waterproof ponchos over trail clothes each"
        ]
      }
    },
    "promptSuffix": "Colour grade: deep, saturated greens with shafts of filtered light. The jungle should feel dense and enveloping — not a backdrop but a presence. Humidity, dappled light through canopy, the subjects dwarfed by vegetation."
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
          "Sahara dune sea sunset two figures tiny horizon",
          "Moroccan desert Merzouga dune sea sunset gold",
          "Rub al Khali Empty Quarter dune sea endless"
        ],
        "poses": [
          "both tiny on a dune crest, long shadows stretching",
          "both sliding down the slope, sand streaming",
          "both sitting side by side, watching the colour change"
        ],
        "looks": [
          "wrapped linen cloth and scarf each",
          "loose cotton shirt and trousers each",
          "long tunic and head cloth each"
        ]
      },
      "ancient vs. present": {
        "locs": [
          "Wadi Rum red rock Jordan dawn long shadow",
          "Jordanian desert ancient Nabataean rock city Petra dusk",
          "Arizona Monument Valley sandstone butte long shadow"
        ],
        "poses": [
          "both standing against the towering rock, small and still",
          "both climbing a ridge, hands reaching back",
          "both resting in the shade of an overhang"
        ],
        "looks": [
          "dusty explorer jacket and wide hat each",
          "rolled-up sleeves and sturdy boots each",
          "khaki shirt and canvas trousers each"
        ]
      },
      "heat vs. cold night": {
        "locs": [
          "Atacama Chile night sky clearest stars world",
          "Sahara oasis palm trees mirage heat shimmer",
          "Wadi Rum desert camp fire night stars"
        ],
        "poses": [
          "both sitting close by the fire, faces lit gold",
          "both gazing up at an explosion of stars",
          "both leading a camel at the edge of dawn"
        ],
        "looks": [
          "thick wrapped layers against the night chill each",
          "wool blanket over linen each",
          "dark jackets and scarves each"
        ]
      },
      "the mirage vs. the real": {
        "locs": [
          "Death Valley salt flat noon bleached vast white",
          "White Sands New Mexico gypsum dune noon",
          "Atacama salt flat mirror sky reflection"
        ],
        "poses": [
          "both walking apart across the white, shadows long",
          "both lying back on the flat, staring at the sky",
          "both mirrored in the thin sheet of water"
        ],
        "looks": [
          "pale cotton outfit and sunglasses each",
          "bleached linen and straw hat each",
          "white shirt and light trousers each"
        ]
      },
      "survival vs. surrender": {
        "locs": [
          "Gobi Mongolia vast flat sand storm approaching",
          "Sonoran desert saguaro cactus sunset Arizona",
          "Great Sand Dunes Colorado snow mountain beyond"
        ],
        "poses": [
          "both bracing against the wind, scarves whipping",
          "both watching a storm wall roll toward them",
          "both kneeling to examine something strange in the sand"
        ],
        "looks": [
          "goggles and dust scarves each",
          "expedition layers and gloves each",
          "windbreaker and wrapped face cloth each"
        ]
      },
      "the dune vs. the horizon": {
        "locs": [
          "Rub al Khali dune crest wind sand stream",
          "Sossusvlei Namibia dune red iron oxide dawn",
          "Namib vlei dead trees orange dune dawn iconic"
        ],
        "poses": [
          "both sliding down the slope, sand streaming",
          "both sitting side by side, watching the colour change",
          "both tiny on a dune crest, long shadows stretching"
        ],
        "looks": [
          "loose cotton shirt and trousers each",
          "long tunic and head cloth each",
          "wrapped linen cloth and scarf each"
        ]
      },
      "silence vs. the wind": {
        "locs": [
          "Simpson Desert Australia red dune noon",
          "Taklamakan China Silk Road ancient route",
          "Namib fog coastal desert ghost ship distant"
        ],
        "poses": [
          "both watching a storm wall roll toward them",
          "both kneeling to examine something strange in the sand",
          "both bracing against the wind, scarves whipping"
        ],
        "looks": [
          "expedition layers and gloves each",
          "windbreaker and wrapped face cloth each",
          "goggles and dust scarves each"
        ]
      },
      "small vs. infinite": {
        "locs": [
          "Lencois Maranhenses Brazil white dune lagoon",
          "Black Rock Desert Nevada vast flat nothing",
          "Danakil Depression Ethiopia hottest place earth"
        ],
        "poses": [
          "both lying back on the flat, staring at the sky",
          "both mirrored in the thin sheet of water",
          "both walking apart across the white, shadows long"
        ],
        "looks": [
          "bleached linen and straw hat each",
          "white shirt and light trousers each",
          "pale cotton outfit and sunglasses each"
        ]
      },
      "lost vs. found": {
        "locs": [
          "Death Valley Zabriskie Point badlands dawn",
          "Painted Desert Arizona colour band formation",
          "Negev desert Ramon crater vast geological"
        ],
        "poses": [
          "both climbing a ridge, hands reaching back",
          "both resting in the shade of an overhang",
          "both standing against the towering rock, small and still"
        ],
        "looks": [
          "rolled-up sleeves and sturdy boots each",
          "khaki shirt and canvas trousers each",
          "dusty explorer jacket and wide hat each"
        ]
      },
      "the oasis vs. the illusion": {
        "locs": [
          "Arabian desert camel caravan horizon line dawn",
          "Atacama Chile night sky clearest stars world",
          "Sahara oasis palm trees mirage heat shimmer"
        ],
        "poses": [
          "both gazing up at an explosion of stars",
          "both leading a camel at the edge of dawn",
          "both sitting close by the fire, faces lit gold"
        ],
        "looks": [
          "wool blanket over linen each",
          "dark jackets and scarves each",
          "thick wrapped layers against the night chill each"
        ]
      }
    },
    "locs": [
      "Sahara dune sea sunset two figures tiny horizon",
      "Moroccan desert Merzouga dune sea sunset gold",
      "Rub al Khali Empty Quarter dune sea endless",
      "Rub al Khali dune crest wind sand stream",
      "Sossusvlei Namibia dune red iron oxide dawn",
      "Namib vlei dead trees orange dune dawn iconic",
      "Wadi Rum red rock Jordan dawn long shadow",
      "Jordanian desert ancient Nabataean rock city Petra dusk",
      "Arizona Monument Valley sandstone butte long shadow",
      "Death Valley Zabriskie Point badlands dawn",
      "Painted Desert Arizona colour band formation",
      "Negev desert Ramon crater vast geological",
      "Judean desert cave dwelling ancient",
      "Death Valley salt flat noon bleached vast white",
      "White Sands New Mexico gypsum dune noon",
      "Atacama salt flat mirror sky reflection",
      "Lencois Maranhenses Brazil white dune lagoon",
      "Black Rock Desert Nevada vast flat nothing",
      "Danakil Depression Ethiopia hottest place earth",
      "Atacama Chile night sky clearest stars world",
      "Sahara oasis palm trees mirage heat shimmer",
      "Wadi Rum desert camp fire night stars",
      "Arabian desert camel caravan horizon line dawn",
      "Gobi Mongolia vast flat sand storm approaching",
      "Sonoran desert saguaro cactus sunset Arizona",
      "Great Sand Dunes Colorado snow mountain beyond",
      "Simpson Desert Australia red dune noon",
      "Taklamakan China Silk Road ancient route",
      "Namib fog coastal desert ghost ship distant",
      "Chilean Atacama lava field volcanic moon"
    ],
    "poses": [
      "both tiny on a dune crest, long shadows stretching",
      "both sliding down the slope, sand streaming",
      "both sitting side by side, watching the colour change",
      "both standing against the towering rock, small and still",
      "both climbing a ridge, hands reaching back",
      "both resting in the shade of an overhang",
      "both walking apart across the white, shadows long",
      "both lying back on the flat, staring at the sky",
      "both mirrored in the thin sheet of water",
      "both sitting close by the fire, faces lit gold",
      "both gazing up at an explosion of stars",
      "both leading a camel at the edge of dawn",
      "both bracing against the wind, scarves whipping",
      "both watching a storm wall roll toward them",
      "both kneeling to examine something strange in the sand"
    ],
    "looks": [
      "wrapped linen cloth and scarf each",
      "loose cotton shirt and trousers each",
      "long tunic and head cloth each",
      "dusty explorer jacket and wide hat each",
      "rolled-up sleeves and sturdy boots each",
      "khaki shirt and canvas trousers each",
      "pale cotton outfit and sunglasses each",
      "bleached linen and straw hat each",
      "white shirt and light trousers each",
      "thick wrapped layers against the night chill each",
      "wool blanket over linen each",
      "dark jackets and scarves each",
      "goggles and dust scarves each",
      "expedition layers and gloves each",
      "windbreaker and wrapped face cloth each"
    ],
    "promptSuffix": "Colour grade: the specific palettes of specific deserts — Wadi Rum red, Sahara gold, Death Valley bleached white, Atacama violet night. The scale of the land against the smallness of the person."
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
          "tropical downpour beach shelter dramatic",
          "Scottish highland sudden downpour open moor",
          "New York summer downpour steam street"
        ],
        "poses": [
          "both running for cover, laughing",
          "both pressed in a doorway, soaked and breathless",
          "both caught mid-sprint, clothes streaming"
        ],
        "looks": [
          "summer dress and light shirt, soaked each",
          "jeans and tee, soaked through each",
          "linen shirt and shorts, drenched each"
        ]
      },
      "the umbrella vs. the giving up": {
        "locs": [
          "London grey drizzle Waterloo Bridge umbrella commute",
          "Edinburgh drizzle grey castle behind mist",
          "Dublin drizzle grey Georgian street umbrella"
        ],
        "poses": [
          "both huddled close, shoulders touching",
          "both hurrying along, newspapers over their heads",
          "both stopped mid-step, looking up at the grey sky"
        ],
        "looks": [
          "wool coat and scarf each",
          "waterproof jacket and boots each",
          "raincoat and rubber boots each"
        ]
      },
      "before vs. after": {
        "locs": [
          "after rain Paris cobblestone reflection puddle golden",
          "after rain Tokyo neon reflection puddle night",
          "after rain London Victorian street reflection lamp"
        ],
        "poses": [
          "both stepping through puddles, reflections at their feet",
          "both looking up as the clouds break",
          "both leaning on a lamp post, wet and smiling"
        ],
        "looks": [
          "damp coat and bright scarf each",
          "wet hair and open jacket each",
          "rolled trousers and boots each"
        ]
      },
      "the drizzle vs. the downpour": {
        "locs": [
          "Glasgow drizzle grey tenement street",
          "Portland Oregon grey drizzle everyday",
          "London grey drizzle Waterloo Bridge umbrella commute"
        ],
        "poses": [
          "both huddled close, shoulders touching",
          "both hurrying along, newspapers over their heads",
          "both stopped mid-step, looking up at the grey sky"
        ],
        "looks": [
          "wool coat and scarf each",
          "waterproof jacket and boots each",
          "raincoat and rubber boots each"
        ]
      },
      "together in it vs. alone": {
        "locs": [
          "Mumbai monsoon first rain flooding street joy dancing",
          "Kerala monsoon paddy field rain dramatic",
          "Bangkok monsoon flood street motorbike spray"
        ],
        "poses": [
          "both arms open to the sky, drenched and laughing",
          "both wading through ankle-deep water, shoes in hand",
          "both dancing in the flood, faces turned up"
        ],
        "looks": [
          "soaked bright cotton clothes each",
          "wet shirts clinging, bare feet each",
          "thin dresses and rolled trousers, drenched each"
        ]
      },
      "refreshed vs. ruined": {
        "locs": [
          "Paris summer downpour cafe awning shelter",
          "Rome sudden downpour fountain piazza",
          "tropical downpour beach shelter dramatic"
        ],
        "poses": [
          "both running for cover, laughing",
          "both pressed in a doorway, soaked and breathless",
          "both caught mid-sprint, clothes streaming"
        ],
        "looks": [
          "summer dress and light shirt, soaked each",
          "jeans and tee, soaked through each",
          "linen shirt and shorts, drenched each"
        ]
      },
      "the grey vs. the colour after": {
        "locs": [
          "rainbow after storm field dramatic",
          "after rain Paris cobblestone reflection puddle golden",
          "after rain Tokyo neon reflection puddle night"
        ],
        "poses": [
          "both stepping through puddles, reflections at their feet",
          "both looking up as the clouds break",
          "both leaning on a lamp post, wet and smiling"
        ],
        "looks": [
          "damp coat and bright scarf each",
          "wet hair and open jacket each",
          "rolled trousers and boots each"
        ]
      },
      "rain as blessing vs. curse": {
        "locs": [
          "Hanoi monsoon street rain dramatic tropical",
          "Kolkata monsoon street rain reflection puddle",
          "after monsoon street reflection India dramatic"
        ],
        "poses": [
          "both arms open to the sky, drenched and laughing",
          "both wading through ankle-deep water, shoes in hand",
          "both dancing in the flood, faces turned up"
        ],
        "looks": [
          "soaked bright cotton clothes each",
          "wet shirts clinging, bare feet each",
          "thin dresses and rolled trousers, drenched each"
        ]
      },
      "waiting it out vs. walking through": {
        "locs": [
          "Blade Runner noir rain alley neon wet reflection night",
          "Los Angeles rain 1940s noir street",
          "Chandler rain San Francisco fog hill night"
        ],
        "poses": [
          "both walking fast, collars up, shoulders hunched",
          "both pressed against a wall, watching the road",
          "one shielding the other beneath a coat"
        ],
        "looks": [
          "long dark coat and turned-up collar each",
          "trench coat and fedora each",
          "leather jacket and glistening hair each"
        ]
      },
      "the sound of it vs. the silence after": {
        "locs": [
          "Icelandic rain dramatic rainbow cliff",
          "Vancouver rain forest dramatic mist",
          "Japanese rain bamboo forest atmospheric"
        ],
        "poses": [
          "both small and still beneath the vast wet landscape",
          "both standing with hoods up, watching the mist rise",
          "both facing the weather, hair whipping"
        ],
        "looks": [
          "waterproof jacket and hood each",
          "hiking rain gear each",
          "long coat and boots each"
        ]
      }
    },
    "locs": [
      "Mumbai monsoon first rain flooding street joy dancing",
      "Kerala monsoon paddy field rain dramatic",
      "Bangkok monsoon flood street motorbike spray",
      "Hanoi monsoon street rain dramatic tropical",
      "Kolkata monsoon street rain reflection puddle",
      "after monsoon street reflection India dramatic",
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
      "rainbow after storm field dramatic"
    ],
    "poses": [
      "both arms open to the sky, drenched and laughing",
      "both wading through ankle-deep water, shoes in hand",
      "both dancing in the flood, faces turned up",
      "both walking fast, collars up, shoulders hunched",
      "both pressed against a wall, watching the road",
      "one shielding the other beneath a coat",
      "both huddled close, shoulders touching",
      "both hurrying along, newspapers over their heads",
      "both stopped mid-step, looking up at the grey sky",
      "both running for cover, laughing",
      "both pressed in a doorway, soaked and breathless",
      "both caught mid-sprint, clothes streaming",
      "both small and still beneath the vast wet landscape",
      "both standing with hoods up, watching the mist rise",
      "both facing the weather, hair whipping",
      "both stepping through puddles, reflections at their feet",
      "both looking up as the clouds break",
      "both leaning on a lamp post, wet and smiling"
    ],
    "looks": [
      "soaked bright cotton clothes each",
      "wet shirts clinging, bare feet each",
      "thin dresses and rolled trousers, drenched each",
      "long dark coat and turned-up collar each",
      "trench coat and fedora each",
      "leather jacket and glistening hair each",
      "wool coat and scarf each",
      "waterproof jacket and boots each",
      "raincoat and rubber boots each",
      "summer dress and light shirt, soaked each",
      "jeans and tee, soaked through each",
      "linen shirt and shorts, drenched each",
      "waterproof jacket and hood each",
      "hiking rain gear each",
      "long coat and boots each",
      "damp coat and bright scarf each",
      "wet hair and open jacket each",
      "rolled trousers and boots each"
    ],
    "promptSuffix": "Colour grade: the specific quality of different rains — Mumbai monsoon first rain joy, London grey drizzle flat, noir rain neon reflection, tropical downpour dramatic. The rain defines the world."
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
      "Roman forum at sunrise empty",
      "Colosseum interior arch looking up",
      "Parthenon pillars Athens dusk",
      "Hadrian's Wall northern edge",
      "Vindolanda excavation trench",
      "Egyptian pyramid at dawn no tourists",
      "Angkor Wat sunrise reflection pool",
      "Machu Picchu sun gate first light",
      "Mesa Verde cliff dwelling Colorado",
      "Chaco Canyon ruins New Mexico",
      "Cahokia mounds Illinois",
      "Serpent Mound Ohio aerial view possible",
      "Cahokia Monks Mound base",
      "Stonehenge solstice dawn mist",
      "Avebury stone circle walking",
      "Newgrange Ireland winter solstice",
      "Viking longship museum interior",
      "Jorvik Viking Centre York exterior",
      "Norman castle motte and bailey",
      "Medieval cathedral chapter house",
      "Tudor manor hall interior timber",
      "crumbling castle courtyard Scotland",
      "abandoned monastery cloister Portugal",
      "colonial port warehouse Jamaica",
      "Bunker Hill monument Boston",
      "Independence Hall Philadelphia",
      "Colonial Williamsburg street",
      "Jamestown reconstruction Virginia",
      "Plymouth Rock Massachusetts coast",
      "Salem witch trial memorial",
      "battlefield memorial dawn silence",
      "Civil War battlefield marker dawn",
      "Napoleonic battlefield monument France",
      "Waterloo battlefield Belgium",
      "Gettysburg battlefield Pennsylvania",
      "Antietam battlefield Maryland dawn",
      "Little Bighorn battlefield Montana",
      "Tombstone Arizona OK Corral",
      "Alamo San Antonio Texas exterior",
      "Berlin Wall remaining section",
      "Checkpoint Charlie museum exterior",
      "Dresden Frauenkirche rebuilt exterior"
    ],
    "poses": [
      "both standing between the columns, heads tilted toward the light",
      "one tracing a carved inscription, the other reading aloud",
      "both seated on worn stone steps, quiet and thoughtful",
      "both small before the vast stonework, awestruck",
      "both climbing the ancient steps, hand in hand",
      "both kneeling to touch the carved wall",
      "both standing at the edge of the old stone, looking out",
      "both climbing the earthen steps, hand in hand",
      "both kneeling to touch the weathered wall",
      "both standing among the giant stones, dwarfed by them",
      "both walking the ring at first light, mist at their feet",
      "both with a hand on the standing stone, eyes closed",
      "both standing side by side, shields at their backs",
      "both standing before the carved prow, chins high",
      "both sharing a horn of mead by the fire",
      "both on the rampart, cloaks blowing",
      "one reading from a manuscript, the other listening",
      "both sitting by the fire in the great hall, goblets raised",
      "both standing before the old building, formal and proud",
      "both walking the dirt road, arm in arm",
      "both reading a proclamation, heads together",
      "both silent, heads bowed, hats in hand",
      "one placing flowers, the other standing very still",
      "both gazing across the quiet fields at dawn",
      "both squared up in the dusty road, hands near their belts",
      "both leaning on the weathered wall, squinting",
      "both walking the boardwalk, spurs jingling",
      "both standing before the old wall, solemn and close",
      "both looking through a gap to the other side",
      "both walking side by side, collars up"
    ],
    "looks": [
      "draped linen toga and sandals each",
      "Greek chiton and peplos each",
      "Roman tunic and cloak each",
      "draped white linen and broad gold collar each",
      "silk wrap and gilded headdress each",
      "pleated linen robe and jewelled sandals each",
      "woven wool mantle and beaded jewellery each",
      "feather cloak and shell necklace each",
      "embroidered cotton tunic and sandals each",
      "rough woven wool and fur wraps each",
      "animal-hide cloak and bone jewellery each",
      "plain linen tunic and leather belt each",
      "fur-trimmed cloak and wool tunic each",
      "woven wool dress and brooches each",
      "leather jerkin and arm rings each",
      "long gown and belted surcoat each",
      "brocade doublet and gown each",
      "hooded cloak and wool tunic each",
      "tricorn hat and waistcoat each",
      "bonnet and long colonial gown each",
      "frock coat and breeches each",
      "period military greatcoat each",
      "dark mourning dress and shawl each",
      "frock coat and top hat each",
      "duster coat and wide-brimmed hat each",
      "gingham dress and shawl each",
      "vest and gun belt each",
      "1950s coat and hat each",
      "long wool coat and scarf each",
      "tailored suit and trench coat each"
    ],
    "affinities": {
      "past vs. present": {
        "locs": [
          "Berlin Wall remaining section",
          "Checkpoint Charlie museum exterior",
          "Dresden Frauenkirche rebuilt exterior"
        ],
        "poses": [
          "both standing before the old wall, solemn and close",
          "both looking through a gap to the other side",
          "both walking side by side, collars up"
        ],
        "looks": [
          "1950s coat and hat each",
          "long wool coat and scarf each",
          "tailored suit and trench coat each"
        ]
      },
      "remembered vs. forgotten": {
        "locs": [
          "battlefield memorial dawn silence",
          "Civil War battlefield marker dawn",
          "Napoleonic battlefield monument France"
        ],
        "poses": [
          "both silent, heads bowed, hats in hand",
          "one placing flowers, the other standing very still",
          "both gazing across the quiet fields at dawn"
        ],
        "looks": [
          "period military greatcoat each",
          "dark mourning dress and shawl each",
          "frock coat and top hat each"
        ]
      },
      "ruin vs. monument": {
        "locs": [
          "ancient amphitheater stepped seats Athens",
          "Roman forum at sunrise empty",
          "Colosseum interior arch looking up"
        ],
        "poses": [
          "both standing between the columns, heads tilted toward the light",
          "one tracing a carved inscription, the other reading aloud",
          "both seated on worn stone steps, quiet and thoughtful"
        ],
        "looks": [
          "draped linen toga and sandals each",
          "Greek chiton and peplos each",
          "Roman tunic and cloak each"
        ]
      },
      "conqueror vs. conquered": {
        "locs": [
          "Machu Picchu sun gate first light",
          "Mesa Verde cliff dwelling Colorado",
          "Chaco Canyon ruins New Mexico"
        ],
        "poses": [
          "both standing at the edge of the old stone, looking out",
          "both climbing the earthen steps, hand in hand",
          "both kneeling to touch the weathered wall"
        ],
        "looks": [
          "woven wool mantle and beaded jewellery each",
          "feather cloak and shell necklace each",
          "embroidered cotton tunic and sandals each"
        ]
      },
      "myth vs. record": {
        "locs": [
          "Stonehenge solstice dawn mist",
          "Avebury stone circle walking",
          "Newgrange Ireland winter solstice"
        ],
        "poses": [
          "both standing among the giant stones, dwarfed by them",
          "both walking the ring at first light, mist at their feet",
          "both with a hand on the standing stone, eyes closed"
        ],
        "looks": [
          "rough woven wool and fur wraps each",
          "animal-hide cloak and bone jewellery each",
          "plain linen tunic and leather belt each"
        ]
      },
      "preserved vs. decayed": {
        "locs": [
          "Egyptian pyramid at dawn no tourists",
          "Angkor Wat sunrise reflection pool"
        ],
        "poses": [
          "both small before the vast stonework, awestruck",
          "both climbing the ancient steps, hand in hand",
          "both kneeling to touch the carved wall"
        ],
        "looks": [
          "draped white linen and broad gold collar each",
          "silk wrap and gilded headdress each",
          "pleated linen robe and jewelled sandals each"
        ]
      },
      "era vs. eternity": {
        "locs": [
          "Stonehenge solstice dawn mist",
          "Avebury stone circle walking",
          "Newgrange Ireland winter solstice"
        ],
        "poses": [
          "both walking the ring at first light, mist at their feet",
          "both with a hand on the standing stone, eyes closed",
          "both standing among the giant stones, dwarfed by them"
        ],
        "looks": [
          "animal-hide cloak and bone jewellery each",
          "plain linen tunic and leather belt each",
          "rough woven wool and fur wraps each"
        ]
      },
      "ancestor vs. heir": {
        "locs": [
          "Viking longship museum interior",
          "Jorvik Viking Centre York exterior"
        ],
        "poses": [
          "both standing side by side, shields at their backs",
          "both standing before the carved prow, chins high",
          "both sharing a horn of mead by the fire"
        ],
        "looks": [
          "fur-trimmed cloak and wool tunic each",
          "woven wool dress and brooches each",
          "leather jerkin and arm rings each"
        ]
      },
      "silence vs. testimony": {
        "locs": [
          "Waterloo battlefield Belgium",
          "Gettysburg battlefield Pennsylvania",
          "Antietam battlefield Maryland dawn"
        ],
        "poses": [
          "one placing flowers, the other standing very still",
          "both gazing across the quiet fields at dawn",
          "both silent, heads bowed, hats in hand"
        ],
        "looks": [
          "dark mourning dress and shawl each",
          "frock coat and top hat each",
          "period military greatcoat each"
        ]
      },
      "stone vs. flesh": {
        "locs": [
          "Parthenon pillars Athens dusk",
          "Hadrian's Wall northern edge",
          "Vindolanda excavation trench"
        ],
        "poses": [
          "one tracing a carved inscription, the other reading aloud",
          "both seated on worn stone steps, quiet and thoughtful",
          "both standing between the columns, heads tilted toward the light"
        ],
        "looks": [
          "Greek chiton and peplos each",
          "Roman tunic and cloak each",
          "draped linen toga and sandals each"
        ]
      },
      "empire vs. dust": {
        "locs": [
          "Angkor Wat sunrise reflection pool",
          "Egyptian pyramid at dawn no tourists"
        ],
        "poses": [
          "both climbing the ancient steps, hand in hand",
          "both kneeling to touch the carved wall",
          "both small before the vast stonework, awestruck"
        ],
        "looks": [
          "silk wrap and gilded headdress each",
          "pleated linen robe and jewelled sandals each",
          "draped white linen and broad gold collar each"
        ]
      },
      "witness vs. unseen": {
        "locs": [
          "colonial port warehouse Jamaica",
          "Bunker Hill monument Boston",
          "Independence Hall Philadelphia"
        ],
        "poses": [
          "both standing before the old building, formal and proud",
          "both walking the dirt road, arm in arm",
          "both reading a proclamation, heads together"
        ],
        "looks": [
          "tricorn hat and waistcoat each",
          "bonnet and long colonial gown each",
          "frock coat and breeches each"
        ]
      },
      "timeless vs. dated": {
        "locs": [
          "Cahokia mounds Illinois",
          "Serpent Mound Ohio aerial view possible",
          "Cahokia Monks Mound base"
        ],
        "poses": [
          "both climbing the earthen steps, hand in hand",
          "both kneeling to touch the weathered wall",
          "both standing at the edge of the old stone, looking out"
        ],
        "looks": [
          "feather cloak and shell necklace each",
          "embroidered cotton tunic and sandals each",
          "woven wool mantle and beaded jewellery each"
        ]
      },
      "relic vs. ruin": {
        "locs": [
          "Norman castle motte and bailey",
          "Medieval cathedral chapter house",
          "Tudor manor hall interior timber"
        ],
        "poses": [
          "both on the rampart, cloaks blowing",
          "one reading from a manuscript, the other listening",
          "both sitting by the fire in the great hall, goblets raised"
        ],
        "looks": [
          "long gown and belted surcoat each",
          "brocade doublet and gown each",
          "hooded cloak and wool tunic each"
        ]
      },
      "archive vs. memory": {
        "locs": [
          "Colonial Williamsburg street",
          "Jamestown reconstruction Virginia",
          "Plymouth Rock Massachusetts coast"
        ],
        "poses": [
          "both walking the dirt road, arm in arm",
          "both reading a proclamation, heads together",
          "both standing before the old building, formal and proud"
        ],
        "looks": [
          "bonnet and long colonial gown each",
          "frock coat and breeches each",
          "tricorn hat and waistcoat each"
        ]
      },
      "revolution vs. order": {
        "locs": [
          "Salem witch trial memorial",
          "colonial port warehouse Jamaica",
          "Bunker Hill monument Boston"
        ],
        "poses": [
          "both reading a proclamation, heads together",
          "both standing before the old building, formal and proud",
          "both walking the dirt road, arm in arm"
        ],
        "looks": [
          "frock coat and breeches each",
          "tricorn hat and waistcoat each",
          "bonnet and long colonial gown each"
        ]
      },
      "crown vs. crowd": {
        "locs": [
          "crumbling castle courtyard Scotland",
          "abandoned monastery cloister Portugal",
          "Norman castle motte and bailey"
        ],
        "poses": [
          "one reading from a manuscript, the other listening",
          "both sitting by the fire in the great hall, goblets raised",
          "both on the rampart, cloaks blowing"
        ],
        "looks": [
          "brocade doublet and gown each",
          "hooded cloak and wool tunic each",
          "long gown and belted surcoat each"
        ]
      },
      "battlefield vs. peace": {
        "locs": [
          "Little Bighorn battlefield Montana",
          "battlefield memorial dawn silence",
          "Civil War battlefield marker dawn"
        ],
        "poses": [
          "both gazing across the quiet fields at dawn",
          "both silent, heads bowed, hats in hand",
          "one placing flowers, the other standing very still"
        ],
        "looks": [
          "frock coat and top hat each",
          "period military greatcoat each",
          "dark mourning dress and shawl each"
        ]
      },
      "inscription vs. erasure": {
        "locs": [
          "ancient amphitheater stepped seats Athens",
          "Roman forum at sunrise empty",
          "Colosseum interior arch looking up"
        ],
        "poses": [
          "both seated on worn stone steps, quiet and thoughtful",
          "both standing between the columns, heads tilted toward the light",
          "one tracing a carved inscription, the other reading aloud"
        ],
        "looks": [
          "Roman tunic and cloak each",
          "draped linen toga and sandals each",
          "Greek chiton and peplos each"
        ]
      },
      "then vs. now": {
        "locs": [
          "Tombstone Arizona OK Corral",
          "Alamo San Antonio Texas exterior"
        ],
        "poses": [
          "both squared up in the dusty road, hands near their belts",
          "both leaning on the weathered wall, squinting",
          "both walking the boardwalk, spurs jingling"
        ],
        "looks": [
          "duster coat and wide-brimmed hat each",
          "gingham dress and shawl each",
          "vest and gun belt each"
        ]
      }
    },
    "promptPrefix": "Period-accurate historical photograph, authentic to the era and location depicted — ",
    "promptSuffix": "Render with period-accurate costume, lighting and setting, in the photographic style of the era.",
    "variantDirectives": [
      "Wide period frame, the figures small within the historical setting: ",
      "Full-length period frame, posture and gesture carry the feeling: ",
      "Tight period portrait, faces fill the frame: ",
      "Stark single-light composition, plain and minimal, as an early photograph: ",
      "The historical place dominates the frame, the figures secondary: ",
      "Period costume takes centre stage, the figures framed to show the dress: "
    ]
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
          "pre-storm sky bruised purple green light eerie flat calm",
          "tornado alley Great Plains storm wall approaching vast",
          "monsoon India storm wall approaching dust first"
        ],
        "poses": [
          "both standing small, facing the wall of dark cloud",
          "both leaning into the rising wind, hair streaming",
          "both frozen as the light turns strange and green"
        ],
        "looks": [
          "long coat and windswept scarf each",
          "simple shirt and trousers whipped by the wind each",
          "dark jacket and boots each"
        ]
      },
      "calm vs. chaos": {
        "locs": [
          "storm aftermath debris calm eerie light",
          "storm drain rushing water urban aftermath",
          "storm abandoned car park flooding dramatic"
        ],
        "poses": [
          "both stepping gingerly through the debris, quiet",
          "both looking up as the sun cracks through the cloud",
          "both holding each other, wet and silent"
        ],
        "looks": [
          "damp coats and muddy boots each",
          "torn sleeves and soaked hair each",
          "waterproof jackets and rubber boots each"
        ]
      },
      "the warning vs. the arrival": {
        "locs": [
          "Great Plains supercell storm rotating vast sky",
          "Australian outback storm red dust approaching wall",
          "dust storm haboob Arizona wall approaching"
        ],
        "poses": [
          "both standing small, facing the wall of dark cloud",
          "both leaning into the rising wind, hair streaming",
          "both frozen as the light turns strange and green"
        ],
        "looks": [
          "long coat and windswept scarf each",
          "simple shirt and trousers whipped by the wind each",
          "dark jacket and boots each"
        ]
      },
      "shelter vs. exposure": {
        "locs": [
          "lightning strike plain night dramatic single bolt",
          "storm electricity pylon lightning dramatic",
          "storm shelter doorway waiting dramatic light"
        ],
        "poses": [
          "both lit white for an instant by a flash",
          "both huddled in the doorway, watching the sky",
          "both gazing up, faces blue in the strobing light"
        ],
        "looks": [
          "soaked shirts and bare arms each",
          "dark hooded jackets each",
          "simple dark clothes each"
        ]
      },
      "power vs. fragility": {
        "locs": [
          "North Sea storm wave lighthouse spray dramatic",
          "tropical storm eye wall approach Caribbean coast",
          "Norwegian coast storm fjord dramatic wave"
        ],
        "poses": [
          "both braced against a surge of spray",
          "both clinging to a rail as a wave crashes",
          "both drenched and exhilarated, arms out"
        ],
        "looks": [
          "oilskin coat and sou'wester each",
          "waterproof jacket, soaked each",
          "heavy knit and rubber boots each"
        ]
      },
      "the eye vs. the edge": {
        "locs": [
          "Scottish moor storm approaching dramatic light shafts",
          "Patagonia storm mountain dramatic wind bent tree",
          "Alpine storm lightning peak dramatic"
        ],
        "poses": [
          "both hunched against the gale, coats flapping",
          "both crossing the open ground, heads down",
          "both gazing at the black sky as light breaks through"
        ],
        "looks": [
          "wax jacket and walking boots each",
          "hooded waterproof and scarf each",
          "tweed coat and wool hat each"
        ]
      },
      "held vs. broken": {
        "locs": [
          "storm rainbow aftermath dramatic light field",
          "storm aftermath debris calm eerie light",
          "storm drain rushing water urban aftermath"
        ],
        "poses": [
          "both stepping gingerly through the debris, quiet",
          "both looking up as the sun cracks through the cloud",
          "both holding each other, wet and silent"
        ],
        "looks": [
          "damp coats and muddy boots each",
          "torn sleeves and soaked hair each",
          "waterproof jackets and rubber boots each"
        ]
      },
      "the sky vs. the earth": {
        "locs": [
          "Yorkshire moor storm approaching Brontë register",
          "winter storm blizzard white out reduced visibility",
          "Scottish moor storm approaching dramatic light shafts"
        ],
        "poses": [
          "both hunched against the gale, coats flapping",
          "both crossing the open ground, heads down",
          "both gazing at the black sky as light breaks through"
        ],
        "looks": [
          "wax jacket and walking boots each",
          "hooded waterproof and scarf each",
          "tweed coat and wool hat each"
        ]
      },
      "inevitable vs. preventable": {
        "locs": [
          "pre-storm sky bruised purple green light eerie flat calm",
          "tornado alley Great Plains storm wall approaching vast",
          "monsoon India storm wall approaching dust first"
        ],
        "poses": [
          "both standing small, facing the wall of dark cloud",
          "both leaning into the rising wind, hair streaming",
          "both frozen as the light turns strange and green"
        ],
        "looks": [
          "long coat and windswept scarf each",
          "simple shirt and trousers whipped by the wind each",
          "dark jacket and boots each"
        ]
      },
      "the storm within vs. the storm without": {
        "locs": [
          "storm light dramatic shafts through cloud dramatic countryside",
          "Turner painting storm sea ship dramatic",
          "storm tide surge coastal town dramatic"
        ],
        "poses": [
          "both in full evening wear, hair whipping, utterly calm",
          "both in wedding attire caught in the downpour, laughing",
          "both dancing a slow waltz in the gale"
        ],
        "looks": [
          "black tie and ball gown each",
          "wedding dress and morning suit each",
          "evening gown and tuxedo, soaked each"
        ]
      }
    },
    "locs": [
      "pre-storm sky bruised purple green light eerie flat calm",
      "tornado alley Great Plains storm wall approaching vast",
      "monsoon India storm wall approaching dust first",
      "Great Plains supercell storm rotating vast sky",
      "Australian outback storm red dust approaching wall",
      "dust storm haboob Arizona wall approaching",
      "North Sea storm wave lighthouse spray dramatic",
      "tropical storm eye wall approach Caribbean coast",
      "Norwegian coast storm fjord dramatic wave",
      "storm at sea container ship wave dramatic",
      "Mediterranean storm dramatic cliff wave spray",
      "Great Lakes storm grey vast water horizon",
      "hurricane eye approach coast dramatic satellite",
      "Cornish coast storm wave dramatic heritage",
      "typhoon approach Hong Kong dramatic sky",
      "Scottish moor storm approaching dramatic light shafts",
      "Patagonia storm mountain dramatic wind bent tree",
      "Alpine storm lightning peak dramatic",
      "Yorkshire moor storm approaching Brontë register",
      "winter storm blizzard white out reduced visibility",
      "lightning strike plain night dramatic single bolt",
      "storm electricity pylon lightning dramatic",
      "storm shelter doorway waiting dramatic light",
      "storm aftermath debris calm eerie light",
      "storm drain rushing water urban aftermath",
      "storm abandoned car park flooding dramatic",
      "storm rainbow aftermath dramatic light field",
      "storm light dramatic shafts through cloud dramatic countryside",
      "Turner painting storm sea ship dramatic",
      "storm tide surge coastal town dramatic"
    ],
    "poses": [
      "both standing small, facing the wall of dark cloud",
      "both leaning into the rising wind, hair streaming",
      "both frozen as the light turns strange and green",
      "both braced against a surge of spray",
      "both clinging to a rail as a wave crashes",
      "both drenched and exhilarated, arms out",
      "both hunched against the gale, coats flapping",
      "both crossing the open ground, heads down",
      "both gazing at the black sky as light breaks through",
      "both lit white for an instant by a flash",
      "both huddled in the doorway, watching the sky",
      "both gazing up, faces blue in the strobing light",
      "both stepping gingerly through the debris, quiet",
      "both looking up as the sun cracks through the cloud",
      "both holding each other, wet and silent",
      "both in full evening wear, hair whipping, utterly calm",
      "both in wedding attire caught in the downpour, laughing",
      "both dancing a slow waltz in the gale"
    ],
    "looks": [
      "long coat and windswept scarf each",
      "simple shirt and trousers whipped by the wind each",
      "dark jacket and boots each",
      "oilskin coat and sou'wester each",
      "waterproof jacket, soaked each",
      "heavy knit and rubber boots each",
      "wax jacket and walking boots each",
      "hooded waterproof and scarf each",
      "tweed coat and wool hat each",
      "soaked shirts and bare arms each",
      "dark hooded jackets each",
      "simple dark clothes each",
      "damp coats and muddy boots each",
      "torn sleeves and soaked hair each",
      "waterproof jackets and rubber boots each",
      "black tie and ball gown each",
      "wedding dress and morning suit each",
      "evening gown and tuxedo, soaked each"
    ],
    "promptSuffix": "Colour grade: the specific drama of storm light — bruised purple-green pre-storm, lightning white flash, aftermath golden eerie. Turner at sea. The sky is the subject."
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
          "Los Angeles rain 1940s noir street lamp wet reflection",
          "Chicago noir El train overhead rain night shadow",
          "San Francisco Chandler fog hill cable car night"
        ],
        "poses": [
          "both running through the rain, coats flying",
          "both pressed against the wall as headlights sweep past",
          "one gripping the other's sleeve, glancing over a shoulder"
        ],
        "looks": [
          "trench coat and fedora each",
          "dark coat with the collar up each",
          "rumpled suit and loosened tie each"
        ]
      },
      "anonymous vs. seen": {
        "locs": [
          "Tokyo Shinjuku neon night alley narrow dense kanji",
          "Hong Kong Mong Kok neon night dense vertical signs",
          "Seoul Gangnam neon night K-beauty signage"
        ],
        "poses": [
          "both small amid towers of glowing signs, faces lit",
          "both weaving through a crowd, hand in hand",
          "both leaning in a doorway, colour on their faces"
        ],
        "looks": [
          "layered streetwear and bucket hat each",
          "oversized jacket and platform shoes each",
          "bright puffer and tech trousers each"
        ]
      },
      "the crowd vs. the individual": {
        "locs": [
          "Las Vegas strip neon day garish",
          "New York City steam vent night dramatic",
          "London Soho alley night neon sign"
        ],
        "poses": [
          "both walking fast, swirling vapour at their feet",
          "both sharing a cigarette beneath a flickering light",
          "both laughing in the glare of a passing taxi"
        ],
        "looks": [
          "leather jacket and scuffed boots each",
          "bomber jacket and beanie each",
          "long coat and scarf each"
        ]
      },
      "above vs. below": {
        "locs": [
          "Shanghai Pudong glass tower forest night",
          "Dubai glass tower desert edge dawn",
          "Singapore Marina Bay night reflection water"
        ],
        "poses": [
          "both dwarfed by the glittering towers, looking up",
          "both crossing a plaza of reflected glass",
          "both leaning on the rail beside the water, lights doubled"
        ],
        "looks": [
          "sleek dark suit and minimal dress each",
          "crisp white shirt and tailored trousers each",
          "modern overcoat and sharp shoes each"
        ]
      },
      "new vs. decayed": {
        "locs": [
          "East Berlin Plattenbau brutalist block 1970s grey",
          "Moscow Khrushchyovka block estate winter",
          "London Barbican brutalist concrete walkways"
        ],
        "poses": [
          "both tiny at the foot of the monumental slabs",
          "both walking a long walkway, shadows stretching",
          "both leaning on a balcony rail, staring out"
        ],
        "looks": [
          "plain dark coat and boots each",
          "grey wool coat and woollen hat each",
          "practical jacket and scarf each"
        ]
      },
      "fast vs. still": {
        "locs": [
          "Paris Haussmann boulevard golden stone dawn",
          "Edinburgh Old Town stone alley gaslight",
          "Prague Old Town square golden cobblestone dawn"
        ],
        "poses": [
          "both strolling arm in arm along the stone",
          "both stopped at a corner, looking up at the carved facades",
          "both sitting at a café table, the light golden around them"
        ],
        "looks": [
          "tailored wool coat and silk scarf each",
          "long camel coat and leather gloves each",
          "smart jacket and loafers each"
        ]
      },
      "the city vs. the person": {
        "locs": [
          "Osaka Dotonbori neon canal reflection night",
          "Bangkok Chinatown neon night dense traffic",
          "Tokyo Shinjuku neon night alley narrow dense kanji"
        ],
        "poses": [
          "both small amid towers of glowing signs, faces lit",
          "both weaving through a crowd, hand in hand",
          "both leaning in a doorway, colour on their faces"
        ],
        "looks": [
          "layered streetwear and bucket hat each",
          "oversized jacket and platform shoes each",
          "bright puffer and tech trousers each"
        ]
      },
      "lost vs. found": {
        "locs": [
          "New York fire escape rain night noir",
          "Los Angeles rain 1940s noir street lamp wet reflection",
          "Chicago noir El train overhead rain night shadow"
        ],
        "poses": [
          "both running through the rain, coats flying",
          "both pressed against the wall as headlights sweep past",
          "one gripping the other's sleeve, glancing over a shoulder"
        ],
        "looks": [
          "trench coat and fedora each",
          "dark coat with the collar up each",
          "rumpled suit and loosened tie each"
        ]
      },
      "public vs. private": {
        "locs": [
          "Budapest Parliament Danube reflection night",
          "Vienna Ringstrasse imperial architecture dusk",
          "Barcelona Gothic Quarter narrow golden"
        ],
        "poses": [
          "both strolling arm in arm along the stone",
          "both stopped at a corner, looking up at the carved facades",
          "both sitting at a café table, the light golden around them"
        ],
        "looks": [
          "tailored wool coat and silk scarf each",
          "long camel coat and leather gloves each",
          "smart jacket and loafers each"
        ]
      },
      "the promise vs. the reality": {
        "locs": [
          "Marseille Unité d'Habitation Le Corbusier",
          "Belgrade brutalist monument vast dramatic",
          "Minsk Soviet boulevard vast ceremonial"
        ],
        "poses": [
          "both tiny at the foot of the monumental slabs",
          "both walking a long walkway, shadows stretching",
          "both leaning on a balcony rail, staring out"
        ],
        "looks": [
          "plain dark coat and boots each",
          "grey wool coat and woollen hat each",
          "practical jacket and scarf each"
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
      "Bangkok Chinatown neon night dense traffic",
      "Las Vegas strip neon day garish",
      "New York City steam vent night dramatic",
      "London Soho alley night neon sign",
      "New York Chinatown night dense narrow",
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
      "Paris catacombs skull lined narrow torch",
      "Shanghai Pudong glass tower forest night",
      "Dubai glass tower desert edge dawn",
      "Singapore Marina Bay night reflection water",
      "New York Hudson Yards contemporary glass",
      "London Canary Wharf glass canyon night",
      "Singapore Jewel Changi waterfall interior"
    ],
    "poses": [
      "both running through the rain, coats flying",
      "both pressed against the wall as headlights sweep past",
      "one gripping the other's sleeve, glancing over a shoulder",
      "both small amid towers of glowing signs, faces lit",
      "both weaving through a crowd, hand in hand",
      "both leaning in a doorway, colour on their faces",
      "both walking fast, swirling vapour at their feet",
      "both sharing a cigarette beneath a flickering light",
      "both laughing in the glare of a passing taxi",
      "both tiny at the foot of the monumental slabs",
      "both walking a long walkway, shadows stretching",
      "both leaning on a balcony rail, staring out",
      "both strolling arm in arm along the stone",
      "both stopped at a corner, looking up at the carved facades",
      "both sitting at a café table, the light golden around them",
      "both dwarfed by the glittering towers, looking up",
      "both crossing a plaza of reflected glass",
      "both leaning on the rail beside the water, lights doubled"
    ],
    "looks": [
      "trench coat and fedora each",
      "dark coat with the collar up each",
      "rumpled suit and loosened tie each",
      "layered streetwear and bucket hat each",
      "oversized jacket and platform shoes each",
      "bright puffer and tech trousers each",
      "leather jacket and scuffed boots each",
      "bomber jacket and beanie each",
      "long coat and scarf each",
      "plain dark coat and boots each",
      "grey wool coat and woollen hat each",
      "practical jacket and scarf each",
      "tailored wool coat and silk scarf each",
      "long camel coat and leather gloves each",
      "smart jacket and loafers each",
      "sleek dark suit and minimal dress each",
      "crisp white shirt and tailored trousers each",
      "modern overcoat and sharp shoes each"
    ],
    "promptSuffix": "Colour grade by register: noir rain and shadow, Tokyo neon saturated vertical, brutalist grey and flat, Haussmann golden warm stone. The city IS the character."
  },
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
      "state highway no buildings horizon",
      "desert road mirage ahead",
      "Mexico highway free road",
      "desert crossroads",
      "two-lane blacktop at sunset",
      "wet asphalt overpass night reflection",
      "motorway at night light trails",
      "freeway on-ramp shoulder",
      "road tunnel exit light end",
      "bridge expansion joint middle",
      "toll booth abandoned",
      "drive-in movie screen empty",
      "car wash tunnel entrance",
      "highway flyover construction",
      "motorway service park dark",
      "elevated highway bend",
      "industrial port road",
      "mountain switchback edge vertiginous",
      "coastal highway cliff edge",
      "mountain pass summit road",
      "valley road river beside",
      "forest road canopy over",
      "Norwegian fjord road tunnel",
      "Icelandic ring road empty",
      "New Zealand coastal highway",
      "South African coastal road",
      "Chilean carretera austral",
      "Colombian Pan-American mountain",
      "Peru Cusco mountain road",
      "Silk Road Kyrgyzstan pass",
      "mesa rim road",
      "interstate service road empty",
      "level crossing arms down alone",
      "weigh station closed",
      "roundabout centre at dawn",
      "main road empty market town",
      "B-road countryside both verges",
      "dirt road becoming tarmac",
      "gravel road end tarmac starts",
      "Irish bog road endless narrow",
      "Scottish single-track passing place",
      "rural crossroads at dawn",
      "flooded road section",
      "Australian outback highway road train track",
      "Patagonian ruta 40 gravel",
      "Bolivian salar crossing white",
      "Brazilian BR-116 jungle edge",
      "Trans-Siberian highway winter",
      "salt flat highway",
      "long straight flat road",
      "empty airstrip tarmac heat",
      "dragstrip start line",
      "race track pit lane",
      "abandoned race circuit",
      "race circuit backstraight",
      "tarmac airfield perimeter",
      "Route 66 desert diner exterior",
      "Route 66 motel sign rusted",
      "Route 66 filling station abandoned",
      "truck stop empty 3am",
      "empty highway rest stop",
      "highway billboard empty",
      "North American highway billboard"
    ],
    "poses": [
      "both leaning on the car's hood, squinting into the glare",
      "one sitting on the roof, the other leaning on the door, sharing a bottle",
      "both walking the white line, arms out for balance",
      "both dancing in the dust beside the open car doors",
      "both standing in the glow of passing headlights, hair whipped by the wind",
      "both lying on the warm tarmac, looking at the stars",
      "one leaning on the car, the other lit by a neon sign",
      "both walking away from a streak of red tail lights",
      "both standing at the guardrail, arms around each other, a valley falling away",
      "both sitting on the car's bumper, shoes off, looking out",
      "both leaning into the curve on a motorbike, laughing",
      "one taking a photo of the other against the view",
      "both walking down the middle, hand in hand, nobody else for miles",
      "one sitting on the kerb, the other standing over them, both quiet",
      "both laughing at a map spread across the bonnet",
      "both waiting at the barrier, one hopping from foot to foot",
      "both tiny in the middle of an endless emptiness",
      "both sitting on the roof, boots dangling, in the immense quiet",
      "both leaning on a battered truck, wrapped against the cold",
      "one kicking up dust, the other filming it",
      "both revving up, hands on the wheel, grinning at each other",
      "one waving the chequered flag, the other punching the air",
      "both sitting on the tyres, helmets in their laps, laughing",
      "both strolling the grid at dusk, helmets swinging from their hands",
      "both leaning on the car at the pumps, sunburnt and sharing a milkshake",
      "both posing under the buzzing sign, arms around each other",
      "one pumping gas, the other dancing on the forecourt",
      "both sitting on the kerb, eating from the same paper bag"
    ],
    "looks": [
      "faded denim jacket and white tee each",
      "vintage western shirt and cowboy boots each",
      "sunglasses, bandana and rolled sleeves each",
      "leather jacket and dark jeans each",
      "oversized bomber and slim trousers each",
      "black coat and boots each",
      "windbreaker and sunglasses each",
      "knit sweater and light jacket each",
      "scarf and trench coat each",
      "cosy knit and waxed jacket each",
      "plaid shirt and jeans each",
      "raincoat and wellies each",
      "dusty work jacket and boots each",
      "thick parka and woolly hat each",
      "scarf-wrapped faces and sunglasses each",
      "racing jackets and driving gloves each",
      "oil-stained overalls each",
      "vintage leather jacket and goggles each",
      "vintage diner-style outfit each",
      "1950s-inspired dress and jacket each",
      "denim and cowboy boots each"
    ],
    "affinities": {
      "motion vs. stillness": {
        "locs": [
          "interstate service road empty",
          "level crossing arms down alone",
          "weigh station closed"
        ],
        "poses": [
          "both walking down the middle, hand in hand, nobody else for miles",
          "one sitting on the kerb, the other standing over them, both quiet",
          "both laughing at a map spread across the bonnet"
        ],
        "looks": [
          "cosy knit and waxed jacket each",
          "plaid shirt and jeans each",
          "raincoat and wellies each"
        ]
      },
      "leaving vs. arriving": {
        "locs": [
          "mountain switchback edge vertiginous",
          "coastal highway cliff edge",
          "mountain pass summit road"
        ],
        "poses": [
          "both standing at the guardrail, arms around each other, a valley falling away",
          "both sitting on the car's bumper, shoes off, looking out",
          "both leaning into the curve on a motorbike, laughing"
        ],
        "looks": [
          "windbreaker and sunglasses each",
          "knit sweater and light jacket each",
          "scarf and trench coat each"
        ]
      },
      "speed vs. weight": {
        "locs": [
          "empty airstrip tarmac heat",
          "dragstrip start line",
          "race track pit lane"
        ],
        "poses": [
          "both revving up, hands on the wheel, grinning at each other",
          "one waving the chequered flag, the other punching the air",
          "both sitting on the tyres, helmets in their laps, laughing"
        ],
        "looks": [
          "racing jackets and driving gloves each",
          "oil-stained overalls each",
          "vintage leather jacket and goggles each"
        ]
      },
      "freedom vs. direction": {
        "locs": [
          "valley road river beside",
          "forest road canopy over",
          "Norwegian fjord road tunnel"
        ],
        "poses": [
          "both sitting on the car's bumper, shoes off, looking out",
          "both leaning into the curve on a motorbike, laughing",
          "one taking a photo of the other against the view"
        ],
        "looks": [
          "knit sweater and light jacket each",
          "scarf and trench coat each",
          "windbreaker and sunglasses each"
        ]
      },
      "drift vs. purpose": {
        "locs": [
          "roundabout centre at dawn",
          "main road empty market town",
          "B-road countryside both verges"
        ],
        "poses": [
          "one sitting on the kerb, the other standing over them, both quiet",
          "both laughing at a map spread across the bonnet",
          "both waiting at the barrier, one hopping from foot to foot"
        ],
        "looks": [
          "plaid shirt and jeans each",
          "raincoat and wellies each",
          "cosy knit and waxed jacket each"
        ]
      },
      "chasing vs. fleeing": {
        "locs": [
          "wet asphalt overpass night reflection",
          "motorway at night light trails",
          "freeway on-ramp shoulder"
        ],
        "poses": [
          "both standing in the glow of passing headlights, hair whipped by the wind",
          "both lying on the warm tarmac, looking at the stars",
          "one leaning on the car, the other lit by a neon sign"
        ],
        "looks": [
          "leather jacket and dark jeans each",
          "oversized bomber and slim trousers each",
          "black coat and boots each"
        ]
      },
      "journey vs. destination": {
        "locs": [
          "desert highway at dusk heat shimmer",
          "state highway no buildings horizon",
          "desert road mirage ahead"
        ],
        "poses": [
          "both leaning on the car's hood, squinting into the glare",
          "one sitting on the roof, the other leaning on the door, sharing a bottle",
          "both walking the white line, arms out for balance"
        ],
        "looks": [
          "faded denim jacket and white tee each",
          "vintage western shirt and cowboy boots each",
          "sunglasses, bandana and rolled sleeves each"
        ]
      },
      "open vs. closed": {
        "locs": [
          "Australian outback highway road train track",
          "Patagonian ruta 40 gravel",
          "Bolivian salar crossing white"
        ],
        "poses": [
          "both tiny in the middle of an endless emptiness",
          "both sitting on the roof, boots dangling, in the immense quiet",
          "both leaning on a battered truck, wrapped against the cold"
        ],
        "looks": [
          "dusty work jacket and boots each",
          "thick parka and woolly hat each",
          "scarf-wrapped faces and sunglasses each"
        ]
      },
      "fuel vs. fumes": {
        "locs": [
          "Route 66 desert diner exterior",
          "Route 66 motel sign rusted",
          "Route 66 filling station abandoned"
        ],
        "poses": [
          "both leaning on the car at the pumps, sunburnt and sharing a milkshake",
          "both posing under the buzzing sign, arms around each other",
          "one pumping gas, the other dancing on the forecourt"
        ],
        "looks": [
          "vintage diner-style outfit each",
          "1950s-inspired dress and jacket each",
          "denim and cowboy boots each"
        ]
      },
      "fast vs. forgotten": {
        "locs": [
          "truck stop empty 3am",
          "empty highway rest stop",
          "highway billboard empty"
        ],
        "poses": [
          "both posing under the buzzing sign, arms around each other",
          "one pumping gas, the other dancing on the forecourt",
          "both sitting on the kerb, eating from the same paper bag"
        ],
        "looks": [
          "1950s-inspired dress and jacket each",
          "denim and cowboy boots each",
          "vintage diner-style outfit each"
        ]
      },
      "running from vs. running toward": {
        "locs": [
          "road tunnel exit light end",
          "bridge expansion joint middle",
          "toll booth abandoned"
        ],
        "poses": [
          "both lying on the warm tarmac, looking at the stars",
          "one leaning on the car, the other lit by a neon sign",
          "both walking away from a streak of red tail lights"
        ],
        "looks": [
          "oversized bomber and slim trousers each",
          "black coat and boots each",
          "leather jacket and dark jeans each"
        ]
      },
      "engine vs. silence": {
        "locs": [
          "Brazilian BR-116 jungle edge",
          "Trans-Siberian highway winter",
          "salt flat highway"
        ],
        "poses": [
          "both sitting on the roof, boots dangling, in the immense quiet",
          "both leaning on a battered truck, wrapped against the cold",
          "one kicking up dust, the other filming it"
        ],
        "looks": [
          "thick parka and woolly hat each",
          "scarf-wrapped faces and sunglasses each",
          "dusty work jacket and boots each"
        ]
      },
      "throttle vs. brake": {
        "locs": [
          "abandoned race circuit",
          "race circuit backstraight",
          "tarmac airfield perimeter"
        ],
        "poses": [
          "one waving the chequered flag, the other punching the air",
          "both sitting on the tyres, helmets in their laps, laughing",
          "both strolling the grid at dusk, helmets swinging from their hands"
        ],
        "looks": [
          "oil-stained overalls each",
          "vintage leather jacket and goggles each",
          "racing jackets and driving gloves each"
        ]
      },
      "horizon vs. past": {
        "locs": [
          "Mexico highway free road",
          "desert crossroads",
          "two-lane blacktop at sunset"
        ],
        "poses": [
          "one sitting on the roof, the other leaning on the door, sharing a bottle",
          "both walking the white line, arms out for balance",
          "both dancing in the dust beside the open car doors"
        ],
        "looks": [
          "vintage western shirt and cowboy boots each",
          "sunglasses, bandana and rolled sleeves each",
          "faded denim jacket and white tee each"
        ]
      },
      "asphalt vs. sky": {
        "locs": [
          "Icelandic ring road empty",
          "New Zealand coastal highway",
          "South African coastal road"
        ],
        "poses": [
          "both leaning into the curve on a motorbike, laughing",
          "one taking a photo of the other against the view",
          "both standing at the guardrail, arms around each other, a valley falling away"
        ],
        "looks": [
          "scarf and trench coat each",
          "windbreaker and sunglasses each",
          "knit sweater and light jacket each"
        ]
      },
      "distance vs. closeness": {
        "locs": [
          "Chilean carretera austral",
          "Colombian Pan-American mountain",
          "Peru Cusco mountain road"
        ],
        "poses": [
          "one taking a photo of the other against the view",
          "both standing at the guardrail, arms around each other, a valley falling away",
          "both sitting on the car's bumper, shoes off, looking out"
        ],
        "looks": [
          "windbreaker and sunglasses each",
          "knit sweater and light jacket each",
          "scarf and trench coat each"
        ]
      },
      "moving vs. rooted": {
        "locs": [
          "dirt road becoming tarmac",
          "gravel road end tarmac starts",
          "Irish bog road endless narrow"
        ],
        "poses": [
          "both laughing at a map spread across the bonnet",
          "both waiting at the barrier, one hopping from foot to foot",
          "both walking down the middle, hand in hand, nobody else for miles"
        ],
        "looks": [
          "raincoat and wellies each",
          "cosy knit and waxed jacket each",
          "plaid shirt and jeans each"
        ]
      },
      "escape vs. return": {
        "locs": [
          "desert highway at dusk heat shimmer",
          "state highway no buildings horizon",
          "desert road mirage ahead"
        ],
        "poses": [
          "both walking the white line, arms out for balance",
          "both dancing in the dust beside the open car doors",
          "both leaning on the car's hood, squinting into the glare"
        ],
        "looks": [
          "sunglasses, bandana and rolled sleeves each",
          "faded denim jacket and white tee each",
          "vintage western shirt and cowboy boots each"
        ]
      },
      "forward vs. nowhere": {
        "locs": [
          "Scottish single-track passing place",
          "rural crossroads at dawn",
          "flooded road section"
        ],
        "poses": [
          "both waiting at the barrier, one hopping from foot to foot",
          "both walking down the middle, hand in hand, nobody else for miles",
          "one sitting on the kerb, the other standing over them, both quiet"
        ],
        "looks": [
          "cosy knit and waxed jacket each",
          "plaid shirt and jeans each",
          "raincoat and wellies each"
        ]
      },
      "controlled vs. abandoned": {
        "locs": [
          "drive-in movie screen empty",
          "car wash tunnel entrance",
          "highway flyover construction"
        ],
        "poses": [
          "one leaning on the car, the other lit by a neon sign",
          "both walking away from a streak of red tail lights",
          "both standing in the glow of passing headlights, hair whipped by the wind"
        ],
        "looks": [
          "black coat and boots each",
          "leather jacket and dark jeans each",
          "oversized bomber and slim trousers each"
        ]
      }
    },
    "promptSuffix": "Colour grade: sun-bleached, high contrast, the palette of asphalt and horizon. The road itself should dominate the frame."
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
          "northern lights aurora borealis vast dark sky lake",
          "ice road frozen lake truck headlights vast night",
          "Churchill Manitoba polar bear tundra twilight"
        ],
        "poses": [
          "both tiny and still beneath the glowing sky, faces lit",
          "both walking together into the vast white, breath steaming",
          "both huddled close, wrapped against the cold"
        ],
        "looks": [
          "heavy parka with a fur-trimmed hood each",
          "insulated overalls and thick mittens each",
          "thermal layers and wool toque each"
        ]
      },
      "isolation vs. connection": {
        "locs": [
          "Yukon wilderness log cabin smoke rising winter",
          "Iqaluit Arctic settlement winter dark noon",
          "northern lights aurora borealis vast dark sky lake"
        ],
        "poses": [
          "both walking together into the vast white, breath steaming",
          "both huddled close, wrapped against the cold",
          "both tiny and still beneath the glowing sky, faces lit"
        ],
        "looks": [
          "insulated overalls and thick mittens each",
          "thermal layers and wool toque each",
          "heavy parka with a fur-trimmed hood each"
        ]
      },
      "wilderness vs. civilisation": {
        "locs": [
          "Quebec City Old Town winter snow lanterns cobblestone",
          "Niagara Falls frozen winter mist",
          "Toronto winter street snow CN Tower behind"
        ],
        "poses": [
          "both strolling arm in arm, steam rising from their breath",
          "both laughing as snow falls on their shoulders",
          "both pausing at a corner, heads tilted toward the lights"
        ],
        "looks": [
          "wool coat toque and scarf each",
          "puffer jacket and boots each",
          "long down coat and fur hat each"
        ]
      },
      "ice vs. warmth": {
        "locs": [
          "Banff frozen lake mountain reflection winter",
          "Whistler ski run empty dawn fresh snow",
          "Canadian Rockies glacier valley vast"
        ],
        "poses": [
          "both on the ice, sharing a thermos, laughing",
          "both carrying skis over their shoulders at sunrise",
          "both gazing up at the peaks, bundled in layers"
        ],
        "looks": [
          "ski jackets and goggles each",
          "bright puffer and toque each",
          "technical shell and gloves each"
        ]
      },
      "the north vs. the south": {
        "locs": [
          "ice road frozen lake truck headlights vast night",
          "Churchill Manitoba polar bear tundra twilight",
          "Yukon wilderness log cabin smoke rising winter"
        ],
        "poses": [
          "both huddled close, wrapped against the cold",
          "both tiny and still beneath the glowing sky, faces lit",
          "both walking together into the vast white, breath steaming"
        ],
        "looks": [
          "thermal layers and wool toque each",
          "heavy parka with a fur-trimmed hood each",
          "insulated overalls and thick mittens each"
        ]
      },
      "staying vs. leaving": {
        "locs": [
          "Pacific coast British Columbia old growth forest fog",
          "Cape Breton coastal cliff Atlantic fog",
          "Newfoundland outport fishing village fog"
        ],
        "poses": [
          "both standing at the edge as the mist rolls in",
          "both leaning into the damp wind, coats flapping",
          "both sitting close on a wet rock, silent"
        ],
        "looks": [
          "oilskin jacket and rubber boots each",
          "waterproof shell and wool jumper each",
          "heavy knit sweater and boots each"
        ]
      },
      "French vs. English": {
        "locs": [
          "Montreal alley winter snow graffiti",
          "Vancouver harbour night mountains snow behind",
          "Quebec City Old Town winter snow lanterns cobblestone"
        ],
        "poses": [
          "both laughing as snow falls on their shoulders",
          "both pausing at a corner, heads tilted toward the lights",
          "both strolling arm in arm, steam rising from their breath"
        ],
        "looks": [
          "puffer jacket and boots each",
          "long down coat and fur hat each",
          "wool coat toque and scarf each"
        ]
      },
      "the land vs. the city": {
        "locs": [
          "Prairie flat horizon grain elevator sky vast",
          "Arctic tundra vast flat horizon midnight sun",
          "Lake Louise turquoise impossible colour summer"
        ],
        "poses": [
          "both under the enormous sky, arms around each other",
          "both walking a long path toward the horizon",
          "both sitting at the water's edge, feet bare"
        ],
        "looks": [
          "plaid shirt and jeans each",
          "light jacket and hiking boots each",
          "canvas jacket and sun hats each"
        ]
      },
      "winter vs. the idea of summer": {
        "locs": [
          "Algonquin Park autumn reflection lake",
          "Prairie flat horizon grain elevator sky vast",
          "Arctic tundra vast flat horizon midnight sun"
        ],
        "poses": [
          "both walking a long path toward the horizon",
          "both sitting at the water's edge, feet bare",
          "both under the enormous sky, arms around each other"
        ],
        "looks": [
          "light jacket and hiking boots each",
          "canvas jacket and sun hats each",
          "plaid shirt and jeans each"
        ]
      },
      "silence vs. the sound of distance": {
        "locs": [
          "Banff frozen lake mountain reflection winter",
          "Whistler ski run empty dawn fresh snow",
          "Canadian Rockies glacier valley vast"
        ],
        "poses": [
          "both carrying skis over their shoulders at sunrise",
          "both gazing up at the peaks, bundled in layers",
          "both on the ice, sharing a thermos, laughing"
        ],
        "looks": [
          "bright puffer and toque each",
          "technical shell and gloves each",
          "ski jackets and goggles each"
        ]
      }
    },
    "locs": [
      "northern lights aurora borealis vast dark sky lake",
      "ice road frozen lake truck headlights vast night",
      "Churchill Manitoba polar bear tundra twilight",
      "Yukon wilderness log cabin smoke rising winter",
      "Iqaluit Arctic settlement winter dark noon",
      "Quebec City Old Town winter snow lanterns cobblestone",
      "Niagara Falls frozen winter mist",
      "Toronto winter street snow CN Tower behind",
      "Montreal alley winter snow graffiti",
      "Vancouver harbour night mountains snow behind",
      "Pacific coast British Columbia old growth forest fog",
      "Cape Breton coastal cliff Atlantic fog",
      "Newfoundland outport fishing village fog",
      "Prairie flat horizon grain elevator sky vast",
      "Arctic tundra vast flat horizon midnight sun",
      "Lake Louise turquoise impossible colour summer",
      "Algonquin Park autumn reflection lake",
      "Banff frozen lake mountain reflection winter",
      "Whistler ski run empty dawn fresh snow",
      "Canadian Rockies glacier valley vast"
    ],
    "poses": [
      "both tiny and still beneath the glowing sky, faces lit",
      "both walking together into the vast white, breath steaming",
      "both huddled close, wrapped against the cold",
      "both strolling arm in arm, steam rising from their breath",
      "both laughing as snow falls on their shoulders",
      "both pausing at a corner, heads tilted toward the lights",
      "both standing at the edge as the mist rolls in",
      "both leaning into the damp wind, coats flapping",
      "both sitting close on a wet rock, silent",
      "both under the enormous sky, arms around each other",
      "both walking a long path toward the horizon",
      "both sitting at the water's edge, feet bare",
      "both on the ice, sharing a thermos, laughing",
      "both carrying skis over their shoulders at sunrise",
      "both gazing up at the peaks, bundled in layers"
    ],
    "looks": [
      "heavy parka with a fur-trimmed hood each",
      "insulated overalls and thick mittens each",
      "thermal layers and wool toque each",
      "wool coat toque and scarf each",
      "puffer jacket and boots each",
      "long down coat and fur hat each",
      "oilskin jacket and rubber boots each",
      "waterproof shell and wool jumper each",
      "heavy knit sweater and boots each",
      "plaid shirt and jeans each",
      "light jacket and hiking boots each",
      "canvas jacket and sun hats each",
      "ski jackets and goggles each",
      "bright puffer and toque each",
      "technical shell and gloves each"
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
          "St Lucia Piton volcanic peak mist morning",
          "Tobago rainforest waterfall morning",
          "Cayman Islands turtle farm"
        ],
        "poses": [
          "both wading into the water, laughing, clothes soaked",
          "both gazing up at the green slopes in silence",
          "both kneeling to look at the animals, wide-eyed"
        ],
        "looks": [
          "swimwear and loose cover-ups each",
          "light shirts and rolled trousers each",
          "sundress and shorts and sandals each"
        ]
      },
      "colonial vs. free": {
        "locs": [
          "San Juan Old City colonial walls sunset Puerto Rico",
          "Antigua English Harbour colonial dockyard",
          "Curaçao Willemstad colonial coloured buildings"
        ],
        "poses": [
          "both strolling the cobbles in the late light",
          "both leaning from a shuttered window, watching below",
          "both sitting on a warm stone wall, shoes off"
        ],
        "looks": [
          "pastel linen shirt and sundress each",
          "white cotton outfit and sun hat each",
          "cotton shirt and light shorts each"
        ]
      },
      "past vs. present": {
        "locs": [
          "Havana crumbling colonial street 1950s Chevrolet midday",
          "Cuba tobacco farm interior morning light",
          "Havana rooftop sunset Malecón below"
        ],
        "poses": [
          "both leaning on a vintage car, laughing in the heat",
          "both dancing a slow step in the road",
          "both sharing a joke and a drink on the roof"
        ],
        "looks": [
          "white guayabera and straw hat each",
          "printed halter dress and linen trousers each",
          "open-collared shirt and rolled sleeves each"
        ]
      },
      "the tourist vs. the local": {
        "locs": [
          "Barbados chattel house painted bright afternoon",
          "Dominican Republic baseball field afternoon dust",
          "Haiti Port-au-Prince street market colour"
        ],
        "poses": [
          "both haggling cheerfully over a pile of fruit",
          "both cheering at the game, arms in the air",
          "both leaning in a doorway watching the life go by"
        ],
        "looks": [
          "bright printed shirt and shorts each",
          "plain tee and straw hat each",
          "cotton dress and sandals each"
        ]
      },
      "heat vs. cool sea": {
        "locs": [
          "St Lucia Piton volcanic peak mist morning",
          "Tobago rainforest waterfall morning",
          "Cayman Islands turtle farm"
        ],
        "poses": [
          "both wading into the water, laughing, clothes soaked",
          "both gazing up at the green slopes in silence",
          "both kneeling to look at the animals, wide-eyed"
        ],
        "looks": [
          "swimwear and loose cover-ups each",
          "light shirts and rolled trousers each",
          "sundress and shorts and sandals each"
        ]
      },
      "music vs. silence": {
        "locs": [
          "Kingston dancehall night neon Jamaica",
          "Jamaica Blue Mountains coffee farm morning mist",
          "Jamaica country road sugarcane afternoon"
        ],
        "poses": [
          "both mid-dance, hips swaying to the bass",
          "both sharing a bottle and a laugh at the counter",
          "both walking the dusty road, hand in hand"
        ],
        "looks": [
          "bright tracksuit and gold chain each",
          "loose linen shirt and cap each",
          "colourful sundress and head wrap each"
        ]
      },
      "stay vs. leave": {
        "locs": [
          "Martinique rum distillery afternoon French colonial",
          "Grenada nutmeg plantation afternoon",
          "San Juan Old City colonial walls sunset Puerto Rico"
        ],
        "poses": [
          "both strolling the cobbles in the late light",
          "both leaning from a shuttered window, watching below",
          "both sitting on a warm stone wall, shoes off"
        ],
        "looks": [
          "pastel linen shirt and sundress each",
          "white cotton outfit and sun hat each",
          "cotton shirt and light shorts each"
        ]
      },
      "the island vs. the world outside": {
        "locs": [
          "Havana crumbling colonial street 1950s Chevrolet midday",
          "Cuba tobacco farm interior morning light",
          "Havana rooftop sunset Malecón below"
        ],
        "poses": [
          "both leaning on a vintage car, laughing in the heat",
          "both dancing a slow step in the road",
          "both sharing a joke and a drink on the roof"
        ],
        "looks": [
          "white guayabera and straw hat each",
          "printed halter dress and linen trousers each",
          "open-collared shirt and rolled sleeves each"
        ]
      },
      "colour vs. decay": {
        "locs": [
          "Trinidad carnival mas costume street night",
          "Trinidad Savannah carnival stage night"
        ],
        "poses": [
          "both mid-whirl in a swirl of feathers and sequins",
          "both with arms raised, drenched in coloured powder",
          "both leaping in the procession, glitter flying"
        ],
        "looks": [
          "feathered headdress and sequined costume each",
          "jewelled bodice and beaded skirt each",
          "bright body paint and bold costume each"
        ]
      },
      "joy vs. history": {
        "locs": [
          "Trinidad Savannah carnival stage night",
          "Trinidad carnival mas costume street night"
        ],
        "poses": [
          "both mid-whirl in a swirl of feathers and sequins",
          "both with arms raised, drenched in coloured powder",
          "both leaping in the procession, glitter flying"
        ],
        "looks": [
          "feathered headdress and sequined costume each",
          "jewelled bodice and beaded skirt each",
          "bright body paint and bold costume each"
        ]
      }
    },
    "locs": [
      "Havana crumbling colonial street 1950s Chevrolet midday",
      "Cuba tobacco farm interior morning light",
      "Havana rooftop sunset Malecón below",
      "Kingston dancehall night neon Jamaica",
      "Jamaica Blue Mountains coffee farm morning mist",
      "Jamaica country road sugarcane afternoon",
      "Barbados rum shop interior afternoon",
      "Trinidad carnival mas costume street night",
      "Trinidad Savannah carnival stage night",
      "San Juan Old City colonial walls sunset Puerto Rico",
      "Antigua English Harbour colonial dockyard",
      "Curaçao Willemstad colonial coloured buildings",
      "Martinique rum distillery afternoon French colonial",
      "Grenada nutmeg plantation afternoon",
      "St Lucia Piton volcanic peak mist morning",
      "Tobago rainforest waterfall morning",
      "Cayman Islands turtle farm",
      "Barbados chattel house painted bright afternoon",
      "Dominican Republic baseball field afternoon dust",
      "Haiti Port-au-Prince street market colour"
    ],
    "poses": [
      "both leaning on a vintage car, laughing in the heat",
      "both dancing a slow step in the road",
      "both sharing a joke and a drink on the roof",
      "both mid-dance, hips swaying to the bass",
      "both sharing a bottle and a laugh at the counter",
      "both walking the dusty road, hand in hand",
      "both mid-whirl in a swirl of feathers and sequins",
      "both with arms raised, drenched in coloured powder",
      "both leaping in the procession, glitter flying",
      "both strolling the cobbles in the late light",
      "both leaning from a shuttered window, watching below",
      "both sitting on a warm stone wall, shoes off",
      "both wading into the water, laughing, clothes soaked",
      "both gazing up at the green slopes in silence",
      "both kneeling to look at the animals, wide-eyed",
      "both haggling cheerfully over a pile of fruit",
      "both cheering at the game, arms in the air",
      "both leaning in a doorway watching the life go by"
    ],
    "looks": [
      "white guayabera and straw hat each",
      "printed halter dress and linen trousers each",
      "open-collared shirt and rolled sleeves each",
      "bright tracksuit and gold chain each",
      "loose linen shirt and cap each",
      "colourful sundress and head wrap each",
      "feathered headdress and sequined costume each",
      "jewelled bodice and beaded skirt each",
      "bright body paint and bold costume each",
      "pastel linen shirt and sundress each",
      "white cotton outfit and sun hat each",
      "cotton shirt and light shorts each",
      "swimwear and loose cover-ups each",
      "light shirts and rolled trousers each",
      "sundress and shorts and sandals each",
      "bright printed shirt and shorts each",
      "plain tee and straw hat each",
      "cotton dress and sandals each"
    ],
    "promptSuffix": "Colour grade: Havana ochre and decay, Kingston neon night, Trinidad carnival saturated, impossible Caribbean blue."
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
          "New York water tower rooftop Manhattan skyline dawn",
          "Brooklyn rooftop Manhattan bridge view sunset",
          "New York rooftop 1970s vintage city behind"
        ],
        "poses": [
          "both stretched out on a blanket, the skyline beyond",
          "both leaning on the tank watching the light change",
          "both clinking bottles at the edge"
        ],
        "looks": [
          "denim jacket and white tee each",
          "leather jacket and boots each",
          "knit sweater and jeans each"
        ]
      },
      "escape vs. city": {
        "locs": [
          "Tokyo neon rooftop water tank city spread night dense",
          "Hong Kong cage home rooftop dense city beyond dramatic",
          "Seoul rooftop Han River beyond night neon"
        ],
        "poses": [
          "both silhouetted against glowing signs, shoulder to shoulder",
          "both sitting on a water tank, sharing a drink",
          "both leaning on the railing, faces lit by neon"
        ],
        "looks": [
          "oversized streetwear jacket and sneakers each",
          "layered black techwear each",
          "bomber jacket and pleated skirt each"
        ]
      },
      "private vs. public height": {
        "locs": [
          "Paris Haussmann rooftop chimney zinc dawn golden",
          "Paris rooftop Eiffel visible golden light",
          "Paris rooftop 6th arrondissement zinc slate dawn"
        ],
        "poses": [
          "both with coffee cups, leaning on the chimney stack",
          "both perched by the skylight in the early light",
          "both pointing out landmarks, arms around each other"
        ],
        "looks": [
          "striped breton top and trench coat each",
          "silk scarf and tailored jacket each",
          "wool coat and beret each"
        ]
      },
      "the city vs. the person on it": {
        "locs": [
          "Havana rooftop washing lines crumbling colonial city below",
          "Havana rooftop 1950s Chevrolet visible below dawn",
          "Havana rooftop Malecón sea beyond crumbling beautiful"
        ],
        "poses": [
          "both leaning on the parapet beside a line of washing, laughing",
          "both sitting on a crumbling ledge, legs dangling",
          "both hanging a sheet on the line together"
        ],
        "looks": [
          "thin cotton shirt and rolled trousers each",
          "summer dress and sandals each",
          "vest and linen shorts each"
        ]
      },
      "seen from above vs. unseen": {
        "locs": [
          "Detroit abandoned factory rooftop city below dramatic",
          "rooftop garden city dawn first light plants",
          "rooftop pool city below luxury night reflection"
        ],
        "poses": [
          "both wrapped in blankets at the edge, watching the night",
          "both walking the edge with arms out for balance",
          "both lying back, looking at the sky"
        ],
        "looks": [
          "workwear jacket and boots each",
          "oversized sweater and jeans each",
          "puffer jacket and beanie each"
        ]
      },
      "the roof vs. the world beneath": {
        "locs": [
          "Istanbul rooftop mosque minaret city both sides",
          "São Paulo rooftop favela meets glass tower",
          "Beirut rooftop bullet holes city rebuild"
        ],
        "poses": [
          "both framed against the sprawling skyline, quiet",
          "both listening to the city's evening noise rise from below",
          "both leaning together above the crowded streets"
        ],
        "looks": [
          "loose cotton shirt and scarf each",
          "long tunic and light trousers each",
          "simple dress and shawl each"
        ]
      },
      "freedom vs. exposure": {
        "locs": [
          "Lisbon Alfama rooftop tile fado city below",
          "Porto rooftop azulejo tile city below river",
          "Rome rooftop terracotta dome city eternal"
        ],
        "poses": [
          "both lounging on warm tiles, sun on their faces",
          "both sharing grapes on the terrace",
          "both laughing as a church bell rings"
        ],
        "looks": [
          "linen shirt and straw hat each",
          "sundress and espadrilles each",
          "rolled-sleeve shirt and light trousers each"
        ]
      },
      "the edge vs. the centre": {
        "locs": [
          "rooftop helipad empty city spread dramatic",
          "rooftop solar panels practical city beyond",
          "Detroit abandoned factory rooftop city below dramatic"
        ],
        "poses": [
          "both wrapped in blankets at the edge, watching the night",
          "both walking the edge with arms out for balance",
          "both lying back, looking at the sky"
        ],
        "looks": [
          "workwear jacket and boots each",
          "oversized sweater and jeans each",
          "puffer jacket and beanie each"
        ]
      },
      "dawn vs. dusk from above": {
        "locs": [
          "Paris Haussmann rooftop chimney zinc dawn golden",
          "Paris rooftop Eiffel visible golden light",
          "Paris rooftop 6th arrondissement zinc slate dawn"
        ],
        "poses": [
          "both with coffee cups, leaning on the chimney stack",
          "both perched by the skylight in the early light",
          "both pointing out landmarks, arms around each other"
        ],
        "looks": [
          "striped breton top and trench coat each",
          "silk scarf and tailored jacket each",
          "wool coat and beret each"
        ]
      },
      "small vs. vast city spread": {
        "locs": [
          "Havana rooftop washing lines crumbling colonial city below",
          "Havana rooftop 1950s Chevrolet visible below dawn",
          "Havana rooftop Malecón sea beyond crumbling beautiful"
        ],
        "poses": [
          "both leaning on the parapet beside a line of washing, laughing",
          "both sitting on a crumbling ledge, legs dangling",
          "both hanging a sheet on the line together"
        ],
        "looks": [
          "thin cotton shirt and rolled trousers each",
          "summer dress and sandals each",
          "vest and linen shorts each"
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
      "Chicago water tower rooftop industrial city",
      "Paris Haussmann rooftop chimney zinc dawn golden",
      "Paris rooftop Eiffel visible golden light",
      "Paris rooftop 6th arrondissement zinc slate dawn",
      "Lisbon Alfama rooftop tile fado city below",
      "Porto rooftop azulejo tile city below river",
      "Rome rooftop terracotta dome city eternal",
      "Naples rooftop Vesuvius beyond city below",
      "Athens rooftop Acropolis visible dramatic dusk",
      "Istanbul rooftop mosque minaret city both sides",
      "São Paulo rooftop favela meets glass tower",
      "Beirut rooftop bullet holes city rebuild",
      "Cairo rooftop minaret city ancient sprawl",
      "Mumbai rooftop slum city beyond contrast",
      "Detroit abandoned factory rooftop city below dramatic",
      "rooftop garden city dawn first light plants",
      "rooftop pool city below luxury night reflection",
      "rooftop helipad empty city spread dramatic",
      "rooftop solar panels practical city beyond"
    ],
    "poses": [
      "both leaning on the parapet beside a line of washing, laughing",
      "both sitting on a crumbling ledge, legs dangling",
      "both hanging a sheet on the line together",
      "both silhouetted against glowing signs, shoulder to shoulder",
      "both sitting on a water tank, sharing a drink",
      "both leaning on the railing, faces lit by neon",
      "both stretched out on a blanket, the skyline beyond",
      "both leaning on the tank watching the light change",
      "both clinking bottles at the edge",
      "both with coffee cups, leaning on the chimney stack",
      "both perched by the skylight in the early light",
      "both pointing out landmarks, arms around each other",
      "both lounging on warm tiles, sun on their faces",
      "both sharing grapes on the terrace",
      "both laughing as a church bell rings",
      "both framed against the sprawling skyline, quiet",
      "both listening to the city's evening noise rise from below",
      "both leaning together above the crowded streets",
      "both wrapped in blankets at the edge, watching the night",
      "both walking the edge with arms out for balance",
      "both lying back, looking at the sky"
    ],
    "looks": [
      "thin cotton shirt and rolled trousers each",
      "summer dress and sandals each",
      "vest and linen shorts each",
      "oversized streetwear jacket and sneakers each",
      "layered black techwear each",
      "bomber jacket and pleated skirt each",
      "denim jacket and white tee each",
      "leather jacket and boots each",
      "knit sweater and jeans each",
      "striped breton top and trench coat each",
      "silk scarf and tailored jacket each",
      "wool coat and beret each",
      "linen shirt and straw hat each",
      "sundress and espadrilles each",
      "rolled-sleeve shirt and light trousers each",
      "loose cotton shirt and scarf each",
      "long tunic and light trousers each",
      "simple dress and shawl each",
      "workwear jacket and boots each",
      "oversized sweater and jeans each",
      "puffer jacket and beanie each"
    ],
    "promptSuffix": "Colour grade: specific to each city rooftop — Havana ochre and decay, Tokyo neon dense, Paris zinc dawn gold, New York water tower dramatic. The city below is always part of the frame."
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
          "Wimbledon grass court morning dew empty pre-match",
          "1960s Flushing Meadows hard court crowd behind"
        ],
        "poses": [
          "both mid-rally, dust kicking up",
          "both leaning on their rackets, exhausted",
          "one serving as the other watches, frozen"
        ],
        "looks": [
          "pleated whites and sweatbands each",
          "tennis dress and polo each",
          "dusty tennis shorts and headband each"
        ]
      },
      "the match vs. the life": {
        "locs": [
          "Harlem street basketball court chain-link night 1990s",
          "1990s school gymnasium basketball finals night",
          "outdoor basketball court Los Angeles sunset 1990s"
        ],
        "poses": [
          "both hands on knees, gasping for breath",
          "both leaping for the rim, arms stretched",
          "both sitting on the bench, towels over their heads"
        ],
        "looks": [
          "loose vest and long shorts each",
          "tracksuit top and high-tops each",
          "baggy shirt and headband each"
        ]
      },
      "obsession vs. balance": {
        "locs": [
          "1980s boxing gym ring ropes overhead single light",
          "Brooklyn boxing gym 1950s leather bag dust"
        ],
        "poses": [
          "both trading blows, gloves up",
          "one tying the other's gloves, focused",
          "both slumped on the stool, sweat pouring"
        ],
        "looks": [
          "boxing shorts and wrapped hands each",
          "hooded robe and gloves each",
          "vest and taped knuckles each"
        ]
      },
      "body vs. mind": {
        "locs": [
          "Soviet sports hall gymnasium late 1970s fluorescent",
          "squash court white walls echo 1970s",
          "wrestling mat gymnasium 1970s fluorescent"
        ],
        "poses": [
          "both warming up in parallel, concentrated",
          "both locked in a grapple, straining",
          "both chalking their hands, eyes fixed ahead"
        ],
        "looks": [
          "tracksuit and plimsolls each",
          "plain training kit each",
          "singlet and tape each"
        ]
      },
      "the opponent vs. the self": {
        "locs": [
          "fencing hall épée 1970s European championship",
          "Olympic velodrome track banking 1980s",
          "ice hockey rink empty practice dawn"
        ],
        "poses": [
          "both in a ready stance, eyes locked",
          "both sprinting flat out, leaning into the bend",
          "both resting on the rail, breath misting"
        ],
        "looks": [
          "white padded jacket and mask under one arm each",
          "race suit and helmet each",
          "padded kit and gloves each"
        ]
      },
      "peak vs. decline": {
        "locs": [
          "indoor tennis court 1980s green carpet empty",
          "Rolland Garros press box 1980s clay below",
          "1970s Roland Garros clay court red dust late afternoon"
        ],
        "poses": [
          "both mid-rally, dust kicking up",
          "both leaning on their rackets, exhausted",
          "one serving as the other watches, frozen"
        ],
        "looks": [
          "pleated whites and sweatbands each",
          "tennis dress and polo each",
          "dusty tennis shorts and headband each"
        ]
      },
      "the crowd vs. the silence": {
        "locs": [
          "street football pitch Brazil favela evening",
          "stadium corridor tunnel pre-match concrete"
        ],
        "poses": [
          "both kicking a ball in the dust, laughing",
          "both walking out into the roar of the crowd",
          "both sitting on the ball, sunburnt and happy"
        ],
        "looks": [
          "faded football shirt and shorts each",
          "team kit and muddy boots each",
          "bare feet and tatty shorts each"
        ]
      },
      "glory vs. aftermath": {
        "locs": [
          "Brooklyn boxing gym 1950s leather bag dust",
          "1980s boxing gym ring ropes overhead single light"
        ],
        "poses": [
          "both trading blows, gloves up",
          "one tying the other's gloves, focused",
          "both slumped on the stool, sweat pouring"
        ],
        "looks": [
          "boxing shorts and wrapped hands each",
          "hooded robe and gloves each",
          "vest and taped knuckles each"
        ]
      },
      "control vs. surrender": {
        "locs": [
          "horse racing paddock morning dew 1960s",
          "fencing hall épée 1970s European championship",
          "Olympic velodrome track banking 1980s"
        ],
        "poses": [
          "both in a ready stance, eyes locked",
          "both sprinting flat out, leaning into the bend",
          "both resting on the rail, breath misting"
        ],
        "looks": [
          "white padded jacket and mask under one arm each",
          "race suit and helmet each",
          "padded kit and gloves each"
        ]
      },
      "the last set vs. everything after": {
        "locs": [
          "Harlem street basketball court chain-link night 1990s",
          "1990s school gymnasium basketball finals night",
          "outdoor basketball court Los Angeles sunset 1990s"
        ],
        "poses": [
          "both hands on knees, gasping for breath",
          "both leaping for the rim, arms stretched",
          "both sitting on the bench, towels over their heads"
        ],
        "looks": [
          "loose vest and long shorts each",
          "tracksuit top and high-tops each",
          "baggy shirt and headband each"
        ]
      }
    },
    "locs": [
      "1970s Roland Garros clay court red dust late afternoon",
      "Wimbledon grass court morning dew empty pre-match",
      "1960s Flushing Meadows hard court crowd behind",
      "indoor tennis court 1980s green carpet empty",
      "Rolland Garros press box 1980s clay below",
      "Harlem street basketball court chain-link night 1990s",
      "1990s school gymnasium basketball finals night",
      "outdoor basketball court Los Angeles sunset 1990s",
      "1980s boxing gym ring ropes overhead single light",
      "Brooklyn boxing gym 1950s leather bag dust",
      "Soviet sports hall gymnasium late 1970s fluorescent",
      "squash court white walls echo 1970s",
      "wrestling mat gymnasium 1970s fluorescent",
      "snooker hall green baize single overhead lamp",
      "fencing hall épée 1970s European championship",
      "Olympic velodrome track banking 1980s",
      "ice hockey rink empty practice dawn",
      "horse racing paddock morning dew 1960s",
      "street football pitch Brazil favela evening",
      "stadium corridor tunnel pre-match concrete"
    ],
    "poses": [
      "both mid-rally, dust kicking up",
      "both leaning on their rackets, exhausted",
      "one serving as the other watches, frozen",
      "both hands on knees, gasping for breath",
      "both leaping for the rim, arms stretched",
      "both sitting on the bench, towels over their heads",
      "both trading blows, gloves up",
      "one tying the other's gloves, focused",
      "both slumped on the stool, sweat pouring",
      "both warming up in parallel, concentrated",
      "both locked in a grapple, straining",
      "both chalking their hands, eyes fixed ahead",
      "both in a ready stance, eyes locked",
      "both sprinting flat out, leaning into the bend",
      "both resting on the rail, breath misting",
      "both kicking a ball in the dust, laughing",
      "both walking out into the roar of the crowd",
      "both sitting on the ball, sunburnt and happy"
    ],
    "looks": [
      "pleated whites and sweatbands each",
      "tennis dress and polo each",
      "dusty tennis shorts and headband each",
      "loose vest and long shorts each",
      "tracksuit top and high-tops each",
      "baggy shirt and headband each",
      "boxing shorts and wrapped hands each",
      "hooded robe and gloves each",
      "vest and taped knuckles each",
      "tracksuit and plimsolls each",
      "plain training kit each",
      "singlet and tape each",
      "white padded jacket and mask under one arm each",
      "race suit and helmet each",
      "padded kit and gloves each",
      "faded football shirt and shorts each",
      "team kit and muddy boots each",
      "bare feet and tatty shorts each"
    ],
    "promptSuffix": "Colour grade: clay dust red, gymnasium fluorescent, boxing ring single overhead light. Gritty and physical."
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
          "Soviet state circus ring red spotlight 1960s",
          "Soviet circus animal trainer ring 1960s",
          "Moscow State Circus dressing room backstage 1970s"
        ],
        "poses": [
          "both stepping into the red spotlight, arms flung wide",
          "one balanced on the other's shoulders, hands steady",
          "both bowing deeply to a roaring crowd"
        ],
        "looks": [
          "red sequined leotard and stiff gold collar each",
          "tailored ringmaster tailcoat with braid each",
          "white training leotard and ballet shoes each"
        ]
      },
      "risk vs. safety": {
        "locs": [
          "Cirque du Soleil contemporary rig dramatic",
          "aerial silks rig warehouse rehearsal contemporary",
          "wire act high above no net ring below"
        ],
        "poses": [
          "both suspended high on silks, limbs entwined",
          "one hanging by the knees reaching down to the other",
          "both balanced on the wire, arms out"
        ],
        "looks": [
          "sleek body-hugging performance suit each",
          "flowing silk costume with long ribbons each",
          "minimal pale leotard and chalked hands each"
        ]
      },
      "applause vs. silence": {
        "locs": [
          "clown alley backstage dressing tables",
          "circus ring empty between shows sawdust",
          "circus ring single spotlight performer dust"
        ],
        "poses": [
          "both at a mirror applying makeup, side by side",
          "both sitting on the edge, exhausted and quiet",
          "one painting the other's face with careful hands"
        ],
        "looks": [
          "half-done clown makeup and baggy costume each",
          "cardigan over a sequined costume each",
          "robe over a rhinestone costume each"
        ]
      },
      "the act vs. the life": {
        "locs": [
          "Depression-era big top sawdust 1930s",
          "Depression water for elephants register 1930s",
          "Barnum Bailey travelling circus poster backdrop 1920s"
        ],
        "poses": [
          "both leaning on a painted wagon, worn and proud",
          "both walking beside a line of elephants, dust rising",
          "both sharing a tin cup of coffee on the steps, tired"
        ],
        "looks": [
          "patched wool jacket and faded sequins each",
          "striped performer's costume and worn boots each",
          "ringmaster's coat with tarnished braid each"
        ]
      },
      "grace vs. danger": {
        "locs": [
          "flying trapeze platform height big top",
          "Cirque du Soleil contemporary rig dramatic",
          "aerial silks rig warehouse rehearsal contemporary"
        ],
        "poses": [
          "both suspended high on silks, limbs entwined",
          "one hanging by the knees reaching down to the other",
          "both balanced on the wire, arms out"
        ],
        "looks": [
          "sleek body-hugging performance suit each",
          "flowing silk costume with long ribbons each",
          "minimal pale leotard and chalked hands each"
        ]
      },
      "spectacle vs. ordinary": {
        "locs": [
          "big top exterior night lights",
          "1950s Italian circus Fellini register outdoor",
          "big top collapsed in wind aftermath"
        ],
        "poses": [
          "both small before the glowing tent, hand in hand",
          "both dancing in the empty sawdust, no music",
          "both standing in the wreckage, staring at the sky"
        ],
        "looks": [
          "faded finery and an oversized coat each",
          "dark coat over a bright costume each",
          "simple street clothes with a tinsel scarf each"
        ]
      },
      "the big top vs. the world outside": {
        "locs": [
          "big top exterior night lights",
          "1950s Italian circus Fellini register outdoor",
          "big top collapsed in wind aftermath"
        ],
        "poses": [
          "both small before the glowing tent, hand in hand",
          "both dancing in the empty sawdust, no music",
          "both standing in the wreckage, staring at the sky"
        ],
        "looks": [
          "faded finery and an oversized coat each",
          "dark coat over a bright costume each",
          "simple street clothes with a tinsel scarf each"
        ]
      },
      "peak vs. descent": {
        "locs": [
          "clown alley backstage dressing tables",
          "circus ring empty between shows sawdust",
          "circus ring single spotlight performer dust"
        ],
        "poses": [
          "both at a mirror applying makeup, side by side",
          "both sitting on the edge, exhausted and quiet",
          "one painting the other's face with careful hands"
        ],
        "looks": [
          "half-done clown makeup and baggy costume each",
          "cardigan over a sequined costume each",
          "robe over a rhinestone costume each"
        ]
      },
      "together vs. alone in the ring": {
        "locs": [
          "circus train car siding dawn performers",
          "circus parade street 1920s elephants",
          "circus wagon painted carved travelling"
        ],
        "poses": [
          "both leaning on a painted wagon, worn and proud",
          "both walking beside a line of elephants, dust rising",
          "both sharing a tin cup of coffee on the steps, tired"
        ],
        "looks": [
          "patched wool jacket and faded sequins each",
          "striped performer's costume and worn boots each",
          "ringmaster's coat with tarnished braid each"
        ]
      },
      "the crowd vs. the performer": {
        "locs": [
          "Moscow circus school practice hall",
          "Soviet state circus ring red spotlight 1960s",
          "Soviet circus animal trainer ring 1960s"
        ],
        "poses": [
          "both stepping into the red spotlight, arms flung wide",
          "one balanced on the other's shoulders, hands steady",
          "both bowing deeply to a roaring crowd"
        ],
        "looks": [
          "red sequined leotard and stiff gold collar each",
          "tailored ringmaster tailcoat with braid each",
          "white training leotard and ballet shoes each"
        ]
      }
    },
    "locs": [
      "Soviet state circus ring red spotlight 1960s",
      "Soviet circus animal trainer ring 1960s",
      "Moscow State Circus dressing room backstage 1970s",
      "Moscow circus school practice hall",
      "Depression-era big top sawdust 1930s",
      "Depression water for elephants register 1930s",
      "Barnum Bailey travelling circus poster backdrop 1920s",
      "circus train car siding dawn performers",
      "circus parade street 1920s elephants",
      "circus wagon painted carved travelling",
      "Cirque du Soleil contemporary rig dramatic",
      "aerial silks rig warehouse rehearsal contemporary",
      "wire act high above no net ring below",
      "flying trapeze platform height big top",
      "clown alley backstage dressing tables",
      "circus ring empty between shows sawdust",
      "circus ring single spotlight performer dust",
      "big top exterior night lights",
      "1950s Italian circus Fellini register outdoor",
      "big top collapsed in wind aftermath"
    ],
    "poses": [
      "both stepping into the red spotlight, arms flung wide",
      "one balanced on the other's shoulders, hands steady",
      "both bowing deeply to a roaring crowd",
      "both leaning on a painted wagon, worn and proud",
      "both walking beside a line of elephants, dust rising",
      "both sharing a tin cup of coffee on the steps, tired",
      "both suspended high on silks, limbs entwined",
      "one hanging by the knees reaching down to the other",
      "both balanced on the wire, arms out",
      "both at a mirror applying makeup, side by side",
      "both sitting on the edge, exhausted and quiet",
      "one painting the other's face with careful hands",
      "both small before the glowing tent, hand in hand",
      "both dancing in the empty sawdust, no music",
      "both standing in the wreckage, staring at the sky"
    ],
    "looks": [
      "red sequined leotard and stiff gold collar each",
      "tailored ringmaster tailcoat with braid each",
      "white training leotard and ballet shoes each",
      "patched wool jacket and faded sequins each",
      "striped performer's costume and worn boots each",
      "ringmaster's coat with tarnished braid each",
      "sleek body-hugging performance suit each",
      "flowing silk costume with long ribbons each",
      "minimal pale leotard and chalked hands each",
      "half-done clown makeup and baggy costume each",
      "cardigan over a sequined costume each",
      "robe over a rhinestone costume each",
      "faded finery and an oversized coat each",
      "dark coat over a bright costume each",
      "simple street clothes with a tinsel scarf each"
    ],
    "promptSuffix": "Colour grade: big top red and gold, Soviet poster primary, Depression sepia and dust, single ring spotlight darkness."
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
          "a dusty western main street at high noon",
          "a saloon with swinging doors and a piano gone quiet",
          "a canyon of red rocks at dawn, an ambush"
        ],
        "poses": [
          "both shoulder to shoulder facing an unseen gunman, hands near their holsters",
          "both bursting through the doors with guns drawn",
          "both crouched behind rocks, firing back"
        ],
        "looks": [
          "dusty poncho duster and wide-brimmed hat each",
          "leather vest bandana and gun belt each",
          "long coat spurs and scuffed boots each"
        ]
      },
      "honour vs. survival": {
        "locs": [
          "a misty field at dawn, long grass and drifting fog",
          "a bamboo forest in falling rain",
          "a feudal village churned to mud as a storm breaks"
        ],
        "poses": [
          "both in a low drawing stance, blades half out of the scabbard",
          "both mid-cut, rain spraying off the steel",
          "both back to back, circled by unseen foes"
        ],
        "looks": [
          "worn kimono hakama and sword at the hip each",
          "straw hat and rain cape each",
          "dark layered robes and bandaged hands each"
        ]
      },
      "the mission vs. the person": {
        "locs": [
          "a rain-slick alley under a flickering streetlamp",
          "a detective's office striped with blind shadows",
          "a rooftop in the rain above a neon city"
        ],
        "poses": [
          "both running through the rain, coats flying",
          "one gripping the other's arm in the shadows, pistols drawn",
          "both pinned against the wall as headlights sweep past"
        ],
        "looks": [
          "trench coat and fedora each",
          "rumpled suit with a loosened tie each",
          "long dark coat with the collar turned up each"
        ]
      },
      "alone vs. together": {
        "locs": [
          "a wooden training hall of dummies and paper screens",
          "a neon-lit rooftop at night",
          "a crowded market street mid-brawl"
        ],
        "poses": [
          "one mid flying kick, the other blocking",
          "both in fighting stances, back to back",
          "both mid-spin, sweeping through attackers"
        ],
        "looks": [
          "white training gi and bare feet each",
          "silk jacket and flared trousers each",
          "simple black kung fu suit each"
        ]
      },
      "the last stand vs. the first step": {
        "locs": [
          "a chapel full of white doves and flying splinters",
          "a warehouse of splintering crates and spent shells",
          "a hospital corridor, shots echoing"
        ],
        "poses": [
          "both firing a pistol in each hand, coats flaring",
          "both diving sideways through the air in slow motion",
          "both sliding across the floor, guns raised"
        ],
        "looks": [
          "black suit white shirt and sunglasses each",
          "long dark coat and slicked-back hair each",
          "tailored suit with a flower in the lapel each"
        ]
      },
      "justice vs. vengeance": {
        "locs": [
          "a storm-tossed ship deck of swinging ropes",
          "a harbour tavern mid-brawl",
          "a sea cave of treasure and torchlight"
        ],
        "poses": [
          "both crossing swords in a duel up in the rigging",
          "both swinging across on a rope, blades out",
          "both back to back, circled by pirates"
        ],
        "looks": [
          "billowing white shirt tricorn hat and sash each",
          "ragged waistcoat boots and cutlass each",
          "embroidered captain's coat and feathered hat each"
        ]
      },
      "the hero vs. what made them": {
        "locs": [
          "a city skyline at night cut by a searchlight beam",
          "a rooftop ledge above a rain of neon",
          "a crumbling bridge mid-collapse"
        ],
        "poses": [
          "one leaping from the ledge, the other catching the cape",
          "both landing in a crouch, fists on the ground",
          "both standing heroic, capes snapping in the wind"
        ],
        "looks": [
          "bold costume cape and mask each",
          "armoured suit with a glowing chest emblem each",
          "tattered cape over street clothes each"
        ]
      },
      "past vs. redemption": {
        "locs": [
          "a dust-choked highway of wrecked cars",
          "a scrap-built fortress under a blood-orange sky",
          "a salt flat crossed by armoured vehicles"
        ],
        "poses": [
          "both hanging off the side of a speeding armoured truck",
          "both standing atop the wreck scanning the horizon",
          "both sprinting across the sand, dragging supplies"
        ],
        "looks": [
          "scavenged leather and goggles each",
          "patched armour and tattered scarves each",
          "rags and bandages with a heavy weapon each"
        ]
      },
      "the gun vs. the choice": {
        "locs": [
          "a night city street of screeching tyres",
          "a graffiti-covered parking structure under flickering lights",
          "a fire escape above a steaming alley"
        ],
        "poses": [
          "both sprinting after a speeding car",
          "one leaping the bonnet, the other already behind the wheel",
          "both vaulting a fence mid-chase"
        ],
        "looks": [
          "wide-collared leather jacket and flared jeans each",
          "afro and bell-bottoms with a big belt each",
          "sharp 70s suit and aviator sunglasses each"
        ]
      },
      "walking away vs. staying": {
        "locs": [
          "a misty mountain peak above a sea of cloud",
          "a bamboo canopy high above the forest floor",
          "a courtyard of falling cherry blossom"
        ],
        "poses": [
          "both leaping weightless through the treetops",
          "both mid-spin, robes streaming like banners",
          "both balanced on the tip of a sword"
        ],
        "looks": [
          "flowing silk robes and long sleeves each",
          "white and indigo costume each",
          "embroidered tunic and trailing sash each"
        ]
      }
    },
    "locs": [
      "a dusty western main street at high noon",
      "a saloon with swinging doors and a piano gone quiet",
      "a canyon of red rocks at dawn, an ambush",
      "a misty field at dawn, long grass and drifting fog",
      "a bamboo forest in falling rain",
      "a feudal village churned to mud as a storm breaks",
      "a rain-slick alley under a flickering streetlamp",
      "a detective's office striped with blind shadows",
      "a rooftop in the rain above a neon city",
      "a wooden training hall of dummies and paper screens",
      "a neon-lit rooftop at night",
      "a crowded market street mid-brawl",
      "a chapel full of white doves and flying splinters",
      "a warehouse of splintering crates and spent shells",
      "a hospital corridor, shots echoing",
      "a storm-tossed ship deck of swinging ropes",
      "a harbour tavern mid-brawl",
      "a sea cave of treasure and torchlight",
      "a city skyline at night cut by a searchlight beam",
      "a rooftop ledge above a rain of neon",
      "a crumbling bridge mid-collapse",
      "a dust-choked highway of wrecked cars",
      "a scrap-built fortress under a blood-orange sky",
      "a salt flat crossed by armoured vehicles",
      "a night city street of screeching tyres",
      "a graffiti-covered parking structure under flickering lights",
      "a fire escape above a steaming alley",
      "a misty mountain peak above a sea of cloud",
      "a bamboo canopy high above the forest floor",
      "a courtyard of falling cherry blossom"
    ],
    "poses": [
      "both shoulder to shoulder facing an unseen gunman, hands near their holsters",
      "both bursting through the doors with guns drawn",
      "both crouched behind rocks, firing back",
      "both in a low drawing stance, blades half out of the scabbard",
      "both mid-cut, rain spraying off the steel",
      "both back to back, circled by unseen foes",
      "both running through the rain, coats flying",
      "one gripping the other's arm in the shadows, pistols drawn",
      "both pinned against the wall as headlights sweep past",
      "one mid flying kick, the other blocking",
      "both in fighting stances, back to back",
      "both mid-spin, sweeping through attackers",
      "both firing a pistol in each hand, coats flaring",
      "both diving sideways through the air in slow motion",
      "both sliding across the floor, guns raised",
      "both crossing swords in a duel up in the rigging",
      "both swinging across on a rope, blades out",
      "both back to back, circled by pirates",
      "one leaping from the ledge, the other catching the cape",
      "both landing in a crouch, fists on the ground",
      "both standing heroic, capes snapping in the wind",
      "both hanging off the side of a speeding armoured truck",
      "both standing atop the wreck scanning the horizon",
      "both sprinting across the sand, dragging supplies",
      "both sprinting after a speeding car",
      "one leaping the bonnet, the other already behind the wheel",
      "both vaulting a fence mid-chase",
      "both leaping weightless through the treetops",
      "both mid-spin, robes streaming like banners",
      "both balanced on the tip of a sword"
    ],
    "looks": [
      "dusty poncho duster and wide-brimmed hat each",
      "leather vest bandana and gun belt each",
      "long coat spurs and scuffed boots each",
      "worn kimono hakama and sword at the hip each",
      "straw hat and rain cape each",
      "dark layered robes and bandaged hands each",
      "trench coat and fedora each",
      "rumpled suit with a loosened tie each",
      "long dark coat with the collar turned up each",
      "white training gi and bare feet each",
      "silk jacket and flared trousers each",
      "simple black kung fu suit each",
      "black suit white shirt and sunglasses each",
      "long dark coat and slicked-back hair each",
      "tailored suit with a flower in the lapel each",
      "billowing white shirt tricorn hat and sash each",
      "ragged waistcoat boots and cutlass each",
      "embroidered captain's coat and feathered hat each",
      "bold costume cape and mask each",
      "armoured suit with a glowing chest emblem each",
      "tattered cape over street clothes each",
      "scavenged leather and goggles each",
      "patched armour and tattered scarves each",
      "rags and bandages with a heavy weapon each",
      "wide-collared leather jacket and flared jeans each",
      "afro and bell-bottoms with a big belt each",
      "sharp 70s suit and aviator sunglasses each",
      "flowing silk robes and long sleeves each",
      "white and indigo costume each",
      "embroidered tunic and trailing sash each"
    ],
    "promptPrefix": "Cinematic action genre still — mid-action, movement implied — ",
    "promptSuffix": "A frame from the action, not a poster: the subjects are in motion or about to move.",
    "variantDirectives": [
      "Wide action frame, the figures small against the vast landscape or street: ",
      "Full-body low-angle frame mid-movement, action carries the drama: ",
      "Extreme close-up, eyes and tension fill the frame: ",
      "Stark silhouette composition, one hard light, minimal detail: ",
      "The setting dominates the frame, the figures secondary to the place: ",
      "Costume and gear take centre stage, the figures framed to show them: "
    ]
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
          "funfair at closing time lights going out",
          "carnival field dawn before opening",
          "carousel empty morning after"
        ],
        "poses": [
          "both walking alone through the litter, hand in hand",
          "both sitting on the carousel's edge, quiet",
          "both watching the lights go out, one resting a head on the other"
        ],
        "looks": [
          "couple nostalgic casual each",
          "locals casual modest each",
          "childhood nostalgia casual, simple each"
        ]
      },
      "real vs. performance": {
        "locs": [
          "ghost train entrance carnival night",
          "hall of mirrors funfair interior",
          "fortune teller caravan carnival exterior"
        ],
        "poses": [
          "both reflected a hundred times, startled",
          "one hiding behind the other, laughing and scared",
          "one having a palm read, the other sceptical"
        ],
        "looks": [
          "costume-contest dressed up each",
          "first-date nervous dressed up each",
          "dark fortune-telling shawls and jewellery each"
        ]
      },
      "beautiful vs. ugly": {
        "locs": [
          "ghost train car interior dark",
          "hall of mirrors reflection infinite",
          "carnival fire eater performance area"
        ],
        "poses": [
          "one hiding behind the other, laughing and scared",
          "one having a palm read, the other sceptical",
          "both gaping at the flames, lit orange"
        ],
        "looks": [
          "first-date nervous dressed up each",
          "dark fortune-telling shawls and jewellery each",
          "vintage 1970s-style outfit each"
        ]
      },
      "childhood vs. adulthood": {
        "locs": [
          "candyfloss stall dusk light pink",
          "hook-a-duck stall fairground lights",
          "coconut shy stall string lights"
        ],
        "poses": [
          "both sharing a stick of candy, sticky-fingered and laughing",
          "one handing the other a giant prize, grinning",
          "both competing fiercely, tongues out in concentration"
        ],
        "looks": [
          "summer dress and shorts each, casual",
          "school-holiday casual clothes each, young",
          "date-night casual, a little effort made each"
        ]
      },
      "winning vs. losing": {
        "locs": [
          "carnival food van candleapple dusk",
          "toffee apple stall amber light",
          "test your strength tower carnival"
        ],
        "poses": [
          "one handing the other a giant prize, grinning",
          "both competing fiercely, tongues out in concentration",
          "both licking toffee apples, eyes closed in delight"
        ],
        "looks": [
          "school-holiday casual clothes each, young",
          "date-night casual, a little effort made each",
          "tourist casual family clothes each"
        ]
      },
      "bright vs. dark": {
        "locs": [
          "carnival midway night both sides lit",
          "carnival entrance arch neon night",
          "carnival crowd midway night"
        ],
        "poses": [
          "both in the crowd, looking at each other, the world blurring",
          "both looking up at the sky bursting with colour, faces lit",
          "both waiting in the queue, hands entwined"
        ],
        "looks": [
          "night-out dressed up each",
          "couple-anniversary nostalgic outfits each",
          "hooded top and jeans, night chill each"
        ]
      },
      "together vs. alone in a crowd": {
        "locs": [
          "carnival ticket booth night queue",
          "carnival arc lights full night",
          "carnival fireworks above ferris wheel"
        ],
        "poses": [
          "both looking up at the sky bursting with colour, faces lit",
          "both waiting in the queue, hands entwined",
          "both walking arm in arm, lights streaking past"
        ],
        "looks": [
          "couple-anniversary nostalgic outfits each",
          "hooded top and jeans, night chill each",
          "festival casual layers each, evening"
        ]
      },
      "magical vs. mechanical": {
        "locs": [
          "ferris wheel top night city glow",
          "waltzers spinning neon blur night",
          "big wheel base looking up night"
        ],
        "poses": [
          "both with arms in the air, mouths open in a scream of joy",
          "both clinging to the rail, laughing, hair streaming",
          "both leaning together in the moving seat, neon smearing past"
        ],
        "looks": [
          "denim jacket and sundress each",
          "hooded top and jeans each",
          "festival casual layers each"
        ]
      },
      "freedom vs. routine": {
        "locs": [
          "carnival back lot behind rides",
          "carnival generator truck back area",
          "trailer park carnival workers housing"
        ],
        "poses": [
          "both sitting on the steps, tired, sharing a flask",
          "both laughing as one hauls a heavy cable",
          "both leaning on a rusty truck, staring into the distance"
        ],
        "looks": [
          "worker practical clothes each, uniform",
          "worker off shift casual, tired each",
          "travelling show worker practical each"
        ]
      },
      "laughter vs. loneliness": {
        "locs": [
          "carnival field last night season",
          "funfair entrance gates daytime",
          "carnival midway dawn packing up"
        ],
        "poses": [
          "both sitting on the carousel's edge, quiet",
          "both watching the lights go out, one resting a head on the other",
          "both standing at the gates, the day not yet begun"
        ],
        "looks": [
          "locals casual modest each",
          "childhood nostalgia casual, simple each",
          "hoodie and coat against the cold each"
        ]
      },
      "season vs. end of season": {
        "locs": [
          "carnival field first light morning",
          "fairground organ carousel music",
          "funfair at closing time lights going out"
        ],
        "poses": [
          "both watching the lights go out, one resting a head on the other",
          "both standing at the gates, the day not yet begun",
          "both walking alone through the litter, hand in hand"
        ],
        "looks": [
          "childhood nostalgia casual, simple each",
          "hoodie and coat against the cold each",
          "couple nostalgic casual each"
        ]
      },
      "spectacle vs. ordinary": {
        "locs": [
          "carnival back lot empty evening",
          "funfair field afternoon setup",
          "carnival back lot behind rides"
        ],
        "poses": [
          "both laughing as one hauls a heavy cable",
          "both leaning on a rusty truck, staring into the distance",
          "one repairing a ride, the other holding the torch"
        ],
        "looks": [
          "worker off shift casual, tired each",
          "travelling show worker practical each",
          "local teen casual, bored each"
        ]
      },
      "sugar vs. bitter": {
        "locs": [
          "shooting gallery neon prizes",
          "prize soft toy stall overloaded",
          "cotton candy machine spinning pink"
        ],
        "poses": [
          "both competing fiercely, tongues out in concentration",
          "both licking toffee apples, eyes closed in delight",
          "both sharing a stick of candy, sticky-fingered and laughing"
        ],
        "looks": [
          "date-night casual, a little effort made each",
          "tourist casual family clothes each",
          "summer dress and shorts each, casual"
        ]
      },
      "anticipation vs. disappointment": {
        "locs": [
          "carousel horses night lights spinning",
          "big wheel gondola night suspended",
          "bumper cars overhead sparks night"
        ],
        "poses": [
          "both clinging to the rail, laughing, hair streaming",
          "both leaning together in the moving seat, neon smearing past",
          "one waving down at the crowd, the other holding on tight"
        ],
        "looks": [
          "hooded top and jeans each",
          "festival casual layers each",
          "vintage fairground-style dress and shirt each"
        ]
      },
      "last night vs. first night": {
        "locs": [
          "carnival field dawn before opening",
          "carousel empty morning after",
          "carnival field last night season"
        ],
        "poses": [
          "both standing at the gates, the day not yet begun",
          "both walking alone through the litter, hand in hand",
          "both sitting on the carousel's edge, quiet"
        ],
        "looks": [
          "hoodie and coat against the cold each",
          "couple nostalgic casual each",
          "locals casual modest each"
        ]
      },
      "seen vs. overlooked in the crowd": {
        "locs": [
          "ferris wheel reflection puddle rain",
          "carnival midway night both sides lit",
          "carnival entrance arch neon night"
        ],
        "poses": [
          "both waiting in the queue, hands entwined",
          "both walking arm in arm, lights streaking past",
          "both in the crowd, looking at each other, the world blurring"
        ],
        "looks": [
          "hooded top and jeans, night chill each",
          "festival casual layers each, evening",
          "night-out dressed up each"
        ]
      },
      "love vs. heartbreak midway": {
        "locs": [
          "dodgems arena carnival neon",
          "helter skelter base night",
          "waltzer operator platform night"
        ],
        "poses": [
          "both leaning together in the moving seat, neon smearing past",
          "one waving down at the crowd, the other holding on tight",
          "both with arms in the air, mouths open in a scream of joy"
        ],
        "looks": [
          "festival casual layers each",
          "vintage fairground-style dress and shirt each",
          "denim jacket and sundress each"
        ]
      },
      "gaudy vs. sublime": {
        "locs": [
          "carnival crowd midway night",
          "carnival ticket booth night queue",
          "carnival arc lights full night"
        ],
        "poses": [
          "both walking arm in arm, lights streaking past",
          "both in the crowd, looking at each other, the world blurring",
          "both looking up at the sky bursting with colour, faces lit"
        ],
        "looks": [
          "festival casual layers each, evening",
          "night-out dressed up each",
          "couple-anniversary nostalgic outfits each"
        ]
      },
      "passing vs. permanent": {
        "locs": [
          "carnival generator truck back area",
          "trailer park carnival workers housing",
          "carnival back lot empty evening"
        ],
        "poses": [
          "both leaning on a rusty truck, staring into the distance",
          "one repairing a ride, the other holding the torch",
          "both sitting on the steps, tired, sharing a flask"
        ],
        "looks": [
          "travelling show worker practical each",
          "local teen casual, bored each",
          "worker practical clothes each, uniform"
        ]
      },
      "innocent vs. knowing": {
        "locs": [
          "candy stripe tent interior carnival",
          "carnival stage performance area",
          "ghost train entrance carnival night"
        ],
        "poses": [
          "one having a palm read, the other sceptical",
          "both gaping at the flames, lit orange",
          "both reflected a hundred times, startled"
        ],
        "looks": [
          "dark fortune-telling shawls and jewellery each",
          "vintage 1970s-style outfit each",
          "costume-contest dressed up each"
        ]
      }
    },
    "locs": [
      "ferris wheel top night city glow",
      "waltzers spinning neon blur night",
      "big wheel base looking up night",
      "carousel horses night lights spinning",
      "big wheel gondola night suspended",
      "bumper cars overhead sparks night",
      "dodgems arena carnival neon",
      "helter skelter base night",
      "waltzer operator platform night",
      "dodgem car stationary waiting",
      "waltzer stationary between rides",
      "candyfloss stall dusk light pink",
      "hook-a-duck stall fairground lights",
      "coconut shy stall string lights",
      "carnival food van candleapple dusk",
      "toffee apple stall amber light",
      "test your strength tower carnival",
      "shooting gallery neon prizes",
      "prize soft toy stall overloaded",
      "cotton candy machine spinning pink",
      "hook-a-duck water reflection lights",
      "prize wheel spin carnival neon",
      "ghost train entrance carnival night",
      "hall of mirrors funfair interior",
      "fortune teller caravan carnival exterior",
      "ghost train car interior dark",
      "hall of mirrors reflection infinite",
      "carnival fire eater performance area",
      "candy stripe tent interior carnival",
      "carnival stage performance area",
      "carnival midway night both sides lit",
      "carnival entrance arch neon night",
      "carnival crowd midway night",
      "carnival ticket booth night queue",
      "carnival arc lights full night",
      "carnival fireworks above ferris wheel",
      "ferris wheel reflection puddle rain",
      "carnival back lot behind rides",
      "carnival generator truck back area",
      "trailer park carnival workers housing",
      "carnival back lot empty evening",
      "funfair field afternoon setup",
      "funfair at closing time lights going out",
      "carnival field dawn before opening",
      "carousel empty morning after",
      "carnival field last night season",
      "funfair entrance gates daytime",
      "carnival midway dawn packing up",
      "carnival field first light morning",
      "fairground organ carousel music"
    ],
    "poses": [
      "both with arms in the air, mouths open in a scream of joy",
      "both clinging to the rail, laughing, hair streaming",
      "both leaning together in the moving seat, neon smearing past",
      "one waving down at the crowd, the other holding on tight",
      "both sharing a stick of candy, sticky-fingered and laughing",
      "one handing the other a giant prize, grinning",
      "both competing fiercely, tongues out in concentration",
      "both licking toffee apples, eyes closed in delight",
      "both reflected a hundred times, startled",
      "one hiding behind the other, laughing and scared",
      "one having a palm read, the other sceptical",
      "both gaping at the flames, lit orange",
      "both in the crowd, looking at each other, the world blurring",
      "both looking up at the sky bursting with colour, faces lit",
      "both waiting in the queue, hands entwined",
      "both walking arm in arm, lights streaking past",
      "both sitting on the steps, tired, sharing a flask",
      "both laughing as one hauls a heavy cable",
      "both leaning on a rusty truck, staring into the distance",
      "one repairing a ride, the other holding the torch",
      "both walking alone through the litter, hand in hand",
      "both sitting on the carousel's edge, quiet",
      "both watching the lights go out, one resting a head on the other",
      "both standing at the gates, the day not yet begun"
    ],
    "looks": [
      "denim jacket and sundress each",
      "hooded top and jeans each",
      "festival casual layers each",
      "vintage fairground-style dress and shirt each",
      "summer dress and shorts each, casual",
      "school-holiday casual clothes each, young",
      "date-night casual, a little effort made each",
      "tourist casual family clothes each",
      "costume-contest dressed up each",
      "first-date nervous dressed up each",
      "dark fortune-telling shawls and jewellery each",
      "vintage 1970s-style outfit each",
      "night-out dressed up each",
      "couple-anniversary nostalgic outfits each",
      "hooded top and jeans, night chill each",
      "festival casual layers each, evening",
      "worker practical clothes each, uniform",
      "worker off shift casual, tired each",
      "travelling show worker practical each",
      "local teen casual, bored each",
      "couple nostalgic casual each",
      "locals casual modest each",
      "childhood nostalgia casual, simple each",
      "hoodie and coat against the cold each"
    ],
    "promptSuffix": "Colour grade: saturated carnival neon — magenta, electric blue, acid yellow, warm amber of bulb strings. The beauty should feel slightly too much, slightly sad, the way carnival light always does."
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
          "Dubai penthouse glass tower night city spread",
          "Hong Kong Peninsula hotel lobby formal",
          "Saudi royal palace reception hall formal"
        ],
        "poses": [
          "both gazing out of a vast window, small against the glass",
          "both seated at opposite ends of a long table",
          "both walking a polished corridor, heels echoing"
        ],
        "looks": [
          "immaculate white robe and gold watch each",
          "couture gown and tailored suit each",
          "designer coat and sunglasses each"
        ]
      },
      "power vs. loneliness": {
        "locs": [
          "1920s Wall Street private club oak panelling whiskey",
          "Mayfair private members club 1990s dark wood",
          "Venetian palazzo canal view evening candlelight"
        ],
        "poses": [
          "both sitting stiffly in leather chairs, glasses untouched",
          "both standing apart, a polite smile on each face",
          "one whispering to the other behind a raised glass"
        ],
        "looks": [
          "dark three-piece suit and pearl necklace each",
          "tailored dinner jacket and satin gown each",
          "charcoal suit and silk dress each"
        ]
      },
      "excess vs. hunger": {
        "locs": [
          "1980s Texas oil money ranch interior excess gilt",
          "1980s Wall Street trading floor chaos excess",
          "New York Plaza Hotel suite excess gold"
        ],
        "poses": [
          "both lounging among piles of cash and gilt, bored",
          "both on the phone, shouting over each other",
          "both posing with glasses, shoulders squared"
        ],
        "looks": [
          "power suit with huge shoulder pads each",
          "gold jewellery and a shiny suit each",
          "sequined jacket and big hair each"
        ]
      },
      "the gilded vs. the real": {
        "locs": [
          "Las Vegas high roller suite gold fixtures midnight",
          "Monte Carlo casino floor evening gowns",
          "Monaco grand prix paddock exclusive 1970s"
        ],
        "poses": [
          "both leaning over a table, chips stacked high",
          "both stepping out of a limousine, flashbulbs popping",
          "both toasting with champagne, eyes on someone else"
        ],
        "looks": [
          "tuxedo and sequin evening gown each",
          "glittering cocktail dress and bow tie each",
          "white dinner jacket and silk gown each"
        ]
      },
      "new money vs. old": {
        "locs": [
          "Swiss bank vault interior cold formal",
          "1920s Wall Street private club oak panelling whiskey",
          "Mayfair private members club 1990s dark wood"
        ],
        "poses": [
          "both sitting stiffly in leather chairs, glasses untouched",
          "both standing apart, a polite smile on each face",
          "one whispering to the other behind a raised glass"
        ],
        "looks": [
          "dark three-piece suit and pearl necklace each",
          "tailored dinner jacket and satin gown each",
          "charcoal suit and silk dress each"
        ]
      },
      "bought vs. earned": {
        "locs": [
          "Beverly Hills mansion pool twilight excess",
          "Hamptons waterfront estate summer",
          "Marbella villa pool afternoon Spain excess"
        ],
        "poses": [
          "both stretched out on loungers, sunglasses on",
          "both posing by the water, unsmiling",
          "both walking barefoot across marble, drinks in hand"
        ],
        "looks": [
          "white linen and oversized sunglasses each",
          "designer swimwear and silk robes each",
          "pastel polo and loose silk dress each"
        ]
      },
      "the surface vs. what's beneath": {
        "locs": [
          "Dubai penthouse glass tower night city spread",
          "Hong Kong Peninsula hotel lobby formal",
          "Saudi royal palace reception hall formal"
        ],
        "poses": [
          "both gazing out of a vast window, small against the glass",
          "both seated at opposite ends of a long table",
          "both walking a polished corridor, heels echoing"
        ],
        "looks": [
          "immaculate white robe and gold watch each",
          "couture gown and tailored suit each",
          "designer coat and sunglasses each"
        ]
      },
      "luxury vs. guilt": {
        "locs": [
          "Russian oligarch yacht Mediterranean afternoon",
          "Aspen ski lodge excess fireplace wealthy",
          "Beverly Hills mansion pool twilight excess"
        ],
        "poses": [
          "both stretched out on loungers, sunglasses on",
          "both posing by the water, unsmiling",
          "both walking barefoot across marble, drinks in hand"
        ],
        "looks": [
          "white linen and oversized sunglasses each",
          "designer swimwear and silk robes each",
          "pastel polo and loose silk dress each"
        ]
      },
      "having everything vs. wanting more": {
        "locs": [
          "Cannes film festival yacht harbour evening",
          "Las Vegas high roller suite gold fixtures midnight",
          "Monte Carlo casino floor evening gowns"
        ],
        "poses": [
          "both leaning over a table, chips stacked high",
          "both stepping out of a limousine, flashbulbs popping",
          "both toasting with champagne, eyes on someone else"
        ],
        "looks": [
          "tuxedo and sequin evening gown each",
          "glittering cocktail dress and bow tie each",
          "white dinner jacket and silk gown each"
        ]
      },
      "the golden cage vs. freedom": {
        "locs": [
          "1970s Studio 54 excess night velvet gold",
          "1980s Texas oil money ranch interior excess gilt",
          "1980s Wall Street trading floor chaos excess"
        ],
        "poses": [
          "both lounging among piles of cash and gilt, bored",
          "both on the phone, shouting over each other",
          "both posing with glasses, shoulders squared"
        ],
        "looks": [
          "power suit with huge shoulder pads each",
          "gold jewellery and a shiny suit each",
          "sequined jacket and big hair each"
        ]
      }
    },
    "locs": [
      "1920s Wall Street private club oak panelling whiskey",
      "Mayfair private members club 1990s dark wood",
      "Venetian palazzo canal view evening candlelight",
      "Swiss bank vault interior cold formal",
      "1980s Texas oil money ranch interior excess gilt",
      "1980s Wall Street trading floor chaos excess",
      "New York Plaza Hotel suite excess gold",
      "1970s Studio 54 excess night velvet gold",
      "Dubai penthouse glass tower night city spread",
      "Hong Kong Peninsula hotel lobby formal",
      "Saudi royal palace reception hall formal",
      "Las Vegas high roller suite gold fixtures midnight",
      "Monte Carlo casino floor evening gowns",
      "Monaco grand prix paddock exclusive 1970s",
      "Cannes film festival yacht harbour evening",
      "Beverly Hills mansion pool twilight excess",
      "Hamptons waterfront estate summer",
      "Marbella villa pool afternoon Spain excess",
      "Russian oligarch yacht Mediterranean afternoon",
      "Aspen ski lodge excess fireplace wealthy"
    ],
    "poses": [
      "both sitting stiffly in leather chairs, glasses untouched",
      "both standing apart, a polite smile on each face",
      "one whispering to the other behind a raised glass",
      "both lounging among piles of cash and gilt, bored",
      "both on the phone, shouting over each other",
      "both posing with glasses, shoulders squared",
      "both gazing out of a vast window, small against the glass",
      "both seated at opposite ends of a long table",
      "both walking a polished corridor, heels echoing",
      "both leaning over a table, chips stacked high",
      "both stepping out of a limousine, flashbulbs popping",
      "both toasting with champagne, eyes on someone else",
      "both stretched out on loungers, sunglasses on",
      "both posing by the water, unsmiling",
      "both walking barefoot across marble, drinks in hand"
    ],
    "looks": [
      "dark three-piece suit and pearl necklace each",
      "tailored dinner jacket and satin gown each",
      "charcoal suit and silk dress each",
      "power suit with huge shoulder pads each",
      "gold jewellery and a shiny suit each",
      "sequined jacket and big hair each",
      "immaculate white robe and gold watch each",
      "couture gown and tailored suit each",
      "designer coat and sunglasses each",
      "tuxedo and sequin evening gown each",
      "glittering cocktail dress and bow tie each",
      "white dinner jacket and silk gown each",
      "white linen and oversized sunglasses each",
      "designer swimwear and silk robes each",
      "pastel polo and loose silk dress each"
    ],
    "promptSuffix": "Colour grade: gold, dark wood, cold glass tower gleam at night. Warm and cold at once."
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
      "caricature",
      "Monet",
      "Frida Kahlo",
      "Dalí",
      "Magritte",
      "Hokusai",
      "Basquiat",
      "Keith Haring",
      "Tamara de Lempicka",
      "Leonardo",
      "Munch",
      "Studio Ghibli",
      "Byzantine mosaic",
      "Pre-Raphaelites",
      "Norman Rockwell",
      "Hergé"
    ],
    "affinities": {
      "Rembrandt": {
        "locs": [
          "a dark candlelit interior with a deep brown ground",
          "a grand biblical scene with figures emerging from darkness",
          "a bare winter landscape under a cold grey Dutch sky"
        ],
        "poses": [
          "both close together in an intimate three-quarter portrait",
          "both mid dramatic gesture caught in a shaft of light",
          "both small figures walking a frozen path"
        ],
        "looks": [
          "dark velvet doublet with a white lace collar each",
          "simple linen working dress and cap each",
          "loose draped cloth and a gold chain each"
        ]
      },
      "Caravaggio": {
        "locs": [
          "a stone-floored room lit by a single candle",
          "a sunlit yard with deep diagonal shadows",
          "a tavern table in dramatic low light"
        ],
        "poses": [
          "both emerging from the darkness lit from one side",
          "both reaching mid-gesture hands in the light",
          "both caught mid-action at the table"
        ],
        "looks": [
          "rough linen shirt and loose cloth each",
          "16th century Roman dress with billowing sleeves each",
          "draped red cloth and plain tunic each"
        ]
      },
      "Velázquez": {
        "locs": [
          "a grand Spanish court room receding into shadow",
          "a working kitchen with one bright window",
          "airy Spanish countryside under a pale sky"
        ],
        "poses": [
          "both formal and dignified in a full-length court portrait",
          "both busy at kitchen work caught naturally",
          "both relaxed in hunting poses outdoors"
        ],
        "looks": [
          "black Habsburg court dress with a white ruff each",
          "plain working clothes and apron each",
          "hunting coat and boots each"
        ]
      },
      "Goya": {
        "locs": [
          "a black-walled room with an unsettling void behind",
          "an opulent court salon with glittering light",
          "a dark countryside at night lit by a fire"
        ],
        "poses": [
          "both staring out confrontational and exposed",
          "both stiffly posed with uneasy eyes",
          "both huddled together lit by firelight"
        ],
        "looks": [
          "dark clothes dissolving into black each",
          "embroidered court dress and silk coat each",
          "Spanish maja dress and short cape each"
        ]
      },
      "Vermeer": {
        "locs": [
          "a tiled-floor Dutch room lit by a left-hand window",
          "a quiet corner with a map on the wall and a table",
          "a window over a canal with the room in soft shadow"
        ],
        "poses": [
          "both absorbed in a quiet task lit from the window",
          "one reading a letter other glancing over",
          "both seated at the window looking out"
        ],
        "looks": [
          "yellow jacket and blue skirt each",
          "white linen cap and simple dress each",
          "dark merchant coat and white collar each"
        ]
      },
      "Rubens": {
        "locs": [
          "a mythological landscape under a stormy golden sky",
          "a hunt with galloping horses",
          "an allegorical interior hung with rich drapery"
        ],
        "poses": [
          "both in dynamic mid-movement poses wrapped in cloth",
          "both riding hard in the hunt",
          "both embracing amid swirling drapery"
        ],
        "looks": [
          "flowing silk and velvet in deep reds each",
          "riding coat and plumed hat each",
          "classical draped robes each"
        ]
      },
      "Van Gogh": {
        "locs": [
          "a wheat field under a swirling sky at noon",
          "a night café lit by yellow gaslight",
          "a small bedroom of tilted flat colour walls"
        ],
        "poses": [
          "both standing close in the swirling field",
          "both at a café table under yellow light",
          "both seated on the narrow bed"
        ],
        "looks": [
          "straw hat and blue work clothes each",
          "rough jacket and cap each",
          "plain shirt and waistcoat each"
        ]
      },
      "Klimt": {
        "locs": [
          "a gold ornamental background of swirling patterns",
          "a flat golden tree of life with scrolling branches",
          "a patterned Viennese interior of gold and mosaic"
        ],
        "poses": [
          "both locked in a tender embrace wrapped in robes",
          "one standing tall other leaning close in a tall vertical composition",
          "both small against the swirling golden tree"
        ],
        "looks": [
          "gold patterned robes with geometric mosaic motifs each",
          "long ornamental gown and patterned coat each",
          "Vienna Secession dress with gold detail each"
        ]
      },
      "Picasso": {
        "locs": [
          "an ochre and grey interior of fractured planes",
          "a sparse blue-toned room of flat melancholy",
          "a warm terracotta circus ring in soft light"
        ],
        "poses": [
          "both shown front and profile at once, faces split",
          "both thin and still in a melancholy huddle",
          "both tender as travelling acrobats"
        ],
        "looks": [
          "geometric fractured clothes in angular shapes each",
          "thin ragged clothes in blue tones each",
          "soft harlequin acrobat costume each"
        ]
      },
      "Matisse": {
        "locs": [
          "an interior of clashing patterned fabrics and wallpaper",
          "an open blue sky with dancing figures",
          "abstract cut-paper shapes in bright flat colour"
        ],
        "poses": [
          "both reclining among cushions in flat colour",
          "both dancing hand in hand mid-movement",
          "both reduced to bold simple silhouettes"
        ],
        "looks": [
          "patterned robe in bold flat colour each",
          "simple draped cloth each",
          "plain silhouettes in vivid colour each"
        ]
      },
      "Modigliani": {
        "locs": [
          "a warm ochre wall of a Paris studio",
          "a plain warm ground behind a reclining figure",
          "a bare room with one chair in warm earth tones"
        ],
        "poses": [
          "both with long necks and tilted heads side by side",
          "one reclining one watching",
          "both facing each other close, oval faces"
        ],
        "looks": [
          "open-collared simple shirt each",
          "soft draped cloth in muted tones each",
          "1910s Parisian jacket and dress each"
        ]
      },
      "Gauguin": {
        "locs": [
          "a lush tropical clearing in flat bold colour",
          "a hut interior with a woven mat floor",
          "a Brittany village green in flat colour"
        ],
        "poses": [
          "both seated frontal and still amid tropical colour",
          "both sharing a mat on the floor",
          "both standing outlined against flat green"
        ],
        "looks": [
          "bright wrapped cloth sarong each",
          "simple cotton dress and shirt each",
          "Breton traditional dress and cap each"
        ]
      },
      "Toulouse-Lautrec": {
        "locs": [
          "a cabaret stage with a red glow and a dancing crowd",
          "a cluttered intimate backstage dressing room",
          "a lamplit café table at night"
        ],
        "poses": [
          "both mid-dance in a flat graphic silhouette",
          "both seated at a dressing table, intimate",
          "both leaning at a café table watching the room"
        ],
        "looks": [
          "can-can dress with frilly petticoats each",
          "loose dressing gown each",
          "1890s Parisian bourgeois dress and coat each"
        ]
      },
      "Hopper": {
        "locs": [
          "a late-night diner with a glaring fluorescent glow",
          "a sunlit bedroom with a bare window",
          "a white clapboard house under harsh sunlight"
        ],
        "poses": [
          "both at the counter not looking at each other",
          "one seated by the window other standing apart",
          "both on the porch lost in thought"
        ],
        "looks": [
          "1940s working coat and hat each",
          "simple 1940s dress and cardigan each",
          "1930s casual jacket and slacks each"
        ]
      },
      "Bacon": {
        "locs": [
          "a flat orange-red room with a bare bulb",
          "a caged space against a black void",
          "a studio floor of smeared paint and newsprint"
        ],
        "poses": [
          "both contorted in separate panels, faces smeared",
          "both compressed against a curtain, screaming",
          "both tangled together on the floor"
        ],
        "looks": [
          "plain dark suit blurred and smeared each",
          "simple shirt and trousers torn by motion each",
          "bare simple clothes distorted by paint each"
        ]
      },
      "Warhol": {
        "locs": [
          "a grid of four repeated panels in clashing colours",
          "a silver foil walled factory room",
          "a flat newsprint background in stark black and white"
        ],
        "poses": [
          "both frontal and flat, repeated in four panels",
          "both lounging in a silver room, 1960s",
          "both stark and still against the newsprint"
        ],
        "looks": [
          "1960s mod dress and turtleneck each",
          "black polo neck and sunglasses each",
          "plain clothes flattened to bold colour each"
        ]
      },
      "Lichtenstein": {
        "locs": [
          "a comic panel with a speech bubble and dotted background",
          "a war comic explosion in red and yellow",
          "a giant brushstroke painted as a comic"
        ],
        "poses": [
          "one crying dramatically other consoling inside a single comic panel",
          "both in dramatic action mid-explosion",
          "both posed like a parody of abstract painting"
        ],
        "looks": [
          "comic book dress with thick outlines each",
          "pilot uniform and helmet each",
          "simple clothes drawn in bold dots each"
        ]
      },
      "Banksy": {
        "locs": [
          "a peeling brick wall with a stencilled rat",
          "a seaside wall with a red balloon",
          "a museum wall hung with a stencilled scene"
        ],
        "poses": [
          "both holding protest signs in stencil silhouette",
          "one reaching for a balloon other watching",
          "both pushing a shopping trolley like cave dwellers"
        ],
        "looks": [
          "plain hoodie and cap in stencil black each",
          "simple child-like clothes each",
          "dark silhouettes with one splash of red each"
        ]
      },
      "Mucha": {
        "locs": [
          "an ornate floral border with a gold halo",
          "a circular four-seasons panel with ornamental border",
          "a theatre poster frame with space for lettering"
        ],
        "poses": [
          "both with flowing hair framed by flowers",
          "both posed in a circular panel of the seasons",
          "both striking a dramatic theatrical pose"
        ],
        "looks": [
          "flowing gown with botanical ornament each",
          "draped robes with flower crowns each",
          "theatrical costume in muted pastels each"
        ]
      },
      "caricature": {
        "locs": [
          "a broadsheet page with a bold inked border",
          "a Paris street scene in lithograph shading",
          "an over-the-top Georgian parlour"
        ],
        "poses": [
          "both with giant heads exaggerating their best features",
          "both bickering over a cartoon street",
          "both bloated with pomp and excess"
        ],
        "looks": [
          "exaggerated costume swollen with pomp each",
          "19th century top hat and frock coat each",
          "ridiculous Georgian wig and silks each"
        ]
      },
      "Monet": {
        "locs": [
          "a water lily pond with a Japanese bridge",
          "a sunlit poppy field in soft haze",
          "a harbour at dawn in pastel mist"
        ],
        "poses": [
          "both strolling the bridge under parasols",
          "both lying in the poppies in the sun",
          "both standing at the water's edge, reflected"
        ],
        "looks": [
          "white summer dress and straw hat each",
          "light linen suit and boater hat each",
          "pastel dress and parasol each"
        ]
      },
      "Frida Kahlo": {
        "locs": [
          "a garden of giant tropical leaves and flowers",
          "a blue house courtyard with parrots",
          "a bed surrounded by symbols and roots"
        ],
        "poses": [
          "both frontal and unflinching with joined hands",
          "both with monkeys and parrots at the shoulders",
          "both facing us with twined roots between them"
        ],
        "looks": [
          "Tehuana dress with a braided flower crown each",
          "embroidered blouse and rebozo each",
          "bright folk dress and heavy jewellery each"
        ]
      },
      "Dalí": {
        "locs": [
          "an empty desert plain under a golden sky with melted clocks",
          "a dream landscape of floating objects and crutches",
          "a long-shadowed beach of impossible rocks"
        ],
        "poses": [
          "both watching the strange horizon, small and still",
          "both draped over a melting shape",
          "both walking together toward the vast shadow"
        ],
        "looks": [
          "tailored suit and long gown each, surreal calm",
          "white shirt and trousers each",
          "1930s evening wear each"
        ]
      },
      "Magritte": {
        "locs": [
          "a blue sky of white clouds above a quiet street",
          "an ordinary room where a green apple floats",
          "a seaside with a bird-shaped sky"
        ],
        "poses": [
          "both standing blankly in bowler hats, faces hidden",
          "both with a floating apple in front of their faces",
          "both calm as day turns to night in the same frame"
        ],
        "looks": [
          "dark overcoat and bowler hat each",
          "plain suit and white shirt each",
          "1930s office clothes each"
        ]
      },
      "Hokusai": {
        "locs": [
          "a towering wave about to crash with Mount Fuji beyond",
          "a cherry blossom bridge in flat colour",
          "a snowy village under a pale sky"
        ],
        "poses": [
          "both in a small boat facing the huge wave",
          "both on the bridge looking up at the blossom",
          "both walking hand in hand through the snow"
        ],
        "looks": [
          "silk kimono and obi in indigo and white each",
          "straw rain cape and hat each",
          "traditional Edo-period dress each"
        ]
      },
      "Basquiat": {
        "locs": [
          "a scrawled graffiti ground with handwritten words",
          "a crowded canvas of crowns and symbols",
          "an orange and blue background with crossed-out text"
        ],
        "poses": [
          "both as raw figures with gaping eyes",
          "both under a three-point crown",
          "both side by side as skeletal totems"
        ],
        "looks": [
          "paint-splattered oversized suit each",
          "bold coloured scrawled outfit each",
          "street clothes covered in drawings each"
        ]
      },
      "Keith Haring": {
        "locs": [
          "a bright flat colour background with radiating lines",
          "a dance floor of dancing outlines",
          "a subway-wall style chalk drawing"
        ],
        "poses": [
          "both dancing as outlined figures with radiating lines",
          "both holding up a glowing baby figure",
          "both mid-leap in bold line"
        ],
        "looks": [
          "solid bright jumpsuits outlined in black each",
          "simple stick-figure style clothing each",
          "bold colour block outfits each"
        ]
      },
      "Tamara de Lempicka": {
        "locs": [
          "an Art Deco skyline of silver skyscrapers",
          "a sleek open-top car in gleaming chrome",
          "a night terrace of geometric shadows"
        ],
        "poses": [
          "both elegant and aloof, leaning together",
          "one at the wheel other draped over the door",
          "both silhouetted in dramatic glamour"
        ],
        "looks": [
          "metallic silk gown and tailored tuxedo each",
          "leather driving cap and scarf each",
          "evening dress with feathers each"
        ]
      },
      "Leonardo": {
        "locs": [
          "a hazy blue mountain landscape behind a balcony",
          "a rocky grotto in soft light",
          "a plain dark ground with delicate shadows"
        ],
        "poses": [
          "both with a faint mysterious smile, hands folded",
          "one turned in three-quarter profile other watching",
          "both seated close in a calm pyramid composition"
        ],
        "looks": [
          "Renaissance dress with gathered sleeves each",
          "dark robe and veil each",
          "simple 15th century tunic and cloak each"
        ]
      },
      "Munch": {
        "locs": [
          "a blood-red sky over a long pier",
          "a moonlit fjord shore of wavy shapes",
          "a bare room under yellow-green lamplight"
        ],
        "poses": [
          "both with hands pressed to their cheeks, screaming silently",
          "both locked in a haunted kiss",
          "both leaning on the railing in anxiety"
        ],
        "looks": [
          "dark long coats and hats each",
          "simple dark dress and suit each",
          "thin pale nightclothes each"
        ]
      },
      "Studio Ghibli": {
        "locs": [
          "a green hill under towering clouds and a breeze",
          "a small seaside town with a train running on the water",
          "a forest clearing of glowing spirits"
        ],
        "poses": [
          "both on a hillside with wind in their hair",
          "both on a train over shimmering water",
          "both meeting a giant gentle spirit in the forest"
        ],
        "looks": [
          "simple cotton dress and satchel each",
          "school-style shirt and shorts each",
          "woollen scarf and coat in soft pastels each"
        ]
      },
      "Byzantine mosaic": {
        "locs": [
          "a gold mosaic apse under a starry dome",
          "a jewelled arch with peacocks and vines",
          "a church wall of blue and gold tiles"
        ],
        "poses": [
          "both frontal and still with halos",
          "both holding hands flanked by angels",
          "both enthroned side by side"
        ],
        "looks": [
          "jewelled imperial robes and crowns each",
          "long embroidered tunics each",
          "gold-trimmed cloaks with pearls each"
        ]
      },
      "Pre-Raphaelites": {
        "locs": [
          "a river of floating flowers in dense detail",
          "a tapestried medieval chamber",
          "a woodland glade of ivy and wildflowers"
        ],
        "poses": [
          "both gazing wistfully, hair loose",
          "one lying in the water other mourning",
          "both reading in the glade"
        ],
        "looks": [
          "flowing velvet gown with long hair each",
          "medieval tunic and hose each",
          "draped green silk dress and floral crown each"
        ]
      },
      "Norman Rockwell": {
        "locs": [
          "a warm 1950s kitchen with a family table",
          "a small-town soda fountain counter",
          "a front porch on a sunny afternoon"
        ],
        "poses": [
          "both caught in a gently comic moment, wide-eyed",
          "both sharing a milkshake with two straws",
          "both on the porch swing waving"
        ],
        "looks": [
          "1950s aprons and shirtsleeves each",
          "varsity sweater and poodle skirt each",
          "Sunday best coat and hat each"
        ]
      },
      "Hergé": {
        "locs": [
          "a clear-sky harbour with a steamship",
          "a desert of flat yellow sand and a tiny plane",
          "a busy cobbled European street in neat colour"
        ],
        "poses": [
          "both running in an adventure-comic stride",
          "both peering at a clue through a magnifying glass",
          "both leaning from the rail of a ship"
        ],
        "looks": [
          "tan trench coat and plus fours each",
          "sailor jumper and boots each",
          "1930s travel suit and hat each"
        ]
      }
    },
    "locs": [
      "a dark candlelit interior with a deep brown ground",
      "a grand biblical scene with figures emerging from darkness",
      "a bare winter landscape under a cold grey Dutch sky",
      "a stone-floored room lit by a single candle",
      "a sunlit yard with deep diagonal shadows",
      "a tavern table in dramatic low light",
      "a grand Spanish court room receding into shadow",
      "a working kitchen with one bright window",
      "airy Spanish countryside under a pale sky",
      "a black-walled room with an unsettling void behind",
      "an opulent court salon with glittering light",
      "a dark countryside at night lit by a fire",
      "a tiled-floor Dutch room lit by a left-hand window",
      "a quiet corner with a map on the wall and a table",
      "a window over a canal with the room in soft shadow",
      "a mythological landscape under a stormy golden sky",
      "a hunt with galloping horses",
      "an allegorical interior hung with rich drapery",
      "a wheat field under a swirling sky at noon",
      "a night café lit by yellow gaslight",
      "a small bedroom of tilted flat colour walls",
      "a gold ornamental background of swirling patterns",
      "a flat golden tree of life with scrolling branches",
      "a patterned Viennese interior of gold and mosaic",
      "an ochre and grey interior of fractured planes",
      "a sparse blue-toned room of flat melancholy",
      "a warm terracotta circus ring in soft light",
      "an interior of clashing patterned fabrics and wallpaper",
      "an open blue sky with dancing figures",
      "abstract cut-paper shapes in bright flat colour",
      "a warm ochre wall of a Paris studio",
      "a plain warm ground behind a reclining figure",
      "a bare room with one chair in warm earth tones",
      "a lush tropical clearing in flat bold colour",
      "a hut interior with a woven mat floor",
      "a Brittany village green in flat colour",
      "a cabaret stage with a red glow and a dancing crowd",
      "a cluttered intimate backstage dressing room",
      "a lamplit café table at night",
      "a late-night diner with a glaring fluorescent glow",
      "a sunlit bedroom with a bare window",
      "a white clapboard house under harsh sunlight",
      "a flat orange-red room with a bare bulb",
      "a caged space against a black void",
      "a studio floor of smeared paint and newsprint",
      "a grid of four repeated panels in clashing colours",
      "a silver foil walled factory room",
      "a flat newsprint background in stark black and white",
      "a comic panel with a speech bubble and dotted background",
      "a war comic explosion in red and yellow",
      "a giant brushstroke painted as a comic",
      "a peeling brick wall with a stencilled rat",
      "a seaside wall with a red balloon",
      "a museum wall hung with a stencilled scene",
      "an ornate floral border with a gold halo",
      "a circular four-seasons panel with ornamental border",
      "a theatre poster frame with space for lettering",
      "a broadsheet page with a bold inked border",
      "a Paris street scene in lithograph shading",
      "an over-the-top Georgian parlour",
      "a water lily pond with a Japanese bridge",
      "a sunlit poppy field in soft haze",
      "a harbour at dawn in pastel mist",
      "a garden of giant tropical leaves and flowers",
      "a blue house courtyard with parrots",
      "a bed surrounded by symbols and roots",
      "an empty desert plain under a golden sky with melted clocks",
      "a dream landscape of floating objects and crutches",
      "a long-shadowed beach of impossible rocks",
      "a blue sky of white clouds above a quiet street",
      "an ordinary room where a green apple floats",
      "a seaside with a bird-shaped sky",
      "a towering wave about to crash with Mount Fuji beyond",
      "a cherry blossom bridge in flat colour",
      "a snowy village under a pale sky",
      "a scrawled graffiti ground with handwritten words",
      "a crowded canvas of crowns and symbols",
      "an orange and blue background with crossed-out text",
      "a bright flat colour background with radiating lines",
      "a dance floor of dancing outlines",
      "a subway-wall style chalk drawing",
      "an Art Deco skyline of silver skyscrapers",
      "a sleek open-top car in gleaming chrome",
      "a night terrace of geometric shadows",
      "a hazy blue mountain landscape behind a balcony",
      "a rocky grotto in soft light",
      "a plain dark ground with delicate shadows",
      "a blood-red sky over a long pier",
      "a moonlit fjord shore of wavy shapes",
      "a bare room under yellow-green lamplight",
      "a green hill under towering clouds and a breeze",
      "a small seaside town with a train running on the water",
      "a forest clearing of glowing spirits",
      "a gold mosaic apse under a starry dome",
      "a jewelled arch with peacocks and vines",
      "a church wall of blue and gold tiles",
      "a river of floating flowers in dense detail",
      "a tapestried medieval chamber",
      "a woodland glade of ivy and wildflowers",
      "a warm 1950s kitchen with a family table",
      "a small-town soda fountain counter",
      "a front porch on a sunny afternoon",
      "a clear-sky harbour with a steamship",
      "a desert of flat yellow sand and a tiny plane",
      "a busy cobbled European street in neat colour"
    ],
    "poses": [
      "both close together in an intimate three-quarter portrait",
      "both mid dramatic gesture caught in a shaft of light",
      "both small figures walking a frozen path",
      "both emerging from the darkness lit from one side",
      "both reaching mid-gesture hands in the light",
      "both caught mid-action at the table",
      "both formal and dignified in a full-length court portrait",
      "both busy at kitchen work caught naturally",
      "both relaxed in hunting poses outdoors",
      "both staring out confrontational and exposed",
      "both stiffly posed with uneasy eyes",
      "both huddled together lit by firelight",
      "both absorbed in a quiet task lit from the window",
      "one reading a letter other glancing over",
      "both seated at the window looking out",
      "both in dynamic mid-movement poses wrapped in cloth",
      "both riding hard in the hunt",
      "both embracing amid swirling drapery",
      "both standing close in the swirling field",
      "both at a café table under yellow light",
      "both seated on the narrow bed",
      "both locked in a tender embrace wrapped in robes",
      "one standing tall other leaning close in a tall vertical composition",
      "both small against the swirling golden tree",
      "both shown front and profile at once, faces split",
      "both thin and still in a melancholy huddle",
      "both tender as travelling acrobats",
      "both reclining among cushions in flat colour",
      "both dancing hand in hand mid-movement",
      "both reduced to bold simple silhouettes",
      "both with long necks and tilted heads side by side",
      "one reclining one watching",
      "both facing each other close, oval faces",
      "both seated frontal and still amid tropical colour",
      "both sharing a mat on the floor",
      "both standing outlined against flat green",
      "both mid-dance in a flat graphic silhouette",
      "both seated at a dressing table, intimate",
      "both leaning at a café table watching the room",
      "both at the counter not looking at each other",
      "one seated by the window other standing apart",
      "both on the porch lost in thought",
      "both contorted in separate panels, faces smeared",
      "both compressed against a curtain, screaming",
      "both tangled together on the floor",
      "both frontal and flat, repeated in four panels",
      "both lounging in a silver room, 1960s",
      "both stark and still against the newsprint",
      "one crying dramatically other consoling inside a single comic panel",
      "both in dramatic action mid-explosion",
      "both posed like a parody of abstract painting",
      "both holding protest signs in stencil silhouette",
      "one reaching for a balloon other watching",
      "both pushing a shopping trolley like cave dwellers",
      "both with flowing hair framed by flowers",
      "both posed in a circular panel of the seasons",
      "both striking a dramatic theatrical pose",
      "both with giant heads exaggerating their best features",
      "both bickering over a cartoon street",
      "both bloated with pomp and excess",
      "both strolling the bridge under parasols",
      "both lying in the poppies in the sun",
      "both standing at the water's edge, reflected",
      "both frontal and unflinching with joined hands",
      "both with monkeys and parrots at the shoulders",
      "both facing us with twined roots between them",
      "both watching the strange horizon, small and still",
      "both draped over a melting shape",
      "both walking together toward the vast shadow",
      "both standing blankly in bowler hats, faces hidden",
      "both with a floating apple in front of their faces",
      "both calm as day turns to night in the same frame",
      "both in a small boat facing the huge wave",
      "both on the bridge looking up at the blossom",
      "both walking hand in hand through the snow",
      "both as raw figures with gaping eyes",
      "both under a three-point crown",
      "both side by side as skeletal totems",
      "both dancing as outlined figures with radiating lines",
      "both holding up a glowing baby figure",
      "both mid-leap in bold line",
      "both elegant and aloof, leaning together",
      "one at the wheel other draped over the door",
      "both silhouetted in dramatic glamour",
      "both with a faint mysterious smile, hands folded",
      "one turned in three-quarter profile other watching",
      "both seated close in a calm pyramid composition",
      "both with hands pressed to their cheeks, screaming silently",
      "both locked in a haunted kiss",
      "both leaning on the railing in anxiety",
      "both on a hillside with wind in their hair",
      "both on a train over shimmering water",
      "both meeting a giant gentle spirit in the forest",
      "both frontal and still with halos",
      "both holding hands flanked by angels",
      "both enthroned side by side",
      "both gazing wistfully, hair loose",
      "one lying in the water other mourning",
      "both reading in the glade",
      "both caught in a gently comic moment, wide-eyed",
      "both sharing a milkshake with two straws",
      "both on the porch swing waving",
      "both running in an adventure-comic stride",
      "both peering at a clue through a magnifying glass",
      "both leaning from the rail of a ship"
    ],
    "looks": [
      "dark velvet doublet with a white lace collar each",
      "simple linen working dress and cap each",
      "loose draped cloth and a gold chain each",
      "rough linen shirt and loose cloth each",
      "16th century Roman dress with billowing sleeves each",
      "draped red cloth and plain tunic each",
      "black Habsburg court dress with a white ruff each",
      "plain working clothes and apron each",
      "hunting coat and boots each",
      "dark clothes dissolving into black each",
      "embroidered court dress and silk coat each",
      "Spanish maja dress and short cape each",
      "yellow jacket and blue skirt each",
      "white linen cap and simple dress each",
      "dark merchant coat and white collar each",
      "flowing silk and velvet in deep reds each",
      "riding coat and plumed hat each",
      "classical draped robes each",
      "straw hat and blue work clothes each",
      "rough jacket and cap each",
      "plain shirt and waistcoat each",
      "gold patterned robes with geometric mosaic motifs each",
      "long ornamental gown and patterned coat each",
      "Vienna Secession dress with gold detail each",
      "geometric fractured clothes in angular shapes each",
      "thin ragged clothes in blue tones each",
      "soft harlequin acrobat costume each",
      "patterned robe in bold flat colour each",
      "simple draped cloth each",
      "plain silhouettes in vivid colour each",
      "open-collared simple shirt each",
      "soft draped cloth in muted tones each",
      "1910s Parisian jacket and dress each",
      "bright wrapped cloth sarong each",
      "simple cotton dress and shirt each",
      "Breton traditional dress and cap each",
      "can-can dress with frilly petticoats each",
      "loose dressing gown each",
      "1890s Parisian bourgeois dress and coat each",
      "1940s working coat and hat each",
      "simple 1940s dress and cardigan each",
      "1930s casual jacket and slacks each",
      "plain dark suit blurred and smeared each",
      "simple shirt and trousers torn by motion each",
      "bare simple clothes distorted by paint each",
      "1960s mod dress and turtleneck each",
      "black polo neck and sunglasses each",
      "plain clothes flattened to bold colour each",
      "comic book dress with thick outlines each",
      "pilot uniform and helmet each",
      "simple clothes drawn in bold dots each",
      "plain hoodie and cap in stencil black each",
      "simple child-like clothes each",
      "dark silhouettes with one splash of red each",
      "flowing gown with botanical ornament each",
      "draped robes with flower crowns each",
      "theatrical costume in muted pastels each",
      "exaggerated costume swollen with pomp each",
      "19th century top hat and frock coat each",
      "ridiculous Georgian wig and silks each",
      "white summer dress and straw hat each",
      "light linen suit and boater hat each",
      "pastel dress and parasol each",
      "Tehuana dress with a braided flower crown each",
      "embroidered blouse and rebozo each",
      "bright folk dress and heavy jewellery each",
      "tailored suit and long gown each, surreal calm",
      "white shirt and trousers each",
      "1930s evening wear each",
      "dark overcoat and bowler hat each",
      "plain suit and white shirt each",
      "1930s office clothes each",
      "silk kimono and obi in indigo and white each",
      "straw rain cape and hat each",
      "traditional Edo-period dress each",
      "paint-splattered oversized suit each",
      "bold coloured scrawled outfit each",
      "street clothes covered in drawings each",
      "solid bright jumpsuits outlined in black each",
      "simple stick-figure style clothing each",
      "bold colour block outfits each",
      "metallic silk gown and tailored tuxedo each",
      "leather driving cap and scarf each",
      "evening dress with feathers each",
      "Renaissance dress with gathered sleeves each",
      "dark robe and veil each",
      "simple 15th century tunic and cloak each",
      "dark long coats and hats each",
      "simple dark dress and suit each",
      "thin pale nightclothes each",
      "simple cotton dress and satchel each",
      "school-style shirt and shorts each",
      "woollen scarf and coat in soft pastels each",
      "jewelled imperial robes and crowns each",
      "long embroidered tunics each",
      "gold-trimmed cloaks with pearls each",
      "flowing velvet gown with long hair each",
      "medieval tunic and hose each",
      "draped green silk dress and floral crown each",
      "1950s aprons and shirtsleeves each",
      "varsity sweater and poodle skirt each",
      "Sunday best coat and hat each",
      "tan trench coat and plus fours each",
      "sailor jumper and boots each",
      "1930s travel suit and hat each"
    ],
    "tensionIsStyle": true,
    "variantDirectives": [
      "Full-length double portrait, the figures small within a grand painted setting: ",
      "Three-quarter length double portrait, posture and gesture carry the feeling: ",
      "Tight head-and-shoulders portrait, faces fill the canvas: ",
      "Bold simplified composition, one dominant shape, minimal detail: ",
      "The setting dominates the canvas, the figures secondary to the scene: ",
      "Costume and fabric take centre stage, the figures posed to show the dress: "
    ],
    "promptPrefix": "Fine art portrait as an original artwork — ",
    "promptSuffix": "The subjects exist inside the artwork, not in front of it."
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
      "one holding a garment detail up, the other examining it",
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
    "promptSuffix": "Every element of the frame is considered: the garments are the protagonist, the lighting deliberate and sculptural.",
    "variantDirectives": [
      "Wide runway frame, the figures small within the show space: ",
      "Full-length editorial frame, movement and posture carry the mood: ",
      "Tight beauty close-up, faces fill the frame: ",
      "One hard light on a bare set, stark and minimal: ",
      "The set and architecture dominate the frame, the figures secondary: ",
      "Full-length lookbook frame, every detail of the garments visible: "
    ]
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
          "seamless white paper backdrop studio infinity curve",
          "seamless black paper backdrop studio infinity curve",
          "seamless mid-grey paper backdrop studio"
        ],
        "poses": [
          "both facing the camera, upright and quiet",
          "one seated, one standing behind with hands on the shoulders",
          "both in profile, foreheads almost touching"
        ],
        "looks": [
          "all black, tonal and sleek each",
          "all white, tonal and soft each",
          "cream and ivory tailoring each"
        ]
      },
      "power vs. vulnerability": {
        "locs": [
          "studio wall mirror full length floor to ceiling",
          "a mirrored room reflecting both of them endlessly",
          "a Hollywood glamour set with a velvet sofa and champagne"
        ],
        "poses": [
          "both lounging, glamorous and aloof",
          "one reaching for the other's face in the reflection",
          "both close, chins lifted, a film-star stare"
        ],
        "looks": [
          "black-tie tuxedo and evening gown each",
          "satin slip dress and velvet jacket each",
          "sequin gown and white dinner jacket each"
        ]
      },
      "distance vs. closeness": {
        "locs": [
          "white painted studio floor with white backdrop seamless",
          "black painted studio floor with black backdrop seamless",
          "light wood studio floor with white backdrop"
        ],
        "poses": [
          "one reclining, the other leaning over the arm",
          "both perched on one seat, knees touching",
          "one seated, the other sitting on the arm"
        ],
        "looks": [
          "tailored suits, sharp and professional each",
          "mid-century wool jackets and trousers each",
          "architectural shoulders and structured jackets each"
        ]
      },
      "formal vs. intimate": {
        "locs": [
          "seamless cream paper backdrop studio",
          "seamless pale blush paper backdrop studio",
          "seamless forest green paper backdrop studio"
        ],
        "poses": [
          "one seated, one standing behind with hands on the shoulders",
          "both in profile, foreheads almost touching",
          "back to back, each looking over a shoulder"
        ],
        "looks": [
          "all white, tonal and soft each",
          "cream and ivory tailoring each",
          "navy and white, clean lines each"
        ]
      },
      "performance vs. presence": {
        "locs": [
          "a 1970s living room set with shag carpet and a lava lamp",
          "a retro diner booth built on the studio floor",
          "a striped circus-tent set with a single spotlight"
        ],
        "poses": [
          "both striking a retro pose, deadpan and deliberate",
          "one lounging, the other posing like a catalogue model",
          "both mid-laugh, caught in the set's fantasy"
        ],
        "looks": [
          "1970s printed shirt and flares each",
          "striped circus-inspired outfits each",
          "vintage cocktail dress and dinner jacket each"
        ]
      },
      "controlled vs. unravelling": {
        "locs": [
          "a black set with a confetti cannon mid-burst",
          "a white cyc with a wind machine and flowing fabric",
          "a haze-filled black set cut by a single beam of light"
        ],
        "poses": [
          "both leaping, hair and fabric flying",
          "both caught mid-spin, fabric streaming",
          "both with arms thrown up, laughing in the burst"
        ],
        "looks": [
          "flowing white dress and loose shirt each",
          "long coats caught in the wind each",
          "sheer layers and billowing sleeves each"
        ]
      },
      "strength vs. tenderness": {
        "locs": [
          "hand-painted grey muslin backdrop studio",
          "hand-painted white-to-dark graduated muslin studio",
          "cream linen textured backdrop studio"
        ],
        "poses": [
          "both wrapped in the same long length of cloth",
          "one half-hidden behind the fabric, the other reaching for it",
          "both seated in a drift of material, heads together"
        ],
        "looks": [
          "sheer layers and heavy knit each, a contrast of textures",
          "raw-hem deconstructed jackets each",
          "soft draped fabric falling loosely each"
        ]
      },
      "seen vs. hidden": {
        "locs": [
          "seamless silver reflective backdrop studio",
          "seamless gold reflective backdrop studio warm",
          "frosted perspex panel backlit studio white glow"
        ],
        "poses": [
          "both lit in two colours, faces split by the light",
          "one in shadow, the other glowing, hands almost touching",
          "both leaning in, backlit, outlines glowing"
        ],
        "looks": [
          "bold block colours each, saturated",
          "white shirts catching the coloured light each",
          "metallic fabrics and sequins each"
        ]
      },
      "stillness vs. tension": {
        "locs": [
          "dark wood studio floor with dark backdrop",
          "white studio floor posing platform raised",
          "plain wooden stool studio white backdrop"
        ],
        "poses": [
          "both perched on one seat, knees touching",
          "one seated, the other sitting on the arm",
          "both on the raised block, one standing, one kneeling"
        ],
        "looks": [
          "mid-century wool jackets and trousers each",
          "architectural shoulders and structured jackets each",
          "smart turtlenecks and pleated trousers each"
        ]
      },
      "classical vs. raw": {
        "locs": [
          "a hall of draped red velvet curtains",
          "a pastel inflatable set of giant soft shapes",
          "a wall of stacked vintage televisions flickering"
        ],
        "poses": [
          "one lounging, the other posing like a catalogue model",
          "both mid-laugh, caught in the set's fantasy",
          "both sitting stiffly, pretending nothing is odd"
        ],
        "looks": [
          "striped circus-inspired outfits each",
          "vintage cocktail dress and dinner jacket each",
          "candy pastels and big collars each"
        ]
      },
      "surface vs. depth": {
        "locs": [
          "dark velvet fabric backdrop studio deep black",
          "raw canvas unpainted backdrop studio neutral",
          "draped silk fabric backdrop studio ivory"
        ],
        "poses": [
          "one half-hidden behind the fabric, the other reaching for it",
          "both seated in a drift of material, heads together",
          "one draped across the other's lap, eyes closed"
        ],
        "looks": [
          "raw-hem deconstructed jackets each",
          "soft draped fabric falling loosely each",
          "wool coat over bare shoulders each"
        ]
      },
      "together vs. alone in the same frame": {
        "locs": [
          "director's chair canvas studio grey backdrop",
          "mid-century posing chair studio neutral backdrop",
          "chaise longue upholstered studio white backdrop"
        ],
        "poses": [
          "one seated, the other sitting on the arm",
          "both on the raised block, one standing, one kneeling",
          "one reclining, the other leaning over the arm"
        ],
        "looks": [
          "architectural shoulders and structured jackets each",
          "smart turtlenecks and pleated trousers each",
          "tailored suits, sharp and professional each"
        ]
      },
      "eye contact vs. avoidance": {
        "locs": [
          "coloured gel background studio deep blue",
          "coloured gel background studio deep red",
          "split gel backdrop in hot pink and electric blue"
        ],
        "poses": [
          "one in shadow, the other glowing, hands almost touching",
          "both leaning in, backlit, outlines glowing",
          "both gazing at the camera, saturated and still"
        ],
        "looks": [
          "white shirts catching the coloured light each",
          "metallic fabrics and sequins each",
          "jewel tones, rich and saturated each"
        ]
      },
      "dressed vs. undressed": {
        "locs": [
          "a boudoir set with lace curtains and a vanity mirror",
          "a black-and-white checkerboard floor with a single chair",
          "a wall of glowing neon tubes in solid colour"
        ],
        "poses": [
          "one reaching for the other's face in the reflection",
          "both close, chins lifted, a film-star stare",
          "one fixing the other's collar, eyes on the camera"
        ],
        "looks": [
          "satin slip dress and velvet jacket each",
          "sequin gown and white dinner jacket each",
          "fur-trimmed coat and silk gown each"
        ]
      },
      "public self vs. private self": {
        "locs": [
          "a faux-marble staircase set with a gold balustrade",
          "a 1970s living room set with shag carpet and a lava lamp",
          "a retro diner booth built on the studio floor"
        ],
        "poses": [
          "both mid-laugh, caught in the set's fantasy",
          "both sitting stiffly, pretending nothing is odd",
          "both striking a retro pose, deadpan and deliberate"
        ],
        "looks": [
          "vintage cocktail dress and dinner jacket each",
          "candy pastels and big collars each",
          "1970s printed shirt and flares each"
        ]
      },
      "confidence vs. doubt": {
        "locs": [
          "a set drenched in a curtain of falling droplets",
          "a coloured powder cloud against a clean backdrop",
          "a bubble machine filling a pastel set"
        ],
        "poses": [
          "both caught mid-spin, fabric streaming",
          "both with arms thrown up, laughing in the burst",
          "one lifting the other, both caught in motion"
        ],
        "looks": [
          "long coats caught in the wind each",
          "sheer layers and billowing sleeves each",
          "light colours that catch the movement each"
        ]
      },
      "connection vs. isolation": {
        "locs": [
          "saturated yellow backdrop with a hard graphic shadow",
          "rainbow gel wash across a white cyc",
          "green and magenta gel crossfire on a dark set"
        ],
        "poses": [
          "both leaning in, backlit, outlines glowing",
          "both gazing at the camera, saturated and still",
          "both lit in two colours, faces split by the light"
        ],
        "looks": [
          "metallic fabrics and sequins each",
          "jewel tones, rich and saturated each",
          "bold block colours each, saturated"
        ]
      },
      "beauty vs. truth": {
        "locs": [
          "studio wall mirror full length floor to ceiling",
          "a mirrored room reflecting both of them endlessly",
          "a Hollywood glamour set with a velvet sofa and champagne"
        ],
        "poses": [
          "both close, chins lifted, a film-star stare",
          "one fixing the other's collar, eyes on the camera",
          "both lounging, glamorous and aloof"
        ],
        "looks": [
          "sequin gown and white dinner jacket each",
          "fur-trimmed coat and silk gown each",
          "black-tie tuxedo and evening gown each"
        ]
      },
      "light vs. shadow": {
        "locs": [
          "seamless silver reflective backdrop studio",
          "seamless gold reflective backdrop studio warm",
          "frosted perspex panel backlit studio white glow"
        ],
        "poses": [
          "both gazing at the camera, saturated and still",
          "both lit in two colours, faces split by the light",
          "one in shadow, the other glowing, hands almost touching"
        ],
        "looks": [
          "jewel tones, rich and saturated each",
          "bold block colours each, saturated",
          "white shirts catching the coloured light each"
        ]
      },
      "past vs. present": {
        "locs": [
          "a striped circus-tent set with a single spotlight",
          "a hall of draped red velvet curtains",
          "a pastel inflatable set of giant soft shapes"
        ],
        "poses": [
          "both sitting stiffly, pretending nothing is odd",
          "both striking a retro pose, deadpan and deliberate",
          "one lounging, the other posing like a catalogue model"
        ],
        "looks": [
          "candy pastels and big collars each",
          "1970s printed shirt and flares each",
          "striped circus-inspired outfits each"
        ]
      }
    },
    "locs": [
      "seamless white paper backdrop studio infinity curve",
      "seamless black paper backdrop studio infinity curve",
      "seamless mid-grey paper backdrop studio",
      "seamless cream paper backdrop studio",
      "seamless pale blush paper backdrop studio",
      "seamless forest green paper backdrop studio",
      "seamless dusty blue paper backdrop studio",
      "seamless burgundy paper backdrop studio",
      "bare off-white plaster studio wall textured",
      "raw concrete studio wall exposed aggregate",
      "painted brick interior studio wall white",
      "dark painted studio wall charcoal matte",
      "hand-painted grey muslin backdrop studio",
      "hand-painted white-to-dark graduated muslin studio",
      "cream linen textured backdrop studio",
      "dark velvet fabric backdrop studio deep black",
      "raw canvas unpainted backdrop studio neutral",
      "draped silk fabric backdrop studio ivory",
      "torn edge paper backdrop studio textured white",
      "layered fabric draped backdrop studio improvised dark",
      "white painted studio floor with white backdrop seamless",
      "black painted studio floor with black backdrop seamless",
      "light wood studio floor with white backdrop",
      "dark wood studio floor with dark backdrop",
      "white studio floor posing platform raised",
      "plain wooden stool studio white backdrop",
      "director's chair canvas studio grey backdrop",
      "mid-century posing chair studio neutral backdrop",
      "chaise longue upholstered studio white backdrop",
      "chaise longue upholstered studio dark backdrop",
      "floor level white studio both seated",
      "minimal white cube set studio",
      "minimal black plinth set studio",
      "clear perspex block prop studio white backdrop",
      "seamless silver reflective backdrop studio",
      "seamless gold reflective backdrop studio warm",
      "frosted perspex panel backlit studio white glow",
      "coloured gel background studio deep blue",
      "coloured gel background studio deep red",
      "split gel backdrop in hot pink and electric blue",
      "saturated yellow backdrop with a hard graphic shadow",
      "rainbow gel wash across a white cyc",
      "green and magenta gel crossfire on a dark set",
      "a 1970s living room set with shag carpet and a lava lamp",
      "a retro diner booth built on the studio floor",
      "a striped circus-tent set with a single spotlight",
      "a hall of draped red velvet curtains",
      "a pastel inflatable set of giant soft shapes",
      "a wall of stacked vintage televisions flickering",
      "a faux-marble staircase set with a gold balustrade",
      "a black set with a confetti cannon mid-burst",
      "a white cyc with a wind machine and flowing fabric",
      "a haze-filled black set cut by a single beam of light",
      "a set drenched in a curtain of falling droplets",
      "a coloured powder cloud against a clean backdrop",
      "a bubble machine filling a pastel set",
      "a hanging foil curtain shimmering",
      "studio wall mirror full length floor to ceiling",
      "a mirrored room reflecting both of them endlessly",
      "a Hollywood glamour set with a velvet sofa and champagne",
      "a boudoir set with lace curtains and a vanity mirror",
      "a black-and-white checkerboard floor with a single chair",
      "a wall of glowing neon tubes in solid colour"
    ],
    "poses": [
      "both facing the camera, upright and quiet",
      "one seated, one standing behind with hands on the shoulders",
      "both in profile, foreheads almost touching",
      "back to back, each looking over a shoulder",
      "both wrapped in the same long length of cloth",
      "one half-hidden behind the fabric, the other reaching for it",
      "both seated in a drift of material, heads together",
      "one draped across the other's lap, eyes closed",
      "one reclining, the other leaning over the arm",
      "both perched on one seat, knees touching",
      "one seated, the other sitting on the arm",
      "both on the raised block, one standing, one kneeling",
      "both lit in two colours, faces split by the light",
      "one in shadow, the other glowing, hands almost touching",
      "both leaning in, backlit, outlines glowing",
      "both gazing at the camera, saturated and still",
      "both striking a retro pose, deadpan and deliberate",
      "one lounging, the other posing like a catalogue model",
      "both mid-laugh, caught in the set's fantasy",
      "both sitting stiffly, pretending nothing is odd",
      "both leaping, hair and fabric flying",
      "both caught mid-spin, fabric streaming",
      "both with arms thrown up, laughing in the burst",
      "one lifting the other, both caught in motion",
      "both lounging, glamorous and aloof",
      "one reaching for the other's face in the reflection",
      "both close, chins lifted, a film-star stare",
      "one fixing the other's collar, eyes on the camera"
    ],
    "looks": [
      "all black, tonal and sleek each",
      "all white, tonal and soft each",
      "cream and ivory tailoring each",
      "navy and white, clean lines each",
      "sheer layers and heavy knit each, a contrast of textures",
      "raw-hem deconstructed jackets each",
      "soft draped fabric falling loosely each",
      "wool coat over bare shoulders each",
      "tailored suits, sharp and professional each",
      "mid-century wool jackets and trousers each",
      "architectural shoulders and structured jackets each",
      "smart turtlenecks and pleated trousers each",
      "bold block colours each, saturated",
      "white shirts catching the coloured light each",
      "metallic fabrics and sequins each",
      "jewel tones, rich and saturated each",
      "1970s printed shirt and flares each",
      "striped circus-inspired outfits each",
      "vintage cocktail dress and dinner jacket each",
      "candy pastels and big collars each",
      "flowing white dress and loose shirt each",
      "long coats caught in the wind each",
      "sheer layers and billowing sleeves each",
      "light colours that catch the movement each",
      "black-tie tuxedo and evening gown each",
      "satin slip dress and velvet jacket each",
      "sequin gown and white dinner jacket each",
      "fur-trimmed coat and silk gown each"
    ],
    "promptPrefix": "Professional studio portrait, artificial studio lighting only, no natural light, no windows — ",
    "promptSuffix": "The setting is built inside the studio: backdrop, set or wall, nothing else. Render in rich colour or high-contrast black and white, whichever suits the mood.",
    "variantDirectives": [
      "Full-length on a wide backdrop, the figures small in an empty studio: ",
      "Three-quarter length, hands and posture carry the feeling: ",
      "Tight close portrait, faces fill the frame: ",
      "One light, one backdrop, stark simplicity: ",
      "The backdrop and set dominate the frame, the figures secondary: ",
      "Fashion editorial framing, the garments are the protagonist: "
    ]
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
          "Victorian photographer studio painted garden backdrop",
          "Victorian cabinet card studio velvet chair",
          "Victorian studio painted landscape backdrop"
        ],
        "poses": [
          "both formally posed, one seated, one standing behind",
          "both in profile, facing each other with solemn faces",
          "one holding a parasol, the other's hand resting on a column"
        ],
        "looks": [
          "lace blouse and long skirt with a dark jacket each",
          "striped blazer and boater hat each",
          "white summer dress and linen suit each"
        ]
      },
      "posed vs. caught": {
        "locs": [
          "1960s portrait studio soft focus colour",
          "1960s snapshot garden party Kodak",
          "1960s photobooth strip four frames"
        ],
        "poses": [
          "both laughing, looking away from the camera",
          "both mid-conversation, unaware of the lens",
          "both caught off guard, mid-sentence"
        ],
        "looks": [
          "mod mini dress and slim suit each",
          "shift dress and cardigan each",
          "polo neck and tailored trousers each"
        ]
      },
      "preserved vs. faded": {
        "locs": [
          "daguerreotype studio 1850s painted backdrop column",
          "early photography studio plate camera 1850s",
          "Victorian parlour formal sitting 1860s"
        ],
        "poses": [
          "both rigidly still, hands folded in laps, staring ahead",
          "one seated, the other standing with a hand on the chair back",
          "both slightly blurred, unable to hold still for the long exposure"
        ],
        "looks": [
          "high-collared black dress and dark frock coat each",
          "heavy wool coat and bonnet each",
          "stiff white collar and buttoned waistcoat each"
        ]
      },
      "public face vs. private moment": {
        "locs": [
          "1970s Polaroid instant kitchen casual",
          "1970s family portrait velvet studio backdrop",
          "1970s snapshot holiday beach Kodak"
        ],
        "poses": [
          "both relaxed, laughing at something off-frame",
          "both leaning on each other, easy and unposed",
          "both squinting into the sun, arms around each other"
        ],
        "looks": [
          "wide-lapel suit and maxi dress each",
          "flared jeans and patterned shirt each",
          "knitted tank top and corduroy trousers each"
        ]
      },
      "stiff vs. tender": {
        "locs": [
          "1940s studio portrait wartime formal",
          "1940s press photo studio flash powder",
          "1940s wartime goodbye platform station"
        ],
        "poses": [
          "both serious, looking straight into the lens",
          "one holding the other's hand, composed and formal",
          "both standing close, a quiet goodbye in their eyes"
        ],
        "looks": [
          "utility dress and military uniform each",
          "Sunday best coat and hat each",
          "tailored suit and victory-roll hair each"
        ]
      },
      "the sitter vs. the subject": {
        "locs": [
          "1920s glamour portrait studio dramatic light",
          "1930s Hollywood studio portrait backdrop",
          "1920s art deco portrait studio"
        ],
        "poses": [
          "both glamorous and aloof, chins tilted to the light",
          "both seated close, intimate and poised",
          "one resting a chin on the other's shoulder, eyes to camera"
        ],
        "looks": [
          "beaded flapper dress and dinner suit each",
          "bias-cut satin gown and slim tuxedo each",
          "sleek finger waves and pinstripe suit each"
        ]
      },
      "performance vs. presence": {
        "locs": [
          "1980s portrait studio laser background",
          "1980s snapshot disposable camera party",
          "1980s passport photograph strip booth"
        ],
        "poses": [
          "both striking a confident pose, shoulders squared",
          "both laughing mid-party, flash-lit and red-eyed",
          "both posed stiffly, looking proud"
        ],
        "looks": [
          "power-shoulder dress and double-breasted suit each",
          "neon sweatshirt and acid-wash jeans each",
          "permed hair and pastel suit each"
        ]
      },
      "past vs. present": {
        "locs": [
          "early 2000s digital camera party low resolution",
          "2000s photo print kiosk portrait",
          "2000s candid phone photograph first generation"
        ],
        "poses": [
          "both leaning in for a selfie, arms outstretched",
          "both captured mid-laugh, a little blurred",
          "both posing with peace signs, grainy and low-resolution"
        ],
        "looks": [
          "low-rise jeans and fitted tee each",
          "hoodie and skinny jeans each",
          "casual everyday clothes each"
        ]
      },
      "remembered vs. forgotten": {
        "locs": [
          "Victorian conservatory glass light 1860s",
          "cyanotype portrait early experimental",
          "daguerreotype studio 1850s painted backdrop column"
        ],
        "poses": [
          "one seated, the other standing with a hand on the chair back",
          "both slightly blurred, unable to hold still for the long exposure",
          "both rigidly still, hands folded in laps, staring ahead"
        ],
        "looks": [
          "heavy wool coat and bonnet each",
          "stiff white collar and buttoned waistcoat each",
          "high-collared black dress and dark frock coat each"
        ]
      },
      "the person vs. the image": {
        "locs": [
          "1990s disposable camera snapshot casual",
          "1990s portrait studio soft focus",
          "1990s photobooth mall strip"
        ],
        "poses": [
          "both pulling faces at the camera, flash-lit",
          "both slouched together, casual and deadpan",
          "both squeezed into the frame, laughing"
        ],
        "looks": [
          "slip dress and flannel shirt each",
          "baggy jeans and baby tee each",
          "chunky trainers and tracksuit each"
        ]
      },
      "together vs. separate in time": {
        "locs": [
          "1950s colour portrait studio Kodachrome",
          "1950s suburban garden snapshot summer",
          "1950s school portrait individual backdrop"
        ],
        "poses": [
          "both smiling brightly at the camera, close together",
          "one's arm around the other, casual and cheerful",
          "both seated, hands neatly folded, grinning"
        ],
        "looks": [
          "full-skirted dress and sport coat each",
          "polka dot blouse and cuffed trousers each",
          "cardigan and pleated skirt each"
        ]
      },
      "dignity vs. vulnerability": {
        "locs": [
          "1940s family portrait studio Sunday best",
          "large format studio portrait 1940s sharp",
          "black and white film portrait studio grain"
        ],
        "poses": [
          "one holding the other's hand, composed and formal",
          "both standing close, a quiet goodbye in their eyes",
          "both serious, looking straight into the lens"
        ],
        "looks": [
          "Sunday best coat and hat each",
          "tailored suit and victory-roll hair each",
          "utility dress and military uniform each"
        ]
      },
      "dressed up vs. undone": {
        "locs": [
          "1930s press photograph studio flash",
          "1930s documentary press photograph street",
          "1920s glamour portrait studio dramatic light"
        ],
        "poses": [
          "both seated close, intimate and poised",
          "one resting a chin on the other's shoulder, eyes to camera",
          "both glamorous and aloof, chins tilted to the light"
        ],
        "looks": [
          "bias-cut satin gown and slim tuxedo each",
          "sleek finger waves and pinstripe suit each",
          "beaded flapper dress and dinner suit each"
        ]
      },
      "looking vs. looked at": {
        "locs": [
          "1980s wedding portrait formal studio",
          "35mm film grain portrait casual snapshot",
          "1980s portrait studio laser background"
        ],
        "poses": [
          "both laughing mid-party, flash-lit and red-eyed",
          "both posed stiffly, looking proud",
          "both striking a confident pose, shoulders squared"
        ],
        "looks": [
          "neon sweatshirt and acid-wash jeans each",
          "permed hair and pastel suit each",
          "power-shoulder dress and double-breasted suit each"
        ]
      },
      "light vs. shadow": {
        "locs": [
          "Edwardian seaside portrait studio pier",
          "Edwardian country house drawing room formal",
          "Edwardian portrait studio electric light early"
        ],
        "poses": [
          "both in profile, facing each other with solemn faces",
          "one holding a parasol, the other's hand resting on a column",
          "both formally posed, one seated, one standing behind"
        ],
        "looks": [
          "striped blazer and boater hat each",
          "white summer dress and linen suit each",
          "lace blouse and long skirt with a dark jacket each"
        ]
      },
      "known vs. unrecognised": {
        "locs": [
          "1960s news photograph street candid",
          "1960s photojournalism candid street",
          "colour slide transparency 1960s portrait"
        ],
        "poses": [
          "both mid-conversation, unaware of the lens",
          "both caught off guard, mid-sentence",
          "both laughing, looking away from the camera"
        ],
        "looks": [
          "shift dress and cardigan each",
          "polo neck and tailored trousers each",
          "mod mini dress and slim suit each"
        ]
      },
      "held vs. released": {
        "locs": [
          "1950s department store portrait studio",
          "1950s news agency portrait flash",
          "medium format portrait studio sharp"
        ],
        "poses": [
          "one's arm around the other, casual and cheerful",
          "both seated, hands neatly folded, grinning",
          "both smiling brightly at the camera, close together"
        ],
        "looks": [
          "polka dot blouse and cuffed trousers each",
          "cardigan and pleated skirt each",
          "full-skirted dress and sport coat each"
        ]
      },
      "the face given vs. the face kept": {
        "locs": [
          "1990s school portrait blue gradient backdrop",
          "1990s disposable camera snapshot casual",
          "1990s portrait studio soft focus"
        ],
        "poses": [
          "both slouched together, casual and deadpan",
          "both squeezed into the frame, laughing",
          "both pulling faces at the camera, flash-lit"
        ],
        "looks": [
          "baggy jeans and baby tee each",
          "chunky trainers and tracksuit each",
          "slip dress and flannel shirt each"
        ]
      },
      "then vs. now": {
        "locs": [
          "2010s instagram square portrait early",
          "early 2000s digital camera party low resolution",
          "2000s photo print kiosk portrait"
        ],
        "poses": [
          "both captured mid-laugh, a little blurred",
          "both posing with peace signs, grainy and low-resolution",
          "both leaning in for a selfie, arms outstretched"
        ],
        "looks": [
          "hoodie and skinny jeans each",
          "casual everyday clothes each",
          "low-rise jeans and fitted tee each"
        ]
      },
      "love vs. loss": {
        "locs": [
          "1970s school photograph class outdoor",
          "1970s documentary portrait natural light",
          "instant Polaroid border white portrait"
        ],
        "poses": [
          "both leaning on each other, easy and unposed",
          "both squinting into the sun, arms around each other",
          "both relaxed, laughing at something off-frame"
        ],
        "looks": [
          "flared jeans and patterned shirt each",
          "knitted tank top and corduroy trousers each",
          "wide-lapel suit and maxi dress each"
        ]
      }
    },
    "locs": [
      "daguerreotype studio 1850s painted backdrop column",
      "early photography studio plate camera 1850s",
      "Victorian parlour formal sitting 1860s",
      "Victorian conservatory glass light 1860s",
      "cyanotype portrait early experimental",
      "Victorian photographer studio painted garden backdrop",
      "Victorian cabinet card studio velvet chair",
      "Victorian studio painted landscape backdrop",
      "Edwardian seaside portrait studio pier",
      "Edwardian country house drawing room formal",
      "Edwardian portrait studio electric light early",
      "sepia toned portrait formal studio",
      "1920s glamour portrait studio dramatic light",
      "1930s Hollywood studio portrait backdrop",
      "1920s art deco portrait studio",
      "1930s press photograph studio flash",
      "1930s documentary press photograph street",
      "1940s studio portrait wartime formal",
      "1940s press photo studio flash powder",
      "1940s wartime goodbye platform station",
      "1940s family portrait studio Sunday best",
      "large format studio portrait 1940s sharp",
      "black and white film portrait studio grain",
      "1950s colour portrait studio Kodachrome",
      "1950s suburban garden snapshot summer",
      "1950s school portrait individual backdrop",
      "1950s department store portrait studio",
      "1950s news agency portrait flash",
      "medium format portrait studio sharp",
      "1960s portrait studio soft focus colour",
      "1960s snapshot garden party Kodak",
      "1960s photobooth strip four frames",
      "1960s news photograph street candid",
      "1960s photojournalism candid street",
      "colour slide transparency 1960s portrait",
      "1970s Polaroid instant kitchen casual",
      "1970s family portrait velvet studio backdrop",
      "1970s snapshot holiday beach Kodak",
      "1970s school photograph class outdoor",
      "1970s documentary portrait natural light",
      "instant Polaroid border white portrait",
      "1980s portrait studio laser background",
      "1980s snapshot disposable camera party",
      "1980s passport photograph strip booth",
      "1980s wedding portrait formal studio",
      "35mm film grain portrait casual snapshot",
      "1990s disposable camera snapshot casual",
      "1990s portrait studio soft focus",
      "1990s photobooth mall strip",
      "1990s school portrait blue gradient backdrop",
      "early 2000s digital camera party low resolution",
      "2000s photo print kiosk portrait",
      "2000s candid phone photograph first generation",
      "2010s instagram square portrait early"
    ],
    "poses": [
      "both rigidly still, hands folded in laps, staring ahead",
      "one seated, the other standing with a hand on the chair back",
      "both slightly blurred, unable to hold still for the long exposure",
      "both formally posed, one seated, one standing behind",
      "both in profile, facing each other with solemn faces",
      "one holding a parasol, the other's hand resting on a column",
      "both glamorous and aloof, chins tilted to the light",
      "both seated close, intimate and poised",
      "one resting a chin on the other's shoulder, eyes to camera",
      "both serious, looking straight into the lens",
      "one holding the other's hand, composed and formal",
      "both standing close, a quiet goodbye in their eyes",
      "both smiling brightly at the camera, close together",
      "one's arm around the other, casual and cheerful",
      "both seated, hands neatly folded, grinning",
      "both laughing, looking away from the camera",
      "both mid-conversation, unaware of the lens",
      "both caught off guard, mid-sentence",
      "both relaxed, laughing at something off-frame",
      "both leaning on each other, easy and unposed",
      "both squinting into the sun, arms around each other",
      "both striking a confident pose, shoulders squared",
      "both laughing mid-party, flash-lit and red-eyed",
      "both posed stiffly, looking proud",
      "both pulling faces at the camera, flash-lit",
      "both slouched together, casual and deadpan",
      "both squeezed into the frame, laughing",
      "both leaning in for a selfie, arms outstretched",
      "both captured mid-laugh, a little blurred",
      "both posing with peace signs, grainy and low-resolution"
    ],
    "looks": [
      "high-collared black dress and dark frock coat each",
      "heavy wool coat and bonnet each",
      "stiff white collar and buttoned waistcoat each",
      "lace blouse and long skirt with a dark jacket each",
      "striped blazer and boater hat each",
      "white summer dress and linen suit each",
      "beaded flapper dress and dinner suit each",
      "bias-cut satin gown and slim tuxedo each",
      "sleek finger waves and pinstripe suit each",
      "utility dress and military uniform each",
      "Sunday best coat and hat each",
      "tailored suit and victory-roll hair each",
      "full-skirted dress and sport coat each",
      "polka dot blouse and cuffed trousers each",
      "cardigan and pleated skirt each",
      "mod mini dress and slim suit each",
      "shift dress and cardigan each",
      "polo neck and tailored trousers each",
      "wide-lapel suit and maxi dress each",
      "flared jeans and patterned shirt each",
      "knitted tank top and corduroy trousers each",
      "power-shoulder dress and double-breasted suit each",
      "neon sweatshirt and acid-wash jeans each",
      "permed hair and pastel suit each",
      "slip dress and flannel shirt each",
      "baggy jeans and baby tee each",
      "chunky trainers and tracksuit each",
      "low-rise jeans and fitted tee each",
      "hoodie and skinny jeans each",
      "casual everyday clothes each"
    ],
    "promptPrefix": "Authentic period portrait photograph, historically accurate to the era and photographic technology depicted — ",
    "promptSuffix": "Period-accurate photographic format, lighting, costume and aesthetic throughout, as if genuinely taken then.",
    "variantDirectives": [
      "Wide period frame, the sitters small within the studio or street: ",
      "Full-length period frame, posture and gesture carry the feeling: ",
      "Tight period portrait, faces fill the frame: ",
      "Stark single-light period composition, plain and minimal: ",
      "The period setting dominates the frame, the sitters secondary: ",
      "Period clothing takes centre stage, the sitters framed to show the dress: "
    ]
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
          "a 1969 mission control room of glowing consoles and cigarette smoke",
          "a flight control floor at the moment of success",
          "a control room doorway lit by the big screen's glow"
        ],
        "poses": [
          "both leaping up from their desks cheering, papers in the air",
          "both gripping headsets, waiting for the signal",
          "both shaking hands, grinning with relief"
        ],
        "looks": [
          "short-sleeved white shirt skinny tie and headset each",
          "horn-rimmed glasses and pocket protector each",
          "controller waistcoat and rolled sleeves each"
        ]
      },
      "vastness vs. the small craft": {
        "locs": [
          "a grey cratered lunar plain under a black sky",
          "a lander's leg and long shadows on grey dust",
          "a ridge of grey dust with a small planted flag"
        ],
        "poses": [
          "both bounding in low gravity, dust kicking up",
          "both planting a flag side by side",
          "both kneeling to collect rock samples"
        ],
        "looks": [
          "bulky white spacesuit, helmet under one arm each",
          "dust-grey suit with the visor raised each",
          "suit with gloved hands and a chest camera each"
        ]
      },
      "home vs. the void": {
        "locs": [
          "a cramped space station module crowded with cables",
          "a module wall of laptops and floating tools",
          "a sleeping nook of bags clipped to the wall"
        ],
        "poses": [
          "both floating weightless, hair drifting",
          "both upside down, laughing at a floating droplet",
          "both tethered at the wall, sharing a meal pouch"
        ],
        "looks": [
          "blue flight suit and soft cap each",
          "polo shirt and soft trousers each",
          "thermal long sleeves and socks each"
        ]
      },
      "the launch vs. the return": {
        "locs": [
          "a pre-launch suit-up room with white suits on racks",
          "a gantry walkway to a towering rocket at dawn",
          "a crew van beside the launch pad in pale light"
        ],
        "poses": [
          "both checking each other's suit seals, nervous smiles",
          "both walking out arm in arm toward the gantry",
          "both waving as the van door closes"
        ],
        "looks": [
          "orange launch suit and white helmet each",
          "white pressure suit with a breathing hose each",
          "blue crew jacket and boots each"
        ]
      },
      "earth vs. orbit": {
        "locs": [
          "a station cupola window with Earth glowing blue below",
          "a dome of windows over the curve of the planet",
          "a porthole at sunrise over a vast ocean"
        ],
        "poses": [
          "both pressed to the glass, staring at the planet",
          "both floating together gazing down in silence",
          "both hand in hand watching a sunrise from orbit"
        ],
        "looks": [
          "flight suit with mission patches each",
          "soft grey mission polo each",
          "thermal sleeves and name tag each"
        ]
      },
      "the astronaut vs. the human": {
        "locs": [
          "a 1960s canteen of formica tables and trays",
          "a suburban backyard barbecue near the space centre",
          "a motel pool near the launch site at dusk"
        ],
        "poses": [
          "both laughing over a tray of food",
          "both leaning on the grill, shirt sleeves rolled",
          "both sitting on the pool edge with drinks, watching the sky"
        ],
        "looks": [
          "short-sleeved shirt and slacks each, 1960s",
          "1960s summer dress and chinos each",
          "casual cardigan and slacks each"
        ]
      },
      "technical vs. emotional": {
        "locs": [
          "a huge training pool holding a submerged station mock-up",
          "a centrifuge room with a giant spinning arm",
          "a simulator cabin of switches and dials"
        ],
        "poses": [
          "both in diving suits mid-descent, bubbles rising",
          "both strapped in, cheeks pulled back by the spin",
          "both grinning in the simulator seats, thumbs up"
        ],
        "looks": [
          "bulky training suit and diving helmet each",
          "blue flight overalls and soft cap each",
          "white training suit with sensors each"
        ]
      },
      "the countdown vs. the silence": {
        "locs": [
          "a windswept Soviet launch site on the steppe",
          "a cosmonaut dressing room of heavy orange suits",
          "a steppe railway with a rocket rolling out at dawn"
        ],
        "poses": [
          "both facing the camera proudly in full suits",
          "both saluting beside the rocket",
          "both walking the steppe toward the launch pad"
        ],
        "looks": [
          "orange cosmonaut suit with red lettering each",
          "grey flight overalls and leather cap each",
          "dress uniform with medals each"
        ]
      },
      "going vs. coming back": {
        "locs": [
          "an orange capsule bobbing in a calm ocean",
          "a navy recovery ship deck at sunrise",
          "a helicopter pad above a blue sea"
        ],
        "poses": [
          "both emerging from the hatch, squinting into the sun",
          "both embraced by rescue swimmers, grinning and exhausted",
          "both stepping onto the deck, legs wobbly"
        ],
        "looks": [
          "wrinkled flight suit and soaked hair each",
          "orange flotation collar over a flight suit each",
          "navy blanket over a flight suit each"
        ]
      },
      "the pale blue dot vs. the infinite": {
        "locs": [
          "a sleek white capsule interior with a huge window",
          "a launch viewing lounge of glass and screens",
          "a desert spaceport hangar at dawn"
        ],
        "poses": [
          "both gasping at the window in wonder",
          "both buckling in, hands clasped",
          "both floating with arms outstretched, laughing"
        ],
        "looks": [
          "sleek navy flight suit each",
          "minimalist white jumpsuit each",
          "tailored dark flight jacket each"
        ]
      }
    },
    "locs": [
      "a 1969 mission control room of glowing consoles and cigarette smoke",
      "a flight control floor at the moment of success",
      "a control room doorway lit by the big screen's glow",
      "a grey cratered lunar plain under a black sky",
      "a lander's leg and long shadows on grey dust",
      "a ridge of grey dust with a small planted flag",
      "a cramped space station module crowded with cables",
      "a module wall of laptops and floating tools",
      "a sleeping nook of bags clipped to the wall",
      "a pre-launch suit-up room with white suits on racks",
      "a gantry walkway to a towering rocket at dawn",
      "a crew van beside the launch pad in pale light",
      "a station cupola window with Earth glowing blue below",
      "a dome of windows over the curve of the planet",
      "a porthole at sunrise over a vast ocean",
      "a 1960s canteen of formica tables and trays",
      "a suburban backyard barbecue near the space centre",
      "a motel pool near the launch site at dusk",
      "a huge training pool holding a submerged station mock-up",
      "a centrifuge room with a giant spinning arm",
      "a simulator cabin of switches and dials",
      "a windswept Soviet launch site on the steppe",
      "a cosmonaut dressing room of heavy orange suits",
      "a steppe railway with a rocket rolling out at dawn",
      "an orange capsule bobbing in a calm ocean",
      "a navy recovery ship deck at sunrise",
      "a helicopter pad above a blue sea",
      "a sleek white capsule interior with a huge window",
      "a launch viewing lounge of glass and screens",
      "a desert spaceport hangar at dawn"
    ],
    "poses": [
      "both leaping up from their desks cheering, papers in the air",
      "both gripping headsets, waiting for the signal",
      "both shaking hands, grinning with relief",
      "both bounding in low gravity, dust kicking up",
      "both planting a flag side by side",
      "both kneeling to collect rock samples",
      "both floating weightless, hair drifting",
      "both upside down, laughing at a floating droplet",
      "both tethered at the wall, sharing a meal pouch",
      "both checking each other's suit seals, nervous smiles",
      "both walking out arm in arm toward the gantry",
      "both waving as the van door closes",
      "both pressed to the glass, staring at the planet",
      "both floating together gazing down in silence",
      "both hand in hand watching a sunrise from orbit",
      "both laughing over a tray of food",
      "both leaning on the grill, shirt sleeves rolled",
      "both sitting on the pool edge with drinks, watching the sky",
      "both in diving suits mid-descent, bubbles rising",
      "both strapped in, cheeks pulled back by the spin",
      "both grinning in the simulator seats, thumbs up",
      "both facing the camera proudly in full suits",
      "both saluting beside the rocket",
      "both walking the steppe toward the launch pad",
      "both emerging from the hatch, squinting into the sun",
      "both embraced by rescue swimmers, grinning and exhausted",
      "both stepping onto the deck, legs wobbly",
      "both gasping at the window in wonder",
      "both buckling in, hands clasped",
      "both floating with arms outstretched, laughing"
    ],
    "looks": [
      "short-sleeved white shirt skinny tie and headset each",
      "horn-rimmed glasses and pocket protector each",
      "controller waistcoat and rolled sleeves each",
      "bulky white spacesuit, helmet under one arm each",
      "dust-grey suit with the visor raised each",
      "suit with gloved hands and a chest camera each",
      "blue flight suit and soft cap each",
      "polo shirt and soft trousers each",
      "thermal long sleeves and socks each",
      "orange launch suit and white helmet each",
      "white pressure suit with a breathing hose each",
      "blue crew jacket and boots each",
      "flight suit with mission patches each",
      "soft grey mission polo each",
      "thermal sleeves and name tag each",
      "short-sleeved shirt and slacks each, 1960s",
      "1960s summer dress and chinos each",
      "casual cardigan and slacks each",
      "bulky training suit and diving helmet each",
      "blue flight overalls and soft cap each",
      "white training suit with sensors each",
      "orange cosmonaut suit with red lettering each",
      "grey flight overalls and leather cap each",
      "dress uniform with medals each",
      "wrinkled flight suit and soaked hair each",
      "orange flotation collar over a flight suit each",
      "navy blanket over a flight suit each",
      "sleek navy flight suit each",
      "minimalist white jumpsuit each",
      "tailored dark flight jacket each"
    ],
    "promptPrefix": "Space photography aesthetic — the specific visual language of real space imagery from NASA, ESA and the Soviet programme — documentary candid quality — ",
    "promptSuffix": "Render with the quality of real space imagery: documentary, candid, human and warm despite the context. Not science fiction.",
    "variantDirectives": [
      "Wide frame of the whole room or vista, the figures small within it: ",
      "Full-length candid frame, posture and gesture carry the feeling: ",
      "Tight candid close-up, faces fill the frame: ",
      "Single source of light, stark and minimal: ",
      "The hardware and setting dominate the frame, the figures secondary: ",
      "Flight suits and period clothing take centre stage, the figures framed to show them: "
    ]
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
    "promptSuffix": "The impossible element should feel completely natural within the frame. Render with the crisp, hyper-real quality of fine art photography — the surrealism comes from the subject matter, not degraded image quality.",
    "variantDirectives": [
      "Wide frame, the figures small within the impossible scene: ",
      "Full-length frame, posture and gesture carry the strangeness: ",
      "Tight close-up, faces fill the frame: ",
      "Stark minimal composition, one calm light, nothing extra: ",
      "The impossible setting dominates the frame, the figures secondary: ",
      "Costume takes centre stage, the figures framed to show the clothes: "
    ]
  },
  {
    "id": "underground",
    "name": "THE UNDERGROUND",
    "sub": "Scenes, Crowds & Loud Rooms",
    "color": "#336655",
    "tensions": [
      "seen vs. invisible",
      "belong vs. outside",
      "mainstream vs. counter",
      "surface vs. depth",
      "loud vs. quiet rebellion",
      "known vs. discovered",
      "authentic vs. performed",
      "local vs. scene",
      "night vs. day identity",
      "old school vs. new wave",
      "pure vs. sold out",
      "insider vs. outsider",
      "alone vs. together in it",
      "signal vs. noise",
      "underground vs. above ground",
      "passion vs. cool",
      "raw vs. polished",
      "secret vs. shared",
      "found vs. lost in it",
      "now vs. then scene"
    ],
    "affinities": {
      "belong vs. outside": {
        "locs": [
          "punk DIY basement show crowd pressed against a tiny stage",
          "punk gig mosh pit crowd surfers hands in the air",
          "squat house gig graffiti walls mattress on the floor"
        ],
        "poses": [
          "both crowd surfing hands beneath them grinning",
          "one stage diving other catching mid-air",
          "both shouting lyrics fists raised sweat-soaked"
        ],
        "looks": [
          "studded leather jacket and patched vest each punk",
          "band tee ripped jeans and Docs each",
          "tartan trousers and dyed hair each punk"
        ]
      },
      "mainstream vs. counter": {
        "locs": [
          "free party warehouse rave strobe lasers packed dance floor",
          "field rave at sunrise speaker stack dancers in silhouette",
          "railway arch rave smoke machine green lasers"
        ],
        "poses": [
          "both arms raised dancing in strobe light crowd blurred behind",
          "both on each other's shoulders above the crowd glowsticks in hand",
          "both sitting on a speaker stack at dawn sweaty and smiling"
        ],
        "looks": [
          "fluoro windbreaker and bucket hat each glowsticks",
          "cargo trousers and mesh top each 90s raver",
          "holographic jacket and goggles each rave"
        ]
      },
      "surface vs. depth": {
        "locs": [
          "huge mural wall mid-paint scaffolding and spray cans below",
          "alley wheatpaste posters peeling in layers at night",
          "graffiti hall of fame wall colourful legal wall"
        ],
        "poses": [
          "one spray painting other holding the ladder looking out",
          "both pasting a poster together laughing at night",
          "both standing before the finished piece paint on their hands"
        ],
        "looks": [
          "paint-splattered overalls and respirator pulled down each",
          "black hoodie and paint-stained trousers each",
          "workwear and gloves streaked with paint each"
        ]
      },
      "loud vs. quiet rebellion": {
        "locs": [
          "grrrl punk gig tiny venue crowd singing along sweaty",
          "zine fair folding tables tote bags colourful",
          "photocopier shop at 2am copying flyers"
        ],
        "poses": [
          "both screaming lyrics front row arms around each other",
          "one handing other a zine still warm from the photocopier",
          "both sitting on the stage edge guitars across knees laughing"
        ],
        "looks": [
          "babydoll dress and combat boots with handwritten slogans each",
          "ripped tights and oversized band tee each riot grrrl",
          "thrifted floral dress and denim vest with patches each"
        ]
      },
      "known vs. discovered": {
        "locs": [
          "record fair hall crates stacked wall to wall",
          "basement record shop crates floor to ceiling gig posters",
          "flea market vinyl stall morning crates in the sun"
        ],
        "poses": [
          "both flipping crates hands touching the same record",
          "one holding a record up triumphant other grabbing for it",
          "both sharing one pair of headphones grinning"
        ],
        "looks": [
          "vintage band tee and corduroy jacket each",
          "thrifted jacket and rolled jeans each crate digger",
          "retro sportswear and beanie each record hunter"
        ]
      },
      "authentic vs. performed": {
        "locs": [
          "street cipher circle crowd ring boombox night",
          "cardboard breakdance floor park jam crowd ring",
          "90s block party fire hydrant sprinkler summer"
        ],
        "poses": [
          "one freezing mid-breakdance other cheering crowd ring around",
          "both mid-routine in sync crowd ring behind",
          "both hands up boombox between them block party"
        ],
        "looks": [
          "90s tracksuit gold chain and fitted cap each",
          "baggy jeans Timberlands and oversized hoodie each",
          "retro sportswear and bucket hat each old school hip-hop"
        ]
      },
      "local vs. scene": {
        "locs": [
          "lowrider car meet car park night chrome and candy paint",
          "boulevard cruising lowriders slow at sunset",
          "hydraulics hop contest crowd cheering"
        ],
        "poses": [
          "both leaning on a candy paint lowrider arms crossed proud",
          "both sitting on the car roof watching the hydraulics hop",
          "both cruising windows down one arm out laughing"
        ],
        "looks": [
          "pressed khakis white tee and bandana each lowrider",
          "vintage dress and sunglasses with flannel each car show",
          "pinstripe suit and fedora each classic car club"
        ]
      },
      "night vs. day identity": {
        "locs": [
          "goth club fog machine dance floor candelabras",
          "cemetery goth picnic among ruins at dusk",
          "dark fashion shop corset rack velvet curtains"
        ],
        "poses": [
          "both dancing slow in fog arms raised in silhouette",
          "both lounging on a gravestone with a picnic basket",
          "one lacing other's corset in the shop mirror"
        ],
        "looks": [
          "black lace and platform boots each gothic",
          "Victorian velvet and top hat each goth",
          "leather corset and fishnets each dark glam"
        ]
      },
      "old school vs. new wave": {
        "locs": [
          "seafront promenade scooters lined up mod rally",
          "ska club checkerboard floor skanking crowd",
          "scooter rally campsite Union Jack sunset"
        ],
        "poses": [
          "both sitting on a parked Vespa shades on",
          "both skanking mid-step ska crowd behind",
          "both posing on scooters covered in patches"
        ],
        "looks": [
          "green parka covered in patches and target badges each mod",
          "Fred Perry polo and Sta-Prest trousers each",
          "tonic suit and loafers each ska two-tone"
        ]
      },
      "pure vs. sold out": {
        "locs": [
          "tattoo convention hall booths buzzing machines",
          "tattoo studio flash walls neon sign buzzing",
          "tattoo chair mid-session artist leaning in"
        ],
        "poses": [
          "one getting tattooed gripping other's hand grinning",
          "both comparing fresh tattoos arms side by side",
          "both browsing the flash walls choosing a matching design"
        ],
        "looks": [
          "tattooed sleeves and sleeveless tee each",
          "vintage flannel rolled sleeves tattoos showing each",
          "leather vest and bare tattooed arms each"
        ]
      },
      "insider vs. outsider": {
        "locs": [
          "roller derby bout track jammers pack blur crowd",
          "roller rink disco ball neon retro",
          "roller derby locker room helmets pads and tape"
        ],
        "poses": [
          "both mid-jam elbow to elbow on roller skates",
          "both skating hand in hand under disco lights",
          "both lacing skates on the bench pre-bout fist bump"
        ],
        "looks": [
          "roller derby kit fishnet shorts pads and helmets each",
          "retro roller skate outfit and sweatbands each disco",
          "team jersey and knee pads each derby"
        ]
      },
      "alone vs. together in it": {
        "locs": [
          "concrete skate bowl DIY under a bridge covered in graffiti",
          "street skate spot handrail and stairs at dusk",
          "skate park pool coping floodlit night"
        ],
        "poses": [
          "one mid-air kickflip other watching from the ledge",
          "both dropping into the bowl side by side",
          "both sitting on boards resting scraped knees laughing"
        ],
        "looks": [
          "baggy cargo shorts and skate shoes each",
          "oversized band tee and beanie each skater",
          "faded jeans and checkerboard Vans each"
        ]
      },
      "signal vs. noise": {
        "locs": [
          "towering speaker stack sound system carnival street bass",
          "pirate radio rooftop aerial city night",
          "dub dance basement sound system dripping ceiling"
        ],
        "poses": [
          "both feeling the bass against a speaker stack grinning",
          "both on the rooftop adjusting an aerial wire laughing",
          "one shouting over the music other cupping an ear"
        ],
        "looks": [
          "Caribbean carnival colours and sunglasses each",
          "tracksuit and headphones around neck each",
          "70s dub style knitted tam and bomber each"
        ]
      },
      "underground vs. above ground": {
        "locs": [
          "rooftop leap gap between buildings city sunrise",
          "concrete steps urban parkour spot at night",
          "construction site scaffold climb at dusk"
        ],
        "poses": [
          "one mid-leap across the gap other already landed grinning",
          "both vaulting a barrier in sync",
          "both hanging from a ledge looking down laughing"
        ],
        "looks": [
          "lightweight tracksuit and trainers each parkour",
          "tight joggers and tee chalked hands each",
          "windbreaker and beanie each urban runner"
        ]
      },
      "passion vs. cool": {
        "locs": [
          "backyard wrestling ring in a car park makeshift ropes crowd",
          "lucha libre arena masks ring crowd roaring",
          "basement wrestling ring plastic chairs fairy lights"
        ],
        "poses": [
          "one mid-flying-elbow off the top rope other braced below",
          "both in masks arms crossed ring corner",
          "both held aloft in the ring crowd roaring"
        ],
        "looks": [
          "lucha libre masks and capes each colourful",
          "wrestling cape and boots each backyard",
          "sequin mask and sparkle trunks each"
        ]
      },
      "raw vs. polished": {
        "locs": [
          "tiled underpass busker crowd echoing walls",
          "busy pedestrian street busking crowd hat on the ground",
          "open air market street band improvised dance"
        ],
        "poses": [
          "one playing guitar other dancing mid-twirl crowd around",
          "both singing into one mic crowd watching",
          "both juggling street performers crowd circle"
        ],
        "looks": [
          "patchwork waistcoat and flat cap each street performer",
          "vintage dress boots and scarf each busker",
          "colourful mismatched layers each troupe"
        ]
      },
      "secret vs. shared": {
        "locs": [
          "after-hours queer bar glitter disco ball packed floor",
          "drag show stage glitter curtain audience roaring",
          "bar back door smoking area rainbow neon sign"
        ],
        "poses": [
          "both dancing arm in arm glitter falling",
          "one tipping other mid-lipsync on stage",
          "both leaning out the back door laughing under the neon"
        ],
        "looks": [
          "sequin jacket and glitter makeup each",
          "mesh top and harness with boots each",
          "feather boa and tailored suit each"
        ]
      },
      "found vs. lost in it": {
        "locs": [
          "northern soul all-nighter ballroom talc on the floor",
          "1970s northern soul hall spin and drop dancers",
          "soul club basement wooden dance floor sweat"
        ],
        "poses": [
          "both mid-spin in a cloud of talc",
          "one sliding across the floor other clapping in time",
          "both leaning on the wall after the dance holding sports bags"
        ],
        "looks": [
          "baggy high-waisted trousers and vest each northern soul",
          "pleated skirt and flat shoes each 70s dancer",
          "badge-covered bowling shirt and baggy trousers each"
        ]
      },
      "now vs. then scene": {
        "locs": [
          "rockabilly dance hall jive floor bunting",
          "greaser car meet neon diner forecourt",
          "vintage car show pomade and flames paintwork"
        ],
        "poses": [
          "both mid-jive lift dress flaring",
          "both leaning on a vintage car quiff comb in hand",
          "both slow dancing barefoot between sets"
        ],
        "looks": [
          "polka dot dress victory rolls and cuffed jeans each",
          "greaser leather jacket quiff and pencil skirt each",
          "bowling shirt and cat-eye sunglasses each rockabilly"
        ]
      },
      "seen vs. invisible": {
        "locs": [
          "ballroom competition runway judges panel glitter spotlight",
          "queer ballroom house category walk packed audience",
          "backstage ballroom dressing room mirrors sequins"
        ],
        "poses": [
          "both mid-vogue dip one catching the other dramatic",
          "both striking a category pose judges behind",
          "one fixing other's feathers backstage both laughing"
        ],
        "looks": [
          "sequin couture ballgown and sequin suit each ballroom",
          "feather headpiece and crystal bodysuit each ballroom",
          "oversized glam jacket and thigh boots each ballroom"
        ]
      }
    },
    "locs": [
      "punk DIY basement show crowd pressed against a tiny stage",
      "punk gig mosh pit crowd surfers hands in the air",
      "squat house gig graffiti walls mattress on the floor",
      "free party warehouse rave strobe lasers packed dance floor",
      "field rave at sunrise speaker stack dancers in silhouette",
      "railway arch rave smoke machine green lasers",
      "huge mural wall mid-paint scaffolding and spray cans below",
      "alley wheatpaste posters peeling in layers at night",
      "graffiti hall of fame wall colourful legal wall",
      "grrrl punk gig tiny venue crowd singing along sweaty",
      "zine fair folding tables tote bags colourful",
      "photocopier shop at 2am copying flyers",
      "record fair hall crates stacked wall to wall",
      "basement record shop crates floor to ceiling gig posters",
      "flea market vinyl stall morning crates in the sun",
      "street cipher circle crowd ring boombox night",
      "cardboard breakdance floor park jam crowd ring",
      "90s block party fire hydrant sprinkler summer",
      "lowrider car meet car park night chrome and candy paint",
      "boulevard cruising lowriders slow at sunset",
      "hydraulics hop contest crowd cheering",
      "goth club fog machine dance floor candelabras",
      "cemetery goth picnic among ruins at dusk",
      "dark fashion shop corset rack velvet curtains",
      "seafront promenade scooters lined up mod rally",
      "ska club checkerboard floor skanking crowd",
      "scooter rally campsite Union Jack sunset",
      "tattoo convention hall booths buzzing machines",
      "tattoo studio flash walls neon sign buzzing",
      "tattoo chair mid-session artist leaning in",
      "roller derby bout track jammers pack blur crowd",
      "roller rink disco ball neon retro",
      "roller derby locker room helmets pads and tape",
      "concrete skate bowl DIY under a bridge covered in graffiti",
      "street skate spot handrail and stairs at dusk",
      "skate park pool coping floodlit night",
      "towering speaker stack sound system carnival street bass",
      "pirate radio rooftop aerial city night",
      "dub dance basement sound system dripping ceiling",
      "rooftop leap gap between buildings city sunrise",
      "concrete steps urban parkour spot at night",
      "construction site scaffold climb at dusk",
      "backyard wrestling ring in a car park makeshift ropes crowd",
      "lucha libre arena masks ring crowd roaring",
      "basement wrestling ring plastic chairs fairy lights",
      "tiled underpass busker crowd echoing walls",
      "busy pedestrian street busking crowd hat on the ground",
      "open air market street band improvised dance",
      "after-hours queer bar glitter disco ball packed floor",
      "drag show stage glitter curtain audience roaring",
      "bar back door smoking area rainbow neon sign",
      "northern soul all-nighter ballroom talc on the floor",
      "1970s northern soul hall spin and drop dancers",
      "soul club basement wooden dance floor sweat",
      "rockabilly dance hall jive floor bunting",
      "greaser car meet neon diner forecourt",
      "vintage car show pomade and flames paintwork",
      "ballroom competition runway judges panel glitter spotlight",
      "queer ballroom house category walk packed audience",
      "backstage ballroom dressing room mirrors sequins"
    ],
    "poses": [
      "both crowd surfing hands beneath them grinning",
      "one stage diving other catching mid-air",
      "both shouting lyrics fists raised sweat-soaked",
      "both arms raised dancing in strobe light crowd blurred behind",
      "both on each other's shoulders above the crowd glowsticks in hand",
      "both sitting on a speaker stack at dawn sweaty and smiling",
      "one spray painting other holding the ladder looking out",
      "both pasting a poster together laughing at night",
      "both standing before the finished piece paint on their hands",
      "both screaming lyrics front row arms around each other",
      "one handing other a zine still warm from the photocopier",
      "both sitting on the stage edge guitars across knees laughing",
      "both flipping crates hands touching the same record",
      "one holding a record up triumphant other grabbing for it",
      "both sharing one pair of headphones grinning",
      "one freezing mid-breakdance other cheering crowd ring around",
      "both mid-routine in sync crowd ring behind",
      "both hands up boombox between them block party",
      "both leaning on a candy paint lowrider arms crossed proud",
      "both sitting on the car roof watching the hydraulics hop",
      "both cruising windows down one arm out laughing",
      "both dancing slow in fog arms raised in silhouette",
      "both lounging on a gravestone with a picnic basket",
      "one lacing other's corset in the shop mirror",
      "both sitting on a parked Vespa shades on",
      "both skanking mid-step ska crowd behind",
      "both posing on scooters covered in patches",
      "one getting tattooed gripping other's hand grinning",
      "both comparing fresh tattoos arms side by side",
      "both browsing the flash walls choosing a matching design",
      "both mid-jam elbow to elbow on roller skates",
      "both skating hand in hand under disco lights",
      "both lacing skates on the bench pre-bout fist bump",
      "one mid-air kickflip other watching from the ledge",
      "both dropping into the bowl side by side",
      "both sitting on boards resting scraped knees laughing",
      "both feeling the bass against a speaker stack grinning",
      "both on the rooftop adjusting an aerial wire laughing",
      "one shouting over the music other cupping an ear",
      "one mid-leap across the gap other already landed grinning",
      "both vaulting a barrier in sync",
      "both hanging from a ledge looking down laughing",
      "one mid-flying-elbow off the top rope other braced below",
      "both in masks arms crossed ring corner",
      "both held aloft in the ring crowd roaring",
      "one playing guitar other dancing mid-twirl crowd around",
      "both singing into one mic crowd watching",
      "both juggling street performers crowd circle",
      "both dancing arm in arm glitter falling",
      "one tipping other mid-lipsync on stage",
      "both leaning out the back door laughing under the neon",
      "both mid-spin in a cloud of talc",
      "one sliding across the floor other clapping in time",
      "both leaning on the wall after the dance holding sports bags",
      "both mid-jive lift dress flaring",
      "both leaning on a vintage car quiff comb in hand",
      "both slow dancing barefoot between sets",
      "both mid-vogue dip one catching the other dramatic",
      "both striking a category pose judges behind",
      "one fixing other's feathers backstage both laughing"
    ],
    "looks": [
      "studded leather jacket and patched vest each punk",
      "band tee ripped jeans and Docs each",
      "tartan trousers and dyed hair each punk",
      "fluoro windbreaker and bucket hat each glowsticks",
      "cargo trousers and mesh top each 90s raver",
      "holographic jacket and goggles each rave",
      "paint-splattered overalls and respirator pulled down each",
      "black hoodie and paint-stained trousers each",
      "workwear and gloves streaked with paint each",
      "babydoll dress and combat boots with handwritten slogans each",
      "ripped tights and oversized band tee each riot grrrl",
      "thrifted floral dress and denim vest with patches each",
      "vintage band tee and corduroy jacket each",
      "thrifted jacket and rolled jeans each crate digger",
      "retro sportswear and beanie each record hunter",
      "90s tracksuit gold chain and fitted cap each",
      "baggy jeans Timberlands and oversized hoodie each",
      "retro sportswear and bucket hat each old school hip-hop",
      "pressed khakis white tee and bandana each lowrider",
      "vintage dress and sunglasses with flannel each car show",
      "pinstripe suit and fedora each classic car club",
      "black lace and platform boots each gothic",
      "Victorian velvet and top hat each goth",
      "leather corset and fishnets each dark glam",
      "green parka covered in patches and target badges each mod",
      "Fred Perry polo and Sta-Prest trousers each",
      "tonic suit and loafers each ska two-tone",
      "tattooed sleeves and sleeveless tee each",
      "vintage flannel rolled sleeves tattoos showing each",
      "leather vest and bare tattooed arms each",
      "roller derby kit fishnet shorts pads and helmets each",
      "retro roller skate outfit and sweatbands each disco",
      "team jersey and knee pads each derby",
      "baggy cargo shorts and skate shoes each",
      "oversized band tee and beanie each skater",
      "faded jeans and checkerboard Vans each",
      "Caribbean carnival colours and sunglasses each",
      "tracksuit and headphones around neck each",
      "70s dub style knitted tam and bomber each",
      "lightweight tracksuit and trainers each parkour",
      "tight joggers and tee chalked hands each",
      "windbreaker and beanie each urban runner",
      "lucha libre masks and capes each colourful",
      "wrestling cape and boots each backyard",
      "sequin mask and sparkle trunks each",
      "patchwork waistcoat and flat cap each street performer",
      "vintage dress boots and scarf each busker",
      "colourful mismatched layers each troupe",
      "sequin jacket and glitter makeup each",
      "mesh top and harness with boots each",
      "feather boa and tailored suit each",
      "baggy high-waisted trousers and vest each northern soul",
      "pleated skirt and flat shoes each 70s dancer",
      "badge-covered bowling shirt and baggy trousers each",
      "polka dot dress victory rolls and cuffed jeans each",
      "greaser leather jacket quiff and pencil skirt each",
      "bowling shirt and cat-eye sunglasses each rockabilly",
      "sequin couture ballgown and sequin suit each ballroom",
      "feather headpiece and crystal bodysuit each ballroom",
      "oversized glam jacket and thigh boots each ballroom"
    ],
    "promptSuffix": "Colour grade: saturated practical light — strobe, neon, stage wash, sodium streetlight. Movement, sweat and energy over polish."
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
          "a vast cave glowing electric blue",
          "a luminous sea bay glowing at night",
          "a crystal cave of giant glittering geodes"
        ],
        "poses": [
          "both small and awestruck on a ledge, faces lit blue",
          "both wading through glowing water, trailing light behind",
          "both reaching to touch a crystal taller than a house"
        ],
        "looks": [
          "caving helmets with headlamps and muddy overalls each",
          "waders and waterproof jackets each",
          "expedition layers with gloves and ropes each"
        ]
      },
      "discovery vs. intrusion": {
        "locs": [
          "a Victorian camp under strange towering trees",
          "a canvas tent lit by lantern beside a vast skeleton",
          "a map table at the edge of the known world"
        ],
        "poses": [
          "both bending over a field notebook, sketching something huge",
          "both peering at a giant bone through magnifying glasses",
          "both pointing off the map into the unknown"
        ],
        "looks": [
          "Victorian khaki jacket pith helmet and breeches each",
          "tweed jacket and leather satchel each",
          "long coat and explorer's hat each"
        ]
      },
      "the map vs. the territory": {
        "locs": [
          "a sunken city of coral-covered columns",
          "a deep sea vent field of glowing creatures",
          "a flooded cave of impossible blue darkness"
        ],
        "poses": [
          "both drifting down between the columns, lights sweeping",
          "both pressed to a viewport as a vast creature passes",
          "both signalling OK to each other in the dark water"
        ],
        "looks": [
          "deep sea diving suit each",
          "wetsuit and full dive gear each",
          "pressure suit with a bubble helmet each"
        ]
      },
      "the creature vs. the human": {
        "locs": [
          "a jungle clearing with a giant footprint filling with water",
          "a canopy hung with an enormous woven nest",
          "a riverbank scattered with giant eggshell"
        ],
        "poses": [
          "both standing small inside the footprint, looking up",
          "both climbing toward the nest on a rope",
          "both crouched over a fragment taller than they are"
        ],
        "looks": [
          "jungle expedition shirt and boots each",
          "khaki field gear with a machete each",
          "rain jacket and rope harness each"
        ]
      },
      "ancient vs. present": {
        "locs": [
          "a jungle temple strangled by roots and vines",
          "a cloud-forest city of terraces in mist",
          "a library cave of ancient books and dripping water"
        ],
        "poses": [
          "both stepping through a root-choked doorway",
          "both brushing moss from a carved wall",
          "both sweeping a torch over a mural of the lost people"
        ],
        "looks": [
          "worn field jacket and canvas pack each",
          "rain poncho and hiking boots each",
          "explorer's vest with a notebook each"
        ]
      },
      "myth vs. reality": {
        "locs": [
          "a chain of floating rock islands above the clouds",
          "a sky island with waterfalls pouring into nothing",
          "a rope bridge between drifting rocks"
        ],
        "poses": [
          "both crossing the bridge, clothes whipping in the wind",
          "both standing at the edge, the world far below",
          "both leaping between two drifting rocks"
        ],
        "looks": [
          "wind-whipped explorer coats and goggles each",
          "climbing harness and warm layers each",
          "scarves and leather gloves each"
        ]
      },
      "the explorer vs. the explored": {
        "locs": [
          "a waterfall pouring upward into the sky",
          "a huge door carved into a cliff of ancient stone",
          "a vertical forest hanging from a cliff"
        ],
        "poses": [
          "both staring up at the upside-down water",
          "both pushing the great door open together",
          "both rappelling beside the hanging trees"
        ],
        "looks": [
          "technical expedition gear and helmets each",
          "climbing jackets and chalk-dusted hands each",
          "rope harnesses and backpacks each"
        ]
      },
      "wonder vs. danger": {
        "locs": [
          "a volcano crater glowing with rivers of lava",
          "a glacier cave of blue ice and cracking sounds",
          "a thermal pool of steaming turquoise water"
        ],
        "poses": [
          "both leaning over the crater edge, faces glowing orange",
          "both edging along an ice ledge, roped together",
          "both stepping back from the steam, laughing in shock"
        ],
        "looks": [
          "heat-proof silver suit and visor each",
          "insulated jackets and crampons each",
          "fur-lined parka and goggles each"
        ]
      },
      "found vs. lost": {
        "locs": [
          "a polar ice shelf under swirling green light",
          "a high mountain ridge above the clouds",
          "a white-out camp of tents half-buried in snow"
        ],
        "poses": [
          "both huddled together, roped on the ridge",
          "both trudging toward a tent through the storm",
          "both gazing up at the colour above them, breath steaming"
        ],
        "looks": [
          "expedition down suit and oxygen mask each",
          "polar parka with fur hood each",
          "insulated overalls and goggles each"
        ]
      },
      "the impossible vs. the real": {
        "locs": [
          "an immense cavern with a tiny glowing city far below",
          "a cave wall of animated ancient paintings",
          "an underground ocean under a roof of stalactites"
        ],
        "poses": [
          "both on a high ledge, pointing at the lights below",
          "both pressing their hands to the glowing wall",
          "both rowing a tiny boat across the black water"
        ],
        "looks": [
          "caving gear and head torches each",
          "waterproof layers and hard hats each",
          "explorer coats and lanterns each"
        ]
      }
    },
    "locs": [
      "a vast cave glowing electric blue",
      "a luminous sea bay glowing at night",
      "a crystal cave of giant glittering geodes",
      "a Victorian camp under strange towering trees",
      "a canvas tent lit by lantern beside a vast skeleton",
      "a map table at the edge of the known world",
      "a sunken city of coral-covered columns",
      "a deep sea vent field of glowing creatures",
      "a flooded cave of impossible blue darkness",
      "a jungle clearing with a giant footprint filling with water",
      "a canopy hung with an enormous woven nest",
      "a riverbank scattered with giant eggshell",
      "a jungle temple strangled by roots and vines",
      "a cloud-forest city of terraces in mist",
      "a library cave of ancient books and dripping water",
      "a chain of floating rock islands above the clouds",
      "a sky island with waterfalls pouring into nothing",
      "a rope bridge between drifting rocks",
      "a waterfall pouring upward into the sky",
      "a huge door carved into a cliff of ancient stone",
      "a vertical forest hanging from a cliff",
      "a volcano crater glowing with rivers of lava",
      "a glacier cave of blue ice and cracking sounds",
      "a thermal pool of steaming turquoise water",
      "a polar ice shelf under swirling green light",
      "a high mountain ridge above the clouds",
      "a white-out camp of tents half-buried in snow",
      "an immense cavern with a tiny glowing city far below",
      "a cave wall of animated ancient paintings",
      "an underground ocean under a roof of stalactites"
    ],
    "poses": [
      "both small and awestruck on a ledge, faces lit blue",
      "both wading through glowing water, trailing light behind",
      "both reaching to touch a crystal taller than a house",
      "both bending over a field notebook, sketching something huge",
      "both peering at a giant bone through magnifying glasses",
      "both pointing off the map into the unknown",
      "both drifting down between the columns, lights sweeping",
      "both pressed to a viewport as a vast creature passes",
      "both signalling OK to each other in the dark water",
      "both standing small inside the footprint, looking up",
      "both climbing toward the nest on a rope",
      "both crouched over a fragment taller than they are",
      "both stepping through a root-choked doorway",
      "both brushing moss from a carved wall",
      "both sweeping a torch over a mural of the lost people",
      "both crossing the bridge, clothes whipping in the wind",
      "both standing at the edge, the world far below",
      "both leaping between two drifting rocks",
      "both staring up at the upside-down water",
      "both pushing the great door open together",
      "both rappelling beside the hanging trees",
      "both leaning over the crater edge, faces glowing orange",
      "both edging along an ice ledge, roped together",
      "both stepping back from the steam, laughing in shock",
      "both huddled together, roped on the ridge",
      "both trudging toward a tent through the storm",
      "both gazing up at the colour above them, breath steaming",
      "both on a high ledge, pointing at the lights below",
      "both pressing their hands to the glowing wall",
      "both rowing a tiny boat across the black water"
    ],
    "looks": [
      "caving helmets with headlamps and muddy overalls each",
      "waders and waterproof jackets each",
      "expedition layers with gloves and ropes each",
      "Victorian khaki jacket pith helmet and breeches each",
      "tweed jacket and leather satchel each",
      "long coat and explorer's hat each",
      "deep sea diving suit each",
      "wetsuit and full dive gear each",
      "pressure suit with a bubble helmet each",
      "jungle expedition shirt and boots each",
      "khaki field gear with a machete each",
      "rain jacket and rope harness each",
      "worn field jacket and canvas pack each",
      "rain poncho and hiking boots each",
      "explorer's vest with a notebook each",
      "wind-whipped explorer coats and goggles each",
      "climbing harness and warm layers each",
      "scarves and leather gloves each",
      "technical expedition gear and helmets each",
      "climbing jackets and chalk-dusted hands each",
      "rope harnesses and backpacks each",
      "heat-proof silver suit and visor each",
      "insulated jackets and crampons each",
      "fur-lined parka and goggles each",
      "expedition down suit and oxygen mask each",
      "polar parka with fur hood each",
      "insulated overalls and goggles each",
      "caving gear and head torches each",
      "waterproof layers and hard hats each",
      "explorer coats and lanterns each"
    ],
    "promptPrefix": "Documentary exploration photography at the edge of what is possible — impossible geography, lost worlds, fantastical natural phenomena, the sense of discovery of something that should not exist — ",
    "promptSuffix": "The world in this image should feel like it should not exist: bioluminescent, impossible in scale, ancient beyond reckoning, or simply too beautiful to be real. The subjects are the witnesses. Their scale against the impossible makes the image.",
    "variantDirectives": [
      "Vast wide frame, the figures tiny against the impossible landscape: ",
      "Full-length frame, wonder carried in posture and gesture: ",
      "Tight close-up on faces lit by the strange light: ",
      "Single strange light source, stark and minimal: ",
      "The impossible place dominates the frame, the figures secondary: ",
      "Expedition gear and clothing take centre stage, the figures framed to show them: "
    ]
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
          "a casino floor under the ceiling cameras",
          "a casino corridor toward the exit",
          "a casino lift"
        ],
        "poses": [
          "both caught laughing helplessly at something off-camera",
          "both caught mid-embrace, a reunion neither expected",
          "both caught dancing with no music playing"
        ],
        "looks": [
          "casual everyday clothes each caught unaware genuine",
          "night out clothes each caught in unexpected moment",
          "work clothes each caught off guard genuine"
        ]
      },
      "the camera vs. the moment": {
        "locs": [
          "a supermarket aisle at midnight",
          "a supermarket checkout",
          "a cereal aisle"
        ],
        "poses": [
          "both caught dancing with no music playing",
          "both caught mid-argument that dissolves into a smile",
          "both caught sharing a secret, heads close together"
        ],
        "looks": [
          "night out clothes each caught in unexpected moment",
          "work clothes each caught off guard genuine",
          "gym clothes each caught mid-moment real"
        ]
      },
      "seen vs. unaware": {
        "locs": [
          "a cash machine on a night street",
          "a street corner at night",
          "a petrol station forecourt at night"
        ],
        "poses": [
          "both caught sharing a secret, heads close together",
          "both caught in a first kiss, unaware of the lens",
          "both caught celebrating, arms raised"
        ],
        "looks": [
          "work clothes each caught off guard genuine",
          "gym clothes each caught mid-moment real",
          "travel clothes each caught in transit genuine"
        ]
      },
      "public vs. private": {
        "locs": [
          "a bus shelter",
          "a taxi back seat",
          "an underground platform"
        ],
        "poses": [
          "both caught celebrating, arms raised",
          "both caught sitting in comfortable silence",
          "both caught helping a stranger with a heavy bag"
        ],
        "looks": [
          "gym clothes each caught mid-moment real",
          "travel clothes each caught in transit genuine",
          "date night clothes each caught in real moment"
        ]
      },
      "the record vs. the feeling": {
        "locs": [
          "an airport arrivals hall",
          "a train station platform",
          "an upper deck of a bus"
        ],
        "poses": [
          "both caught helping a stranger with a heavy bag",
          "both caught reading the same page over a shoulder",
          "both caught sprinting together, laughing"
        ],
        "looks": [
          "travel clothes each caught in transit genuine",
          "date night clothes each caught in real moment",
          "hospital visit clothes each emotional genuine"
        ]
      },
      "surveilled vs. free": {
        "locs": [
          "a ferry deck",
          "a hospital corridor",
          "a school corridor"
        ],
        "poses": [
          "both caught sprinting together, laughing",
          "both caught asleep leaning on each other",
          "both caught mid-proposal, one on one knee"
        ],
        "looks": [
          "date night clothes each caught in real moment",
          "hospital visit clothes each emotional genuine",
          "commuter clothes each caught human moment"
        ]
      },
      "the accidental vs. the posed": {
        "locs": [
          "an office lift",
          "a library",
          "a fishmonger's counter"
        ],
        "poses": [
          "both caught mid-proposal, one on one knee",
          "both caught receiving good news, hands to mouths",
          "both caught sharing headphones, swaying"
        ],
        "looks": [
          "hospital visit clothes each emotional genuine",
          "commuter clothes each caught human moment",
          "casual morning clothes each caught early genuine"
        ]
      },
      "the mundane vs. the extraordinary": {
        "locs": [
          "a market stall",
          "a park at dusk",
          "a beach lifeguard hut"
        ],
        "poses": [
          "both caught sharing headphones, swaying",
          "both caught pretending not to notice each other",
          "both caught racing each other toward the exit"
        ],
        "looks": [
          "commuter clothes each caught human moment",
          "casual morning clothes each caught early genuine",
          "smart casual each caught in something real"
        ]
      },
      "the system vs. the human": {
        "locs": [
          "a gym",
          "a café",
          "a cinema foyer"
        ],
        "poses": [
          "both caught racing each other toward the exit",
          "both caught in an enormous hug, lifted off the floor",
          "both caught whispering and giggling in a quiet place"
        ],
        "looks": [
          "casual morning clothes each caught early genuine",
          "smart casual each caught in something real",
          "casual everyday clothes each caught unaware genuine"
        ]
      },
      "watched vs. forgotten": {
        "locs": [
          "a bookshop",
          "a museum gallery",
          "a launderette at 3am"
        ],
        "poses": [
          "both caught whispering and giggling in a quiet place",
          "both caught cheering at something off-camera",
          "both caught laughing helplessly at something off-camera"
        ],
        "looks": [
          "smart casual each caught in something real",
          "casual everyday clothes each caught unaware genuine",
          "night out clothes each caught in unexpected moment"
        ]
      }
    },
    "locs": [
      "a casino floor under the ceiling cameras",
      "a casino corridor toward the exit",
      "a casino lift",
      "a supermarket aisle at midnight",
      "a supermarket checkout",
      "a cereal aisle",
      "a cash machine on a night street",
      "a street corner at night",
      "a petrol station forecourt at night",
      "a bus shelter",
      "a taxi back seat",
      "an underground platform",
      "an airport arrivals hall",
      "a train station platform",
      "an upper deck of a bus",
      "a ferry deck",
      "a hospital corridor",
      "a school corridor",
      "an office lift",
      "a library",
      "a fishmonger's counter",
      "a market stall",
      "a park at dusk",
      "a beach lifeguard hut",
      "a gym",
      "a café",
      "a cinema foyer",
      "a bookshop",
      "a museum gallery",
      "a launderette at 3am"
    ],
    "poses": [
      "both caught laughing helplessly at something off-camera",
      "both caught mid-embrace, a reunion neither expected",
      "both caught dancing with no music playing",
      "both caught mid-argument that dissolves into a smile",
      "both caught sharing a secret, heads close together",
      "both caught in a first kiss, unaware of the lens",
      "both caught celebrating, arms raised",
      "both caught sitting in comfortable silence",
      "both caught helping a stranger with a heavy bag",
      "both caught reading the same page over a shoulder",
      "both caught sprinting together, laughing",
      "both caught asleep leaning on each other",
      "both caught mid-proposal, one on one knee",
      "both caught receiving good news, hands to mouths",
      "both caught sharing headphones, swaying",
      "both caught pretending not to notice each other",
      "both caught racing each other toward the exit",
      "both caught in an enormous hug, lifted off the floor",
      "both caught whispering and giggling in a quiet place",
      "both caught cheering at something off-camera"
    ],
    "looks": [
      "casual everyday clothes each caught unaware genuine",
      "night out clothes each caught in unexpected moment",
      "work clothes each caught off guard genuine",
      "gym clothes each caught mid-moment real",
      "travel clothes each caught in transit genuine",
      "date night clothes each caught in real moment",
      "hospital visit clothes each emotional genuine",
      "commuter clothes each caught human moment",
      "casual morning clothes each caught early genuine",
      "smart casual each caught in something real"
    ],
    "promptPrefix": "Security camera or dashcam footage aesthetic — slightly grainy, fixed camera, timestamp in corner optional, the subjects completely unaware they are being filmed — ",
    "promptSuffix": "This is candid surveillance footage of a genuinely human moment. The subjects do not know they are being filmed. The camera catches something real. Grainy, fixed camera, real.",
    "variantDirectives": [
      "Wide overhead camera view, the figures small within the frame: ",
      "Fixed mid-distance camera, full bodies and gestures visible: ",
      "Zoomed-in camera crop, faces fill the frame: ",
      "Grainy single-angle view, stark and minimal: ",
      "The location dominates the camera view, the figures secondary: ",
      "The camera catches their clothes first, the figures framed head to toe: "
    ]
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
          "motel room at night single lamp",
          "roadside motel neon sign night",
          "bowling alley at night empty"
        ],
        "poses": [
          "both mid-scream, caught in a freeze frame",
          "one hiding behind the other, peeking over a shoulder",
          "both dancing, oblivious to what lurks behind"
        ],
        "looks": [
          "prom gown and tuxedo each, pristine",
          "torn prom dress and rumpled suit each",
          "varsity jacket and cheerleader skirt each"
        ]
      },
      "alive vs. undead": {
        "locs": [
          "fog-covered graveyard at night practical light",
          "dark forest practical torch light",
          "swamp at night fog mist"
        ],
        "poses": [
          "both creeping forward, torch held high",
          "one pulling the other out of the muck",
          "both frozen as a hand bursts from the ground"
        ],
        "looks": [
          "camping gear and muddy boots each",
          "ripped casual clothes, survival mode each",
          "hooded cloak and lantern each"
        ]
      },
      "human vs. other": {
        "locs": [
          "abandoned space station corridor flickering",
          "alien landscape matte painting sky",
          "B-movie spaceship control room retro"
        ],
        "poses": [
          "both pointing ray guns at something off-frame, chins high",
          "both examining a glowing object, baffled",
          "one in a silver costume menacing the other, who stands defiant"
        ],
        "looks": [
          "silver jumpsuit and fishbowl helmet each",
          "retro space suit with chunky gloves each",
          "tin-foil costume and antenna headband each"
        ]
      },
      "run vs. stay": {
        "locs": [
          "abandoned factory night emergency exit green",
          "power plant cooling towers night",
          "quarry at night floodlit"
        ],
        "poses": [
          "both sprinting down the corridor, doors slamming behind",
          "one carrying the other, rescued from danger",
          "both climbing a ladder, glancing back in terror"
        ],
        "looks": [
          "police uniform and trench coat each",
          "nurse uniform and orderly whites each",
          "work overalls and hard hats each"
        ]
      },
      "rational vs. irrational": {
        "locs": [
          "1950s laboratory neon green glow",
          "mad scientist laboratory bubbling tubes",
          "underground bunker red emergency lighting"
        ],
        "poses": [
          "one with arms thrown wide, cackling over the switch, the other recoiling",
          "both leaning over a bubbling flask, eyes gleaming with discovery",
          "one raising a syringe triumphantly, the other bound and aghast"
        ],
        "looks": [
          "white lab coat and wild hair each, goggles pushed up",
          "singed lab coat and rubber gloves each",
          "tailcoat and cape with a hunched assistant's vest each"
        ]
      },
      "known vs. unknown": {
        "locs": [
          "retro rocket ship launch pad",
          "alien mothership interior command deck retro blinking",
          "crashed UFO crater smoking"
        ],
        "poses": [
          "both examining a glowing object, baffled",
          "one in a silver costume menacing the other, who stands defiant",
          "both bracing against the blast, hair blown back"
        ],
        "looks": [
          "retro space suit with chunky gloves each",
          "tin-foil costume and antenna headband each",
          "khaki military uniform each"
        ]
      },
      "safety vs. dread": {
        "locs": [
          "suburban house at night exterior one light on",
          "1950s American street night creature approaching",
          "small town main street deserted night"
        ],
        "poses": [
          "both peering out through the curtains, flashlight in hand",
          "both running toward the camera, something looming behind",
          "both backing slowly away, hands raised"
        ],
        "looks": [
          "pastel full-skirted dress and letterman jacket each",
          "housewife dress and delivery uniform each",
          "denim jeans and a white tee each, rebel style"
        ]
      },
      "victim vs. survivor": {
        "locs": [
          "warehouse district night one lamp",
          "rooftop at night city glow below",
          "hospital corridor night emergency red"
        ],
        "poses": [
          "one carrying the other, rescued from danger",
          "both climbing a ladder, glancing back in terror",
          "both back to back, surrounded, weapons raised"
        ],
        "looks": [
          "nurse uniform and orderly whites each",
          "work overalls and hard hats each",
          "trench coat and fedora each"
        ]
      },
      "ordinary vs. monstrous": {
        "locs": [
          "trailer park night one porch light",
          "gas station night rural isolated",
          "1960s diner night fluorescent"
        ],
        "poses": [
          "both running toward the camera, something looming behind",
          "both backing slowly away, hands raised",
          "one shielding the other, both defiant"
        ],
        "looks": [
          "housewife dress and delivery uniform each",
          "denim jeans and a white tee each, rebel style",
          "sheriff's uniform and flowered dress each"
        ]
      },
      "love vs. survival": {
        "locs": [
          "bowling alley night creature in shadows 1950s",
          "high school gymnasium prom night monster gate-crashes",
          "school corridor at night lockers"
        ],
        "poses": [
          "one hiding behind the other, peeking over a shoulder",
          "both dancing, oblivious to what lurks behind",
          "both gaping at something huge, popcorn spilling"
        ],
        "looks": [
          "torn prom dress and rumpled suit each",
          "varsity jacket and cheerleader skirt each",
          "pyjamas and slippers each, interrupted sleep"
        ]
      },
      "science vs. nature": {
        "locs": [
          "crumbling mansion exterior night",
          "vintage observatory dome night",
          "clock tower night storm"
        ],
        "poses": [
          "both leaning over a bubbling flask, eyes gleaming with discovery",
          "one raising a syringe triumphantly, the other bound and aghast",
          "both arguing furiously over the creation between them"
        ],
        "looks": [
          "singed lab coat and rubber gloves each",
          "tailcoat and cape with a hunched assistant's vest each",
          "Victorian doctor's coat and stethoscope each"
        ]
      },
      "before vs. after": {
        "locs": [
          "beach at night bonfirelight",
          "pier at night fog horn",
          "lighthouse beam night fog"
        ],
        "poses": [
          "both standing at the edge, staring at something rising from the water",
          "one reading from an ancient book, the other lighting a candle",
          "both triumphant, one foot on the defeated monster"
        ],
        "looks": [
          "retro swimwear and sunglasses each",
          "sailor's uniform and oilskin coat each",
          "dark robes and a crucifix each"
        ]
      },
      "hunter vs. hunted": {
        "locs": [
          "cave entrance dark night fog",
          "corn field at night path through",
          "giant spider web forest clearing victims wrapped"
        ],
        "poses": [
          "one pulling the other out of the muck",
          "both frozen as a hand bursts from the ground",
          "both fleeing through the trees, branches clawing"
        ],
        "looks": [
          "ripped casual clothes, survival mode each",
          "hooded cloak and lantern each",
          "overalls and a farmer's hat each"
        ]
      },
      "awake vs. nightmare": {
        "locs": [
          "carnival haunted house entrance",
          "carnival ferris wheel night neon",
          "funfair ghost train entrance night"
        ],
        "poses": [
          "both in theatrical costume, striking a dramatic tableau",
          "one swooning, the other catching them, Victorian-style",
          "both doing a monster mash, capes flying"
        ],
        "looks": [
          "Rocky Horror-style corset, fishnets and a tailcoat each",
          "vampire cape and fangs each",
          "ringmaster tailcoat and mask each"
        ]
      },
      "alone vs. together in the dark": {
        "locs": [
          "old mill exterior night",
          "church at night single candle interior",
          "submarine interior cramped red light"
        ],
        "poses": [
          "one reading from an ancient book, the other lighting a candle",
          "both triumphant, one foot on the defeated monster",
          "both sweating at the controls as alarms ring"
        ],
        "looks": [
          "sailor's uniform and oilskin coat each",
          "dark robes and a crucifix each",
          "bathing suit and sunglasses each"
        ]
      },
      "scream vs. silence": {
        "locs": [
          "theatre balcony single spotlight",
          "carnival haunted house entrance",
          "carnival ferris wheel night neon"
        ],
        "poses": [
          "one swooning, the other catching them, Victorian-style",
          "both doing a monster mash, capes flying",
          "both arms raised in a B-movie climax pose"
        ],
        "looks": [
          "vampire cape and fangs each",
          "ringmaster tailcoat and mask each",
          "gothic ball gown and top hat each"
        ]
      },
      "real vs. hallucination": {
        "locs": [
          "funfair ghost train entrance night",
          "theatre balcony single spotlight",
          "carnival haunted house entrance"
        ],
        "poses": [
          "both doing a monster mash, capes flying",
          "both arms raised in a B-movie climax pose",
          "both in theatrical costume, striking a dramatic tableau"
        ],
        "looks": [
          "ringmaster tailcoat and mask each",
          "gothic ball gown and top hat each",
          "Rocky Horror-style corset, fishnets and a tailcoat each"
        ]
      },
      "trust vs. betrayal": {
        "locs": [
          "basement stairs single overhead bulb",
          "1950s suburban basement den night",
          "1950s laboratory neon green glow"
        ],
        "poses": [
          "one raising a syringe triumphantly, the other bound and aghast",
          "both arguing furiously over the creation between them",
          "one with arms thrown wide, cackling over the switch, the other recoiling"
        ],
        "looks": [
          "tailcoat and cape with a hunched assistant's vest each",
          "Victorian doctor's coat and stethoscope each",
          "white lab coat and wild hair each, goggles pushed up"
        ]
      },
      "past vs. haunting": {
        "locs": [
          "fog-covered graveyard at night practical light",
          "dark forest practical torch light",
          "swamp at night fog mist"
        ],
        "poses": [
          "both frozen as a hand bursts from the ground",
          "both fleeing through the trees, branches clawing",
          "both creeping forward, torch held high"
        ],
        "looks": [
          "hooded cloak and lantern each",
          "overalls and a farmer's hat each",
          "camping gear and muddy boots each"
        ]
      },
      "escape vs. trapped": {
        "locs": [
          "rural highway night headlights",
          "abandoned factory night emergency exit green",
          "power plant cooling towers night"
        ],
        "poses": [
          "both climbing a ladder, glancing back in terror",
          "both back to back, surrounded, weapons raised",
          "both sprinting down the corridor, doors slamming behind"
        ],
        "looks": [
          "work overalls and hard hats each",
          "trench coat and fedora each",
          "police uniform and trench coat each"
        ]
      }
    },
    "locs": [
      "1950s laboratory neon green glow",
      "mad scientist laboratory bubbling tubes",
      "underground bunker red emergency lighting",
      "crumbling mansion exterior night",
      "vintage observatory dome night",
      "clock tower night storm",
      "basement stairs single overhead bulb",
      "1950s suburban basement den night",
      "abandoned space station corridor flickering",
      "alien landscape matte painting sky",
      "B-movie spaceship control room retro",
      "retro rocket ship launch pad",
      "alien mothership interior command deck retro blinking",
      "crashed UFO crater smoking",
      "nuclear test site restricted zone",
      "research station arctic storm outside",
      "radio tower blink red night",
      "suburban house at night exterior one light on",
      "1950s American street night creature approaching",
      "small town main street deserted night",
      "trailer park night one porch light",
      "gas station night rural isolated",
      "1960s diner night fluorescent",
      "motel room at night single lamp",
      "roadside motel neon sign night",
      "bowling alley at night empty",
      "bowling alley night creature in shadows 1950s",
      "high school gymnasium prom night monster gate-crashes",
      "school corridor at night lockers",
      "drive-in movie screen at night",
      "drive-in car park night",
      "fog-covered graveyard at night practical light",
      "dark forest practical torch light",
      "swamp at night fog mist",
      "cave entrance dark night fog",
      "corn field at night path through",
      "giant spider web forest clearing victims wrapped",
      "carnival haunted house entrance",
      "carnival ferris wheel night neon",
      "funfair ghost train entrance night",
      "theatre balcony single spotlight",
      "abandoned factory night emergency exit green",
      "power plant cooling towers night",
      "quarry at night floodlit",
      "warehouse district night one lamp",
      "rooftop at night city glow below",
      "hospital corridor night emergency red",
      "rural highway night headlights",
      "beach at night bonfirelight",
      "pier at night fog horn",
      "lighthouse beam night fog",
      "old mill exterior night",
      "church at night single candle interior",
      "submarine interior cramped red light"
    ],
    "poses": [
      "one with arms thrown wide, cackling over the switch, the other recoiling",
      "both leaning over a bubbling flask, eyes gleaming with discovery",
      "one raising a syringe triumphantly, the other bound and aghast",
      "both arguing furiously over the creation between them",
      "both pointing ray guns at something off-frame, chins high",
      "both examining a glowing object, baffled",
      "one in a silver costume menacing the other, who stands defiant",
      "both bracing against the blast, hair blown back",
      "both peering out through the curtains, flashlight in hand",
      "both running toward the camera, something looming behind",
      "both backing slowly away, hands raised",
      "one shielding the other, both defiant",
      "both mid-scream, caught in a freeze frame",
      "one hiding behind the other, peeking over a shoulder",
      "both dancing, oblivious to what lurks behind",
      "both gaping at something huge, popcorn spilling",
      "both creeping forward, torch held high",
      "one pulling the other out of the muck",
      "both frozen as a hand bursts from the ground",
      "both fleeing through the trees, branches clawing",
      "both in theatrical costume, striking a dramatic tableau",
      "one swooning, the other catching them, Victorian-style",
      "both doing a monster mash, capes flying",
      "both arms raised in a B-movie climax pose",
      "both sprinting down the corridor, doors slamming behind",
      "one carrying the other, rescued from danger",
      "both climbing a ladder, glancing back in terror",
      "both back to back, surrounded, weapons raised",
      "both standing at the edge, staring at something rising from the water",
      "one reading from an ancient book, the other lighting a candle",
      "both triumphant, one foot on the defeated monster",
      "both sweating at the controls as alarms ring"
    ],
    "looks": [
      "white lab coat and wild hair each, goggles pushed up",
      "singed lab coat and rubber gloves each",
      "tailcoat and cape with a hunched assistant's vest each",
      "Victorian doctor's coat and stethoscope each",
      "silver jumpsuit and fishbowl helmet each",
      "retro space suit with chunky gloves each",
      "tin-foil costume and antenna headband each",
      "khaki military uniform each",
      "pastel full-skirted dress and letterman jacket each",
      "housewife dress and delivery uniform each",
      "denim jeans and a white tee each, rebel style",
      "sheriff's uniform and flowered dress each",
      "prom gown and tuxedo each, pristine",
      "torn prom dress and rumpled suit each",
      "varsity jacket and cheerleader skirt each",
      "pyjamas and slippers each, interrupted sleep",
      "camping gear and muddy boots each",
      "ripped casual clothes, survival mode each",
      "hooded cloak and lantern each",
      "overalls and a farmer's hat each",
      "Rocky Horror-style corset, fishnets and a tailcoat each",
      "vampire cape and fangs each",
      "ringmaster tailcoat and mask each",
      "gothic ball gown and top hat each",
      "police uniform and trench coat each",
      "nurse uniform and orderly whites each",
      "work overalls and hard hats each",
      "trench coat and fedora each",
      "retro swimwear and sunglasses each",
      "sailor's uniform and oilskin coat each",
      "dark robes and a crucifix each",
      "bathing suit and sunglasses each"
    ],
    "promptPrefix": "Vintage B-movie film still, Technicolor or grainy monochrome, theatrical lighting — ",
    "promptSuffix": "A frame from a real 1950s–1970s genre film: theatrical, deliberately camp, rubber-suit monsters and painted backdrops. The subjects may be heroes, villains, mad scientists, creatures or aliens.",
    "variantDirectives": [
      "Wide set frame showing the whole painted backdrop, the figures small: ",
      "Full-length theatrical pose, camp gesture carries the drama: ",
      "Dramatic close-up lit from below, faces fill the frame: ",
      "Stark high-contrast composition, one hard stage light, minimal detail: ",
      "The set and creature effects dominate the frame, the figures secondary: ",
      "Costume and monster suits take centre stage, the figures posed to show them: "
    ]
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
          "paris bridge padlock city view evening",
          "bridge city lights reflection evening",
          "harbour evening lights reflection"
        ],
        "poses": [
          "both walking close, shoulders touching, the city glittering",
          "both stopping at the rail, one resting a head on the other",
          "both laughing, one pulling the other into a kiss"
        ],
        "looks": [
          "long coat and silk scarf each",
          "dark overcoat and red scarf each",
          "wool coat and leather gloves each"
        ]
      },
      "given vs. received": {
        "locs": [
          "valentine card envelope table morning",
          "kitchen table breakfast heart pancakes morning",
          "bedroom morning light flowers on bedside"
        ],
        "poses": [
          "one presenting flowers, the other receiving them, eyes closed",
          "one reading a card, the other watching anxiously",
          "both laughing at a failed romantic gesture"
        ],
        "looks": [
          "pyjamas and robe each",
          "simple casual clothes each",
          "soft colours, hair tousled each"
        ]
      },
      "said vs. unsaid": {
        "locs": [
          "candlelit restaurant table for two red roses",
          "restaurant window table rain outside candlelight",
          "restaurant bar waiting evening dressed up"
        ],
        "poses": [
          "both leaning across the table toward each other, eyes locked",
          "one reading the menu, the other not looking away",
          "both raising their glasses in a quiet toast"
        ],
        "looks": [
          "red dress and dark suit each",
          "elegant black dress and tailored jacket each",
          "silk blouse and crisp shirt each"
        ]
      },
      "romantic vs. real": {
        "locs": [
          "home dining table candles simple intimate",
          "home sofa evening candles wine",
          "kitchen cooking together evening home"
        ],
        "poses": [
          "both on the sofa, facing each other, knees touching",
          "both cooking together, one tasting from the other's spoon",
          "both dancing slowly, no music"
        ],
        "looks": [
          "cosy knit and soft trousers each",
          "casual shirt and comfortable dress each",
          "soft jumper and jeans each"
        ]
      },
      "expectation vs. presence": {
        "locs": [
          "small restaurant neighbourhood intimate evening",
          "table for two empty setting waiting",
          "restaurant exterior evening arriving dressed"
        ],
        "poses": [
          "one reading the menu, the other not looking away",
          "both raising their glasses in a quiet toast",
          "both leaning across the table toward each other, eyes locked"
        ],
        "looks": [
          "elegant black dress and tailored jacket each",
          "silk blouse and crisp shirt each",
          "red dress and dark suit each"
        ]
      },
      "desire vs. fear": {
        "locs": [
          "apartment balcony city evening lights",
          "cinema queue cold evening together",
          "paris bridge padlock city view evening"
        ],
        "poses": [
          "both stopping at the rail, one resting a head on the other",
          "both laughing, one pulling the other into a kiss",
          "both walking close, shoulders touching, the city glittering"
        ],
        "looks": [
          "dark overcoat and red scarf each",
          "wool coat and leather gloves each",
          "long coat and silk scarf each"
        ]
      },
      "together vs. apart": {
        "locs": [
          "park bench winter afternoon couples",
          "park winter afternoon hand in hand",
          "café window seat rainy afternoon"
        ],
        "poses": [
          "both walking hand in hand, breath misting",
          "both huddled over a shared drink, laughing",
          "both watching the rain run down the glass"
        ],
        "looks": [
          "winter coat and red mittens each",
          "wool coat and beanie each",
          "chunky scarf and padded jacket each"
        ]
      },
      "first vs. last": {
        "locs": [
          "bridge city lights reflection evening",
          "harbour evening lights reflection",
          "apartment balcony city evening lights"
        ],
        "poses": [
          "both laughing, one pulling the other into a kiss",
          "both walking close, shoulders touching, the city glittering",
          "both stopping at the rail, one resting a head on the other"
        ],
        "looks": [
          "wool coat and leather gloves each",
          "long coat and silk scarf each",
          "dark overcoat and red scarf each"
        ]
      },
      "sweet vs. bitter": {
        "locs": [
          "letter box valentine card morning discovered",
          "valentine card writing desk lamp evening",
          "red roses delivered doorstep evening"
        ],
        "poses": [
          "one reading a card, the other watching anxiously",
          "both laughing at a failed romantic gesture",
          "one presenting flowers, the other receiving them, eyes closed"
        ],
        "looks": [
          "simple casual clothes each",
          "soft colours, hair tousled each",
          "pyjamas and robe each"
        ]
      },
      "hope vs. heartbreak": {
        "locs": [
          "park bench winter afternoon couples",
          "park winter afternoon hand in hand",
          "café window seat rainy afternoon"
        ],
        "poses": [
          "both huddled over a shared drink, laughing",
          "both watching the rain run down the glass",
          "both walking hand in hand, breath misting"
        ],
        "looks": [
          "wool coat and beanie each",
          "chunky scarf and padded jacket each",
          "winter coat and red mittens each"
        ]
      },
      "public vs. private love": {
        "locs": [
          "rooftop restaurant city view evening",
          "wine bar intimate corner evening",
          "candlelit restaurant table for two red roses"
        ],
        "poses": [
          "both raising their glasses in a quiet toast",
          "both leaning across the table toward each other, eyes locked",
          "one reading the menu, the other not looking away"
        ],
        "looks": [
          "silk blouse and crisp shirt each",
          "red dress and dark suit each",
          "elegant black dress and tailored jacket each"
        ]
      },
      "gesture vs. feeling": {
        "locs": [
          "doorstep moment evening arrival flowers",
          "florist shop red roses morning selection",
          "flower market morning red roses selection"
        ],
        "poses": [
          "both laughing at a failed romantic gesture",
          "one presenting flowers, the other receiving them, eyes closed",
          "one reading a card, the other watching anxiously"
        ],
        "looks": [
          "soft colours, hair tousled each",
          "pyjamas and robe each",
          "simple casual clothes each"
        ]
      },
      "passion vs. comfort": {
        "locs": [
          "dining room home candles occasion",
          "hotel room rose petals champagne evening",
          "home dining table candles simple intimate"
        ],
        "poses": [
          "both cooking together, one tasting from the other's spoon",
          "both dancing slowly, no music",
          "both on the sofa, facing each other, knees touching"
        ],
        "looks": [
          "casual shirt and comfortable dress each",
          "soft jumper and jeans each",
          "cosy knit and soft trousers each"
        ]
      },
      "new vs. familiar love": {
        "locs": [
          "home sofa evening candles wine",
          "kitchen cooking together evening home",
          "dining room home candles occasion"
        ],
        "poses": [
          "both dancing slowly, no music",
          "both on the sofa, facing each other, knees touching",
          "both cooking together, one tasting from the other's spoon"
        ],
        "looks": [
          "soft jumper and jeans each",
          "cosy knit and soft trousers each",
          "casual shirt and comfortable dress each"
        ]
      },
      "the card vs. the truth": {
        "locs": [
          "valentine card envelope table morning",
          "kitchen table breakfast heart pancakes morning",
          "bedroom morning light flowers on bedside"
        ],
        "poses": [
          "one presenting flowers, the other receiving them, eyes closed",
          "one reading a card, the other watching anxiously",
          "both laughing at a failed romantic gesture"
        ],
        "looks": [
          "pyjamas and robe each",
          "simple casual clothes each",
          "soft colours, hair tousled each"
        ]
      }
    },
    "locs": [
      "candlelit restaurant table for two red roses",
      "restaurant window table rain outside candlelight",
      "restaurant bar waiting evening dressed up",
      "small restaurant neighbourhood intimate evening",
      "table for two empty setting waiting",
      "restaurant exterior evening arriving dressed",
      "rooftop restaurant city view evening",
      "wine bar intimate corner evening",
      "paris bridge padlock city view evening",
      "bridge city lights reflection evening",
      "harbour evening lights reflection",
      "apartment balcony city evening lights",
      "cinema queue cold evening together",
      "home dining table candles simple intimate",
      "home sofa evening candles wine",
      "kitchen cooking together evening home",
      "dining room home candles occasion",
      "hotel room rose petals champagne evening",
      "valentine card envelope table morning",
      "kitchen table breakfast heart pancakes morning",
      "bedroom morning light flowers on bedside",
      "letter box valentine card morning discovered",
      "valentine card writing desk lamp evening",
      "red roses delivered doorstep evening",
      "doorstep moment evening arrival flowers",
      "florist shop red roses morning selection",
      "flower market morning red roses selection",
      "park bench winter afternoon couples",
      "park winter afternoon hand in hand",
      "café window seat rainy afternoon"
    ],
    "poses": [
      "both leaning across the table toward each other, eyes locked",
      "one reading the menu, the other not looking away",
      "both raising their glasses in a quiet toast",
      "both walking close, shoulders touching, the city glittering",
      "both stopping at the rail, one resting a head on the other",
      "both laughing, one pulling the other into a kiss",
      "both on the sofa, facing each other, knees touching",
      "both cooking together, one tasting from the other's spoon",
      "both dancing slowly, no music",
      "one presenting flowers, the other receiving them, eyes closed",
      "one reading a card, the other watching anxiously",
      "both laughing at a failed romantic gesture",
      "both walking hand in hand, breath misting",
      "both huddled over a shared drink, laughing",
      "both watching the rain run down the glass"
    ],
    "looks": [
      "red dress and dark suit each",
      "elegant black dress and tailored jacket each",
      "silk blouse and crisp shirt each",
      "long coat and silk scarf each",
      "dark overcoat and red scarf each",
      "wool coat and leather gloves each",
      "cosy knit and soft trousers each",
      "casual shirt and comfortable dress each",
      "soft jumper and jeans each",
      "pyjamas and robe each",
      "simple casual clothes each",
      "soft colours, hair tousled each",
      "winter coat and red mittens each",
      "wool coat and beanie each",
      "chunky scarf and padded jacket each"
    ],
    "promptSuffix": "Colour grade: deep red, rose, candlelight amber — the palette of Valentine’s Day done with restraint. Warm and intimate, never garish."
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
          "breakfast tray bedroom morning flowers",
          "kitchen table Sunday morning flowers bouquet",
          "front door flowers delivered morning"
        ],
        "poses": [
          "one carrying a tray, the other still in bed, beaming",
          "both at the table, one opening a card, tears of joy",
          "one arranging a vase, the other watching fondly"
        ],
        "looks": [
          "cosy dressing gown each",
          "soft pyjamas and cardigan each",
          "casual home clothes, hair loose each"
        ]
      },
      "past vs. present": {
        "locs": [
          "dining table sunday lunch spring",
          "restaurant sunday lunch spring afternoon",
          "café sunday morning flowers on table"
        ],
        "poses": [
          "both sharing a dessert, laughing",
          "both raising glasses, eyes shining",
          "both paging through an old album, heads together"
        ],
        "looks": [
          "smart blouse and tailored trousers each",
          "simple dress and blazer each",
          "pastel shirt and cardigan each"
        ]
      },
      "child vs. adult": {
        "locs": [
          "spring garden flowers morning sunlight",
          "garden path spring flowers either side",
          "garden gate spring morning arrival"
        ],
        "poses": [
          "both walking arm in arm, blossoms in their hands",
          "both sitting close, laughing at a shared memory",
          "both bending over the petals, heads together"
        ],
        "looks": [
          "soft floral dress and cardigan each",
          "pale shirt and light trousers each",
          "spring dress and sun hat each"
        ]
      },
      "remembered vs. present": {
        "locs": [
          "living room spring afternoon light flowers",
          "florist shop spring flowers selection morning",
          "dining table sunday lunch spring"
        ],
        "poses": [
          "both sharing a dessert, laughing",
          "both raising glasses, eyes shining",
          "both paging through an old album, heads together"
        ],
        "looks": [
          "smart blouse and tailored trousers each",
          "simple dress and blazer each",
          "pastel shirt and cardigan each"
        ]
      },
      "gratitude vs. guilt": {
        "locs": [
          "kitchen flowers vase morning light",
          "bedroom morning light flowers bedside",
          "sunday morning light through window flowers"
        ],
        "poses": [
          "one carrying a tray, the other still in bed, beaming",
          "both at the table, one opening a card, tears of joy",
          "one arranging a vase, the other watching fondly"
        ],
        "looks": [
          "cosy dressing gown each",
          "soft pyjamas and cardigan each",
          "casual home clothes, hair loose each"
        ]
      },
      "love vs. time": {
        "locs": [
          "garden table lunch spring afternoon",
          "home garden spring evening golden hour",
          "conservatory morning light spring flowers"
        ],
        "poses": [
          "both at a laid table, passing plates",
          "both lifting a pot of tea, laughing",
          "both leaning back in their chairs in the sun"
        ],
        "looks": [
          "floral dress and linen jacket each",
          "light shirt and sleeveless dress each",
          "pastel top and cotton trousers each"
        ]
      },
      "then vs. now": {
        "locs": [
          "restaurant sunday lunch spring afternoon",
          "café sunday morning flowers on table",
          "living room spring afternoon light flowers"
        ],
        "poses": [
          "both sharing a dessert, laughing",
          "both raising glasses, eyes shining",
          "both paging through an old album, heads together"
        ],
        "looks": [
          "smart blouse and tailored trousers each",
          "simple dress and blazer each",
          "pastel shirt and cardigan each"
        ]
      },
      "the mother vs. the woman": {
        "locs": [
          "porch steps spring morning flowers",
          "park spring afternoon flowers blooming",
          "garden bench spring afternoon flowers"
        ],
        "poses": [
          "both walking arm in arm, blossoms in their hands",
          "both sitting close, laughing at a shared memory",
          "both bending over the petals, heads together"
        ],
        "looks": [
          "soft floral dress and cardigan each",
          "pale shirt and light trousers each",
          "spring dress and sun hat each"
        ]
      },
      "sacrifice vs. self": {
        "locs": [
          "breakfast tray bedroom morning flowers",
          "kitchen table Sunday morning flowers bouquet",
          "front door flowers delivered morning"
        ],
        "poses": [
          "one carrying a tray, the other still in bed, beaming",
          "both at the table, one opening a card, tears of joy",
          "one arranging a vase, the other watching fondly"
        ],
        "looks": [
          "cosy dressing gown each",
          "soft pyjamas and cardigan each",
          "casual home clothes, hair loose each"
        ]
      },
      "held vs. let go": {
        "locs": [
          "garden table lunch spring afternoon",
          "home garden spring evening golden hour",
          "conservatory morning light spring flowers"
        ],
        "poses": [
          "both at a laid table, passing plates",
          "both lifting a pot of tea, laughing",
          "both leaning back in their chairs in the sun"
        ],
        "looks": [
          "floral dress and linen jacket each",
          "light shirt and sleeveless dress each",
          "pastel top and cotton trousers each"
        ]
      }
    },
    "locs": [
      "spring garden flowers morning sunlight",
      "garden path spring flowers either side",
      "garden gate spring morning arrival",
      "porch steps spring morning flowers",
      "park spring afternoon flowers blooming",
      "garden bench spring afternoon flowers",
      "garden table lunch spring afternoon",
      "home garden spring evening golden hour",
      "conservatory morning light spring flowers",
      "breakfast tray bedroom morning flowers",
      "kitchen table Sunday morning flowers bouquet",
      "front door flowers delivered morning",
      "kitchen flowers vase morning light",
      "bedroom morning light flowers bedside",
      "sunday morning light through window flowers",
      "dining table sunday lunch spring",
      "restaurant sunday lunch spring afternoon",
      "café sunday morning flowers on table",
      "living room spring afternoon light flowers",
      "florist shop spring flowers selection morning"
    ],
    "poses": [
      "both walking arm in arm, blossoms in their hands",
      "both sitting close, laughing at a shared memory",
      "both bending over the petals, heads together",
      "both at a laid table, passing plates",
      "both lifting a pot of tea, laughing",
      "both leaning back in their chairs in the sun",
      "one carrying a tray, the other still in bed, beaming",
      "both at the table, one opening a card, tears of joy",
      "one arranging a vase, the other watching fondly",
      "both sharing a dessert, laughing",
      "both raising glasses, eyes shining",
      "both paging through an old album, heads together"
    ],
    "looks": [
      "soft floral dress and cardigan each",
      "pale shirt and light trousers each",
      "spring dress and sun hat each",
      "floral dress and linen jacket each",
      "light shirt and sleeveless dress each",
      "pastel top and cotton trousers each",
      "cosy dressing gown each",
      "soft pyjamas and cardigan each",
      "casual home clothes, hair loose each",
      "smart blouse and tailored trousers each",
      "simple dress and blazer each",
      "pastel shirt and cardigan each"
    ],
    "promptSuffix": "Colour grade: soft spring light — pale gold, blush, the fresh green of new growth. Warm and tender."
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
          "rooftop fireworks city view night",
          "public park fireworks crowd night"
        ],
        "poses": [
          "both gazing up, faces lit red white and blue",
          "both on a blanket, one's head on the other's shoulder, sparks above",
          "both cheering as the sky bursts"
        ],
        "looks": [
          "red white and blue casual outfit each",
          "denim jacket and white tee each",
          "summer dress and light jacket each"
        ]
      },
      "celebration vs. weight of history": {
        "locs": [
          "small town parade main street day",
          "small town main street flags bunting day",
          "small town bandstand afternoon"
        ],
        "poses": [
          "both waving to the crowd, flags in hand",
          "both clapping along to the band, grinning",
          "both standing proud, hands over hearts"
        ],
        "looks": [
          "small-town Sunday best each",
          "striped shirt and sun hat each",
          "patriotic print dress and straw hat each"
        ]
      },
      "together vs. divided": {
        "locs": [
          "small town church steps afternoon",
          "memorial park flags afternoon",
          "small town parade main street day"
        ],
        "poses": [
          "both clapping along to the band, grinning",
          "both standing proud, hands over hearts",
          "both waving to the crowd, flags in hand"
        ],
        "looks": [
          "striped shirt and sun hat each",
          "patriotic print dress and straw hat each",
          "small-town Sunday best each"
        ]
      },
      "pride vs. complexity": {
        "locs": [
          "small town main street flags bunting day",
          "small town bandstand afternoon",
          "small town church steps afternoon"
        ],
        "poses": [
          "both standing proud, hands over hearts",
          "both waving to the crowd, flags in hand",
          "both clapping along to the band, grinning"
        ],
        "looks": [
          "patriotic print dress and straw hat each",
          "small-town Sunday best each",
          "striped shirt and sun hat each"
        ]
      },
      "past vs. present": {
        "locs": [
          "beach bonfire fourth of july night",
          "fairground fourth of july afternoon",
          "carnival midway fourth afternoon"
        ],
        "poses": [
          "both holding sparklers, writing in the dark",
          "both sharing a funnel cake, laughing",
          "both silhouetted against the sunset, arms around each other"
        ],
        "looks": [
          "beach casual in red white and blue each",
          "vintage-style summer dress and polo each",
          "light linen shirt and shorts each"
        ]
      },
      "spectacle vs. meaning": {
        "locs": [
          "lake fireworks reflection night",
          "dock lake fireworks night",
          "bridge fireworks city view night"
        ],
        "poses": [
          "both on a blanket, one's head on the other's shoulder, sparks above",
          "both cheering as the sky bursts",
          "both gazing up, faces lit red white and blue"
        ],
        "looks": [
          "denim jacket and white tee each",
          "summer dress and light jacket each",
          "red white and blue casual outfit each"
        ]
      },
      "red vs. blue": {
        "locs": [
          "sunset beach american flags evening",
          "beach bonfire fourth of july night",
          "fairground fourth of july afternoon"
        ],
        "poses": [
          "both sharing a funnel cake, laughing",
          "both silhouetted against the sunset, arms around each other",
          "both holding sparklers, writing in the dark"
        ],
        "looks": [
          "vintage-style summer dress and polo each",
          "light linen shirt and shorts each",
          "beach casual in red white and blue each"
        ]
      },
      "loud vs. quiet": {
        "locs": [
          "backyard barbecue american flag bunting afternoon",
          "suburban front porch american flag evening",
          "suburban backyard pool afternoon"
        ],
        "poses": [
          "both laughing over the grill, tongs and paper plates",
          "both lounging with cold drinks, feet up",
          "both mid-splash, laughing, hair dripping"
        ],
        "looks": [
          "denim shorts and white tee each",
          "swim shorts and sundress each",
          "tank top and cut-offs each"
        ]
      },
      "patriot vs. citizen": {
        "locs": [
          "memorial park flags afternoon",
          "small town parade main street day",
          "small town main street flags bunting day"
        ],
        "poses": [
          "both waving to the crowd, flags in hand",
          "both clapping along to the band, grinning",
          "both standing proud, hands over hearts"
        ],
        "looks": [
          "small-town Sunday best each",
          "striped shirt and sun hat each",
          "patriotic print dress and straw hat each"
        ]
      },
      "one nation vs. many": {
        "locs": [
          "pier end fireworks over water night",
          "fireworks over city harbour night",
          "rooftop fireworks city view night"
        ],
        "poses": [
          "both cheering as the sky bursts",
          "both gazing up, faces lit red white and blue",
          "both on a blanket, one's head on the other's shoulder, sparks above"
        ],
        "looks": [
          "summer dress and light jacket each",
          "red white and blue casual outfit each",
          "denim jacket and white tee each"
        ]
      }
    },
    "locs": [
      "fireworks over city harbour night",
      "rooftop fireworks city view night",
      "public park fireworks crowd night",
      "lake fireworks reflection night",
      "dock lake fireworks night",
      "bridge fireworks city view night",
      "pier end fireworks over water night",
      "small town parade main street day",
      "small town main street flags bunting day",
      "small town bandstand afternoon",
      "small town church steps afternoon",
      "memorial park flags afternoon",
      "backyard barbecue american flag bunting afternoon",
      "suburban front porch american flag evening",
      "suburban backyard pool afternoon",
      "baseball field small town afternoon",
      "beach bonfire fourth of july night",
      "fairground fourth of july afternoon",
      "carnival midway fourth afternoon",
      "sunset beach american flags evening"
    ],
    "poses": [
      "both gazing up, faces lit red white and blue",
      "both on a blanket, one's head on the other's shoulder, sparks above",
      "both cheering as the sky bursts",
      "both waving to the crowd, flags in hand",
      "both clapping along to the band, grinning",
      "both standing proud, hands over hearts",
      "both laughing over the grill, tongs and paper plates",
      "both lounging with cold drinks, feet up",
      "both mid-splash, laughing, hair dripping",
      "both holding sparklers, writing in the dark",
      "both sharing a funnel cake, laughing",
      "both silhouetted against the sunset, arms around each other"
    ],
    "looks": [
      "red white and blue casual outfit each",
      "denim jacket and white tee each",
      "summer dress and light jacket each",
      "small-town Sunday best each",
      "striped shirt and sun hat each",
      "patriotic print dress and straw hat each",
      "denim shorts and white tee each",
      "swim shorts and sundress each",
      "tank top and cut-offs each",
      "beach casual in red white and blue each",
      "vintage-style summer dress and polo each",
      "light linen shirt and shorts each"
    ],
    "promptSuffix": "Colour grade: red, white, blue — the saturated palette of American Independence Day. Fireworks gold and silver against night sky, or the warm afternoon of small-town celebration."
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
          "plaza principal pueblo night fireworks grito",
          "cathedral facade green white red lights night"
        ],
        "poses": [
          "both with arms raised, faces lit by fireworks",
          "both shouting with the crowd, flags waving",
          "both gazing up, red green and white sparks above"
        ],
        "looks": [
          "green, white and red outfit each",
          "embroidered blouse and dark trousers each",
          "festive tricolour shawl and shirt each"
        ]
      },
      "past vs. present": {
        "locs": [
          "hacienda colonial courtyard evening",
          "small pueblo plaza morning independence",
          "colonial archway green white red bunting"
        ],
        "poses": [
          "both walking the cobbled lane with flags in hand",
          "both resting under the arches, smiling",
          "both standing in the courtyard, bunting overhead"
        ],
        "looks": [
          "simple cotton clothes and sombrero each",
          "embroidered dress and hat each",
          "white shirt and green sash each"
        ]
      },
      "freedom vs. memory": {
        "locs": [
          "colonial town square fireworks night",
          "cathedral bells ringing independence night",
          "plaza de armas provincial town evening"
        ],
        "poses": [
          "both with arms raised, faces lit by fireworks",
          "both shouting with the crowd, flags waving",
          "both gazing up, red green and white sparks above"
        ],
        "looks": [
          "green, white and red outfit each",
          "embroidered blouse and dark trousers each",
          "festive tricolour shawl and shirt each"
        ]
      },
      "celebration vs. weight": {
        "locs": [
          "town square mariachi performance evening",
          "folk dance performance plaza evening",
          "traditional dress parade main street day"
        ],
        "poses": [
          "both mid-twirl, skirts flaring",
          "both stamping their feet in rhythm",
          "both singing along to the band, arms around each other"
        ],
        "looks": [
          "wide ruffled skirt and embroidered blouse each",
          "charro jacket and bow tie each",
          "bright folk dress and ribbons each"
        ]
      },
      "together vs. divided": {
        "locs": [
          "zocalo mexico city grito de independencia night",
          "plaza principal pueblo night fireworks grito",
          "cathedral facade green white red lights night"
        ],
        "poses": [
          "both with arms raised, faces lit by fireworks",
          "both shouting with the crowd, flags waving",
          "both gazing up, red green and white sparks above"
        ],
        "looks": [
          "green, white and red outfit each",
          "embroidered blouse and dark trousers each",
          "festive tricolour shawl and shirt each"
        ]
      },
      "identity vs. belonging": {
        "locs": [
          "traditional market dia de independencia stalls",
          "traditional feast table day of independence",
          "market stalls mexican crafts independence"
        ],
        "poses": [
          "both sharing a plate of food, laughing",
          "both haggling over crafts, delighted",
          "both stirring a huge pot together"
        ],
        "looks": [
          "embroidered blouse and apron each",
          "cotton shirt and straw hat each",
          "festive dress and rebozo each"
        ]
      },
      "the grito vs. the silence after": {
        "locs": [
          "mountain village independence celebration afternoon",
          "hacienda colonial courtyard evening",
          "small pueblo plaza morning independence"
        ],
        "poses": [
          "both walking the cobbled lane with flags in hand",
          "both resting under the arches, smiling",
          "both standing in the courtyard, bunting overhead"
        ],
        "looks": [
          "simple cotton clothes and sombrero each",
          "embroidered dress and hat each",
          "white shirt and green sash each"
        ]
      },
      "tradition vs. change": {
        "locs": [
          "charro escaramuza horse arena afternoon",
          "charreada arena afternoon traditional"
        ],
        "poses": [
          "both standing proud with reins in hand",
          "both at the ring's edge, hats tilted",
          "both mid-step in a bow to the crowd"
        ],
        "looks": [
          "silver-buttoned charro suit and wide sombrero each",
          "long embroidered dress with ribbons each",
          "embroidered jacket and tight trousers each"
        ]
      },
      "roots vs. future": {
        "locs": [
          "traditional kitchen independence feast morning",
          "traditional market dia de independencia stalls",
          "traditional feast table day of independence"
        ],
        "poses": [
          "both sharing a plate of food, laughing",
          "both haggling over crafts, delighted",
          "both stirring a huge pot together"
        ],
        "looks": [
          "embroidered blouse and apron each",
          "cotton shirt and straw hat each",
          "festive dress and rebozo each"
        ]
      },
      "national vs. personal": {
        "locs": [
          "mexican flag green white red waving plaza",
          "town square mariachi performance evening",
          "folk dance performance plaza evening"
        ],
        "poses": [
          "both mid-twirl, skirts flaring",
          "both stamping their feet in rhythm",
          "both singing along to the band, arms around each other"
        ],
        "looks": [
          "wide ruffled skirt and embroidered blouse each",
          "charro jacket and bow tie each",
          "bright folk dress and ribbons each"
        ]
      }
    },
    "locs": [
      "zocalo mexico city grito de independencia night",
      "plaza principal pueblo night fireworks grito",
      "cathedral facade green white red lights night",
      "colonial town square fireworks night",
      "cathedral bells ringing independence night",
      "plaza de armas provincial town evening",
      "charro escaramuza horse arena afternoon",
      "charreada arena afternoon traditional",
      "traditional market dia de independencia stalls",
      "traditional feast table day of independence",
      "market stalls mexican crafts independence",
      "traditional kitchen independence feast morning",
      "town square mariachi performance evening",
      "folk dance performance plaza evening",
      "traditional dress parade main street day",
      "mexican flag green white red waving plaza",
      "hacienda colonial courtyard evening",
      "small pueblo plaza morning independence",
      "colonial archway green white red bunting",
      "mountain village independence celebration afternoon"
    ],
    "poses": [
      "both with arms raised, faces lit by fireworks",
      "both shouting with the crowd, flags waving",
      "both gazing up, red green and white sparks above",
      "both standing proud with reins in hand",
      "both at the ring's edge, hats tilted",
      "both mid-step in a bow to the crowd",
      "both sharing a plate of food, laughing",
      "both haggling over crafts, delighted",
      "both stirring a huge pot together",
      "both mid-twirl, skirts flaring",
      "both stamping their feet in rhythm",
      "both singing along to the band, arms around each other",
      "both walking the cobbled lane with flags in hand",
      "both resting under the arches, smiling",
      "both standing in the courtyard, bunting overhead"
    ],
    "looks": [
      "green, white and red outfit each",
      "embroidered blouse and dark trousers each",
      "festive tricolour shawl and shirt each",
      "silver-buttoned charro suit and wide sombrero each",
      "long embroidered dress with ribbons each",
      "embroidered jacket and tight trousers each",
      "embroidered blouse and apron each",
      "cotton shirt and straw hat each",
      "festive dress and rebozo each",
      "wide ruffled skirt and embroidered blouse each",
      "charro jacket and bow tie each",
      "bright folk dress and ribbons each",
      "simple cotton clothes and sombrero each",
      "embroidered dress and hat each",
      "white shirt and green sash each"
    ],
    "promptSuffix": "Colour grade: green, white, red — the colours of the Mexican flag, the light of the plaza at night, fireworks over the cathedral. Warm, celebratory, deeply proud."
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
          "dining room set table thanksgiving anticipation",
          "dining table empty setting thanksgiving anticipation"
        ],
        "poses": [
          "both at the head of the table, hands clasped before the meal",
          "both raising a glass over the laden feast",
          "both laughing, passing dishes around"
        ],
        "looks": [
          "autumn knitwear and smart trousers each",
          "burnt-orange sweater and dark jeans each",
          "family-gathering best casual each"
        ]
      },
      "abundance vs. absence": {
        "locs": [
          "dining room candles thanksgiving evening",
          "living room after dinner thanksgiving evening",
          "thanksgiving table full harvest decorations afternoon"
        ],
        "poses": [
          "both raising a glass over the laden feast",
          "both laughing, passing dishes around",
          "both at the head of the table, hands clasped before the meal"
        ],
        "looks": [
          "burnt-orange sweater and dark jeans each",
          "family-gathering best casual each",
          "autumn knitwear and smart trousers each"
        ]
      },
      "together vs. apart": {
        "locs": [
          "parade crowd thanksgiving morning city",
          "small town parade thanksgiving morning",
          "airport arrival thanksgiving reunion"
        ],
        "poses": [
          "both hugging tightly, bags dropped at their feet",
          "both cheering the passing floats",
          "both sprawled on the sofa, laughing at the game"
        ],
        "looks": [
          "travelling coat and scarf each",
          "casual autumn layers each",
          "warm cardigan and jeans each"
        ]
      },
      "tradition vs. change": {
        "locs": [
          "kitchen cooking thanksgiving morning steam",
          "kitchen table morning coffee thanksgiving preparation",
          "supermarket thanksgiving eve last minute"
        ],
        "poses": [
          "both cooking, flour on their noses",
          "both washing up side by side, laughing",
          "one tasting the stuffing, the other pretending to disapprove"
        ],
        "looks": [
          "apron over smart casual clothes each",
          "rolled-up sleeves and kitchen apron each",
          "warm jumper and apron each"
        ]
      },
      "past vs. present": {
        "locs": [
          "front porch autumn leaves afternoon golden",
          "front door wreath autumn thanksgiving",
          "backyard afternoon thanksgiving football"
        ],
        "poses": [
          "both walking arm in arm through falling leaves",
          "both tossing a ball, laughing",
          "both sitting close on the steps, warm drinks in hand"
        ],
        "looks": [
          "chunky scarf and autumn jacket each",
          "plaid shirt and wool coat each",
          "earth-toned layers and boots each"
        ]
      },
      "the table vs. who is missing": {
        "locs": [
          "dining room set table thanksgiving anticipation",
          "dining table empty setting thanksgiving anticipation",
          "dining room candles thanksgiving evening"
        ],
        "poses": [
          "both laughing, passing dishes around",
          "both at the head of the table, hands clasped before the meal",
          "both raising a glass over the laden feast"
        ],
        "looks": [
          "family-gathering best casual each",
          "autumn knitwear and smart trousers each",
          "burnt-orange sweater and dark jeans each"
        ]
      },
      "warmth vs. obligation": {
        "locs": [
          "autumn farm stand harvest thanksgiving morning",
          "kitchen sink washing up thanksgiving evening",
          "kitchen cooking thanksgiving morning steam"
        ],
        "poses": [
          "both washing up side by side, laughing",
          "one tasting the stuffing, the other pretending to disapprove",
          "both cooking, flour on their noses"
        ],
        "looks": [
          "rolled-up sleeves and kitchen apron each",
          "warm jumper and apron each",
          "apron over smart casual clothes each"
        ]
      },
      "feast vs. famine": {
        "locs": [
          "living room after dinner thanksgiving evening",
          "thanksgiving table full harvest decorations afternoon",
          "dining room set table thanksgiving anticipation"
        ],
        "poses": [
          "both at the head of the table, hands clasped before the meal",
          "both raising a glass over the laden feast",
          "both laughing, passing dishes around"
        ],
        "looks": [
          "autumn knitwear and smart trousers each",
          "burnt-orange sweater and dark jeans each",
          "family-gathering best casual each"
        ]
      },
      "family vs. chosen family": {
        "locs": [
          "family living room thanksgiving afternoon football",
          "parade crowd thanksgiving morning city",
          "small town parade thanksgiving morning"
        ],
        "poses": [
          "both cheering the passing floats",
          "both sprawled on the sofa, laughing at the game",
          "both hugging tightly, bags dropped at their feet"
        ],
        "looks": [
          "casual autumn layers each",
          "warm cardigan and jeans each",
          "travelling coat and scarf each"
        ]
      },
      "home vs. displacement": {
        "locs": [
          "autumn park walk thanksgiving afternoon",
          "backyard bonfire after thanksgiving evening",
          "neighbourhood thanksgiving morning quiet"
        ],
        "poses": [
          "both tossing a ball, laughing",
          "both sitting close on the steps, warm drinks in hand",
          "both walking arm in arm through falling leaves"
        ],
        "looks": [
          "plaid shirt and wool coat each",
          "earth-toned layers and boots each",
          "chunky scarf and autumn jacket each"
        ]
      }
    },
    "locs": [
      "kitchen cooking thanksgiving morning steam",
      "kitchen table morning coffee thanksgiving preparation",
      "supermarket thanksgiving eve last minute",
      "autumn farm stand harvest thanksgiving morning",
      "kitchen sink washing up thanksgiving evening",
      "thanksgiving table full harvest decorations afternoon",
      "dining room set table thanksgiving anticipation",
      "dining table empty setting thanksgiving anticipation",
      "dining room candles thanksgiving evening",
      "living room after dinner thanksgiving evening",
      "front porch autumn leaves afternoon golden",
      "front door wreath autumn thanksgiving",
      "backyard afternoon thanksgiving football",
      "autumn park walk thanksgiving afternoon",
      "backyard bonfire after thanksgiving evening",
      "neighbourhood thanksgiving morning quiet",
      "parade crowd thanksgiving morning city",
      "small town parade thanksgiving morning",
      "airport arrival thanksgiving reunion",
      "family living room thanksgiving afternoon football"
    ],
    "poses": [
      "both cooking, flour on their noses",
      "both washing up side by side, laughing",
      "one tasting the stuffing, the other pretending to disapprove",
      "both at the head of the table, hands clasped before the meal",
      "both raising a glass over the laden feast",
      "both laughing, passing dishes around",
      "both walking arm in arm through falling leaves",
      "both tossing a ball, laughing",
      "both sitting close on the steps, warm drinks in hand",
      "both hugging tightly, bags dropped at their feet",
      "both cheering the passing floats",
      "both sprawled on the sofa, laughing at the game"
    ],
    "looks": [
      "apron over smart casual clothes each",
      "rolled-up sleeves and kitchen apron each",
      "warm jumper and apron each",
      "autumn knitwear and smart trousers each",
      "burnt-orange sweater and dark jeans each",
      "family-gathering best casual each",
      "chunky scarf and autumn jacket each",
      "plaid shirt and wool coat each",
      "earth-toned layers and boots each",
      "travelling coat and scarf each",
      "casual autumn layers each",
      "warm cardigan and jeans each"
    ],
    "promptSuffix": "Colour grade: amber, burnt orange, deep rust — the harvest palette. Warm indoor light, autumn afternoon gold outside."
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
          "halloween porch carved pumpkins orange night",
          "suburban trick or treat street night",
          "carved pumpkin line porch steps evening"
        ],
        "poses": [
          "both on the porch in matching costumes, candy bags held out",
          "both answering the door, mid-scare, laughing",
          "both posed beside the carved pumpkins, candle glow on their faces"
        ],
        "looks": [
          "witch and vampire couples costume each",
          "classic horror monster costumes each",
          "skeleton bodysuit and face paint each"
        ]
      },
      "fear vs. delight": {
        "locs": [
          "haunted house decorated exterior night",
          "cemetery halloween decorated night moon",
          "graveyard fog machine night halloween"
        ],
        "poses": [
          "both creeping through the fog, one clutching the other's sleeve",
          "both lit from below by a flickering torch, faces eerie",
          "both frozen mid-scream, playful and terrified"
        ],
        "looks": [
          "ghost sheet and tattered cloak each",
          "zombie makeup and torn formal wear each",
          "gothic black and lace each"
        ]
      },
      "real vs. imagined": {
        "locs": [
          "haunted hayride field night dark",
          "corn maze halloween night torches",
          "halloween fog street night orange glow"
        ],
        "poses": [
          "both lit from below by a flickering torch, faces eerie",
          "both frozen mid-scream, playful and terrified",
          "both creeping through the fog, one clutching the other's sleeve"
        ],
        "looks": [
          "zombie makeup and torn formal wear each",
          "gothic black and lace each",
          "ghost sheet and tattered cloak each"
        ]
      },
      "child vs. adult": {
        "locs": [
          "front door decorated cobwebs night",
          "halloween street blocked cars candy night",
          "jack o lantern lit porch dark night"
        ],
        "poses": [
          "both answering the door, mid-scare, laughing",
          "both posed beside the carved pumpkins, candle glow on their faces",
          "both on the porch in matching costumes, candy bags held out"
        ],
        "looks": [
          "classic horror monster costumes each",
          "skeleton bodysuit and face paint each",
          "witch and vampire couples costume each"
        ]
      },
      "darkness vs. light": {
        "locs": [
          "halloween bonfire field night dark",
          "haunted house decorated exterior night",
          "cemetery halloween decorated night moon"
        ],
        "poses": [
          "both frozen mid-scream, playful and terrified",
          "both creeping through the fog, one clutching the other's sleeve",
          "both lit from below by a flickering torch, faces eerie"
        ],
        "looks": [
          "gothic black and lace each",
          "ghost sheet and tattered cloak each",
          "zombie makeup and torn formal wear each"
        ]
      },
      "trick vs. treat": {
        "locs": [
          "halloween porch carved pumpkins orange night",
          "suburban trick or treat street night",
          "carved pumpkin line porch steps evening"
        ],
        "poses": [
          "both posed beside the carved pumpkins, candle glow on their faces",
          "both on the porch in matching costumes, candy bags held out",
          "both answering the door, mid-scare, laughing"
        ],
        "looks": [
          "skeleton bodysuit and face paint each",
          "witch and vampire couples costume each",
          "classic horror monster costumes each"
        ]
      },
      "seen vs. hidden": {
        "locs": [
          "halloween costume party interior crowded",
          "halloween parade street costumes night",
          "apple bobbing tub indoor halloween party"
        ],
        "poses": [
          "both mid-dance, costumes swirling, the crowd behind them",
          "both bobbing for apples, faces dripping, laughing",
          "both striking a spooky pose, ready for the contest"
        ],
        "looks": [
          "matching couples costume each",
          "homemade creative costume each",
          "retro horror costume each"
        ]
      },
      "the mask vs. the face": {
        "locs": [
          "halloween disco venue costumes night",
          "school halloween parade daytime",
          "halloween market stalls night orange"
        ],
        "poses": [
          "both bobbing for apples, faces dripping, laughing",
          "both striking a spooky pose, ready for the contest",
          "both mid-dance, costumes swirling, the crowd behind them"
        ],
        "looks": [
          "homemade creative costume each",
          "retro horror costume each",
          "matching couples costume each"
        ]
      },
      "dead vs. alive": {
        "locs": [
          "graveyard fog machine night halloween",
          "haunted hayride field night dark",
          "corn maze halloween night torches"
        ],
        "poses": [
          "both creeping through the fog, one clutching the other's sleeve",
          "both lit from below by a flickering torch, faces eerie",
          "both frozen mid-scream, playful and terrified"
        ],
        "looks": [
          "ghost sheet and tattered cloak each",
          "zombie makeup and torn formal wear each",
          "gothic black and lace each"
        ]
      },
      "sacred vs. spectacle": {
        "locs": [
          "halloween carnival funfair night orange",
          "halloween costume party interior crowded",
          "halloween parade street costumes night"
        ],
        "poses": [
          "both striking a spooky pose, ready for the contest",
          "both mid-dance, costumes swirling, the crowd behind them",
          "both bobbing for apples, faces dripping, laughing"
        ],
        "looks": [
          "retro horror costume each",
          "matching couples costume each",
          "homemade creative costume each"
        ]
      }
    },
    "locs": [
      "halloween porch carved pumpkins orange night",
      "suburban trick or treat street night",
      "carved pumpkin line porch steps evening",
      "front door decorated cobwebs night",
      "halloween street blocked cars candy night",
      "jack o lantern lit porch dark night",
      "haunted house decorated exterior night",
      "cemetery halloween decorated night moon",
      "graveyard fog machine night halloween",
      "haunted hayride field night dark",
      "corn maze halloween night torches",
      "halloween fog street night orange glow",
      "halloween bonfire field night dark",
      "halloween costume party interior crowded",
      "halloween parade street costumes night",
      "apple bobbing tub indoor halloween party",
      "halloween disco venue costumes night",
      "school halloween parade daytime",
      "halloween market stalls night orange",
      "halloween carnival funfair night orange"
    ],
    "poses": [
      "both on the porch in matching costumes, candy bags held out",
      "both answering the door, mid-scare, laughing",
      "both posed beside the carved pumpkins, candle glow on their faces",
      "both creeping through the fog, one clutching the other's sleeve",
      "both lit from below by a flickering torch, faces eerie",
      "both frozen mid-scream, playful and terrified",
      "both mid-dance, costumes swirling, the crowd behind them",
      "both bobbing for apples, faces dripping, laughing",
      "both striking a spooky pose, ready for the contest"
    ],
    "looks": [
      "witch and vampire couples costume each",
      "classic horror monster costumes each",
      "skeleton bodysuit and face paint each",
      "ghost sheet and tattered cloak each",
      "zombie makeup and torn formal wear each",
      "gothic black and lace each",
      "matching couples costume each",
      "homemade creative costume each",
      "retro horror costume each"
    ],
    "promptSuffix": "Colour grade: deep orange, black, the flickering of candlelit jack o lanterns. Darkness punctuated by warm orange — atmospheric, slightly unsettling, delightful."
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
          "parade dia de los muertos street costume night",
          "calavera parade float street night elaborate",
          "procession street candles elaborate costumes night"
        ],
        "poses": [
          "both dancing in the procession, skirts swirling",
          "both raised on a float, arms open to the crowd",
          "both marching with candles, faces painted"
        ],
        "looks": [
          "elaborate skeleton costume each",
          "catrina dress and top hat each",
          "skull makeup and flowing skirt each"
        ]
      },
      "memory vs. forgetting": {
        "locs": [
          "day of the dead altar ofrenda marigolds candles photographs",
          "ofrenda home altar photographs candles marigolds",
          "altar community display photographs flowers"
        ],
        "poses": [
          "both placing a photograph on the altar, hands touching",
          "both standing before the altar, eyes closed, remembering",
          "one lighting a candle, the other arranging flowers"
        ],
        "looks": [
          "calavera face paint and floral crown each",
          "white shirt and embroidered dress each",
          "skull makeup and black suit each"
        ]
      },
      "grief vs. celebration": {
        "locs": [
          "traditional dia de los muertos performance plaza",
          "traditional dance dia de los muertos plaza",
          "parade dia de los muertos street costume night"
        ],
        "poses": [
          "both raised on a float, arms open to the crowd",
          "both marching with candles, faces painted",
          "both dancing in the procession, skirts swirling"
        ],
        "looks": [
          "catrina dress and top hat each",
          "skull makeup and flowing skirt each",
          "elaborate skeleton costume each"
        ]
      },
      "here vs. gone": {
        "locs": [
          "home ofrenda setting photographs loved ones",
          "town plaza altar community display",
          "colonial church decorated marigolds night"
        ],
        "poses": [
          "both standing before the altar, eyes closed, remembering",
          "one lighting a candle, the other arranging flowers",
          "both placing a photograph on the altar, hands touching"
        ],
        "looks": [
          "white shirt and embroidered dress each",
          "skull makeup and black suit each",
          "calavera face paint and floral crown each"
        ]
      },
      "the living vs. the dead": {
        "locs": [
          "cemetery marigold path candles night procession",
          "cemetery grave decorated marigolds candles night",
          "cemetery night candles thousands marigolds"
        ],
        "poses": [
          "both kneeling at a grave, candles glowing around them",
          "both walking the petal-strewn path, holding candles",
          "both sharing food beside the grave, laughing quietly"
        ],
        "looks": [
          "embroidered shawl and dark suit each",
          "marigold crown and black dress each",
          "skull face paint and warm coat each"
        ]
      },
      "past vs. present": {
        "locs": [
          "marigold market stalls cempasuchil october",
          "traditional market dia de los muertos crafts",
          "sugar skull making workshop table"
        ],
        "poses": [
          "both painting a sugar skull, heads together",
          "both choosing flowers at the stall, delighted",
          "both folding paper petals, laughing"
        ],
        "looks": [
          "embroidered blouse and apron each",
          "simple skull makeup and casual clothes each",
          "folk-embroidered dress and rebozo each"
        ]
      },
      "love vs. loss": {
        "locs": [
          "day of the dead altar ofrenda marigolds candles photographs",
          "ofrenda home altar photographs candles marigolds",
          "altar community display photographs flowers"
        ],
        "poses": [
          "one lighting a candle, the other arranging flowers",
          "both placing a photograph on the altar, hands touching",
          "both standing before the altar, eyes closed, remembering"
        ],
        "looks": [
          "skull makeup and black suit each",
          "calavera face paint and floral crown each",
          "white shirt and embroidered dress each"
        ]
      },
      "colour vs. darkness": {
        "locs": [
          "calavera parade float street night elaborate",
          "procession street candles elaborate costumes night",
          "traditional dia de los muertos performance plaza"
        ],
        "poses": [
          "both marching with candles, faces painted",
          "both dancing in the procession, skirts swirling",
          "both raised on a float, arms open to the crowd"
        ],
        "looks": [
          "skull makeup and flowing skirt each",
          "elaborate skeleton costume each",
          "catrina dress and top hat each"
        ]
      },
      "sacred vs. festive": {
        "locs": [
          "paper marigold decorating workshop",
          "marigold market stalls cempasuchil october",
          "traditional market dia de los muertos crafts"
        ],
        "poses": [
          "both choosing flowers at the stall, delighted",
          "both folding paper petals, laughing",
          "both painting a sugar skull, heads together"
        ],
        "looks": [
          "simple skull makeup and casual clothes each",
          "folk-embroidered dress and rebozo each",
          "embroidered blouse and apron each"
        ]
      },
      "held vs. let go": {
        "locs": [
          "cemetery family gathering candles night",
          "marigold petal path cemetery candles",
          "cemetery marigold path candles night procession"
        ],
        "poses": [
          "both walking the petal-strewn path, holding candles",
          "both sharing food beside the grave, laughing quietly",
          "both kneeling at a grave, candles glowing around them"
        ],
        "looks": [
          "marigold crown and black dress each",
          "skull face paint and warm coat each",
          "embroidered shawl and dark suit each"
        ]
      }
    },
    "locs": [
      "day of the dead altar ofrenda marigolds candles photographs",
      "ofrenda home altar photographs candles marigolds",
      "altar community display photographs flowers",
      "home ofrenda setting photographs loved ones",
      "town plaza altar community display",
      "colonial church decorated marigolds night",
      "cemetery marigold path candles night procession",
      "cemetery grave decorated marigolds candles night",
      "cemetery night candles thousands marigolds",
      "cemetery family gathering candles night",
      "marigold petal path cemetery candles",
      "parade dia de los muertos street costume night",
      "calavera parade float street night elaborate",
      "procession street candles elaborate costumes night",
      "traditional dia de los muertos performance plaza",
      "traditional dance dia de los muertos plaza",
      "marigold market stalls cempasuchil october",
      "traditional market dia de los muertos crafts",
      "sugar skull making workshop table",
      "paper marigold decorating workshop"
    ],
    "poses": [
      "both placing a photograph on the altar, hands touching",
      "both standing before the altar, eyes closed, remembering",
      "one lighting a candle, the other arranging flowers",
      "both kneeling at a grave, candles glowing around them",
      "both walking the petal-strewn path, holding candles",
      "both sharing food beside the grave, laughing quietly",
      "both dancing in the procession, skirts swirling",
      "both raised on a float, arms open to the crowd",
      "both marching with candles, faces painted",
      "both painting a sugar skull, heads together",
      "both choosing flowers at the stall, delighted",
      "both folding paper petals, laughing"
    ],
    "looks": [
      "calavera face paint and floral crown each",
      "white shirt and embroidered dress each",
      "skull makeup and black suit each",
      "embroidered shawl and dark suit each",
      "marigold crown and black dress each",
      "skull face paint and warm coat each",
      "elaborate skeleton costume each",
      "catrina dress and top hat each",
      "skull makeup and flowing skirt each",
      "embroidered blouse and apron each",
      "simple skull makeup and casual clothes each",
      "folk-embroidered dress and rebozo each"
    ],
    "promptSuffix": "Colour grade: marigold gold, deep purple, the warm flicker of hundreds of candles. Rich, saturated, deeply beautiful — this is death celebrated as colour."
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
          "snow exterior house christmas lights evening",
          "snow street christmas lights evening town",
          "christmas window shop lights snow exterior"
        ],
        "poses": [
          "both bundled up, catching snowflakes",
          "both walking arm in arm in the falling snow",
          "both pulling a small fir tree on a sledge"
        ],
        "looks": [
          "chunky coat, hat and scarf each",
          "wool coat and red gloves each",
          "padded jacket and bobble hat each"
        ]
      },
      "warmth vs. cold": {
        "locs": [
          "snowy landscape christmas day quiet",
          "christmas tree farm choosing morning snow",
          "snow exterior house christmas lights evening"
        ],
        "poses": [
          "both bundled up, catching snowflakes",
          "both walking arm in arm in the falling snow",
          "both pulling a small fir tree on a sledge"
        ],
        "looks": [
          "chunky coat, hat and scarf each",
          "wool coat and red gloves each",
          "padded jacket and bobble hat each"
        ]
      },
      "together vs. absent": {
        "locs": [
          "train station christmas arrival reunion",
          "airport arrivals christmas reunion"
        ],
        "poses": [
          "both hugging tightly, bags dropped at their feet",
          "one running into the other's arms",
          "both laughing and crying at the door"
        ],
        "looks": [
          "travelling coat and scarf each",
          "winter coat and tired smile each",
          "long coat with a suitcase each"
        ]
      },
      "magic vs. commercial": {
        "locs": [
          "christmas market stall mulled wine lights winter",
          "carol singing exterior night lanterns",
          "christmas fair outdoor stalls lights winter"
        ],
        "poses": [
          "both clutching steaming mugs, cheeks red",
          "both singing from a shared sheet, mouths open",
          "both holding candles, faces glowing"
        ],
        "looks": [
          "long winter coat and woollen scarf each",
          "wool hat and thick gloves each",
          "dark coat with a festive brooch each"
        ]
      },
      "childhood vs. adulthood": {
        "locs": [
          "christmas tree lights interior night warm",
          "fireplace stockings interior christmas eve night",
          "christmas morning unwrapping living room"
        ],
        "poses": [
          "both kneeling, tearing at wrapping paper",
          "both curled on the sofa, tangled in fairy lights",
          "both hanging a bauble on the same branch, laughing"
        ],
        "looks": [
          "matching knitted jumpers each",
          "cosy pyjamas and thick socks each",
          "festive cardigan and woolly socks each"
        ]
      },
      "giving vs. receiving": {
        "locs": [
          "bedroom christmas morning first light",
          "christmas tree lights interior night warm",
          "fireplace stockings interior christmas eve night"
        ],
        "poses": [
          "both kneeling, tearing at wrapping paper",
          "both curled on the sofa, tangled in fairy lights",
          "both hanging a bauble on the same branch, laughing"
        ],
        "looks": [
          "matching knitted jumpers each",
          "cosy pyjamas and thick socks each",
          "festive cardigan and woolly socks each"
        ]
      },
      "sacred vs. secular": {
        "locs": [
          "church midnight mass candles christmas eve",
          "chapel candles christmas eve service",
          "pub christmas eve fire interior warm"
        ],
        "poses": [
          "both clutching steaming mugs, cheeks red",
          "both singing from a shared sheet, mouths open",
          "both holding candles, faces glowing"
        ],
        "looks": [
          "long winter coat and woollen scarf each",
          "wool hat and thick gloves each",
          "dark coat with a festive brooch each"
        ]
      },
      "expectation vs. reality": {
        "locs": [
          "kitchen christmas cooking morning steam",
          "christmas table set dinner candles formal",
          "christmas dinner table full family afternoon"
        ],
        "poses": [
          "both stirring and tasting, flour on their noses",
          "both raising glasses over a laden table",
          "both pulling a cracker, grinning"
        ],
        "looks": [
          "festive apron over smart clothes each",
          "velvet dress and dark suit each",
          "paper crown and best clothes each"
        ]
      },
      "home vs. elsewhere": {
        "locs": [
          "airport arrivals christmas reunion",
          "train station christmas arrival reunion"
        ],
        "poses": [
          "both hugging tightly, bags dropped at their feet",
          "one running into the other's arms",
          "both laughing and crying at the door"
        ],
        "looks": [
          "travelling coat and scarf each",
          "winter coat and tired smile each",
          "long coat with a suitcase each"
        ]
      },
      "past vs. present": {
        "locs": [
          "christmas morning unwrapping living room",
          "bedroom christmas morning first light",
          "christmas tree lights interior night warm"
        ],
        "poses": [
          "both kneeling, tearing at wrapping paper",
          "both curled on the sofa, tangled in fairy lights",
          "both hanging a bauble on the same branch, laughing"
        ],
        "looks": [
          "matching knitted jumpers each",
          "cosy pyjamas and thick socks each",
          "festive cardigan and woolly socks each"
        ]
      }
    },
    "locs": [
      "christmas tree lights interior night warm",
      "fireplace stockings interior christmas eve night",
      "christmas morning unwrapping living room",
      "bedroom christmas morning first light",
      "snow exterior house christmas lights evening",
      "snow street christmas lights evening town",
      "christmas window shop lights snow exterior",
      "snowy landscape christmas day quiet",
      "christmas tree farm choosing morning snow",
      "christmas market stall mulled wine lights winter",
      "carol singing exterior night lanterns",
      "christmas fair outdoor stalls lights winter",
      "church midnight mass candles christmas eve",
      "chapel candles christmas eve service",
      "pub christmas eve fire interior warm",
      "kitchen christmas cooking morning steam",
      "christmas table set dinner candles formal",
      "christmas dinner table full family afternoon",
      "train station christmas arrival reunion",
      "airport arrivals christmas reunion"
    ],
    "poses": [
      "both kneeling, tearing at wrapping paper",
      "both curled on the sofa, tangled in fairy lights",
      "both hanging a bauble on the same branch, laughing",
      "both bundled up, catching snowflakes",
      "both walking arm in arm in the falling snow",
      "both pulling a small fir tree on a sledge",
      "both clutching steaming mugs, cheeks red",
      "both singing from a shared sheet, mouths open",
      "both holding candles, faces glowing",
      "both stirring and tasting, flour on their noses",
      "both raising glasses over a laden table",
      "both pulling a cracker, grinning",
      "both hugging tightly, bags dropped at their feet",
      "one running into the other's arms",
      "both laughing and crying at the door"
    ],
    "looks": [
      "matching knitted jumpers each",
      "cosy pyjamas and thick socks each",
      "festive cardigan and woolly socks each",
      "chunky coat, hat and scarf each",
      "wool coat and red gloves each",
      "padded jacket and bobble hat each",
      "long winter coat and woollen scarf each",
      "wool hat and thick gloves each",
      "dark coat with a festive brooch each",
      "festive apron over smart clothes each",
      "velvet dress and dark suit each",
      "paper crown and best clothes each",
      "travelling coat and scarf each",
      "winter coat and tired smile each",
      "long coat with a suitcase each"
    ],
    "promptSuffix": "Colour grade: deep red, gold, warm candlelight — the palette of Christmas done with warmth and restraint. Firelight, fairy lights, the cold blue of snow outside."
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
          "rooftop small group midnight city glow",
          "penthouse view fireworks midnight toast"
        ],
        "poses": [
          "both counting down, arms around each other, sparks above",
          "both kissing as the sky explodes behind",
          "both toasting with glasses, faces lit"
        ],
        "looks": [
          "black coat and sparkling scarf each",
          "evening dress and tuxedo jacket each",
          "midnight blue formal wear each"
        ]
      },
      "celebration vs. melancholy": {
        "locs": [
          "beach bonfire new year midnight",
          "quiet home midnight just two champagne",
          "riverside fireworks midnight cold"
        ],
        "poses": [
          "both sitting close, one resting on the other's shoulder",
          "both wrapped in a blanket, watching the sky",
          "both sharing a quiet toast, no one else around"
        ],
        "looks": [
          "soft jumper and slippers each",
          "cosy cardigan and jeans each",
          "winter coat over party clothes each"
        ]
      },
      "midnight vs. morning": {
        "locs": [
          "dawn new year morning aftermath quiet",
          "beach bonfire new year midnight",
          "quiet home midnight just two champagne"
        ],
        "poses": [
          "both sitting close, one resting on the other's shoulder",
          "both wrapped in a blanket, watching the sky",
          "both sharing a quiet toast, no one else around"
        ],
        "looks": [
          "soft jumper and slippers each",
          "cosy cardigan and jeans each",
          "winter coat over party clothes each"
        ]
      },
      "what was vs. what will be": {
        "locs": [
          "bridge city fireworks river reflection midnight",
          "harbour fireworks water reflection midnight",
          "rooftop fireworks city view midnight countdown"
        ],
        "poses": [
          "both counting down, arms around each other, sparks above",
          "both kissing as the sky explodes behind",
          "both toasting with glasses, faces lit"
        ],
        "looks": [
          "black coat and sparkling scarf each",
          "evening dress and tuxedo jacket each",
          "midnight blue formal wear each"
        ]
      },
      "together vs. the year alone": {
        "locs": [
          "riverside fireworks midnight cold",
          "dawn new year morning aftermath quiet",
          "beach bonfire new year midnight"
        ],
        "poses": [
          "both sitting close, one resting on the other's shoulder",
          "both wrapped in a blanket, watching the sky",
          "both sharing a quiet toast, no one else around"
        ],
        "looks": [
          "soft jumper and slippers each",
          "cosy cardigan and jeans each",
          "winter coat over party clothes each"
        ]
      },
      "hope vs. resignation": {
        "locs": [
          "times square style crowd countdown night",
          "city street midnight fireworks crowd",
          "countdown clock public square midnight"
        ],
        "poses": [
          "both lifted by the roar, arms high",
          "both pushed together by the crowd, laughing",
          "both gazing up at the clock, mouths open"
        ],
        "looks": [
          "warm coat, hat and glitter makeup each",
          "party hats and padded jackets each",
          "scarves and colourful festive clothes each"
        ]
      },
      "the countdown vs. the silence after": {
        "locs": [
          "city park fireworks crowd midnight",
          "times square style crowd countdown night",
          "city street midnight fireworks crowd"
        ],
        "poses": [
          "both lifted by the roar, arms high",
          "both pushed together by the crowd, laughing",
          "both gazing up at the clock, mouths open"
        ],
        "looks": [
          "warm coat, hat and glitter makeup each",
          "party hats and padded jackets each",
          "scarves and colourful festive clothes each"
        ]
      },
      "old vs. new": {
        "locs": [
          "ballroom countdown midnight champagne",
          "house party countdown midnight interior",
          "pub midnight new year crowd interior"
        ],
        "poses": [
          "both dancing close, glasses in hand",
          "both clinking glasses, eyes locked",
          "both laughing amid streamers and confetti"
        ],
        "looks": [
          "sequin dress and dark suit each",
          "glittering gown and bow tie each",
          "gold lamé and black velvet each"
        ]
      },
      "held vs. released": {
        "locs": [
          "countdown clock public square midnight",
          "city park fireworks crowd midnight",
          "times square style crowd countdown night"
        ],
        "poses": [
          "both lifted by the roar, arms high",
          "both pushed together by the crowd, laughing",
          "both gazing up at the clock, mouths open"
        ],
        "looks": [
          "warm coat, hat and glitter makeup each",
          "party hats and padded jackets each",
          "scarves and colourful festive clothes each"
        ]
      },
      "the last vs. the first": {
        "locs": [
          "hotel bar new year midnight formal",
          "theatre new year midnight performance",
          "casino countdown midnight glamour"
        ],
        "poses": [
          "both dancing close, glasses in hand",
          "both clinking glasses, eyes locked",
          "both laughing amid streamers and confetti"
        ],
        "looks": [
          "sequin dress and dark suit each",
          "glittering gown and bow tie each",
          "gold lamé and black velvet each"
        ]
      }
    },
    "locs": [
      "rooftop fireworks city view midnight countdown",
      "rooftop small group midnight city glow",
      "penthouse view fireworks midnight toast",
      "bridge city fireworks river reflection midnight",
      "harbour fireworks water reflection midnight",
      "ballroom countdown midnight champagne",
      "house party countdown midnight interior",
      "pub midnight new year crowd interior",
      "hotel bar new year midnight formal",
      "theatre new year midnight performance",
      "casino countdown midnight glamour",
      "restaurant midnight countdown champagne toast",
      "times square style crowd countdown night",
      "city street midnight fireworks crowd",
      "countdown clock public square midnight",
      "city park fireworks crowd midnight",
      "beach bonfire new year midnight",
      "quiet home midnight just two champagne",
      "riverside fireworks midnight cold",
      "dawn new year morning aftermath quiet"
    ],
    "poses": [
      "both counting down, arms around each other, sparks above",
      "both kissing as the sky explodes behind",
      "both toasting with glasses, faces lit",
      "both dancing close, glasses in hand",
      "both clinking glasses, eyes locked",
      "both laughing amid streamers and confetti",
      "both lifted by the roar, arms high",
      "both pushed together by the crowd, laughing",
      "both gazing up at the clock, mouths open",
      "both sitting close, one resting on the other's shoulder",
      "both wrapped in a blanket, watching the sky",
      "both sharing a quiet toast, no one else around"
    ],
    "looks": [
      "black coat and sparkling scarf each",
      "evening dress and tuxedo jacket each",
      "midnight blue formal wear each",
      "sequin dress and dark suit each",
      "glittering gown and bow tie each",
      "gold lamé and black velvet each",
      "warm coat, hat and glitter makeup each",
      "party hats and padded jackets each",
      "scarves and colourful festive clothes each",
      "soft jumper and slippers each",
      "cosy cardigan and jeans each",
      "winter coat over party clothes each"
    ],
    "promptSuffix": "Colour grade: gold, silver, midnight blue — the palette of New Year’s Eve. Fireworks above, champagne in hand, the city lit up. Glamorous, slightly melancholy, full of possibility."
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
          "rooftop fireworks diwali night city",
          "diwali fireworks park night crowd",
          "rooftop diyas city spread below diwali"
        ],
        "poses": [
          "both gazing up, fireworks reflected in their eyes",
          "both releasing a lantern into the dark",
          "both on the edge, the city glowing below them"
        ],
        "looks": [
          "silk saree and bandhgala suit each",
          "indo-western fusion outfit each",
          "deep jewel tones, gold embroidery each"
        ]
      },
      "good vs. evil": {
        "locs": [
          "diwali lantern release night sky",
          "street diwali lights procession night",
          "temple diwali celebration lights evening"
        ],
        "poses": [
          "both releasing a lantern into the dark",
          "both on the edge, the city glowing below them",
          "both gazing up, fireworks reflected in their eyes"
        ],
        "looks": [
          "indo-western fusion outfit each",
          "deep jewel tones, gold embroidery each",
          "silk saree and bandhgala suit each"
        ]
      },
      "together vs. apart": {
        "locs": [
          "home diwali lights decorations lanterns evening",
          "home puja room diwali candles evening",
          "home drawing room diwali decorations evening"
        ],
        "poses": [
          "both at the altar, hands pressed together in prayer",
          "both sharing sweets, laughing around a full table",
          "both exchanging gifts, eyes bright"
        ],
        "looks": [
          "embroidered kurta and silk saree each",
          "gold-trimmed sherwani and lehenga each",
          "jewel-toned silk each"
        ]
      },
      "old vs. new": {
        "locs": [
          "diwali diyas lit doorstep rangoli night",
          "rangoli design doorstep diwali morning",
          "street rangoli competition diwali morning"
        ],
        "poses": [
          "both crouched, carefully placing coloured powder",
          "both lighting a row of small lamps, faces glowing",
          "both standing back to admire their patterned floor"
        ],
        "looks": [
          "cotton kurta and bright salwar each",
          "simple festive saree and kurta each",
          "embroidered tunic and churidar each"
        ]
      },
      "sacred vs. festive": {
        "locs": [
          "traditional diwali puja table offerings",
          "family home diwali gathering evening warm",
          "community diwali celebration hall lights"
        ],
        "poses": [
          "both sharing sweets, laughing around a full table",
          "both exchanging gifts, eyes bright",
          "both at the altar, hands pressed together in prayer"
        ],
        "looks": [
          "gold-trimmed sherwani and lehenga each",
          "jewel-toned silk each",
          "embroidered kurta and silk saree each"
        ]
      },
      "gift vs. gratitude": {
        "locs": [
          "market diwali sweets and lights shopping",
          "sweet shop diwali selection morning",
          "diwali lights market shopping evening"
        ],
        "poses": [
          "both choosing sweets, tasting and grinning",
          "both haggling cheerfully, arms full of lanterns",
          "both walking hand in hand through glowing stalls"
        ],
        "looks": [
          "casual kurta and jeans each",
          "festive cotton dress and shirt each",
          "bright salwar and waistcoat each"
        ]
      },
      "the diya vs. the dark": {
        "locs": [
          "balcony diyas lit city lights below diwali",
          "diwali diyas lit doorstep rangoli night",
          "rangoli design doorstep diwali morning"
        ],
        "poses": [
          "both lighting a row of small lamps, faces glowing",
          "both standing back to admire their patterned floor",
          "both crouched, carefully placing coloured powder"
        ],
        "looks": [
          "simple festive saree and kurta each",
          "embroidered tunic and churidar each",
          "cotton kurta and bright salwar each"
        ]
      },
      "past vs. future": {
        "locs": [
          "rooftop fireworks diwali night city",
          "diwali fireworks park night crowd",
          "rooftop diyas city spread below diwali"
        ],
        "poses": [
          "both on the edge, the city glowing below them",
          "both gazing up, fireworks reflected in their eyes",
          "both releasing a lantern into the dark"
        ],
        "looks": [
          "deep jewel tones, gold embroidery each",
          "silk saree and bandhgala suit each",
          "indo-western fusion outfit each"
        ]
      },
      "family vs. change": {
        "locs": [
          "home diwali lights decorations lanterns evening",
          "home puja room diwali candles evening",
          "home drawing room diwali decorations evening"
        ],
        "poses": [
          "both exchanging gifts, eyes bright",
          "both at the altar, hands pressed together in prayer",
          "both sharing sweets, laughing around a full table"
        ],
        "looks": [
          "jewel-toned silk each",
          "embroidered kurta and silk saree each",
          "gold-trimmed sherwani and lehenga each"
        ]
      },
      "tradition vs. modernity": {
        "locs": [
          "diwali mela fairground lights evening",
          "market diwali sweets and lights shopping",
          "sweet shop diwali selection morning"
        ],
        "poses": [
          "both haggling cheerfully, arms full of lanterns",
          "both walking hand in hand through glowing stalls",
          "both choosing sweets, tasting and grinning"
        ],
        "looks": [
          "festive cotton dress and shirt each",
          "bright salwar and waistcoat each",
          "casual kurta and jeans each"
        ]
      }
    },
    "locs": [
      "home diwali lights decorations lanterns evening",
      "home puja room diwali candles evening",
      "home drawing room diwali decorations evening",
      "traditional diwali puja table offerings",
      "family home diwali gathering evening warm",
      "community diwali celebration hall lights",
      "diwali diyas lit doorstep rangoli night",
      "rangoli design doorstep diwali morning",
      "street rangoli competition diwali morning",
      "balcony diyas lit city lights below diwali",
      "market diwali sweets and lights shopping",
      "sweet shop diwali selection morning",
      "diwali lights market shopping evening",
      "diwali mela fairground lights evening",
      "rooftop fireworks diwali night city",
      "diwali fireworks park night crowd",
      "rooftop diyas city spread below diwali",
      "diwali lantern release night sky",
      "street diwali lights procession night",
      "temple diwali celebration lights evening"
    ],
    "poses": [
      "both at the altar, hands pressed together in prayer",
      "both sharing sweets, laughing around a full table",
      "both exchanging gifts, eyes bright",
      "both crouched, carefully placing coloured powder",
      "both lighting a row of small lamps, faces glowing",
      "both standing back to admire their patterned floor",
      "both choosing sweets, tasting and grinning",
      "both haggling cheerfully, arms full of lanterns",
      "both walking hand in hand through glowing stalls",
      "both gazing up, fireworks reflected in their eyes",
      "both releasing a lantern into the dark",
      "both on the edge, the city glowing below them"
    ],
    "looks": [
      "embroidered kurta and silk saree each",
      "gold-trimmed sherwani and lehenga each",
      "jewel-toned silk each",
      "cotton kurta and bright salwar each",
      "simple festive saree and kurta each",
      "embroidered tunic and churidar each",
      "casual kurta and jeans each",
      "festive cotton dress and shirt each",
      "bright salwar and waistcoat each",
      "silk saree and bandhgala suit each",
      "indo-western fusion outfit each",
      "deep jewel tones, gold embroidery each"
    ],
    "promptSuffix": "Colour grade: deep jewel tones — emerald, ruby, sapphire, gold — the light of a thousand diyas. Warm firelight against deep night sky. Rich, luminous, celebratory."
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
          "lion dance street performance chinese new year morning",
          "chinatown parade dragon lion dance day",
          "community hall chinese new year celebration"
        ],
        "poses": [
          "both ducking as the lion sweeps past",
          "both cheering in the crowd, arms raised",
          "both mid-step among drummers, laughing"
        ],
        "looks": [
          "bright red coat and festive scarf each",
          "red knit and gold accents each",
          "embroidered jacket and trousers each"
        ]
      },
      "luck vs. fear": {
        "locs": [
          "chinese new year lanterns street night red gold",
          "lantern festival street night chinese new year",
          "night market chinese new year lanterns evening"
        ],
        "poses": [
          "both holding up glowing lanterns, faces lit red",
          "both strolling beneath rows of lights, hand in hand",
          "both laughing under a shower of sparks"
        ],
        "looks": [
          "red silk jacket and gold embroidery each",
          "embroidered qipao and tailored changshan each",
          "red and gold festive outfit each"
        ]
      },
      "together vs. scattered": {
        "locs": [
          "family reunion dinner table chinese new year eve",
          "family home decorations red gold new year",
          "dumpling making family table new year eve"
        ],
        "poses": [
          "both seated at a crowded table, passing dishes",
          "both folding dumplings, flour on their hands",
          "one handing the other a small envelope, smiling"
        ],
        "looks": [
          "red sweater and smart trousers each",
          "silk blouse and neat shirt each",
          "new festive outfit, all in red each"
        ]
      },
      "tradition vs. change": {
        "locs": [
          "temple prayers new year morning incense",
          "temple fair new year blessing morning",
          "market new year goods red decorations morning"
        ],
        "poses": [
          "both bowing, smoke curling around them",
          "both choosing blossoms from a stall, delighted",
          "both holding bundles of festive goods"
        ],
        "looks": [
          "warm coat and red scarf each",
          "padded jacket and wool hat each",
          "long coat and gloves each"
        ]
      },
      "past vs. future": {
        "locs": [
          "fireworks chinatown street midnight new year",
          "harbour fireworks chinese new year midnight"
        ],
        "poses": [
          "both gazing up at bursting colour, faces glowing",
          "both cheering with sparks reflected in their eyes",
          "both silhouetted against the light show"
        ],
        "looks": [
          "warm winter coat and red hat each",
          "dark coat with a red scarf each",
          "padded jacket and gold-trimmed scarf each"
        ]
      },
      "the family table vs. the world outside": {
        "locs": [
          "restaurant family new year dinner formal",
          "family home new year eve countdown midnight",
          "red envelope giving family chinese new year"
        ],
        "poses": [
          "both seated at a crowded table, passing dishes",
          "both folding dumplings, flour on their hands",
          "one handing the other a small envelope, smiling"
        ],
        "looks": [
          "red sweater and smart trousers each",
          "silk blouse and neat shirt each",
          "new festive outfit, all in red each"
        ]
      },
      "red vs. the ordinary": {
        "locs": [
          "chinese new year fair stalls lights evening",
          "chinatown exterior red lanterns night",
          "chinese new year lanterns street night red gold"
        ],
        "poses": [
          "both holding up glowing lanterns, faces lit red",
          "both strolling beneath rows of lights, hand in hand",
          "both laughing under a shower of sparks"
        ],
        "looks": [
          "red silk jacket and gold embroidery each",
          "embroidered qipao and tailored changshan each",
          "red and gold festive outfit each"
        ]
      },
      "celebration vs. longing": {
        "locs": [
          "harbour fireworks chinese new year midnight",
          "fireworks chinatown street midnight new year"
        ],
        "poses": [
          "both gazing up at bursting colour, faces glowing",
          "both cheering with sparks reflected in their eyes",
          "both silhouetted against the light show"
        ],
        "looks": [
          "warm winter coat and red hat each",
          "dark coat with a red scarf each",
          "padded jacket and gold-trimmed scarf each"
        ]
      },
      "the year ending vs. the year beginning": {
        "locs": [
          "flower market new year morning purchases",
          "temple prayers new year morning incense",
          "temple fair new year blessing morning"
        ],
        "poses": [
          "both bowing, smoke curling around them",
          "both choosing blossoms from a stall, delighted",
          "both holding bundles of festive goods"
        ],
        "looks": [
          "warm coat and red scarf each",
          "padded jacket and wool hat each",
          "long coat and gloves each"
        ]
      },
      "home vs. diaspora": {
        "locs": [
          "family reunion dinner table chinese new year eve",
          "family home decorations red gold new year",
          "dumpling making family table new year eve"
        ],
        "poses": [
          "both seated at a crowded table, passing dishes",
          "both folding dumplings, flour on their hands",
          "one handing the other a small envelope, smiling"
        ],
        "looks": [
          "red sweater and smart trousers each",
          "silk blouse and neat shirt each",
          "new festive outfit, all in red each"
        ]
      }
    },
    "locs": [
      "chinese new year lanterns street night red gold",
      "lantern festival street night chinese new year",
      "night market chinese new year lanterns evening",
      "chinese new year fair stalls lights evening",
      "chinatown exterior red lanterns night",
      "lion dance street performance chinese new year morning",
      "chinatown parade dragon lion dance day",
      "community hall chinese new year celebration",
      "family reunion dinner table chinese new year eve",
      "family home decorations red gold new year",
      "dumpling making family table new year eve",
      "restaurant family new year dinner formal",
      "family home new year eve countdown midnight",
      "red envelope giving family chinese new year",
      "temple prayers new year morning incense",
      "temple fair new year blessing morning",
      "market new year goods red decorations morning",
      "flower market new year morning purchases",
      "fireworks chinatown street midnight new year",
      "harbour fireworks chinese new year midnight"
    ],
    "poses": [
      "both holding up glowing lanterns, faces lit red",
      "both strolling beneath rows of lights, hand in hand",
      "both laughing under a shower of sparks",
      "both ducking as the lion sweeps past",
      "both cheering in the crowd, arms raised",
      "both mid-step among drummers, laughing",
      "both seated at a crowded table, passing dishes",
      "both folding dumplings, flour on their hands",
      "one handing the other a small envelope, smiling",
      "both bowing, smoke curling around them",
      "both choosing blossoms from a stall, delighted",
      "both holding bundles of festive goods",
      "both gazing up at bursting colour, faces glowing",
      "both cheering with sparks reflected in their eyes",
      "both silhouetted against the light show"
    ],
    "looks": [
      "red silk jacket and gold embroidery each",
      "embroidered qipao and tailored changshan each",
      "red and gold festive outfit each",
      "bright red coat and festive scarf each",
      "red knit and gold accents each",
      "embroidered jacket and trousers each",
      "red sweater and smart trousers each",
      "silk blouse and neat shirt each",
      "new festive outfit, all in red each",
      "warm coat and red scarf each",
      "padded jacket and wool hat each",
      "long coat and gloves each",
      "warm winter coat and red hat each",
      "dark coat with a red scarf each",
      "padded jacket and gold-trimmed scarf each"
    ],
    "promptSuffix": "Colour grade: deep red, gold, the warm orange of lantern light — the palette of Chinese New Year. Fireworks, silk, the warmth of family reunion. Rich and celebratory."
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

const CONNECTORS={romance:['in','amid','at'],stage:['in','amid','at'],mystery:['in','amid','at'],protest:['in','amid','at'],wedding:['in','amid','at'],underworld:['in','amid','at'],mountain:['in','amid','at'],water:['in','amid','at'],wild:['in','amid','at'],jungle:['in','amid','at'],desert:['in','amid','at'],rain:['in','amid','at'],cold:['in','amid','at'],night:['in','amid','at'],history:['in','amid','at'],storm:['in','amid','at'],city:['in','amid','at'],road:['in','amid','at'],canada:['in','amid','at'],caribbean:['in','amid','at'],mexico:['in','amid','at'],usa:['in','amid','at'],rooftop:['in','amid','at'],music:['in','amid','at'],court:['in','amid','at'],circus:['in','amid','at'],hero:['in','amid','at'],carnival:['in','amid','at'],gold:['in','amid','at'],art:['in','set in','within','against'],runway:['in','amid','at'],studio:['in','amid','at'],archive:['in','amid','at'],space:['in','inside','amid'],surreal:['in','amid','at'],underground:['in','amid','at'],expedition:['in','amid','within'],cctv:['in','at'],bmovie:['in','amid','at'],valentines:['in','amid','at'],mothersday:['in','amid','at'],fourthofjuly:['in','amid','at'],septiembre16:['in','amid','at'],thanksgiving:['in','amid','at'],halloween:['in','amid','at'],diadelosmuertos:['in','amid','at'],christmas:['in','amid','at'],newyearseve:['in','amid','at'],diwali:['in','amid','at'],chinesenewyear:['in','amid','at']};;

const TEMPLATES=[
  // Variant 1 — Cinematic Scale
  function(t){
    var ten=t.tension?translateTension(t.tension):null; if(ten===t.tension&&(t.pose||t.loc)) ten=null;
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
    var ten=t.tension?translateTension(t.tension):null; if(ten===t.tension&&(t.pose||t.loc)) ten=null;
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
    var ten=t.tension?translateTension(t.tension):null; if(ten===t.tension&&(t.pose||t.loc)) ten=null;
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
    var ten=t.tension?translateTension(t.tension):null; if(ten===t.tension&&(t.pose||t.loc)) ten=null;
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
    var ten=t.tension?translateTension(t.tension):null; if(ten===t.tension&&(t.pose||t.loc)) ten=null;
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
    var ten=t.tension?translateTension(t.tension):null; if(ten===t.tension&&(t.pose||t.loc)) ten=null;
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
    ['🌆  Time & Atmosphere',['night','history','storm']],
    ['🌍  Place & Culture',['city','road','canada','caribbean','mexico','usa','rooftop']],
    ['🎵  Performance & Life',['music','court','circus','hero','carnival']],
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
const LOC_TYPES = {"rain-soaked street night neon reflections": "outdoor", "alleyway rain single lamp": "both", "Paris street rain autumn night": "outdoor", "phone box rain night neon": "both", "bridge night fog below": "outdoor", "rooftop city edge midnight confession": "outdoor", "fire escape night city below": "both", "rooftop pool city lights reflection midnight": "outdoor", "car park top level night city view": "outdoor", "rooftop water tower night city": "outdoor", "abandoned ballroom chandelier still lit": "indoor", "cinema empty last showing": "both", "empty restaurant after closing one candle": "indoor", "abandoned church single candle": "indoor", "library closed after hours one lamp": "both", "museum closed after hours one guard lamp": "indoor", "empty swimming pool night": "both", "theatre wings backstage curtain": "indoor", "hotel corridor single light night": "indoor", "long corridor hotel night both ends dark": "indoor", "hotel room morning light complicated": "indoor", "lighthouse edge storm approaching": "both", "cliff edge storm sea below": "outdoor", "summer thunderstorm porch lit": "both", "midnight garden statuary shadow": "outdoor", "train departing platform one left behind": "both", "night train compartment moving": "both", "jazz club late night last song": "indoor", "night market closing stalls": "outdoor", "boardwalk end of season night": "outdoor", "supermarket aisle operatic gesture fluorescent ordinary": "indoor", "kebab shop 2am grand gesture fluorescent": "both", "corner shop theatrical argument fluorescent": "both", "post office queue theatrical monologue": "indoor", "department store escalator theatrical descent": "indoor", "betting shop theatrical reaction to result": "indoor", "chip shop 11pm theatrical romance counter": "indoor", "newsagent morning theatrical significance ordinary": "indoor", "petrol station forecourt dramatic speech nobody watching night": "indoor", "bus stop theatrical declaration nobody waiting": "indoor", "car park rooftop theatrical confrontation empty night": "outdoor", "train carriage theatrical aside fellow passengers ignore": "both", "airport arrivals hall dramatic reunion theatrical": "both", "motorway services dramatic tableau ordinary setting": "both", "underpass theatrical freeze frame urban": "both", "railway platform theatrical goodbye overplayed": "both", "bus upper deck theatrical speech empty": "indoor", "rooftop car park theatrical last stand night": "outdoor", "laundromat 3am theatrical monologue washing machines": "indoor", "hospital waiting room dramatic exit door": "both", "lift lobby theatrical pause before doors open": "indoor", "office corridor dramatic walk away slow motion": "indoor", "phone box raining theatrical call dramatic": "both", "swimming pool changing room dramatic exit": "indoor", "bowling alley theatrical celebration strike": "indoor", "car wash theatrical moment soap suds": "both", "dentist waiting room theatrical anxiety performance": "indoor", "library theatrical whispered intensity quiet": "indoor", "cemetery theatrical grief performative": "both", "wedding registry office theatrical entrance late": "indoor", "abandoned asylum corridor tiles": "indoor", "fog-bound forest path no end": "outdoor", "empty motel parking lot night": "both", "derelict carnival midway": "both", "candlelit cellar steps": "indoor", "lighthouse keeper's cottage at night": "both", "ruined manor house exterior": "outdoor", "fog-covered graveyard path": "outdoor", "drowned village reservoir edge": "both", "Victorian factory floor dark": "indoor", "underground tunnel bricked-up end": "both", "secret passage bookcase entrance": "both", "locked library night window": "indoor", "empty theatre balcony creaking": "both", "old hotel corridor 3am": "indoor", "basement flooded ankle deep": "indoor", "attic trapdoor looking down": "indoor", "church crypt entrance stone": "both", "estate maze centre alone": "both", "walled garden overgrown locked": "outdoor", "old clock tower interior": "indoor", "photography darkroom red light": "both", "radio station night empty": "both", "print room old newspaper rotary": "both", "museum after hours case lit": "both", "archive basement box rows": "indoor", "police evidence room dim": "both", "detective agency door frosted glass": "both", "private eye office desk": "indoor", "smoke-filled bar information": "both", "dockside warehouse meeting": "indoor", "industrial estate unit door": "both", "abandoned school classroom": "indoor", "empty hospital corridor night": "indoor", "sanatorium courtyard overgrown": "outdoor", "institution corridor peeling": "indoor", "haunted B&B corridor creaking": "indoor", "village pub empty late": "both", "country house library fire out": "indoor", "whodunit manor hall chandelier": "both", "locked room diagram scene": "both", "crime scene before police arrive": "both", "film noir street lamp rain": "outdoor", "1940s diner counter night": "both", "jazz club back room door": "both", "speakeasy behind bookcase": "outdoor", "numbers station forest clearing": "outdoor", "black site exterior ordinary": "outdoor", "city street march crowd placard density": "outdoor", "courthouse steps vigil candles": "outdoor", "barricade police line stand-off": "outdoor", "memorial vigil square candles wind": "outdoor", "occupation sit-in steps long-stay": "outdoor", "university campus quad gathering": "outdoor", "Parliament Square Westminster London": "outdoor", "Trafalgar Square London gathering": "outdoor", "Tiananmen Square adjacent Beijing": "outdoor", "Tahrir Square Cairo archive feeling": "outdoor", "Maidan Square Kyiv historic feeling": "outdoor", "Wenceslas Square Prague historic": "outdoor", "Zuccotti Park New York Occupy": "outdoor", "Union Square New York rally": "outdoor", "Hyde Park Speakers' Corner London": "outdoor", "The Mall Washington DC march": "outdoor", "Lafayette Square Washington DC": "outdoor", "Martin Luther King Memorial Washington": "outdoor", "Lincoln Memorial steps Washington": "outdoor", "Capitol Building exterior demonstration": "outdoor", "Selma bridge Edmund Pettus Alabama": "outdoor", "Birmingham Alabama Kelly Ingram Park": "outdoor", "Montgomery Alabama Dexter Avenue": "outdoor", "Little Rock Arkansas school exterior": "outdoor", "Stonewall Inn New York exterior": "outdoor", "Stonewall National Monument area": "outdoor", "Harvey Milk Plaza San Francisco": "outdoor", "Castro District San Francisco march": "outdoor", "Grant Park Chicago rally point": "outdoor", "Federal Plaza Chicago march": "outdoor", "Millennium Park Chicago gathering": "outdoor", "City Hall Los Angeles steps": "outdoor", "Pershing Square Los Angeles rally": "outdoor", "Venice Beach boardwalk demonstration": "outdoor", "Rodeo Drive protest Palm Springs": "outdoor", "Climate march London Embankment": "outdoor", "XR blockade London bridge": "outdoor", "Anti-war vigil Grosvenor Square London": "outdoor", "Greenham Common memorial Berkshire": "outdoor", "Faslane Peace Camp Scotland gate": "outdoor", "G8 Gleneagles approach road": "outdoor", "COP26 Glasgow approach march": "outdoor", "George Square Glasgow rally": "outdoor", "Kelvingrove Glasgow vigil": "outdoor", "city hall steps elopement simple morning": "indoor", "courthouse simple just the two civil": "indoor", "registry office morning queue practical": "indoor", "Paris bridge elopement spontaneous rain": "outdoor", "Las Vegas wedding chapel neon night kitsch": "indoor", "outdoor festival wedding summer": "outdoor", "cliffside elopement two and officiant sunset": "outdoor", "beach barefoot ceremony sunset": "outdoor", "Scottish highland estate ceremony dramatic": "both", "destination wedding Italy villa afternoon": "both", "church aisle traditional formal procession": "indoor", "chapel of ease rural small ceremony": "indoor", "stately home grand formal traditional": "both", "Jewish wedding chuppah traditional formal": "both", "Indian wedding mandap ceremony elaborate": "both", "Mexican civil wedding vibrant tradition": "both", "marquee reception evening dancing": "both", "reception empty after guests gone one couple": "both", "hotel suite morning after complicated light": "indoor", "greenhouse botanical wedding ceremony": "indoor", "river Styx dark water crossing ferry": "outdoor", "Hades palace obsidian hall throne": "both", "Elysian fields golden light peace": "outdoor", "Charon ferry dark river midpoint": "outdoor", "Fields of Asphodel pale grey wandering": "outdoor", "Tartarus edge looking down abyss": "both", "Persephone garden pomegranate tree": "outdoor", "Oracle at Delphi smoke chamber below": "both", "Orpheus descent path backward": "outdoor", "Hero's journey threshold crossing": "both", "Dante's inscription gate above": "both", "Virgil's guided path dark forest": "outdoor", "Egyptian Duat weighing hall scales": "both", "Ma'at feather judgement chamber": "both", "Norse Helheim mist entrance Hel gate": "both", "Valhalla great hall feast": "both", "Bifrost bridge approaching end Asgard side": "outdoor", "Niflheim frost mist plain": "outdoor", "Aztec Mictlan ninth level dark": "both", "Xibalba Mayan lords' hall": "both", "Japanese Yomi dark world descent": "both", "Buddhist hell realms border": "outdoor", "Chinese Diyu court first judgement": "both", "Ten Kings of Hell court formal": "both", "Hindu Naraka gate boundary": "both", "Bardo Tibetan intermediate state mist": "both", "Celtic Tir na nÓg island approach": "both", "Annwn Welsh otherworld entrance": "both", "Slavic Nav dark world fog": "both", "Inuit Adlivun cold underworld": "both", "Yoruba underworld crossroads": "outdoor", "Candomblé spirit world threshold": "both", "Vodou spirit world intersection": "both", "New Orleans cemetery midnight": "outdoor", "Mexican Day of Dead altar approach": "both", "Ofrenda marigold path": "outdoor", "Guatemalan cemetery coloured tombs": "outdoor", "Bolivian Ñatitas festival skull ceremony": "both", "Peruvian Pachamama offering ground": "both", "Andean sacred mountain spirit": "outdoor", "Shinto Yomi crossing Izanagi's retreat": "both", "Shinto spirit gate torii path": "both", "snowfield at dusk pink light": "outdoor", "glacier crevasse edge": "outdoor", "frozen waterfall ice wall": "outdoor", "narrow couloir ice": "outdoor", "snow cornice edge careful": "outdoor", "Alaska glacier terminus": "outdoor", "Mt Cook glacier New Zealand": "outdoor", "rock face midway pitch": "outdoor", "scree slope descent": "outdoor", "rocky summit cross": "outdoor", "talus slope scramble": "outdoor", "Dolomite rock tower base": "outdoor", "Patagonia spire mist": "outdoor", "Sierra Nevada granite dome": "outdoor", "Chamonix aiguille needle": "outdoor", "ridge at altitude blue sky above": "outdoor", "summit cairn wind-blown": "outdoor", "ridgeline silhouette both sides visible": "outdoor", "Scottish highland ridge": "outdoor", "Philippine volcano caldera rim": "outdoor", "East African rift escarpment": "outdoor", "Urals ancient low ridge": "outdoor", "Appalachian bald summit": "outdoor", "Faroe plateau edge cliff": "outdoor", "alpine meadow wildflowers": "outdoor", "tree line edge looking up": "outdoor", "alpine lake reflection": "outdoor", "Swiss alpine meadow cowbell": "outdoor", "Rocky Mountain aspen grove autumn": "outdoor", "Norwegian fjord above": "outdoor", "Pyrenees pass stone refuge": "outdoor", "Japanese Alps cedar forest": "outdoor", "Taiwan high mountain fog": "outdoor", "Carpathian forest ridge": "outdoor", "Rockies moraine lake": "outdoor", "high camp tent door morning": "outdoor", "mountain hut exterior dawn": "outdoor", "cable car tower base": "outdoor", "lookout tower wooden stairs": "outdoor", "Himalayan base camp prayer flags": "outdoor", "Ben Nevis CIC hut below": "outdoor", "boulder field at sunrise": "outdoor", "New Zealand Southern Alps": "outdoor", "Andes condor sky above": "outdoor", "Atlas Mountains red earth": "outdoor", "Ethiopian Simien ridge": "outdoor", "Caucasus range ancient stone": "outdoor", "Iceland lava field above cloud": "outdoor", "ocean at horizon golden hour": "outdoor", "cliff above ocean": "outdoor", "surf break line": "both", "open sea swell no land": "outdoor", "ocean trench research vessel deck": "outdoor", "beach at low tide sandbars": "outdoor", "Irish sea cliffs base": "outdoor", "Faroe Islands sea stack": "outdoor", "Iceland black sand waves": "both", "coral reef shallows clear": "both", "mangrove channel slow water": "both", "limestone pool Halong Bay": "both", "lagoon atoll Pacific": "both", "submerged ruins shallow water": "outdoor", "Amazon tributary dawn": "both", "Lake Titicaca reed island": "outdoor", "Maldives lagoon clear": "both", "empty pool at dawn": "both", "harbor pier edge": "outdoor", "reservoir concrete dam edge": "both", "infinity pool edge ocean drop": "outdoor", "lido pool 1930s architecture": "both", "dam spillway roar": "both", "canal Venice dawn": "outdoor", "Venice canal gondola point": "outdoor", "Thames at low tide mud": "both", "Hudson River pier dusk": "outdoor", "lake at first light still water": "outdoor", "estuary at golden hour": "outdoor", "mountain lake snow-edged": "outdoor", "delta mouth wide sky": "both", "fjord still water reflection": "both", "alpine lake turquoise": "outdoor", "sea loch Scotland mist": "outdoor", "frozen lake crack line": "outdoor", "Lake Baikal winter ice": "outdoor", "Dead Sea float horizon": "outdoor", "sea cave entrance low tide": "both", "rocky tidal pool exposed": "both", "kelp forest shallows": "outdoor", "waterfall base mist rising": "outdoor", "hot spring sulfur mist": "both", "geyser field Iceland": "outdoor", "cenote entrance Mexico": "both", "rain-swollen river bank": "outdoor", "tide pool Oregon coast": "outdoor", "Sardinia grotto entrance": "both", "river bend at dusk": "outdoor", "Nile at dusk feluccas": "both", "Ganges ghat at dawn": "both", "dense forest clearing shafts of light": "outdoor", "ancient woodland root tangle": "outdoor", "old growth redwood base": "outdoor", "New Forest ancient oak hollow": "outdoor", "Norwegian birch forest autumn": "outdoor", "Swedish elk forest dawn": "outdoor", "Galician mountain forest green": "outdoor", "Bhutanese forest monastery visible above": "outdoor", "New Zealand beech forest": "outdoor", "Kiwi rainforest fern gully": "outdoor", "tidal flat at low tide exposed": "outdoor", "estuarine mudflat wide sky": "outdoor", "sand dune blowout hollow": "outdoor", "flint shingle beach storm": "outdoor", "reed bed at dawn mist": "outdoor", "Exmoor coastline cliff path": "outdoor", "Pembrokeshire sea stack distant": "outdoor", "Finnish lake island landing": "outdoor", "Baltic sea coast pine": "outdoor", "Breton coastal heathland": "outdoor", "Turkish mountain lake turquoise": "outdoor", "bog moorland at dusk": "outdoor", "heath in flower purple wide": "outdoor", "limestone pavement bare": "outdoor", "peat highland loch reflected": "outdoor", "Welsh upland reservoir edge": "outdoor", "Peak District gritstone edge": "outdoor", "Lake District fell top": "outdoor", "Dartmoor tor wind": "outdoor", "Cairngorm plateau tundra": "outdoor", "Estonian bog wooden walkway": "outdoor", "cliff face at golden hour lichen-covered": "outdoor", "river gorge base spray rising": "outdoor", "chalk downland escarpment edge": "outdoor", "Scottish glen river crossing": "outdoor", "Skye Cuillin black rock": "outdoor", "Corsican gorge river": "outdoor", "Croatian karst spring": "outdoor", "Slovenian Triglav plateau": "outdoor", "open grassland in wind": "outdoor", "Hebrides machair wildflowers": "outdoor", "Sardinian maquis scrub": "outdoor", "Georgian Caucasus meadow": "outdoor", "Mongolian steppe endless": "outdoor", "Kyrgyz alpine pasture yurt distant": "outdoor", "Tibetan plateau wind-scoured": "outdoor", "Indian hill station mist": "outdoor", "Sri Lanka highland tea": "outdoor", "Australian blue mountain heath": "outdoor", "Tasmanian alpine meadow": "outdoor", "Amazon river camp at dawn": "outdoor", "Sumatra jungle river crossing": "outdoor", "Ecuador Amazon tributary camp": "outdoor", "Pantanal waterway jungle edge Brazil": "outdoor", "Orinoco delta mangrove channel": "outdoor", "Mekong river bank jungle Cambodia": "outdoor", "Irrawaddy river jungle bank Myanmar": "outdoor", "Salween river jungle edge": "outdoor", "Sabah jungle river crossing": "outdoor", "Sarawak longhouse river arrival": "outdoor", "Trinidad Caroni swamp dawn": "outdoor", "Costa Rica cloud forest mist": "outdoor", "Papua New Guinea highland trail": "outdoor", "Peru cloud forest epiphyte trees": "outdoor", "Rwanda gorilla trekking forest": "outdoor", "Uganda Bwindi forest trail": "outdoor", "Kinabalu rainforest lower slope": "outdoor", "Mindanao highland forest trail": "outdoor", "Puerto Rico El Yunque cloud forest": "outdoor", "Jamaica Blue Mountain forest": "outdoor", "Trinidad Northern Range forest": "outdoor", "Cambodia temple overgrown vines": "outdoor", "Thailand hill tribe forest edge": "outdoor", "Vietnam karst limestone jungle": "outdoor", "Belize cenote jungle clearing": "outdoor", "Guatemala Tikal temple above canopy": "outdoor", "Mexico Yucatan jungle ruin": "outdoor", "Luzon rice terrace edge forest": "outdoor", "Borneo rainforest canopy walkway": "outdoor", "Daintree rainforest Queensland": "outdoor", "Congo basin clearing giant trees": "outdoor", "Sri Lanka jungle leopard territory": "outdoor", "India Corbett forest trail edge": "outdoor", "Kenya jungle border savannah": "outdoor", "Madagascar rainforest lemur clearing": "outdoor", "Comoros forest ancient tree": "outdoor", "Sulawesi jungle crater lake": "outdoor", "Flores jungle volcanic forest": "outdoor", "Hawaii fern gully waterfall": "outdoor", "Maui bamboo forest path": "outdoor", "Grenada Grand Etang crater forest": "outdoor", "Dominica rainforest river gorge": "outdoor", "Martinique Pelée lower forest": "outdoor", "Guadeloupe volcanic forest": "outdoor", "Reunion Cirque de Cilaos": "outdoor", "Philippines Palawan jungle cove": "outdoor", "Kauai Na Pali coast jungle": "outdoor", "St Lucia banana plantation edge": "outdoor", "Seychelles Vallée de Mai palm": "outdoor", "Mauritius Black River Gorges": "outdoor", "Sahara dune sea sunset two figures tiny horizon": "outdoor", "Moroccan desert Merzouga dune sea sunset gold": "outdoor", "Rub al Khali Empty Quarter dune sea endless": "outdoor", "Rub al Khali dune crest wind sand stream": "outdoor", "Sossusvlei Namibia dune red iron oxide dawn": "outdoor", "Namib vlei dead trees orange dune dawn iconic": "outdoor", "Wadi Rum red rock Jordan dawn long shadow": "outdoor", "Jordanian desert ancient Nabataean rock city Petra dusk": "outdoor", "Arizona Monument Valley sandstone butte long shadow": "outdoor", "Death Valley Zabriskie Point badlands dawn": "outdoor", "Painted Desert Arizona colour band formation": "outdoor", "Negev desert Ramon crater vast geological": "outdoor", "Judean desert cave dwelling ancient": "outdoor", "Death Valley salt flat noon bleached vast white": "outdoor", "White Sands New Mexico gypsum dune noon": "outdoor", "Atacama salt flat mirror sky reflection": "outdoor", "Lencois Maranhenses Brazil white dune lagoon": "outdoor", "Black Rock Desert Nevada vast flat nothing": "outdoor", "Danakil Depression Ethiopia hottest place earth": "both", "Atacama Chile night sky clearest stars world": "outdoor", "Sahara oasis palm trees mirage heat shimmer": "outdoor", "Wadi Rum desert camp fire night stars": "outdoor", "Arabian desert camel caravan horizon line dawn": "outdoor", "Gobi Mongolia vast flat sand storm approaching": "both", "Sonoran desert saguaro cactus sunset Arizona": "outdoor", "Great Sand Dunes Colorado snow mountain beyond": "outdoor", "Simpson Desert Australia red dune noon": "outdoor", "Taklamakan China Silk Road ancient route": "both", "Namib fog coastal desert ghost ship distant": "outdoor", "Chilean Atacama lava field volcanic moon": "outdoor", "Mumbai monsoon first rain flooding street joy dancing": "outdoor", "Kerala monsoon paddy field rain dramatic": "both", "Bangkok monsoon flood street motorbike spray": "outdoor", "Hanoi monsoon street rain dramatic tropical": "outdoor", "Kolkata monsoon street rain reflection puddle": "outdoor", "after monsoon street reflection India dramatic": "outdoor", "Blade Runner noir rain alley neon wet reflection night": "both", "Los Angeles rain 1940s noir street": "outdoor", "Chandler rain San Francisco fog hill night": "both", "film noir wet pavement street lamp reflection": "outdoor", "Tokyo alley rain neon reflection night narrow": "both", "London grey drizzle Waterloo Bridge umbrella commute": "both", "Edinburgh drizzle grey castle behind mist": "both", "Dublin drizzle grey Georgian street umbrella": "outdoor", "Glasgow drizzle grey tenement street": "outdoor", "Portland Oregon grey drizzle everyday": "both", "tropical downpour beach shelter dramatic": "outdoor", "Scottish highland sudden downpour open moor": "outdoor", "New York summer downpour steam street": "outdoor", "Paris summer downpour cafe awning shelter": "both", "Rome sudden downpour fountain piazza": "both", "Icelandic rain dramatic rainbow cliff": "outdoor", "Vancouver rain forest dramatic mist": "outdoor", "Japanese rain bamboo forest atmospheric": "indoor", "Norwegian fjord rain mist dramatic": "outdoor", "New Zealand rain rainforest dramatic lush": "outdoor", "after rain Paris cobblestone reflection puddle golden": "both", "after rain Tokyo neon reflection puddle night": "outdoor", "after rain London Victorian street reflection lamp": "outdoor", "rainbow after storm field dramatic": "both", "frozen lake at first light crack pattern": "outdoor", "snowfield before storm dark sky": "outdoor", "ice hall empty arena": "outdoor", "ski resort predawn gondola loading": "outdoor", "tundra flat under white sky": "outdoor", "Lapland reindeer forest snow": "outdoor", "Svalbard glacier calving edge": "outdoor", "Iceland black sand and snow": "outdoor", "Greenland ice sheet horizon": "outdoor", "Alaska Brooks Range winter": "outdoor", "Canada Yukon wilderness freeze": "outdoor", "Siberian taiga frozen river": "outdoor", "Russia Baikal clear ice walking": "outdoor", "Finland ice lake sauna shore": "outdoor", "Norway frozen fjord reflection": "outdoor", "Sweden frozen archipelago island": "outdoor", "Faroe Islands frozen waterfall": "outdoor", "Scotland winter glen frozen burn": "outdoor", "Canada Quebec winter ice hotel": "outdoor", "Vermont maple forest snow": "outdoor", "Maine coast harbor frozen": "outdoor", "Colorado high alpine winter meadow": "outdoor", "Utah Bryce Canyon snow hoodoos": "outdoor", "Montana big sky winter open": "outdoor", "Wyoming Yellowstone winter steam": "outdoor", "Patagonia winter wind ice lake": "outdoor", "Antarctic research station exterior": "outdoor", "Sub-Antarctic island storm snow": "outdoor", "New Zealand South Island winter": "outdoor", "Japan Hokkaido snow forest": "outdoor", "Japan Aomori snow trees": "outdoor", "China Harbin ice sculpture": "outdoor", "South Korea Jiri mountain snow": "outdoor", "Kazakhstan steppe winter deep": "outdoor", "Kyrgyz winter yurt snow": "outdoor", "Tibet winter plateau wind": "outdoor", "Bhutan winter mountain dzong": "outdoor", "Pakistan K2 base camp winter": "outdoor", "Nepal Thorong La winter crossing": "outdoor", "Lesotho highland snow blanket": "outdoor", "Drakensberg winter frost dawn": "outdoor", "Morocco Atlas snow": "outdoor", "Spain Pyrenees winter pass": "outdoor", "Austria Dachstein glacier winter": "outdoor", "Switzerland Jungfrau winter": "outdoor", "Italy Dolomites winter ice": "outdoor", "Slovenia Triglav winter snow": "outdoor", "Poland Tatra winter ridge": "outdoor", "Czech Krkonose winter forest": "outdoor", "Romania Fagaras winter ridge": "outdoor", "Bulgaria Rila winter monastery": "outdoor", "street lamp cone of light empty": "outdoor", "predawn empty boulevard": "outdoor", "24h diner at 3am": "outdoor", "rooftop at midnight city below": "outdoor", "rain-soaked empty street lamp reflection": "outdoor", "neon sign alley close": "outdoor", "night club exterior queue gone": "outdoor", "casino exit early hours": "outdoor", "hotel lobby late night": "indoor", "city bridge walking both sides empty": "outdoor", "underground car park empty level": "outdoor", "hospital exterior 4am": "outdoor", "night bus last stop end line": "outdoor", "kebab shop 2am queue": "outdoor", "phone box interior lit": "indoor", "underpass graffiti night colour": "outdoor", "harbour lights reflection water night": "outdoor", "ferry terminal last boat gone": "outdoor", "train station concourse empty night": "outdoor", "airport arrivals 5am": "outdoor", "fuel station forecourt night": "outdoor", "empty beach night city beyond": "outdoor", "park night fountain lit": "outdoor", "botanical garden night event": "outdoor", "stadium exterior night event over": "outdoor", "theatre stage door night": "both", "concert venue exit after": "outdoor", "bar exterior last call street": "outdoor", "arcade empty closing time": "outdoor", "bowling alley last game": "outdoor", "Tokyo Shinjuku Kabukicho neon": "outdoor", "Osaka Dotonbori night reflection": "outdoor", "Seoul Hongdae night street": "outdoor", "Hong Kong Mong Kok night dense": "outdoor", "Taipei night market open": "outdoor", "Bangkok Patpong night market": "outdoor", "Ho Chi Minh night street food": "outdoor", "Singapore Clarke Quay night": "outdoor", "Kuala Lumpur Petaling night": "outdoor", "New York Times Square 4am": "outdoor", "Las Vegas strip 3am": "outdoor", "Chicago Riverwalk night": "outdoor", "Miami South Beach night": "outdoor", "New Orleans Bourbon St late": "outdoor", "Nashville Broadway night": "outdoor", "London West End 2am": "outdoor", "Paris Pigalle night": "outdoor", "Berlin Kurfürstendamm night": "outdoor", "Amsterdam red light area outside": "outdoor", "Brussels Grande Place night": "outdoor", "Prague Wenceslas night": "outdoor", "ancient amphitheater stepped seats Athens": "outdoor", "Roman forum at sunrise empty": "both", "Colosseum interior arch looking up": "indoor", "Parthenon pillars Athens dusk": "both", "Hadrian's Wall northern edge": "both", "Vindolanda excavation trench": "both", "Egyptian pyramid at dawn no tourists": "both", "Angkor Wat sunrise reflection pool": "both", "Machu Picchu sun gate first light": "both", "Mesa Verde cliff dwelling Colorado": "outdoor", "Chaco Canyon ruins New Mexico": "outdoor", "Cahokia mounds Illinois": "both", "Serpent Mound Ohio aerial view possible": "both", "Cahokia Monks Mound base": "both", "Stonehenge solstice dawn mist": "both", "Avebury stone circle walking": "both", "Newgrange Ireland winter solstice": "both", "Viking longship museum interior": "indoor", "Jorvik Viking Centre York exterior": "outdoor", "Norman castle motte and bailey": "both", "Medieval cathedral chapter house": "both", "Tudor manor hall interior timber": "indoor", "crumbling castle courtyard Scotland": "outdoor", "abandoned monastery cloister Portugal": "both", "colonial port warehouse Jamaica": "indoor", "Bunker Hill monument Boston": "indoor", "Independence Hall Philadelphia": "both", "Colonial Williamsburg street": "outdoor", "Jamestown reconstruction Virginia": "both", "Plymouth Rock Massachusetts coast": "outdoor", "Salem witch trial memorial": "both", "battlefield memorial dawn silence": "outdoor", "Civil War battlefield marker dawn": "outdoor", "Napoleonic battlefield monument France": "outdoor", "Waterloo battlefield Belgium": "outdoor", "Gettysburg battlefield Pennsylvania": "outdoor", "Antietam battlefield Maryland dawn": "outdoor", "Little Bighorn battlefield Montana": "outdoor", "Tombstone Arizona OK Corral": "both", "Alamo San Antonio Texas exterior": "outdoor", "Berlin Wall remaining section": "both", "Checkpoint Charlie museum exterior": "outdoor", "Dresden Frauenkirche rebuilt exterior": "outdoor", "pre-storm sky bruised purple green light eerie flat calm": "both", "tornado alley Great Plains storm wall approaching vast": "outdoor", "monsoon India storm wall approaching dust first": "both", "Great Plains supercell storm rotating vast sky": "outdoor", "Australian outback storm red dust approaching wall": "both", "dust storm haboob Arizona wall approaching": "both", "North Sea storm wave lighthouse spray dramatic": "both", "tropical storm eye wall approach Caribbean coast": "outdoor", "Norwegian coast storm fjord dramatic wave": "outdoor", "storm at sea container ship wave dramatic": "both", "Mediterranean storm dramatic cliff wave spray": "outdoor", "Great Lakes storm grey vast water horizon": "both", "hurricane eye approach coast dramatic satellite": "outdoor", "Cornish coast storm wave dramatic heritage": "outdoor", "typhoon approach Hong Kong dramatic sky": "outdoor", "Scottish moor storm approaching dramatic light shafts": "outdoor", "Patagonia storm mountain dramatic wind bent tree": "outdoor", "Alpine storm lightning peak dramatic": "both", "Yorkshire moor storm approaching Brontë register": "outdoor", "winter storm blizzard white out reduced visibility": "both", "lightning strike plain night dramatic single bolt": "outdoor", "storm electricity pylon lightning dramatic": "both", "storm shelter doorway waiting dramatic light": "both", "storm aftermath debris calm eerie light": "both", "storm drain rushing water urban aftermath": "both", "storm abandoned car park flooding dramatic": "both", "storm rainbow aftermath dramatic light field": "both", "storm light dramatic shafts through cloud dramatic countryside": "both", "Turner painting storm sea ship dramatic": "both", "storm tide surge coastal town dramatic": "outdoor", "Los Angeles rain 1940s noir street lamp wet reflection": "outdoor", "Chicago noir El train overhead rain night shadow": "both", "San Francisco Chandler fog hill cable car night": "both", "New York fire escape rain night noir": "both", "Tokyo Shinjuku neon night alley narrow dense kanji": "both", "Hong Kong Mong Kok neon night dense vertical signs": "outdoor", "Seoul Gangnam neon night K-beauty signage": "both", "Osaka Dotonbori neon canal reflection night": "both", "Bangkok Chinatown neon night dense traffic": "both", "Las Vegas strip neon day garish": "both", "New York City steam vent night dramatic": "both", "London Soho alley night neon sign": "both", "New York Chinatown night dense narrow": "both", "East Berlin Plattenbau brutalist block 1970s grey": "both", "Moscow Khrushchyovka block estate winter": "both", "London Barbican brutalist concrete walkways": "both", "Marseille Unité d'Habitation Le Corbusier": "both", "Belgrade brutalist monument vast dramatic": "both", "Minsk Soviet boulevard vast ceremonial": "both", "Paris Haussmann boulevard golden stone dawn": "outdoor", "Edinburgh Old Town stone alley gaslight": "both", "Prague Old Town square golden cobblestone dawn": "both", "Budapest Parliament Danube reflection night": "both", "Vienna Ringstrasse imperial architecture dusk": "both", "Barcelona Gothic Quarter narrow golden": "both", "Paris catacombs skull lined narrow torch": "both", "Shanghai Pudong glass tower forest night": "outdoor", "Dubai glass tower desert edge dawn": "outdoor", "Singapore Marina Bay night reflection water": "both", "New York Hudson Yards contemporary glass": "both", "London Canary Wharf glass canyon night": "outdoor", "Singapore Jewel Changi waterfall interior": "outdoor", "desert highway at dusk heat shimmer": "outdoor", "state highway no buildings horizon": "outdoor", "desert road mirage ahead": "outdoor", "Mexico highway free road": "outdoor", "desert crossroads": "outdoor", "two-lane blacktop at sunset": "outdoor", "wet asphalt overpass night reflection": "outdoor", "motorway at night light trails": "outdoor", "freeway on-ramp shoulder": "outdoor", "road tunnel exit light end": "outdoor", "bridge expansion joint middle": "outdoor", "toll booth abandoned": "outdoor", "drive-in movie screen empty": "outdoor", "car wash tunnel entrance": "outdoor", "highway flyover construction": "outdoor", "motorway service park dark": "outdoor", "elevated highway bend": "outdoor", "industrial port road": "outdoor", "mountain switchback edge vertiginous": "outdoor", "coastal highway cliff edge": "outdoor", "mountain pass summit road": "outdoor", "valley road river beside": "outdoor", "forest road canopy over": "outdoor", "Norwegian fjord road tunnel": "outdoor", "Icelandic ring road empty": "outdoor", "New Zealand coastal highway": "outdoor", "South African coastal road": "outdoor", "Chilean carretera austral": "outdoor", "Colombian Pan-American mountain": "outdoor", "Peru Cusco mountain road": "outdoor", "Silk Road Kyrgyzstan pass": "outdoor", "mesa rim road": "outdoor", "interstate service road empty": "outdoor", "level crossing arms down alone": "outdoor", "weigh station closed": "outdoor", "roundabout centre at dawn": "outdoor", "main road empty market town": "outdoor", "B-road countryside both verges": "outdoor", "dirt road becoming tarmac": "outdoor", "gravel road end tarmac starts": "outdoor", "Irish bog road endless narrow": "outdoor", "Scottish single-track passing place": "outdoor", "rural crossroads at dawn": "outdoor", "flooded road section": "outdoor", "Australian outback highway road train track": "outdoor", "Patagonian ruta 40 gravel": "outdoor", "Bolivian salar crossing white": "outdoor", "Brazilian BR-116 jungle edge": "outdoor", "Trans-Siberian highway winter": "outdoor", "salt flat highway": "outdoor", "long straight flat road": "outdoor", "empty airstrip tarmac heat": "outdoor", "dragstrip start line": "outdoor", "race track pit lane": "outdoor", "abandoned race circuit": "outdoor", "race circuit backstraight": "outdoor", "tarmac airfield perimeter": "outdoor", "Route 66 desert diner exterior": "outdoor", "Route 66 motel sign rusted": "outdoor", "Route 66 filling station abandoned": "outdoor", "truck stop empty 3am": "outdoor", "empty highway rest stop": "outdoor", "highway billboard empty": "outdoor", "North American highway billboard": "outdoor", "northern lights aurora borealis vast dark sky lake": "outdoor", "ice road frozen lake truck headlights vast night": "outdoor", "Churchill Manitoba polar bear tundra twilight": "indoor", "Yukon wilderness log cabin smoke rising winter": "both", "Iqaluit Arctic settlement winter dark noon": "both", "Quebec City Old Town winter snow lanterns cobblestone": "both", "Niagara Falls frozen winter mist": "both", "Toronto winter street snow CN Tower behind": "outdoor", "Montreal alley winter snow graffiti": "both", "Vancouver harbour night mountains snow behind": "outdoor", "Pacific coast British Columbia old growth forest fog": "outdoor", "Cape Breton coastal cliff Atlantic fog": "outdoor", "Newfoundland outport fishing village fog": "outdoor", "Prairie flat horizon grain elevator sky vast": "outdoor", "Arctic tundra vast flat horizon midnight sun": "outdoor", "Lake Louise turquoise impossible colour summer": "outdoor", "Algonquin Park autumn reflection lake": "outdoor", "Banff frozen lake mountain reflection winter": "outdoor", "Whistler ski run empty dawn fresh snow": "both", "Canadian Rockies glacier valley vast": "outdoor", "Havana crumbling colonial street 1950s Chevrolet midday": "outdoor", "Cuba tobacco farm interior morning light": "indoor", "Havana rooftop sunset Malecón below": "outdoor", "Kingston dancehall night neon Jamaica": "indoor", "Jamaica Blue Mountains coffee farm morning mist": "outdoor", "Jamaica country road sugarcane afternoon": "outdoor", "Barbados rum shop interior afternoon": "indoor", "Trinidad carnival mas costume street night": "outdoor", "Trinidad Savannah carnival stage night": "both", "San Juan Old City colonial walls sunset Puerto Rico": "both", "Antigua English Harbour colonial dockyard": "outdoor", "Curaçao Willemstad colonial coloured buildings": "both", "Martinique rum distillery afternoon French colonial": "both", "Grenada nutmeg plantation afternoon": "indoor", "St Lucia Piton volcanic peak mist morning": "both", "Tobago rainforest waterfall morning": "outdoor", "Cayman Islands turtle farm": "both", "Barbados chattel house painted bright afternoon": "both", "Dominican Republic baseball field afternoon dust": "indoor", "Haiti Port-au-Prince street market colour": "outdoor", "Oaxacan market stall morning colour": "outdoor", "Chichen Itza pyramid sunrise empty": "outdoor", "Lucha libre arena ring between bouts": "outdoor", "Mexico City Zócalo plaza evening": "outdoor", "Frida Kahlo blue house Coyoacán": "outdoor", "Xochimilco trajinera canal flower boat": "outdoor", "Oaxaca Monte Albán ruins": "outdoor", "Teotihuacan pyramids dawn": "outdoor", "Palenque jungle ruins Chiapas": "outdoor", "Uxmal Yucatan ruins": "outdoor", "Merida colonial plaza Sunday": "outdoor", "San Cristóbal de las Casas highland": "outdoor", "Puerto Escondido surf beach Oaxaca": "outdoor", "Huatulco bay beach Oaxaca": "outdoor", "Sayulita beach Nayarit village": "outdoor", "Puerto Vallarta old town Jalisco": "outdoor", "Guadalajara Tlaquepaque craft market": "outdoor", "Guanajuato callejón del Beso lane": "outdoor", "Guanajuato Festival Cervantino stage": "outdoor", "San Miguel de Allende jardin": "outdoor", "Tulum ruins cliff sea below": "outdoor", "Tulum cenote swim jungle": "outdoor", "Bacalar lake colours Quintana Roo": "outdoor", "Coba pyramid climb top jungle": "outdoor", "Valladolid cenote swim Yucatan": "outdoor", "Izamal yellow town Yucatan": "outdoor", "Campeche colonial colour walls": "outdoor", "Veracruz malecon evening": "outdoor", "Xalapa anthro museum Veracruz": "outdoor", "Tlaxcala smallest state capital": "outdoor", "Morelia cathedral evening Michoacán": "outdoor", "Pátzcuaro Day of Dead lake": "outdoor", "Janitzio island midnight ceremony": "outdoor", "Cholula pyramid church top": "outdoor", "Puebla Azulejo tile building": "outdoor", "Taxco silver town hilltop": "outdoor", "Acapulco cliff diver platform": "outdoor", "Mazatlán old town Sinaloa": "outdoor", "Los Cabos arch sea rock": "outdoor", "Baja peninsula road trip": "outdoor", "Copper Canyon train Chihuahua": "outdoor", "Creel Tarahumara area Chihuahua": "outdoor", "New York Times Square 5am empty": "outdoor", "Route 66 Cadillac Ranch Texas art": "outdoor", "Nashville Broadway honky-tonk stage exterior": "outdoor", "New Orleans French Quarter Bourbon exterior": "outdoor", "Brooklyn rooftop summer Manhattan behind": "outdoor", "LA Venice Beach boardwalk morning": "outdoor", "San Francisco Lombard Street": "outdoor", "Chicago Bean Millennium Park reflection": "outdoor", "Miami South Beach art deco morning": "outdoor", "Seattle Pike Place Market dawn": "outdoor", "Portland Oregon Powell's Books exterior": "outdoor", "Austin 6th Street music row": "outdoor", "New Orleans Garden District mansion": "outdoor", "Savannah mossy square Georgia": "outdoor", "Charleston Rainbow Row South Carolina": "outdoor", "Annapolis harbour Maryland": "outdoor", "Cape Cod beach Massachusetts summer": "outdoor", "Maine Portland lobster pier": "outdoor", "Vermont fall foliage road General Store": "outdoor", "New Hampshire White Mountains": "outdoor", "Alaska Denali clear day base": "outdoor", "Hawaii Na Pali coast Kauai": "outdoor", "Grand Canyon south rim early": "outdoor", "Bryce Canyon hoodoos Utah dawn": "outdoor", "Zion Narrows Utah hiking": "outdoor", "Arches Utah Delicate Arch sunrise": "outdoor", "Monument Valley Arizona Navajo": "outdoor", "Death Valley salt pan California": "outdoor", "Yosemite Valley El Capitan view": "outdoor", "Sequoia forest drive-through tree": "outdoor", "Pacific Coast Highway Big Sur": "outdoor", "Malibu beach LA adjacent": "outdoor", "Santa Monica pier evening": "outdoor", "Hollywood Sign hillside view": "outdoor", "Bourbon Street parade day": "outdoor", "Mardi Gras New Orleans crowd": "outdoor", "Super Bowl adjacent city street": "outdoor", "NBA Finals watch party bar": "outdoor", "Fourth of July fireworks open": "outdoor", "Thanksgiving parade New York both": "outdoor", "Black Friday mall opening queue": "outdoor", "American diner any state any time": "outdoor", "New York deli counter": "both", "Havana rooftop washing lines crumbling colonial city below": "outdoor", "Havana rooftop 1950s Chevrolet visible below dawn": "outdoor", "Havana rooftop Malecón sea beyond crumbling beautiful": "outdoor", "Tokyo neon rooftop water tank city spread night dense": "outdoor", "Hong Kong cage home rooftop dense city beyond dramatic": "outdoor", "Seoul rooftop Han River beyond night neon": "outdoor", "Osaka rooftop dense city night neon sign": "outdoor", "New York water tower rooftop Manhattan skyline dawn": "outdoor", "Brooklyn rooftop Manhattan bridge view sunset": "outdoor", "New York rooftop 1970s vintage city behind": "outdoor", "New York rooftop party night skyline": "outdoor", "Chicago water tower rooftop industrial city": "outdoor", "Paris Haussmann rooftop chimney zinc dawn golden": "outdoor", "Paris rooftop Eiffel visible golden light": "outdoor", "Paris rooftop 6th arrondissement zinc slate dawn": "outdoor", "Lisbon Alfama rooftop tile fado city below": "outdoor", "Porto rooftop azulejo tile city below river": "outdoor", "Rome rooftop terracotta dome city eternal": "outdoor", "Naples rooftop Vesuvius beyond city below": "outdoor", "Athens rooftop Acropolis visible dramatic dusk": "outdoor", "Istanbul rooftop mosque minaret city both sides": "outdoor", "São Paulo rooftop favela meets glass tower": "outdoor", "Beirut rooftop bullet holes city rebuild": "outdoor", "Cairo rooftop minaret city ancient sprawl": "outdoor", "Mumbai rooftop slum city beyond contrast": "outdoor", "Detroit abandoned factory rooftop city below dramatic": "outdoor", "rooftop garden city dawn first light plants": "outdoor", "rooftop pool city below luxury night reflection": "outdoor", "rooftop helipad empty city spread dramatic": "outdoor", "rooftop solar panels practical city beyond": "outdoor", "empty concert hall seats": "outdoor", "vinyl record store aisle": "both", "garage band practice space": "indoor", "piano shop showroom evening": "both", "rooftop speaker setup": "outdoor", "recording studio control room": "indoor", "mixing desk session both": "both", "live venue empty soundcheck": "both", "tour bus bunk corridor": "indoor", "backstage catering area quiet": "both", "green room pre-gig": "both", "busker pitch underground empty": "both", "jazz club stage between sets": "both", "acoustic session stairwell": "indoor", "music school practice room": "both", "Abbey Road Studios crosswalk London": "indoor", "Sun Studio Memphis empty": "indoor", "Electric Lady Studio New York": "indoor", "Muscle Shoals Alabama studio": "indoor", "Criteria Studios Miami": "indoor", "Capitol Studios Los Angeles": "indoor", "Hansa Tonstudio Berlin": "indoor", "Polar Studios Stockholm": "indoor", "RAK Studios London": "indoor", "Rockfield Studios Wales": "indoor", "Rockfield Quadrangle Wales": "outdoor", "Konk Studios London": "indoor", "Maida Vale Studios BBC London": "indoor", "Air Studios Lyndhurst Hall London": "indoor", "British Grove London": "both", "Metropolis London": "indoor", "Olympic Studios Barnes London": "indoor", "Master Rock London": "both", "Madison Square Garden empty": "outdoor", "O2 Arena London empty": "both", "Radio City Music Hall empty": "both", "Royal Albert Hall stage level": "both", "Wembley Arena empty": "both", "La Cigale Paris empty": "both", "Olympia Paris empty": "both", "Zenith Paris empty": "both", "Berghain Berlin empty": "both", "Fabric London empty": "both", "Printworks London empty": "both", "Tobacco Dock London empty": "outdoor", "The Warehouse Leeds empty": "indoor", "Sub Club Glasgow empty": "both", "Barrowland Glasgow stage": "both", "King Tut's Glasgow stage": "both", "SWG3 Glasgow warehouse": "indoor", "Latitude Festival stage dawn": "both", "1970s Roland Garros clay court red dust late afternoon": "outdoor", "Wimbledon grass court morning dew empty pre-match": "outdoor", "1960s Flushing Meadows hard court crowd behind": "outdoor", "indoor tennis court 1980s green carpet empty": "indoor", "Rolland Garros press box 1980s clay below": "both", "Harlem street basketball court chain-link night 1990s": "outdoor", "1990s school gymnasium basketball finals night": "indoor", "outdoor basketball court Los Angeles sunset 1990s": "outdoor", "1980s boxing gym ring ropes overhead single light": "indoor", "Brooklyn boxing gym 1950s leather bag dust": "indoor", "Soviet sports hall gymnasium late 1970s fluorescent": "indoor", "squash court white walls echo 1970s": "outdoor", "wrestling mat gymnasium 1970s fluorescent": "indoor", "snooker hall green baize single overhead lamp": "indoor", "fencing hall épée 1970s European championship": "indoor", "Olympic velodrome track banking 1980s": "outdoor", "ice hockey rink empty practice dawn": "both", "horse racing paddock morning dew 1960s": "outdoor", "street football pitch Brazil favela evening": "outdoor", "stadium corridor tunnel pre-match concrete": "indoor", "Soviet state circus ring red spotlight 1960s": "indoor", "Soviet circus animal trainer ring 1960s": "indoor", "Moscow State Circus dressing room backstage 1970s": "indoor", "Moscow circus school practice hall": "indoor", "Depression-era big top sawdust 1930s": "both", "Depression water for elephants register 1930s": "both", "Barnum Bailey travelling circus poster backdrop 1920s": "both", "circus train car siding dawn performers": "both", "circus parade street 1920s elephants": "outdoor", "circus wagon painted carved travelling": "both", "Cirque du Soleil contemporary rig dramatic": "both", "aerial silks rig warehouse rehearsal contemporary": "indoor", "wire act high above no net ring below": "indoor", "flying trapeze platform height big top": "both", "clown alley backstage dressing tables": "both", "circus ring empty between shows sawdust": "indoor", "circus ring single spotlight performer dust": "indoor", "big top exterior night lights": "outdoor", "1950s Italian circus Fellini register outdoor": "outdoor", "big top collapsed in wind aftermath": "both", "a dusty western main street at high noon": "outdoor", "a saloon with swinging doors and a piano gone quiet": "indoor", "a canyon of red rocks at dawn, an ambush": "both", "a misty field at dawn, long grass and drifting fog": "outdoor", "a bamboo forest in falling rain": "outdoor", "a feudal village churned to mud as a storm breaks": "outdoor", "a rain-slick alley under a flickering streetlamp": "outdoor", "a detective's office striped with blind shadows": "indoor", "a rooftop in the rain above a neon city": "outdoor", "a wooden training hall of dummies and paper screens": "indoor", "a neon-lit rooftop at night": "outdoor", "a crowded market street mid-brawl": "outdoor", "a chapel full of white doves and flying splinters": "indoor", "a warehouse of splintering crates and spent shells": "indoor", "a hospital corridor, shots echoing": "indoor", "a storm-tossed ship deck of swinging ropes": "outdoor", "a harbour tavern mid-brawl": "indoor", "a sea cave of treasure and torchlight": "outdoor", "a city skyline at night cut by a searchlight beam": "outdoor", "a rooftop ledge above a rain of neon": "outdoor", "a crumbling bridge mid-collapse": "outdoor", "a dust-choked highway of wrecked cars": "outdoor", "a scrap-built fortress under a blood-orange sky": "outdoor", "a salt flat crossed by armoured vehicles": "outdoor", "a night city street of screeching tyres": "outdoor", "a graffiti-covered parking structure under flickering lights": "outdoor", "a fire escape above a steaming alley": "outdoor", "a misty mountain peak above a sea of cloud": "outdoor", "a bamboo canopy high above the forest floor": "outdoor", "a courtyard of falling cherry blossom": "outdoor", "ferris wheel top night city glow": "outdoor", "waltzers spinning neon blur night": "outdoor", "big wheel base looking up night": "both", "carousel horses night lights spinning": "outdoor", "big wheel gondola night suspended": "both", "bumper cars overhead sparks night": "both", "dodgems arena carnival neon": "both", "helter skelter base night": "both", "waltzer operator platform night": "both", "dodgem car stationary waiting": "both", "waltzer stationary between rides": "both", "candyfloss stall dusk light pink": "outdoor", "hook-a-duck stall fairground lights": "outdoor", "coconut shy stall string lights": "outdoor", "carnival food van candleapple dusk": "both", "toffee apple stall amber light": "outdoor", "test your strength tower carnival": "both", "shooting gallery neon prizes": "both", "prize soft toy stall overloaded": "both", "cotton candy machine spinning pink": "both", "hook-a-duck water reflection lights": "both", "prize wheel spin carnival neon": "both", "ghost train entrance carnival night": "outdoor", "hall of mirrors funfair interior": "both", "fortune teller caravan carnival exterior": "outdoor", "ghost train car interior dark": "indoor", "hall of mirrors reflection infinite": "both", "carnival fire eater performance area": "both", "candy stripe tent interior carnival": "indoor", "carnival stage performance area": "both", "carnival midway night both sides lit": "outdoor", "carnival entrance arch neon night": "both", "carnival crowd midway night": "both", "carnival ticket booth night queue": "both", "carnival arc lights full night": "both", "carnival fireworks above ferris wheel": "outdoor", "ferris wheel reflection puddle rain": "outdoor", "carnival back lot behind rides": "both", "carnival generator truck back area": "both", "trailer park carnival workers housing": "outdoor", "carnival back lot empty evening": "both", "funfair field afternoon setup": "both", "funfair at closing time lights going out": "both", "carnival field dawn before opening": "outdoor", "carousel empty morning after": "outdoor", "carnival field last night season": "outdoor", "funfair entrance gates daytime": "both", "carnival midway dawn packing up": "outdoor", "carnival field first light morning": "outdoor", "fairground organ carousel music": "outdoor", "1920s Wall Street private club oak panelling whiskey": "indoor", "Mayfair private members club 1990s dark wood": "indoor", "Venetian palazzo canal view evening candlelight": "both", "Swiss bank vault interior cold formal": "indoor", "1980s Texas oil money ranch interior excess gilt": "indoor", "1980s Wall Street trading floor chaos excess": "outdoor", "New York Plaza Hotel suite excess gold": "indoor", "1970s Studio 54 excess night velvet gold": "indoor", "Dubai penthouse glass tower night city spread": "both", "Hong Kong Peninsula hotel lobby formal": "indoor", "Saudi royal palace reception hall formal": "indoor", "Las Vegas high roller suite gold fixtures midnight": "indoor", "Monte Carlo casino floor evening gowns": "indoor", "Monaco grand prix paddock exclusive 1970s": "outdoor", "Cannes film festival yacht harbour evening": "outdoor", "Beverly Hills mansion pool twilight excess": "both", "Hamptons waterfront estate summer": "both", "Marbella villa pool afternoon Spain excess": "both", "Russian oligarch yacht Mediterranean afternoon": "both", "Aspen ski lodge excess fireplace wealthy": "both", "a dark candlelit interior with a deep brown ground": "both", "a grand biblical scene with figures emerging from darkness": "both", "a bare winter landscape under a cold grey Dutch sky": "both", "a stone-floored room lit by a single candle": "both", "a sunlit yard with deep diagonal shadows": "both", "a tavern table in dramatic low light": "both", "a grand Spanish court room receding into shadow": "both", "a working kitchen with one bright window": "both", "airy Spanish countryside under a pale sky": "both", "a black-walled room with an unsettling void behind": "both", "an opulent court salon with glittering light": "both", "a dark countryside at night lit by a fire": "both", "a tiled-floor Dutch room lit by a left-hand window": "both", "a quiet corner with a map on the wall and a table": "both", "a window over a canal with the room in soft shadow": "both", "a mythological landscape under a stormy golden sky": "both", "a hunt with galloping horses": "both", "an allegorical interior hung with rich drapery": "both", "a wheat field under a swirling sky at noon": "both", "a night café lit by yellow gaslight": "both", "a small bedroom of tilted flat colour walls": "both", "a gold ornamental background of swirling patterns": "both", "a flat golden tree of life with scrolling branches": "both", "a patterned Viennese interior of gold and mosaic": "both", "an ochre and grey interior of fractured planes": "both", "a sparse blue-toned room of flat melancholy": "both", "a warm terracotta circus ring in soft light": "both", "an interior of clashing patterned fabrics and wallpaper": "both", "an open blue sky with dancing figures": "both", "abstract cut-paper shapes in bright flat colour": "both", "a warm ochre wall of a Paris studio": "both", "a plain warm ground behind a reclining figure": "both", "a bare room with one chair in warm earth tones": "both", "a lush tropical clearing in flat bold colour": "both", "a hut interior with a woven mat floor": "both", "a Brittany village green in flat colour": "both", "a cabaret stage with a red glow and a dancing crowd": "both", "a cluttered intimate backstage dressing room": "both", "a lamplit café table at night": "both", "a late-night diner with a glaring fluorescent glow": "both", "a sunlit bedroom with a bare window": "both", "a white clapboard house under harsh sunlight": "both", "a flat orange-red room with a bare bulb": "both", "a caged space against a black void": "both", "a studio floor of smeared paint and newsprint": "both", "a grid of four repeated panels in clashing colours": "both", "a silver foil walled factory room": "both", "a flat newsprint background in stark black and white": "both", "a comic panel with a speech bubble and dotted background": "both", "a war comic explosion in red and yellow": "both", "a giant brushstroke painted as a comic": "both", "a peeling brick wall with a stencilled rat": "both", "a seaside wall with a red balloon": "both", "a museum wall hung with a stencilled scene": "both", "an ornate floral border with a gold halo": "both", "a circular four-seasons panel with ornamental border": "both", "a theatre poster frame with space for lettering": "both", "a broadsheet page with a bold inked border": "both", "a Paris street scene in lithograph shading": "both", "an over-the-top Georgian parlour": "both", "a water lily pond with a Japanese bridge": "both", "a sunlit poppy field in soft haze": "both", "a harbour at dawn in pastel mist": "both", "a garden of giant tropical leaves and flowers": "both", "a blue house courtyard with parrots": "both", "a bed surrounded by symbols and roots": "both", "an empty desert plain under a golden sky with melted clocks": "both", "a dream landscape of floating objects and crutches": "both", "a long-shadowed beach of impossible rocks": "both", "a blue sky of white clouds above a quiet street": "both", "an ordinary room where a green apple floats": "both", "a seaside with a bird-shaped sky": "both", "a towering wave about to crash with Mount Fuji beyond": "both", "a cherry blossom bridge in flat colour": "both", "a snowy village under a pale sky": "both", "a scrawled graffiti ground with handwritten words": "both", "a crowded canvas of crowns and symbols": "both", "an orange and blue background with crossed-out text": "both", "a bright flat colour background with radiating lines": "both", "a dance floor of dancing outlines": "both", "a subway-wall style chalk drawing": "both", "an Art Deco skyline of silver skyscrapers": "both", "a sleek open-top car in gleaming chrome": "both", "a night terrace of geometric shadows": "both", "a hazy blue mountain landscape behind a balcony": "both", "a rocky grotto in soft light": "both", "a plain dark ground with delicate shadows": "both", "a blood-red sky over a long pier": "both", "a moonlit fjord shore of wavy shapes": "both", "a bare room under yellow-green lamplight": "both", "a green hill under towering clouds and a breeze": "both", "a small seaside town with a train running on the water": "both", "a forest clearing of glowing spirits": "both", "a gold mosaic apse under a starry dome": "both", "a jewelled arch with peacocks and vines": "both", "a church wall of blue and gold tiles": "both", "a river of floating flowers in dense detail": "both", "a tapestried medieval chamber": "both", "a woodland glade of ivy and wildflowers": "both", "a warm 1950s kitchen with a family table": "both", "a small-town soda fountain counter": "both", "a front porch on a sunny afternoon": "both", "a clear-sky harbour with a steamship": "both", "a desert of flat yellow sand and a tiny plane": "both", "a busy cobbled European street in neat colour": "both", "Paris fashion week backstage Palais Royal": "both", "empty runway post-show dust settling": "outdoor", "Milan Brera showroom white space": "both", "studio white cyc wall full-length": "indoor", "New York garment district loft": "both", "London Somerset House courtyard show": "outdoor", "Copenhagen show space industrial": "both", "Berlin show space former power plant": "both", "Lagos Lagos Fashion Week backstage": "both", "Seoul DDP show exterior": "outdoor", "Tokyo Rainbow Bridge show exterior": "outdoor", "Shanghai former factory show space": "indoor", "Palais de Tokyo Paris show": "both", "Grand Palais Paris interior nave": "indoor", "Louvre Cour Carrée show Paris": "both", "Champs-Elysées midnight show": "both", "Eiffel Tower platform show Paris": "both", "Versailles garden show Paris": "outdoor", "Uffizi Piazzale Michelangelo show Florence": "both", "Colosseum exterior show Rome": "outdoor", "Guggenheim rotunda show New York": "both", "Whitney Biennial adjacent show": "both", "MoMA garden show New York": "outdoor", "Brooklyn Navy Yard show space": "outdoor", "Hudson Yards public show New York": "outdoor", "Met Stairs show New York": "both", "Tate Modern Bankside show London": "both", "V&A Cromwell Road steps London": "outdoor", "Natural History Museum London show": "both", "BFI Southbank show London": "both", "Barbican Centre show London": "both", "Roundhouse show London": "both", "BAFTA 195 Piccadilly show London": "both", "Selfridges rooftop show London": "outdoor", "Fashion East venue London": "both", "Goldsmiths show London": "both", "Central Saint Martins BA show": "both", "RCA show London": "both", "LCF MA show London": "both", "Birmingham Custard Factory show": "indoor", "Manchester Victoria Warehouse show": "indoor", "Glasgow SWG3 show": "both", "Edinburgh Dovecot Studios show": "indoor", "Dublin National Museum show": "both", "Lisbon LX Factory show": "indoor", "Barcelona Palo Alto show": "both", "seamless white paper backdrop studio infinity curve": "indoor", "seamless black paper backdrop studio infinity curve": "indoor", "seamless mid-grey paper backdrop studio": "indoor", "seamless cream paper backdrop studio": "indoor", "seamless pale blush paper backdrop studio": "indoor", "seamless forest green paper backdrop studio": "indoor", "seamless dusty blue paper backdrop studio": "indoor", "seamless burgundy paper backdrop studio": "indoor", "bare off-white plaster studio wall textured": "indoor", "raw concrete studio wall exposed aggregate": "indoor", "painted brick interior studio wall white": "indoor", "dark painted studio wall charcoal matte": "indoor", "hand-painted grey muslin backdrop studio": "indoor", "hand-painted white-to-dark graduated muslin studio": "indoor", "cream linen textured backdrop studio": "indoor", "dark velvet fabric backdrop studio deep black": "indoor", "raw canvas unpainted backdrop studio neutral": "indoor", "draped silk fabric backdrop studio ivory": "indoor", "torn edge paper backdrop studio textured white": "indoor", "layered fabric draped backdrop studio improvised dark": "indoor", "white painted studio floor with white backdrop seamless": "indoor", "black painted studio floor with black backdrop seamless": "indoor", "light wood studio floor with white backdrop": "indoor", "dark wood studio floor with dark backdrop": "indoor", "white studio floor posing platform raised": "indoor", "plain wooden stool studio white backdrop": "indoor", "director's chair canvas studio grey backdrop": "indoor", "mid-century posing chair studio neutral backdrop": "indoor", "chaise longue upholstered studio white backdrop": "indoor", "chaise longue upholstered studio dark backdrop": "indoor", "floor level white studio both seated": "indoor", "minimal white cube set studio": "indoor", "minimal black plinth set studio": "indoor", "clear perspex block prop studio white backdrop": "indoor", "seamless silver reflective backdrop studio": "indoor", "seamless gold reflective backdrop studio warm": "indoor", "frosted perspex panel backlit studio white glow": "indoor", "coloured gel background studio deep blue": "indoor", "coloured gel background studio deep red": "indoor", "split gel backdrop in hot pink and electric blue": "indoor", "saturated yellow backdrop with a hard graphic shadow": "indoor", "rainbow gel wash across a white cyc": "indoor", "green and magenta gel crossfire on a dark set": "indoor", "a 1970s living room set with shag carpet and a lava lamp": "indoor", "a retro diner booth built on the studio floor": "indoor", "a striped circus-tent set with a single spotlight": "indoor", "a hall of draped red velvet curtains": "indoor", "a pastel inflatable set of giant soft shapes": "indoor", "a wall of stacked vintage televisions flickering": "indoor", "a faux-marble staircase set with a gold balustrade": "indoor", "a black set with a confetti cannon mid-burst": "indoor", "a white cyc with a wind machine and flowing fabric": "indoor", "a haze-filled black set cut by a single beam of light": "indoor", "a set drenched in a curtain of falling droplets": "indoor", "a coloured powder cloud against a clean backdrop": "indoor", "a bubble machine filling a pastel set": "indoor", "a hanging foil curtain shimmering": "indoor", "studio wall mirror full length floor to ceiling": "indoor", "a mirrored room reflecting both of them endlessly": "indoor", "a Hollywood glamour set with a velvet sofa and champagne": "indoor", "a boudoir set with lace curtains and a vanity mirror": "indoor", "a black-and-white checkerboard floor with a single chair": "indoor", "a wall of glowing neon tubes in solid colour": "indoor", "daguerreotype studio 1850s painted backdrop column": "indoor", "early photography studio plate camera 1850s": "indoor", "Victorian parlour formal sitting 1860s": "both", "Victorian conservatory glass light 1860s": "both", "cyanotype portrait early experimental": "both", "Victorian photographer studio painted garden backdrop": "indoor", "Victorian cabinet card studio velvet chair": "indoor", "Victorian studio painted landscape backdrop": "indoor", "Edwardian seaside portrait studio pier": "indoor", "Edwardian country house drawing room formal": "indoor", "Edwardian portrait studio electric light early": "indoor", "sepia toned portrait formal studio": "indoor", "1920s glamour portrait studio dramatic light": "indoor", "1930s Hollywood studio portrait backdrop": "indoor", "1920s art deco portrait studio": "indoor", "1930s press photograph studio flash": "indoor", "1930s documentary press photograph street": "outdoor", "1940s studio portrait wartime formal": "indoor", "1940s press photo studio flash powder": "indoor", "1940s wartime goodbye platform station": "both", "1940s family portrait studio Sunday best": "indoor", "large format studio portrait 1940s sharp": "indoor", "black and white film portrait studio grain": "indoor", "1950s colour portrait studio Kodachrome": "indoor", "1950s suburban garden snapshot summer": "outdoor", "1950s school portrait individual backdrop": "indoor", "1950s department store portrait studio": "indoor", "1950s news agency portrait flash": "both", "medium format portrait studio sharp": "indoor", "1960s portrait studio soft focus colour": "indoor", "1960s snapshot garden party Kodak": "outdoor", "1960s photobooth strip four frames": "both", "1960s news photograph street candid": "outdoor", "1960s photojournalism candid street": "outdoor", "colour slide transparency 1960s portrait": "both", "1970s Polaroid instant kitchen casual": "indoor", "1970s family portrait velvet studio backdrop": "indoor", "1970s snapshot holiday beach Kodak": "outdoor", "1970s school photograph class outdoor": "indoor", "1970s documentary portrait natural light": "both", "instant Polaroid border white portrait": "both", "1980s portrait studio laser background": "indoor", "1980s snapshot disposable camera party": "both", "1980s passport photograph strip booth": "both", "1980s wedding portrait formal studio": "indoor", "35mm film grain portrait casual snapshot": "both", "1990s disposable camera snapshot casual": "both", "1990s portrait studio soft focus": "indoor", "1990s photobooth mall strip": "both", "1990s school portrait blue gradient backdrop": "indoor", "early 2000s digital camera party low resolution": "both", "2000s photo print kiosk portrait": "both", "2000s candid phone photograph first generation": "both", "2010s instagram square portrait early": "outdoor", "a 1969 mission control room of glowing consoles and cigarette smoke": "indoor", "a flight control floor at the moment of success": "both", "a control room doorway lit by the big screen's glow": "indoor", "a grey cratered lunar plain under a black sky": "outdoor", "a lander's leg and long shadows on grey dust": "both", "a ridge of grey dust with a small planted flag": "outdoor", "a cramped space station module crowded with cables": "indoor", "a module wall of laptops and floating tools": "indoor", "a sleeping nook of bags clipped to the wall": "indoor", "a pre-launch suit-up room with white suits on racks": "indoor", "a gantry walkway to a towering rocket at dawn": "outdoor", "a crew van beside the launch pad in pale light": "outdoor", "a station cupola window with Earth glowing blue below": "both", "a dome of windows over the curve of the planet": "both", "a porthole at sunrise over a vast ocean": "outdoor", "a 1960s canteen of formica tables and trays": "indoor", "a suburban backyard barbecue near the space centre": "outdoor", "a motel pool near the launch site at dusk": "both", "a huge training pool holding a submerged station mock-up": "indoor", "a centrifuge room with a giant spinning arm": "indoor", "a simulator cabin of switches and dials": "indoor", "a windswept Soviet launch site on the steppe": "outdoor", "a cosmonaut dressing room of heavy orange suits": "indoor", "a steppe railway with a rocket rolling out at dawn": "outdoor", "an orange capsule bobbing in a calm ocean": "outdoor", "a navy recovery ship deck at sunrise": "outdoor", "a helicopter pad above a blue sea": "outdoor", "a sleek white capsule interior with a huge window": "indoor", "a launch viewing lounge of glass and screens": "indoor", "a desert spaceport hangar at dawn": "indoor", "room floating in open sky above clouds": "both", "staircase descending into ocean depth": "both", "corridor of infinite identical doors": "both", "forest growing on ceiling roots up": "both", "library with books falling upward slowly": "both", "clock face enormous walkable surface": "both", "mirror room reflecting into infinity": "both", "chess board landscape full size": "both", "giant flower field house-sized blooms": "both", "city inverted above head walking": "both", "door in middle of open field nowhere": "both", "bed floating in dark space": "both", "kitchen with ocean instead of floor": "both", "office with desert instead of carpet": "both", "wedding beneath water both dry somehow": "both", "train arriving through bedroom wall": "both", "telephone booth inside out ringing": "both", "painting stepped into both inside art": "both", "mouth of cave that is a face enormous": "both", "eye looking back from pond surface": "both", "shadows going wrong direction both": "both", "clocks all different times melting": "both", "hands visible not the body they belong": "both", "spiral staircase going both up and down same": "both", "window looking at same room from inside": "both", "door knob too large to turn reasonable": "both", "tree growing sideways defying gravity": "both", "rain falling upward both normal about it": "both", "snow falling in one spot only precision": "both", "crowd all moving same direction both still": "both", "moon on ground everyone else ignores": "both", "sun underground ceiling window": "both", "horizon too close walking impossible": "both", "sky below feet walking on clouds solid": "both", "two of the same place same time both": "both", "echo of selves visible slight delay": "both", "objects frozen mid-fall both normal": "both", "animals acting human ignored by both": "both", "architecture bending around both normally": "both", "two moons different sizes both checking": "both", "punk DIY basement show crowd pressed against a tiny stage": "indoor", "punk gig mosh pit crowd surfers hands in the air": "indoor", "squat house gig graffiti walls mattress on the floor": "indoor", "free party warehouse rave strobe lasers packed dance floor": "indoor", "field rave at sunrise speaker stack dancers in silhouette": "outdoor", "railway arch rave smoke machine green lasers": "both", "huge mural wall mid-paint scaffolding and spray cans below": "outdoor", "alley wheatpaste posters peeling in layers at night": "outdoor", "graffiti hall of fame wall colourful legal wall": "outdoor", "grrrl punk gig tiny venue crowd singing along sweaty": "indoor", "zine fair folding tables tote bags colourful": "indoor", "photocopier shop at 2am copying flyers": "indoor", "record fair hall crates stacked wall to wall": "indoor", "basement record shop crates floor to ceiling gig posters": "indoor", "flea market vinyl stall morning crates in the sun": "outdoor", "street cipher circle crowd ring boombox night": "outdoor", "cardboard breakdance floor park jam crowd ring": "outdoor", "90s block party fire hydrant sprinkler summer": "outdoor", "lowrider car meet car park night chrome and candy paint": "outdoor", "boulevard cruising lowriders slow at sunset": "outdoor", "hydraulics hop contest crowd cheering": "outdoor", "goth club fog machine dance floor candelabras": "indoor", "cemetery goth picnic among ruins at dusk": "outdoor", "dark fashion shop corset rack velvet curtains": "indoor", "seafront promenade scooters lined up mod rally": "outdoor", "ska club checkerboard floor skanking crowd": "indoor", "scooter rally campsite Union Jack sunset": "outdoor", "tattoo convention hall booths buzzing machines": "indoor", "tattoo studio flash walls neon sign buzzing": "indoor", "tattoo chair mid-session artist leaning in": "indoor", "roller derby bout track jammers pack blur crowd": "indoor", "roller rink disco ball neon retro": "indoor", "roller derby locker room helmets pads and tape": "indoor", "concrete skate bowl DIY under a bridge covered in graffiti": "outdoor", "street skate spot handrail and stairs at dusk": "outdoor", "skate park pool coping floodlit night": "outdoor", "towering speaker stack sound system carnival street bass": "outdoor", "pirate radio rooftop aerial city night": "outdoor", "dub dance basement sound system dripping ceiling": "indoor", "rooftop leap gap between buildings city sunrise": "outdoor", "concrete steps urban parkour spot at night": "outdoor", "construction site scaffold climb at dusk": "outdoor", "backyard wrestling ring in a car park makeshift ropes crowd": "outdoor", "lucha libre arena masks ring crowd roaring": "indoor", "basement wrestling ring plastic chairs fairy lights": "indoor", "tiled underpass busker crowd echoing walls": "both", "busy pedestrian street busking crowd hat on the ground": "outdoor", "open air market street band improvised dance": "outdoor", "after-hours queer bar glitter disco ball packed floor": "indoor", "drag show stage glitter curtain audience roaring": "indoor", "bar back door smoking area rainbow neon sign": "outdoor", "northern soul all-nighter ballroom talc on the floor": "indoor", "1970s northern soul hall spin and drop dancers": "indoor", "soul club basement wooden dance floor sweat": "indoor", "rockabilly dance hall jive floor bunting": "indoor", "greaser car meet neon diner forecourt": "outdoor", "vintage car show pomade and flames paintwork": "outdoor", "ballroom competition runway judges panel glitter spotlight": "indoor", "queer ballroom house category walk packed audience": "indoor", "backstage ballroom dressing room mirrors sequins": "indoor", "a vast cave glowing electric blue": "both", "a luminous sea bay glowing at night": "outdoor", "a crystal cave of giant glittering geodes": "both", "a Victorian camp under strange towering trees": "outdoor", "a canvas tent lit by lantern beside a vast skeleton": "indoor", "a map table at the edge of the known world": "both", "a sunken city of coral-covered columns": "both", "a deep sea vent field of glowing creatures": "outdoor", "a flooded cave of impossible blue darkness": "both", "a jungle clearing with a giant footprint filling with water": "outdoor", "a canopy hung with an enormous woven nest": "outdoor", "a riverbank scattered with giant eggshell": "outdoor", "a jungle temple strangled by roots and vines": "outdoor", "a cloud-forest city of terraces in mist": "outdoor", "a library cave of ancient books and dripping water": "indoor", "a chain of floating rock islands above the clouds": "outdoor", "a sky island with waterfalls pouring into nothing": "outdoor", "a rope bridge between drifting rocks": "outdoor", "a waterfall pouring upward into the sky": "outdoor", "a huge door carved into a cliff of ancient stone": "outdoor", "a vertical forest hanging from a cliff": "outdoor", "a volcano crater glowing with rivers of lava": "outdoor", "a glacier cave of blue ice and cracking sounds": "outdoor", "a thermal pool of steaming turquoise water": "both", "a polar ice shelf under swirling green light": "outdoor", "a high mountain ridge above the clouds": "outdoor", "a white-out camp of tents half-buried in snow": "indoor", "an immense cavern with a tiny glowing city far below": "both", "a cave wall of animated ancient paintings": "both", "an underground ocean under a roof of stalactites": "outdoor", "a casino floor under the ceiling cameras": "both", "a casino corridor toward the exit": "indoor", "a casino lift": "indoor", "a supermarket aisle at midnight": "outdoor", "a supermarket checkout": "indoor", "a cereal aisle": "both", "a cash machine on a night street": "outdoor", "a street corner at night": "outdoor", "a petrol station forecourt at night": "outdoor", "a bus shelter": "outdoor", "a taxi back seat": "outdoor", "an underground platform": "outdoor", "an airport arrivals hall": "indoor", "a train station platform": "outdoor", "an upper deck of a bus": "outdoor", "a ferry deck": "outdoor", "a hospital corridor": "indoor", "a school corridor": "indoor", "an office lift": "indoor", "a library": "indoor", "a fishmonger's counter": "both", "a market stall": "outdoor", "a park at dusk": "outdoor", "a beach lifeguard hut": "outdoor", "a gym": "indoor", "a café": "indoor", "a cinema foyer": "indoor", "a bookshop": "indoor", "a museum gallery": "indoor", "a launderette at 3am": "indoor", "1950s laboratory neon green glow": "indoor", "mad scientist laboratory bubbling tubes": "indoor", "underground bunker red emergency lighting": "indoor", "crumbling mansion exterior night": "outdoor", "vintage observatory dome night": "indoor", "clock tower night storm": "both", "basement stairs single overhead bulb": "indoor", "1950s suburban basement den night": "indoor", "abandoned space station corridor flickering": "indoor", "alien landscape matte painting sky": "outdoor", "B-movie spaceship control room retro": "both", "retro rocket ship launch pad": "outdoor", "alien mothership interior command deck retro blinking": "indoor", "crashed UFO crater smoking": "both", "nuclear test site restricted zone": "outdoor", "research station arctic storm outside": "indoor", "radio tower blink red night": "both", "suburban house at night exterior one light on": "outdoor", "1950s American street night creature approaching": "both", "small town main street deserted night": "both", "trailer park night one porch light": "outdoor", "gas station night rural isolated": "outdoor", "1960s diner night fluorescent": "indoor", "motel room at night single lamp": "both", "roadside motel neon sign night": "both", "bowling alley at night empty": "indoor", "bowling alley night creature in shadows 1950s": "both", "high school gymnasium prom night monster gate-crashes": "indoor", "school corridor at night lockers": "indoor", "drive-in movie screen at night": "outdoor", "drive-in car park night": "both", "fog-covered graveyard at night practical light": "outdoor", "dark forest practical torch light": "both", "swamp at night fog mist": "outdoor", "cave entrance dark night fog": "outdoor", "corn field at night path through": "outdoor", "giant spider web forest clearing victims wrapped": "indoor", "carnival haunted house entrance": "both", "carnival ferris wheel night neon": "outdoor", "funfair ghost train entrance night": "both", "theatre balcony single spotlight": "indoor", "abandoned factory night emergency exit green": "both", "power plant cooling towers night": "outdoor", "quarry at night floodlit": "outdoor", "warehouse district night one lamp": "indoor", "rooftop at night city glow below": "outdoor", "hospital corridor night emergency red": "indoor", "rural highway night headlights": "outdoor", "beach at night bonfirelight": "outdoor", "pier at night fog horn": "outdoor", "lighthouse beam night fog": "outdoor", "old mill exterior night": "both", "church at night single candle interior": "indoor", "submarine interior cramped red light": "indoor", "candlelit restaurant table for two red roses": "indoor", "restaurant window table rain outside candlelight": "indoor", "restaurant bar waiting evening dressed up": "indoor", "small restaurant neighbourhood intimate evening": "indoor", "table for two empty setting waiting": "both", "restaurant exterior evening arriving dressed": "indoor", "rooftop restaurant city view evening": "indoor", "wine bar intimate corner evening": "both", "paris bridge padlock city view evening": "outdoor", "bridge city lights reflection evening": "outdoor", "harbour evening lights reflection": "outdoor", "apartment balcony city evening lights": "both", "cinema queue cold evening together": "both", "home dining table candles simple intimate": "indoor", "home sofa evening candles wine": "indoor", "kitchen cooking together evening home": "indoor", "dining room home candles occasion": "indoor", "hotel room rose petals champagne evening": "indoor", "valentine card envelope table morning": "both", "kitchen table breakfast heart pancakes morning": "indoor", "bedroom morning light flowers on bedside": "indoor", "letter box valentine card morning discovered": "both", "valentine card writing desk lamp evening": "both", "red roses delivered doorstep evening": "outdoor", "doorstep moment evening arrival flowers": "outdoor", "florist shop red roses morning selection": "both", "flower market morning red roses selection": "outdoor", "park bench winter afternoon couples": "outdoor", "park winter afternoon hand in hand": "outdoor", "café window seat rainy afternoon": "indoor", "spring garden flowers morning sunlight": "outdoor", "garden path spring flowers either side": "outdoor", "garden gate spring morning arrival": "outdoor", "porch steps spring morning flowers": "outdoor", "park spring afternoon flowers blooming": "outdoor", "garden bench spring afternoon flowers": "outdoor", "garden table lunch spring afternoon": "outdoor", "home garden spring evening golden hour": "indoor", "conservatory morning light spring flowers": "both", "breakfast tray bedroom morning flowers": "indoor", "kitchen table Sunday morning flowers bouquet": "indoor", "front door flowers delivered morning": "outdoor", "kitchen flowers vase morning light": "indoor", "bedroom morning light flowers bedside": "indoor", "sunday morning light through window flowers": "both", "dining table sunday lunch spring": "both", "restaurant sunday lunch spring afternoon": "indoor", "café sunday morning flowers on table": "indoor", "living room spring afternoon light flowers": "indoor", "florist shop spring flowers selection morning": "both", "fireworks over city harbour night": "outdoor", "rooftop fireworks city view night": "outdoor", "public park fireworks crowd night": "indoor", "lake fireworks reflection night": "outdoor", "dock lake fireworks night": "outdoor", "bridge fireworks city view night": "outdoor", "pier end fireworks over water night": "outdoor", "small town parade main street day": "outdoor", "small town main street flags bunting day": "outdoor", "small town bandstand afternoon": "both", "small town church steps afternoon": "indoor", "memorial park flags afternoon": "outdoor", "backyard barbecue american flag bunting afternoon": "both", "suburban front porch american flag evening": "outdoor", "suburban backyard pool afternoon": "both", "baseball field small town afternoon": "outdoor", "beach bonfire fourth of july night": "outdoor", "fairground fourth of july afternoon": "both", "carnival midway fourth afternoon": "outdoor", "sunset beach american flags evening": "outdoor", "zocalo mexico city grito de independencia night": "both", "plaza principal pueblo night fireworks grito": "outdoor", "cathedral facade green white red lights night": "both", "colonial town square fireworks night": "outdoor", "cathedral bells ringing independence night": "both", "plaza de armas provincial town evening": "outdoor", "charro escaramuza horse arena afternoon": "both", "charreada arena afternoon traditional": "both", "traditional market dia de independencia stalls": "both", "traditional feast table day of independence": "both", "market stalls mexican crafts independence": "outdoor", "traditional kitchen independence feast morning": "indoor", "town square mariachi performance evening": "outdoor", "folk dance performance plaza evening": "outdoor", "traditional dress parade main street day": "outdoor", "mexican flag green white red waving plaza": "outdoor", "hacienda colonial courtyard evening": "both", "small pueblo plaza morning independence": "outdoor", "colonial archway green white red bunting": "both", "mountain village independence celebration afternoon": "both", "kitchen cooking thanksgiving morning steam": "indoor", "kitchen table morning coffee thanksgiving preparation": "indoor", "supermarket thanksgiving eve last minute": "both", "autumn farm stand harvest thanksgiving morning": "outdoor", "kitchen sink washing up thanksgiving evening": "indoor", "thanksgiving table full harvest decorations afternoon": "both", "dining room set table thanksgiving anticipation": "indoor", "dining table empty setting thanksgiving anticipation": "both", "dining room candles thanksgiving evening": "indoor", "living room after dinner thanksgiving evening": "indoor", "front porch autumn leaves afternoon golden": "outdoor", "front door wreath autumn thanksgiving": "outdoor", "backyard afternoon thanksgiving football": "both", "autumn park walk thanksgiving afternoon": "outdoor", "backyard bonfire after thanksgiving evening": "both", "neighbourhood thanksgiving morning quiet": "both", "parade crowd thanksgiving morning city": "outdoor", "small town parade thanksgiving morning": "outdoor", "airport arrival thanksgiving reunion": "both", "family living room thanksgiving afternoon football": "indoor", "halloween porch carved pumpkins orange night": "outdoor", "suburban trick or treat street night": "outdoor", "carved pumpkin line porch steps evening": "outdoor", "front door decorated cobwebs night": "outdoor", "halloween street blocked cars candy night": "outdoor", "jack o lantern lit porch dark night": "outdoor", "haunted house decorated exterior night": "outdoor", "cemetery halloween decorated night moon": "outdoor", "graveyard fog machine night halloween": "both", "haunted hayride field night dark": "outdoor", "corn maze halloween night torches": "outdoor", "halloween fog street night orange glow": "outdoor", "halloween bonfire field night dark": "outdoor", "halloween costume party interior crowded": "indoor", "halloween parade street costumes night": "outdoor", "apple bobbing tub indoor halloween party": "indoor", "halloween disco venue costumes night": "both", "school halloween parade daytime": "indoor", "halloween market stalls night orange": "outdoor", "halloween carnival funfair night orange": "outdoor", "day of the dead altar ofrenda marigolds candles photographs": "both", "ofrenda home altar photographs candles marigolds": "indoor", "altar community display photographs flowers": "both", "home ofrenda setting photographs loved ones": "indoor", "town plaza altar community display": "outdoor", "colonial church decorated marigolds night": "indoor", "cemetery marigold path candles night procession": "outdoor", "cemetery grave decorated marigolds candles night": "outdoor", "cemetery night candles thousands marigolds": "outdoor", "cemetery family gathering candles night": "outdoor", "marigold petal path cemetery candles": "outdoor", "parade dia de los muertos street costume night": "outdoor", "calavera parade float street night elaborate": "indoor", "procession street candles elaborate costumes night": "indoor", "traditional dia de los muertos performance plaza": "outdoor", "traditional dance dia de los muertos plaza": "outdoor", "marigold market stalls cempasuchil october": "outdoor", "traditional market dia de los muertos crafts": "both", "sugar skull making workshop table": "indoor", "paper marigold decorating workshop": "indoor", "christmas tree lights interior night warm": "indoor", "fireplace stockings interior christmas eve night": "indoor", "christmas morning unwrapping living room": "indoor", "bedroom christmas morning first light": "indoor", "snow exterior house christmas lights evening": "outdoor", "snow street christmas lights evening town": "outdoor", "christmas window shop lights snow exterior": "outdoor", "snowy landscape christmas day quiet": "outdoor", "christmas tree farm choosing morning snow": "outdoor", "christmas market stall mulled wine lights winter": "outdoor", "carol singing exterior night lanterns": "outdoor", "christmas fair outdoor stalls lights winter": "outdoor", "church midnight mass candles christmas eve": "indoor", "chapel candles christmas eve service": "indoor", "pub christmas eve fire interior warm": "indoor", "kitchen christmas cooking morning steam": "indoor", "christmas table set dinner candles formal": "both", "christmas dinner table full family afternoon": "both", "train station christmas arrival reunion": "outdoor", "airport arrivals christmas reunion": "outdoor", "rooftop fireworks city view midnight countdown": "outdoor", "rooftop small group midnight city glow": "outdoor", "penthouse view fireworks midnight toast": "outdoor", "bridge city fireworks river reflection midnight": "outdoor", "harbour fireworks water reflection midnight": "outdoor", "ballroom countdown midnight champagne": "indoor", "house party countdown midnight interior": "indoor", "pub midnight new year crowd interior": "indoor", "hotel bar new year midnight formal": "indoor", "theatre new year midnight performance": "indoor", "casino countdown midnight glamour": "indoor", "restaurant midnight countdown champagne toast": "indoor", "times square style crowd countdown night": "outdoor", "city street midnight fireworks crowd": "outdoor", "countdown clock public square midnight": "indoor", "city park fireworks crowd midnight": "outdoor", "beach bonfire new year midnight": "outdoor", "quiet home midnight just two champagne": "indoor", "riverside fireworks midnight cold": "outdoor", "dawn new year morning aftermath quiet": "both", "home diwali lights decorations lanterns evening": "indoor", "home puja room diwali candles evening": "indoor", "home drawing room diwali decorations evening": "indoor", "traditional diwali puja table offerings": "both", "family home diwali gathering evening warm": "indoor", "community diwali celebration hall lights": "both", "diwali diyas lit doorstep rangoli night": "outdoor", "rangoli design doorstep diwali morning": "outdoor", "street rangoli competition diwali morning": "outdoor", "balcony diyas lit city lights below diwali": "both", "market diwali sweets and lights shopping": "both", "sweet shop diwali selection morning": "both", "diwali lights market shopping evening": "both", "diwali mela fairground lights evening": "both", "rooftop fireworks diwali night city": "outdoor", "diwali fireworks park night crowd": "outdoor", "rooftop diyas city spread below diwali": "outdoor", "diwali lantern release night sky": "both", "street diwali lights procession night": "outdoor", "temple diwali celebration lights evening": "both", "chinese new year lanterns street night red gold": "outdoor", "lantern festival street night chinese new year": "outdoor", "night market chinese new year lanterns evening": "outdoor", "chinese new year fair stalls lights evening": "both", "chinatown exterior red lanterns night": "outdoor", "lion dance street performance chinese new year morning": "outdoor", "chinatown parade dragon lion dance day": "outdoor", "community hall chinese new year celebration": "indoor", "family reunion dinner table chinese new year eve": "both", "family home decorations red gold new year": "indoor", "dumpling making family table new year eve": "both", "restaurant family new year dinner formal": "indoor", "family home new year eve countdown midnight": "indoor", "red envelope giving family chinese new year": "both", "temple prayers new year morning incense": "both", "temple fair new year blessing morning": "outdoor", "market new year goods red decorations morning": "both", "flower market new year morning purchases": "outdoor", "fireworks chinatown street midnight new year": "outdoor", "harbour fireworks chinese new year midnight": "outdoor"};

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
  "first vs. last": "the first valentine and the one you didn’t know was the last",
  "watched vs. unwatched": "the strange freedom of a moment before the camera swings back",
  "the mask vs. the face": "what you put on and what it reveals",
  "found vs. lost": "found in the world and lost in it at the same time",
  "memory vs. forgetting": "memory and the river that takes it",
  "individual vs. crowd": "the individual held inside the crowd",
  "sign vs. silence": "the sign raised against a silence that refuses to end",
  "marching vs. standing still": "marching forward or standing still as the act",
  "anger vs. hope": "anger and hope occupying the same body",
  "arrested vs. free": "the arrested and the free facing each other",
  "chant vs. quiet": "the chant breaking through the enforced quiet",
  "seen vs. ignored": "demanding to be seen by those who refuse to look",
  "together vs. alone in cause": "together in the cause, alone in what it costs",
  "fear vs. conviction": "fear and conviction arriving at the same moment",
  "front line vs. witness": "standing at the front line or bearing witness from behind",
  "voice vs. power": "voice pressed against power",
  "peaceful vs. tense": "peaceful intention pressed against a tense moment",
  "symbol vs. person": "the symbol carried by the full weight of the person",
  "media vs. moment": "the media presence against the unmediated moment",
  "demand vs. plea": "the demand that refuses to become a plea",
  "exhausted vs. resolved": "exhausted and still resolved",
  "unity vs. division": "unity as the only answer to division",
  "act vs. consequence": "the act and the consequence arriving together",
  "present vs. history": "standing in the present knowing it is becoming history",
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
  "silence vs. echo": "silence and the echo that proves something happened here",
  "surface vs. depth": "the surface and the depth underneath",
  "tamed vs. feral": "tamed returning to feral at the jungle edge",
  "canopy vs. floor": "canopy light filtering down to the floor",
  "predator vs. prey": "predator and prey breathing the same air",
  "ancient vs. alive": "ancient beyond measure and completely alive",
  "light vs. undergrowth": "light failing at the edge of undergrowth",
  "track vs. trailless": "the track ending where the trailless begins",
  "wet vs. dry": "soaked through in a place that is never dry",
  "loud vs. silent jungle": "the jungle deafening then suddenly completely silent",
  "known vs. uncharted": "the known path giving way to uncharted ground",
  "ruin vs. root": "ruin reclaimed by root",
  "small vs. vast canopy": "human-small under the vast canopy",
  "breathe vs. sweat": "breathing through the sweat",
  "found vs. consumed": "found inside something vast enough to consume",
  "species vs. human": "the species watching the human",
  "river vs. ridge": "the river route against the ridge route",
  "dawn vs. midday heat": "dawn coolness burning away to midday heat",
  "temple vs. tree": "the temple and the tree in equal contest",
  "map vs. moss": "the map irrelevant against the moss",
  "creature vs. stillness": "the creature requiring absolute stillness",
  "enter vs. return": "entering and the long question of returning",
  "ancient vs. present": "ancient stone and the present moment standing inside it",
  "survival vs. surrender": "survival and the quiet temptation to surrender to the sand",
  "lost vs. found": "lost in the vast and then suddenly completely found",
  "before vs. after": "the before and the after with the storm between",
  "buried vs. exposed": "buried beneath the surface or left exposed to everything",
  "seen vs. unseen": "seen by the city and unseen by everyone in it",
  "power vs. fragility": "power that makes everything feel fragile",
  "above vs. below": "above pressing against below",
  "public vs. private": "public pressing against private",
  "staying vs. leaving": "the held moment before staying or leaving",
  "private vs. public height": "private at the top of a very public city",
  "winning vs. losing": "the prize and the walk home without it",
  "applause vs. silence": "applause cracking under the weight of silence",
  "spectacle vs. ordinary": "the waltzer and the man who runs it",
  "alone vs. together": "alone pressing against together",
  "real vs. performance": "the person behind the face paint",
  "beautiful vs. ugly": "the thing that is both at once under carnival light",
  "bright vs. dark": "the gap between the lit ride and the field beyond",
  "together vs. alone in a crowd": "the loneliness of the midway",
  "magical vs. mechanical": "the ride and its engine",
  "laughter vs. loneliness": "the sound that covers the other",
  "season vs. end of season": "the carnival on its last night",
  "sugar vs. bitter": "the candyfloss and what comes after",
  "anticipation vs. disappointment": "the game before and after the throw",
  "last night vs. first night": "the carnival opening and the carnival closing",
  "seen vs. overlooked in the crowd": "the face that nobody clocked",
  "love vs. heartbreak midway": "the couple and the ghost of the couple",
  "gaudy vs. sublime": "the moment the neon becomes something else",
  "passing vs. permanent": "what passes through and what was here before and will remain",
  "innocent vs. knowing": "the child who believed and the adult who remembers",
  "Rembrandt": "painted in the style of Rembrandt: amber chiaroscuro, glowing faces emerging from deep shadow",
  "Caravaggio": "painted in the style of Caravaggio: tenebrism, one hard light slicing through absolute darkness",
  "Velázquez": "painted in the style of Velázquez: loose atmospheric brushwork, receding court space, warm shadow",
  "Goya": "painted in the style of Goya: raw dark brushwork, haunting psychological intensity",
  "Vermeer": "painted in the style of Vermeer: soft pearly window light, calm domestic stillness",
  "Rubens": "painted in the style of Rubens: Baroque swirling movement, rich warm flesh tones, stormy golden skies",
  "Van Gogh": "painted in the style of Van Gogh: thick swirling impasto, vivid yellows and blues",
  "Klimt": "painted in the style of Klimt: gold leaf, ornamental patterns, flat decorative surfaces",
  "Picasso": "painted in the style of Picasso: fragmented Cubist planes, faces seen from several angles at once",
  "Matisse": "painted in the style of Matisse: flat bold colour, joyful simplified shapes, pattern on pattern",
  "Modigliani": "painted in the style of Modigliani: elongated necks, almond eyes, warm simplified faces",
  "Gauguin": "painted in the style of Gauguin: flat saturated colour, bold outlines, tropical simplicity",
  "Toulouse-Lautrec": "painted in the style of Toulouse-Lautrec: poster flats, bold sinuous line, Parisian nightlife",
  "Hopper": "painted in the style of Edward Hopper: hard light, quiet isolation, American stillness",
  "Bacon": "painted in the style of Francis Bacon: twisted figures, raw smeared paint, flat dark voids",
  "Warhol": "painted in the style of Andy Warhol: silkscreen flat colour, repetition, high-contrast pop",
  "Lichtenstein": "painted in the style of Roy Lichtenstein: Ben-Day dots, thick black outline, primary-colour comic panel",
  "Banksy": "painted in the style of Banksy: black-and-white stencil, street wall, satirical twist",
  "Mucha": "painted in the style of Alphonse Mucha: Art Nouveau poster, flowing hair, floral halo borders",
  "caricature": "drawn as satirical caricature: huge heads, exaggerated features, bold ink line",
  "Monet": "painted in the style of Monet: Impressionist broken colour, dappled light, shimmering water",
  "Frida Kahlo": "painted in the style of Frida Kahlo: Mexican folk surrealism, flowers, flat frontal gaze, symbolic detail",
  "Dalí": "painted in the style of Salvador Dalí: melting forms, hyper-real dreamscape, long shadows on barren plains",
  "Magritte": "painted in the style of Magritte: deadpan surrealism, floating objects, calm sky and bowler hats",
  "Hokusai": "made as a Japanese ukiyo-e woodblock print in the style of Hokusai: flat colour, bold outline, Prussian blue",
  "Basquiat": "painted in the style of Basquiat: raw neo-expressionist scrawl, crowns, skull-like faces, frantic colour",
  "Keith Haring": "painted in the style of Keith Haring: bold black outline figures, radiant lines, dancing pop energy",
  "Tamara de Lempicka": "painted in the style of Tamara de Lempicka: Art Deco glamour, polished metallic curves, cool luxury",
  "Leonardo": "painted in the style of Leonardo da Vinci: soft sfumato, mysterious smiles, hazy blue landscape",
  "Munch": "painted in the style of Edvard Munch: Expressionist swirling lines, anguished faces, blood-red skies",
  "Studio Ghibli": "painted in the style of a Studio Ghibli film: soft watercolour backgrounds, warm wonder, gentle anime faces",
  "Byzantine mosaic": "rendered as a Byzantine gold mosaic: glittering tesserae, flat haloed figures, rich jewel colour",
  "Pre-Raphaelites": "painted in the style of the Pre-Raphaelites: jewel colour, rich detail, dreamy medieval romance",
  "Norman Rockwell": "painted in the style of Norman Rockwell: warm American storytelling illustration, affectionate humour, crisp detail",
  "Hergé": "drawn in the ligne claire style of Hergé: clean even line, flat colour, adventure comic",
  "clothes vs. body": "clothes as architecture for the body beneath",
  "editorial vs. commercial": "editorial vision against commercial demand",
  "dressed vs. undone": "dressed to a point then deliberately undone",
  "camera vs. mirror": "performing for the camera or only for the mirror",
  "season vs. off-season": "in season and already moving toward what comes next",
  "designer vs. street": "designer language spoken back in street terms",
  "front row vs. backstage": "the front row watching what backstage already knows",
  "beauty vs. bizarre": "beauty pushed one degree past into the bizarre",
  "high fashion vs. wearable": "high fashion translated into something almost wearable",
  "styled vs. raw": "styled to the edge of raw",
  "model vs. character": "the model dissolving into the character",
  "motion vs. pose": "motion caught and held as pose",
  "haute couture vs. ready-to-wear": "the couture ideal against ready-to-wear reality",
  "collection vs. single look": "the collection distilled into one single look",
  "luxury vs. accessible": "luxury pressed against what is actually accessible",
  "theatrical vs. minimal": "theatrical excess against radical minimalism",
  "body vs. silhouette": "the body against the silhouette it makes",
  "moment vs. campaign": "the unrepeatable moment against the manufactured campaign",
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
  "known vs. unrecognised": "the face in the photograph that no one can name",
  "held vs. released": "what the archive keeps and what it lets go",
  "the face given vs. the face kept": "what was offered to the photographer and what was withheld",
  "real vs. impossible": "the real and the impossible occupying the same frame",
  "waking vs. dreaming": "waking logic pressed against dream logic in the same moment",
  "gravity vs. float": "gravity abandoned and the body discovering what comes after",
  "inside vs. outside": "inside and outside folded into the same space",
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
  "seen vs. invisible": "seen by the right people and invisible to everyone else",
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
  "known vs. unknown": "the known world at the edge of the completely unknown",
  "wonder vs. danger": "wonder and the danger that makes it real",
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
  "love vs. longing": "the presence that still feels like absence",
  "given vs. received": "the act of giving and the weight of receiving",
  "said vs. unsaid": "the words the gesture carried instead",
  "romantic vs. real": "the valentine and the person who gave it",
  "expectation vs. presence": "the occasion imagined and the evening that actually happened",
  "desire vs. fear": "wanting and not knowing what comes after wanting",
  "sweet vs. bitter": "the chocolate and the aftertaste",
  "public vs. private love": "love performed and love kept",
  "gesture vs. feeling": "the roses and what they stood in for",
  "passion vs. comfort": "the fire and what comes after the fire",
  "new vs. familiar love": "the first time and the thousandth time",
  "the card vs. the truth": "what was written and what was meant",
  "child vs. adult": "who you were when she held you and who you are now",
  "remembered vs. present": "the mother in the memory and the person in the room",
  "gratitude vs. guilt": "thank you and I’m sorry in the same breath",
  "love vs. time": "what the years do to love and what love does to years",
  "the mother vs. the woman": "the role and the person beneath the role",
  "sacrifice vs. self": "what was given up and what that cost",
  "held vs. let go": "held back from the sea and almost letting go",
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
  "tradition vs. change": "the tradition and the change that threatens or renews it",
  "roots vs. future": "where you came from and where you’re going",
  "national vs. personal": "the history of a country and the history of a family",
  "the table vs. who is missing": "every chair that is filled and the one that isn’t",
  "warmth vs. obligation": "showing up because you want to and showing up because you must",
  "feast vs. famine": "the abundance on one table and what it means",
  "family vs. chosen family": "the table you were born to and the one you chose",
  "home vs. displacement": "the place the holiday imagines and the place some people can’t return to",
  "costume vs. self": "who you are under the halloween mask",
  "fear vs. delight": "the scare and the pleasure of the scare",
  "trick vs. treat": "the threat and the sweetness",
  "dead vs. alive": "the line the holiday plays with",
  "sacred vs. spectacle": "the old meaning and the costume party it became",
  "grief vs. celebration": "the same photograph meaning different things",
  "here vs. gone": "the person remembered on the altar and the fact of their absence",
  "the living vs. the dead": "the two sides of the marigold path",
  "colour vs. darkness": "the brightness of dia de los muertos against what it mourns",
  "magic vs. commercial": "the wonder and the receipt",
  "giving vs. receiving": "the gift and who it was really for",
  "sacred vs. secular": "the meaning kept and the meaning lost",
  "expectation vs. reality": "the christmas morning and the christmas morning imagined",
  "home vs. elsewhere": "the place you left and the place you can’t find",
  "what was vs. what will be": "the year closing and the year that hasn’t started yet",
  "hope vs. resignation": "the difference between one more cup and the last",
  "the countdown vs. the silence after": "midnight and the twelve seconds that follow",
  "the last vs. the first": "the last moment of the year and the first",
  "gift vs. gratitude": "the sweet given and the feeling it carries",
  "the diya vs. the dark": "the single flame and the darkness it addresses",
  "family vs. change": "the table that stays the same and the people who don’t",
  "tradition vs. modernity": "the old way and the new year",
  "the family table vs. the world outside": "reunion and the world that made reunion necessary",
  "red vs. the ordinary": "the colour of luck against everything that isn’t",
  "celebration vs. longing": "the new year and the people not at the table",
  "the year ending vs. the year beginning": "the hinge between what was and what might be",
  "home vs. diaspora": "chinese new year in the country you left and the country you’re in"
};
