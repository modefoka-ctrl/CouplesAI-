"""Helpers for editing and testing CouplesAI worlds.

Reads files from the repo checkout (or from GitHub if a file is not found locally).
Writing back to GitHub needs the GITHUB_TOKEN environment variable. NEVER put a token in this file.

Typical use (bulk, scripted edits):
    from scene_lib import State, scene_world, harness, metric
    st = State()                       # parses data.js (which is generated from worlds/*.json)
    scene_world(st, "city", scenes, tension_to_scene)
    st.write_world_files(["city"])     # writes worlds/city.json; then run: python3 tools/build.py
For a single world, simply edit worlds/<id>.json by hand and run the build.
"""
import json, re, subprocess, tempfile, os, base64, sys

ROOT = os.environ.get("COUPLES_ROOT", os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
OWNER_REPO = "modefoka-ctrl/CouplesAI-"
RAW_BASE = f"https://raw.githubusercontent.com/{OWNER_REPO}/main/"
API = f"https://api.github.com/repos/{OWNER_REPO}/contents/"

def _token(): return os.environ.get("GITHUB_TOKEN", "")

def raw(path):
    """Local file if present, otherwise the public copy on GitHub (can lag a few minutes after a deploy)."""
    local = os.path.join(ROOT, path)
    if os.path.exists(local):
        return open(local, encoding="utf-8").read()
    return subprocess.run(["curl", "-sL", RAW_BASE + path], capture_output=True, text=True).stdout

def raw_live(path):
    """Uncached read through the GitHub API (needs GITHUB_TOKEN). Use this to verify a deploy."""
    return subprocess.run(["curl", "-s", "-H", f"Authorization: token {_token()}", "-H", "Accept: application/vnd.github.raw", API + path],
                          capture_output=True, text=True).stdout

def block(text, marker, o, c):
    """Return (start, end) of the bracketed JS/JSON literal that follows `marker`."""
    s = text.find(marker) + len(marker); d = 0
    for i, ch in enumerate(text[s:], s):
        if ch == o: d += 1
        elif ch == c:
            d -= 1
            if d == 0: return s, i + 1
    raise ValueError("block not found: " + marker)

class State:
    """Parsed view of data.js. Edit self.worlds / self.TT / self.LT / self.conn, then write_world_files()."""
    def __init__(self):
        self.data0 = raw("data.js"); self.simple = raw("index.html")
        ws, we = block(self.data0, "const WORLDS = ", "[", "]"); self.worlds = json.loads(self.data0[ws:we]); self.byid = {w["id"]: w for w in self.worlds}
        ts, te = block(self.data0, "const TENSION_TRANSLATIONS = ", "{", "}"); self.TT = json.loads(self.data0[ts:te])
        ls, le = block(self.data0, "const LOC_TYPES = ", "{", "}"); self.LT = json.loads(self.data0[ls:le])
        self.conn = {}   # world id -> joiner words to set (overrides what is in data.js)
        cs, ce = block(self.data0, "const CONNECTORS=", "{", "}")
        self.conn0 = {m.group(1): re.findall(r"'([^']*)'", m.group(2)) for m in re.finditer(r"(?<![A-Za-z_])([a-z0-9]+)\s*:\s*\[([^\]]*)\]", self.data0[cs:ce])}
    def write_world_files(self, ids=None, root=None):
        """Write worlds/<id>.json for the given worlds (default all), keeping each world's own translations,
        location types and joiner words next to it. Then run tools/build.py to regenerate data.js."""
        root = root or ROOT; os.makedirs(os.path.join(root, "worlds"), exist_ok=True)
        for wid in (ids or list(self.byid)):
            w = self.byid[wid]; d = dict(w)
            d["translations"] = {t: self.TT[t] for t in w["tensions"] if t in self.TT}
            locs = list(dict.fromkeys(w["locs"] + [l for a in (w.get("affinities") or {}).values() for l in a["locs"]]))
            d["locTypes"] = {l: self.LT[l] for l in locs if l in self.LT}
            conn = self.conn.get(wid) or self.conn0.get(wid)
            if conn: d["connectors"] = conn
            with open(os.path.join(root, "worlds", wid + ".json"), "w", encoding="utf-8") as f:
                f.write(json.dumps(d, ensure_ascii=False, indent=2) + "\n")

IN_W = ("room","hall","interior","studio","bar","club","lounge","kitchen","chamber","corridor","booth","stage","salon","office","gallery","museum","church","chapel","hospital","library","cinema","theatre","tent","vault","hangar","restaurant","cafe","shop","store","parlour","apartment","bedroom","lobby","suite","ballroom","dressing","backstage","basement","attic","workshop","dojo","gym")
OUT_W = ("street","road","highway","field","forest","bridge","mountain","ridge","beach","coast","sea","ocean","lake","river","desert","dune","cliff","island","garden","park","plaza","square","market","rooftop","roof","harbour","dock","pier","porch","yard","path","trail","valley","sky","plain","tundra","glacier","village","alley","parade","exterior","fireworks","waterfall","orchard","meadow")
def tag_loc(l):
    """indoor / outdoor / both, used to pick matching lighting. Override per location with the `types` argument."""
    ll = l.lower()
    if any(k in ll for k in IN_W): return "indoor"
    if any(k in ll for k in OUT_W): return "outdoor"
    return "both"

def scene_world(st, wid, scenes, T, drop=(), types=None):
    """Rebuild a world as scenes.
    scenes: list of (locs, poses, looks). `locs` mixes ints (index into the world's CURRENT locs) and new strings.
    T: for each tension (same order as world['tensions']) the index of the scene it uses.
    drop: indices of current locs to delete on purpose. Every current loc must be assigned or dropped (nothing is lost silently).
    Result: each tension gets a matched set (3 locs / 3 poses / 3 looks) from ONE scene, and the world's pools are the union of its scenes."""
    w = st.byid[wid]; old = list(w["locs"]); n = len(w["tensions"])
    assert len(T) == n, (wid, "tension map length", len(T), "tensions", n)
    used = [x for s in scenes for x in s[0] if isinstance(x, int)]
    miss = sorted(set(range(len(old))) - set(used) - set(drop)); dup = sorted({x for x in used if used.count(x) > 1})
    assert not miss and not dup, (wid, "unassigned loc indices", miss, "assigned twice", dup)
    sc = []
    for locs, poses, looks in scenes:
        assert len(poses) >= 3 and len(looks) >= 3, (wid, "each scene needs >=3 poses and >=3 looks")
        sc.append(([old[x] if isinstance(x, int) else x for x in locs], poses, looks))
    seen = {}; aff = {}
    for ti, t in enumerate(w["tensions"]):
        s = T[ti]; k = seen.get(s, 0); seen[s] = k + 1; L, P, K = sc[s]
        aff[t] = {"locs": list(dict.fromkeys([L[(k*3+j) % len(L)] for j in range(3)])),
                  "poses": list(dict.fromkeys([P[(k+j) % len(P)] for j in range(3)])),
                  "looks": list(dict.fromkeys([K[(k+j) % len(K)] for j in range(3)]))}
    pool = lambda i: list(dict.fromkeys(x for s in sc for x in s[i]))
    w["affinities"] = aff; w["locs"] = pool(0); w["poses"] = pool(1); w["looks"] = pool(2)
    for l in w["locs"]:
        if l not in st.LT: st.LT[l] = (types or {}).get(l) or tag_loc(l)
    return w

STOP = set("both each the and with into from that this their them they one other over under near same after before against amid between mid for are was have has not its out any all new old".split())
def toks(s): return {t for t in re.findall(r"[a-zA-Z0-9']+", s.lower()) if len(t) > 3 and t not in STOP}
def metric(w):
    """Average number of content words shared between loc, pose and look across every matched set. Lower is better (rule: <= 1.3)."""
    v = []
    for a in (w.get("affinities") or {}).values():
        for l in a["locs"]:
            for p in a["poses"]:
                for k in a["looks"]:
                    tl, tp, tk = toks(l), toks(p), toks(k); v.append(len((tl & tp) | (tl & tk) | (tp & tk)))
    return sum(v) / len(v) if v else 0

def inline_of(page, marker):
    """The inline <script> of an HTML page that contains `marker`."""
    i = page.find(marker); ss = page.rfind("<script>", 0, i) + 8; se = page.find("</script>", i); return page[ss:se]

STUBS = """
var __cards=[]; var __el={style:{},innerHTML:'',textContent:'',dataset:{},classList:{add(){},remove(){},toggle(){}},appendChild(c){__cards.push(c);},closest(){return null}};
var document={getElementById:()=>__el,createElement:()=>({className:'',style:{},dataset:{},innerHTML:'',classList:{add(){},remove(){}}}),querySelector:()=>__el,addEventListener(){},body:{style:{}}};
var window={addEventListener(){}};var navigator={clipboard:{writeText:()=>Promise.resolve()},vibrate(){}};
"""
HARN = r"""
;(function(){var res={all:{},first:{}};
 WORLDS.forEach(function(w){w.tensions.forEach(function(t,ti){
   var a=(w.affinities&&w.affinities[t])||{locs:[w.locs[0]],poses:[w.poses[0]],looks:[w.looks[0]]};
   S.world=w.id;S.tension=t;S.loc=a.locs[0];S.pose=a.poses[0];S.look=a.looks[0];S.lighting=null;S.shot=null;S.era=null;S.ratio='4:5';S.subject='couple';
   var m=buildPromptString(); res.all[w.id+'|'+t]=m;
   if(ti===0) res.first[w.id]={main:m,variants:buildVariants().map(v=>v.full)};});});
 console.log('@@J@@'+JSON.stringify(res));})();
"""
def run_js(code, tag, timeout=240):
    with tempfile.NamedTemporaryFile(mode="w", suffix=".js", delete=False, encoding="utf-8") as f: f.write(code); p = f.name
    r = subprocess.run(["node", p], capture_output=True, text=True, timeout=timeout); os.unlink(p)
    if tag not in r.stdout: raise RuntimeError("node run failed: " + r.stderr[:600])
    return json.loads(r.stdout.split(tag)[1])
def harness(data, simple):
    """Run the REAL quick-page prompt code (with a stub DOM) for every world and tension."""
    return run_js(STUBS + data + "\n" + inline_of(simple, "function generate()") + HARN, "@@J@@")
def node_ok(code):
    with tempfile.NamedTemporaryFile(mode="w", suffix=".js", delete=False, encoding="utf-8") as f: f.write(code); p = f.name
    ok = subprocess.run(["node", "--check", p], capture_output=True, text=True).returncode == 0; os.unlink(p); return ok
def worlds_of(d):
    s, e = block(d, "const WORLDS = ", "[", "]"); return {w["id"]: w for w in json.loads(d[s:e])}

def commit_many(files, msg, branch="main"):
    """ONE atomic commit (so one deploy) containing many files. files: {path: text | bytes | None}; None deletes the file. Needs GITHUB_TOKEN."""
    tok = _token(); assert tok, "set GITHUB_TOKEN"
    def api(method, path, body=None):
        args = ["curl", "-s", "-X", method, "-H", f"Authorization: token {tok}", "-H", "Accept: application/vnd.github+json"]
        if body is not None:
            open("/tmp/_c.json", "w").write(json.dumps(body)); args += ["-H", "Content-Type: application/json", "--data-binary", "@/tmp/_c.json"]
        return json.loads(subprocess.run(args + [f"https://api.github.com/repos/{OWNER_REPO}{path}"], capture_output=True, text=True).stdout)
    ref = api("GET", f"/git/ref/heads/{branch}"); head = ref["object"]["sha"]
    base = api("GET", f"/git/commits/{head}")["tree"]["sha"]; entries = []
    for path, content in files.items():
        if content is None: entries.append({"path": path, "mode": "100644", "type": "blob", "sha": None}); continue
        b = content if isinstance(content, bytes) else content.encode("utf-8")
        blob = api("POST", "/git/blobs", {"content": base64.b64encode(b).decode(), "encoding": "base64"}); assert "sha" in blob, blob
        entries.append({"path": path, "mode": "100644", "type": "blob", "sha": blob["sha"]})
    tree = api("POST", "/git/trees", {"base_tree": base, "tree": entries}); assert "sha" in tree, tree
    commit = api("POST", "/git/commits", {"message": msg, "tree": tree["sha"], "parents": [head]}); assert "sha" in commit, commit
    upd = api("PATCH", f"/git/refs/heads/{branch}", {"sha": commit["sha"]})
    return commit["sha"], upd.get("object", {}).get("sha") == commit["sha"]
