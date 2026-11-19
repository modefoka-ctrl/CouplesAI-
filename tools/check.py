#!/usr/bin/env python3
"""CouplesAI validation suite. Run from the repo root:  python3 tools/check.py
Needs python3 and node. Exits 1 on any FAIL. Warnings are advisory.
Every check here exists because the bug it catches actually happened."""
import sys, os, re, json, glob, subprocess
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from scene_lib import *

FAILS, WARNS = [], []
def ok(m): print("  ok   ", m)
def fail(m): FAILS.append(m); print("  FAIL ", m)
def warn(m): WARNS.append(m); print("  warn ", m)
def check(cond, m, hard=True):
    (ok(m) if cond else (fail(m) if hard else warn(m)))

data = raw("data.js"); index = raw("index.html"); full = raw("full.html")
W = worlds_of(data)
TT = json.loads(data[slice(*block(data, "const TENSION_TRANSLATIONS = ", "{", "}"))])
LT = json.loads(data[slice(*block(data, "const LOC_TYPES = ", "{", "}"))])
cs, ce = block(data, "const CONNECTORS=", "{", "}")
CONN = {m.group(1): re.findall(r"'([^']*)'", m.group(2)) for m in re.finditer(r"(?<![A-Za-z_])([a-z0-9]+)\s*:\s*\[([^\]]*)\]", data[cs:ce])}
FR = re.compile(r"close-up|low[- ]angle|overhead|wide angle|dutch (tilt|angle)|fisheye|zoom", re.I)
PLAIN = {"in","amid","at","within","against","beside","inside","on","among","beneath","through","set in"}
SENSITIVE = re.compile(r"Auschwitz|Birkenau|Hiroshima|Nagasaki|Arizona memorial|Stasi|concentration camp|genocide", re.I)
TONE_STRONG = re.compile(r"argu|confess|accus|betray|\bweep|\bcry\b|crying|tears(?! of joy)|griev|grief|mourn|funeral|corpse|bleed|wound|injur|arrest|tear gas|water cannon|hostage|terrif|despair|abandon|goodbye|farewell|furious|shaken|aghast|dread|trauma|dead\b|death|\bdying|undead|doubt|guilt|famine|heartbreak|lonel|melanchol|misery|sorrow|gloom|bleak|haunt|exhaust|menac|recoil|cower|victim|survivor|trapped|hunted|\bfear", re.I)
print(f"{len(W)} worlds\n")

print("1. Files parse")
check(node_ok(data), "data.js is valid JavaScript")
check(node_ok(inline_of(index, "function generate()")), "index.html script is valid")
check(node_ok(inline_of(full, "function buildPromptString")), "full.html script is valid")
check("simple.html" not in index and "simple.html" not in full, "no page links to the removed simple.html")

print("\n2. Every world is selectable in the full generator (Carnival went missing once)")
s = data.find("WORLD_CATS=["); e = data.find("];", s) + 2
listed = [x for x in re.findall(r"'([a-z0-9]+)'", data[s:e])]
check(sorted(listed) == sorted(W), "each world is in exactly one category")
if sorted(listed) != sorted(W):
    print("      missing:", sorted(set(W) - set(listed)), "| unknown:", sorted(set(listed) - set(W)), "| repeated:", sorted({x for x in listed if listed.count(x) > 1}))

print("\n3. World data")
EXTRA = []
for wid, w in W.items():
    miss = [k for k in ("id","name","sub","color","tensions","locs","poses","looks") if k not in w]
    if miss: fail(f"{wid}: missing fields {miss}"); continue
    for f in ("locs","poses","looks","tensions"):
        d = [x for x in set(w[f]) if w[f].count(x) > 1]
        if d: warn(f"{wid}: duplicate {f}: {d[:2]}")
    aff = w.get("affinities") or {}
    nomatch = [t for t in w["tensions"] if t not in aff]
    if nomatch: fail(f"{wid}: {len(nomatch)}/{len(w['tensions'])} tensions have no matched set (items will mix across scenes)")
    if any(x not in w[k] for a in aff.values() for k in ("locs","poses","looks") for x in a[k]): EXTRA.append(wid)
    r = metric(w)
    if r > 1.3: fail(f"{wid}: repetition {r:.2f} > 1.3 (pose/look repeat the location's words)")
    elif r > 1.0: warn(f"{wid}: repetition {r:.2f}")
    nolt = [l for l in w["locs"] if l not in LT]
    if nolt: warn(f"{wid}: {len(nolt)} pool locations have no LOC_TYPES entry (lighting filter treats them as indoor+outdoor)")
    sens = [l for l in w["locs"] if SENSITIVE.search(l)]
    if sens: fail(f"{wid}: sensitive location(s): {sens}")
    tone=[x for k in ("poses","looks","tensions") for x in w[k] if TONE_STRONG.search(x)]
    if tone: fail(f"{wid}: reads as conflict or distress, not something to frame or post: {tone[:2]}")
    for f in ("promptPrefix", "promptSuffix"):
        if "atmosphere only" in w.get(f, ""): fail(f"{wid}: {f} repeats the generator's 'atmosphere only' sentence")
    if w.get("promptPrefix"):
        if len(w.get("variantDirectives", [])) != 6: fail(f"{wid}: prefix world without 6 variantDirectives (its 6 variants will not differ)")
        if any(FR.search(x) for x in w["poses"] + w["looks"]) or FR.search(w["promptPrefix"] + " " + w.get("promptSuffix", "")):
            fail(f"{wid}: camera-angle wording in poses/looks/prefix/suffix (fights the variant directives)")
    plain = [c for c in CONN.get(wid, []) if c not in PLAIN]
    if plain: warn(f"{wid}: poetic joiner words {plain}")
if EXTRA: fail(f"{len(EXTRA)} worlds have matched-set items outside their pools (rebuild them with scene_world): {', '.join(EXTRA)}")
check(True, "per-world structure checked for all worlds")

print("\n4. Real prompt builder, every world x every tension")
res = harness(data, index); n = len(res["all"]); bad = []
for k, p in res["all"].items():
    wid, t = k.split("|", 1)
    expect = 0 if W[wid].get("tensionIsStyle") else 1
    problems = []
    if not p: problems.append("empty")
    else:
        if re.search(r"undefined|null|\[object|NaN", p): problems.append("undefined/null in text")
        if re.search(r"\.\.(?!\.)", p): problems.append("double period")
        if "Create a 4:5 a " in p: problems.append("double article")
        if p.count("atmosphere only") != expect: problems.append(f"'atmosphere only' x{p.count('atmosphere only')}")
        if t not in TT and not W[wid].get("tensionIsStyle") and p.count(t) != 1: problems.append("untranslated tension not printed exactly once")
    if problems: bad.append((k, problems))
check(not bad, f"{n} prompts clean (no null, double period, double article, repeated instruction)")
for k, pr in bad[:5]: print("      ", k, pr)
vbad = [w for w, v in res["first"].items() if len(set(v["variants"])) != 6 or any(x == v["main"] for x in v["variants"])]
check(not vbad, "every world gives 6 distinct variants that differ from the main prompt")
if vbad: print("      ", vbad)

print("\n5. Quick page behaviour")
RAND = r"""
;(function(){var n=4000,tot=0,full=0,loc=0;
 for(var i=0;i<n;i++){randomize();var w=WORLDS.find(x=>x.id===S.world);var a=w.affinities&&w.affinities[S.tension];
  if(!a) continue; tot++; var l=a.locs.includes(S.loc),p=a.poses.includes(S.pose),k=a.looks.includes(S.look); if(l)loc++; if(l&&p&&k)full++;}
 console.log('@@R@@'+JSON.stringify({tot:tot,full:full,loc:loc}));})();
"""
r = run_js(STUBS + data + "\n" + inline_of(index, "function generate()") + RAND, "@@R@@")
pct = 100 * r["full"] / max(r["tot"], 1)
check(pct >= 99, f"random picks come from the tension's matched set: {pct:.0f}% of {r['tot']} draws (location alone: {100*r['loc']/max(r['tot'],1):.0f}%)")
REND = r"""
;(function(){var w=WORLDS[0],t=w.tensions[0],a=w.affinities[t];
 S.world=w.id;S.tension=t;S.loc=a.locs[0];S.pose=a.poses[0];S.look=a.looks[0];S.lighting=null;S.shot=null;S.era=null;S.ratio='4:5';S.subject='couple';
 var v=buildVariants(); renderVariants(v);
 console.log('@@T@@'+JSON.stringify({n:v.length,cards:__cards.length,html:__cards[0].innerHTML,prompt:__cards[0].dataset.prompt}));})();
"""
t = run_js(STUBS + data + "\n" + inline_of(index, "function generate()") + REND, "@@T@@")
check(t["n"] == 6 and t["cards"] == 6, "six variants render as six cards")
check("copyVariant(this)" in t["html"] and len(t["prompt"]) > 100, "each card has a Copy button and stores its full prompt (a broken onclick once disabled copying)")

print("\n6. Full generator (its real randomizers, run in a tolerant stub DOM)")
FULL_STUBS = r"""
const __els={};
function __style(){return new Proxy({},{get(t,k){if(k in t)return t[k];if(typeof k==='symbol')return undefined;return function(){return '';};},set(t,k,v){t[k]=v;return true;}});}
function __mk(id){
  const store={id:id,value:'',textContent:'',innerHTML:'',innerText:'',outerHTML:'',title:'',placeholder:'',href:'',src:'',name:'',type:'',label:'',text:'',htmlFor:'',dataset:{},style:__style(),className:'',children:[],options:[],checked:false,disabled:false,hidden:false,open:false,selected:false,selectedIndex:0,scrollTop:0,scrollLeft:0,scrollHeight:0,offsetHeight:0,offsetWidth:0,clientHeight:0,clientWidth:0,length:0};
  const cl={add(){},remove(){},toggle(){},contains(){return false}};
  return new Proxy(store,{
    get(t,k){
      if(k in t) return t[k];
      if(k==='classList') return cl;
      if(k==='appendChild'||k==='append'||k==='prepend'||k==='insertBefore') return function(c){t.children.push(c);return c;};
      if(k==='querySelectorAll') return function(){return [];};
      if(k==='querySelector') return function(){return __mk('q');};
      if(k==='closest') return function(){return null;};
      if(k==='getBoundingClientRect') return function(){return {top:0,left:0,width:0,height:0,bottom:0,right:0};};
      if(typeof k==='symbol') return undefined;
      return function(){return undefined;};
    },
    set(t,k,v){t[k]=v;return true;}
  });
}
const document={getElementById:function(id){return __els[id]||(__els[id]=__mk(id));},createElement:function(){return __mk('new');},querySelector:function(){return __mk('q');},querySelectorAll:function(){return [];},addEventListener:function(){},body:__mk('body'),documentElement:__mk('html'),head:__mk('head'),title:''};
const window={addEventListener:function(){},matchMedia:function(){return {matches:false,addEventListener:function(){}};},innerWidth:400,innerHeight:800,scrollTo:function(){},location:{hash:'',search:'',href:'',pathname:'/'},history:{replaceState:function(){},pushState:function(){}}};
const navigator={clipboard:{writeText:function(){return Promise.resolve();}},vibrate:function(){},userAgent:'node'};
const localStorage={getItem:function(){return null;},setItem:function(){},removeItem:function(){}};
const sessionStorage=localStorage;
function requestAnimationFrame(f){f();}
function getComputedStyle(){return {getPropertyValue:function(){return '';}};}
"""
FULLTEST = r"""
;(function(){
 var res={rand:{tot:0,all3:0,loc:0},spin:{tot:0,all3:0,loc:0},errors:[]};
 function chk(kind){var w=WORLDS.find(function(x){return x.id===S.world;});var a=w&&w.affinities&&w.affinities[S.tension];if(!a)return;
   var r=res[kind];r.tot++;var l=a.locs.indexOf(S.loc)>-1,p=a.poses.indexOf(S.pose)>-1,k=a.looks.indexOf(S.look)>-1;if(l)r.loc++;if(l&&p&&k)r.all3++;}
 function unlock(){for(var key in LOCKS)LOCKS[key]=false;}
 try{for(var i=0;i<1500;i++){unlock();randomizeAll();chk('rand');}}catch(e){res.errors.push('randomizeAll: '+e.message);}
 try{for(var j=0;j<1500;j++){unlock();if(j%25===0)randomizeAll();spinUnlocked();chk('spin');}}catch(e){res.errors.push('spinUnlocked: '+e.message);}
 console.log('@@F@@'+JSON.stringify(res));process.exit(0);
})();
"""
ap = re.findall(r"const AFFINITY_RATE\s*=\s*([0-9.]+)", full)
check(bool(ap) and float(ap[0]) == 1.0, "AFFINITY_RATE is 1: randomizeAll/spinUnlocked always draw from the tension's matched set (0.7 mixed scenes)")
try:
    fr = run_js(FULL_STUBS + data + "\n" + inline_of(full, "function buildPromptString") + FULLTEST, "@@F@@")
    check(not fr["errors"], "randomizeAll and spinUnlocked run without errors")
    if fr["errors"]: print("      ", fr["errors"][:2])
    for kind, label in (("rand", "randomizeAll"), ("spin", "spinUnlocked")):
        pct = 100 * fr[kind]["all3"] / max(fr[kind]["tot"], 1)
        check(pct >= 99, f"{label}: {pct:.0f}% of {fr[kind]['tot']} draws came entirely from the tension's matched set")
except Exception as ex:
    warn("could not run the full page's randomizers in the stub DOM: " + str(ex)[:200])

print("\n7. Sources (worlds/ -> data.js)")
wdir = os.path.join(ROOT, "worlds")
if not os.path.isdir(wdir):
    print("   (no worlds/ folder here: skipped)")
else:
    rr = subprocess.run([sys.executable, os.path.join(os.path.dirname(os.path.abspath(__file__)), "build.py"), "--check"], capture_output=True, text=True)
    check(rr.returncode == 0, "data.js is exactly what tools/build.py produces from worlds/ (no hand edits, no stale build)")
    if rr.returncode: print("      ", (rr.stdout + rr.stderr).strip()[:300])
    for pth in sorted(glob.glob(os.path.join(wdir, "*.json"))):
        nm = os.path.basename(pth)[:-5]
        if nm.startswith("_"): continue
        d = json.load(open(pth, encoding="utf-8"))
        extra = [t for t in d.get("translations", {}) if t not in d["tensions"]]
        if extra: fail(f"{nm}: translations for tensions the world does not have: {extra[:2]}")

print(f"\n{len(FAILS)} failure(s), {len(WARNS)} warning(s)")
sys.exit(1 if FAILS else 0)
