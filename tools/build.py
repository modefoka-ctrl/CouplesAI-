#!/usr/bin/env python3
"""Build data.js from the per-world files.

    python3 tools/build.py            write data.js
    python3 tools/build.py --check    exit 1 if data.js is not what the sources produce (run before committing)

Sources:  worlds/<id>.json          one file per world (its data + its own tension translations, location types, joiner words)
          worlds/_manifest.json     the categories shown in the full generator (every world must be in exactly one)
          src/data.template.js      the code part of data.js, with __PLACEHOLDERS__ where generated data goes
Stdlib only. Never edit data.js by hand: the next build overwrites it."""
import glob, json, os, re, sys
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
EXTRA = ("translations", "locTypes", "connectors")      # per-world helpers that do not belong inside the WORLDS entry

def load():
    man = json.load(open(os.path.join(ROOT, "worlds", "_manifest.json"), encoding="utf-8"))
    files = {}
    for p in sorted(glob.glob(os.path.join(ROOT, "worlds", "*.json"))):
        name = os.path.basename(p)[:-5]
        if name.startswith("_"): continue
        w = json.load(open(p, encoding="utf-8"))
        if w.get("id") != name: raise SystemExit(f"{p}: id '{w.get('id')}' does not match the file name")
        files[name] = w
    return man, files

def js_str(s): return "'" + s.replace("\\", "\\\\").replace("'", "\\'") + "'"

def build():
    man, files = load(); errs = []
    listed = [i for c in man["categories"] for i in c["worlds"]]
    for i in sorted(set(files) - set(listed)): errs.append(f"world '{i}' is not in any category in worlds/_manifest.json (it would be missing from the full generator)")
    for i in sorted(set(listed) - set(files)): errs.append(f"category lists '{i}' but worlds/{i}.json does not exist")
    for i in sorted({x for x in listed if listed.count(x) > 1}): errs.append(f"'{i}' appears in more than one category")
    for wid, w in files.items():
        for k in ("id", "name", "sub", "color", "tensions", "locs", "poses", "looks"):
            if k not in w: errs.append(f"{wid}: missing '{k}'")
        if not re.fullmatch(r"[a-z][a-z0-9]*", wid): errs.append(f"{wid}: id must be lowercase letters/digits (it becomes a JS key)")
    if errs: raise SystemExit("BUILD FAILED:\n  " + "\n  ".join(errs))
    order = man.get("order") or listed
    worlds, TT, LT, CONN = [], {}, {}, {}
    for wid in order:
        w = files[wid]; worlds.append({k: v for k, v in w.items() if k not in EXTRA})
        for t, x in (w.get("translations") or {}).items():
            if t in TT and TT[t] != x: errs.append(f"tension '{t}' has two different translations (world {wid})")
            TT[t] = x
        LT.update(w.get("locTypes") or {})
        if w.get("connectors"): CONN[wid] = w["connectors"]
    if errs: raise SystemExit("BUILD FAILED:\n  " + "\n  ".join(errs))
    tpl = open(os.path.join(ROOT, "src", "data.template.js"), encoding="utf-8").read()
    cats = "WORLD_CATS=[\n" + ",\n".join("    [%s,[%s]]" % (js_str(c["name"]), ",".join(js_str(i) for i in c["worlds"])) for c in man["categories"]) + "\n  ];"
    conn = "{" + ",".join("%s:[%s]" % (k, ",".join(js_str(x) for x in v)) for k, v in CONN.items()) + "}"
    out = tpl
    for token, text in (("__TRANSLATIONS__", json.dumps(TT, ensure_ascii=False, indent=2)), ("__LOC_TYPES__", json.dumps(LT, ensure_ascii=False)),
                        ("__CONNECTORS__", conn), ("__WORLD_CATS__", cats), ("__WORLDS__", json.dumps(worlds, ensure_ascii=False, indent=2))):
        assert out.count(token) == 1, f"template must contain {token} exactly once"
        out = out.replace(token, text)
    return out

if __name__ == "__main__":
    out = build(); target = os.path.join(ROOT, "data.js")
    if "--check" in sys.argv:
        cur = open(target, encoding="utf-8").read() if os.path.exists(target) else ""
        if cur != out: print("data.js is OUT OF DATE: run  python3 tools/build.py"); sys.exit(1)
        print("data.js matches its sources"); sys.exit(0)
    open(target, "w", encoding="utf-8").write(out); print(f"wrote data.js ({len(out):,} chars)")
