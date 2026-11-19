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
    "sub": "Sparks, Slow Dances & Stolen Kisses",
    "color": "#8b1a4a",
    "tensions": [
      "spark vs. slow burn",
      "first look vs. last dance",
      "bold vs. tender",
      "playful vs. passionate",
      "the almost vs. the finally",
      "chasing vs. catching",
      "daring vs. dreamy",
      "the plan vs. the spark",
      "fire vs. tenderness",
      "champagne vs. rain",
      "you vs. the whole city",
      "love vs. luck",
      "adventure vs. comfort",
      "what if vs. what is",
      "dance vs. kiss"
    ],
    "affinities": {
      "spark vs. slow burn": {
        "locs": [
          "rain-soaked street night neon reflections",
          "alleyway rain single lamp",
          "Paris street rain autumn night"
        ],
        "poses": [
          "both running through the rain, laughing, sharing one coat",
          "one twirling the other under the neon, both soaked and beaming",
          "both kissing under the glow, rain falling around them"
        ],
        "looks": [
          "leather jacket and slip dress each",
          "long coats and glistening hair each",
          "bright raincoats over evening wear each"
        ]
      },
      "first look vs. last dance": {
        "locs": [
          "night train compartment moving",
          "jazz club late night last song",
          "night market closing stalls"
        ],
        "poses": [
          "both leaning out of a train window, hair streaming",
          "both dancing close to the last song, eyes locked",
          "both sharing a toffee apple, laughing"
        ],
        "looks": [
          "vintage dramatic outfit each",
          "leather jacket and knit scarf each",
          "simple dark clothes, stylish each"
        ]
      },
      "bold vs. tender": {
        "locs": [
          "lighthouse edge storm approaching",
          "cliff edge storm sea below",
          "summer thunderstorm porch lit"
        ],
        "poses": [
          "both facing the wind, hands clasped, exhilarated",
          "both kissing as the storm rolls in",
          "both dancing barefoot in the rain on the porch"
        ],
        "looks": [
          "wind-whipped coats each",
          "white shirts soaked, hair blown each",
          "long dark coats each"
        ]
      },
      "playful vs. passionate": {
        "locs": [
          "fire escape night city below",
          "rooftop pool city lights reflection midnight",
          "car park top level night city view"
        ],
        "poses": [
          "both slow dancing, the lights spread out behind them",
          "both leaning together on the edge, toasting the skyline",
          "one resting a head on the other's shoulder, both smiling"
        ],
        "looks": [
          "evening wear under oversized coats each",
          "dark dresses and tailored jackets each",
          "silk shirts and leather jackets each"
        ]
      },
      "the almost vs. the finally": {
        "locs": [
          "empty restaurant after closing one candle",
          "library closed after hours one lamp",
          "museum closed after hours one guard lamp"
        ],
        "poses": [
          "both slow dancing, no music needed",
          "one reading aloud, the other grinning at the voice",
          "both sitting close, sharing one dessert and two spoons"
        ],
        "looks": [
          "formal evening clothes, bow tie undone each",
          "vintage dress and tuxedo each",
          "dark elegant coat over evening wear each"
        ]
      },
      "chasing vs. catching": {
        "locs": [
          "phone box rain night neon",
          "bridge night fog below",
          "rain-soaked street night neon reflections"
        ],
        "poses": [
          "one twirling the other under the neon, both soaked and beaming",
          "both kissing under the glow, rain falling around them",
          "both splashing through puddles, hand in hand"
        ],
        "looks": [
          "long coats and glistening hair each",
          "bright raincoats over evening wear each",
          "leather jacket and slip dress each"
        ]
      },
      "daring vs. dreamy": {
        "locs": [
          "Vespa ride on a cobbled square at dusk",
          "moonlit fountain in a Rome piazza",
          "balcony over a Venetian canal"
        ],
        "poses": [
          "both on a Vespa, one holding on tight, laughing",
          "both tossing coins into the fountain, grinning",
          "both dancing a tango, faces inches apart"
        ],
        "looks": [
          "linen shirts and silk scarves each",
          "summer dresses and tailored shirts each",
          "chic black tango outfits each"
        ]
      },
      "the plan vs. the spark": {
        "locs": [
          "theatre wings backstage curtain",
          "grand ballroom, chandelier still lit",
          "empty cinema, last showing"
        ],
        "poses": [
          "one reading aloud, the other grinning at the voice",
          "both sitting close, sharing one dessert and two spoons",
          "both sneaking a kiss behind the curtain"
        ],
        "looks": [
          "vintage dress and tuxedo each",
          "dark elegant coat over evening wear each",
          "formal evening clothes, bow tie undone each"
        ]
      },
      "fire vs. tenderness": {
        "locs": [
          "midnight garden with moonlit statues",
          "lighthouse edge storm approaching",
          "cliff edge storm sea below"
        ],
        "poses": [
          "both kissing as the storm rolls in",
          "both dancing barefoot in the rain on the porch",
          "both laughing, hair whipped, coats billowing"
        ],
        "looks": [
          "white shirts soaked, hair blown each",
          "long dark coats each",
          "wind-whipped coats each"
        ]
      },
      "champagne vs. rain": {
        "locs": [
          "rooftop water tower night city",
          "rooftop city edge at midnight",
          "champagne bar on a rooftop terrace"
        ],
        "poses": [
          "both leaning together on the edge, toasting the skyline",
          "one resting a head on the other's shoulder, both smiling",
          "both laughing, mid-spin, coats flying"
        ],
        "looks": [
          "dark dresses and tailored jackets each",
          "silk shirts and leather jackets each",
          "evening wear under oversized coats each"
        ]
      },
      "you vs. the whole city": {
        "locs": [
          "fire escape night city below",
          "rooftop pool city lights reflection midnight",
          "car park top level night city view"
        ],
        "poses": [
          "one resting a head on the other's shoulder, both smiling",
          "both laughing, mid-spin, coats flying",
          "both slow dancing, the lights spread out behind them"
        ],
        "looks": [
          "silk shirts and leather jackets each",
          "evening wear under oversized coats each",
          "dark dresses and tailored jackets each"
        ]
      },
      "love vs. luck": {
        "locs": [
          "tango floor in a candlelit cellar club",
          "Vespa ride on a cobbled square at dusk",
          "moonlit fountain in a Rome piazza"
        ],
        "poses": [
          "both tossing coins into the fountain, grinning",
          "both dancing a tango, faces inches apart",
          "one serenading from the balcony, the other swooning delightedly"
        ],
        "looks": [
          "summer dresses and tailored shirts each",
          "chic black tango outfits each",
          "linen shirts and silk scarves each"
        ]
      },
      "adventure vs. comfort": {
        "locs": [
          "hotel corridor single light night",
          "hotel room, morning light, rumpled sheets",
          "hotel balcony at sunrise with croissants"
        ],
        "poses": [
          "both tangled in the sheets, laughing over breakfast",
          "one feeding the other a strawberry, both smiling",
          "both leaning on the balcony, wrapped in robes, sipping coffee"
        ],
        "looks": [
          "silk robe and rumpled shirt each",
          "white shirts and bare feet each",
          "cosy knit and silk pyjamas each"
        ]
      },
      "what if vs. what is": {
        "locs": [
          "swimming pool at night, lit from below",
          "empty restaurant after closing one candle",
          "library closed after hours one lamp"
        ],
        "poses": [
          "both sitting close, sharing one dessert and two spoons",
          "both sneaking a kiss behind the curtain",
          "both slow dancing, no music needed"
        ],
        "looks": [
          "dark elegant coat over evening wear each",
          "formal evening clothes, bow tie undone each",
          "vintage dress and tuxedo each"
        ]
      },
      "dance vs. kiss": {
        "locs": [
          "train platform at golden hour",
          "boardwalk fairy lights at night",
          "night train compartment moving"
        ],
        "poses": [
          "both dancing close to the last song, eyes locked",
          "both sharing a toffee apple, laughing",
          "one pulling the other into a kiss between the stalls"
        ],
        "looks": [
          "leather jacket and knit scarf each",
          "simple dark clothes, stylish each",
          "vintage dramatic outfit each"
        ]
      }
    },
    "locs": [
      "rain-soaked street night neon reflections",
      "alleyway rain single lamp",
      "Paris street rain autumn night",
      "phone box rain night neon",
      "bridge night fog below",
      "fire escape night city below",
      "rooftop pool city lights reflection midnight",
      "car park top level night city view",
      "rooftop water tower night city",
      "rooftop city edge at midnight",
      "champagne bar on a rooftop terrace",
      "empty restaurant after closing one candle",
      "library closed after hours one lamp",
      "museum closed after hours one guard lamp",
      "theatre wings backstage curtain",
      "grand ballroom, chandelier still lit",
      "empty cinema, last showing",
      "swimming pool at night, lit from below",
      "hotel corridor single light night",
      "hotel room, morning light, rumpled sheets",
      "hotel balcony at sunrise with croissants",
      "lighthouse edge storm approaching",
      "cliff edge storm sea below",
      "summer thunderstorm porch lit",
      "midnight garden with moonlit statues",
      "night train compartment moving",
      "jazz club late night last song",
      "night market closing stalls",
      "train platform at golden hour",
      "boardwalk fairy lights at night",
      "Vespa ride on a cobbled square at dusk",
      "moonlit fountain in a Rome piazza",
      "balcony over a Venetian canal",
      "tango floor in a candlelit cellar club"
    ],
    "poses": [
      "both running through the rain, laughing, sharing one coat",
      "one twirling the other under the neon, both soaked and beaming",
      "both kissing under the glow, rain falling around them",
      "both splashing through puddles, hand in hand",
      "both slow dancing, the lights spread out behind them",
      "both leaning together on the edge, toasting the skyline",
      "one resting a head on the other's shoulder, both smiling",
      "both laughing, mid-spin, coats flying",
      "both slow dancing, no music needed",
      "one reading aloud, the other grinning at the voice",
      "both sitting close, sharing one dessert and two spoons",
      "both sneaking a kiss behind the curtain",
      "both tangled in the sheets, laughing over breakfast",
      "one feeding the other a strawberry, both smiling",
      "both leaning on the balcony, wrapped in robes, sipping coffee",
      "both dancing in the corridor, shoes in their hands",
      "both facing the wind, hands clasped, exhilarated",
      "both kissing as the storm rolls in",
      "both dancing barefoot in the rain on the porch",
      "both laughing, hair whipped, coats billowing",
      "both leaning out of a train window, hair streaming",
      "both dancing close to the last song, eyes locked",
      "both sharing a toffee apple, laughing",
      "one pulling the other into a kiss between the stalls",
      "both on a Vespa, one holding on tight, laughing",
      "both tossing coins into the fountain, grinning",
      "both dancing a tango, faces inches apart",
      "one serenading from the balcony, the other swooning delightedly"
    ],
    "looks": [
      "leather jacket and slip dress each",
      "long coats and glistening hair each",
      "bright raincoats over evening wear each",
      "evening wear under oversized coats each",
      "dark dresses and tailored jackets each",
      "silk shirts and leather jackets each",
      "formal evening clothes, bow tie undone each",
      "vintage dress and tuxedo each",
      "dark elegant coat over evening wear each",
      "silk robe and rumpled shirt each",
      "white shirts and bare feet each",
      "cosy knit and silk pyjamas each",
      "wind-whipped coats each",
      "white shirts soaked, hair blown each",
      "long dark coats each",
      "vintage dramatic outfit each",
      "leather jacket and knit scarf each",
      "simple dark clothes, stylish each",
      "linen shirts and silk scarves each",
      "summer dresses and tailored shirts each",
      "chic black tango outfits each"
    ],
    "promptSuffix": "Colour grade: rich saturated cinematic colour: neon reflections, warm lamplight, blue-hour glow."
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
          "corner shop theatrical flourish fluorescent"
        ],
        "poses": [
          "one delivering a speech to the other, who is the only audience",
          "both frozen mid-gesture, arms flung wide",
          "one sinking to their knees in mock-grandeur, the other clapping"
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
          "car park rooftop theatrical showdown empty night"
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
          "ice cream van forecourt theatrical delight",
          "lift lobby theatrical pause before doors open"
        ],
        "poses": [
          "both walking in slow motion, hair flying, no wind",
          "one pointing dramatically, the other quite indifferent",
          "both belting a duet to an imaginary audience, hands clasped"
        ],
        "looks": [
          "opera costume in full each",
          "Victorian ball gown and top hat each",
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
          "one sinking to their knees in mock-grandeur, the other clapping",
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
          "both belting a duet to an imaginary audience, hands clasped",
          "one dipping the other in a showy ballroom dip, both laughing"
        ],
        "looks": [
          "Victorian ball gown and top hat each",
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
          "one sinking to their knees in mock-grandeur, the other clapping",
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
          "railway platform theatrical flourish overplayed",
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
          "karaoke bar theatrical duet fluorescent"
        ],
        "poses": [
          "both belting a duet to an imaginary audience, hands clasped",
          "one dipping the other in a showy ballroom dip, both laughing",
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
          "corner shop theatrical flourish fluorescent",
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
      "corner shop theatrical flourish fluorescent",
      "post office queue theatrical monologue",
      "department store escalator theatrical descent",
      "betting shop theatrical reaction to result",
      "chip shop 11pm theatrical romance counter",
      "newsagent morning theatrical significance ordinary",
      "petrol station forecourt dramatic speech nobody watching night",
      "bus stop theatrical declaration nobody waiting",
      "car park rooftop theatrical showdown empty night",
      "train carriage theatrical aside fellow passengers ignore",
      "airport arrivals hall dramatic reunion theatrical",
      "motorway services dramatic tableau ordinary setting",
      "underpass theatrical freeze frame urban",
      "railway platform theatrical flourish overplayed",
      "bus upper deck theatrical speech empty",
      "rooftop car park theatrical finale night",
      "laundromat 3am theatrical monologue washing machines",
      "ice cream van forecourt theatrical delight",
      "lift lobby theatrical pause before doors open",
      "office corridor dramatic walk away slow motion",
      "phone box raining theatrical call dramatic",
      "swimming pool changing room dramatic exit",
      "bowling alley theatrical celebration strike",
      "car wash theatrical moment soap suds",
      "karaoke bar theatrical duet fluorescent",
      "library theatrical whispered intensity quiet",
      "garden centre theatrical flourish among the plants",
      "wedding registry office theatrical entrance late"
    ],
    "poses": [
      "one delivering a speech to the other, who is the only audience",
      "both frozen mid-gesture, arms flung wide",
      "one sinking to their knees in mock-grandeur, the other clapping",
      "both taking an elaborate bow to an empty room",
      "both striking a heroic tableau, chins high",
      "one making a grand exit, the other watching with a raised eyebrow",
      "both embracing as if on a stage, bags dropped",
      "one declaiming to the sky, the other checking a phone",
      "both walking in slow motion, hair flying, no wind",
      "one pointing dramatically, the other quite indifferent",
      "both belting a duet to an imaginary audience, hands clasped",
      "one dipping the other in a showy ballroom dip, both laughing"
    ],
    "looks": [
      "full tuxedo and ball gown each",
      "Shakespearean doublet and ruff each",
      "clown costume and full makeup each",
      "knight's armour and princess gown each",
      "Roman toga and laurel wreath each",
      "wedding dress and morning suit each",
      "opera costume in full each",
      "Victorian ball gown and top hat each",
      "ballet tutu and tights each",
      "everyday clothes worn with maximum theatrical intensity each"
    ],
    "promptSuffix": "Colour grade: the specific contrast of theatrical drama in mundane light — fluorescent supermarket, petrol station sodium, laundromat neon. Heightened emotion in ordinary space."
  },
  {
    "id": "mystery",
    "name": "THE MYSTERY",
    "sub": "Noir, Capers & Whodunits",
    "color": "#5a3a5a",
    "tensions": [
      "clue vs. hunch",
      "sleuth vs. suspect",
      "glamour vs. caper",
      "alibi vs. instinct",
      "red herring vs. real lead",
      "disguise vs. truth",
      "curtain up vs. curtain down",
      "whisper vs. gasp",
      "trench coat vs. tuxedo",
      "riddle vs. reveal",
      "secret door vs. grand entrance",
      "fog vs. spotlight",
      "partner vs. rival",
      "puzzle vs. plot twist",
      "shadow vs. spark",
      "magnifying glass vs. champagne",
      "chase vs. clue",
      "masks vs. smiles",
      "midnight vs. mischief",
      "whodunit vs. who-cares"
    ],
    "locs": [
      "ruined manor house exterior",
      "old clock tower interior",
      "whodunit manor hall chandelier",
      "library at night, rolling ladder and a window",
      "country house library, fire crackling",
      "hedge maze, lantern-lit",
      "walled garden, ivy and a locked gate",
      "locked-room puzzle, a floor plan on the wall",
      "village pub, firelit and cosy",
      "attic trapdoor, a ladder and a lamp",
      "detective agency door frosted glass",
      "private eye office desk",
      "smoke-filled bar information",
      "film noir street lamp rain",
      "1940s diner counter night",
      "jazz club back room door",
      "speakeasy behind bookcase",
      "foggy London street with a gaslight",
      "evidence room, corkboard of clues",
      "dockside warehouse, crates and fog",
      "museum after hours case lit",
      "jewel vault with criss-crossing lasers",
      "opera house box seats",
      "masquerade ballroom",
      "casino back room, green baize table",
      "art gallery after hours, one painting missing",
      "grand hotel penthouse with a view of the city",
      "candlelit cellar steps",
      "secret passage bookcase entrance",
      "photography darkroom red light",
      "print room old newspaper rotary",
      "archive stacks, boxes to the ceiling",
      "radio station at night, ON AIR sign glowing",
      "Victorian factory floor, shafts of light",
      "theatre balcony, velvet and shadow",
      "empty motel parking lot night",
      "Orient Express dining car at night",
      "boat gliding along the Seine at night",
      "hall of mirrors at a fairground",
      "lighthouse keeper's cottage, lamp glowing",
      "grand old hotel corridor, red carpet"
    ],
    "poses": [
      "both peering through a magnifying glass, delighted",
      "one pointing dramatically at an invisible culprit, the other laughing",
      "both tiptoeing, hushing each other, giggling",
      "both toasting a solved puzzle with a sherry",
      "both leaning on a lamp post, trench coats blowing, smirking",
      "both leaning over a desk, grinning at a map of pins and string",
      "both striding forward, coats flying, confident",
      "one holding up a clue, the other raising an eyebrow, impressed",
      "both lowering themselves through lasers, giggling",
      "both in masks, mid-waltz, eyes sparkling",
      "one holding up a stolen jewel, the other pretending to scold",
      "both toasting at the table, cool as ice",
      "both leaning on a shelf, pulling it open to reveal a secret",
      "one picking a lock, the other keeping watch with a grin",
      "both reading a clue by candlelight, heads together",
      "both ducking behind a pillar, trying not to laugh",
      "both raising a glass, clinking, eyes twinkling",
      "both leaning over the rail, wind in their hair",
      "both peeking around a corner, matching smirks",
      "both striking dramatic poses at the end of the case"
    ],
    "looks": [
      "tweed jacket and tartan skirt each",
      "smoking jackets and silk gowns each",
      "country-house evening wear each",
      "trench coat and fedora each",
      "fitted dark coat and slim trousers each",
      "noir period suit and dress each",
      "black tie and sequin gown each",
      "masquerade masks and evening wear each",
      "sleek cat-burglar black each, with glitter",
      "archivist's cardigan and spectacles each",
      "dark coat and fingerless gloves each",
      "scholarly layers and a loosened scarf each",
      "1930s travel suit and cloche hat each",
      "elegant coats and gloves each",
      "tuxedo and evening gown each"
    ],
    "affinities": {
      "clue vs. hunch": {
        "locs": [
          "candlelit cellar steps",
          "secret passage bookcase entrance",
          "photography darkroom red light"
        ],
        "poses": [
          "both leaning on a shelf, pulling it open to reveal a secret",
          "one picking a lock, the other keeping watch with a grin",
          "both reading a clue by candlelight, heads together"
        ],
        "looks": [
          "archivist's cardigan and spectacles each",
          "dark coat and fingerless gloves each",
          "scholarly layers and a loosened scarf each"
        ]
      },
      "sleuth vs. suspect": {
        "locs": [
          "detective agency door frosted glass",
          "private eye office desk",
          "smoke-filled bar information"
        ],
        "poses": [
          "both leaning on a lamp post, trench coats blowing, smirking",
          "both leaning over a desk, grinning at a map of pins and string",
          "both striding forward, coats flying, confident"
        ],
        "looks": [
          "trench coat and fedora each",
          "fitted dark coat and slim trousers each",
          "noir period suit and dress each"
        ]
      },
      "glamour vs. caper": {
        "locs": [
          "museum after hours case lit",
          "jewel vault with criss-crossing lasers",
          "opera house box seats"
        ],
        "poses": [
          "both lowering themselves through lasers, giggling",
          "both in masks, mid-waltz, eyes sparkling",
          "one holding up a stolen jewel, the other pretending to scold"
        ],
        "looks": [
          "black tie and sequin gown each",
          "masquerade masks and evening wear each",
          "sleek cat-burglar black each, with glitter"
        ]
      },
      "alibi vs. instinct": {
        "locs": [
          "ruined manor house exterior",
          "old clock tower interior",
          "whodunit manor hall chandelier"
        ],
        "poses": [
          "both peering through a magnifying glass, delighted",
          "one pointing dramatically at an invisible culprit, the other laughing",
          "both tiptoeing, hushing each other, giggling"
        ],
        "looks": [
          "tweed jacket and tartan skirt each",
          "smoking jackets and silk gowns each",
          "country-house evening wear each"
        ]
      },
      "red herring vs. real lead": {
        "locs": [
          "print room old newspaper rotary",
          "archive stacks, boxes to the ceiling",
          "radio station at night, ON AIR sign glowing"
        ],
        "poses": [
          "one picking a lock, the other keeping watch with a grin",
          "both reading a clue by candlelight, heads together",
          "both ducking behind a pillar, trying not to laugh"
        ],
        "looks": [
          "dark coat and fingerless gloves each",
          "scholarly layers and a loosened scarf each",
          "archivist's cardigan and spectacles each"
        ]
      },
      "disguise vs. truth": {
        "locs": [
          "masquerade ballroom",
          "casino back room, green baize table",
          "art gallery after hours, one painting missing"
        ],
        "poses": [
          "both in masks, mid-waltz, eyes sparkling",
          "one holding up a stolen jewel, the other pretending to scold",
          "both toasting at the table, cool as ice"
        ],
        "looks": [
          "masquerade masks and evening wear each",
          "sleek cat-burglar black each, with glitter",
          "black tie and sequin gown each"
        ]
      },
      "curtain up vs. curtain down": {
        "locs": [
          "grand hotel penthouse with a view of the city",
          "museum after hours case lit",
          "jewel vault with criss-crossing lasers"
        ],
        "poses": [
          "one holding up a stolen jewel, the other pretending to scold",
          "both toasting at the table, cool as ice",
          "both lowering themselves through lasers, giggling"
        ],
        "looks": [
          "sleek cat-burglar black each, with glitter",
          "black tie and sequin gown each",
          "masquerade masks and evening wear each"
        ]
      },
      "whisper vs. gasp": {
        "locs": [
          "Victorian factory floor, shafts of light",
          "theatre balcony, velvet and shadow",
          "candlelit cellar steps"
        ],
        "poses": [
          "both reading a clue by candlelight, heads together",
          "both ducking behind a pillar, trying not to laugh",
          "both leaning on a shelf, pulling it open to reveal a secret"
        ],
        "looks": [
          "scholarly layers and a loosened scarf each",
          "archivist's cardigan and spectacles each",
          "dark coat and fingerless gloves each"
        ]
      },
      "trench coat vs. tuxedo": {
        "locs": [
          "film noir street lamp rain",
          "1940s diner counter night",
          "jazz club back room door"
        ],
        "poses": [
          "both leaning over a desk, grinning at a map of pins and string",
          "both striding forward, coats flying, confident",
          "one holding up a clue, the other raising an eyebrow, impressed"
        ],
        "looks": [
          "fitted dark coat and slim trousers each",
          "noir period suit and dress each",
          "trench coat and fedora each"
        ]
      },
      "riddle vs. reveal": {
        "locs": [
          "library at night, rolling ladder and a window",
          "country house library, fire crackling",
          "hedge maze, lantern-lit"
        ],
        "poses": [
          "one pointing dramatically at an invisible culprit, the other laughing",
          "both tiptoeing, hushing each other, giggling",
          "both toasting a solved puzzle with a sherry"
        ],
        "looks": [
          "smoking jackets and silk gowns each",
          "country-house evening wear each",
          "tweed jacket and tartan skirt each"
        ]
      },
      "secret door vs. grand entrance": {
        "locs": [
          "secret passage bookcase entrance",
          "photography darkroom red light",
          "print room old newspaper rotary"
        ],
        "poses": [
          "both ducking behind a pillar, trying not to laugh",
          "both leaning on a shelf, pulling it open to reveal a secret",
          "one picking a lock, the other keeping watch with a grin"
        ],
        "looks": [
          "archivist's cardigan and spectacles each",
          "dark coat and fingerless gloves each",
          "scholarly layers and a loosened scarf each"
        ]
      },
      "fog vs. spotlight": {
        "locs": [
          "empty motel parking lot night",
          "Orient Express dining car at night",
          "boat gliding along the Seine at night"
        ],
        "poses": [
          "both raising a glass, clinking, eyes twinkling",
          "both leaning over the rail, wind in their hair",
          "both peeking around a corner, matching smirks"
        ],
        "looks": [
          "1930s travel suit and cloche hat each",
          "elegant coats and gloves each",
          "tuxedo and evening gown each"
        ]
      },
      "partner vs. rival": {
        "locs": [
          "speakeasy behind bookcase",
          "foggy London street with a gaslight",
          "evidence room, corkboard of clues"
        ],
        "poses": [
          "both striding forward, coats flying, confident",
          "one holding up a clue, the other raising an eyebrow, impressed",
          "both leaning on a lamp post, trench coats blowing, smirking"
        ],
        "looks": [
          "noir period suit and dress each",
          "trench coat and fedora each",
          "fitted dark coat and slim trousers each"
        ]
      },
      "puzzle vs. plot twist": {
        "locs": [
          "walled garden, ivy and a locked gate",
          "locked-room puzzle, a floor plan on the wall",
          "village pub, firelit and cosy"
        ],
        "poses": [
          "both tiptoeing, hushing each other, giggling",
          "both toasting a solved puzzle with a sherry",
          "both peering through a magnifying glass, delighted"
        ],
        "looks": [
          "country-house evening wear each",
          "tweed jacket and tartan skirt each",
          "smoking jackets and silk gowns each"
        ]
      },
      "shadow vs. spark": {
        "locs": [
          "hall of mirrors at a fairground",
          "lighthouse keeper's cottage, lamp glowing",
          "grand old hotel corridor, red carpet"
        ],
        "poses": [
          "both leaning over the rail, wind in their hair",
          "both peeking around a corner, matching smirks",
          "both striking dramatic poses at the end of the case"
        ],
        "looks": [
          "elegant coats and gloves each",
          "tuxedo and evening gown each",
          "1930s travel suit and cloche hat each"
        ]
      },
      "magnifying glass vs. champagne": {
        "locs": [
          "opera house box seats",
          "masquerade ballroom",
          "casino back room, green baize table"
        ],
        "poses": [
          "both toasting at the table, cool as ice",
          "both lowering themselves through lasers, giggling",
          "both in masks, mid-waltz, eyes sparkling"
        ],
        "looks": [
          "black tie and sequin gown each",
          "masquerade masks and evening wear each",
          "sleek cat-burglar black each, with glitter"
        ]
      },
      "chase vs. clue": {
        "locs": [
          "dockside warehouse, crates and fog",
          "detective agency door frosted glass",
          "private eye office desk"
        ],
        "poses": [
          "one holding up a clue, the other raising an eyebrow, impressed",
          "both leaning on a lamp post, trench coats blowing, smirking",
          "both leaning over a desk, grinning at a map of pins and string"
        ],
        "looks": [
          "trench coat and fedora each",
          "fitted dark coat and slim trousers each",
          "noir period suit and dress each"
        ]
      },
      "masks vs. smiles": {
        "locs": [
          "empty motel parking lot night",
          "Orient Express dining car at night",
          "boat gliding along the Seine at night"
        ],
        "poses": [
          "both peeking around a corner, matching smirks",
          "both striking dramatic poses at the end of the case",
          "both raising a glass, clinking, eyes twinkling"
        ],
        "looks": [
          "tuxedo and evening gown each",
          "1930s travel suit and cloche hat each",
          "elegant coats and gloves each"
        ]
      },
      "midnight vs. mischief": {
        "locs": [
          "hall of mirrors at a fairground",
          "lighthouse keeper's cottage, lamp glowing",
          "grand old hotel corridor, red carpet"
        ],
        "poses": [
          "both striking dramatic poses at the end of the case",
          "both raising a glass, clinking, eyes twinkling",
          "both leaning over the rail, wind in their hair"
        ],
        "looks": [
          "1930s travel suit and cloche hat each",
          "elegant coats and gloves each",
          "tuxedo and evening gown each"
        ]
      },
      "whodunit vs. who-cares": {
        "locs": [
          "attic trapdoor, a ladder and a lamp",
          "ruined manor house exterior",
          "old clock tower interior"
        ],
        "poses": [
          "both toasting a solved puzzle with a sherry",
          "both peering through a magnifying glass, delighted",
          "one pointing dramatically at an invisible culprit, the other laughing"
        ],
        "looks": [
          "tweed jacket and tartan skirt each",
          "smoking jackets and silk gowns each",
          "country-house evening wear each"
        ]
      }
    },
    "promptPrefix": "Stylish film-noir photograph, film grain, rich shadows, high-contrast lighting, an air of glamorous intrigue — ",
    "promptSuffix": "Render with film noir visual language: deep blacks, practical light sources, fog or haze where it suits. The mood: a stylish caper, not a horror film.",
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
    "id": "wedding",
    "name": "THE WEDDING",
    "sub": "The Vow, the Risk & the Moment Before",
    "color": "#a0785a",
    "tensions": [
      "the elopement vs. the ceremony",
      "the wrong person vs. the right moment",
      "the vow vs. the dance floor",
      "together vs. everyone watching",
      "the dress vs. the marriage",
      "love vs. confetti",
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
      "the vow vs. the dance floor": {
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
          "hotel suite morning after soft light"
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
      "love vs. confetti": {
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
      "hotel suite morning after soft light",
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
      "surrender vs. splash",
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
      "surrender vs. splash": {
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
          "both walking together across the white, shadows long",
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
          "both walking together across the white, shadows long"
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
      "both walking together across the white, shadows long",
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
      "snug vs. brave",
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
      "Russia Baikal clear ice walking",
      "Finland ice lake sauna shore",
      "Norway frozen fjord reflection",
      "Sweden frozen archipelago island",
      "Faroe Islands frozen waterfall",
      "Scotland winter glen frozen burn",
      "Maine coast harbor frozen",
      "Patagonia winter wind ice lake",
      "tundra flat under white sky",
      "Svalbard glacier calving edge",
      "Iceland black sand and snow",
      "Greenland ice sheet horizon",
      "Alaska Brooks Range winter",
      "Canada Yukon wilderness freeze",
      "Siberian taiga frozen river",
      "Antarctic research station exterior",
      "Sub-Antarctic island storm snow",
      "Lapland reindeer forest snow",
      "Vermont maple forest snow",
      "Japan Hokkaido snow forest",
      "Japan Aomori snow trees",
      "South Korea Jiri mountain snow",
      "Slovenia Triglav winter snow",
      "Czech Krkonose winter forest",
      "snowfield before storm dark sky",
      "ski resort predawn gondola loading",
      "Colorado high alpine winter meadow",
      "Utah Bryce Canyon snow hoodoos",
      "Spain Pyrenees winter pass",
      "Austria Dachstein glacier winter",
      "Switzerland Jungfrau winter",
      "Italy Dolomites winter ice",
      "Poland Tatra winter ridge",
      "Romania Fagaras winter ridge",
      "Montana big sky winter open",
      "Wyoming Yellowstone winter steam",
      "New Zealand South Island winter",
      "Kazakhstan steppe winter deep",
      "Kyrgyz winter yurt snow",
      "Tibet winter plateau wind",
      "Lesotho highland snow blanket",
      "Drakensberg winter frost dawn",
      "Morocco Atlas snow",
      "Bhutan winter mountain dzong",
      "Pakistan K2 base camp winter",
      "Nepal Thorong La winter crossing",
      "Bulgaria Rila winter monastery",
      "ice hall empty arena",
      "Canada Quebec winter ice hotel",
      "China Harbin ice sculpture"
    ],
    "poses": [
      "both skating hand in hand across the glassy surface",
      "one sliding on their knees toward the other, laughing",
      "both lying flat, listening to it creak",
      "both walking carefully, testing each step, breath steaming",
      "both tiny against the white immensity, hand in hand",
      "both huddled together, backs to the wind",
      "both trudging forward, heads down, roped together",
      "one pointing at the horizon, the other squinting through goggles",
      "both catching flakes on their tongues, laughing",
      "one brushing the powder from the other's hat",
      "both walking arm in arm beneath the heavy branches",
      "both sitting on a log, a flask steaming between them",
      "both carving down the slope side by side, spray flying",
      "both loading onto the lift, laughing, skis crossed",
      "both sitting outside the chalet, wrapped in blankets, hot chocolate in hand",
      "both skiing toward the camera, goggles pushed up",
      "both walking toward the horizon, scarves streaming",
      "both riding a snowmobile, one holding on tight",
      "both sitting by a fire, hands out to the flames",
      "both standing close, breath mingling, wide sky overhead",
      "both bowing their heads, prayer flags snapping around them",
      "both climbing the steps, breath ragged, smiling",
      "both resting against a wall, steaming cups in hand",
      "both standing still, the thin air ringing around them",
      "both laughing, hands pressed to a glowing wall",
      "both posing beside a giant sculpted figure, breath misting",
      "both sipping from glasses carved from the walls",
      "both sliding down a glittering chute, shrieking with joy"
    ],
    "looks": [
      "chunky knit sweaters and skates each",
      "wool coats and fur-trimmed hats each",
      "padded jackets and woolly scarves each",
      "heavy parkas with fur hoods each",
      "insulated expedition suits and goggles each",
      "thick down jackets and balaclavas each",
      "red wool coats and bobble hats each",
      "tartan scarves and long woolly coats each",
      "plaid shirts and padded vests each",
      "colourful ski jackets and salopettes each",
      "retro ski suits and bobble hats each",
      "après-ski sweaters and fur boots each",
      "wool coats and fur hats each",
      "embroidered sheepskin jackets and boots each",
      "heavy knit sweaters and thick scarves each",
      "red wool robes and quilted jackets each",
      "layered woollens and trekking boots each",
      "wool hats and down jackets each",
      "glittering après outfits and furry boots each",
      "long coats and sequinned gloves each",
      "bright winter jackets and thermal hats each"
    ],
    "affinities": {
      "warm vs. frozen": {
        "locs": [
          "ice hall empty arena",
          "Canada Quebec winter ice hotel",
          "China Harbin ice sculpture"
        ],
        "poses": [
          "both laughing, hands pressed to a glowing wall",
          "both posing beside a giant sculpted figure, breath misting",
          "both sipping from glasses carved from the walls"
        ],
        "looks": [
          "glittering après outfits and furry boots each",
          "long coats and sequinned gloves each",
          "bright winter jackets and thermal hats each"
        ]
      },
      "breath vs. stillness": {
        "locs": [
          "tundra flat under white sky",
          "Svalbard glacier calving edge",
          "Iceland black sand and snow"
        ],
        "poses": [
          "both tiny against the white immensity, hand in hand",
          "both huddled together, backs to the wind",
          "both trudging forward, heads down, roped together"
        ],
        "looks": [
          "heavy parkas with fur hoods each",
          "insulated expedition suits and goggles each",
          "thick down jackets and balaclavas each"
        ]
      },
      "snug vs. brave": {
        "locs": [
          "Greenland ice sheet horizon",
          "Alaska Brooks Range winter",
          "Canada Yukon wilderness freeze"
        ],
        "poses": [
          "both huddled together, backs to the wind",
          "both trudging forward, heads down, roped together",
          "one pointing at the horizon, the other squinting through goggles"
        ],
        "looks": [
          "insulated expedition suits and goggles each",
          "thick down jackets and balaclavas each",
          "heavy parkas with fur hoods each"
        ]
      },
      "motion vs. ice": {
        "locs": [
          "frozen lake at first light crack pattern",
          "Russia Baikal clear ice walking",
          "Finland ice lake sauna shore"
        ],
        "poses": [
          "both skating hand in hand across the glassy surface",
          "one sliding on their knees toward the other, laughing",
          "both lying flat, listening to it creak"
        ],
        "looks": [
          "chunky knit sweaters and skates each",
          "wool coats and fur-trimmed hats each",
          "padded jackets and woolly scarves each"
        ]
      },
      "alive vs. still": {
        "locs": [
          "Lapland reindeer forest snow",
          "Vermont maple forest snow",
          "Japan Hokkaido snow forest"
        ],
        "poses": [
          "both catching flakes on their tongues, laughing",
          "one brushing the powder from the other's hat",
          "both walking arm in arm beneath the heavy branches"
        ],
        "looks": [
          "red wool coats and bobble hats each",
          "tartan scarves and long woolly coats each",
          "plaid shirts and padded vests each"
        ]
      },
      "soft vs. brittle": {
        "locs": [
          "Japan Aomori snow trees",
          "South Korea Jiri mountain snow",
          "Slovenia Triglav winter snow"
        ],
        "poses": [
          "one brushing the powder from the other's hat",
          "both walking arm in arm beneath the heavy branches",
          "both sitting on a log, a flask steaming between them"
        ],
        "looks": [
          "tartan scarves and long woolly coats each",
          "plaid shirts and padded vests each",
          "red wool coats and bobble hats each"
        ]
      },
      "together vs. alone in cold": {
        "locs": [
          "Siberian taiga frozen river",
          "Antarctic research station exterior",
          "Sub-Antarctic island storm snow"
        ],
        "poses": [
          "both trudging forward, heads down, roped together",
          "one pointing at the horizon, the other squinting through goggles",
          "both tiny against the white immensity, hand in hand"
        ],
        "looks": [
          "thick down jackets and balaclavas each",
          "heavy parkas with fur hoods each",
          "insulated expedition suits and goggles each"
        ]
      },
      "fire vs. white": {
        "locs": [
          "Montana big sky winter open",
          "Wyoming Yellowstone winter steam",
          "New Zealand South Island winter"
        ],
        "poses": [
          "both walking toward the horizon, scarves streaming",
          "both riding a snowmobile, one holding on tight",
          "both sitting by a fire, hands out to the flames"
        ],
        "looks": [
          "wool coats and fur hats each",
          "embroidered sheepskin jackets and boots each",
          "heavy knit sweaters and thick scarves each"
        ]
      },
      "held vs. numb": {
        "locs": [
          "snowfield before storm dark sky",
          "ski resort predawn gondola loading",
          "Colorado high alpine winter meadow"
        ],
        "poses": [
          "both carving down the slope side by side, spray flying",
          "both loading onto the lift, laughing, skis crossed",
          "both sitting outside the chalet, wrapped in blankets, hot chocolate in hand"
        ],
        "looks": [
          "colourful ski jackets and salopettes each",
          "retro ski suits and bobble hats each",
          "après-ski sweaters and fur boots each"
        ]
      },
      "burning inside vs. frozen out": {
        "locs": [
          "Utah Bryce Canyon snow hoodoos",
          "Spain Pyrenees winter pass",
          "Austria Dachstein glacier winter"
        ],
        "poses": [
          "both loading onto the lift, laughing, skis crossed",
          "both sitting outside the chalet, wrapped in blankets, hot chocolate in hand",
          "both skiing toward the camera, goggles pushed up"
        ],
        "looks": [
          "retro ski suits and bobble hats each",
          "après-ski sweaters and fur boots each",
          "colourful ski jackets and salopettes each"
        ]
      },
      "shelter vs. exposure": {
        "locs": [
          "Bhutan winter mountain dzong",
          "Pakistan K2 base camp winter",
          "Nepal Thorong La winter crossing"
        ],
        "poses": [
          "both bowing their heads, prayer flags snapping around them",
          "both climbing the steps, breath ragged, smiling",
          "both resting against a wall, steaming cups in hand"
        ],
        "looks": [
          "red wool robes and quilted jackets each",
          "layered woollens and trekking boots each",
          "wool hats and down jackets each"
        ]
      },
      "thaw vs. freeze": {
        "locs": [
          "Norway frozen fjord reflection",
          "Sweden frozen archipelago island",
          "Faroe Islands frozen waterfall"
        ],
        "poses": [
          "one sliding on their knees toward the other, laughing",
          "both lying flat, listening to it creak",
          "both walking carefully, testing each step, breath steaming"
        ],
        "looks": [
          "wool coats and fur-trimmed hats each",
          "padded jackets and woolly scarves each",
          "chunky knit sweaters and skates each"
        ]
      },
      "heartbeat vs. blizzard": {
        "locs": [
          "Switzerland Jungfrau winter",
          "Italy Dolomites winter ice",
          "Poland Tatra winter ridge"
        ],
        "poses": [
          "both sitting outside the chalet, wrapped in blankets, hot chocolate in hand",
          "both skiing toward the camera, goggles pushed up",
          "both carving down the slope side by side, spray flying"
        ],
        "looks": [
          "après-ski sweaters and fur boots each",
          "colourful ski jackets and salopettes each",
          "retro ski suits and bobble hats each"
        ]
      },
      "moving vs. hypothermic": {
        "locs": [
          "Kazakhstan steppe winter deep",
          "Kyrgyz winter yurt snow",
          "Tibet winter plateau wind"
        ],
        "poses": [
          "both riding a snowmobile, one holding on tight",
          "both sitting by a fire, hands out to the flames",
          "both standing close, breath mingling, wide sky overhead"
        ],
        "looks": [
          "embroidered sheepskin jackets and boots each",
          "heavy knit sweaters and thick scarves each",
          "wool coats and fur hats each"
        ]
      },
      "found vs. lost in white": {
        "locs": [
          "tundra flat under white sky",
          "Svalbard glacier calving edge",
          "Iceland black sand and snow"
        ],
        "poses": [
          "one pointing at the horizon, the other squinting through goggles",
          "both tiny against the white immensity, hand in hand",
          "both huddled together, backs to the wind"
        ],
        "looks": [
          "heavy parkas with fur hoods each",
          "insulated expedition suits and goggles each",
          "thick down jackets and balaclavas each"
        ]
      },
      "light vs. whiteout": {
        "locs": [
          "Lesotho highland snow blanket",
          "Drakensberg winter frost dawn",
          "Morocco Atlas snow"
        ],
        "poses": [
          "both sitting by a fire, hands out to the flames",
          "both standing close, breath mingling, wide sky overhead",
          "both walking toward the horizon, scarves streaming"
        ],
        "looks": [
          "heavy knit sweaters and thick scarves each",
          "wool coats and fur hats each",
          "embroidered sheepskin jackets and boots each"
        ]
      },
      "ice vs. skin": {
        "locs": [
          "Scotland winter glen frozen burn",
          "Maine coast harbor frozen",
          "Patagonia winter wind ice lake"
        ],
        "poses": [
          "both lying flat, listening to it creak",
          "both walking carefully, testing each step, breath steaming",
          "both skating hand in hand across the glassy surface"
        ],
        "looks": [
          "padded jackets and woolly scarves each",
          "chunky knit sweaters and skates each",
          "wool coats and fur-trimmed hats each"
        ]
      },
      "body heat vs. cold air": {
        "locs": [
          "Czech Krkonose winter forest",
          "Lapland reindeer forest snow",
          "Vermont maple forest snow"
        ],
        "poses": [
          "both walking arm in arm beneath the heavy branches",
          "both sitting on a log, a flask steaming between them",
          "both catching flakes on their tongues, laughing"
        ],
        "looks": [
          "plaid shirts and padded vests each",
          "red wool coats and bobble hats each",
          "tartan scarves and long woolly coats each"
        ]
      },
      "glacier vs. moment": {
        "locs": [
          "Bulgaria Rila winter monastery",
          "Bhutan winter mountain dzong",
          "Pakistan K2 base camp winter"
        ],
        "poses": [
          "both climbing the steps, breath ragged, smiling",
          "both resting against a wall, steaming cups in hand",
          "both standing still, the thin air ringing around them"
        ],
        "looks": [
          "layered woollens and trekking boots each",
          "wool hats and down jackets each",
          "red wool robes and quilted jackets each"
        ]
      },
      "winter vs. will": {
        "locs": [
          "Romania Fagaras winter ridge",
          "snowfield before storm dark sky",
          "ski resort predawn gondola loading"
        ],
        "poses": [
          "both skiing toward the camera, goggles pushed up",
          "both carving down the slope side by side, spray flying",
          "both loading onto the lift, laughing, skis crossed"
        ],
        "looks": [
          "colourful ski jackets and salopettes each",
          "retro ski suits and bobble hats each",
          "après-ski sweaters and fur boots each"
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
      "energy vs. calm",
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
      "chasing vs. wandering",
      "streetlit vs. shadow",
      "neon-free dark vs. lit",
      "awake vs. dreaming",
      "night shift vs. day world"
    ],
    "locs": [
      "street lamp cone of light empty",
      "predawn empty boulevard",
      "rain-soaked empty street lamp reflection",
      "city bridge walking both sides empty",
      "underground car park empty level",
      "phone box interior lit",
      "underpass graffiti night colour",
      "park night fountain lit",
      "24h diner at 3am",
      "night club exterior queue gone",
      "casino exit early hours",
      "kebab shop 2am queue",
      "stadium exterior night event over",
      "theatre stage door night",
      "concert venue exit after",
      "bar exterior last call street",
      "arcade empty closing time",
      "bowling alley last game",
      "hotel lobby late night",
      "hospital exterior 4am",
      "harbour lights reflection water night",
      "ferry terminal last boat gone",
      "train station concourse empty night",
      "airport arrivals 5am",
      "fuel station forecourt night",
      "empty beach night city beyond",
      "night bus last stop end line",
      "rooftop at midnight city below",
      "neon sign alley close",
      "botanical garden night event",
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
      "Brussels Grande Place night",
      "Prague Wenceslas night",
      "Amsterdam canal at night, bridges lit"
    ],
    "poses": [
      "both walking arm in arm through the pool of gold, shadows stretching",
      "one leaning on the post, the other twirling beneath it",
      "both sitting on the kerb, shoes off, laughing quietly",
      "both lying on the empty tarmac, staring up",
      "both stumbling out, arms around each other, laughing at nothing",
      "both sharing a paper bag of chips, sitting on the step",
      "one in a borrowed jacket, the other holding their shoes",
      "both slumped against the wall, glowing from the evening",
      "both waiting with their bags at their feet, tired and smiling",
      "one asleep on the other's shoulder",
      "both pressed to the window, watching the world go by",
      "both running to catch the last departure, hand in hand",
      "both leaning on the edge, the glow of the city spread beneath them",
      "both sitting back to back, sharing a bottle",
      "both dancing slowly to music from a phone",
      "both pointing out the glittering towers below",
      "both swallowed by the crowd, holding hands tightly",
      "both eating from skewers, faces lit in colour",
      "both reflected in the shop window, laughing",
      "both shouting over the noise, heads together",
      "both walking the strip, arms swinging, in sync",
      "both posing in front of a glowing marquee",
      "both leaning out of a taxi, laughing",
      "both dancing in the middle of the road",
      "both strolling the cobbles, collars up, close together",
      "both lingering under the arches, whispering",
      "both stopping to watch a performer, delighted",
      "both toasting each other on a quiet square"
    ],
    "looks": [
      "dark denim and leather jackets each",
      "long coats and scarves each",
      "oversized hoodies and slim jeans each",
      "party dress and rumpled shirt each",
      "sequin top and leather jacket each",
      "after-party smart casual, collars undone each",
      "travel-worn coats and backpacks each",
      "cosy knitwear and sneakers each",
      "trench coats and tote bags each",
      "evening wear under oversized coats each",
      "dark dresses and tailored jackets each",
      "silk shirts and leather jackets each",
      "bright oversized jackets and sneakers each",
      "pastel layered streetwear each",
      "black techwear and silver accents each",
      "glam evening outfits each",
      "vintage-style cocktail dress and suit each",
      "bold coloured jackets and boots each",
      "long wool coats and silk scarves each",
      "dark overcoats and leather gloves each",
      "tailored jackets and smart boots each"
    ],
    "affinities": {
      "light vs. dark": {
        "locs": [
          "street lamp cone of light empty",
          "predawn empty boulevard",
          "rain-soaked empty street lamp reflection"
        ],
        "poses": [
          "both walking arm in arm through the pool of gold, shadows stretching",
          "one leaning on the post, the other twirling beneath it",
          "both sitting on the kerb, shoes off, laughing quietly"
        ],
        "looks": [
          "dark denim and leather jackets each",
          "long coats and scarves each",
          "oversized hoodies and slim jeans each"
        ]
      },
      "awake vs. asleep": {
        "locs": [
          "hotel lobby late night",
          "hospital exterior 4am",
          "harbour lights reflection water night"
        ],
        "poses": [
          "both waiting with their bags at their feet, tired and smiling",
          "one asleep on the other's shoulder",
          "both pressed to the window, watching the world go by"
        ],
        "looks": [
          "travel-worn coats and backpacks each",
          "cosy knitwear and sneakers each",
          "trench coats and tote bags each"
        ]
      },
      "seen vs. unseen": {
        "locs": [
          "city bridge walking both sides empty",
          "underground car park empty level",
          "phone box interior lit"
        ],
        "poses": [
          "one leaning on the post, the other twirling beneath it",
          "both sitting on the kerb, shoes off, laughing quietly",
          "both lying on the empty tarmac, staring up"
        ],
        "looks": [
          "long coats and scarves each",
          "oversized hoodies and slim jeans each",
          "dark denim and leather jackets each"
        ]
      },
      "late vs. early": {
        "locs": [
          "ferry terminal last boat gone",
          "train station concourse empty night",
          "airport arrivals 5am"
        ],
        "poses": [
          "one asleep on the other's shoulder",
          "both pressed to the window, watching the world go by",
          "both running to catch the last departure, hand in hand"
        ],
        "looks": [
          "cosy knitwear and sneakers each",
          "trench coats and tote bags each",
          "travel-worn coats and backpacks each"
        ]
      },
      "energy vs. calm": {
        "locs": [
          "24h diner at 3am",
          "night club exterior queue gone",
          "casino exit early hours"
        ],
        "poses": [
          "both stumbling out, arms around each other, laughing at nothing",
          "both sharing a paper bag of chips, sitting on the step",
          "one in a borrowed jacket, the other holding their shoes"
        ],
        "looks": [
          "party dress and rumpled shirt each",
          "sequin top and leather jacket each",
          "after-party smart casual, collars undone each"
        ]
      },
      "danger vs. safety": {
        "locs": [
          "underpass graffiti night colour",
          "park night fountain lit",
          "street lamp cone of light empty"
        ],
        "poses": [
          "both sitting on the kerb, shoes off, laughing quietly",
          "both lying on the empty tarmac, staring up",
          "both walking arm in arm through the pool of gold, shadows stretching"
        ],
        "looks": [
          "oversized hoodies and slim jeans each",
          "dark denim and leather jackets each",
          "long coats and scarves each"
        ]
      },
      "hidden vs. exposed": {
        "locs": [
          "rooftop at midnight city below",
          "neon sign alley close",
          "botanical garden night event"
        ],
        "poses": [
          "both leaning on the edge, the glow of the city spread beneath them",
          "both sitting back to back, sharing a bottle",
          "both dancing slowly to music from a phone"
        ],
        "looks": [
          "evening wear under oversized coats each",
          "dark dresses and tailored jackets each",
          "silk shirts and leather jackets each"
        ]
      },
      "real vs. imagined": {
        "locs": [
          "Tokyo Shinjuku Kabukicho neon",
          "Osaka Dotonbori night reflection",
          "Seoul Hongdae night street"
        ],
        "poses": [
          "both swallowed by the crowd, holding hands tightly",
          "both eating from skewers, faces lit in colour",
          "both reflected in the shop window, laughing"
        ],
        "looks": [
          "bright oversized jackets and sneakers each",
          "pastel layered streetwear each",
          "black techwear and silver accents each"
        ]
      },
      "after vs. before": {
        "locs": [
          "kebab shop 2am queue",
          "stadium exterior night event over",
          "theatre stage door night"
        ],
        "poses": [
          "both sharing a paper bag of chips, sitting on the step",
          "one in a borrowed jacket, the other holding their shoes",
          "both slumped against the wall, glowing from the evening"
        ],
        "looks": [
          "sequin top and leather jacket each",
          "after-party smart casual, collars undone each",
          "party dress and rumpled shirt each"
        ]
      },
      "alive vs. still": {
        "locs": [
          "New York Times Square 4am",
          "Las Vegas strip 3am",
          "Chicago Riverwalk night"
        ],
        "poses": [
          "both walking the strip, arms swinging, in sync",
          "both posing in front of a glowing marquee",
          "both leaning out of a taxi, laughing"
        ],
        "looks": [
          "glam evening outfits each",
          "vintage-style cocktail dress and suit each",
          "bold coloured jackets and boots each"
        ]
      },
      "searching vs. found": {
        "locs": [
          "fuel station forecourt night",
          "empty beach night city beyond",
          "night bus last stop end line"
        ],
        "poses": [
          "both pressed to the window, watching the world go by",
          "both running to catch the last departure, hand in hand",
          "both waiting with their bags at their feet, tired and smiling"
        ],
        "looks": [
          "trench coats and tote bags each",
          "travel-worn coats and backpacks each",
          "cosy knitwear and sneakers each"
        ]
      },
      "open vs. closed": {
        "locs": [
          "London West End 2am",
          "Paris Pigalle night",
          "Berlin Kurfürstendamm night"
        ],
        "poses": [
          "both strolling the cobbles, collars up, close together",
          "both lingering under the arches, whispering",
          "both stopping to watch a performer, delighted"
        ],
        "looks": [
          "long wool coats and silk scarves each",
          "dark overcoats and leather gloves each",
          "tailored jackets and smart boots each"
        ]
      },
      "alone vs. watched": {
        "locs": [
          "Hong Kong Mong Kok night dense",
          "Taipei night market open",
          "Bangkok Patpong night market"
        ],
        "poses": [
          "both eating from skewers, faces lit in colour",
          "both reflected in the shop window, laughing",
          "both shouting over the noise, heads together"
        ],
        "looks": [
          "pastel layered streetwear each",
          "black techwear and silver accents each",
          "bright oversized jackets and sneakers each"
        ]
      },
      "noise vs. quiet hour": {
        "locs": [
          "Ho Chi Minh night street food",
          "Singapore Clarke Quay night",
          "Kuala Lumpur Petaling night"
        ],
        "poses": [
          "both reflected in the shop window, laughing",
          "both shouting over the noise, heads together",
          "both swallowed by the crowd, holding hands tightly"
        ],
        "looks": [
          "black techwear and silver accents each",
          "bright oversized jackets and sneakers each",
          "pastel layered streetwear each"
        ]
      },
      "moving vs. paralyzed": {
        "locs": [
          "hotel lobby late night",
          "hospital exterior 4am",
          "harbour lights reflection water night"
        ],
        "poses": [
          "both running to catch the last departure, hand in hand",
          "both waiting with their bags at their feet, tired and smiling",
          "one asleep on the other's shoulder"
        ],
        "looks": [
          "travel-worn coats and backpacks each",
          "cosy knitwear and sneakers each",
          "trench coats and tote bags each"
        ]
      },
      "chasing vs. wandering": {
        "locs": [
          "Miami South Beach night",
          "New Orleans Bourbon St late",
          "Nashville Broadway night"
        ],
        "poses": [
          "both posing in front of a glowing marquee",
          "both leaning out of a taxi, laughing",
          "both dancing in the middle of the road"
        ],
        "looks": [
          "vintage-style cocktail dress and suit each",
          "bold coloured jackets and boots each",
          "glam evening outfits each"
        ]
      },
      "streetlit vs. shadow": {
        "locs": [
          "predawn empty boulevard",
          "rain-soaked empty street lamp reflection",
          "city bridge walking both sides empty"
        ],
        "poses": [
          "both lying on the empty tarmac, staring up",
          "both walking arm in arm through the pool of gold, shadows stretching",
          "one leaning on the post, the other twirling beneath it"
        ],
        "looks": [
          "dark denim and leather jackets each",
          "long coats and scarves each",
          "oversized hoodies and slim jeans each"
        ]
      },
      "neon-free dark vs. lit": {
        "locs": [
          "rooftop at midnight city below",
          "neon sign alley close",
          "botanical garden night event"
        ],
        "poses": [
          "both sitting back to back, sharing a bottle",
          "both dancing slowly to music from a phone",
          "both pointing out the glittering towers below"
        ],
        "looks": [
          "dark dresses and tailored jackets each",
          "silk shirts and leather jackets each",
          "evening wear under oversized coats each"
        ]
      },
      "awake vs. dreaming": {
        "locs": [
          "Brussels Grande Place night",
          "Prague Wenceslas night",
          "Amsterdam canal at night, bridges lit"
        ],
        "poses": [
          "both lingering under the arches, whispering",
          "both stopping to watch a performer, delighted",
          "both toasting each other on a quiet square"
        ],
        "looks": [
          "dark overcoats and leather gloves each",
          "tailored jackets and smart boots each",
          "long wool coats and silk scarves each"
        ]
      },
      "night shift vs. day world": {
        "locs": [
          "concert venue exit after",
          "bar exterior last call street",
          "arcade empty closing time"
        ],
        "poses": [
          "one in a borrowed jacket, the other holding their shoes",
          "both slumped against the wall, glowing from the evening",
          "both stumbling out, arms around each other, laughing at nothing"
        ],
        "looks": [
          "after-party smart casual, collars undone each",
          "party dress and rumpled shirt each",
          "sequin top and leather jacket each"
        ]
      }
    },
    "promptSuffix": "Colour grade: deep blacks and pools of artificial light (neon, sodium, LED)."
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
      "both seated on worn stone steps, relaxed and smiling",
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
      "both standing proud, hats raised in salute",
      "one laying a flower on the monument, the other smiling",
      "both gazing across the golden fields at dawn",
      "both squared up in the dusty road, hands near their belts",
      "both leaning on the weathered wall, squinting",
      "both walking the boardwalk, spurs jingling",
      "both standing before the old wall, close and curious",
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
      "elegant period dress and shawl each",
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
          "both standing before the old wall, close and curious",
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
          "both standing proud, hats raised in salute",
          "one laying a flower on the monument, the other smiling",
          "both gazing across the golden fields at dawn"
        ],
        "looks": [
          "period military greatcoat each",
          "elegant period dress and shawl each",
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
          "both seated on worn stone steps, relaxed and smiling"
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
          "one laying a flower on the monument, the other smiling",
          "both gazing across the golden fields at dawn",
          "both standing proud, hats raised in salute"
        ],
        "looks": [
          "elegant period dress and shawl each",
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
          "both seated on worn stone steps, relaxed and smiling",
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
          "both gazing across the golden fields at dawn",
          "both standing proud, hats raised in salute",
          "one laying a flower on the monument, the other smiling"
        ],
        "looks": [
          "frock coat and top hat each",
          "period military greatcoat each",
          "elegant period dress and shawl each"
        ]
      },
      "inscription vs. erasure": {
        "locs": [
          "ancient amphitheater stepped seats Athens",
          "Roman forum at sunrise empty",
          "Colosseum interior arch looking up"
        ],
        "poses": [
          "both seated on worn stone steps, relaxed and smiling",
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
          "both stepping through the puddles, grinning",
          "both looking up as the sun cracks through the cloud",
          "both holding each other, wet and laughing"
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
          "both stepping through the puddles, grinning",
          "both looking up as the sun cracks through the cloud",
          "both holding each other, wet and laughing"
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
      "both stepping through the puddles, grinning",
      "both looking up as the sun cracks through the cloud",
      "both holding each other, wet and laughing",
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
      "controlled vs. carefree"
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
      "controlled vs. carefree": {
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
          "both sitting close on a wet rock, grinning at the view"
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
      "both sitting close on a wet rock, grinning at the view",
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
          "both gazing up at the green slopes in wonder",
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
          "both gazing up at the green slopes in wonder",
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
      "both gazing up at the green slopes in wonder",
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
      "marigolds vs. music",
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
      "celebration vs. serenade"
    ],
    "locs": [
      "Chichen Itza pyramid sunrise empty",
      "Oaxaca Monte Albán ruins",
      "Teotihuacan pyramids dawn",
      "Palenque jungle ruins Chiapas",
      "Uxmal Yucatan ruins",
      "Tulum ruins cliff sea below",
      "Coba pyramid climb top jungle",
      "Cholula pyramid church top",
      "Mexico City Zócalo plaza evening",
      "Merida colonial plaza Sunday",
      "San Cristóbal de las Casas highland",
      "Guanajuato callejón del Beso lane",
      "San Miguel de Allende jardin",
      "Izamal yellow town Yucatan",
      "Campeche colonial colour walls",
      "Xalapa anthro museum Veracruz",
      "Tlaxcala smallest state capital",
      "Morelia cathedral evening Michoacán",
      "Puebla Azulejo tile building",
      "Taxco silver town hilltop",
      "Oaxacan market stall morning colour",
      "Lucha libre arena ring between bouts",
      "Frida Kahlo blue house Coyoacán",
      "Xochimilco trajinera canal flower boat",
      "Guadalajara Tlaquepaque craft market",
      "Guanajuato Festival Cervantino stage",
      "Puerto Escondido surf beach Oaxaca",
      "Huatulco bay beach Oaxaca",
      "Sayulita beach Nayarit village",
      "Puerto Vallarta old town Jalisco",
      "Veracruz malecon evening",
      "Acapulco cliff diver platform",
      "Mazatlán old town Sinaloa",
      "Los Cabos arch sea rock",
      "Tulum cenote swim jungle",
      "Bacalar lake colours Quintana Roo",
      "Valladolid cenote swim Yucatan",
      "Pátzcuaro Day of Dead lake",
      "Janitzio island midnight ceremony",
      "Baja peninsula road trip",
      "Copper Canyon train Chihuahua",
      "Creel Tarahumara area Chihuahua"
    ],
    "poses": [
      "both climbing the worn steps, hands reaching back",
      "both standing at the top, arms wide, the sun rising behind",
      "both clapping at the foot of the stones, listening for the echo",
      "both sitting in the shade of an ancient wall, sharing a mango",
      "both strolling the cobbled lanes, ice creams in hand",
      "both leaning from a balcony, flowers spilling around them",
      "both dancing a slow step to a distant guitar",
      "one buying a flower from a vendor for the other",
      "both haggling cheerfully, arms full of bright goods",
      "both in luchador masks, mid play-fight",
      "both painting a pot, hands covered in colour",
      "both choosing flowers, heads together, laughing",
      "both running into the surf, shoes in hand",
      "both sipping coconuts at the water's edge",
      "both watching the sun sink, wrapped in one towel",
      "both dancing barefoot on the sand",
      "both floating in the clear blue, looking up at the green",
      "both leaping together, hands joined",
      "both sitting on the ledge, feet dangling in the cool",
      "both swimming through a shaft of sunlight",
      "both carrying candles through the dark, faces glowing",
      "both placing marigolds on the altar, smiling",
      "both gazing across the glittering water, hand in hand",
      "both smiling softly among the flowers",
      "both leaning out of the train window, hair streaming",
      "both standing at the rim, arms around each other",
      "both sitting on the car's bonnet, sharing a taco",
      "both walking the dusty track, hats pulled low"
    ],
    "looks": [
      "linen shirts and sun hats each",
      "embroidered blouses and cotton trousers each",
      "practical explorer outfits and sturdy sandals each",
      "bright embroidered dresses and linen shirts each",
      "white cotton outfits and straw hats each",
      "colourful printed dresses and guayaberas each",
      "rainbow-striped serapes and straw hats each",
      "embroidered huipiles and cotton shirts each",
      "artisan aprons over bright clothes each",
      "sundresses and light linen shirts each",
      "swimwear and sarongs each",
      "bright beach shirts and shorts each",
      "swimwear and water shoes each",
      "light cotton cover-ups and sun hats each",
      "simple bathing suits and shell necklaces each",
      "embroidered shawls and dark clothes each",
      "calavera face paint and white outfits each",
      "flower crowns and black dresses each",
      "wide-brimmed hats and denim jackets each",
      "woven ponchos and boots each",
      "dusty travel clothes and bandanas each"
    ],
    "affinities": {
      "tradition vs. modern": {
        "locs": [
          "Oaxacan market stall morning colour",
          "Lucha libre arena ring between bouts",
          "Frida Kahlo blue house Coyoacán"
        ],
        "poses": [
          "both haggling cheerfully, arms full of bright goods",
          "both in luchador masks, mid play-fight",
          "both painting a pot, hands covered in colour"
        ],
        "looks": [
          "rainbow-striped serapes and straw hats each",
          "embroidered huipiles and cotton shirts each",
          "artisan aprons over bright clothes each"
        ]
      },
      "fiesta vs. everyday": {
        "locs": [
          "Mexico City Zócalo plaza evening",
          "Merida colonial plaza Sunday",
          "San Cristóbal de las Casas highland"
        ],
        "poses": [
          "both strolling the cobbled lanes, ice creams in hand",
          "both leaning from a balcony, flowers spilling around them",
          "both dancing a slow step to a distant guitar"
        ],
        "looks": [
          "bright embroidered dresses and linen shirts each",
          "white cotton outfits and straw hats each",
          "colourful printed dresses and guayaberas each"
        ]
      },
      "ancient vs. colonial": {
        "locs": [
          "Chichen Itza pyramid sunrise empty",
          "Oaxaca Monte Albán ruins",
          "Teotihuacan pyramids dawn"
        ],
        "poses": [
          "both climbing the worn steps, hands reaching back",
          "both standing at the top, arms wide, the sun rising behind",
          "both clapping at the foot of the stones, listening for the echo"
        ],
        "looks": [
          "linen shirts and sun hats each",
          "embroidered blouses and cotton trousers each",
          "practical explorer outfits and sturdy sandals each"
        ]
      },
      "border vs. homeland": {
        "locs": [
          "Baja peninsula road trip",
          "Copper Canyon train Chihuahua",
          "Creel Tarahumara area Chihuahua"
        ],
        "poses": [
          "both leaning out of the train window, hair streaming",
          "both standing at the rim, arms around each other",
          "both sitting on the car's bonnet, sharing a taco"
        ],
        "looks": [
          "wide-brimmed hats and denim jackets each",
          "woven ponchos and boots each",
          "dusty travel clothes and bandanas each"
        ]
      },
      "ocean vs. desert": {
        "locs": [
          "Puerto Escondido surf beach Oaxaca",
          "Huatulco bay beach Oaxaca",
          "Sayulita beach Nayarit village"
        ],
        "poses": [
          "both running into the surf, shoes in hand",
          "both sipping coconuts at the water's edge",
          "both watching the sun sink, wrapped in one towel"
        ],
        "looks": [
          "sundresses and light linen shirts each",
          "swimwear and sarongs each",
          "bright beach shirts and shorts each"
        ]
      },
      "market vs. mall": {
        "locs": [
          "Xochimilco trajinera canal flower boat",
          "Guadalajara Tlaquepaque craft market",
          "Guanajuato Festival Cervantino stage"
        ],
        "poses": [
          "both in luchador masks, mid play-fight",
          "both painting a pot, hands covered in colour",
          "both choosing flowers, heads together, laughing"
        ],
        "looks": [
          "embroidered huipiles and cotton shirts each",
          "artisan aprons over bright clothes each",
          "rainbow-striped serapes and straw hats each"
        ]
      },
      "family vs. solitude": {
        "locs": [
          "Tulum cenote swim jungle",
          "Bacalar lake colours Quintana Roo",
          "Valladolid cenote swim Yucatan"
        ],
        "poses": [
          "both floating in the clear blue, looking up at the green",
          "both leaping together, hands joined",
          "both sitting on the ledge, feet dangling in the cool"
        ],
        "looks": [
          "swimwear and water shoes each",
          "light cotton cover-ups and sun hats each",
          "simple bathing suits and shell necklaces each"
        ]
      },
      "marigolds vs. music": {
        "locs": [
          "Pátzcuaro Day of Dead lake",
          "Janitzio island midnight ceremony"
        ],
        "poses": [
          "both carrying candles through the dark, faces glowing",
          "both placing marigolds on the altar, smiling",
          "both gazing across the glittering water, hand in hand"
        ],
        "looks": [
          "embroidered shawls and dark clothes each",
          "calavera face paint and white outfits each",
          "flower crowns and black dresses each"
        ]
      },
      "mural vs. canvas": {
        "locs": [
          "Guanajuato callejón del Beso lane",
          "San Miguel de Allende jardin",
          "Izamal yellow town Yucatan"
        ],
        "poses": [
          "both leaning from a balcony, flowers spilling around them",
          "both dancing a slow step to a distant guitar",
          "one buying a flower from a vendor for the other"
        ],
        "looks": [
          "white cotton outfits and straw hats each",
          "colourful printed dresses and guayaberas each",
          "bright embroidered dresses and linen shirts each"
        ]
      },
      "spice vs. sweet": {
        "locs": [
          "Campeche colonial colour walls",
          "Xalapa anthro museum Veracruz",
          "Tlaxcala smallest state capital"
        ],
        "poses": [
          "both dancing a slow step to a distant guitar",
          "one buying a flower from a vendor for the other",
          "both strolling the cobbled lanes, ice creams in hand"
        ],
        "looks": [
          "colourful printed dresses and guayaberas each",
          "bright embroidered dresses and linen shirts each",
          "white cotton outfits and straw hats each"
        ]
      },
      "local vs. tourist": {
        "locs": [
          "Morelia cathedral evening Michoacán",
          "Puebla Azulejo tile building",
          "Taxco silver town hilltop"
        ],
        "poses": [
          "one buying a flower from a vendor for the other",
          "both strolling the cobbled lanes, ice creams in hand",
          "both leaning from a balcony, flowers spilling around them"
        ],
        "looks": [
          "bright embroidered dresses and linen shirts each",
          "white cotton outfits and straw hats each",
          "colourful printed dresses and guayaberas each"
        ]
      },
      "colonial vs. indigenous": {
        "locs": [
          "Palenque jungle ruins Chiapas",
          "Uxmal Yucatan ruins",
          "Tulum ruins cliff sea below"
        ],
        "poses": [
          "both standing at the top, arms wide, the sun rising behind",
          "both clapping at the foot of the stones, listening for the echo",
          "both sitting in the shade of an ancient wall, sharing a mango"
        ],
        "looks": [
          "embroidered blouses and cotton trousers each",
          "practical explorer outfits and sturdy sandals each",
          "linen shirts and sun hats each"
        ]
      },
      "siesta vs. hustle": {
        "locs": [
          "Mexico City Zócalo plaza evening",
          "Merida colonial plaza Sunday",
          "San Cristóbal de las Casas highland"
        ],
        "poses": [
          "both strolling the cobbled lanes, ice creams in hand",
          "both leaning from a balcony, flowers spilling around them",
          "both dancing a slow step to a distant guitar"
        ],
        "looks": [
          "white cotton outfits and straw hats each",
          "colourful printed dresses and guayaberas each",
          "bright embroidered dresses and linen shirts each"
        ]
      },
      "carnival vs. quiet": {
        "locs": [
          "Puerto Vallarta old town Jalisco",
          "Veracruz malecon evening",
          "Acapulco cliff diver platform"
        ],
        "poses": [
          "both sipping coconuts at the water's edge",
          "both watching the sun sink, wrapped in one towel",
          "both dancing barefoot on the sand"
        ],
        "looks": [
          "swimwear and sarongs each",
          "bright beach shirts and shorts each",
          "sundresses and light linen shirts each"
        ]
      },
      "north vs. south": {
        "locs": [
          "Baja peninsula road trip",
          "Copper Canyon train Chihuahua",
          "Creel Tarahumara area Chihuahua"
        ],
        "poses": [
          "both standing at the rim, arms around each other",
          "both sitting on the car's bonnet, sharing a taco",
          "both walking the dusty track, hats pulled low"
        ],
        "looks": [
          "woven ponchos and boots each",
          "dusty travel clothes and bandanas each",
          "wide-brimmed hats and denim jackets each"
        ]
      },
      "coast vs. highlands": {
        "locs": [
          "Mazatlán old town Sinaloa",
          "Los Cabos arch sea rock",
          "Puerto Escondido surf beach Oaxaca"
        ],
        "poses": [
          "both watching the sun sink, wrapped in one towel",
          "both dancing barefoot on the sand",
          "both running into the surf, shoes in hand"
        ],
        "looks": [
          "bright beach shirts and shorts each",
          "sundresses and light linen shirts each",
          "swimwear and sarongs each"
        ]
      },
      "artisan vs. factory": {
        "locs": [
          "Oaxacan market stall morning colour",
          "Lucha libre arena ring between bouts",
          "Frida Kahlo blue house Coyoacán"
        ],
        "poses": [
          "both painting a pot, hands covered in colour",
          "both choosing flowers, heads together, laughing",
          "both haggling cheerfully, arms full of bright goods"
        ],
        "looks": [
          "artisan aprons over bright clothes each",
          "rainbow-striped serapes and straw hats each",
          "embroidered huipiles and cotton shirts each"
        ]
      },
      "sacred vs. street": {
        "locs": [
          "Coba pyramid climb top jungle",
          "Cholula pyramid church top",
          "Chichen Itza pyramid sunrise empty"
        ],
        "poses": [
          "both clapping at the foot of the stones, listening for the echo",
          "both sitting in the shade of an ancient wall, sharing a mango",
          "both climbing the worn steps, hands reaching back"
        ],
        "looks": [
          "practical explorer outfits and sturdy sandals each",
          "linen shirts and sun hats each",
          "embroidered blouses and cotton trousers each"
        ]
      },
      "migrant vs. rooted": {
        "locs": [
          "Baja peninsula road trip",
          "Copper Canyon train Chihuahua",
          "Creel Tarahumara area Chihuahua"
        ],
        "poses": [
          "both sitting on the car's bonnet, sharing a taco",
          "both walking the dusty track, hats pulled low",
          "both leaning out of the train window, hair streaming"
        ],
        "looks": [
          "dusty travel clothes and bandanas each",
          "wide-brimmed hats and denim jackets each",
          "woven ponchos and boots each"
        ]
      },
      "celebration vs. serenade": {
        "locs": [
          "Janitzio island midnight ceremony",
          "Pátzcuaro Day of Dead lake"
        ],
        "poses": [
          "both placing marigolds on the altar, smiling",
          "both gazing across the glittering water, hand in hand",
          "both smiling softly among the flowers"
        ],
        "looks": [
          "calavera face paint and white outfits each",
          "flower crowns and black dresses each",
          "embroidered shawls and dark clothes each"
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
      "Brooklyn rooftop summer Manhattan behind",
      "San Francisco Lombard Street",
      "Chicago Bean Millennium Park reflection",
      "Seattle Pike Place Market dawn",
      "Portland Oregon Powell's Books exterior",
      "Hollywood Sign hillside view",
      "Super Bowl adjacent city street",
      "Nashville Broadway honky-tonk stage exterior",
      "New Orleans French Quarter Bourbon exterior",
      "Austin 6th Street music row",
      "New Orleans Garden District mansion",
      "Savannah mossy square Georgia",
      "Charleston Rainbow Row South Carolina",
      "Bourbon Street parade day",
      "Mardi Gras New Orleans crowd",
      "LA Venice Beach boardwalk morning",
      "Miami South Beach art deco morning",
      "Annapolis harbour Maryland",
      "Cape Cod beach Massachusetts summer",
      "Maine Portland lobster pier",
      "Hawaii Na Pali coast Kauai",
      "Pacific Coast Highway Big Sur",
      "Malibu beach LA adjacent",
      "Santa Monica pier evening",
      "Alaska Denali clear day base",
      "Grand Canyon south rim early",
      "Bryce Canyon hoodoos Utah dawn",
      "Zion Narrows Utah hiking",
      "Arches Utah Delicate Arch sunrise",
      "Monument Valley Arizona Navajo",
      "Death Valley salt pan California",
      "Yosemite Valley El Capitan view",
      "Sequoia forest drive-through tree",
      "Route 66 Cadillac Ranch Texas art",
      "Vermont fall foliage road General Store",
      "New Hampshire White Mountains",
      "NBA Finals watch party bar",
      "Black Friday mall opening queue",
      "American diner any state any time",
      "Fourth of July fireworks open",
      "Thanksgiving parade New York both",
      "county fair midway at dusk",
      "high school football stadium Friday night",
      "small-town Main Street parade"
    ],
    "poses": [
      "both striding across the crossing, mid-laugh, the city rushing past",
      "both sitting on the ledge, legs dangling, the skyline behind",
      "both taking a selfie, arms outstretched, grinning",
      "both hailing a cab, one whistling, one waving",
      "both dancing in the street to a brass band",
      "both sipping iced tea on the porch swing",
      "one strumming a guitar, the other singing along",
      "both leaning on the iron railing, watching the world go by",
      "both riding bikes along the water, laughing, hair streaming",
      "both eating ice cream on the rail",
      "both barefoot on the sand, shoes in hand",
      "both posing against the sunset, arms around each other",
      "both standing at the rim, arms wide, tiny in the vastness",
      "both hiking side by side, packs bouncing",
      "both sitting on a rock, feet dangling, sharing trail mix",
      "both looking up in awe at the towering stone",
      "both leaning on the car, sharing a milkshake",
      "both sitting on the porch step, waving at a passing truck",
      "both dancing in the aisle, shopping bags swinging",
      "both squeezing into a booth, laughing",
      "both with sparklers, writing in the dark",
      "both waving flags, cheering a passing float",
      "both eating corn dogs, mustard on their chins",
      "both clapping in the stands, popcorn flying"
    ],
    "looks": [
      "trench coats and sneakers each",
      "denim jackets and white tees each",
      "smart casual and scarves each",
      "sundresses and seersucker jackets each",
      "cowboy boots and denim each",
      "vintage Southern outfits each",
      "bright summer shirts and sundresses each",
      "preppy polos and linen shorts each",
      "retro swimwear and sun hats each",
      "hiking boots and puffer vests each",
      "flannel shirts and trail shorts each",
      "sun hats and technical jackets each",
      "flannel and jeans each",
      "vintage diner outfits each",
      "varsity jackets and chinos each",
      "red white and blue outfits each",
      "festive sweaters and jeans each",
      "team jerseys and caps each"
    ],
    "affinities": {
      "small town vs. big city": {
        "locs": [
          "New York Times Square 5am empty",
          "Brooklyn rooftop summer Manhattan behind",
          "San Francisco Lombard Street"
        ],
        "poses": [
          "both striding across the crossing, mid-laugh, the city rushing past",
          "both sitting on the ledge, legs dangling, the skyline behind",
          "both taking a selfie, arms outstretched, grinning"
        ],
        "looks": [
          "trench coats and sneakers each",
          "denim jackets and white tees each",
          "smart casual and scarves each"
        ]
      },
      "east coast vs. west coast": {
        "locs": [
          "LA Venice Beach boardwalk morning",
          "Miami South Beach art deco morning",
          "Annapolis harbour Maryland"
        ],
        "poses": [
          "both riding bikes along the water, laughing, hair streaming",
          "both eating ice cream on the rail",
          "both barefoot on the sand, shoes in hand"
        ],
        "looks": [
          "bright summer shirts and sundresses each",
          "preppy polos and linen shorts each",
          "retro swimwear and sun hats each"
        ]
      },
      "dream vs. reality": {
        "locs": [
          "Chicago Bean Millennium Park reflection",
          "Seattle Pike Place Market dawn",
          "Portland Oregon Powell's Books exterior"
        ],
        "poses": [
          "both sitting on the ledge, legs dangling, the skyline behind",
          "both taking a selfie, arms outstretched, grinning",
          "both hailing a cab, one whistling, one waving"
        ],
        "looks": [
          "denim jackets and white tees each",
          "smart casual and scarves each",
          "trench coats and sneakers each"
        ]
      },
      "road trip vs. roots": {
        "locs": [
          "Route 66 Cadillac Ranch Texas art",
          "Vermont fall foliage road General Store",
          "New Hampshire White Mountains"
        ],
        "poses": [
          "both leaning on the car, sharing a milkshake",
          "both sitting on the porch step, waving at a passing truck",
          "both dancing in the aisle, shopping bags swinging"
        ],
        "looks": [
          "flannel and jeans each",
          "vintage diner outfits each",
          "varsity jackets and chinos each"
        ]
      },
      "diner vs. fine dining": {
        "locs": [
          "NBA Finals watch party bar",
          "Black Friday mall opening queue",
          "American diner any state any time"
        ],
        "poses": [
          "both sitting on the porch step, waving at a passing truck",
          "both dancing in the aisle, shopping bags swinging",
          "both squeezing into a booth, laughing"
        ],
        "looks": [
          "vintage diner outfits each",
          "varsity jackets and chinos each",
          "flannel and jeans each"
        ]
      },
      "suburb vs. downtown": {
        "locs": [
          "Hollywood Sign hillside view",
          "Super Bowl adjacent city street",
          "New York Times Square 5am empty"
        ],
        "poses": [
          "both taking a selfie, arms outstretched, grinning",
          "both hailing a cab, one whistling, one waving",
          "both striding across the crossing, mid-laugh, the city rushing past"
        ],
        "looks": [
          "smart casual and scarves each",
          "trench coats and sneakers each",
          "denim jackets and white tees each"
        ]
      },
      "national park vs. strip mall": {
        "locs": [
          "Alaska Denali clear day base",
          "Grand Canyon south rim early",
          "Bryce Canyon hoodoos Utah dawn"
        ],
        "poses": [
          "both standing at the rim, arms wide, tiny in the vastness",
          "both hiking side by side, packs bouncing",
          "both sitting on a rock, feet dangling, sharing trail mix"
        ],
        "looks": [
          "hiking boots and puffer vests each",
          "flannel shirts and trail shorts each",
          "sun hats and technical jackets each"
        ]
      },
      "college town vs. working town": {
        "locs": [
          "Nashville Broadway honky-tonk stage exterior",
          "New Orleans French Quarter Bourbon exterior",
          "Austin 6th Street music row"
        ],
        "poses": [
          "both dancing in the street to a brass band",
          "both sipping iced tea on the porch swing",
          "one strumming a guitar, the other singing along"
        ],
        "looks": [
          "sundresses and seersucker jackets each",
          "cowboy boots and denim each",
          "vintage Southern outfits each"
        ]
      },
      "coast vs. heartland": {
        "locs": [
          "Cape Cod beach Massachusetts summer",
          "Maine Portland lobster pier",
          "Hawaii Na Pali coast Kauai"
        ],
        "poses": [
          "both eating ice cream on the rail",
          "both barefoot on the sand, shoes in hand",
          "both posing against the sunset, arms around each other"
        ],
        "looks": [
          "preppy polos and linen shorts each",
          "retro swimwear and sun hats each",
          "bright summer shirts and sundresses each"
        ]
      },
      "fast vs. slow America": {
        "locs": [
          "New Orleans Garden District mansion",
          "Savannah mossy square Georgia",
          "Charleston Rainbow Row South Carolina"
        ],
        "poses": [
          "both sipping iced tea on the porch swing",
          "one strumming a guitar, the other singing along",
          "both leaning on the iron railing, watching the world go by"
        ],
        "looks": [
          "cowboy boots and denim each",
          "vintage Southern outfits each",
          "sundresses and seersucker jackets each"
        ]
      },
      "old money vs. new hustle": {
        "locs": [
          "Bourbon Street parade day",
          "Mardi Gras New Orleans crowd",
          "Nashville Broadway honky-tonk stage exterior"
        ],
        "poses": [
          "one strumming a guitar, the other singing along",
          "both leaning on the iron railing, watching the world go by",
          "both dancing in the street to a brass band"
        ],
        "looks": [
          "vintage Southern outfits each",
          "sundresses and seersucker jackets each",
          "cowboy boots and denim each"
        ]
      },
      "neon vs. nature": {
        "locs": [
          "Pacific Coast Highway Big Sur",
          "Malibu beach LA adjacent",
          "Santa Monica pier evening"
        ],
        "poses": [
          "both barefoot on the sand, shoes in hand",
          "both posing against the sunset, arms around each other",
          "both riding bikes along the water, laughing, hair streaming"
        ],
        "looks": [
          "retro swimwear and sun hats each",
          "bright summer shirts and sundresses each",
          "preppy polos and linen shorts each"
        ]
      },
      "tailgate vs. gallery opening": {
        "locs": [
          "Fourth of July fireworks open",
          "Thanksgiving parade New York both",
          "county fair midway at dusk"
        ],
        "poses": [
          "both with sparklers, writing in the dark",
          "both waving flags, cheering a passing float",
          "both eating corn dogs, mustard on their chins"
        ],
        "looks": [
          "red white and blue outfits each",
          "festive sweaters and jeans each",
          "team jerseys and caps each"
        ]
      },
      "porch vs. penthouse": {
        "locs": [
          "New Orleans French Quarter Bourbon exterior",
          "Austin 6th Street music row",
          "New Orleans Garden District mansion"
        ],
        "poses": [
          "both leaning on the iron railing, watching the world go by",
          "both dancing in the street to a brass band",
          "both sipping iced tea on the porch swing"
        ],
        "looks": [
          "sundresses and seersucker jackets each",
          "cowboy boots and denim each",
          "vintage Southern outfits each"
        ]
      },
      "freedom vs. constraint": {
        "locs": [
          "Zion Narrows Utah hiking",
          "Arches Utah Delicate Arch sunrise",
          "Monument Valley Arizona Navajo"
        ],
        "poses": [
          "both hiking side by side, packs bouncing",
          "both sitting on a rock, feet dangling, sharing trail mix",
          "both looking up in awe at the towering stone"
        ],
        "looks": [
          "flannel shirts and trail shorts each",
          "sun hats and technical jackets each",
          "hiking boots and puffer vests each"
        ]
      },
      "rust belt vs. sun belt": {
        "locs": [
          "Brooklyn rooftop summer Manhattan behind",
          "San Francisco Lombard Street",
          "Chicago Bean Millennium Park reflection"
        ],
        "poses": [
          "both hailing a cab, one whistling, one waving",
          "both striding across the crossing, mid-laugh, the city rushing past",
          "both sitting on the ledge, legs dangling, the skyline behind"
        ],
        "looks": [
          "trench coats and sneakers each",
          "denim jackets and white tees each",
          "smart casual and scarves each"
        ]
      },
      "immigrant dream vs. local tradition": {
        "locs": [
          "high school football stadium Friday night",
          "small-town Main Street parade",
          "Fourth of July fireworks open"
        ],
        "poses": [
          "both waving flags, cheering a passing float",
          "both eating corn dogs, mustard on their chins",
          "both clapping in the stands, popcorn flying"
        ],
        "looks": [
          "festive sweaters and jeans each",
          "team jerseys and caps each",
          "red white and blue outfits each"
        ]
      },
      "sports bar vs. jazz club": {
        "locs": [
          "Route 66 Cadillac Ranch Texas art",
          "Vermont fall foliage road General Store",
          "New Hampshire White Mountains"
        ],
        "poses": [
          "both dancing in the aisle, shopping bags swinging",
          "both squeezing into a booth, laughing",
          "both leaning on the car, sharing a milkshake"
        ],
        "looks": [
          "varsity jackets and chinos each",
          "flannel and jeans each",
          "vintage diner outfits each"
        ]
      },
      "highway vs. main street": {
        "locs": [
          "NBA Finals watch party bar",
          "Black Friday mall opening queue",
          "American diner any state any time"
        ],
        "poses": [
          "both squeezing into a booth, laughing",
          "both leaning on the car, sharing a milkshake",
          "both sitting on the porch step, waving at a passing truck"
        ],
        "looks": [
          "flannel and jeans each",
          "vintage diner outfits each",
          "varsity jackets and chinos each"
        ]
      },
      "flag vs. frontier": {
        "locs": [
          "Death Valley salt pan California",
          "Yosemite Valley El Capitan view",
          "Sequoia forest drive-through tree"
        ],
        "poses": [
          "both sitting on a rock, feet dangling, sharing trail mix",
          "both looking up in awe at the towering stone",
          "both standing at the rim, arms wide, tiny in the vastness"
        ],
        "looks": [
          "sun hats and technical jackets each",
          "hiking boots and puffer vests each",
          "flannel shirts and trail shorts each"
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
      "garage band practice space",
      "piano shop showroom evening",
      "rooftop speaker setup",
      "busker pitch underground empty",
      "acoustic session stairwell",
      "music school practice room",
      "recording studio control room",
      "mixing desk session both",
      "Abbey Road Studios crosswalk London",
      "Sun Studio Memphis empty",
      "Electric Lady Studio New York",
      "Muscle Shoals Alabama studio",
      "Criteria Studios Miami",
      "Capitol Studios Los Angeles",
      "Olympic Studios Barnes London",
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
      "Master Rock London",
      "empty concert hall seats",
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
      "SWG3 Glasgow warehouse",
      "live venue empty soundcheck",
      "tour bus bunk corridor",
      "backstage catering area quiet",
      "green room pre-gig",
      "jazz club stage between sets",
      "Barrowland Glasgow stage",
      "King Tut's Glasgow stage",
      "vinyl record store aisle",
      "vinyl pressing plant, records stacked to the ceiling",
      "wall of tour posters in a back alley",
      "Latitude Festival stage dawn",
      "festival camping field at golden hour",
      "outdoor festival crowd at sunset"
    ],
    "poses": [
      "both squeezed onto one stool, playing the same guitar",
      "one on keys, the other leaning over, singing harmony",
      "both hammering a rhythm on whatever's nearby, laughing",
      "both listening with eyes closed, heads tilted together",
      "both leaning over the console, grinning at a playback",
      "both in the booth, headphones on, one singing, one conducting",
      "both lying on the floor, eyes closed, soaking in the sound",
      "both in a classic album-cover pose, side by side",
      "both wearing headphones, nodding in sync",
      "one tracking a guitar line, the other conducting from behind the glass",
      "both sitting on the sofa, listening to the mix with huge grins",
      "both laughing over a botched take",
      "both standing centre stage, arms raised to the empty seats",
      "one singing into the mic, the other taking a bow",
      "both sitting on the edge, legs dangling into the pit",
      "both blowing kisses to an imagined crowd",
      "both dancing wildly in the middle of the floor, arms in the air",
      "both leaning on the barrier, bass rattling their ribs",
      "both sharing headphones, lost in the beat",
      "both mid-jump, hair flying",
      "both sharing a mic, face to face, mid-song",
      "one behind the drum kit, the other leaning on a speaker",
      "both sitting on the amp, sharing a beer after the set",
      "both headbanging side by side",
      "both flipping through the crates, grinning at a find",
      "both holding one sleeve between them, heads together",
      "one holding up a record, the other pretending to be unimpressed",
      "both bopping along to a spinning disc, headphones on",
      "both crowd-surfing, hands reaching up",
      "both dancing in the field, arms around each other",
      "both on each other's shoulders above the crowd, cheering",
      "both lying on the grass, watching the sky turn pink"
    ],
    "looks": [
      "band tees and ripped jeans each",
      "vintage cardigans and corduroys each",
      "oversized flannels and beanies each",
      "60s mod outfits each",
      "vintage leather and denim each",
      "retro suits and shift dresses each",
      "jumpers and corduroys each",
      "artist-casual layers each",
      "vintage band jackets and jeans each",
      "glittering stage outfits each",
      "tailored velvet suits and gowns each",
      "rock-star leather and sequins each",
      "all-black club wear each",
      "sparkling tops and cargo trousers each",
      "mesh and metallic outfits each",
      "leather jackets and band tees each",
      "vintage tour shirts and jeans each",
      "punk patches and denim each",
      "thrifted band tees and corduroys each",
      "vintage jackets and flared jeans each",
      "retro windbreakers and round glasses each",
      "festival layers and wellies each",
      "glitter and denim cut-offs each",
      "rain ponchos and bucket hats each"
    ],
    "affinities": {
      "sound vs. silence": {
        "locs": [
          "garage band practice space",
          "piano shop showroom evening",
          "rooftop speaker setup"
        ],
        "poses": [
          "both squeezed onto one stool, playing the same guitar",
          "one on keys, the other leaning over, singing harmony",
          "both hammering a rhythm on whatever's nearby, laughing"
        ],
        "looks": [
          "band tees and ripped jeans each",
          "vintage cardigans and corduroys each",
          "oversized flannels and beanies each"
        ]
      },
      "rhythm vs. chaos": {
        "locs": [
          "Berghain Berlin empty",
          "Fabric London empty",
          "Printworks London empty"
        ],
        "poses": [
          "both dancing wildly in the middle of the floor, arms in the air",
          "both leaning on the barrier, bass rattling their ribs",
          "both sharing headphones, lost in the beat"
        ],
        "looks": [
          "all-black club wear each",
          "sparkling tops and cargo trousers each",
          "mesh and metallic outfits each"
        ]
      },
      "heard vs. felt": {
        "locs": [
          "Tobacco Dock London empty",
          "The Warehouse Leeds empty",
          "Sub Club Glasgow empty"
        ],
        "poses": [
          "both leaning on the barrier, bass rattling their ribs",
          "both sharing headphones, lost in the beat",
          "both mid-jump, hair flying"
        ],
        "looks": [
          "sparkling tops and cargo trousers each",
          "mesh and metallic outfits each",
          "all-black club wear each"
        ]
      },
      "solo vs. duet": {
        "locs": [
          "busker pitch underground empty",
          "acoustic session stairwell",
          "music school practice room"
        ],
        "poses": [
          "one on keys, the other leaning over, singing harmony",
          "both hammering a rhythm on whatever's nearby, laughing",
          "both listening with eyes closed, heads tilted together"
        ],
        "looks": [
          "vintage cardigans and corduroys each",
          "oversized flannels and beanies each",
          "band tees and ripped jeans each"
        ]
      },
      "practiced vs. raw": {
        "locs": [
          "live venue empty soundcheck",
          "tour bus bunk corridor",
          "backstage catering area quiet"
        ],
        "poses": [
          "both sharing a mic, face to face, mid-song",
          "one behind the drum kit, the other leaning on a speaker",
          "both sitting on the amp, sharing a beer after the set"
        ],
        "looks": [
          "leather jackets and band tees each",
          "vintage tour shirts and jeans each",
          "punk patches and denim each"
        ]
      },
      "loud vs. intimate": {
        "locs": [
          "green room pre-gig",
          "jazz club stage between sets",
          "Barrowland Glasgow stage"
        ],
        "poses": [
          "one behind the drum kit, the other leaning on a speaker",
          "both sitting on the amp, sharing a beer after the set",
          "both headbanging side by side"
        ],
        "looks": [
          "vintage tour shirts and jeans each",
          "punk patches and denim each",
          "leather jackets and band tees each"
        ]
      },
      "note vs. noise": {
        "locs": [
          "Hansa Tonstudio Berlin",
          "Polar Studios Stockholm",
          "RAK Studios London"
        ],
        "poses": [
          "both wearing headphones, nodding in sync",
          "one tracking a guitar line, the other conducting from behind the glass",
          "both sitting on the sofa, listening to the mix with huge grins"
        ],
        "looks": [
          "jumpers and corduroys each",
          "artist-casual layers each",
          "vintage band jackets and jeans each"
        ]
      },
      "memory vs. melody": {
        "locs": [
          "vinyl record store aisle",
          "vinyl pressing plant, records stacked to the ceiling",
          "wall of tour posters in a back alley"
        ],
        "poses": [
          "both flipping through the crates, grinning at a find",
          "both holding one sleeve between them, heads together",
          "one holding up a record, the other pretending to be unimpressed"
        ],
        "looks": [
          "thrifted band tees and corduroys each",
          "vintage jackets and flared jeans each",
          "retro windbreakers and round glasses each"
        ]
      },
      "analog vs. digital": {
        "locs": [
          "recording studio control room",
          "mixing desk session both",
          "Abbey Road Studios crosswalk London"
        ],
        "poses": [
          "both leaning over the console, grinning at a playback",
          "both in the booth, headphones on, one singing, one conducting",
          "both lying on the floor, eyes closed, soaking in the sound"
        ],
        "looks": [
          "60s mod outfits each",
          "vintage leather and denim each",
          "retro suits and shift dresses each"
        ]
      },
      "lyrics vs. wordless": {
        "locs": [
          "Rockfield Studios Wales",
          "Rockfield Quadrangle Wales",
          "Konk Studios London"
        ],
        "poses": [
          "one tracking a guitar line, the other conducting from behind the glass",
          "both sitting on the sofa, listening to the mix with huge grins",
          "both laughing over a botched take"
        ],
        "looks": [
          "artist-casual layers each",
          "vintage band jackets and jeans each",
          "jumpers and corduroys each"
        ]
      },
      "stage vs. bedroom": {
        "locs": [
          "garage band practice space",
          "piano shop showroom evening",
          "rooftop speaker setup"
        ],
        "poses": [
          "both hammering a rhythm on whatever's nearby, laughing",
          "both listening with eyes closed, heads tilted together",
          "both squeezed onto one stool, playing the same guitar"
        ],
        "looks": [
          "oversized flannels and beanies each",
          "band tees and ripped jeans each",
          "vintage cardigans and corduroys each"
        ]
      },
      "tuned vs. broken": {
        "locs": [
          "King Tut's Glasgow stage",
          "live venue empty soundcheck",
          "tour bus bunk corridor"
        ],
        "poses": [
          "both sitting on the amp, sharing a beer after the set",
          "both headbanging side by side",
          "both sharing a mic, face to face, mid-song"
        ],
        "looks": [
          "punk patches and denim each",
          "leather jackets and band tees each",
          "vintage tour shirts and jeans each"
        ]
      },
      "beat vs. breath": {
        "locs": [
          "SWG3 Glasgow warehouse",
          "Berghain Berlin empty",
          "Fabric London empty"
        ],
        "poses": [
          "both sharing headphones, lost in the beat",
          "both mid-jump, hair flying",
          "both dancing wildly in the middle of the floor, arms in the air"
        ],
        "looks": [
          "mesh and metallic outfits each",
          "all-black club wear each",
          "sparkling tops and cargo trousers each"
        ]
      },
      "record vs. live": {
        "locs": [
          "Sun Studio Memphis empty",
          "Electric Lady Studio New York",
          "Muscle Shoals Alabama studio"
        ],
        "poses": [
          "both in the booth, headphones on, one singing, one conducting",
          "both lying on the floor, eyes closed, soaking in the sound",
          "both in a classic album-cover pose, side by side"
        ],
        "looks": [
          "vintage leather and denim each",
          "retro suits and shift dresses each",
          "60s mod outfits each"
        ]
      },
      "echo vs. origin": {
        "locs": [
          "empty concert hall seats",
          "Madison Square Garden empty",
          "O2 Arena London empty"
        ],
        "poses": [
          "both standing centre stage, arms raised to the empty seats",
          "one singing into the mic, the other taking a bow",
          "both sitting on the edge, legs dangling into the pit"
        ],
        "looks": [
          "glittering stage outfits each",
          "tailored velvet suits and gowns each",
          "rock-star leather and sequins each"
        ]
      },
      "high vs. low": {
        "locs": [
          "Radio City Music Hall empty",
          "Royal Albert Hall stage level",
          "Wembley Arena empty"
        ],
        "poses": [
          "one singing into the mic, the other taking a bow",
          "both sitting on the edge, legs dangling into the pit",
          "both blowing kisses to an imagined crowd"
        ],
        "looks": [
          "tailored velvet suits and gowns each",
          "rock-star leather and sequins each",
          "glittering stage outfits each"
        ]
      },
      "major vs. minor": {
        "locs": [
          "Criteria Studios Miami",
          "Capitol Studios Los Angeles",
          "Olympic Studios Barnes London"
        ],
        "poses": [
          "both lying on the floor, eyes closed, soaking in the sound",
          "both in a classic album-cover pose, side by side",
          "both leaning over the console, grinning at a playback"
        ],
        "looks": [
          "retro suits and shift dresses each",
          "60s mod outfits each",
          "vintage leather and denim each"
        ]
      },
      "crowd vs. empty room": {
        "locs": [
          "La Cigale Paris empty",
          "Olympia Paris empty",
          "Zenith Paris empty"
        ],
        "poses": [
          "both sitting on the edge, legs dangling into the pit",
          "both blowing kisses to an imagined crowd",
          "both standing centre stage, arms raised to the empty seats"
        ],
        "looks": [
          "rock-star leather and sequins each",
          "glittering stage outfits each",
          "tailored velvet suits and gowns each"
        ]
      },
      "instrument vs. voice": {
        "locs": [
          "Maida Vale Studios BBC London",
          "Air Studios Lyndhurst Hall London",
          "British Grove London"
        ],
        "poses": [
          "both sitting on the sofa, listening to the mix with huge grins",
          "both laughing over a botched take",
          "both wearing headphones, nodding in sync"
        ],
        "looks": [
          "vintage band jackets and jeans each",
          "jumpers and corduroys each",
          "artist-casual layers each"
        ]
      },
      "ending vs. encore": {
        "locs": [
          "Latitude Festival stage dawn",
          "festival camping field at golden hour",
          "outdoor festival crowd at sunset"
        ],
        "poses": [
          "both crowd-surfing, hands reaching up",
          "both dancing in the field, arms around each other",
          "both on each other's shoulders above the crowd, cheering"
        ],
        "looks": [
          "festival layers and wellies each",
          "glitter and denim cut-offs each",
          "rain ponchos and bucket hats each"
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
          "both leaning on their rackets, out of breath and laughing",
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
          "both sparring playfully, gloves up, grinning",
          "one tying the other's gloves, focused",
          "both sitting on the stool, grinning, towels around their necks"
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
          "both leaning on their rackets, out of breath and laughing",
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
          "both sparring playfully, gloves up, grinning",
          "one tying the other's gloves, focused",
          "both sitting on the stool, grinning, towels around their necks"
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
      "both leaning on their rackets, out of breath and laughing",
      "one serving as the other watches, frozen",
      "both hands on knees, gasping for breath",
      "both leaping for the rim, arms stretched",
      "both sitting on the bench, towels over their heads",
      "both sparring playfully, gloves up, grinning",
      "one tying the other's gloves, focused",
      "both sitting on the stool, grinning, towels around their necks",
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
          "both sitting on the edge, glowing after the act",
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
          "both leaning on a painted wagon, radiant and proud",
          "both walking beside a line of elephants, dust rising",
          "both sharing a tin cup of coffee on the steps, glowing"
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
          "big top rippling in the wind at dusk"
        ],
        "poses": [
          "both small before the glowing tent, hand in hand",
          "both dancing in the sawdust, humming a tune",
          "both standing proudly in the ring, arms raised to the sky"
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
          "big top rippling in the wind at dusk"
        ],
        "poses": [
          "both small before the glowing tent, hand in hand",
          "both dancing in the sawdust, humming a tune",
          "both standing proudly in the ring, arms raised to the sky"
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
          "both sitting on the edge, glowing after the act",
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
          "both leaning on a painted wagon, radiant and proud",
          "both walking beside a line of elephants, dust rising",
          "both sharing a tin cup of coffee on the steps, glowing"
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
      "big top rippling in the wind at dusk"
    ],
    "poses": [
      "both stepping into the red spotlight, arms flung wide",
      "one balanced on the other's shoulders, hands steady",
      "both bowing deeply to a roaring crowd",
      "both leaning on a painted wagon, radiant and proud",
      "both walking beside a line of elephants, dust rising",
      "both sharing a tin cup of coffee on the steps, glowing",
      "both suspended high on silks, limbs entwined",
      "one hanging by the knees reaching down to the other",
      "both balanced on the wire, arms out",
      "both at a mirror applying makeup, side by side",
      "both sitting on the edge, glowing after the act",
      "one painting the other's face with careful hands",
      "both small before the glowing tent, hand in hand",
      "both dancing in the sawdust, humming a tune",
      "both standing proudly in the ring, arms raised to the sky"
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
    "sub": "Neon Rides, Sugar & Thrills",
    "color": "#d4156a",
    "tensions": [
      "joy vs. mischief",
      "real vs. performance",
      "beautiful vs. ugly",
      "childhood vs. adulthood",
      "winning vs. losing",
      "bright vs. dark",
      "together vs. alone in a crowd",
      "magical vs. mechanical",
      "freedom vs. routine",
      "laughter vs. thrills",
      "season vs. end of season",
      "spectacle vs. ordinary",
      "sugar vs. spice",
      "anticipation vs. adrenaline",
      "last night vs. first night",
      "seen vs. overlooked in the crowd",
      "love vs. midway magic",
      "gaudy vs. sublime",
      "passing vs. permanent",
      "innocent vs. knowing"
    ],
    "affinities": {
      "joy vs. mischief": {
        "locs": [
          "funfair at closing time lights going out",
          "carnival field dawn before opening",
          "carousel empty morning after"
        ],
        "poses": [
          "both walking hand in hand through the fading lights, smiling",
          "both sitting on the carousel's edge, swinging their legs",
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
          "first-date dressed up each",
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
          "first-date dressed up each",
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
          "both sitting on the steps, glowing, sharing a flask",
          "both laughing as one hauls a heavy cable",
          "both leaning on a truck, grinning at the lights"
        ],
        "looks": [
          "worker practical clothes each, uniform",
          "worker off shift casual, relaxed each",
          "travelling show worker practical each"
        ]
      },
      "laughter vs. thrills": {
        "locs": [
          "carnival field last night season",
          "funfair entrance gates daytime",
          "carnival midway dawn packing up"
        ],
        "poses": [
          "both sitting on the carousel's edge, swinging their legs",
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
          "both walking hand in hand through the fading lights, smiling"
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
          "both leaning on a truck, grinning at the lights",
          "one repairing a ride, the other holding the torch"
        ],
        "looks": [
          "worker off shift casual, relaxed each",
          "travelling show worker practical each",
          "local teen casual, cheeky each"
        ]
      },
      "sugar vs. spice": {
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
      "anticipation vs. adrenaline": {
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
          "both walking hand in hand through the fading lights, smiling",
          "both sitting on the carousel's edge, swinging their legs"
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
      "love vs. midway magic": {
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
          "both leaning on a truck, grinning at the lights",
          "one repairing a ride, the other holding the torch",
          "both sitting on the steps, glowing, sharing a flask"
        ],
        "looks": [
          "travelling show worker practical each",
          "local teen casual, cheeky each",
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
      "both sitting on the steps, glowing, sharing a flask",
      "both laughing as one hauls a heavy cable",
      "both leaning on a truck, grinning at the lights",
      "one repairing a ride, the other holding the torch",
      "both walking hand in hand through the fading lights, smiling",
      "both sitting on the carousel's edge, swinging their legs",
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
      "first-date dressed up each",
      "dark fortune-telling shawls and jewellery each",
      "vintage 1970s-style outfit each",
      "night-out dressed up each",
      "couple-anniversary nostalgic outfits each",
      "hooded top and jeans, night chill each",
      "festival casual layers each, evening",
      "worker practical clothes each, uniform",
      "worker off shift casual, relaxed each",
      "travelling show worker practical each",
      "local teen casual, cheeky each",
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
      "wealth vs. whimsy",
      "power vs. play",
      "excess vs. elegance",
      "the gilded vs. the real",
      "new money vs. old",
      "bought vs. earned",
      "the surface vs. what's beneath",
      "luxury vs. laughter",
      "having everything vs. wanting more",
      "the golden cage vs. freedom"
    ],
    "affinities": {
      "wealth vs. whimsy": {
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
      "power vs. play": {
        "locs": [
          "1920s Wall Street private club oak panelling whiskey",
          "Mayfair private members club 1990s dark wood",
          "Venetian palazzo canal view evening candlelight"
        ],
        "poses": [
          "both lounging in leather chairs, glasses raised",
          "both standing together, a knowing smile on each face",
          "one whispering to the other behind a raised glass"
        ],
        "looks": [
          "dark three-piece suit and pearl necklace each",
          "tailored dinner jacket and satin gown each",
          "charcoal suit and silk dress each"
        ]
      },
      "excess vs. elegance": {
        "locs": [
          "1980s Texas oil money ranch interior excess gilt",
          "1980s Wall Street trading floor chaos excess",
          "New York Plaza Hotel suite excess gold"
        ],
        "poses": [
          "both lounging among piles of cash and gilt, grinning",
          "both on the phone, grinning like they've just won",
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
          "both lounging in leather chairs, glasses raised",
          "both standing together, a knowing smile on each face",
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
      "luxury vs. laughter": {
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
          "both lounging among piles of cash and gilt, grinning",
          "both on the phone, grinning like they've just won",
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
      "both lounging in leather chairs, glasses raised",
      "both standing together, a knowing smile on each face",
      "one whispering to the other behind a raised glass",
      "both lounging among piles of cash and gilt, grinning",
      "both on the phone, grinning like they've just won",
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
      "Chagall",
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
      "Kusama",
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
      "Renoir",
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
      "Chagall": {
        "locs": [
          "a night sky over a little village of tilted rooftops",
          "a garden of enormous bouquets and a glowing moon",
          "a violinist's rooftop above the clouds"
        ],
        "poses": [
          "both floating above the rooftops, wrapped around each other",
          "one flying, the other holding the other's hand like a kite string",
          "both dancing in the air beside a giant bouquet"
        ],
        "looks": [
          "flowing blue and red clothes each",
          "embroidered folk dress and waistcoat each",
          "bridal veil and dark suit floating behind each"
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
          "a sparse blue-toned room with a guitar and a window",
          "a warm terracotta circus ring in soft light"
        ],
        "poses": [
          "both shown front and profile at once, faces split",
          "both close together, one strumming a guitar",
          "both tender as travelling acrobats"
        ],
        "looks": [
          "geometric fractured clothes in angular shapes each",
          "soft blue clothes with a striped scarf each",
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
          "both at the counter, sharing a slice of pie, smiling",
          "one seated by the window, the other leaning close with two cups of coffee",
          "both on the porch, feet up, sunlit and easy"
        ],
        "looks": [
          "1940s working coat and hat each",
          "simple 1940s dress and cardigan each",
          "1930s casual jacket and slacks each"
        ]
      },
      "Kusama": {
        "locs": [
          "a mirrored infinity room of glowing lights",
          "a field of giant polka-dotted pumpkins",
          "a white room blooming with red and white dots"
        ],
        "poses": [
          "both sitting among the pumpkins, dotted from head to toe",
          "both reaching toward the endless reflections, grinning",
          "both spinning in the dotted room, arms wide"
        ],
        "looks": [
          "polka-dot jumpsuits matching the walls each",
          "red and white dotted dresses and suits each",
          "bright dotted coats and wigs each"
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
          "one gasping dramatically, the other grinning, inside a single comic panel",
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
      "Renoir": {
        "locs": [
          "a sunlit garden party under dappled leaves",
          "a Parisian cafe terrace in the golden hour",
          "a riverside dance floor strung with lanterns"
        ],
        "poses": [
          "both waltzing, skirts and coats swirling, laughing",
          "both sharing a table, heads together, glasses raised",
          "both leaning on the railing, relaxed and glowing"
        ],
        "looks": [
          "pastel summer dress and boater hat each",
          "striped jacket and flowered hat each",
          "soft blue gown and straw hat each"
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
          "both gazing at each other, hair loose, smiling",
          "both lying among the floating flowers, laughing",
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
      "a night sky over a little village of tilted rooftops",
      "a garden of enormous bouquets and a glowing moon",
      "a violinist's rooftop above the clouds",
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
      "a sparse blue-toned room with a guitar and a window",
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
      "a mirrored infinity room of glowing lights",
      "a field of giant polka-dotted pumpkins",
      "a white room blooming with red and white dots",
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
      "a sunlit garden party under dappled leaves",
      "a Parisian cafe terrace in the golden hour",
      "a riverside dance floor strung with lanterns",
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
      "both floating above the rooftops, wrapped around each other",
      "one flying, the other holding the other's hand like a kite string",
      "both dancing in the air beside a giant bouquet",
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
      "both close together, one strumming a guitar",
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
      "both at the counter, sharing a slice of pie, smiling",
      "one seated by the window, the other leaning close with two cups of coffee",
      "both on the porch, feet up, sunlit and easy",
      "both sitting among the pumpkins, dotted from head to toe",
      "both reaching toward the endless reflections, grinning",
      "both spinning in the dotted room, arms wide",
      "both frontal and flat, repeated in four panels",
      "both lounging in a silver room, 1960s",
      "both stark and still against the newsprint",
      "one gasping dramatically, the other grinning, inside a single comic panel",
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
      "both waltzing, skirts and coats swirling, laughing",
      "both sharing a table, heads together, glasses raised",
      "both leaning on the railing, relaxed and glowing",
      "both on a hillside with wind in their hair",
      "both on a train over shimmering water",
      "both meeting a giant gentle spirit in the forest",
      "both frontal and still with halos",
      "both holding hands flanked by angels",
      "both enthroned side by side",
      "both gazing at each other, hair loose, smiling",
      "both lying among the floating flowers, laughing",
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
      "flowing blue and red clothes each",
      "embroidered folk dress and waistcoat each",
      "bridal veil and dark suit floating behind each",
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
      "soft blue clothes with a striped scarf each",
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
      "polka-dot jumpsuits matching the walls each",
      "red and white dotted dresses and suits each",
      "bright dotted coats and wigs each",
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
      "pastel summer dress and boater hat each",
      "striped jacket and flowered hat each",
      "soft blue gown and straw hat each",
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
      "Lagos Lagos Fashion Week backstage",
      "Copenhagen show space industrial",
      "Berlin show space former power plant",
      "Shanghai former factory show space",
      "Brooklyn Navy Yard show space",
      "BFI Southbank show London",
      "Barbican Centre show London",
      "Roundhouse show London",
      "Birmingham Custard Factory show",
      "Manchester Victoria Warehouse show",
      "Glasgow SWG3 show",
      "Lisbon LX Factory show",
      "Barcelona Palo Alto show",
      "London Somerset House courtyard show",
      "Palais de Tokyo Paris show",
      "Grand Palais Paris interior nave",
      "Louvre Cour Carrée show Paris",
      "Guggenheim rotunda show New York",
      "Whitney Biennial adjacent show",
      "MoMA garden show New York",
      "Tate Modern Bankside show London",
      "V&A Cromwell Road steps London",
      "Natural History Museum London show",
      "Edinburgh Dovecot Studios show",
      "Dublin National Museum show",
      "Seoul DDP show exterior",
      "Tokyo Rainbow Bridge show exterior",
      "Champs-Elysées midnight show",
      "Eiffel Tower platform show Paris",
      "Versailles garden show Paris",
      "Uffizi Piazzale Michelangelo show Florence",
      "Colosseum exterior show Rome",
      "Hudson Yards public show New York",
      "Met Stairs show New York",
      "BAFTA 195 Piccadilly show London",
      "Selfridges rooftop show London",
      "Fashion East venue London",
      "Goldsmiths show London",
      "Central Saint Martins BA show",
      "RCA show London",
      "LCF MA show London"
    ],
    "poses": [
      "one pinning the other's hem, both perfectly still",
      "one dressing the other from behind, a final touch",
      "both checking their reflection in the mirror, shoulders squared",
      "both laughing, caught between looks, hair half done",
      "both in a confident stride, mid-step, coats flaring",
      "back to back, garments spilling into the space",
      "one reaching back, a gesture the other answers",
      "both standing in a pool of space, deadpan and tall",
      "both posed as statues, fabric frozen in motion",
      "mirrored poses, symmetrical and still",
      "both looking over their shoulders, exactly in sync",
      "one stepping forward, the other holding the hem behind",
      "both striding through, hair and fabric streaming",
      "both seated on the steps, feet hanging, composed",
      "both in a final-look tableau, arms by their sides",
      "one fanning the other's train, both hiding a smile",
      "both mid-laugh, brief and genuine",
      "one holding a garment detail up, the other examining it",
      "both reading a stylist's notes, absorbed",
      "both in identical looks, with one tiny difference"
    ],
    "looks": [
      "avant-garde structured pieces each",
      "all-black high fashion each",
      "couture gown and sharp suit each",
      "deconstructed suits each",
      "oversized architectural silhouettes each",
      "sculptural pieces in matte black each",
      "sculptural three-dimensional garments each",
      "monochrome statement colour each",
      "sheer and opaque layers combined each",
      "couture gowns and tailored suits each",
      "dramatic capes and wide-leg trousers each",
      "volume and constraint, contrasting each",
      "raw-edge finish, intentional each",
      "repurposed luxury materials each",
      "hand-sewn details, visible each"
    ],
    "affinities": {
      "clothes vs. body": {
        "locs": [
          "London Somerset House courtyard show",
          "Palais de Tokyo Paris show",
          "Grand Palais Paris interior nave"
        ],
        "poses": [
          "both posed as statues, fabric frozen in motion",
          "mirrored poses, symmetrical and still",
          "both looking over their shoulders, exactly in sync"
        ],
        "looks": [
          "sculptural three-dimensional garments each",
          "monochrome statement colour each",
          "sheer and opaque layers combined each"
        ]
      },
      "editorial vs. commercial": {
        "locs": [
          "BAFTA 195 Piccadilly show London",
          "Selfridges rooftop show London",
          "Fashion East venue London"
        ],
        "poses": [
          "both mid-laugh, brief and genuine",
          "one holding a garment detail up, the other examining it",
          "both reading a stylist's notes, absorbed"
        ],
        "looks": [
          "raw-edge finish, intentional each",
          "repurposed luxury materials each",
          "hand-sewn details, visible each"
        ]
      },
      "trend vs. timeless": {
        "locs": [
          "Louvre Cour Carrée show Paris",
          "Guggenheim rotunda show New York",
          "Whitney Biennial adjacent show"
        ],
        "poses": [
          "mirrored poses, symmetrical and still",
          "both looking over their shoulders, exactly in sync",
          "one stepping forward, the other holding the hem behind"
        ],
        "looks": [
          "monochrome statement colour each",
          "sheer and opaque layers combined each",
          "sculptural three-dimensional garments each"
        ]
      },
      "dressed vs. undone": {
        "locs": [
          "Paris fashion week backstage Palais Royal",
          "empty runway post-show dust settling",
          "Milan Brera showroom white space"
        ],
        "poses": [
          "one pinning the other's hem, both perfectly still",
          "one dressing the other from behind, a final touch",
          "both checking their reflection in the mirror, shoulders squared"
        ],
        "looks": [
          "avant-garde structured pieces each",
          "all-black high fashion each",
          "couture gown and sharp suit each"
        ]
      },
      "camera vs. mirror": {
        "locs": [
          "studio white cyc wall full-length",
          "New York garment district loft",
          "Lagos Lagos Fashion Week backstage"
        ],
        "poses": [
          "one dressing the other from behind, a final touch",
          "both checking their reflection in the mirror, shoulders squared",
          "both laughing, caught between looks, hair half done"
        ],
        "looks": [
          "all-black high fashion each",
          "couture gown and sharp suit each",
          "avant-garde structured pieces each"
        ]
      },
      "season vs. off-season": {
        "locs": [
          "Goldsmiths show London",
          "Central Saint Martins BA show",
          "RCA show London"
        ],
        "poses": [
          "one holding a garment detail up, the other examining it",
          "both reading a stylist's notes, absorbed",
          "both in identical looks, with one tiny difference"
        ],
        "looks": [
          "repurposed luxury materials each",
          "hand-sewn details, visible each",
          "raw-edge finish, intentional each"
        ]
      },
      "designer vs. street": {
        "locs": [
          "Copenhagen show space industrial",
          "Berlin show space former power plant",
          "Shanghai former factory show space"
        ],
        "poses": [
          "both in a confident stride, mid-step, coats flaring",
          "back to back, garments spilling into the space",
          "one reaching back, a gesture the other answers"
        ],
        "looks": [
          "deconstructed suits each",
          "oversized architectural silhouettes each",
          "sculptural pieces in matte black each"
        ]
      },
      "front row vs. backstage": {
        "locs": [
          "Paris fashion week backstage Palais Royal",
          "empty runway post-show dust settling",
          "Milan Brera showroom white space"
        ],
        "poses": [
          "both checking their reflection in the mirror, shoulders squared",
          "both laughing, caught between looks, hair half done",
          "one pinning the other's hem, both perfectly still"
        ],
        "looks": [
          "couture gown and sharp suit each",
          "avant-garde structured pieces each",
          "all-black high fashion each"
        ]
      },
      "beauty vs. bizarre": {
        "locs": [
          "Seoul DDP show exterior",
          "Tokyo Rainbow Bridge show exterior",
          "Champs-Elysées midnight show"
        ],
        "poses": [
          "both striding through, hair and fabric streaming",
          "both seated on the steps, feet hanging, composed",
          "both in a final-look tableau, arms by their sides"
        ],
        "looks": [
          "couture gowns and tailored suits each",
          "dramatic capes and wide-leg trousers each",
          "volume and constraint, contrasting each"
        ]
      },
      "high fashion vs. wearable": {
        "locs": [
          "Brooklyn Navy Yard show space",
          "BFI Southbank show London",
          "Barbican Centre show London"
        ],
        "poses": [
          "back to back, garments spilling into the space",
          "one reaching back, a gesture the other answers",
          "both standing in a pool of space, deadpan and tall"
        ],
        "looks": [
          "oversized architectural silhouettes each",
          "sculptural pieces in matte black each",
          "deconstructed suits each"
        ]
      },
      "styled vs. raw": {
        "locs": [
          "LCF MA show London",
          "BAFTA 195 Piccadilly show London",
          "Selfridges rooftop show London"
        ],
        "poses": [
          "both reading a stylist's notes, absorbed",
          "both in identical looks, with one tiny difference",
          "both mid-laugh, brief and genuine"
        ],
        "looks": [
          "hand-sewn details, visible each",
          "raw-edge finish, intentional each",
          "repurposed luxury materials each"
        ]
      },
      "model vs. character": {
        "locs": [
          "Eiffel Tower platform show Paris",
          "Versailles garden show Paris",
          "Uffizi Piazzale Michelangelo show Florence"
        ],
        "poses": [
          "both seated on the steps, feet hanging, composed",
          "both in a final-look tableau, arms by their sides",
          "one fanning the other's train, both hiding a smile"
        ],
        "looks": [
          "dramatic capes and wide-leg trousers each",
          "volume and constraint, contrasting each",
          "couture gowns and tailored suits each"
        ]
      },
      "motion vs. pose": {
        "locs": [
          "Roundhouse show London",
          "Birmingham Custard Factory show",
          "Manchester Victoria Warehouse show"
        ],
        "poses": [
          "one reaching back, a gesture the other answers",
          "both standing in a pool of space, deadpan and tall",
          "both in a confident stride, mid-step, coats flaring"
        ],
        "looks": [
          "sculptural pieces in matte black each",
          "deconstructed suits each",
          "oversized architectural silhouettes each"
        ]
      },
      "haute couture vs. ready-to-wear": {
        "locs": [
          "MoMA garden show New York",
          "Tate Modern Bankside show London",
          "V&A Cromwell Road steps London"
        ],
        "poses": [
          "both looking over their shoulders, exactly in sync",
          "one stepping forward, the other holding the hem behind",
          "both posed as statues, fabric frozen in motion"
        ],
        "looks": [
          "sheer and opaque layers combined each",
          "sculptural three-dimensional garments each",
          "monochrome statement colour each"
        ]
      },
      "collection vs. single look": {
        "locs": [
          "Colosseum exterior show Rome",
          "Hudson Yards public show New York",
          "Met Stairs show New York"
        ],
        "poses": [
          "both in a final-look tableau, arms by their sides",
          "one fanning the other's train, both hiding a smile",
          "both striding through, hair and fabric streaming"
        ],
        "looks": [
          "volume and constraint, contrasting each",
          "couture gowns and tailored suits each",
          "dramatic capes and wide-leg trousers each"
        ]
      },
      "luxury vs. accessible": {
        "locs": [
          "Glasgow SWG3 show",
          "Lisbon LX Factory show",
          "Barcelona Palo Alto show"
        ],
        "poses": [
          "both standing in a pool of space, deadpan and tall",
          "both in a confident stride, mid-step, coats flaring",
          "back to back, garments spilling into the space"
        ],
        "looks": [
          "deconstructed suits each",
          "oversized architectural silhouettes each",
          "sculptural pieces in matte black each"
        ]
      },
      "theatrical vs. minimal": {
        "locs": [
          "Natural History Museum London show",
          "Edinburgh Dovecot Studios show",
          "Dublin National Museum show"
        ],
        "poses": [
          "one stepping forward, the other holding the hem behind",
          "both posed as statues, fabric frozen in motion",
          "mirrored poses, symmetrical and still"
        ],
        "looks": [
          "sculptural three-dimensional garments each",
          "monochrome statement colour each",
          "sheer and opaque layers combined each"
        ]
      },
      "body vs. silhouette": {
        "locs": [
          "Seoul DDP show exterior",
          "Tokyo Rainbow Bridge show exterior",
          "Champs-Elysées midnight show"
        ],
        "poses": [
          "one fanning the other's train, both hiding a smile",
          "both striding through, hair and fabric streaming",
          "both seated on the steps, feet hanging, composed"
        ],
        "looks": [
          "couture gowns and tailored suits each",
          "dramatic capes and wide-leg trousers each",
          "volume and constraint, contrasting each"
        ]
      },
      "brand vs. person": {
        "locs": [
          "Fashion East venue London",
          "Goldsmiths show London",
          "Central Saint Martins BA show"
        ],
        "poses": [
          "both in identical looks, with one tiny difference",
          "both mid-laugh, brief and genuine",
          "one holding a garment detail up, the other examining it"
        ],
        "looks": [
          "raw-edge finish, intentional each",
          "repurposed luxury materials each",
          "hand-sewn details, visible each"
        ]
      },
      "moment vs. campaign": {
        "locs": [
          "Copenhagen show space industrial",
          "Berlin show space former power plant",
          "Shanghai former factory show space"
        ],
        "poses": [
          "both in a confident stride, mid-step, coats flaring",
          "back to back, garments spilling into the space",
          "one reaching back, a gesture the other answers"
        ],
        "looks": [
          "oversized architectural silhouettes each",
          "sculptural pieces in matte black each",
          "deconstructed suits each"
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
      "confidence vs. swagger",
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
          "both facing the camera, upright and radiant",
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
          "both sitting poised, pretending nothing is odd, fighting a grin"
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
          "both sitting poised, pretending nothing is odd, fighting a grin",
          "both striking a retro pose, deadpan and deliberate"
        ],
        "looks": [
          "vintage cocktail dress and dinner jacket each",
          "candy pastels and big collars each",
          "1970s printed shirt and flares each"
        ]
      },
      "confidence vs. swagger": {
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
          "both sitting poised, pretending nothing is odd, fighting a grin",
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
      "both facing the camera, upright and radiant",
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
      "both sitting poised, pretending nothing is odd, fighting a grin",
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
          "both in profile, facing each other with a hint of a smile",
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
          "both seated upright, hands folded, calm and proud",
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
          "1940s railway platform homecoming platform station"
        ],
        "poses": [
          "both confident, looking straight into the lens",
          "one holding the other's hand, composed and formal",
          "both standing close, a warm smile in their eyes"
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
          "both seated upright, hands folded, calm and proud"
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
          "both slouched together, casual and cheeky",
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
          "both standing close, a warm smile in their eyes",
          "both confident, looking straight into the lens"
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
          "both in profile, facing each other with a hint of a smile",
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
          "both slouched together, casual and cheeky",
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
      "1940s railway platform homecoming platform station",
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
      "both seated upright, hands folded, calm and proud",
      "one seated, the other standing with a hand on the chair back",
      "both slightly blurred, unable to hold still for the long exposure",
      "both formally posed, one seated, one standing behind",
      "both in profile, facing each other with a hint of a smile",
      "one holding a parasol, the other's hand resting on a column",
      "both glamorous and aloof, chins tilted to the light",
      "both seated close, intimate and poised",
      "one resting a chin on the other's shoulder, eyes to camera",
      "both confident, looking straight into the lens",
      "one holding the other's hand, composed and formal",
      "both standing close, a warm smile in their eyes",
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
      "both slouched together, casual and cheeky",
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
    "id": "retro",
    "name": "THE RETRO",
    "sub": "Disco, Arcades & Mixtape Magic",
    "color": "#e84a9c",
    "tensions": [
      "rewind vs. fast-forward",
      "analog vs. glitter",
      "nostalgia vs. now",
      "mixtape vs. playlist",
      "cool vs. cheesy",
      "disco vs. dream",
      "pixel vs. neon",
      "sock hop vs. slow dance",
      "jukebox vs. boombox",
      "scrunchie vs. sweatband",
      "retro vs. future",
      "golden age vs. golden hour",
      "mall vs. moon",
      "slow dance vs. high score",
      "vinyl vs. VHS",
      "sleepover vs. spotlight",
      "kodachrome vs. glitter",
      "dial-up vs. disco ball",
      "then vs. tonight",
      "trend vs. timeless"
    ],
    "locs": [
      "roller disco rink under a mirror ball",
      "1970s disco floor lit from below",
      "roller rink snack bar with checkerboard tiles",
      "skate shop wall of neon wheels and posters",
      "retro bowling alley with glowing scoreboards",
      "1970s conversation pit lounge with shag carpet",
      "velvet rope entrance of a glittering nightclub",
      "neon arcade lined with glowing cabinets",
      "80s shopping mall fountain with potted palms",
      "mall food court under skylights",
      "record and cassette shop with walls of tapes",
      "video rental store aisle of VHS covers",
      "photo booth at the mall entrance",
      "mini-golf course with neon obstacles",
      "drive-in movie lot with a giant screen",
      "1950s diner booth with a jukebox",
      "convertible parked under a neon motel sign",
      "sock hop gym with streamers",
      "malt shop counter with striped awnings",
      "tailfin car on an empty desert road",
      "vintage gas pump forecourt at sunset",
      "90s sitcom-style living room with a plaid couch",
      "teen bedroom plastered with posters",
      "slumber party in a fairy-lit bedroom",
      "stairwell covered in rave flyers",
      "internet cafe with chunky monitors",
      "Y2K mall escalator under glitter lights",
      "skate park with 90s graffiti",
      "swinging-sixties London street with a phone box",
      "mod scooter rally on a seafront",
      "go-go club with a checkerboard floor",
      "psychedelic poster-covered flat",
      "record shop listening booth",
      "Carnaby-style boutique with mini-skirts",
      "hippie van parked in a flower field",
      "atomic-age living room with a starburst clock",
      "retro-futurist diner with chrome and neon",
      "world's fair pavilion with a silver rocket",
      "showroom of glowing television sets",
      "suburban lawn party with a transistor radio",
      "vintage airport lounge with tulip chairs"
    ],
    "poses": [
      "both skating hand in hand, one backward, one laughing",
      "both striking a disco pointing pose, sparkles raining down",
      "one spinning the other under an arm, both grinning",
      "both gliding in sync, arms swinging",
      "both leaning over a joystick, tongues out, mid-game",
      "both squeezed behind the curtain, making silly faces",
      "one handing the other a giant prize, grinning",
      "both striking a pose against a wall of colour",
      "both sharing one milkshake with two straws",
      "both dancing the twist, knees bent, hair flying",
      "both lounging on the hood, shades on",
      "both striking a cool pose, cool as ice",
      "both sprawled on the cushions, sharing a bowl of cereal",
      "both on the carpet with a boombox, mid-dance",
      "both on a skateboard, one riding, one hanging on",
      "both holding up a chunky phone, posing for a selfie",
      "both leaning on their ride, cool and carefree",
      "both doing the Watusi, arms swinging",
      "both flashing peace signs, flowers in their hair",
      "one in the passenger seat, the other perched on the bonnet",
      "both gazing up at the gleaming silver spire, delighted",
      "both posing like a catalogue cover, perfect smiles",
      "both mid-twist, laughing, skirts flaring",
      "both toasting with cocktails, shoulders touching"
    ],
    "looks": [
      "bell-bottoms and platform shoes each",
      "sequin halter tops and flared suits each",
      "satin jumpsuits and big collars each",
      "acid-wash denim and neon windbreakers each",
      "pastel suits with shoulder pads and big hair each",
      "legwarmers, sweatbands and bright tracksuits each",
      "poodle skirt and letterman jacket each",
      "pompadour, leather jacket and cuffed jeans each",
      "polka dot dress and rolled-up denim each",
      "flannel, baggy jeans and chokers each",
      "bucket hats, tracksuits and butterfly clips each",
      "low-rise jeans, glitter and baby tees each",
      "mini dress and slim suit each",
      "tie-dye and flared jeans each",
      "mod parka and shift dress each",
      "space-age silver and white outfits each",
      "atomic-print dresses and skinny ties each",
      "1960s jumpsuits and go-go boots each"
    ],
    "promptSuffix": "Colour grade: warm saturated vintage film colour, soft flash glow, gentle grain.",
    "affinities": {
      "rewind vs. fast-forward": {
        "locs": [
          "90s sitcom-style living room with a plaid couch",
          "teen bedroom plastered with posters",
          "slumber party in a fairy-lit bedroom"
        ],
        "poses": [
          "both sprawled on the cushions, sharing a bowl of cereal",
          "both on the carpet with a boombox, mid-dance",
          "both on a skateboard, one riding, one hanging on"
        ],
        "looks": [
          "flannel, baggy jeans and chokers each",
          "bucket hats, tracksuits and butterfly clips each",
          "low-rise jeans, glitter and baby tees each"
        ]
      },
      "analog vs. glitter": {
        "locs": [
          "roller disco rink under a mirror ball",
          "1970s disco floor lit from below",
          "roller rink snack bar with checkerboard tiles"
        ],
        "poses": [
          "both skating hand in hand, one backward, one laughing",
          "both striking a disco pointing pose, sparkles raining down",
          "one spinning the other under an arm, both grinning"
        ],
        "looks": [
          "bell-bottoms and platform shoes each",
          "sequin halter tops and flared suits each",
          "satin jumpsuits and big collars each"
        ]
      },
      "nostalgia vs. now": {
        "locs": [
          "stairwell covered in rave flyers",
          "internet cafe with chunky monitors",
          "Y2K mall escalator under glitter lights"
        ],
        "poses": [
          "both on the carpet with a boombox, mid-dance",
          "both on a skateboard, one riding, one hanging on",
          "both holding up a chunky phone, posing for a selfie"
        ],
        "looks": [
          "bucket hats, tracksuits and butterfly clips each",
          "low-rise jeans, glitter and baby tees each",
          "flannel, baggy jeans and chokers each"
        ]
      },
      "mixtape vs. playlist": {
        "locs": [
          "neon arcade lined with glowing cabinets",
          "80s shopping mall fountain with potted palms",
          "mall food court under skylights"
        ],
        "poses": [
          "both leaning over a joystick, tongues out, mid-game",
          "both squeezed behind the curtain, making silly faces",
          "one handing the other a giant prize, grinning"
        ],
        "looks": [
          "acid-wash denim and neon windbreakers each",
          "pastel suits with shoulder pads and big hair each",
          "legwarmers, sweatbands and bright tracksuits each"
        ]
      },
      "cool vs. cheesy": {
        "locs": [
          "drive-in movie lot with a giant screen",
          "1950s diner booth with a jukebox",
          "convertible parked under a neon motel sign"
        ],
        "poses": [
          "both sharing one milkshake with two straws",
          "both dancing the twist, knees bent, hair flying",
          "both lounging on the hood, shades on"
        ],
        "looks": [
          "poodle skirt and letterman jacket each",
          "pompadour, leather jacket and cuffed jeans each",
          "polka dot dress and rolled-up denim each"
        ]
      },
      "disco vs. dream": {
        "locs": [
          "skate shop wall of neon wheels and posters",
          "retro bowling alley with glowing scoreboards",
          "1970s conversation pit lounge with shag carpet"
        ],
        "poses": [
          "both striking a disco pointing pose, sparkles raining down",
          "one spinning the other under an arm, both grinning",
          "both gliding in sync, arms swinging"
        ],
        "looks": [
          "sequin halter tops and flared suits each",
          "satin jumpsuits and big collars each",
          "bell-bottoms and platform shoes each"
        ]
      },
      "pixel vs. neon": {
        "locs": [
          "record and cassette shop with walls of tapes",
          "video rental store aisle of VHS covers",
          "photo booth at the mall entrance"
        ],
        "poses": [
          "both squeezed behind the curtain, making silly faces",
          "one handing the other a giant prize, grinning",
          "both striking a pose against a wall of colour"
        ],
        "looks": [
          "pastel suits with shoulder pads and big hair each",
          "legwarmers, sweatbands and bright tracksuits each",
          "acid-wash denim and neon windbreakers each"
        ]
      },
      "sock hop vs. slow dance": {
        "locs": [
          "sock hop gym with streamers",
          "malt shop counter with striped awnings",
          "tailfin car on an empty desert road"
        ],
        "poses": [
          "both dancing the twist, knees bent, hair flying",
          "both lounging on the hood, shades on",
          "both striking a cool pose, cool as ice"
        ],
        "looks": [
          "pompadour, leather jacket and cuffed jeans each",
          "polka dot dress and rolled-up denim each",
          "poodle skirt and letterman jacket each"
        ]
      },
      "jukebox vs. boombox": {
        "locs": [
          "vintage gas pump forecourt at sunset",
          "drive-in movie lot with a giant screen",
          "1950s diner booth with a jukebox"
        ],
        "poses": [
          "both lounging on the hood, shades on",
          "both striking a cool pose, cool as ice",
          "both sharing one milkshake with two straws"
        ],
        "looks": [
          "polka dot dress and rolled-up denim each",
          "poodle skirt and letterman jacket each",
          "pompadour, leather jacket and cuffed jeans each"
        ]
      },
      "scrunchie vs. sweatband": {
        "locs": [
          "skate park with 90s graffiti",
          "90s sitcom-style living room with a plaid couch",
          "teen bedroom plastered with posters"
        ],
        "poses": [
          "both on a skateboard, one riding, one hanging on",
          "both holding up a chunky phone, posing for a selfie",
          "both sprawled on the cushions, sharing a bowl of cereal"
        ],
        "looks": [
          "low-rise jeans, glitter and baby tees each",
          "flannel, baggy jeans and chokers each",
          "bucket hats, tracksuits and butterfly clips each"
        ]
      },
      "retro vs. future": {
        "locs": [
          "atomic-age living room with a starburst clock",
          "retro-futurist diner with chrome and neon",
          "world's fair pavilion with a silver rocket"
        ],
        "poses": [
          "both gazing up at the gleaming silver spire, delighted",
          "both posing like a catalogue cover, perfect smiles",
          "both mid-twist, laughing, skirts flaring"
        ],
        "looks": [
          "space-age silver and white outfits each",
          "atomic-print dresses and skinny ties each",
          "1960s jumpsuits and go-go boots each"
        ]
      },
      "golden age vs. golden hour": {
        "locs": [
          "convertible parked under a neon motel sign",
          "sock hop gym with streamers",
          "malt shop counter with striped awnings"
        ],
        "poses": [
          "both striking a cool pose, cool as ice",
          "both sharing one milkshake with two straws",
          "both dancing the twist, knees bent, hair flying"
        ],
        "looks": [
          "poodle skirt and letterman jacket each",
          "pompadour, leather jacket and cuffed jeans each",
          "polka dot dress and rolled-up denim each"
        ]
      },
      "mall vs. moon": {
        "locs": [
          "showroom of glowing television sets",
          "suburban lawn party with a transistor radio",
          "vintage airport lounge with tulip chairs"
        ],
        "poses": [
          "both posing like a catalogue cover, perfect smiles",
          "both mid-twist, laughing, skirts flaring",
          "both toasting with cocktails, shoulders touching"
        ],
        "looks": [
          "atomic-print dresses and skinny ties each",
          "1960s jumpsuits and go-go boots each",
          "space-age silver and white outfits each"
        ]
      },
      "slow dance vs. high score": {
        "locs": [
          "mini-golf course with neon obstacles",
          "neon arcade lined with glowing cabinets",
          "80s shopping mall fountain with potted palms"
        ],
        "poses": [
          "one handing the other a giant prize, grinning",
          "both striking a pose against a wall of colour",
          "both leaning over a joystick, tongues out, mid-game"
        ],
        "looks": [
          "legwarmers, sweatbands and bright tracksuits each",
          "acid-wash denim and neon windbreakers each",
          "pastel suits with shoulder pads and big hair each"
        ]
      },
      "vinyl vs. VHS": {
        "locs": [
          "mall food court under skylights",
          "record and cassette shop with walls of tapes",
          "video rental store aisle of VHS covers"
        ],
        "poses": [
          "both striking a pose against a wall of colour",
          "both leaning over a joystick, tongues out, mid-game",
          "both squeezed behind the curtain, making silly faces"
        ],
        "looks": [
          "acid-wash denim and neon windbreakers each",
          "pastel suits with shoulder pads and big hair each",
          "legwarmers, sweatbands and bright tracksuits each"
        ]
      },
      "sleepover vs. spotlight": {
        "locs": [
          "slumber party in a fairy-lit bedroom",
          "stairwell covered in rave flyers",
          "internet cafe with chunky monitors"
        ],
        "poses": [
          "both holding up a chunky phone, posing for a selfie",
          "both sprawled on the cushions, sharing a bowl of cereal",
          "both on the carpet with a boombox, mid-dance"
        ],
        "looks": [
          "flannel, baggy jeans and chokers each",
          "bucket hats, tracksuits and butterfly clips each",
          "low-rise jeans, glitter and baby tees each"
        ]
      },
      "kodachrome vs. glitter": {
        "locs": [
          "swinging-sixties London street with a phone box",
          "mod scooter rally on a seafront",
          "go-go club with a checkerboard floor"
        ],
        "poses": [
          "both leaning on their ride, cool and carefree",
          "both doing the Watusi, arms swinging",
          "both flashing peace signs, flowers in their hair"
        ],
        "looks": [
          "mini dress and slim suit each",
          "tie-dye and flared jeans each",
          "mod parka and shift dress each"
        ]
      },
      "dial-up vs. disco ball": {
        "locs": [
          "velvet rope entrance of a glittering nightclub",
          "roller disco rink under a mirror ball",
          "1970s disco floor lit from below"
        ],
        "poses": [
          "one spinning the other under an arm, both grinning",
          "both gliding in sync, arms swinging",
          "both skating hand in hand, one backward, one laughing"
        ],
        "looks": [
          "satin jumpsuits and big collars each",
          "bell-bottoms and platform shoes each",
          "sequin halter tops and flared suits each"
        ]
      },
      "then vs. tonight": {
        "locs": [
          "psychedelic poster-covered flat",
          "record shop listening booth",
          "Carnaby-style boutique with mini-skirts"
        ],
        "poses": [
          "both doing the Watusi, arms swinging",
          "both flashing peace signs, flowers in their hair",
          "one in the passenger seat, the other perched on the bonnet"
        ],
        "looks": [
          "tie-dye and flared jeans each",
          "mod parka and shift dress each",
          "mini dress and slim suit each"
        ]
      },
      "trend vs. timeless": {
        "locs": [
          "hippie van parked in a flower field",
          "swinging-sixties London street with a phone box",
          "mod scooter rally on a seafront"
        ],
        "poses": [
          "both flashing peace signs, flowers in their hair",
          "one in the passenger seat, the other perched on the bonnet",
          "both leaning on their ride, cool and carefree"
        ],
        "looks": [
          "mod parka and shift dress each",
          "mini dress and slim suit each",
          "tie-dye and flared jeans each"
        ]
      }
    }
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
          "both checking each other's suit seals, excited smiles",
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
          "both floating together gazing down in wonder",
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
          "both buckled in, cheeks pulled back by the spin",
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
          "both embraced by rescue swimmers, grinning and triumphant",
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
      "both checking each other's suit seals, excited smiles",
      "both walking out arm in arm toward the gantry",
      "both waving as the van door closes",
      "both pressed to the glass, staring at the planet",
      "both floating together gazing down in wonder",
      "both hand in hand watching a sunrise from orbit",
      "both laughing over a tray of food",
      "both leaning on the grill, shirt sleeves rolled",
      "both sitting on the pool edge with drinks, watching the sky",
      "both in diving suits mid-descent, bubbles rising",
      "both buckled in, cheeks pulled back by the spin",
      "both grinning in the simulator seats, thumbs up",
      "both facing the camera proudly in full suits",
      "both saluting beside the rocket",
      "both walking the steppe toward the launch pad",
      "both emerging from the hatch, squinting into the sun",
      "both embraced by rescue swimmers, grinning and triumphant",
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
      "bed floating in dark space",
      "moon on ground everyone else ignores",
      "sun underground ceiling window",
      "horizon too close walking impossible",
      "sky below feet walking on clouds solid",
      "two moons different sizes both checking",
      "corridor of infinite identical doors",
      "library with books falling upward slowly",
      "kitchen with ocean instead of floor",
      "office with desert instead of carpet",
      "train arriving through bedroom wall",
      "telephone booth inside out ringing",
      "spiral staircase going both up and down same",
      "window looking at same room from inside",
      "door knob too large to turn reasonable",
      "forest growing on ceiling roots up",
      "giant flower field house-sized blooms",
      "door in middle of open field nowhere",
      "wedding beneath water both dry somehow",
      "eye looking back from pond surface",
      "tree growing sideways defying gravity",
      "rain falling upward both normal about it",
      "snow falling in one spot only precision",
      "clock face enormous walkable surface",
      "mirror room reflecting into infinity",
      "painting stepped into both inside art",
      "shadows going wrong direction both",
      "clocks all different times melting",
      "crowd all moving same direction both still",
      "two of the same place same time both",
      "echo of selves visible slight delay",
      "objects frozen mid-fall both normal",
      "chess board landscape full size",
      "city inverted above head walking",
      "mouth of cave that is a face enormous",
      "hands visible not the body they belong",
      "animals acting human ignored by both",
      "architecture bending around both normally"
    ],
    "poses": [
      "both floating, arms at their sides, completely calm",
      "one sitting cross-legged on nothing, the other reading beside them",
      "both walking upward, as if it were the ordinary way",
      "both looking at the impossible with polite interest",
      "one opening a door to the room they just left",
      "both calmly sitting while the room rearranges around them",
      "one upside down, the other carrying on a normal conversation",
      "both reaching into a hole in the air, curious",
      "both standing in the rain that stops exactly at them",
      "one holding the sun like a balloon, the other holding the moon",
      "both lying back as the world turns slowly over them",
      "both eating something made of air, savouring it",
      "one waving at themselves from across the room",
      "both facing their own reflection, touching it",
      "one is the other's reflection, glitching slightly",
      "both standing in two places, both versions visible",
      "both enormous and tiny in the same frame",
      "one turning into a flock of birds, the other watching with interest",
      "both walking through each other, briefly",
      "both reading the same book, with different stories"
    ],
    "looks": [
      "clothes made of shifting watercolour each",
      "clouds worn as garments, casually each",
      "constellation patterns glowing subtly each",
      "pyjamas, perfectly calm in the wrong place each",
      "workwear in a wildly wrong place each",
      "formal wear with one surreal detail each",
      "outfits entirely of growing flowers each",
      "ocean as skirt and jacket respectively",
      "coats of frozen fog worn naturally each",
      "a suit of mirrored fragments each",
      "clothes in inverted colours each",
      "one fully dressed, one in white reflection each",
      "gowns dissolving into moths at the hem each",
      "outfit with one extra arm or sleeve each",
      "garments printed with something impossible each"
    ],
    "affinities": {
      "real vs. impossible": {
        "locs": [
          "corridor of infinite identical doors",
          "library with books falling upward slowly",
          "kitchen with ocean instead of floor"
        ],
        "poses": [
          "one opening a door to the room they just left",
          "both calmly sitting while the room rearranges around them",
          "one upside down, the other carrying on a normal conversation"
        ],
        "looks": [
          "pyjamas, perfectly calm in the wrong place each",
          "workwear in a wildly wrong place each",
          "formal wear with one surreal detail each"
        ]
      },
      "waking vs. dreaming": {
        "locs": [
          "room floating in open sky above clouds",
          "staircase descending into ocean depth",
          "bed floating in dark space"
        ],
        "poses": [
          "both floating, arms at their sides, completely calm",
          "one sitting cross-legged on nothing, the other reading beside them",
          "both walking upward, as if it were the ordinary way"
        ],
        "looks": [
          "clothes made of shifting watercolour each",
          "clouds worn as garments, casually each",
          "constellation patterns glowing subtly each"
        ]
      },
      "gravity vs. float": {
        "locs": [
          "moon on ground everyone else ignores",
          "sun underground ceiling window",
          "horizon too close walking impossible"
        ],
        "poses": [
          "one sitting cross-legged on nothing, the other reading beside them",
          "both walking upward, as if it were the ordinary way",
          "both looking at the impossible with polite interest"
        ],
        "looks": [
          "clouds worn as garments, casually each",
          "constellation patterns glowing subtly each",
          "clothes made of shifting watercolour each"
        ]
      },
      "inside vs. outside": {
        "locs": [
          "office with desert instead of carpet",
          "train arriving through bedroom wall",
          "telephone booth inside out ringing"
        ],
        "poses": [
          "both calmly sitting while the room rearranges around them",
          "one upside down, the other carrying on a normal conversation",
          "both reaching into a hole in the air, curious"
        ],
        "looks": [
          "workwear in a wildly wrong place each",
          "formal wear with one surreal detail each",
          "pyjamas, perfectly calm in the wrong place each"
        ]
      },
      "scaled vs. vast": {
        "locs": [
          "chess board landscape full size",
          "city inverted above head walking",
          "mouth of cave that is a face enormous"
        ],
        "poses": [
          "both enormous and tiny in the same frame",
          "one turning into a flock of birds, the other watching with interest",
          "both walking through each other, briefly"
        ],
        "looks": [
          "gowns dissolving into moths at the hem each",
          "outfit with one extra arm or sleeve each",
          "garments printed with something impossible each"
        ]
      },
      "whole vs. fragmented": {
        "locs": [
          "clock face enormous walkable surface",
          "mirror room reflecting into infinity",
          "painting stepped into both inside art"
        ],
        "poses": [
          "one waving at themselves from across the room",
          "both facing their own reflection, touching it",
          "one is the other's reflection, glitching slightly"
        ],
        "looks": [
          "a suit of mirrored fragments each",
          "clothes in inverted colours each",
          "one fully dressed, one in white reflection each"
        ]
      },
      "visible vs. transparent": {
        "locs": [
          "shadows going wrong direction both",
          "clocks all different times melting",
          "crowd all moving same direction both still"
        ],
        "poses": [
          "both facing their own reflection, touching it",
          "one is the other's reflection, glitching slightly",
          "both standing in two places, both versions visible"
        ],
        "looks": [
          "clothes in inverted colours each",
          "one fully dressed, one in white reflection each",
          "a suit of mirrored fragments each"
        ]
      },
      "time vs. still": {
        "locs": [
          "two of the same place same time both",
          "echo of selves visible slight delay",
          "objects frozen mid-fall both normal"
        ],
        "poses": [
          "one is the other's reflection, glitching slightly",
          "both standing in two places, both versions visible",
          "one waving at themselves from across the room"
        ],
        "looks": [
          "one fully dressed, one in white reflection each",
          "a suit of mirrored fragments each",
          "clothes in inverted colours each"
        ]
      },
      "organic vs. geometric": {
        "locs": [
          "forest growing on ceiling roots up",
          "giant flower field house-sized blooms",
          "door in middle of open field nowhere"
        ],
        "poses": [
          "both standing in the rain that stops exactly at them",
          "one holding the sun like a balloon, the other holding the moon",
          "both lying back as the world turns slowly over them"
        ],
        "looks": [
          "outfits entirely of growing flowers each",
          "ocean as skirt and jacket respectively",
          "coats of frozen fog worn naturally each"
        ]
      },
      "self vs. mirror": {
        "locs": [
          "clock face enormous walkable surface",
          "mirror room reflecting into infinity",
          "painting stepped into both inside art"
        ],
        "poses": [
          "both standing in two places, both versions visible",
          "one waving at themselves from across the room",
          "both facing their own reflection, touching it"
        ],
        "looks": [
          "a suit of mirrored fragments each",
          "clothes in inverted colours each",
          "one fully dressed, one in white reflection each"
        ]
      },
      "light vs. sourceless": {
        "locs": [
          "sky below feet walking on clouds solid",
          "two moons different sizes both checking",
          "room floating in open sky above clouds"
        ],
        "poses": [
          "both walking upward, as if it were the ordinary way",
          "both looking at the impossible with polite interest",
          "both floating, arms at their sides, completely calm"
        ],
        "looks": [
          "constellation patterns glowing subtly each",
          "clothes made of shifting watercolour each",
          "clouds worn as garments, casually each"
        ]
      },
      "near vs. infinite": {
        "locs": [
          "staircase descending into ocean depth",
          "bed floating in dark space",
          "moon on ground everyone else ignores"
        ],
        "poses": [
          "both looking at the impossible with polite interest",
          "both floating, arms at their sides, completely calm",
          "one sitting cross-legged on nothing, the other reading beside them"
        ],
        "looks": [
          "clothes made of shifting watercolour each",
          "clouds worn as garments, casually each",
          "constellation patterns glowing subtly each"
        ]
      },
      "familiar vs. wrong": {
        "locs": [
          "spiral staircase going both up and down same",
          "window looking at same room from inside",
          "door knob too large to turn reasonable"
        ],
        "poses": [
          "one upside down, the other carrying on a normal conversation",
          "both reaching into a hole in the air, curious",
          "one opening a door to the room they just left"
        ],
        "looks": [
          "formal wear with one surreal detail each",
          "pyjamas, perfectly calm in the wrong place each",
          "workwear in a wildly wrong place each"
        ]
      },
      "solid vs. dissolving": {
        "locs": [
          "hands visible not the body they belong",
          "animals acting human ignored by both",
          "architecture bending around both normally"
        ],
        "poses": [
          "one turning into a flock of birds, the other watching with interest",
          "both walking through each other, briefly",
          "both reading the same book, with different stories"
        ],
        "looks": [
          "outfit with one extra arm or sleeve each",
          "garments printed with something impossible each",
          "gowns dissolving into moths at the hem each"
        ]
      },
      "one vs. many selves": {
        "locs": [
          "shadows going wrong direction both",
          "clocks all different times melting",
          "crowd all moving same direction both still"
        ],
        "poses": [
          "one waving at themselves from across the room",
          "both facing their own reflection, touching it",
          "one is the other's reflection, glitching slightly"
        ],
        "looks": [
          "clothes in inverted colours each",
          "one fully dressed, one in white reflection each",
          "a suit of mirrored fragments each"
        ]
      },
      "memory vs. place": {
        "locs": [
          "wedding beneath water both dry somehow",
          "eye looking back from pond surface",
          "tree growing sideways defying gravity"
        ],
        "poses": [
          "one holding the sun like a balloon, the other holding the moon",
          "both lying back as the world turns slowly over them",
          "both eating something made of air, savouring it"
        ],
        "looks": [
          "ocean as skirt and jacket respectively",
          "coats of frozen fog worn naturally each",
          "outfits entirely of growing flowers each"
        ]
      },
      "above vs. below reversed": {
        "locs": [
          "rain falling upward both normal about it",
          "snow falling in one spot only precision",
          "forest growing on ceiling roots up"
        ],
        "poses": [
          "both lying back as the world turns slowly over them",
          "both eating something made of air, savouring it",
          "both standing in the rain that stops exactly at them"
        ],
        "looks": [
          "coats of frozen fog worn naturally each",
          "outfits entirely of growing flowers each",
          "ocean as skirt and jacket respectively"
        ]
      },
      "door vs. nowhere": {
        "locs": [
          "corridor of infinite identical doors",
          "library with books falling upward slowly",
          "kitchen with ocean instead of floor"
        ],
        "poses": [
          "both reaching into a hole in the air, curious",
          "one opening a door to the room they just left",
          "both calmly sitting while the room rearranges around them"
        ],
        "looks": [
          "pyjamas, perfectly calm in the wrong place each",
          "workwear in a wildly wrong place each",
          "formal wear with one surreal detail each"
        ]
      },
      "human vs. element": {
        "locs": [
          "giant flower field house-sized blooms",
          "door in middle of open field nowhere",
          "wedding beneath water both dry somehow"
        ],
        "poses": [
          "both eating something made of air, savouring it",
          "both standing in the rain that stops exactly at them",
          "one holding the sun like a balloon, the other holding the moon"
        ],
        "looks": [
          "outfits entirely of growing flowers each",
          "ocean as skirt and jacket respectively",
          "coats of frozen fog worn naturally each"
        ]
      },
      "silence vs. impossible sound": {
        "locs": [
          "chess board landscape full size",
          "city inverted above head walking",
          "mouth of cave that is a face enormous"
        ],
        "poses": [
          "both walking through each other, briefly",
          "both reading the same book, with different stories",
          "both enormous and tiny in the same frame"
        ],
        "looks": [
          "garments printed with something impossible each",
          "gowns dissolving into moths at the hem each",
          "outfit with one extra arm or sleeve each"
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
          "both caught mid-joke, one trying not to laugh",
          "both caught sharing a joke, heads close together"
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
          "both caught sharing a joke, heads close together",
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
      "both caught mid-joke, one trying not to laugh",
      "both caught sharing a joke, heads close together",
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
    "sub": "Sci-Fi & Monster-Movie Camp",
    "color": "#7a1a2e",
    "tensions": [
      "thrill vs. romance",
      "mad vs. brilliant",
      "human vs. other",
      "dash vs. dare",
      "rational vs. ridiculous",
      "known vs. unknown",
      "safety vs. thrill",
      "sidekick vs. star",
      "ordinary vs. monstrous",
      "love vs. adventure",
      "science vs. nature",
      "opening scene vs. finale",
      "chase vs. catch",
      "awake vs. dreaming",
      "duo vs. monster",
      "gasp vs. grin",
      "real vs. rubber suit",
      "trust vs. plot twist",
      "retro vs. futuristic",
      "escape vs. showdown"
    ],
    "affinities": {
      "thrill vs. romance": {
        "locs": [
          "motel room at night single lamp",
          "roadside motel neon sign night",
          "bowling alley at night empty"
        ],
        "poses": [
          "both mid-gasp, caught in a freeze frame, grinning",
          "one hiding behind the other, peeking over a shoulder",
          "both dancing, oblivious to what lurks behind"
        ],
        "looks": [
          "prom gown and tuxedo each, pristine",
          "glittering prom dress and dapper suit each",
          "varsity jacket and cheerleader skirt each"
        ]
      },
      "mad vs. brilliant": {
        "locs": [
          "fog-covered graveyard at night practical light",
          "dark forest practical torch light",
          "swamp at night fog mist"
        ],
        "poses": [
          "both creeping forward, torch held high",
          "one pulling the other out of the muck",
          "both jumping back, delighted, as a hand bursts from the ground"
        ],
        "looks": [
          "camping gear and muddy boots each",
          "rugged adventure clothes each",
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
          "one in a silver costume striking a villain pose, the other mock-saluting"
        ],
        "looks": [
          "silver jumpsuit and fishbowl helmet each",
          "retro space suit with chunky gloves each",
          "tin-foil costume and antenna headband each"
        ]
      },
      "dash vs. dare": {
        "locs": [
          "abandoned factory night emergency exit green",
          "power plant cooling towers night",
          "quarry at night floodlit"
        ],
        "poses": [
          "both sprinting down the corridor, doors slamming behind",
          "one carrying the other, rescued from danger",
          "both climbing a ladder, glancing back with comic alarm"
        ],
        "looks": [
          "police uniform and trench coat each",
          "nurse uniform and orderly whites each",
          "work overalls and hard hats each"
        ]
      },
      "rational vs. ridiculous": {
        "locs": [
          "1950s laboratory neon green glow",
          "mad scientist laboratory bubbling tubes",
          "underground bunker red emergency lighting"
        ],
        "poses": [
          "one with arms thrown wide, cackling over the switch, the other pretending to faint",
          "both leaning over a bubbling flask, eyes gleaming with discovery",
          "one raising a glowing flask triumphantly, the other gasping in mock-alarm"
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
          "one in a silver costume striking a villain pose, the other mock-saluting",
          "both bracing against the blast, hair blown back"
        ],
        "looks": [
          "retro space suit with chunky gloves each",
          "tin-foil costume and antenna headband each",
          "khaki military uniform each"
        ]
      },
      "safety vs. thrill": {
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
      "sidekick vs. star": {
        "locs": [
          "warehouse district night one lamp",
          "rooftop at night city glow below",
          "hospital corridor night emergency red"
        ],
        "poses": [
          "one carrying the other, rescued from danger",
          "both climbing a ladder, glancing back with comic alarm",
          "both back to back, ray guns raised, grinning"
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
          "one shielding the other, both striking a heroic pose"
        ],
        "looks": [
          "housewife dress and delivery uniform each",
          "denim jeans and a white tee each, rebel style",
          "sheriff's uniform and flowered dress each"
        ]
      },
      "love vs. adventure": {
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
          "glittering prom dress and dapper suit each",
          "varsity jacket and cheerleader skirt each",
          "pyjamas and slippers each, caught off guard"
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
          "one raising a glowing flask triumphantly, the other gasping in mock-alarm",
          "both marvelling at the creation between them, high-fiving"
        ],
        "looks": [
          "singed lab coat and rubber gloves each",
          "tailcoat and cape with a hunched assistant's vest each",
          "Victorian doctor's coat and stethoscope each"
        ]
      },
      "opening scene vs. finale": {
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
      "chase vs. catch": {
        "locs": [
          "cave entrance dark night fog",
          "corn field at night path through",
          "giant spider web forest clearing silk glittering"
        ],
        "poses": [
          "one pulling the other out of the muck",
          "both jumping back, delighted, as a hand bursts from the ground",
          "both dashing through the trees, laughing"
        ],
        "looks": [
          "rugged adventure clothes each",
          "hooded cloak and lantern each",
          "overalls and a farmer's hat each"
        ]
      },
      "awake vs. dreaming": {
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
      "duo vs. monster": {
        "locs": [
          "old mill exterior night",
          "church at night single candle interior",
          "submarine interior cramped red light"
        ],
        "poses": [
          "one reading from an ancient book, the other lighting a candle",
          "both triumphant, one foot on the defeated monster",
          "both at the controls as lights flash, high-fiving"
        ],
        "looks": [
          "sailor's uniform and oilskin coat each",
          "dark robes and a crucifix each",
          "bathing suit and sunglasses each"
        ]
      },
      "gasp vs. grin": {
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
      "real vs. rubber suit": {
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
      "trust vs. plot twist": {
        "locs": [
          "basement stairs single overhead bulb",
          "1950s suburban basement den night",
          "1950s laboratory neon green glow"
        ],
        "poses": [
          "one raising a glowing flask triumphantly, the other gasping in mock-alarm",
          "both marvelling at the creation between them, high-fiving",
          "one with arms thrown wide, cackling over the switch, the other pretending to faint"
        ],
        "looks": [
          "tailcoat and cape with a hunched assistant's vest each",
          "Victorian doctor's coat and stethoscope each",
          "white lab coat and wild hair each, goggles pushed up"
        ]
      },
      "retro vs. futuristic": {
        "locs": [
          "fog-covered graveyard at night practical light",
          "dark forest practical torch light",
          "swamp at night fog mist"
        ],
        "poses": [
          "both jumping back, delighted, as a hand bursts from the ground",
          "both dashing through the trees, laughing",
          "both creeping forward, torch held high"
        ],
        "looks": [
          "hooded cloak and lantern each",
          "overalls and a farmer's hat each",
          "camping gear and muddy boots each"
        ]
      },
      "escape vs. showdown": {
        "locs": [
          "rural highway night headlights",
          "abandoned factory night emergency exit green",
          "power plant cooling towers night"
        ],
        "poses": [
          "both climbing a ladder, glancing back with comic alarm",
          "both back to back, ray guns raised, grinning",
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
      "giant spider web forest clearing silk glittering",
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
      "one with arms thrown wide, cackling over the switch, the other pretending to faint",
      "both leaning over a bubbling flask, eyes gleaming with discovery",
      "one raising a glowing flask triumphantly, the other gasping in mock-alarm",
      "both marvelling at the creation between them, high-fiving",
      "both pointing ray guns at something off-frame, chins high",
      "both examining a glowing object, baffled",
      "one in a silver costume striking a villain pose, the other mock-saluting",
      "both bracing against the blast, hair blown back",
      "both peering out through the curtains, flashlight in hand",
      "both running toward the camera, something looming behind",
      "both backing slowly away, hands raised",
      "one shielding the other, both striking a heroic pose",
      "both mid-gasp, caught in a freeze frame, grinning",
      "one hiding behind the other, peeking over a shoulder",
      "both dancing, oblivious to what lurks behind",
      "both gaping at something huge, popcorn spilling",
      "both creeping forward, torch held high",
      "one pulling the other out of the muck",
      "both jumping back, delighted, as a hand bursts from the ground",
      "both dashing through the trees, laughing",
      "both in theatrical costume, striking a dramatic tableau",
      "one swooning, the other catching them, Victorian-style",
      "both doing a monster mash, capes flying",
      "both arms raised in a B-movie climax pose",
      "both sprinting down the corridor, doors slamming behind",
      "one carrying the other, rescued from danger",
      "both climbing a ladder, glancing back with comic alarm",
      "both back to back, ray guns raised, grinning",
      "both standing at the edge, staring at something rising from the water",
      "one reading from an ancient book, the other lighting a candle",
      "both triumphant, one foot on the defeated monster",
      "both at the controls as lights flash, high-fiving"
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
      "glittering prom dress and dapper suit each",
      "varsity jacket and cheerleader skirt each",
      "pyjamas and slippers each, caught off guard",
      "camping gear and muddy boots each",
      "rugged adventure clothes each",
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
    "id": "legend",
    "name": "THE LEGEND",
    "sub": "Gods, Heroes & Golden Myths",
    "color": "#d4a017",
    "tensions": [
      "hero vs. destiny",
      "gods vs. mortals",
      "crown vs. quest",
      "glory vs. grace",
      "feast vs. flight",
      "legend vs. life",
      "sword vs. song",
      "dawn vs. dragon",
      "fortune vs. fate",
      "myth vs. morning",
      "temple vs. tavern",
      "oath vs. adventure",
      "gold vs. glory",
      "wonder vs. wisdom",
      "kingdom vs. cloud castle",
      "thunder vs. laughter",
      "star vs. sword",
      "journey vs. throne",
      "hero vs. heart",
      "moon vs. mountain"
    ],
    "locs": [
      "a marble palace on Mount Olympus above the clouds",
      "a golden banquet hall of the gods, laurel and wine",
      "a sunlit amphitheatre carved into a hillside",
      "a temple of white columns at the edge of the sea",
      "a laurel-lined chariot road in the sky",
      "an olive grove at dawn with a glowing oracle",
      "a great hall of Valhalla with a roaring fire",
      "the rainbow bridge Bifrost over the clouds",
      "a longship cutting through a golden sea",
      "a frozen fjord under a glowing aurora",
      "a mead hall with carved pillars and feasting",
      "a mountain peak crowned with a shining runestone",
      "Camelot's great hall with a round table",
      "an enchanted forest clearing with a sword in a stone",
      "a castle tower at sunset, banners flying",
      "a jousting field with colourful pavilions",
      "a misty lake with a hand holding a sword",
      "a fairy-lit orchard of Avalon",
      "a golden temple of the sun on the Nile at dawn",
      "a desert palace of lanterns and silk",
      "a garden of fountains and jewel-coloured tiles",
      "a mountain monastery above a sea of clouds",
      "a pagoda palace of red lacquer and gold",
      "a lotus lake before a glowing shrine",
      "a stepped sun temple of gold and jade at sunrise",
      "a jungle citadel crowned with feathers",
      "a Celtic hill fort under a rainbow",
      "a stone circle alive with fireflies",
      "a faerie mound glowing from within",
      "a sea cave of mermaids and pearls",
      "the back of a great dragon above the clouds",
      "a mountain of glittering treasure",
      "a floating island of waterfalls",
      "the gates of a city in the sky",
      "a moonlit crown of cloud with a phoenix nest",
      "a rainbow-lit cave of crystals"
    ],
    "poses": [
      "both standing tall in a shaft of sunlight, chins lifted",
      "one crowning the other with laurel, both laughing",
      "both raising jewelled cups, laughing with the whole table",
      "both striding forward, capes billowing, side by side",
      "both raising horns, laughing, foam spilling",
      "both standing on the prow, hair streaming, shields at their backs",
      "one lifting the other onto their shoulders in victory",
      "both gazing at the sky's green fire, wrapped in furs, grinning",
      "both raising a gleaming blade together, beaming",
      "one kneeling to be knighted, the other holding the blade, both grinning",
      "both toasting with clinking goblets, beaming",
      "both riding side by side, laughing, hair flying",
      "both seated on thrones, regal and amused",
      "both holding hands, bathed in a halo of light",
      "one fanning the other with a feathered fan, both smiling",
      "both stepping out through a glowing doorway, radiant",
      "both with arms raised to the sun, gleaming",
      "both dancing in a ring of light, laughing",
      "one placing a flower crown on the other",
      "both wading in glowing water, hand in hand, enchanted",
      "both riding on scaled wings, hair streaming, whooping",
      "both standing on a heap of coins, grinning",
      "one catching a shower of coins, the other tossing them",
      "both soaring weightlessly, arms wide"
    ],
    "looks": [
      "white draped togas and gold laurel each",
      "Greek chitons with gold sandals each",
      "gold-trimmed robes and winged sandals each",
      "fur-trimmed cloaks and braided hair each",
      "chainmail and bold embroidered tunics each",
      "leather armour and silver arm rings each",
      "knightly armour with flowing capes each",
      "velvet gowns and embroidered doublets each",
      "royal crowns and ermine-trimmed robes each",
      "gold collars and pleated white linen each",
      "silk robes in jewel colours each",
      "embroidered kimono and obi in red and gold each",
      "feathered headdresses and jade jewellery each",
      "green velvet cloaks and flower crowns each",
      "shell-and-pearl adorned gowns each",
      "dragon-scale armour and flowing capes each",
      "star-embroidered robes and crowns each",
      "shimmering gowns and gem-studded jackets each"
    ],
    "promptPrefix": "Epic mythological fine art portrait, painterly and luminous, heroic scale — ",
    "promptSuffix": "The subjects are the heroes of the legend, radiant and joyful.",
    "variantDirectives": [
      "Full-length double portrait, the figures small within a grand painted setting: ",
      "Three-quarter length double portrait, posture and gesture carry the feeling: ",
      "Tight head-and-shoulders portrait, faces fill the canvas: ",
      "Bold simplified composition, one dominant shape, minimal detail: ",
      "The setting dominates the canvas, the figures secondary to the scene: ",
      "Costume and fabric take centre stage, the figures posed to show the dress: "
    ],
    "affinities": {
      "hero vs. destiny": {
        "locs": [
          "Camelot's great hall with a round table",
          "an enchanted forest clearing with a sword in a stone",
          "a castle tower at sunset, banners flying"
        ],
        "poses": [
          "both raising a gleaming blade together, beaming",
          "one kneeling to be knighted, the other holding the blade, both grinning",
          "both toasting with clinking goblets, beaming"
        ],
        "looks": [
          "knightly armour with flowing capes each",
          "velvet gowns and embroidered doublets each",
          "royal crowns and ermine-trimmed robes each"
        ]
      },
      "gods vs. mortals": {
        "locs": [
          "a marble palace on Mount Olympus above the clouds",
          "a golden banquet hall of the gods, laurel and wine",
          "a sunlit amphitheatre carved into a hillside"
        ],
        "poses": [
          "both standing tall in a shaft of sunlight, chins lifted",
          "one crowning the other with laurel, both laughing",
          "both raising jewelled cups, laughing with the whole table"
        ],
        "looks": [
          "white draped togas and gold laurel each",
          "Greek chitons with gold sandals each",
          "gold-trimmed robes and winged sandals each"
        ]
      },
      "crown vs. quest": {
        "locs": [
          "a jousting field with colourful pavilions",
          "a misty lake with a hand holding a sword",
          "a fairy-lit orchard of Avalon"
        ],
        "poses": [
          "one kneeling to be knighted, the other holding the blade, both grinning",
          "both toasting with clinking goblets, beaming",
          "both riding side by side, laughing, hair flying"
        ],
        "looks": [
          "velvet gowns and embroidered doublets each",
          "royal crowns and ermine-trimmed robes each",
          "knightly armour with flowing capes each"
        ]
      },
      "glory vs. grace": {
        "locs": [
          "a temple of white columns at the edge of the sea",
          "a laurel-lined chariot road in the sky",
          "an olive grove at dawn with a glowing oracle"
        ],
        "poses": [
          "one crowning the other with laurel, both laughing",
          "both raising jewelled cups, laughing with the whole table",
          "both striding forward, capes billowing, side by side"
        ],
        "looks": [
          "Greek chitons with gold sandals each",
          "gold-trimmed robes and winged sandals each",
          "white draped togas and gold laurel each"
        ]
      },
      "feast vs. flight": {
        "locs": [
          "a great hall of Valhalla with a roaring fire",
          "the rainbow bridge Bifrost over the clouds",
          "a longship cutting through a golden sea"
        ],
        "poses": [
          "both raising horns, laughing, foam spilling",
          "both standing on the prow, hair streaming, shields at their backs",
          "one lifting the other onto their shoulders in victory"
        ],
        "looks": [
          "fur-trimmed cloaks and braided hair each",
          "chainmail and bold embroidered tunics each",
          "leather armour and silver arm rings each"
        ]
      },
      "legend vs. life": {
        "locs": [
          "a golden temple of the sun on the Nile at dawn",
          "a desert palace of lanterns and silk",
          "a garden of fountains and jewel-coloured tiles"
        ],
        "poses": [
          "both seated on thrones, regal and amused",
          "both holding hands, bathed in a halo of light",
          "one fanning the other with a feathered fan, both smiling"
        ],
        "looks": [
          "gold collars and pleated white linen each",
          "silk robes in jewel colours each",
          "embroidered kimono and obi in red and gold each"
        ]
      },
      "sword vs. song": {
        "locs": [
          "Camelot's great hall with a round table",
          "an enchanted forest clearing with a sword in a stone",
          "a castle tower at sunset, banners flying"
        ],
        "poses": [
          "both toasting with clinking goblets, beaming",
          "both riding side by side, laughing, hair flying",
          "both raising a gleaming blade together, beaming"
        ],
        "looks": [
          "royal crowns and ermine-trimmed robes each",
          "knightly armour with flowing capes each",
          "velvet gowns and embroidered doublets each"
        ]
      },
      "dawn vs. dragon": {
        "locs": [
          "the back of a great dragon above the clouds",
          "a mountain of glittering treasure",
          "a floating island of waterfalls"
        ],
        "poses": [
          "both riding on scaled wings, hair streaming, whooping",
          "both standing on a heap of coins, grinning",
          "one catching a shower of coins, the other tossing them"
        ],
        "looks": [
          "dragon-scale armour and flowing capes each",
          "star-embroidered robes and crowns each",
          "shimmering gowns and gem-studded jackets each"
        ]
      },
      "fortune vs. fate": {
        "locs": [
          "the gates of a city in the sky",
          "a moonlit crown of cloud with a phoenix nest",
          "a rainbow-lit cave of crystals"
        ],
        "poses": [
          "both standing on a heap of coins, grinning",
          "one catching a shower of coins, the other tossing them",
          "both soaring weightlessly, arms wide"
        ],
        "looks": [
          "star-embroidered robes and crowns each",
          "shimmering gowns and gem-studded jackets each",
          "dragon-scale armour and flowing capes each"
        ]
      },
      "myth vs. morning": {
        "locs": [
          "a marble palace on Mount Olympus above the clouds",
          "a golden banquet hall of the gods, laurel and wine",
          "a sunlit amphitheatre carved into a hillside"
        ],
        "poses": [
          "both raising jewelled cups, laughing with the whole table",
          "both striding forward, capes billowing, side by side",
          "both standing tall in a shaft of sunlight, chins lifted"
        ],
        "looks": [
          "gold-trimmed robes and winged sandals each",
          "white draped togas and gold laurel each",
          "Greek chitons with gold sandals each"
        ]
      },
      "temple vs. tavern": {
        "locs": [
          "a mountain monastery above a sea of clouds",
          "a pagoda palace of red lacquer and gold",
          "a lotus lake before a glowing shrine"
        ],
        "poses": [
          "both holding hands, bathed in a halo of light",
          "one fanning the other with a feathered fan, both smiling",
          "both stepping out through a glowing doorway, radiant"
        ],
        "looks": [
          "silk robes in jewel colours each",
          "embroidered kimono and obi in red and gold each",
          "gold collars and pleated white linen each"
        ]
      },
      "oath vs. adventure": {
        "locs": [
          "a frozen fjord under a glowing aurora",
          "a mead hall with carved pillars and feasting",
          "a mountain peak crowned with a shining runestone"
        ],
        "poses": [
          "both standing on the prow, hair streaming, shields at their backs",
          "one lifting the other onto their shoulders in victory",
          "both gazing at the sky's green fire, wrapped in furs, grinning"
        ],
        "looks": [
          "chainmail and bold embroidered tunics each",
          "leather armour and silver arm rings each",
          "fur-trimmed cloaks and braided hair each"
        ]
      },
      "gold vs. glory": {
        "locs": [
          "the back of a great dragon above the clouds",
          "a mountain of glittering treasure",
          "a floating island of waterfalls"
        ],
        "poses": [
          "one catching a shower of coins, the other tossing them",
          "both soaring weightlessly, arms wide",
          "both riding on scaled wings, hair streaming, whooping"
        ],
        "looks": [
          "shimmering gowns and gem-studded jackets each",
          "dragon-scale armour and flowing capes each",
          "star-embroidered robes and crowns each"
        ]
      },
      "wonder vs. wisdom": {
        "locs": [
          "a stepped sun temple of gold and jade at sunrise",
          "a jungle citadel crowned with feathers",
          "a Celtic hill fort under a rainbow"
        ],
        "poses": [
          "both with arms raised to the sun, gleaming",
          "both dancing in a ring of light, laughing",
          "one placing a flower crown on the other"
        ],
        "looks": [
          "feathered headdresses and jade jewellery each",
          "green velvet cloaks and flower crowns each",
          "shell-and-pearl adorned gowns each"
        ]
      },
      "kingdom vs. cloud castle": {
        "locs": [
          "the gates of a city in the sky",
          "a moonlit crown of cloud with a phoenix nest",
          "a rainbow-lit cave of crystals"
        ],
        "poses": [
          "both soaring weightlessly, arms wide",
          "both riding on scaled wings, hair streaming, whooping",
          "both standing on a heap of coins, grinning"
        ],
        "looks": [
          "dragon-scale armour and flowing capes each",
          "star-embroidered robes and crowns each",
          "shimmering gowns and gem-studded jackets each"
        ]
      },
      "thunder vs. laughter": {
        "locs": [
          "a great hall of Valhalla with a roaring fire",
          "the rainbow bridge Bifrost over the clouds",
          "a longship cutting through a golden sea"
        ],
        "poses": [
          "one lifting the other onto their shoulders in victory",
          "both gazing at the sky's green fire, wrapped in furs, grinning",
          "both raising horns, laughing, foam spilling"
        ],
        "looks": [
          "leather armour and silver arm rings each",
          "fur-trimmed cloaks and braided hair each",
          "chainmail and bold embroidered tunics each"
        ]
      },
      "star vs. sword": {
        "locs": [
          "a stone circle alive with fireflies",
          "a faerie mound glowing from within",
          "a sea cave of mermaids and pearls"
        ],
        "poses": [
          "both dancing in a ring of light, laughing",
          "one placing a flower crown on the other",
          "both wading in glowing water, hand in hand, enchanted"
        ],
        "looks": [
          "green velvet cloaks and flower crowns each",
          "shell-and-pearl adorned gowns each",
          "feathered headdresses and jade jewellery each"
        ]
      },
      "journey vs. throne": {
        "locs": [
          "a golden temple of the sun on the Nile at dawn",
          "a desert palace of lanterns and silk",
          "a garden of fountains and jewel-coloured tiles"
        ],
        "poses": [
          "one fanning the other with a feathered fan, both smiling",
          "both stepping out through a glowing doorway, radiant",
          "both seated on thrones, regal and amused"
        ],
        "looks": [
          "embroidered kimono and obi in red and gold each",
          "gold collars and pleated white linen each",
          "silk robes in jewel colours each"
        ]
      },
      "hero vs. heart": {
        "locs": [
          "a jousting field with colourful pavilions",
          "a misty lake with a hand holding a sword",
          "a fairy-lit orchard of Avalon"
        ],
        "poses": [
          "both riding side by side, laughing, hair flying",
          "both raising a gleaming blade together, beaming",
          "one kneeling to be knighted, the other holding the blade, both grinning"
        ],
        "looks": [
          "knightly armour with flowing capes each",
          "velvet gowns and embroidered doublets each",
          "royal crowns and ermine-trimmed robes each"
        ]
      },
      "moon vs. mountain": {
        "locs": [
          "a stepped sun temple of gold and jade at sunrise",
          "a jungle citadel crowned with feathers",
          "a Celtic hill fort under a rainbow"
        ],
        "poses": [
          "one placing a flower crown on the other",
          "both wading in glowing water, hand in hand, enchanted",
          "both with arms raised to the sun, gleaming"
        ],
        "looks": [
          "shell-and-pearl adorned gowns each",
          "feathered headdresses and jade jewellery each",
          "green velvet cloaks and flower crowns each"
        ]
      }
    }
  },
  {
    "id": "valentines",
    "name": "VALENTINE'S DAY",
    "sub": "Love, Longing & Red Roses",
    "color": "#c4143c",
    "tensions": [
      "love vs. butterflies",
      "given vs. received",
      "said vs. sung",
      "romantic vs. real",
      "expectation vs. presence",
      "desire vs. delight",
      "together vs. twirling",
      "first vs. last",
      "sweet vs. spicy",
      "hope vs. giddiness",
      "public vs. private love",
      "gesture vs. feeling",
      "passion vs. comfort",
      "new vs. familiar love",
      "the card vs. the truth"
    ],
    "affinities": {
      "love vs. butterflies": {
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
          "one reading a card, the other watching with a huge grin",
          "both laughing at a failed romantic gesture"
        ],
        "looks": [
          "pyjamas and robe each",
          "simple casual clothes each",
          "soft colours, hair tousled each"
        ]
      },
      "said vs. sung": {
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
      "desire vs. delight": {
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
      "together vs. twirling": {
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
      "sweet vs. spicy": {
        "locs": [
          "letter box valentine card morning discovered",
          "valentine card writing desk lamp evening",
          "red roses delivered doorstep evening"
        ],
        "poses": [
          "one reading a card, the other watching with a huge grin",
          "both laughing at a failed romantic gesture",
          "one presenting flowers, the other receiving them, eyes closed"
        ],
        "looks": [
          "simple casual clothes each",
          "soft colours, hair tousled each",
          "pyjamas and robe each"
        ]
      },
      "hope vs. giddiness": {
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
          "one reading a card, the other watching with a huge grin"
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
          "one reading a card, the other watching with a huge grin",
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
      "one reading a card, the other watching with a huge grin",
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
      "gratitude vs. giggles",
      "love vs. time",
      "then vs. now",
      "the mother vs. the woman",
      "devotion vs. fun",
      "held vs. twirled"
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
      "gratitude vs. giggles": {
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
      "devotion vs. fun": {
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
      "held vs. twirled": {
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
      "gratitude vs. seconds",
      "abundance vs. appetite",
      "together vs. apart",
      "tradition vs. change",
      "past vs. present",
      "the table vs. the game",
      "warmth vs. obligation",
      "feast vs. fun",
      "family vs. chosen family",
      "home vs. holiday"
    ],
    "affinities": {
      "gratitude vs. seconds": {
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
      "abundance vs. appetite": {
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
      "the table vs. the game": {
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
      "feast vs. fun": {
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
      "home vs. holiday": {
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
      "spooky vs. silly",
      "real vs. imagined",
      "child vs. adult",
      "darkness vs. light",
      "trick vs. treat",
      "seen vs. hidden",
      "the mask vs. the face",
      "ghoul vs. glam",
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
      "spooky vs. silly": {
        "locs": [
          "haunted house decorated exterior night",
          "cemetery halloween decorated night moon",
          "graveyard fog machine night halloween"
        ],
        "poses": [
          "both creeping through the fog, one clutching the other's sleeve",
          "both lit from below by a flickering torch, faces eerie",
          "both striking a spooky pose, giggling"
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
          "both striking a spooky pose, giggling",
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
          "both striking a spooky pose, giggling",
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
      "ghoul vs. glam": {
        "locs": [
          "graveyard fog machine night halloween",
          "haunted hayride field night dark",
          "corn maze halloween night torches"
        ],
        "poses": [
          "both creeping through the fog, one clutching the other's sleeve",
          "both lit from below by a flickering torch, faces eerie",
          "both striking a spooky pose, giggling"
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
      "both striking a spooky pose, giggling",
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
      "colour vs. candlelight",
      "memory vs. forgetting",
      "joy vs. remembrance",
      "here vs. gone",
      "the living vs. the remembered",
      "past vs. present",
      "love vs. loss",
      "colour vs. darkness",
      "sacred vs. festive",
      "held vs. let go"
    ],
    "affinities": {
      "colour vs. candlelight": {
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
      "joy vs. remembrance": {
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
      "the living vs. the remembered": {
        "locs": [
          "cemetery marigold path candles night procession",
          "cemetery grave decorated marigolds candles night",
          "cemetery night candles thousands marigolds"
        ],
        "poses": [
          "both lighting candles among the marigolds, faces glowing",
          "both walking the petal-strewn path, holding candles",
          "both sharing sweet bread beside the flowers, laughing"
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
          "both sharing sweet bread beside the flowers, laughing",
          "both lighting candles among the marigolds, faces glowing"
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
      "both lighting candles among the marigolds, faces glowing",
      "both walking the petal-strewn path, holding candles",
      "both sharing sweet bread beside the flowers, laughing",
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
      "joy vs. cosiness",
      "warmth vs. cold",
      "together vs. tangled in lights",
      "magic vs. commercial",
      "childhood vs. adulthood",
      "giving vs. receiving",
      "sacred vs. secular",
      "wish list vs. surprise",
      "home vs. elsewhere",
      "past vs. present"
    ],
    "affinities": {
      "joy vs. cosiness": {
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
      "together vs. tangled in lights": {
        "locs": [
          "train station christmas arrival reunion",
          "airport arrivals christmas reunion"
        ],
        "poses": [
          "both hugging tightly, bags dropped at their feet",
          "one running into the other's arms",
          "both laughing and hugging at the door"
        ],
        "looks": [
          "travelling coat and scarf each",
          "winter coat and warm smile each",
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
      "wish list vs. surprise": {
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
          "both laughing and hugging at the door"
        ],
        "looks": [
          "travelling coat and scarf each",
          "winter coat and warm smile each",
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
      "both laughing and hugging at the door"
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
      "winter coat and warm smile each",
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
      "celebration vs. cuddles",
      "midnight vs. morning",
      "what was vs. what will be",
      "together vs. the year alone",
      "hope vs. mischief",
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
      "celebration vs. cuddles": {
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
      "hope vs. mischief": {
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
      "luck vs. mischief",
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
      "luck vs. mischief": {
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

const CONNECTORS={romance:['in','amid','at'],stage:['in','amid','at'],mystery:['in','amid','at'],wedding:['in','amid','at'],mountain:['in','amid','at'],water:['in','amid','at'],wild:['in','amid','at'],jungle:['in','amid','at'],desert:['in','amid','at'],rain:['in','amid','at'],cold:['in','amid','at'],night:['in','amid','at'],history:['in','amid','at'],storm:['in','amid','at'],city:['in','amid','at'],road:['in','amid','at'],canada:['in','amid','at'],caribbean:['in','amid','at'],mexico:['in','amid','at'],usa:['in','amid','at'],rooftop:['in','amid','at'],music:['in','amid','at'],court:['in','amid','at'],circus:['in','amid','at'],hero:['in','amid','at'],carnival:['in','amid','at'],gold:['in','amid','at'],art:['in','set in','within','against'],runway:['in','amid','at'],studio:['in','amid','at'],archive:['in','amid','at'],space:['in','inside','amid'],surreal:['in','amid','at'],underground:['in','amid','at'],expedition:['in','amid','within'],cctv:['in','at'],bmovie:['in','amid','at'],valentines:['in','amid','at'],mothersday:['in','amid','at'],fourthofjuly:['in','amid','at'],septiembre16:['in','amid','at'],thanksgiving:['in','amid','at'],halloween:['in','amid','at'],diadelosmuertos:['in','amid','at'],christmas:['in','amid','at'],newyearseve:['in','amid','at'],diwali:['in','amid','at'],chinesenewyear:['in','amid','at']};;

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
    ['❤️  Emotion & Relationship',['romance','stage','mystery','wedding']],
    ['🌏  Nature & Landscape',['mountain','water','wild','jungle','desert','rain','cold']],
    ['🌆  Time & Atmosphere',['night','history','storm']],
    ['🌍  Place & Culture',['city','road','canada','caribbean','mexico','usa','rooftop']],
    ['🎵  Performance & Life',['music','court','circus','hero','carnival']],
    ['✨  Style & Craft',['gold','art','runway','studio','archive','retro']],
    ['🚀  Beyond Reality',['space','surreal','underground','expedition','cctv','bmovie','legend']],
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
const LOC_TYPES = {"rain-soaked street night neon reflections": "outdoor", "alleyway rain single lamp": "both", "Paris street rain autumn night": "outdoor", "phone box rain night neon": "both", "bridge night fog below": "outdoor", "fire escape night city below": "both", "rooftop pool city lights reflection midnight": "outdoor", "car park top level night city view": "outdoor", "rooftop water tower night city": "outdoor", "rooftop city edge at midnight": "outdoor", "champagne bar on a rooftop terrace": "indoor", "empty restaurant after closing one candle": "indoor", "library closed after hours one lamp": "both", "museum closed after hours one guard lamp": "indoor", "theatre wings backstage curtain": "indoor", "grand ballroom, chandelier still lit": "indoor", "empty cinema, last showing": "indoor", "swimming pool at night, lit from below": "both", "hotel corridor single light night": "indoor", "hotel room, morning light, rumpled sheets": "indoor", "hotel balcony at sunrise with croissants": "both", "lighthouse edge storm approaching": "both", "cliff edge storm sea below": "outdoor", "summer thunderstorm porch lit": "both", "midnight garden with moonlit statues": "outdoor", "night train compartment moving": "both", "jazz club late night last song": "indoor", "night market closing stalls": "outdoor", "train platform at golden hour": "both", "boardwalk fairy lights at night": "both", "Vespa ride on a cobbled square at dusk": "outdoor", "moonlit fountain in a Rome piazza": "both", "balcony over a Venetian canal": "both", "tango floor in a candlelit cellar club": "indoor", "supermarket aisle operatic gesture fluorescent ordinary": "indoor", "kebab shop 2am grand gesture fluorescent": "both", "corner shop theatrical flourish fluorescent": "both", "post office queue theatrical monologue": "indoor", "department store escalator theatrical descent": "indoor", "betting shop theatrical reaction to result": "indoor", "chip shop 11pm theatrical romance counter": "indoor", "newsagent morning theatrical significance ordinary": "indoor", "petrol station forecourt dramatic speech nobody watching night": "indoor", "bus stop theatrical declaration nobody waiting": "indoor", "car park rooftop theatrical showdown empty night": "outdoor", "train carriage theatrical aside fellow passengers ignore": "both", "airport arrivals hall dramatic reunion theatrical": "both", "motorway services dramatic tableau ordinary setting": "both", "underpass theatrical freeze frame urban": "both", "railway platform theatrical flourish overplayed": "both", "bus upper deck theatrical speech empty": "indoor", "rooftop car park theatrical finale night": "outdoor", "laundromat 3am theatrical monologue washing machines": "indoor", "ice cream van forecourt theatrical delight": "both", "lift lobby theatrical pause before doors open": "indoor", "office corridor dramatic walk away slow motion": "indoor", "phone box raining theatrical call dramatic": "both", "swimming pool changing room dramatic exit": "indoor", "bowling alley theatrical celebration strike": "indoor", "car wash theatrical moment soap suds": "both", "karaoke bar theatrical duet fluorescent": "indoor", "library theatrical whispered intensity quiet": "indoor", "garden centre theatrical flourish among the plants": "both", "wedding registry office theatrical entrance late": "indoor", "ruined manor house exterior": "outdoor", "old clock tower interior": "indoor", "whodunit manor hall chandelier": "both", "library at night, rolling ladder and a window": "indoor", "country house library, fire crackling": "indoor", "hedge maze, lantern-lit": "both", "walled garden, ivy and a locked gate": "outdoor", "locked-room puzzle, a floor plan on the wall": "indoor", "village pub, firelit and cosy": "outdoor", "attic trapdoor, a ladder and a lamp": "indoor", "detective agency door frosted glass": "both", "private eye office desk": "indoor", "smoke-filled bar information": "both", "film noir street lamp rain": "outdoor", "1940s diner counter night": "both", "jazz club back room door": "both", "speakeasy behind bookcase": "outdoor", "foggy London street with a gaslight": "outdoor", "evidence room, corkboard of clues": "indoor", "dockside warehouse, crates and fog": "outdoor", "museum after hours case lit": "both", "jewel vault with criss-crossing lasers": "indoor", "opera house box seats": "outdoor", "masquerade ballroom": "indoor", "casino back room, green baize table": "indoor", "art gallery after hours, one painting missing": "indoor", "grand hotel penthouse with a view of the city": "both", "candlelit cellar steps": "indoor", "secret passage bookcase entrance": "both", "photography darkroom red light": "both", "print room old newspaper rotary": "both", "archive stacks, boxes to the ceiling": "both", "radio station at night, ON AIR sign glowing": "both", "Victorian factory floor, shafts of light": "both", "theatre balcony, velvet and shadow": "indoor", "empty motel parking lot night": "both", "Orient Express dining car at night": "both", "boat gliding along the Seine at night": "both", "hall of mirrors at a fairground": "indoor", "lighthouse keeper's cottage, lamp glowing": "both", "grand old hotel corridor, red carpet": "indoor", "city hall steps elopement simple morning": "indoor", "courthouse simple just the two civil": "indoor", "registry office morning queue practical": "indoor", "Paris bridge elopement spontaneous rain": "outdoor", "Las Vegas wedding chapel neon night kitsch": "indoor", "outdoor festival wedding summer": "outdoor", "cliffside elopement two and officiant sunset": "outdoor", "beach barefoot ceremony sunset": "outdoor", "Scottish highland estate ceremony dramatic": "both", "destination wedding Italy villa afternoon": "both", "church aisle traditional formal procession": "indoor", "chapel of ease rural small ceremony": "indoor", "stately home grand formal traditional": "both", "Jewish wedding chuppah traditional formal": "both", "Indian wedding mandap ceremony elaborate": "both", "Mexican civil wedding vibrant tradition": "both", "marquee reception evening dancing": "both", "reception empty after guests gone one couple": "both", "hotel suite morning after soft light": "indoor", "greenhouse botanical wedding ceremony": "indoor", "snowfield at dusk pink light": "outdoor", "glacier crevasse edge": "outdoor", "frozen waterfall ice wall": "outdoor", "narrow couloir ice": "outdoor", "snow cornice edge careful": "outdoor", "Alaska glacier terminus": "outdoor", "Mt Cook glacier New Zealand": "outdoor", "rock face midway pitch": "outdoor", "scree slope descent": "outdoor", "rocky summit cross": "outdoor", "talus slope scramble": "outdoor", "Dolomite rock tower base": "outdoor", "Patagonia spire mist": "outdoor", "Sierra Nevada granite dome": "outdoor", "Chamonix aiguille needle": "outdoor", "ridge at altitude blue sky above": "outdoor", "summit cairn wind-blown": "outdoor", "ridgeline silhouette both sides visible": "outdoor", "Scottish highland ridge": "outdoor", "Philippine volcano caldera rim": "outdoor", "East African rift escarpment": "outdoor", "Urals ancient low ridge": "outdoor", "Appalachian bald summit": "outdoor", "Faroe plateau edge cliff": "outdoor", "alpine meadow wildflowers": "outdoor", "tree line edge looking up": "outdoor", "alpine lake reflection": "outdoor", "Swiss alpine meadow cowbell": "outdoor", "Rocky Mountain aspen grove autumn": "outdoor", "Norwegian fjord above": "outdoor", "Pyrenees pass stone refuge": "outdoor", "Japanese Alps cedar forest": "outdoor", "Taiwan high mountain fog": "outdoor", "Carpathian forest ridge": "outdoor", "Rockies moraine lake": "outdoor", "high camp tent door morning": "outdoor", "mountain hut exterior dawn": "outdoor", "cable car tower base": "outdoor", "lookout tower wooden stairs": "outdoor", "Himalayan base camp prayer flags": "outdoor", "Ben Nevis CIC hut below": "outdoor", "boulder field at sunrise": "outdoor", "New Zealand Southern Alps": "outdoor", "Andes condor sky above": "outdoor", "Atlas Mountains red earth": "outdoor", "Ethiopian Simien ridge": "outdoor", "Caucasus range ancient stone": "outdoor", "Iceland lava field above cloud": "outdoor", "ocean at horizon golden hour": "outdoor", "cliff above ocean": "outdoor", "surf break line": "both", "open sea swell no land": "outdoor", "ocean trench research vessel deck": "outdoor", "beach at low tide sandbars": "outdoor", "Irish sea cliffs base": "outdoor", "Faroe Islands sea stack": "outdoor", "Iceland black sand waves": "both", "coral reef shallows clear": "both", "mangrove channel slow water": "both", "limestone pool Halong Bay": "both", "lagoon atoll Pacific": "both", "submerged ruins shallow water": "outdoor", "Amazon tributary dawn": "both", "Lake Titicaca reed island": "outdoor", "Maldives lagoon clear": "both", "empty pool at dawn": "both", "harbor pier edge": "outdoor", "reservoir concrete dam edge": "both", "infinity pool edge ocean drop": "outdoor", "lido pool 1930s architecture": "both", "dam spillway roar": "both", "canal Venice dawn": "outdoor", "Venice canal gondola point": "outdoor", "Thames at low tide mud": "both", "Hudson River pier dusk": "outdoor", "lake at first light still water": "outdoor", "estuary at golden hour": "outdoor", "mountain lake snow-edged": "outdoor", "delta mouth wide sky": "both", "fjord still water reflection": "both", "alpine lake turquoise": "outdoor", "sea loch Scotland mist": "outdoor", "frozen lake crack line": "outdoor", "Lake Baikal winter ice": "outdoor", "Dead Sea float horizon": "outdoor", "sea cave entrance low tide": "both", "rocky tidal pool exposed": "both", "kelp forest shallows": "outdoor", "waterfall base mist rising": "outdoor", "hot spring sulfur mist": "both", "geyser field Iceland": "outdoor", "cenote entrance Mexico": "both", "rain-swollen river bank": "outdoor", "tide pool Oregon coast": "outdoor", "Sardinia grotto entrance": "both", "river bend at dusk": "outdoor", "Nile at dusk feluccas": "both", "Ganges ghat at dawn": "both", "dense forest clearing shafts of light": "outdoor", "ancient woodland root tangle": "outdoor", "old growth redwood base": "outdoor", "New Forest ancient oak hollow": "outdoor", "Norwegian birch forest autumn": "outdoor", "Swedish elk forest dawn": "outdoor", "Galician mountain forest green": "outdoor", "Bhutanese forest monastery visible above": "outdoor", "New Zealand beech forest": "outdoor", "Kiwi rainforest fern gully": "outdoor", "tidal flat at low tide exposed": "outdoor", "estuarine mudflat wide sky": "outdoor", "sand dune blowout hollow": "outdoor", "flint shingle beach storm": "outdoor", "reed bed at dawn mist": "outdoor", "Exmoor coastline cliff path": "outdoor", "Pembrokeshire sea stack distant": "outdoor", "Finnish lake island landing": "outdoor", "Baltic sea coast pine": "outdoor", "Breton coastal heathland": "outdoor", "Turkish mountain lake turquoise": "outdoor", "bog moorland at dusk": "outdoor", "heath in flower purple wide": "outdoor", "limestone pavement bare": "outdoor", "peat highland loch reflected": "outdoor", "Welsh upland reservoir edge": "outdoor", "Peak District gritstone edge": "outdoor", "Lake District fell top": "outdoor", "Dartmoor tor wind": "outdoor", "Cairngorm plateau tundra": "outdoor", "Estonian bog wooden walkway": "outdoor", "cliff face at golden hour lichen-covered": "outdoor", "river gorge base spray rising": "outdoor", "chalk downland escarpment edge": "outdoor", "Scottish glen river crossing": "outdoor", "Skye Cuillin black rock": "outdoor", "Corsican gorge river": "outdoor", "Croatian karst spring": "outdoor", "Slovenian Triglav plateau": "outdoor", "open grassland in wind": "outdoor", "Hebrides machair wildflowers": "outdoor", "Sardinian maquis scrub": "outdoor", "Georgian Caucasus meadow": "outdoor", "Mongolian steppe endless": "outdoor", "Kyrgyz alpine pasture yurt distant": "outdoor", "Tibetan plateau wind-scoured": "outdoor", "Indian hill station mist": "outdoor", "Sri Lanka highland tea": "outdoor", "Australian blue mountain heath": "outdoor", "Tasmanian alpine meadow": "outdoor", "Amazon river camp at dawn": "outdoor", "Sumatra jungle river crossing": "outdoor", "Ecuador Amazon tributary camp": "outdoor", "Pantanal waterway jungle edge Brazil": "outdoor", "Orinoco delta mangrove channel": "outdoor", "Mekong river bank jungle Cambodia": "outdoor", "Irrawaddy river jungle bank Myanmar": "outdoor", "Salween river jungle edge": "outdoor", "Sabah jungle river crossing": "outdoor", "Sarawak longhouse river arrival": "outdoor", "Trinidad Caroni swamp dawn": "outdoor", "Costa Rica cloud forest mist": "outdoor", "Papua New Guinea highland trail": "outdoor", "Peru cloud forest epiphyte trees": "outdoor", "Rwanda gorilla trekking forest": "outdoor", "Uganda Bwindi forest trail": "outdoor", "Kinabalu rainforest lower slope": "outdoor", "Mindanao highland forest trail": "outdoor", "Puerto Rico El Yunque cloud forest": "outdoor", "Jamaica Blue Mountain forest": "outdoor", "Trinidad Northern Range forest": "outdoor", "Cambodia temple overgrown vines": "outdoor", "Thailand hill tribe forest edge": "outdoor", "Vietnam karst limestone jungle": "outdoor", "Belize cenote jungle clearing": "outdoor", "Guatemala Tikal temple above canopy": "outdoor", "Mexico Yucatan jungle ruin": "outdoor", "Luzon rice terrace edge forest": "outdoor", "Borneo rainforest canopy walkway": "outdoor", "Daintree rainforest Queensland": "outdoor", "Congo basin clearing giant trees": "outdoor", "Sri Lanka jungle leopard territory": "outdoor", "India Corbett forest trail edge": "outdoor", "Kenya jungle border savannah": "outdoor", "Madagascar rainforest lemur clearing": "outdoor", "Comoros forest ancient tree": "outdoor", "Sulawesi jungle crater lake": "outdoor", "Flores jungle volcanic forest": "outdoor", "Hawaii fern gully waterfall": "outdoor", "Maui bamboo forest path": "outdoor", "Grenada Grand Etang crater forest": "outdoor", "Dominica rainforest river gorge": "outdoor", "Martinique Pelée lower forest": "outdoor", "Guadeloupe volcanic forest": "outdoor", "Reunion Cirque de Cilaos": "outdoor", "Philippines Palawan jungle cove": "outdoor", "Kauai Na Pali coast jungle": "outdoor", "St Lucia banana plantation edge": "outdoor", "Seychelles Vallée de Mai palm": "outdoor", "Mauritius Black River Gorges": "outdoor", "Sahara dune sea sunset two figures tiny horizon": "outdoor", "Moroccan desert Merzouga dune sea sunset gold": "outdoor", "Rub al Khali Empty Quarter dune sea endless": "outdoor", "Rub al Khali dune crest wind sand stream": "outdoor", "Sossusvlei Namibia dune red iron oxide dawn": "outdoor", "Namib vlei dead trees orange dune dawn iconic": "outdoor", "Wadi Rum red rock Jordan dawn long shadow": "outdoor", "Jordanian desert ancient Nabataean rock city Petra dusk": "outdoor", "Arizona Monument Valley sandstone butte long shadow": "outdoor", "Death Valley Zabriskie Point badlands dawn": "outdoor", "Painted Desert Arizona colour band formation": "outdoor", "Negev desert Ramon crater vast geological": "outdoor", "Judean desert cave dwelling ancient": "outdoor", "Death Valley salt flat noon bleached vast white": "outdoor", "White Sands New Mexico gypsum dune noon": "outdoor", "Atacama salt flat mirror sky reflection": "outdoor", "Lencois Maranhenses Brazil white dune lagoon": "outdoor", "Black Rock Desert Nevada vast flat nothing": "outdoor", "Danakil Depression Ethiopia hottest place earth": "both", "Atacama Chile night sky clearest stars world": "outdoor", "Sahara oasis palm trees mirage heat shimmer": "outdoor", "Wadi Rum desert camp fire night stars": "outdoor", "Arabian desert camel caravan horizon line dawn": "outdoor", "Gobi Mongolia vast flat sand storm approaching": "both", "Sonoran desert saguaro cactus sunset Arizona": "outdoor", "Great Sand Dunes Colorado snow mountain beyond": "outdoor", "Simpson Desert Australia red dune noon": "outdoor", "Taklamakan China Silk Road ancient route": "both", "Namib fog coastal desert ghost ship distant": "outdoor", "Chilean Atacama lava field volcanic moon": "outdoor", "Mumbai monsoon first rain flooding street joy dancing": "outdoor", "Kerala monsoon paddy field rain dramatic": "both", "Bangkok monsoon flood street motorbike spray": "outdoor", "Hanoi monsoon street rain dramatic tropical": "outdoor", "Kolkata monsoon street rain reflection puddle": "outdoor", "after monsoon street reflection India dramatic": "outdoor", "Blade Runner noir rain alley neon wet reflection night": "both", "Los Angeles rain 1940s noir street": "outdoor", "Chandler rain San Francisco fog hill night": "both", "film noir wet pavement street lamp reflection": "outdoor", "Tokyo alley rain neon reflection night narrow": "both", "London grey drizzle Waterloo Bridge umbrella commute": "both", "Edinburgh drizzle grey castle behind mist": "both", "Dublin drizzle grey Georgian street umbrella": "outdoor", "Glasgow drizzle grey tenement street": "outdoor", "Portland Oregon grey drizzle everyday": "both", "tropical downpour beach shelter dramatic": "outdoor", "Scottish highland sudden downpour open moor": "outdoor", "New York summer downpour steam street": "outdoor", "Paris summer downpour cafe awning shelter": "both", "Rome sudden downpour fountain piazza": "both", "Icelandic rain dramatic rainbow cliff": "outdoor", "Vancouver rain forest dramatic mist": "outdoor", "Japanese rain bamboo forest atmospheric": "indoor", "Norwegian fjord rain mist dramatic": "outdoor", "New Zealand rain rainforest dramatic lush": "outdoor", "after rain Paris cobblestone reflection puddle golden": "both", "after rain Tokyo neon reflection puddle night": "outdoor", "after rain London Victorian street reflection lamp": "outdoor", "rainbow after storm field dramatic": "both", "frozen lake at first light crack pattern": "outdoor", "Russia Baikal clear ice walking": "outdoor", "Finland ice lake sauna shore": "outdoor", "Norway frozen fjord reflection": "outdoor", "Sweden frozen archipelago island": "outdoor", "Faroe Islands frozen waterfall": "outdoor", "Scotland winter glen frozen burn": "outdoor", "Maine coast harbor frozen": "outdoor", "Patagonia winter wind ice lake": "outdoor", "tundra flat under white sky": "outdoor", "Svalbard glacier calving edge": "outdoor", "Iceland black sand and snow": "outdoor", "Greenland ice sheet horizon": "outdoor", "Alaska Brooks Range winter": "outdoor", "Canada Yukon wilderness freeze": "outdoor", "Siberian taiga frozen river": "outdoor", "Antarctic research station exterior": "outdoor", "Sub-Antarctic island storm snow": "outdoor", "Lapland reindeer forest snow": "outdoor", "Vermont maple forest snow": "outdoor", "Japan Hokkaido snow forest": "outdoor", "Japan Aomori snow trees": "outdoor", "South Korea Jiri mountain snow": "outdoor", "Slovenia Triglav winter snow": "outdoor", "Czech Krkonose winter forest": "outdoor", "snowfield before storm dark sky": "outdoor", "ski resort predawn gondola loading": "outdoor", "Colorado high alpine winter meadow": "outdoor", "Utah Bryce Canyon snow hoodoos": "outdoor", "Spain Pyrenees winter pass": "outdoor", "Austria Dachstein glacier winter": "outdoor", "Switzerland Jungfrau winter": "outdoor", "Italy Dolomites winter ice": "outdoor", "Poland Tatra winter ridge": "outdoor", "Romania Fagaras winter ridge": "outdoor", "Montana big sky winter open": "outdoor", "Wyoming Yellowstone winter steam": "outdoor", "New Zealand South Island winter": "outdoor", "Kazakhstan steppe winter deep": "outdoor", "Kyrgyz winter yurt snow": "outdoor", "Tibet winter plateau wind": "outdoor", "Lesotho highland snow blanket": "outdoor", "Drakensberg winter frost dawn": "outdoor", "Morocco Atlas snow": "outdoor", "Bhutan winter mountain dzong": "outdoor", "Pakistan K2 base camp winter": "outdoor", "Nepal Thorong La winter crossing": "outdoor", "Bulgaria Rila winter monastery": "outdoor", "ice hall empty arena": "outdoor", "Canada Quebec winter ice hotel": "outdoor", "China Harbin ice sculpture": "outdoor", "street lamp cone of light empty": "outdoor", "predawn empty boulevard": "outdoor", "rain-soaked empty street lamp reflection": "outdoor", "city bridge walking both sides empty": "outdoor", "underground car park empty level": "outdoor", "phone box interior lit": "indoor", "underpass graffiti night colour": "outdoor", "park night fountain lit": "outdoor", "24h diner at 3am": "outdoor", "night club exterior queue gone": "outdoor", "casino exit early hours": "outdoor", "kebab shop 2am queue": "outdoor", "stadium exterior night event over": "outdoor", "theatre stage door night": "both", "concert venue exit after": "outdoor", "bar exterior last call street": "outdoor", "arcade empty closing time": "outdoor", "bowling alley last game": "outdoor", "hotel lobby late night": "indoor", "hospital exterior 4am": "outdoor", "harbour lights reflection water night": "outdoor", "ferry terminal last boat gone": "outdoor", "train station concourse empty night": "outdoor", "airport arrivals 5am": "outdoor", "fuel station forecourt night": "outdoor", "empty beach night city beyond": "outdoor", "night bus last stop end line": "outdoor", "rooftop at midnight city below": "outdoor", "neon sign alley close": "outdoor", "botanical garden night event": "outdoor", "Tokyo Shinjuku Kabukicho neon": "outdoor", "Osaka Dotonbori night reflection": "outdoor", "Seoul Hongdae night street": "outdoor", "Hong Kong Mong Kok night dense": "outdoor", "Taipei night market open": "outdoor", "Bangkok Patpong night market": "outdoor", "Ho Chi Minh night street food": "outdoor", "Singapore Clarke Quay night": "outdoor", "Kuala Lumpur Petaling night": "outdoor", "New York Times Square 4am": "outdoor", "Las Vegas strip 3am": "outdoor", "Chicago Riverwalk night": "outdoor", "Miami South Beach night": "outdoor", "New Orleans Bourbon St late": "outdoor", "Nashville Broadway night": "outdoor", "London West End 2am": "outdoor", "Paris Pigalle night": "outdoor", "Berlin Kurfürstendamm night": "outdoor", "Brussels Grande Place night": "outdoor", "Prague Wenceslas night": "outdoor", "Amsterdam canal at night, bridges lit": "outdoor", "ancient amphitheater stepped seats Athens": "outdoor", "Roman forum at sunrise empty": "both", "Colosseum interior arch looking up": "indoor", "Parthenon pillars Athens dusk": "both", "Hadrian's Wall northern edge": "both", "Vindolanda excavation trench": "both", "Egyptian pyramid at dawn no tourists": "both", "Angkor Wat sunrise reflection pool": "both", "Machu Picchu sun gate first light": "both", "Mesa Verde cliff dwelling Colorado": "outdoor", "Chaco Canyon ruins New Mexico": "outdoor", "Cahokia mounds Illinois": "both", "Serpent Mound Ohio aerial view possible": "both", "Cahokia Monks Mound base": "both", "Stonehenge solstice dawn mist": "both", "Avebury stone circle walking": "both", "Newgrange Ireland winter solstice": "both", "Viking longship museum interior": "indoor", "Jorvik Viking Centre York exterior": "outdoor", "Norman castle motte and bailey": "both", "Medieval cathedral chapter house": "both", "Tudor manor hall interior timber": "indoor", "crumbling castle courtyard Scotland": "outdoor", "abandoned monastery cloister Portugal": "both", "colonial port warehouse Jamaica": "indoor", "Bunker Hill monument Boston": "indoor", "Independence Hall Philadelphia": "both", "Colonial Williamsburg street": "outdoor", "Jamestown reconstruction Virginia": "both", "Plymouth Rock Massachusetts coast": "outdoor", "Salem witch trial memorial": "both", "battlefield memorial dawn silence": "outdoor", "Civil War battlefield marker dawn": "outdoor", "Napoleonic battlefield monument France": "outdoor", "Waterloo battlefield Belgium": "outdoor", "Gettysburg battlefield Pennsylvania": "outdoor", "Antietam battlefield Maryland dawn": "outdoor", "Little Bighorn battlefield Montana": "outdoor", "Tombstone Arizona OK Corral": "both", "Alamo San Antonio Texas exterior": "outdoor", "Berlin Wall remaining section": "both", "Checkpoint Charlie museum exterior": "outdoor", "Dresden Frauenkirche rebuilt exterior": "outdoor", "pre-storm sky bruised purple green light eerie flat calm": "both", "tornado alley Great Plains storm wall approaching vast": "outdoor", "monsoon India storm wall approaching dust first": "both", "Great Plains supercell storm rotating vast sky": "outdoor", "Australian outback storm red dust approaching wall": "both", "dust storm haboob Arizona wall approaching": "both", "North Sea storm wave lighthouse spray dramatic": "both", "tropical storm eye wall approach Caribbean coast": "outdoor", "Norwegian coast storm fjord dramatic wave": "outdoor", "storm at sea container ship wave dramatic": "both", "Mediterranean storm dramatic cliff wave spray": "outdoor", "Great Lakes storm grey vast water horizon": "both", "hurricane eye approach coast dramatic satellite": "outdoor", "Cornish coast storm wave dramatic heritage": "outdoor", "typhoon approach Hong Kong dramatic sky": "outdoor", "Scottish moor storm approaching dramatic light shafts": "outdoor", "Patagonia storm mountain dramatic wind bent tree": "outdoor", "Alpine storm lightning peak dramatic": "both", "Yorkshire moor storm approaching Brontë register": "outdoor", "winter storm blizzard white out reduced visibility": "both", "lightning strike plain night dramatic single bolt": "outdoor", "storm electricity pylon lightning dramatic": "both", "storm shelter doorway waiting dramatic light": "both", "storm aftermath debris calm eerie light": "both", "storm drain rushing water urban aftermath": "both", "storm abandoned car park flooding dramatic": "both", "storm rainbow aftermath dramatic light field": "both", "storm light dramatic shafts through cloud dramatic countryside": "both", "Turner painting storm sea ship dramatic": "both", "storm tide surge coastal town dramatic": "outdoor", "Los Angeles rain 1940s noir street lamp wet reflection": "outdoor", "Chicago noir El train overhead rain night shadow": "both", "San Francisco Chandler fog hill cable car night": "both", "New York fire escape rain night noir": "both", "Tokyo Shinjuku neon night alley narrow dense kanji": "both", "Hong Kong Mong Kok neon night dense vertical signs": "outdoor", "Seoul Gangnam neon night K-beauty signage": "both", "Osaka Dotonbori neon canal reflection night": "both", "Bangkok Chinatown neon night dense traffic": "both", "Las Vegas strip neon day garish": "both", "New York City steam vent night dramatic": "both", "London Soho alley night neon sign": "both", "New York Chinatown night dense narrow": "both", "East Berlin Plattenbau brutalist block 1970s grey": "both", "Moscow Khrushchyovka block estate winter": "both", "London Barbican brutalist concrete walkways": "both", "Marseille Unité d'Habitation Le Corbusier": "both", "Belgrade brutalist monument vast dramatic": "both", "Minsk Soviet boulevard vast ceremonial": "both", "Paris Haussmann boulevard golden stone dawn": "outdoor", "Edinburgh Old Town stone alley gaslight": "both", "Prague Old Town square golden cobblestone dawn": "both", "Budapest Parliament Danube reflection night": "both", "Vienna Ringstrasse imperial architecture dusk": "both", "Barcelona Gothic Quarter narrow golden": "both", "Paris catacombs skull lined narrow torch": "both", "Shanghai Pudong glass tower forest night": "outdoor", "Dubai glass tower desert edge dawn": "outdoor", "Singapore Marina Bay night reflection water": "both", "New York Hudson Yards contemporary glass": "both", "London Canary Wharf glass canyon night": "outdoor", "Singapore Jewel Changi waterfall interior": "outdoor", "desert highway at dusk heat shimmer": "outdoor", "state highway no buildings horizon": "outdoor", "desert road mirage ahead": "outdoor", "Mexico highway free road": "outdoor", "desert crossroads": "outdoor", "two-lane blacktop at sunset": "outdoor", "wet asphalt overpass night reflection": "outdoor", "motorway at night light trails": "outdoor", "freeway on-ramp shoulder": "outdoor", "road tunnel exit light end": "outdoor", "bridge expansion joint middle": "outdoor", "toll booth abandoned": "outdoor", "drive-in movie screen empty": "outdoor", "car wash tunnel entrance": "outdoor", "highway flyover construction": "outdoor", "motorway service park dark": "outdoor", "elevated highway bend": "outdoor", "industrial port road": "outdoor", "mountain switchback edge vertiginous": "outdoor", "coastal highway cliff edge": "outdoor", "mountain pass summit road": "outdoor", "valley road river beside": "outdoor", "forest road canopy over": "outdoor", "Norwegian fjord road tunnel": "outdoor", "Icelandic ring road empty": "outdoor", "New Zealand coastal highway": "outdoor", "South African coastal road": "outdoor", "Chilean carretera austral": "outdoor", "Colombian Pan-American mountain": "outdoor", "Peru Cusco mountain road": "outdoor", "Silk Road Kyrgyzstan pass": "outdoor", "mesa rim road": "outdoor", "interstate service road empty": "outdoor", "level crossing arms down alone": "outdoor", "weigh station closed": "outdoor", "roundabout centre at dawn": "outdoor", "main road empty market town": "outdoor", "B-road countryside both verges": "outdoor", "dirt road becoming tarmac": "outdoor", "gravel road end tarmac starts": "outdoor", "Irish bog road endless narrow": "outdoor", "Scottish single-track passing place": "outdoor", "rural crossroads at dawn": "outdoor", "flooded road section": "outdoor", "Australian outback highway road train track": "outdoor", "Patagonian ruta 40 gravel": "outdoor", "Bolivian salar crossing white": "outdoor", "Brazilian BR-116 jungle edge": "outdoor", "Trans-Siberian highway winter": "outdoor", "salt flat highway": "outdoor", "long straight flat road": "outdoor", "empty airstrip tarmac heat": "outdoor", "dragstrip start line": "outdoor", "race track pit lane": "outdoor", "abandoned race circuit": "outdoor", "race circuit backstraight": "outdoor", "tarmac airfield perimeter": "outdoor", "Route 66 desert diner exterior": "outdoor", "Route 66 motel sign rusted": "outdoor", "Route 66 filling station abandoned": "outdoor", "truck stop empty 3am": "outdoor", "empty highway rest stop": "outdoor", "highway billboard empty": "outdoor", "North American highway billboard": "outdoor", "northern lights aurora borealis vast dark sky lake": "outdoor", "ice road frozen lake truck headlights vast night": "outdoor", "Churchill Manitoba polar bear tundra twilight": "indoor", "Yukon wilderness log cabin smoke rising winter": "both", "Iqaluit Arctic settlement winter dark noon": "both", "Quebec City Old Town winter snow lanterns cobblestone": "both", "Niagara Falls frozen winter mist": "both", "Toronto winter street snow CN Tower behind": "outdoor", "Montreal alley winter snow graffiti": "both", "Vancouver harbour night mountains snow behind": "outdoor", "Pacific coast British Columbia old growth forest fog": "outdoor", "Cape Breton coastal cliff Atlantic fog": "outdoor", "Newfoundland outport fishing village fog": "outdoor", "Prairie flat horizon grain elevator sky vast": "outdoor", "Arctic tundra vast flat horizon midnight sun": "outdoor", "Lake Louise turquoise impossible colour summer": "outdoor", "Algonquin Park autumn reflection lake": "outdoor", "Banff frozen lake mountain reflection winter": "outdoor", "Whistler ski run empty dawn fresh snow": "both", "Canadian Rockies glacier valley vast": "outdoor", "Havana crumbling colonial street 1950s Chevrolet midday": "outdoor", "Cuba tobacco farm interior morning light": "indoor", "Havana rooftop sunset Malecón below": "outdoor", "Kingston dancehall night neon Jamaica": "indoor", "Jamaica Blue Mountains coffee farm morning mist": "outdoor", "Jamaica country road sugarcane afternoon": "outdoor", "Barbados rum shop interior afternoon": "indoor", "Trinidad carnival mas costume street night": "outdoor", "Trinidad Savannah carnival stage night": "both", "San Juan Old City colonial walls sunset Puerto Rico": "both", "Antigua English Harbour colonial dockyard": "outdoor", "Curaçao Willemstad colonial coloured buildings": "both", "Martinique rum distillery afternoon French colonial": "both", "Grenada nutmeg plantation afternoon": "indoor", "St Lucia Piton volcanic peak mist morning": "both", "Tobago rainforest waterfall morning": "outdoor", "Cayman Islands turtle farm": "both", "Barbados chattel house painted bright afternoon": "both", "Dominican Republic baseball field afternoon dust": "indoor", "Haiti Port-au-Prince street market colour": "outdoor", "Chichen Itza pyramid sunrise empty": "outdoor", "Oaxaca Monte Albán ruins": "outdoor", "Teotihuacan pyramids dawn": "outdoor", "Palenque jungle ruins Chiapas": "outdoor", "Uxmal Yucatan ruins": "outdoor", "Tulum ruins cliff sea below": "outdoor", "Coba pyramid climb top jungle": "outdoor", "Cholula pyramid church top": "outdoor", "Mexico City Zócalo plaza evening": "outdoor", "Merida colonial plaza Sunday": "outdoor", "San Cristóbal de las Casas highland": "outdoor", "Guanajuato callejón del Beso lane": "outdoor", "San Miguel de Allende jardin": "outdoor", "Izamal yellow town Yucatan": "outdoor", "Campeche colonial colour walls": "outdoor", "Xalapa anthro museum Veracruz": "outdoor", "Tlaxcala smallest state capital": "outdoor", "Morelia cathedral evening Michoacán": "outdoor", "Puebla Azulejo tile building": "outdoor", "Taxco silver town hilltop": "outdoor", "Oaxacan market stall morning colour": "outdoor", "Lucha libre arena ring between bouts": "outdoor", "Frida Kahlo blue house Coyoacán": "outdoor", "Xochimilco trajinera canal flower boat": "outdoor", "Guadalajara Tlaquepaque craft market": "outdoor", "Guanajuato Festival Cervantino stage": "outdoor", "Puerto Escondido surf beach Oaxaca": "outdoor", "Huatulco bay beach Oaxaca": "outdoor", "Sayulita beach Nayarit village": "outdoor", "Puerto Vallarta old town Jalisco": "outdoor", "Veracruz malecon evening": "outdoor", "Acapulco cliff diver platform": "outdoor", "Mazatlán old town Sinaloa": "outdoor", "Los Cabos arch sea rock": "outdoor", "Tulum cenote swim jungle": "outdoor", "Bacalar lake colours Quintana Roo": "outdoor", "Valladolid cenote swim Yucatan": "outdoor", "Pátzcuaro Day of Dead lake": "outdoor", "Janitzio island midnight ceremony": "outdoor", "Baja peninsula road trip": "outdoor", "Copper Canyon train Chihuahua": "outdoor", "Creel Tarahumara area Chihuahua": "outdoor", "New York Times Square 5am empty": "outdoor", "Brooklyn rooftop summer Manhattan behind": "outdoor", "San Francisco Lombard Street": "outdoor", "Chicago Bean Millennium Park reflection": "outdoor", "Seattle Pike Place Market dawn": "outdoor", "Portland Oregon Powell's Books exterior": "outdoor", "Hollywood Sign hillside view": "outdoor", "Super Bowl adjacent city street": "outdoor", "Nashville Broadway honky-tonk stage exterior": "outdoor", "New Orleans French Quarter Bourbon exterior": "outdoor", "Austin 6th Street music row": "outdoor", "New Orleans Garden District mansion": "outdoor", "Savannah mossy square Georgia": "outdoor", "Charleston Rainbow Row South Carolina": "outdoor", "Bourbon Street parade day": "outdoor", "Mardi Gras New Orleans crowd": "outdoor", "LA Venice Beach boardwalk morning": "outdoor", "Miami South Beach art deco morning": "outdoor", "Annapolis harbour Maryland": "outdoor", "Cape Cod beach Massachusetts summer": "outdoor", "Maine Portland lobster pier": "outdoor", "Hawaii Na Pali coast Kauai": "outdoor", "Pacific Coast Highway Big Sur": "outdoor", "Malibu beach LA adjacent": "outdoor", "Santa Monica pier evening": "outdoor", "Alaska Denali clear day base": "outdoor", "Grand Canyon south rim early": "outdoor", "Bryce Canyon hoodoos Utah dawn": "outdoor", "Zion Narrows Utah hiking": "outdoor", "Arches Utah Delicate Arch sunrise": "outdoor", "Monument Valley Arizona Navajo": "outdoor", "Death Valley salt pan California": "outdoor", "Yosemite Valley El Capitan view": "outdoor", "Sequoia forest drive-through tree": "outdoor", "Route 66 Cadillac Ranch Texas art": "outdoor", "Vermont fall foliage road General Store": "outdoor", "New Hampshire White Mountains": "outdoor", "NBA Finals watch party bar": "outdoor", "Black Friday mall opening queue": "outdoor", "American diner any state any time": "outdoor", "Fourth of July fireworks open": "outdoor", "Thanksgiving parade New York both": "outdoor", "county fair midway at dusk": "outdoor", "high school football stadium Friday night": "outdoor", "small-town Main Street parade": "outdoor", "Havana rooftop washing lines crumbling colonial city below": "outdoor", "Havana rooftop 1950s Chevrolet visible below dawn": "outdoor", "Havana rooftop Malecón sea beyond crumbling beautiful": "outdoor", "Tokyo neon rooftop water tank city spread night dense": "outdoor", "Hong Kong cage home rooftop dense city beyond dramatic": "outdoor", "Seoul rooftop Han River beyond night neon": "outdoor", "Osaka rooftop dense city night neon sign": "outdoor", "New York water tower rooftop Manhattan skyline dawn": "outdoor", "Brooklyn rooftop Manhattan bridge view sunset": "outdoor", "New York rooftop 1970s vintage city behind": "outdoor", "New York rooftop party night skyline": "outdoor", "Chicago water tower rooftop industrial city": "outdoor", "Paris Haussmann rooftop chimney zinc dawn golden": "outdoor", "Paris rooftop Eiffel visible golden light": "outdoor", "Paris rooftop 6th arrondissement zinc slate dawn": "outdoor", "Lisbon Alfama rooftop tile fado city below": "outdoor", "Porto rooftop azulejo tile city below river": "outdoor", "Rome rooftop terracotta dome city eternal": "outdoor", "Naples rooftop Vesuvius beyond city below": "outdoor", "Athens rooftop Acropolis visible dramatic dusk": "outdoor", "Istanbul rooftop mosque minaret city both sides": "outdoor", "São Paulo rooftop favela meets glass tower": "outdoor", "Beirut rooftop bullet holes city rebuild": "outdoor", "Cairo rooftop minaret city ancient sprawl": "outdoor", "Mumbai rooftop slum city beyond contrast": "outdoor", "Detroit abandoned factory rooftop city below dramatic": "outdoor", "rooftop garden city dawn first light plants": "outdoor", "rooftop pool city below luxury night reflection": "outdoor", "rooftop helipad empty city spread dramatic": "outdoor", "rooftop solar panels practical city beyond": "outdoor", "garage band practice space": "indoor", "piano shop showroom evening": "both", "rooftop speaker setup": "outdoor", "busker pitch underground empty": "both", "acoustic session stairwell": "indoor", "music school practice room": "both", "recording studio control room": "indoor", "mixing desk session both": "both", "Abbey Road Studios crosswalk London": "indoor", "Sun Studio Memphis empty": "indoor", "Electric Lady Studio New York": "indoor", "Muscle Shoals Alabama studio": "indoor", "Criteria Studios Miami": "indoor", "Capitol Studios Los Angeles": "indoor", "Olympic Studios Barnes London": "indoor", "Hansa Tonstudio Berlin": "indoor", "Polar Studios Stockholm": "indoor", "RAK Studios London": "indoor", "Rockfield Studios Wales": "indoor", "Rockfield Quadrangle Wales": "outdoor", "Konk Studios London": "indoor", "Maida Vale Studios BBC London": "indoor", "Air Studios Lyndhurst Hall London": "indoor", "British Grove London": "both", "Metropolis London": "indoor", "Master Rock London": "both", "empty concert hall seats": "outdoor", "Madison Square Garden empty": "outdoor", "O2 Arena London empty": "both", "Radio City Music Hall empty": "both", "Royal Albert Hall stage level": "both", "Wembley Arena empty": "both", "La Cigale Paris empty": "both", "Olympia Paris empty": "both", "Zenith Paris empty": "both", "Berghain Berlin empty": "both", "Fabric London empty": "both", "Printworks London empty": "both", "Tobacco Dock London empty": "outdoor", "The Warehouse Leeds empty": "indoor", "Sub Club Glasgow empty": "both", "SWG3 Glasgow warehouse": "indoor", "live venue empty soundcheck": "both", "tour bus bunk corridor": "indoor", "backstage catering area quiet": "both", "green room pre-gig": "both", "jazz club stage between sets": "both", "Barrowland Glasgow stage": "both", "King Tut's Glasgow stage": "both", "vinyl record store aisle": "both", "vinyl pressing plant, records stacked to the ceiling": "indoor", "wall of tour posters in a back alley": "outdoor", "Latitude Festival stage dawn": "both", "festival camping field at golden hour": "outdoor", "outdoor festival crowd at sunset": "outdoor", "1970s Roland Garros clay court red dust late afternoon": "outdoor", "Wimbledon grass court morning dew empty pre-match": "outdoor", "1960s Flushing Meadows hard court crowd behind": "outdoor", "indoor tennis court 1980s green carpet empty": "indoor", "Rolland Garros press box 1980s clay below": "both", "Harlem street basketball court chain-link night 1990s": "outdoor", "1990s school gymnasium basketball finals night": "indoor", "outdoor basketball court Los Angeles sunset 1990s": "outdoor", "1980s boxing gym ring ropes overhead single light": "indoor", "Brooklyn boxing gym 1950s leather bag dust": "indoor", "Soviet sports hall gymnasium late 1970s fluorescent": "indoor", "squash court white walls echo 1970s": "outdoor", "wrestling mat gymnasium 1970s fluorescent": "indoor", "snooker hall green baize single overhead lamp": "indoor", "fencing hall épée 1970s European championship": "indoor", "Olympic velodrome track banking 1980s": "outdoor", "ice hockey rink empty practice dawn": "both", "horse racing paddock morning dew 1960s": "outdoor", "street football pitch Brazil favela evening": "outdoor", "stadium corridor tunnel pre-match concrete": "indoor", "Soviet state circus ring red spotlight 1960s": "indoor", "Soviet circus animal trainer ring 1960s": "indoor", "Moscow State Circus dressing room backstage 1970s": "indoor", "Moscow circus school practice hall": "indoor", "Depression-era big top sawdust 1930s": "both", "Depression water for elephants register 1930s": "both", "Barnum Bailey travelling circus poster backdrop 1920s": "both", "circus train car siding dawn performers": "both", "circus parade street 1920s elephants": "outdoor", "circus wagon painted carved travelling": "both", "Cirque du Soleil contemporary rig dramatic": "both", "aerial silks rig warehouse rehearsal contemporary": "indoor", "wire act high above no net ring below": "indoor", "flying trapeze platform height big top": "both", "clown alley backstage dressing tables": "both", "circus ring empty between shows sawdust": "indoor", "circus ring single spotlight performer dust": "indoor", "big top exterior night lights": "outdoor", "1950s Italian circus Fellini register outdoor": "outdoor", "big top rippling in the wind at dusk": "both", "a dusty western main street at high noon": "outdoor", "a saloon with swinging doors and a piano gone quiet": "indoor", "a canyon of red rocks at dawn, an ambush": "both", "a misty field at dawn, long grass and drifting fog": "outdoor", "a bamboo forest in falling rain": "outdoor", "a feudal village churned to mud as a storm breaks": "outdoor", "a rain-slick alley under a flickering streetlamp": "outdoor", "a detective's office striped with blind shadows": "indoor", "a rooftop in the rain above a neon city": "outdoor", "a wooden training hall of dummies and paper screens": "indoor", "a neon-lit rooftop at night": "outdoor", "a crowded market street mid-brawl": "outdoor", "a chapel full of white doves and flying splinters": "indoor", "a warehouse of splintering crates and spent shells": "indoor", "a hospital corridor, shots echoing": "indoor", "a storm-tossed ship deck of swinging ropes": "outdoor", "a harbour tavern mid-brawl": "indoor", "a sea cave of treasure and torchlight": "outdoor", "a city skyline at night cut by a searchlight beam": "outdoor", "a rooftop ledge above a rain of neon": "outdoor", "a crumbling bridge mid-collapse": "outdoor", "a dust-choked highway of wrecked cars": "outdoor", "a scrap-built fortress under a blood-orange sky": "outdoor", "a salt flat crossed by armoured vehicles": "outdoor", "a night city street of screeching tyres": "outdoor", "a graffiti-covered parking structure under flickering lights": "outdoor", "a fire escape above a steaming alley": "outdoor", "a misty mountain peak above a sea of cloud": "outdoor", "a bamboo canopy high above the forest floor": "outdoor", "a courtyard of falling cherry blossom": "outdoor", "ferris wheel top night city glow": "outdoor", "waltzers spinning neon blur night": "outdoor", "big wheel base looking up night": "both", "carousel horses night lights spinning": "outdoor", "big wheel gondola night suspended": "both", "bumper cars overhead sparks night": "both", "dodgems arena carnival neon": "both", "helter skelter base night": "both", "waltzer operator platform night": "both", "dodgem car stationary waiting": "both", "waltzer stationary between rides": "both", "candyfloss stall dusk light pink": "outdoor", "hook-a-duck stall fairground lights": "outdoor", "coconut shy stall string lights": "outdoor", "carnival food van candleapple dusk": "both", "toffee apple stall amber light": "outdoor", "test your strength tower carnival": "both", "shooting gallery neon prizes": "both", "prize soft toy stall overloaded": "both", "cotton candy machine spinning pink": "both", "hook-a-duck water reflection lights": "both", "prize wheel spin carnival neon": "both", "ghost train entrance carnival night": "outdoor", "hall of mirrors funfair interior": "both", "fortune teller caravan carnival exterior": "outdoor", "ghost train car interior dark": "indoor", "hall of mirrors reflection infinite": "both", "carnival fire eater performance area": "both", "candy stripe tent interior carnival": "indoor", "carnival stage performance area": "both", "carnival midway night both sides lit": "outdoor", "carnival entrance arch neon night": "both", "carnival crowd midway night": "both", "carnival ticket booth night queue": "both", "carnival arc lights full night": "both", "carnival fireworks above ferris wheel": "outdoor", "ferris wheel reflection puddle rain": "outdoor", "carnival back lot behind rides": "both", "carnival generator truck back area": "both", "trailer park carnival workers housing": "outdoor", "carnival back lot empty evening": "both", "funfair field afternoon setup": "both", "funfair at closing time lights going out": "both", "carnival field dawn before opening": "outdoor", "carousel empty morning after": "outdoor", "carnival field last night season": "outdoor", "funfair entrance gates daytime": "both", "carnival midway dawn packing up": "outdoor", "carnival field first light morning": "outdoor", "fairground organ carousel music": "outdoor", "1920s Wall Street private club oak panelling whiskey": "indoor", "Mayfair private members club 1990s dark wood": "indoor", "Venetian palazzo canal view evening candlelight": "both", "Swiss bank vault interior cold formal": "indoor", "1980s Texas oil money ranch interior excess gilt": "indoor", "1980s Wall Street trading floor chaos excess": "outdoor", "New York Plaza Hotel suite excess gold": "indoor", "1970s Studio 54 excess night velvet gold": "indoor", "Dubai penthouse glass tower night city spread": "both", "Hong Kong Peninsula hotel lobby formal": "indoor", "Saudi royal palace reception hall formal": "indoor", "Las Vegas high roller suite gold fixtures midnight": "indoor", "Monte Carlo casino floor evening gowns": "indoor", "Monaco grand prix paddock exclusive 1970s": "outdoor", "Cannes film festival yacht harbour evening": "outdoor", "Beverly Hills mansion pool twilight excess": "both", "Hamptons waterfront estate summer": "both", "Marbella villa pool afternoon Spain excess": "both", "Russian oligarch yacht Mediterranean afternoon": "both", "Aspen ski lodge excess fireplace wealthy": "both", "a dark candlelit interior with a deep brown ground": "both", "a grand biblical scene with figures emerging from darkness": "both", "a bare winter landscape under a cold grey Dutch sky": "both", "a stone-floored room lit by a single candle": "both", "a sunlit yard with deep diagonal shadows": "both", "a tavern table in dramatic low light": "both", "a grand Spanish court room receding into shadow": "both", "a working kitchen with one bright window": "both", "airy Spanish countryside under a pale sky": "both", "a night sky over a little village of tilted rooftops": "outdoor", "a garden of enormous bouquets and a glowing moon": "outdoor", "a violinist's rooftop above the clouds": "outdoor", "a tiled-floor Dutch room lit by a left-hand window": "both", "a quiet corner with a map on the wall and a table": "both", "a window over a canal with the room in soft shadow": "both", "a mythological landscape under a stormy golden sky": "both", "a hunt with galloping horses": "both", "an allegorical interior hung with rich drapery": "both", "a wheat field under a swirling sky at noon": "both", "a night café lit by yellow gaslight": "both", "a small bedroom of tilted flat colour walls": "both", "a gold ornamental background of swirling patterns": "both", "a flat golden tree of life with scrolling branches": "both", "a patterned Viennese interior of gold and mosaic": "both", "an ochre and grey interior of fractured planes": "both", "a sparse blue-toned room with a guitar and a window": "both", "a warm terracotta circus ring in soft light": "both", "an interior of clashing patterned fabrics and wallpaper": "both", "an open blue sky with dancing figures": "both", "abstract cut-paper shapes in bright flat colour": "both", "a warm ochre wall of a Paris studio": "both", "a plain warm ground behind a reclining figure": "both", "a bare room with one chair in warm earth tones": "both", "a lush tropical clearing in flat bold colour": "both", "a hut interior with a woven mat floor": "both", "a Brittany village green in flat colour": "both", "a cabaret stage with a red glow and a dancing crowd": "both", "a cluttered intimate backstage dressing room": "both", "a lamplit café table at night": "both", "a late-night diner with a glaring fluorescent glow": "both", "a sunlit bedroom with a bare window": "both", "a white clapboard house under harsh sunlight": "both", "a mirrored infinity room of glowing lights": "indoor", "a field of giant polka-dotted pumpkins": "outdoor", "a white room blooming with red and white dots": "indoor", "a grid of four repeated panels in clashing colours": "both", "a silver foil walled factory room": "both", "a flat newsprint background in stark black and white": "both", "a comic panel with a speech bubble and dotted background": "both", "a war comic explosion in red and yellow": "both", "a giant brushstroke painted as a comic": "both", "a peeling brick wall with a stencilled rat": "both", "a seaside wall with a red balloon": "both", "a museum wall hung with a stencilled scene": "both", "an ornate floral border with a gold halo": "both", "a circular four-seasons panel with ornamental border": "both", "a theatre poster frame with space for lettering": "both", "a broadsheet page with a bold inked border": "both", "a Paris street scene in lithograph shading": "both", "an over-the-top Georgian parlour": "both", "a water lily pond with a Japanese bridge": "both", "a sunlit poppy field in soft haze": "both", "a harbour at dawn in pastel mist": "both", "a garden of giant tropical leaves and flowers": "both", "a blue house courtyard with parrots": "both", "a bed surrounded by symbols and roots": "both", "an empty desert plain under a golden sky with melted clocks": "both", "a dream landscape of floating objects and crutches": "both", "a long-shadowed beach of impossible rocks": "both", "a blue sky of white clouds above a quiet street": "both", "an ordinary room where a green apple floats": "both", "a seaside with a bird-shaped sky": "both", "a towering wave about to crash with Mount Fuji beyond": "both", "a cherry blossom bridge in flat colour": "both", "a snowy village under a pale sky": "both", "a scrawled graffiti ground with handwritten words": "both", "a crowded canvas of crowns and symbols": "both", "an orange and blue background with crossed-out text": "both", "a bright flat colour background with radiating lines": "both", "a dance floor of dancing outlines": "both", "a subway-wall style chalk drawing": "both", "an Art Deco skyline of silver skyscrapers": "both", "a sleek open-top car in gleaming chrome": "both", "a night terrace of geometric shadows": "both", "a hazy blue mountain landscape behind a balcony": "both", "a rocky grotto in soft light": "both", "a plain dark ground with delicate shadows": "both", "a sunlit garden party under dappled leaves": "outdoor", "a Parisian cafe terrace in the golden hour": "indoor", "a riverside dance floor strung with lanterns": "outdoor", "a green hill under towering clouds and a breeze": "both", "a small seaside town with a train running on the water": "both", "a forest clearing of glowing spirits": "both", "a gold mosaic apse under a starry dome": "both", "a jewelled arch with peacocks and vines": "both", "a church wall of blue and gold tiles": "both", "a river of floating flowers in dense detail": "both", "a tapestried medieval chamber": "both", "a woodland glade of ivy and wildflowers": "both", "a warm 1950s kitchen with a family table": "both", "a small-town soda fountain counter": "both", "a front porch on a sunny afternoon": "both", "a clear-sky harbour with a steamship": "both", "a desert of flat yellow sand and a tiny plane": "both", "a busy cobbled European street in neat colour": "both", "Paris fashion week backstage Palais Royal": "both", "empty runway post-show dust settling": "outdoor", "Milan Brera showroom white space": "both", "studio white cyc wall full-length": "indoor", "New York garment district loft": "both", "Lagos Lagos Fashion Week backstage": "both", "Copenhagen show space industrial": "both", "Berlin show space former power plant": "both", "Shanghai former factory show space": "indoor", "Brooklyn Navy Yard show space": "outdoor", "BFI Southbank show London": "both", "Barbican Centre show London": "both", "Roundhouse show London": "both", "Birmingham Custard Factory show": "indoor", "Manchester Victoria Warehouse show": "indoor", "Glasgow SWG3 show": "both", "Lisbon LX Factory show": "indoor", "Barcelona Palo Alto show": "both", "London Somerset House courtyard show": "outdoor", "Palais de Tokyo Paris show": "both", "Grand Palais Paris interior nave": "indoor", "Louvre Cour Carrée show Paris": "both", "Guggenheim rotunda show New York": "both", "Whitney Biennial adjacent show": "both", "MoMA garden show New York": "outdoor", "Tate Modern Bankside show London": "both", "V&A Cromwell Road steps London": "outdoor", "Natural History Museum London show": "both", "Edinburgh Dovecot Studios show": "indoor", "Dublin National Museum show": "both", "Seoul DDP show exterior": "outdoor", "Tokyo Rainbow Bridge show exterior": "outdoor", "Champs-Elysées midnight show": "both", "Eiffel Tower platform show Paris": "both", "Versailles garden show Paris": "outdoor", "Uffizi Piazzale Michelangelo show Florence": "both", "Colosseum exterior show Rome": "outdoor", "Hudson Yards public show New York": "outdoor", "Met Stairs show New York": "both", "BAFTA 195 Piccadilly show London": "both", "Selfridges rooftop show London": "outdoor", "Fashion East venue London": "both", "Goldsmiths show London": "both", "Central Saint Martins BA show": "both", "RCA show London": "both", "LCF MA show London": "both", "seamless white paper backdrop studio infinity curve": "indoor", "seamless black paper backdrop studio infinity curve": "indoor", "seamless mid-grey paper backdrop studio": "indoor", "seamless cream paper backdrop studio": "indoor", "seamless pale blush paper backdrop studio": "indoor", "seamless forest green paper backdrop studio": "indoor", "seamless dusty blue paper backdrop studio": "indoor", "seamless burgundy paper backdrop studio": "indoor", "bare off-white plaster studio wall textured": "indoor", "raw concrete studio wall exposed aggregate": "indoor", "painted brick interior studio wall white": "indoor", "dark painted studio wall charcoal matte": "indoor", "hand-painted grey muslin backdrop studio": "indoor", "hand-painted white-to-dark graduated muslin studio": "indoor", "cream linen textured backdrop studio": "indoor", "dark velvet fabric backdrop studio deep black": "indoor", "raw canvas unpainted backdrop studio neutral": "indoor", "draped silk fabric backdrop studio ivory": "indoor", "torn edge paper backdrop studio textured white": "indoor", "layered fabric draped backdrop studio improvised dark": "indoor", "white painted studio floor with white backdrop seamless": "indoor", "black painted studio floor with black backdrop seamless": "indoor", "light wood studio floor with white backdrop": "indoor", "dark wood studio floor with dark backdrop": "indoor", "white studio floor posing platform raised": "indoor", "plain wooden stool studio white backdrop": "indoor", "director's chair canvas studio grey backdrop": "indoor", "mid-century posing chair studio neutral backdrop": "indoor", "chaise longue upholstered studio white backdrop": "indoor", "chaise longue upholstered studio dark backdrop": "indoor", "floor level white studio both seated": "indoor", "minimal white cube set studio": "indoor", "minimal black plinth set studio": "indoor", "clear perspex block prop studio white backdrop": "indoor", "seamless silver reflective backdrop studio": "indoor", "seamless gold reflective backdrop studio warm": "indoor", "frosted perspex panel backlit studio white glow": "indoor", "coloured gel background studio deep blue": "indoor", "coloured gel background studio deep red": "indoor", "split gel backdrop in hot pink and electric blue": "indoor", "saturated yellow backdrop with a hard graphic shadow": "indoor", "rainbow gel wash across a white cyc": "indoor", "green and magenta gel crossfire on a dark set": "indoor", "a 1970s living room set with shag carpet and a lava lamp": "indoor", "a retro diner booth built on the studio floor": "indoor", "a striped circus-tent set with a single spotlight": "indoor", "a hall of draped red velvet curtains": "indoor", "a pastel inflatable set of giant soft shapes": "indoor", "a wall of stacked vintage televisions flickering": "indoor", "a faux-marble staircase set with a gold balustrade": "indoor", "a black set with a confetti cannon mid-burst": "indoor", "a white cyc with a wind machine and flowing fabric": "indoor", "a haze-filled black set cut by a single beam of light": "indoor", "a set drenched in a curtain of falling droplets": "indoor", "a coloured powder cloud against a clean backdrop": "indoor", "a bubble machine filling a pastel set": "indoor", "a hanging foil curtain shimmering": "indoor", "studio wall mirror full length floor to ceiling": "indoor", "a mirrored room reflecting both of them endlessly": "indoor", "a Hollywood glamour set with a velvet sofa and champagne": "indoor", "a boudoir set with lace curtains and a vanity mirror": "indoor", "a black-and-white checkerboard floor with a single chair": "indoor", "a wall of glowing neon tubes in solid colour": "indoor", "daguerreotype studio 1850s painted backdrop column": "indoor", "early photography studio plate camera 1850s": "indoor", "Victorian parlour formal sitting 1860s": "both", "Victorian conservatory glass light 1860s": "both", "cyanotype portrait early experimental": "both", "Victorian photographer studio painted garden backdrop": "indoor", "Victorian cabinet card studio velvet chair": "indoor", "Victorian studio painted landscape backdrop": "indoor", "Edwardian seaside portrait studio pier": "indoor", "Edwardian country house drawing room formal": "indoor", "Edwardian portrait studio electric light early": "indoor", "sepia toned portrait formal studio": "indoor", "1920s glamour portrait studio dramatic light": "indoor", "1930s Hollywood studio portrait backdrop": "indoor", "1920s art deco portrait studio": "indoor", "1930s press photograph studio flash": "indoor", "1930s documentary press photograph street": "outdoor", "1940s studio portrait wartime formal": "indoor", "1940s press photo studio flash powder": "indoor", "1940s railway platform homecoming platform station": "both", "1940s family portrait studio Sunday best": "indoor", "large format studio portrait 1940s sharp": "indoor", "black and white film portrait studio grain": "indoor", "1950s colour portrait studio Kodachrome": "indoor", "1950s suburban garden snapshot summer": "outdoor", "1950s school portrait individual backdrop": "indoor", "1950s department store portrait studio": "indoor", "1950s news agency portrait flash": "both", "medium format portrait studio sharp": "indoor", "1960s portrait studio soft focus colour": "indoor", "1960s snapshot garden party Kodak": "outdoor", "1960s photobooth strip four frames": "both", "1960s news photograph street candid": "outdoor", "1960s photojournalism candid street": "outdoor", "colour slide transparency 1960s portrait": "both", "1970s Polaroid instant kitchen casual": "indoor", "1970s family portrait velvet studio backdrop": "indoor", "1970s snapshot holiday beach Kodak": "outdoor", "1970s school photograph class outdoor": "indoor", "1970s documentary portrait natural light": "both", "instant Polaroid border white portrait": "both", "1980s portrait studio laser background": "indoor", "1980s snapshot disposable camera party": "both", "1980s passport photograph strip booth": "both", "1980s wedding portrait formal studio": "indoor", "35mm film grain portrait casual snapshot": "both", "1990s disposable camera snapshot casual": "both", "1990s portrait studio soft focus": "indoor", "1990s photobooth mall strip": "both", "1990s school portrait blue gradient backdrop": "indoor", "early 2000s digital camera party low resolution": "both", "2000s photo print kiosk portrait": "both", "2000s candid phone photograph first generation": "both", "2010s instagram square portrait early": "outdoor", "roller disco rink under a mirror ball": "both", "1970s disco floor lit from below": "both", "roller rink snack bar with checkerboard tiles": "indoor", "skate shop wall of neon wheels and posters": "indoor", "retro bowling alley with glowing scoreboards": "outdoor", "1970s conversation pit lounge with shag carpet": "indoor", "velvet rope entrance of a glittering nightclub": "indoor", "neon arcade lined with glowing cabinets": "both", "80s shopping mall fountain with potted palms": "indoor", "mall food court under skylights": "outdoor", "record and cassette shop with walls of tapes": "indoor", "video rental store aisle of VHS covers": "indoor", "photo booth at the mall entrance": "indoor", "mini-golf course with neon obstacles": "both", "drive-in movie lot with a giant screen": "both", "1950s diner booth with a jukebox": "indoor", "convertible parked under a neon motel sign": "outdoor", "sock hop gym with streamers": "indoor", "malt shop counter with striped awnings": "indoor", "tailfin car on an empty desert road": "outdoor", "vintage gas pump forecourt at sunset": "both", "90s sitcom-style living room with a plaid couch": "indoor", "teen bedroom plastered with posters": "indoor", "slumber party in a fairy-lit bedroom": "indoor", "stairwell covered in rave flyers": "both", "internet cafe with chunky monitors": "indoor", "Y2K mall escalator under glitter lights": "both", "skate park with 90s graffiti": "outdoor", "swinging-sixties London street with a phone box": "outdoor", "mod scooter rally on a seafront": "outdoor", "go-go club with a checkerboard floor": "indoor", "psychedelic poster-covered flat": "both", "record shop listening booth": "indoor", "Carnaby-style boutique with mini-skirts": "both", "hippie van parked in a flower field": "outdoor", "atomic-age living room with a starburst clock": "indoor", "retro-futurist diner with chrome and neon": "both", "world's fair pavilion with a silver rocket": "both", "showroom of glowing television sets": "indoor", "suburban lawn party with a transistor radio": "both", "vintage airport lounge with tulip chairs": "indoor", "a 1969 mission control room of glowing consoles and cigarette smoke": "indoor", "a flight control floor at the moment of success": "both", "a control room doorway lit by the big screen's glow": "indoor", "a grey cratered lunar plain under a black sky": "outdoor", "a lander's leg and long shadows on grey dust": "both", "a ridge of grey dust with a small planted flag": "outdoor", "a cramped space station module crowded with cables": "indoor", "a module wall of laptops and floating tools": "indoor", "a sleeping nook of bags clipped to the wall": "indoor", "a pre-launch suit-up room with white suits on racks": "indoor", "a gantry walkway to a towering rocket at dawn": "outdoor", "a crew van beside the launch pad in pale light": "outdoor", "a station cupola window with Earth glowing blue below": "both", "a dome of windows over the curve of the planet": "both", "a porthole at sunrise over a vast ocean": "outdoor", "a 1960s canteen of formica tables and trays": "indoor", "a suburban backyard barbecue near the space centre": "outdoor", "a motel pool near the launch site at dusk": "both", "a huge training pool holding a submerged station mock-up": "indoor", "a centrifuge room with a giant spinning arm": "indoor", "a simulator cabin of switches and dials": "indoor", "a windswept Soviet launch site on the steppe": "outdoor", "a cosmonaut dressing room of heavy orange suits": "indoor", "a steppe railway with a rocket rolling out at dawn": "outdoor", "an orange capsule bobbing in a calm ocean": "outdoor", "a navy recovery ship deck at sunrise": "outdoor", "a helicopter pad above a blue sea": "outdoor", "a sleek white capsule interior with a huge window": "indoor", "a launch viewing lounge of glass and screens": "indoor", "a desert spaceport hangar at dawn": "indoor", "room floating in open sky above clouds": "both", "staircase descending into ocean depth": "both", "bed floating in dark space": "both", "moon on ground everyone else ignores": "both", "sun underground ceiling window": "both", "horizon too close walking impossible": "both", "sky below feet walking on clouds solid": "both", "two moons different sizes both checking": "both", "corridor of infinite identical doors": "both", "library with books falling upward slowly": "both", "kitchen with ocean instead of floor": "both", "office with desert instead of carpet": "both", "train arriving through bedroom wall": "both", "telephone booth inside out ringing": "both", "spiral staircase going both up and down same": "both", "window looking at same room from inside": "both", "door knob too large to turn reasonable": "both", "forest growing on ceiling roots up": "both", "giant flower field house-sized blooms": "both", "door in middle of open field nowhere": "both", "wedding beneath water both dry somehow": "both", "eye looking back from pond surface": "both", "tree growing sideways defying gravity": "both", "rain falling upward both normal about it": "both", "snow falling in one spot only precision": "both", "clock face enormous walkable surface": "both", "mirror room reflecting into infinity": "both", "painting stepped into both inside art": "both", "shadows going wrong direction both": "both", "clocks all different times melting": "both", "crowd all moving same direction both still": "both", "two of the same place same time both": "both", "echo of selves visible slight delay": "both", "objects frozen mid-fall both normal": "both", "chess board landscape full size": "both", "city inverted above head walking": "both", "mouth of cave that is a face enormous": "both", "hands visible not the body they belong": "both", "animals acting human ignored by both": "both", "architecture bending around both normally": "both", "punk DIY basement show crowd pressed against a tiny stage": "indoor", "punk gig mosh pit crowd surfers hands in the air": "indoor", "squat house gig graffiti walls mattress on the floor": "indoor", "free party warehouse rave strobe lasers packed dance floor": "indoor", "field rave at sunrise speaker stack dancers in silhouette": "outdoor", "railway arch rave smoke machine green lasers": "both", "huge mural wall mid-paint scaffolding and spray cans below": "outdoor", "alley wheatpaste posters peeling in layers at night": "outdoor", "graffiti hall of fame wall colourful legal wall": "outdoor", "grrrl punk gig tiny venue crowd singing along sweaty": "indoor", "zine fair folding tables tote bags colourful": "indoor", "photocopier shop at 2am copying flyers": "indoor", "record fair hall crates stacked wall to wall": "indoor", "basement record shop crates floor to ceiling gig posters": "indoor", "flea market vinyl stall morning crates in the sun": "outdoor", "street cipher circle crowd ring boombox night": "outdoor", "cardboard breakdance floor park jam crowd ring": "outdoor", "90s block party fire hydrant sprinkler summer": "outdoor", "lowrider car meet car park night chrome and candy paint": "outdoor", "boulevard cruising lowriders slow at sunset": "outdoor", "hydraulics hop contest crowd cheering": "outdoor", "goth club fog machine dance floor candelabras": "indoor", "cemetery goth picnic among ruins at dusk": "outdoor", "dark fashion shop corset rack velvet curtains": "indoor", "seafront promenade scooters lined up mod rally": "outdoor", "ska club checkerboard floor skanking crowd": "indoor", "scooter rally campsite Union Jack sunset": "outdoor", "tattoo convention hall booths buzzing machines": "indoor", "tattoo studio flash walls neon sign buzzing": "indoor", "tattoo chair mid-session artist leaning in": "indoor", "roller derby bout track jammers pack blur crowd": "indoor", "roller rink disco ball neon retro": "indoor", "roller derby locker room helmets pads and tape": "indoor", "concrete skate bowl DIY under a bridge covered in graffiti": "outdoor", "street skate spot handrail and stairs at dusk": "outdoor", "skate park pool coping floodlit night": "outdoor", "towering speaker stack sound system carnival street bass": "outdoor", "pirate radio rooftop aerial city night": "outdoor", "dub dance basement sound system dripping ceiling": "indoor", "rooftop leap gap between buildings city sunrise": "outdoor", "concrete steps urban parkour spot at night": "outdoor", "construction site scaffold climb at dusk": "outdoor", "backyard wrestling ring in a car park makeshift ropes crowd": "outdoor", "lucha libre arena masks ring crowd roaring": "indoor", "basement wrestling ring plastic chairs fairy lights": "indoor", "tiled underpass busker crowd echoing walls": "both", "busy pedestrian street busking crowd hat on the ground": "outdoor", "open air market street band improvised dance": "outdoor", "after-hours queer bar glitter disco ball packed floor": "indoor", "drag show stage glitter curtain audience roaring": "indoor", "bar back door smoking area rainbow neon sign": "outdoor", "northern soul all-nighter ballroom talc on the floor": "indoor", "1970s northern soul hall spin and drop dancers": "indoor", "soul club basement wooden dance floor sweat": "indoor", "rockabilly dance hall jive floor bunting": "indoor", "greaser car meet neon diner forecourt": "outdoor", "vintage car show pomade and flames paintwork": "outdoor", "ballroom competition runway judges panel glitter spotlight": "indoor", "queer ballroom house category walk packed audience": "indoor", "backstage ballroom dressing room mirrors sequins": "indoor", "a vast cave glowing electric blue": "both", "a luminous sea bay glowing at night": "outdoor", "a crystal cave of giant glittering geodes": "both", "a Victorian camp under strange towering trees": "outdoor", "a canvas tent lit by lantern beside a vast skeleton": "indoor", "a map table at the edge of the known world": "both", "a sunken city of coral-covered columns": "both", "a deep sea vent field of glowing creatures": "outdoor", "a flooded cave of impossible blue darkness": "both", "a jungle clearing with a giant footprint filling with water": "outdoor", "a canopy hung with an enormous woven nest": "outdoor", "a riverbank scattered with giant eggshell": "outdoor", "a jungle temple strangled by roots and vines": "outdoor", "a cloud-forest city of terraces in mist": "outdoor", "a library cave of ancient books and dripping water": "indoor", "a chain of floating rock islands above the clouds": "outdoor", "a sky island with waterfalls pouring into nothing": "outdoor", "a rope bridge between drifting rocks": "outdoor", "a waterfall pouring upward into the sky": "outdoor", "a huge door carved into a cliff of ancient stone": "outdoor", "a vertical forest hanging from a cliff": "outdoor", "a volcano crater glowing with rivers of lava": "outdoor", "a glacier cave of blue ice and cracking sounds": "outdoor", "a thermal pool of steaming turquoise water": "both", "a polar ice shelf under swirling green light": "outdoor", "a high mountain ridge above the clouds": "outdoor", "a white-out camp of tents half-buried in snow": "indoor", "an immense cavern with a tiny glowing city far below": "both", "a cave wall of animated ancient paintings": "both", "an underground ocean under a roof of stalactites": "outdoor", "a casino floor under the ceiling cameras": "both", "a casino corridor toward the exit": "indoor", "a casino lift": "indoor", "a supermarket aisle at midnight": "outdoor", "a supermarket checkout": "indoor", "a cereal aisle": "both", "a cash machine on a night street": "outdoor", "a street corner at night": "outdoor", "a petrol station forecourt at night": "outdoor", "a bus shelter": "outdoor", "a taxi back seat": "outdoor", "an underground platform": "outdoor", "an airport arrivals hall": "indoor", "a train station platform": "outdoor", "an upper deck of a bus": "outdoor", "a ferry deck": "outdoor", "a hospital corridor": "indoor", "a school corridor": "indoor", "an office lift": "indoor", "a library": "indoor", "a fishmonger's counter": "both", "a market stall": "outdoor", "a park at dusk": "outdoor", "a beach lifeguard hut": "outdoor", "a gym": "indoor", "a café": "indoor", "a cinema foyer": "indoor", "a bookshop": "indoor", "a museum gallery": "indoor", "a launderette at 3am": "indoor", "1950s laboratory neon green glow": "indoor", "mad scientist laboratory bubbling tubes": "indoor", "underground bunker red emergency lighting": "indoor", "crumbling mansion exterior night": "outdoor", "vintage observatory dome night": "indoor", "clock tower night storm": "both", "basement stairs single overhead bulb": "indoor", "1950s suburban basement den night": "indoor", "abandoned space station corridor flickering": "indoor", "alien landscape matte painting sky": "outdoor", "B-movie spaceship control room retro": "both", "retro rocket ship launch pad": "outdoor", "alien mothership interior command deck retro blinking": "indoor", "crashed UFO crater smoking": "both", "nuclear test site restricted zone": "outdoor", "research station arctic storm outside": "indoor", "radio tower blink red night": "both", "suburban house at night exterior one light on": "outdoor", "1950s American street night creature approaching": "both", "small town main street deserted night": "both", "trailer park night one porch light": "outdoor", "gas station night rural isolated": "outdoor", "1960s diner night fluorescent": "indoor", "motel room at night single lamp": "both", "roadside motel neon sign night": "both", "bowling alley at night empty": "indoor", "bowling alley night creature in shadows 1950s": "both", "high school gymnasium prom night monster gate-crashes": "indoor", "school corridor at night lockers": "indoor", "drive-in movie screen at night": "outdoor", "drive-in car park night": "both", "fog-covered graveyard at night practical light": "outdoor", "dark forest practical torch light": "both", "swamp at night fog mist": "outdoor", "cave entrance dark night fog": "outdoor", "corn field at night path through": "outdoor", "giant spider web forest clearing silk glittering": "indoor", "carnival haunted house entrance": "both", "carnival ferris wheel night neon": "outdoor", "funfair ghost train entrance night": "both", "theatre balcony single spotlight": "indoor", "abandoned factory night emergency exit green": "both", "power plant cooling towers night": "outdoor", "quarry at night floodlit": "outdoor", "warehouse district night one lamp": "indoor", "rooftop at night city glow below": "outdoor", "hospital corridor night emergency red": "indoor", "rural highway night headlights": "outdoor", "beach at night bonfirelight": "outdoor", "pier at night fog horn": "outdoor", "lighthouse beam night fog": "outdoor", "old mill exterior night": "both", "church at night single candle interior": "indoor", "submarine interior cramped red light": "indoor", "a marble palace on Mount Olympus above the clouds": "both", "a golden banquet hall of the gods, laurel and wine": "indoor", "a sunlit amphitheatre carved into a hillside": "indoor", "a temple of white columns at the edge of the sea": "outdoor", "a laurel-lined chariot road in the sky": "outdoor", "an olive grove at dawn with a glowing oracle": "both", "a great hall of Valhalla with a roaring fire": "indoor", "the rainbow bridge Bifrost over the clouds": "outdoor", "a longship cutting through a golden sea": "outdoor", "a frozen fjord under a glowing aurora": "both", "a mead hall with carved pillars and feasting": "indoor", "a mountain peak crowned with a shining runestone": "outdoor", "Camelot's great hall with a round table": "indoor", "an enchanted forest clearing with a sword in a stone": "outdoor", "a castle tower at sunset, banners flying": "both", "a jousting field with colourful pavilions": "outdoor", "a misty lake with a hand holding a sword": "outdoor", "a fairy-lit orchard of Avalon": "outdoor", "a golden temple of the sun on the Nile at dawn": "both", "a desert palace of lanterns and silk": "outdoor", "a garden of fountains and jewel-coloured tiles": "outdoor", "a mountain monastery above a sea of clouds": "outdoor", "a pagoda palace of red lacquer and gold": "both", "a lotus lake before a glowing shrine": "outdoor", "a stepped sun temple of gold and jade at sunrise": "both", "a jungle citadel crowned with feathers": "both", "a Celtic hill fort under a rainbow": "both", "a stone circle alive with fireflies": "both", "a faerie mound glowing from within": "both", "a sea cave of mermaids and pearls": "outdoor", "the back of a great dragon above the clouds": "both", "a mountain of glittering treasure": "outdoor", "a floating island of waterfalls": "outdoor", "the gates of a city in the sky": "outdoor", "a moonlit crown of cloud with a phoenix nest": "both", "a rainbow-lit cave of crystals": "both", "candlelit restaurant table for two red roses": "indoor", "restaurant window table rain outside candlelight": "indoor", "restaurant bar waiting evening dressed up": "indoor", "small restaurant neighbourhood intimate evening": "indoor", "table for two empty setting waiting": "both", "restaurant exterior evening arriving dressed": "indoor", "rooftop restaurant city view evening": "indoor", "wine bar intimate corner evening": "both", "paris bridge padlock city view evening": "outdoor", "bridge city lights reflection evening": "outdoor", "harbour evening lights reflection": "outdoor", "apartment balcony city evening lights": "both", "cinema queue cold evening together": "both", "home dining table candles simple intimate": "indoor", "home sofa evening candles wine": "indoor", "kitchen cooking together evening home": "indoor", "dining room home candles occasion": "indoor", "hotel room rose petals champagne evening": "indoor", "valentine card envelope table morning": "both", "kitchen table breakfast heart pancakes morning": "indoor", "bedroom morning light flowers on bedside": "indoor", "letter box valentine card morning discovered": "both", "valentine card writing desk lamp evening": "both", "red roses delivered doorstep evening": "outdoor", "doorstep moment evening arrival flowers": "outdoor", "florist shop red roses morning selection": "both", "flower market morning red roses selection": "outdoor", "park bench winter afternoon couples": "outdoor", "park winter afternoon hand in hand": "outdoor", "café window seat rainy afternoon": "indoor", "spring garden flowers morning sunlight": "outdoor", "garden path spring flowers either side": "outdoor", "garden gate spring morning arrival": "outdoor", "porch steps spring morning flowers": "outdoor", "park spring afternoon flowers blooming": "outdoor", "garden bench spring afternoon flowers": "outdoor", "garden table lunch spring afternoon": "outdoor", "home garden spring evening golden hour": "indoor", "conservatory morning light spring flowers": "both", "breakfast tray bedroom morning flowers": "indoor", "kitchen table Sunday morning flowers bouquet": "indoor", "front door flowers delivered morning": "outdoor", "kitchen flowers vase morning light": "indoor", "bedroom morning light flowers bedside": "indoor", "sunday morning light through window flowers": "both", "dining table sunday lunch spring": "both", "restaurant sunday lunch spring afternoon": "indoor", "café sunday morning flowers on table": "indoor", "living room spring afternoon light flowers": "indoor", "florist shop spring flowers selection morning": "both", "fireworks over city harbour night": "outdoor", "rooftop fireworks city view night": "outdoor", "public park fireworks crowd night": "indoor", "lake fireworks reflection night": "outdoor", "dock lake fireworks night": "outdoor", "bridge fireworks city view night": "outdoor", "pier end fireworks over water night": "outdoor", "small town parade main street day": "outdoor", "small town main street flags bunting day": "outdoor", "small town bandstand afternoon": "both", "small town church steps afternoon": "indoor", "memorial park flags afternoon": "outdoor", "backyard barbecue american flag bunting afternoon": "both", "suburban front porch american flag evening": "outdoor", "suburban backyard pool afternoon": "both", "baseball field small town afternoon": "outdoor", "beach bonfire fourth of july night": "outdoor", "fairground fourth of july afternoon": "both", "carnival midway fourth afternoon": "outdoor", "sunset beach american flags evening": "outdoor", "zocalo mexico city grito de independencia night": "both", "plaza principal pueblo night fireworks grito": "outdoor", "cathedral facade green white red lights night": "both", "colonial town square fireworks night": "outdoor", "cathedral bells ringing independence night": "both", "plaza de armas provincial town evening": "outdoor", "charro escaramuza horse arena afternoon": "both", "charreada arena afternoon traditional": "both", "traditional market dia de independencia stalls": "both", "traditional feast table day of independence": "both", "market stalls mexican crafts independence": "outdoor", "traditional kitchen independence feast morning": "indoor", "town square mariachi performance evening": "outdoor", "folk dance performance plaza evening": "outdoor", "traditional dress parade main street day": "outdoor", "mexican flag green white red waving plaza": "outdoor", "hacienda colonial courtyard evening": "both", "small pueblo plaza morning independence": "outdoor", "colonial archway green white red bunting": "both", "mountain village independence celebration afternoon": "both", "kitchen cooking thanksgiving morning steam": "indoor", "kitchen table morning coffee thanksgiving preparation": "indoor", "supermarket thanksgiving eve last minute": "both", "autumn farm stand harvest thanksgiving morning": "outdoor", "kitchen sink washing up thanksgiving evening": "indoor", "thanksgiving table full harvest decorations afternoon": "both", "dining room set table thanksgiving anticipation": "indoor", "dining table empty setting thanksgiving anticipation": "both", "dining room candles thanksgiving evening": "indoor", "living room after dinner thanksgiving evening": "indoor", "front porch autumn leaves afternoon golden": "outdoor", "front door wreath autumn thanksgiving": "outdoor", "backyard afternoon thanksgiving football": "both", "autumn park walk thanksgiving afternoon": "outdoor", "backyard bonfire after thanksgiving evening": "both", "neighbourhood thanksgiving morning quiet": "both", "parade crowd thanksgiving morning city": "outdoor", "small town parade thanksgiving morning": "outdoor", "airport arrival thanksgiving reunion": "both", "family living room thanksgiving afternoon football": "indoor", "halloween porch carved pumpkins orange night": "outdoor", "suburban trick or treat street night": "outdoor", "carved pumpkin line porch steps evening": "outdoor", "front door decorated cobwebs night": "outdoor", "halloween street blocked cars candy night": "outdoor", "jack o lantern lit porch dark night": "outdoor", "haunted house decorated exterior night": "outdoor", "cemetery halloween decorated night moon": "outdoor", "graveyard fog machine night halloween": "both", "haunted hayride field night dark": "outdoor", "corn maze halloween night torches": "outdoor", "halloween fog street night orange glow": "outdoor", "halloween bonfire field night dark": "outdoor", "halloween costume party interior crowded": "indoor", "halloween parade street costumes night": "outdoor", "apple bobbing tub indoor halloween party": "indoor", "halloween disco venue costumes night": "both", "school halloween parade daytime": "indoor", "halloween market stalls night orange": "outdoor", "halloween carnival funfair night orange": "outdoor", "day of the dead altar ofrenda marigolds candles photographs": "both", "ofrenda home altar photographs candles marigolds": "indoor", "altar community display photographs flowers": "both", "home ofrenda setting photographs loved ones": "indoor", "town plaza altar community display": "outdoor", "colonial church decorated marigolds night": "indoor", "cemetery marigold path candles night procession": "outdoor", "cemetery grave decorated marigolds candles night": "outdoor", "cemetery night candles thousands marigolds": "outdoor", "cemetery family gathering candles night": "outdoor", "marigold petal path cemetery candles": "outdoor", "parade dia de los muertos street costume night": "outdoor", "calavera parade float street night elaborate": "indoor", "procession street candles elaborate costumes night": "indoor", "traditional dia de los muertos performance plaza": "outdoor", "traditional dance dia de los muertos plaza": "outdoor", "marigold market stalls cempasuchil october": "outdoor", "traditional market dia de los muertos crafts": "both", "sugar skull making workshop table": "indoor", "paper marigold decorating workshop": "indoor", "christmas tree lights interior night warm": "indoor", "fireplace stockings interior christmas eve night": "indoor", "christmas morning unwrapping living room": "indoor", "bedroom christmas morning first light": "indoor", "snow exterior house christmas lights evening": "outdoor", "snow street christmas lights evening town": "outdoor", "christmas window shop lights snow exterior": "outdoor", "snowy landscape christmas day quiet": "outdoor", "christmas tree farm choosing morning snow": "outdoor", "christmas market stall mulled wine lights winter": "outdoor", "carol singing exterior night lanterns": "outdoor", "christmas fair outdoor stalls lights winter": "outdoor", "church midnight mass candles christmas eve": "indoor", "chapel candles christmas eve service": "indoor", "pub christmas eve fire interior warm": "indoor", "kitchen christmas cooking morning steam": "indoor", "christmas table set dinner candles formal": "both", "christmas dinner table full family afternoon": "both", "train station christmas arrival reunion": "outdoor", "airport arrivals christmas reunion": "outdoor", "rooftop fireworks city view midnight countdown": "outdoor", "rooftop small group midnight city glow": "outdoor", "penthouse view fireworks midnight toast": "outdoor", "bridge city fireworks river reflection midnight": "outdoor", "harbour fireworks water reflection midnight": "outdoor", "ballroom countdown midnight champagne": "indoor", "house party countdown midnight interior": "indoor", "pub midnight new year crowd interior": "indoor", "hotel bar new year midnight formal": "indoor", "theatre new year midnight performance": "indoor", "casino countdown midnight glamour": "indoor", "restaurant midnight countdown champagne toast": "indoor", "times square style crowd countdown night": "outdoor", "city street midnight fireworks crowd": "outdoor", "countdown clock public square midnight": "indoor", "city park fireworks crowd midnight": "outdoor", "beach bonfire new year midnight": "outdoor", "quiet home midnight just two champagne": "indoor", "riverside fireworks midnight cold": "outdoor", "dawn new year morning aftermath quiet": "both", "home diwali lights decorations lanterns evening": "indoor", "home puja room diwali candles evening": "indoor", "home drawing room diwali decorations evening": "indoor", "traditional diwali puja table offerings": "both", "family home diwali gathering evening warm": "indoor", "community diwali celebration hall lights": "both", "diwali diyas lit doorstep rangoli night": "outdoor", "rangoli design doorstep diwali morning": "outdoor", "street rangoli competition diwali morning": "outdoor", "balcony diyas lit city lights below diwali": "both", "market diwali sweets and lights shopping": "both", "sweet shop diwali selection morning": "both", "diwali lights market shopping evening": "both", "diwali mela fairground lights evening": "both", "rooftop fireworks diwali night city": "outdoor", "diwali fireworks park night crowd": "outdoor", "rooftop diyas city spread below diwali": "outdoor", "diwali lantern release night sky": "both", "street diwali lights procession night": "outdoor", "temple diwali celebration lights evening": "both", "chinese new year lanterns street night red gold": "outdoor", "lantern festival street night chinese new year": "outdoor", "night market chinese new year lanterns evening": "outdoor", "chinese new year fair stalls lights evening": "both", "chinatown exterior red lanterns night": "outdoor", "lion dance street performance chinese new year morning": "outdoor", "chinatown parade dragon lion dance day": "outdoor", "community hall chinese new year celebration": "indoor", "family reunion dinner table chinese new year eve": "both", "family home decorations red gold new year": "indoor", "dumpling making family table new year eve": "both", "restaurant family new year dinner formal": "indoor", "family home new year eve countdown midnight": "indoor", "red envelope giving family chinese new year": "both", "temple prayers new year morning incense": "both", "temple fair new year blessing morning": "outdoor", "market new year goods red decorations morning": "both", "flower market new year morning purchases": "outdoor", "fireworks chinatown street midnight new year": "outdoor", "harbour fireworks chinese new year midnight": "outdoor"};

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
  "watched vs. unwatched": "the strange freedom of a moment before the camera swings back",
  "the mask vs. the face": "what you put on and what it reveals",
  "surface vs. depth": "the surface and the depth underneath",
  "tamed vs. feral": "tamed returning to feral at the jungle edge",
  "found vs. lost": "found in the world and lost in it at the same time",
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
  "season vs. end of season": "the carnival on its last night",
  "last night vs. first night": "the carnival opening and the carnival closing",
  "seen vs. overlooked in the crowd": "the face that nobody clocked",
  "gaudy vs. sublime": "the moment the neon becomes something else",
  "passing vs. permanent": "what passes through and what was here before and will remain",
  "innocent vs. knowing": "the child who believed and the adult who remembers",
  "Rembrandt": "painted in the style of Rembrandt: amber chiaroscuro, glowing faces emerging from deep shadow",
  "Caravaggio": "painted in the style of Caravaggio: tenebrism, one hard light slicing through absolute darkness",
  "Velázquez": "painted in the style of Velázquez: loose atmospheric brushwork, receding court space, warm shadow",
  "Chagall": "painted in the style of Marc Chagall: dreamlike floating lovers, village rooftops, flowers and violins in soft blue, red and green",
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
  "Kusama": "painted in the style of Yayoi Kusama: polka dots everywhere, infinity mirror rooms, bold pumpkin motifs, hypnotic repetition",
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
  "Renoir": "painted in the style of Renoir: soft Impressionist glow, dappled light, joyful dances and garden parties",
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
  "human vs. other": "the moment recognition fails",
  "ordinary vs. monstrous": "the monster wearing a familiar face",
  "science vs. nature": "the experiment that went further than intended",
  "given vs. received": "the act of giving and the weight of receiving",
  "romantic vs. real": "the valentine and the person who gave it",
  "expectation vs. presence": "the occasion imagined and the evening that actually happened",
  "first vs. last": "the first valentine and the one you didn’t know was the last",
  "public vs. private love": "love performed and love kept",
  "gesture vs. feeling": "the roses and what they stood in for",
  "passion vs. comfort": "the fire and what comes after the fire",
  "new vs. familiar love": "the first time and the thousandth time",
  "the card vs. the truth": "what was written and what was meant",
  "child vs. adult": "who you were when she held you and who you are now",
  "remembered vs. present": "the mother in the memory and the person in the room",
  "love vs. time": "what the years do to love and what love does to years",
  "the mother vs. the woman": "the role and the person beneath the role",
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
  "warmth vs. obligation": "showing up because you want to and showing up because you must",
  "family vs. chosen family": "the table you were born to and the one you chose",
  "costume vs. self": "who you are under the halloween mask",
  "trick vs. treat": "the threat and the sweetness",
  "sacred vs. spectacle": "the old meaning and the costume party it became",
  "memory vs. forgetting": "memory and the river that takes it",
  "here vs. gone": "the person remembered on the altar and the fact of their absence",
  "colour vs. darkness": "the brightness of dia de los muertos against what it mourns",
  "held vs. let go": "held back from the sea and almost letting go",
  "magic vs. commercial": "the wonder and the receipt",
  "giving vs. receiving": "the gift and who it was really for",
  "sacred vs. secular": "the meaning kept and the meaning lost",
  "home vs. elsewhere": "the place you left and the place you can’t find",
  "what was vs. what will be": "the year closing and the year that hasn’t started yet",
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
