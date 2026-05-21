/* ── SUNCONNECT — Auth & Navigation ── */

const USERS = {
  'customer@sunconnect.in': { password: 'solar123', role: 'customer', name: 'Priya Sharma',                    initials: 'PS' },
  'vendor@sunconnect.in':   { password: 'solar123', role: 'vendor',   name: 'Satish Kumar (Pratham Solar)',    initials: 'SK' }
};

function scLogin(email, password) {
  const u = USERS[email.toLowerCase().trim()];
  if (u && u.password === password) {
    const s = JSON.stringify({ email, role: u.role, name: u.name, initials: u.initials });
    try { localStorage.setItem('sc_session', s); } catch(e) {}
    try { sessionStorage.setItem('sc_session', s); } catch(e) {}
    return u.role;
  }
  return null;
}

function scGetUser() {
  try {
    const s = localStorage.getItem('sc_session') || sessionStorage.getItem('sc_session');
    return s ? JSON.parse(s) : null;
  } catch(e) { return null; }
}

function scRequireRole(role) {
  const u = scGetUser();
  if (!u) { window.location.replace('index.html'); return null; }
  if (u.role !== role) {
    window.location.replace(u.role === 'customer' ? 'customer-dashboard.html' : 'vendor-dashboard.html');
    return null;
  }
  return u;
}

function scLogout() {
  sessionStorage.setItem('sc_logout_nav', '1');
  localStorage.removeItem('sc_pending_rating');
  if (typeof scShowRatingModal === 'function') {
    scShowRatingModal('logout', function() {
      localStorage.removeItem('sc_session');
      sessionStorage.removeItem('sc_session');
      window.location.replace('index.html');
    });
  } else {
    localStorage.removeItem('sc_session');
    sessionStorage.removeItem('sc_session');
    window.location.replace('index.html');
  }
}

/* ── NAV DEFINITIONS ── */
const CUSTOMER_NAV = [
  { icon: '🏠', label: 'Dashboard',          href: 'customer-dashboard.html' },
  { icon: '🔍', label: 'Find Installers',    href: 'customer-marketplace.html' },
  { icon: '📋', label: 'My Inquiry',         href: 'customer-inquiry.html' },
  { icon: '📊', label: 'Project Tracker',    href: 'customer-tracker.html' },
  { icon: '💰', label: 'Financing & Subsidy',href: 'customer-financing.html' },
];

const VENDOR_NAV = [
  { icon: '🏠', label: 'Dashboard',  href: 'vendor-dashboard.html' },
  { icon: '📥', label: 'Leads',      href: 'vendor-leads.html' },
  { icon: '📄', label: 'Quotations', href: 'vendor-quotations.html' },
  { icon: '🏗️', label: 'Projects',   href: 'vendor-projects.html' },
  { icon: '👷', label: 'Labor Pool', href: 'vendor-labor.html' },
  { icon: '🏢', label: 'My Profile', href: 'vendor-profile.html' },
];

function renderSidebar(role) {
  const el = document.getElementById('sidebar');
  if (!el) return;

  // Mobile close button inside sidebar logo
  const logo = el.querySelector('.sidebar-logo');
  if (logo && !logo.querySelector('.sidebar-close-btn')) {
    const closeBtn = document.createElement('button');
    closeBtn.className = 'sidebar-close-btn';
    closeBtn.innerHTML = '✕';
    closeBtn.setAttribute('aria-label', 'Close menu');
    closeBtn.onclick = closeSidebar;
    logo.appendChild(closeBtn);
  }

  // Mobile overlay
  if (!document.getElementById('sidebar-overlay')) {
    const ov = document.createElement('div');
    ov.id = 'sidebar-overlay';
    ov.className = 'sidebar-overlay';
    ov.onclick = closeSidebar;
    document.body.appendChild(ov);
  }

  // Hamburger button — prepend to top-bar
  const topBar = document.querySelector('.top-bar');
  if (topBar && !document.getElementById('hamburger-btn')) {
    const btn = document.createElement('button');
    btn.id = 'hamburger-btn';
    btn.className = 'hamburger-btn';
    btn.setAttribute('aria-label', 'Open menu');
    btn.innerHTML = '☰';
    btn.onclick = toggleSidebar;
    topBar.insertBefore(btn, topBar.firstChild);
  }

  // Wire notification bell
  _setupNotifications(role);
}

function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('mobile-open');
  const ov = document.getElementById('sidebar-overlay');
  if (ov) ov.classList.toggle('visible');
}

function closeSidebar() {
  document.getElementById('sidebar').classList.remove('mobile-open');
  const ov = document.getElementById('sidebar-overlay');
  if (ov) ov.classList.remove('visible');
}

/* ── NOTIFICATIONS ── */
const _CUSTOMER_NOTIFS = [
  { icon:'🏗️', title:'SuryamTech Solar on-site today', body:'Panel mounting underway at HSR Layout. Est. completion 18 May.', time:'Just now' },
  { icon:'✅', title:'PM Surya Ghar registration confirmed', body:'Your subsidy of ₹78,000 (Central) is registered.', time:'2 hr ago' },
];
const _VENDOR_NOTIFS = [
  { icon:'📥', title:'New lead — Rohit Verma', body:'Whitefield, 5 kW residential. Respond within 24 hrs.', time:'Just now' },
  { icon:'💬', title:'Quote viewed by Savitha Rao', body:'She has viewed your ₹2,85,000 quote for 5 kW.', time:'1 hr ago' },
  { icon:'⭐', title:'New 5-star review', body:'Meenakshi V. left a review: "Excellent work, on time!"', time:'Yesterday' },
];

function _setupNotifications(role) {
  const btn = document.querySelector('.notif-btn');
  if (!btn || document.getElementById('notif-dropdown')) return;

  const notifs = role === 'customer' ? _CUSTOMER_NOTIFS : _VENDOR_NOTIFS;

  const panel = document.createElement('div');
  panel.id = 'notif-dropdown';
  panel.className = 'notif-dropdown';
  panel.innerHTML = `
    <div class="notif-header">
      <span class="notif-header-title">Notifications</span>
      <button class="notif-clear" onclick="document.querySelector('.notif-badge').style.display='none';showToast('All marked as read','success')">Mark all read</button>
    </div>
    ${notifs.map(n => `
    <div class="notif-item">
      <span class="notif-item-icon">${n.icon}</span>
      <div class="notif-item-body">
        <div class="notif-item-title">${n.title}</div>
        <div class="notif-item-text">${n.body}</div>
        <div class="notif-item-time">${n.time}</div>
      </div>
    </div>`).join('')}`;

  btn.style.position = 'relative';
  btn.appendChild(panel);

  btn.addEventListener('click', e => {
    e.stopPropagation();
    panel.classList.toggle('open');
    // Show rating after user has viewed notifications for 3 seconds (once per session)
    if (panel.classList.contains('open') && typeof scShowRatingModal === 'function') {
      if (!sessionStorage.getItem('sc_notif_rated')) {
        sessionStorage.setItem('sc_notif_rated', '1');
        setTimeout(() => {
          if (panel.classList.contains('open')) {
            panel.classList.remove('open');
            scShowRatingModal('notification', null);
          }
        }, 3500);
      }
    }
  });
  document.addEventListener('click', () => panel.classList.remove('open'));
  panel.addEventListener('click', e => e.stopPropagation());
}

/* ── TOAST ── */
function showToast(msg, type = '') {
  let cont = document.getElementById('toast-container');
  if (!cont) { cont = document.createElement('div'); cont.id = 'toast-container'; document.body.appendChild(cont); }
  const t = document.createElement('div');
  const icon = type === 'success' ? '✓' : type === 'error' ? '✗' : 'ℹ';
  t.className = `toast ${type}`; t.innerHTML = `${icon} ${msg}`;
  cont.appendChild(t);
  setTimeout(() => { t.style.opacity = '0'; t.style.transition = 'opacity 0.4s'; setTimeout(() => t.remove(), 400); }, 3200);
}

/* ── STARS ── */
function renderStars(r) {
  let html = '';
  for (let i = 1; i <= 5; i++) html += i <= Math.round(r) ? '★' : '☆';
  return `<span class="stars">${html}</span>`;
}
