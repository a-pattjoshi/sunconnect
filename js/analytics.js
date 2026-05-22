/* ── SUNCONNECT — Analytics & Rating Module ── */

/* ── SUPABASE CONFIG — replace with your values ──────────────────────
   Get these from: supabase.com → your project → Settings → API        */
const SC_SUPABASE_URL = 'YOUR_SUPABASE_URL';       // e.g. https://xxxx.supabase.co
const SC_SUPABASE_KEY = 'YOUR_SUPABASE_ANON_KEY';  // anon / public key

/* ── SESSION ID — unique per browser session ── */
const _SC_SID = sessionStorage.getItem('sc_sid') || (() => {
  const id = Math.random().toString(36).slice(2) + Date.now().toString(36);
  sessionStorage.setItem('sc_sid', id);
  return id;
})();

const _SC_AK = 'sc_analytics';

function scGetAnalytics() {
  try {
    const d = localStorage.getItem(_SC_AK);
    const def = { signinClicks: 0, signinEvents: [], ratings: [] };
    if (!d) return def;
    const p = JSON.parse(d);
    return { signinClicks: p.signinClicks||0, signinEvents: p.signinEvents||[], ratings: p.ratings||[] };
  } catch(e) { return { signinClicks: 0, signinEvents: [], ratings: [] }; }
}

function _scSave(data) {
  try { localStorage.setItem(_SC_AK, JSON.stringify(data)); } catch(e) {}
}

/* ── POST TO SUPABASE (fire-and-forget, never blocks UI) ── */
function _scPost(payload) {
  if (!SC_SUPABASE_URL || SC_SUPABASE_URL.includes('YOUR_')) return;
  fetch(SC_SUPABASE_URL + '/rest/v1/sc_events', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'apikey': SC_SUPABASE_KEY,
      'Authorization': 'Bearer ' + SC_SUPABASE_KEY,
      'Prefer': 'return=minimal'
    },
    body: JSON.stringify({ ...payload, session_id: _SC_SID })
  }).catch(() => {}); // fail silently — never break the app
}

/* ── SIGN-IN TRACKING ── */
function scTrackSignin() {
  const d = scGetAnalytics();
  const user = (typeof scGetUser === 'function') ? scGetUser() : null;
  d.signinClicks++;
  d.signinEvents.push({ ts: new Date().toISOString() });
  _scSave(d);
  _scPost({ event_type: 'signin', role: user ? user.role : 'unknown' });
}

/* ── RATING STORAGE ── */
function _scSaveRating(score, trigger) {
  const d = scGetAnalytics();
  const user = (typeof scGetUser === 'function') ? scGetUser() : null;
  const entry = {
    score,
    trigger,
    role: user ? user.role : 'unknown',
    ts: new Date().toISOString()
  };
  d.ratings.push(entry);
  _scSave(d);
  _scPost({ event_type: 'rating', score, trigger, role: entry.role });
}

/* ── FETCH ALL EVENTS FROM SUPABASE (for admin dashboard) ── */
async function scFetchRemoteEvents() {
  if (!SC_SUPABASE_URL || SC_SUPABASE_URL.includes('YOUR_')) return null;
  try {
    const res = await fetch(
      SC_SUPABASE_URL + '/rest/v1/sc_events?select=*&order=created_at.desc&limit=1000',
      {
        headers: {
          'apikey': SC_SUPABASE_KEY,
          'Authorization': 'Bearer ' + SC_SUPABASE_KEY
        }
      }
    );
    if (!res.ok) return null;
    return await res.json();
  } catch(e) { return null; }
}

/* ── DELETE ALL REMOTE EVENTS (admin clear) ── */
async function scClearRemoteEvents() {
  if (!SC_SUPABASE_URL || SC_SUPABASE_URL.includes('YOUR_')) return;
  try {
    await fetch(SC_SUPABASE_URL + '/rest/v1/sc_events?id=gte.0', {
      method: 'DELETE',
      headers: {
        'apikey': SC_SUPABASE_KEY,
        'Authorization': 'Bearer ' + SC_SUPABASE_KEY
      }
    });
  } catch(e) {}
}

/* ── RATING MODAL ─────────────────────────────────── */
let _scRatingCb = null, _scSelStar = 0, _scCooldown = 0;

function scShowRatingModal(trigger, callback) {
  if (Date.now() - _scCooldown < 20000) { if (callback) callback(); return; }
  _scCooldown = Date.now();
  _scRatingCb = callback || null;
  _scSelStar = 0;

  const titles = {
    logout:       'Before you go…',
    app_close:    'Welcome back! 👋',
    notification: 'Quick feedback!'
  };
  const subs = {
    logout:       'How was your experience today?',
    app_close:    'How was your last session on SunConnect?',
    notification: 'Rate your SunConnect experience so far'
  };

  const old = document.getElementById('sc-rating-modal');
  if (old) old.remove();

  if (!document.getElementById('sc-anim-css')) {
    const st = document.createElement('style');
    st.id = 'sc-anim-css';
    st.textContent = '@keyframes scPop{from{transform:scale(.82) translateY(24px);opacity:0}to{transform:scale(1) translateY(0);opacity:1}} #sc-rating-modal .sc-rm{animation:scPop .3s cubic-bezier(.34,1.56,.64,1)}';
    document.head.appendChild(st);
  }

  const el = document.createElement('div');
  el.id = 'sc-rating-modal';
  el.style.cssText = 'position:fixed;inset:0;background:rgba(15,23,42,.58);z-index:99999;display:flex;align-items:center;justify-content:center;';
  el.innerHTML = `
    <div class="sc-rm" style="background:#fff;border-radius:20px;padding:36px 32px 28px;max-width:380px;width:92%;text-align:center;box-shadow:0 24px 60px rgba(0,0,0,.22);">
      <div style="font-size:2.2rem;margin-bottom:10px;">☀️</div>
      <div style="font-size:1.1rem;font-weight:800;color:#1a1a2e;margin-bottom:6px;">${titles[trigger]||'Quick feedback!'}</div>
      <div style="font-size:0.875rem;color:#6b7280;margin-bottom:24px;">${subs[trigger]||'Rate your experience'}</div>
      <div id="sc-stars" style="display:flex;justify-content:center;gap:8px;margin-bottom:10px;">
        ${[1,2,3,4,5].map(i=>`<span style="font-size:2.5rem;cursor:pointer;color:#e5e7eb;line-height:1;transition:color .12s;user-select:none;"
          onmouseover="scHS(${i})" onmouseout="scUH()" onclick="scSS(${i})">★</span>`).join('')}
      </div>
      <div id="sc-rmsg" style="font-size:.82rem;color:#F59E0B;font-weight:600;min-height:20px;margin-bottom:20px;"></div>
      <div style="display:flex;gap:10px;">
        <button onclick="scSkipRating()" style="flex:1;padding:11px;border:1.5px solid #e5e7eb;border-radius:10px;background:#fff;cursor:pointer;font-size:.875rem;color:#9ca3af;font-weight:500;">Skip</button>
        <button id="sc-rbtn" onclick="scSubmitRating('${trigger}')" disabled
          style="flex:2;padding:11px;border:none;border-radius:10px;background:#F59E0B;cursor:pointer;font-size:.875rem;font-weight:700;color:#fff;opacity:.4;transition:opacity .2s;">
          Submit ★
        </button>
      </div>
    </div>`;
  document.body.appendChild(el);
}

function scHS(n) {
  document.querySelectorAll('#sc-stars span').forEach((s,i) => s.style.color = i<n ? '#F59E0B' : '#e5e7eb');
}
function scUH() {
  document.querySelectorAll('#sc-stars span').forEach((s,i) => s.style.color = i<_scSelStar ? '#F59E0B' : '#e5e7eb');
}
function scSS(n) {
  _scSelStar = n;
  scHS(n);
  const msgs = ['','😞 We\'ll do better!','😐 Thanks for the feedback','🙂 Good to know!','😊 Great!','🌟 You made our day!'];
  const el = document.getElementById('sc-rmsg');
  if (el) el.textContent = msgs[n]||'';
  const btn = document.getElementById('sc-rbtn');
  if (btn) { btn.disabled = false; btn.style.opacity = '1'; }
}
function scSubmitRating(trigger) {
  if (!_scSelStar) return;
  _scSaveRating(_scSelStar, trigger);
  const rm = document.querySelector('#sc-rating-modal .sc-rm');
  if (rm) {
    rm.innerHTML = `
      <div style="font-size:2.8rem;margin-bottom:14px;">🌟</div>
      <div style="font-size:1.2rem;font-weight:800;color:#1a1a2e;">Thank you!</div>
      <div style="font-size:.875rem;color:#6b7280;margin-top:8px;line-height:1.5;">Your feedback helps us build a better SunConnect.</div>`;
  }
  setTimeout(() => {
    const m = document.getElementById('sc-rating-modal');
    if (m) m.remove();
    if (_scRatingCb) { const cb = _scRatingCb; _scRatingCb = null; cb(); }
  }, 1600);
}
function scSkipRating() {
  const m = document.getElementById('sc-rating-modal');
  if (m) m.remove();
  if (_scRatingCb) { const cb = _scRatingCb; _scRatingCb = null; cb(); }
}

/* ── CLOSE-APP DETECTION ── */
window.addEventListener('beforeunload', function() {
  if (typeof scGetUser === 'function' && scGetUser() && !sessionStorage.getItem('sc_logout_nav')) {
    localStorage.setItem('sc_pending_rating', Date.now().toString());
  }
});
