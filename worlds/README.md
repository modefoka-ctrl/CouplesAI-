# worlds/

One JSON file per world. `data.js` is generated from these files: edit here, run `python3 tools/build.py`, then `python3 tools/check.py`.

## Adding a world
1. Create `worlds/<id>.json` (id: lowercase letters and digits).
2. Add the id to a category in `worlds/_manifest.json` (the build fails if a world is in no category, or in two).
3. `python3 tools/build.py && python3 tools/check.py`, then commit the world file and `data.js` together.

## Fields
| field | |
|---|---|
| `id`, `name`, `sub`, `color` | identity: shown in the world bar and the picker |
| `tensions` | list of "x vs. y" strings (10 to 20) |
| `locs`, `poses`, `looks` | the pools used when nothing is matched |
| `affinities` | `{tension: {locs:[..], poses:[..], looks:[..]}}`, one entry for EVERY tension, items drawn from one scene |
| `promptPrefix` / `promptSuffix` | optional style sentences (a prefix world needs `variantDirectives`) |
| `variantDirectives` | 6 framing sentences ending in `: `, required when there is a prefix |
| `tensionIsStyle` | true when the tension names a style (skips the "atmosphere only" sentence) |
| `translations` | optional `{tension: poetic phrase}`; untranslated tensions are fine |
| `locTypes` | optional `{location: "indoor"|"outdoor"|"both"}` for the lighting filter |
| `connectors` | optional joiner words (use `["in","amid","at"]`) |

## Minimal example
```json
{
  "id": "lighthouse", "name": "THE LIGHTHOUSE", "sub": "Storm Light & Salt", "color": "#4a6a8a",
  "tensions": ["shelter vs. storm", "watching vs. waiting"],
  "locs": ["a lamp room above a black sea", "a spiral stair of wet iron"],
  "poses": ["both pressed to the glass as the beam sweeps past", "one climbing, the other holding the rail below", "both laughing, drenched, at the door"],
  "looks": ["oilskin coat and wool cap each", "heavy knit and rubber boots each", "storm-soaked shirts each"],
  "affinities": {
    "shelter vs. storm": {"locs": ["a lamp room above a black sea"], "poses": ["both pressed to the glass as the beam sweeps past", "both laughing, drenched, at the door", "one climbing, the other holding the rail below"], "looks": ["oilskin coat and wool cap each", "heavy knit and rubber boots each", "storm-soaked shirts each"]},
    "watching vs. waiting": {"locs": ["a spiral stair of wet iron"], "poses": ["one climbing, the other holding the rail below", "both pressed to the glass as the beam sweeps past", "both laughing, drenched, at the door"], "looks": ["heavy knit and rubber boots each", "oilskin coat and wool cap each", "storm-soaked shirts each"]}
  },
  "promptSuffix": "Colour grade: cold blue-grey with one warm beam of light."
}
```
A real world has 10 to 20 tensions and 20+ locations. Follow the design rules in `HANDOFF.md` section 6; `tools/check.py` enforces the measurable ones.
