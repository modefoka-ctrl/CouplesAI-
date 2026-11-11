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

const WORLDS = __WORLDS__;

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

const CONNECTORS=__CONNECTORS__;;

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
  const __WORLD_CATS__
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
const LOC_TYPES = __LOC_TYPES__;

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

const TENSION_TRANSLATIONS = __TRANSLATIONS__;
