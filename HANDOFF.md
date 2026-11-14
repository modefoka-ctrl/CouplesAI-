# CouplesAI — project handoff

Live site: https://couplesai.netlify.app/  ·  Repo: https://github.com/modefoka-ctrl/CouplesAI- (public)  ·  Branch: `main`

**Read section 3 first.** Most of this project's worst bugs came from editing blindly and not testing.

## 1. What this is
A static website (HTML + JavaScript; no framework, no server, nothing to build in order to *run* it) that writes prompts for AI image generators (Midjourney, Gemini, Flux, ...). The user uploads a photo of a couple to the image generator; this tool writes the text prompt: a *world* (a visual universe), an emotional *tension*, a location, a pose and wardrobe, plus lighting / shot / era in the full version.

- `/` is the **quick page** (`index.html`). It opens, picks a random world and scene, and shows six prompt variants (six photographic strategies) with Copy buttons. A Quick | Full toggle sits in the header.
- `/full.html` is the **full generator**: step-by-step controls (world, tension, location, pose, wardrobe, lighting, shot, era, ratio), locks, history, tips.
- Both pages load `data.js` with a plain `<script src="data.js">` and use its globals.
- Also: a Buy Me a Coffee widget (id `CouplesAI`), SEO tags and JSON-LD, `og-image.png`, `robots.txt`, `sitemap.xml`, and `_redirects` (`/simple.html` -> `/`, an old URL).

**Deploys:** Netlify. Every push to `main` has gone live within a couple of minutes (confirm in the Netlify settings). There is **no staging branch**, so a bad push is live immediately.

## 2. Repo layout
| path | what it is |
|---|---|
| `index.html` | quick page (all its logic is inline) |
| `full.html` | full generator (all its logic is inline) |
| `data.js` | **generated** by `tools/build.py`. Never edit by hand. |
| `worlds/<id>.json` | **the source of truth**: one file per world |
| `worlds/_manifest.json` | the categories of the full generator; every world must be in exactly one |
| `src/data.template.js` | the code part of `data.js` with `__PLACEHOLDERS__` for generated data |
| `tools/build.py` | worlds/ + template -> `data.js` (`--check` detects drift) |
| `tools/check.py` | the validation suite (run it before every commit) |
| `tools/scene_lib.py` | helpers for scripted edits, the test harness, atomic multi-file commits |
| `og-image.png`, `robots.txt`, `sitemap.xml`, `_redirects` | site assets |

## 3. The one workflow
1. Edit `worlds/<id>.json` (or add one; section 4).
2. `python3 tools/build.py` regenerates `data.js`.
3. `python3 tools/check.py` must finish with **0 failures** (needs `python3` and `node`).
4. Commit the world file(s) **and** `data.js` together. `main` deploys immediately, so prefer a branch and a Netlify deploy preview if you can.

If you ever change `index.html`, `full.html` or `src/data.template.js`, run the same checks. The tests execute the real page code against a stub DOM.

## 4. Adding or changing a world
Create `worlds/<id>.json` (id = lowercase letters/digits; it becomes a JS key), add the id to a category in `worlds/_manifest.json` (the build refuses a world that is in no category: that is how Carnival once vanished from the full generator), then build and check. See `worlds/README.md` for the schema and a minimal example.

Per-world fields: `id, name, sub, color, tensions[], locs[], poses[], looks[], affinities{}`, optional `promptPrefix, promptSuffix, variantDirectives[6], tensionIsStyle`, and three build-time helpers that are stripped from the emitted data: `translations{}` (tension -> poetic phrase), `locTypes{}` (location -> indoor/outdoor/both, drives the lighting filter), `connectors[]` (joiner words between pose and location).

## 5. How a prompt is built
`Create a {ratio} {subject} — ` + `[promptPrefix] ` + **scene sentence** + `.` + **mood note**
- Scene sentence: `[tension phrase — ]pose {joiner} location[, wearing look][, bathed in lighting][, era aesthetic][. Shot as: shot]`.
- Mood note: ` The emotional tension — {tension} — is atmosphere only. Do not illustrate it literally.` (skipped when `tensionIsStyle`) + ` {promptSuffix}`.
- **Prefix worlds** (archive, art, bmovie, cctv, expedition, hero, history, mystery, protest, runway, space, studio, surreal, underworld) drop the lighting and era clauses, and drop the generic variant directive. They therefore **must** have 6 `variantDirectives`, or their six variants will not differ.
- A tension with no `translations` entry appears once, in the mood note only.
- **Six variants:** `TEMPLATES[0..5]` in the template reorder the sentence; each variant starts with `variantDirectives[i]` (world-specific) or the generic lens-based directive (non-prefix worlds).
- The assembly logic exists **three times** (inline in `index.html`, inline in `full.html`, and `TEMPLATES` in `data.js`). Change one, change all, then run the checks.

## 6. Design rules (each one exists because the opposite produced bad images)
1. **Scenes, not piles.** Each tension has a *matched set* (`affinities[tension]` = 3 locations + 3 poses + 3 looks) drawn from ONE scene, so setting, action and wardrobe belong together. Every tension of every world needs one.
2. **Say each thing once.** Poses and looks must not repeat words from the location (`check.py` limits the average overlap to 1.3; today the worst world is about 0.9). The setting is named once; an era or an artist is named once.
3. **No camera words in poses, looks, prefix or suffix** (close-up, low angle, overhead, wide angle, Dutch tilt, fisheye, zoom). The six variants own the framing.
4. **Looks never name a place** ("tuxedo at a petrol station" breaks when paired with another location).
5. **Suffixes are one short colour-grade or style sentence.** Never repeat "atmosphere only" (the generator adds it) and never list reference works or artists.
6. **Tension translations are hand-written or absent.** Mechanical templates ("X pressing against Y") were removed.
7. **Joiner words are plain** (`in`, `amid`, `at`). Poetic ones ("surrendered to") read badly with these location names.
8. **Art-style worlds:** the tension *is* the style; set `tensionIsStyle` so the "atmosphere only / do not illustrate" sentence is skipped (it would tell the model not to render the style).
9. **Sensitive places are not backdrops.** Sites of mass atrocity were removed from History and `check.py` has a deny-list.
10. **Goal:** every output should be an image people want to create and post. Prefer specific, active, visual, a little quirky over generic.

## 7. The two generators
- **Quick page:** `randomize()` picks a world, a tension, then location/pose/look **from that tension's matched set** (added in the latest change; before that it ignored matched sets entirely), lighting via `getLightingForLoc()`, and occasionally a shot and an era. `buildVariants()` makes the six; `renderVariants()` draws the cards; Copy reads `card.dataset.prompt`.
- **Full generator:** `randomizeAll()` and `spinUnlocked()` always draw location, pose and look from the tension's matched set (`AFFINITY_RATE = 1`, a constant at the top of the page script; the original design used 0.7, a deliberate "scatter" that mixed scenes). `spinUnlocked()` picks the tension first, so the dials come from the NEW tension's set (it used to use the previous tension's). Manual dropdowns can still mix anything; the Cohesive / Moderate / Scattered badge scores such picks. Variants come from `refineLocal()`. The live preview mirrors the prompt.
- `data.js` code part defines: CONNECTORS, ERAS, GROUP_POSES, LIGHTING_INDOOR, LIGHTING_OPTIONS, LIGHTING_OUTDOOR, LOCKS, LOC_TYPES, MOOD_WORLDS_LIGHTING_AI, RATIOS, S, SHOT_OPTIONS, SOLO_POSES, SUBJECTS, TEMPLATES, TENSION_TRANSLATIONS, WORLDS, history. `WORLD_CATS` is defined inside a function in the template.

## 8. Testing
`python3 tools/check.py` runs: syntax of all scripts; every world in exactly one category; world structure, matched sets, repetition, sensitive places, prefix-world rules; **the real prompt builder for all ~750 world x tension pairs** (no `null`, double period, double article, repeated instruction; six distinct variants); the quick page's random picks (100% from matched sets) and card rendering (Copy button works); the full generator's `randomizeAll` / `spinUnlocked` (100% from matched sets, run in a stub DOM); and that `data.js` equals what `build.py` produces. Warnings are advisory.

## 9. Deploying and secrets
- `tools/scene_lib.py` can make one atomic commit with many files: `commit_many({path: text|None}, message)` (None deletes). It reads `GITHUB_TOKEN` from the environment. **Never commit a token.** An earlier token was pasted into a chat: if you inherit this project, rotate it and use a fine-grained token limited to this repo.
- `raw.githubusercontent.com` can serve an old version for a few minutes after a push; verify with the GitHub API (`raw_live()`) instead.

## 10. Lessons from past bugs
1. Re-declaring `S` in the quick page (data.js already declares it) made the page spin forever.
2. `onDialChange` lives in `data.js`, not the pages; patching the wrong file did nothing for several rounds.
3. Blind text patches silently did nothing. Always assert the match count, and read the result back.
4. Replacing blocks of a 1 MB file sequentially shifts every later position (one reason `data.js` is now generated).
5. A variable local to `buildVariants()` used inside `renderVariants()` crashed rendering.
6. `JSON.stringify` inside an inline `onclick` broke the Copy buttons; prompts are stored in `data-` attributes.
7. A rewritten `WORLD_CATS` dropped Carnival; the full generator builds its list from it.
8. The quick page ignored the matched sets for a long time because nothing tested it; now `check.py` does.
9. Keyword checks give false positives ("Dutch" the nationality, "overhead bulb"). Print what matched before trusting a failure.
10. A prefix world without `variantDirectives` gives six near-identical variants.

## 11. History (summary)
Started with 52 worlds. **Removed:** kitchen, farm, pier, dusk, spring, summer, autumn, winter, travel, market, monastery, concrete, dust, diner, still, absurd, glass, iron. **Added:** studio, bmovie, carnival, archive (now "THE PHOTOGRAPH", id unchanged), eleven single-holiday worlds. **Rebuilt** around scenes: art (35 artists, tension = artist), underground (subculture scenes; it was briefly turned into subways by mistake), hero (10 action genres), cctv, space, expedition and about 30 others. The Pollinations.ai image preview was removed from the quick page (unreliable and slow). `data.js` was split into `worlds/` and stale entries were pruned (about 15% smaller).

## 12. Known issues and unverified
- **No rendered images have been reviewed.** Everything above was judged from the text of the prompts and from tests; how the image generators respond is unknown.
- In the full generator, manual dropdown picks can still mix scenes (the Cohesive / Moderate / Scattered badge shows how well they match).
- The 15 original worlds keep tension-specific extras in their matched sets that are not in their pools, and have not been rebuilt as scenes.
- Location names are telegraphic, so some combinations read oddly ("knees touching in dark wood studio floor").
- Templates 4 and 6 restart a sentence in lowercase after a full stop.
- Carnival contains "fire eater" and "fireworks"; a user once saw a fiery image from it (the cause was never established).
- Some locations lack a `locTypes` entry (the lighting filter then allows indoor and outdoor lighting).

## 13. Owner's intent
The test for any change: *"will this render an image most people will find interesting enough to create it and want to post on their social media?"* The owner dislikes boring or generic worlds, repeated words, redundant instructions, mismatched wardrobe/location, and reference lists inside prompts. The owner likes specific, active, slightly quirky scenes.

## 14. Categories
- **❤️  Emotion & Relationship**: romance, stage, mystery, protest, wedding, underworld
- **🌏  Nature & Landscape**: mountain, water, wild, jungle, desert, rain, cold
- **🌆  Time & Atmosphere**: night, history, storm
- **🌍  Place & Culture**: city, road, canada, caribbean, mexico, usa, rooftop
- **🎵  Performance & Life**: music, court, circus, hero, carnival
- **✨  Style & Craft**: gold, art, runway, studio, archive
- **🚀  Beyond Reality**: space, surreal, underground, expedition, cctv, bmovie
- **🎉  Celebrations & Holidays**: valentines, mothersday, fourthofjuly, septiembre16, thanksgiving, halloween, diadelosmuertos, christmas, newyearseve, diwali, chinesenewyear

## 15. World inventory (generated at the time of writing)
| id | name | tensions | locations | poses | looks | notes |
|---|---|---|---|---|---|---|
| romance | THE ROMANCE | 15 | 30 | 18 | 18 |  |
| stage | THE STAGE | 10 | 30 | 12 | 10 |  |
| mystery | THE MYSTERY | 20 | 48 | 38 | 32 | prefix world |
| protest | THE PROTEST | 20 | 44 | 38 | 37 | prefix world |
| wedding | THE WEDDING | 10 | 20 | 18 | 18 |  |
| underworld | THE UNDERWORLD | 20 | 42 | 34 | 32 | prefix world |
| mountain | THE MOUNTAIN | 20 | 48 | 48 | 47 |  |
| water | THE WATER | 20 | 50 | 48 | 48 |  |
| wild | THE WILD | 20 | 50 | 46 | 47 |  |
| jungle | THE JUNGLE | 20 | 50 | 46 | 48 |  |
| desert | THE DESERT | 10 | 30 | 15 | 15 |  |
| rain | THE RAIN | 10 | 30 | 18 | 18 |  |
| cold | THE COLD | 20 | 51 | 47 | 46 |  |
| night | THE NIGHT | 20 | 51 | 42 | 46 |  |
| history | THE HISTORY | 20 | 43 | 30 | 30 | prefix world |
| storm | THE STORM | 10 | 30 | 18 | 18 |  |
| city | THE CITY | 10 | 32 | 18 | 18 |  |
| road | THE ROAD | 20 | 50 | 44 | 46 |  |
| canada | THE CANADA | 10 | 20 | 15 | 15 |  |
| caribbean | THE CARIBBEAN | 10 | 20 | 18 | 18 |  |
| mexico | THE MEXICO | 20 | 42 | 34 | 32 |  |
| usa | THE USA | 20 | 42 | 38 | 32 |  |
| rooftop | THE ROOFTOP | 10 | 30 | 21 | 21 |  |
| music | THE MUSIC | 20 | 51 | 44 | 44 |  |
| court | THE COURT | 10 | 20 | 18 | 18 |  |
| circus | THE CIRCUS | 10 | 20 | 15 | 15 |  |
| hero | THE HERO | 10 | 30 | 30 | 30 | prefix world |
| carnival | THE CARNIVAL | 20 | 50 | 24 | 24 |  |
| gold | THE GOLD | 10 | 20 | 15 | 15 |  |
| art | THE ART | 35 | 105 | 105 | 105 | prefix world, tension = style |
| runway | THE RUNWAY | 20 | 46 | 40 | 44 | prefix world |
| studio | THE STUDIO | 20 | 63 | 28 | 28 | prefix world |
| archive | THE PHOTOGRAPH | 20 | 54 | 30 | 30 | prefix world |
| space | THE SPACE | 10 | 30 | 30 | 30 | prefix world |
| surreal | THE SURREAL | 20 | 40 | 34 | 34 | prefix world |
| underground | THE UNDERGROUND | 20 | 60 | 60 | 60 |  |
| expedition | THE EXPEDITION | 10 | 30 | 30 | 30 | prefix world |
| cctv | THE CCTV | 10 | 30 | 20 | 10 | prefix world |
| bmovie | THE B-MOVIE | 20 | 54 | 32 | 32 | prefix world |
| valentines | VALENTINE'S DAY | 15 | 30 | 15 | 15 |  |
| mothersday | MOTHER'S DAY | 10 | 20 | 12 | 12 |  |
| fourthofjuly | FOURTH OF JULY | 10 | 20 | 12 | 12 |  |
| septiembre16 | SEPTIEMBRE 16 | 10 | 20 | 15 | 15 |  |
| thanksgiving | THANKSGIVING | 10 | 20 | 12 | 12 |  |
| halloween | HALLOWEEN | 10 | 20 | 9 | 9 |  |
| diadelosmuertos | DÍA DE LOS MUERTOS | 10 | 20 | 12 | 12 |  |
| christmas | CHRISTMAS | 10 | 20 | 15 | 15 |  |
| newyearseve | NEW YEAR'S EVE | 10 | 20 | 12 | 12 |  |
| diwali | DIWALI | 10 | 20 | 12 | 12 |  |
| chinesenewyear | CHINESE NEW YEAR | 10 | 20 | 15 | 15 |  |
