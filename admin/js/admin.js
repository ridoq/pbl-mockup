/* ============================================================
   ADMIN SHARED — NAFA iSTORE
   - Auth demo via localStorage (nafa_users, nafa_session)
   - Shell: sidebar + topbar di-inject ke semua halaman admin
   - Toast & modal konfirmasi bersama
   ⚠️ Password disimpan polos — hanya untuk demo/PBL.
      Versi nyata butuh backend + hash password.
   ============================================================ */

const fmtRp = n => 'Rp' + Number(n || 0).toLocaleString('id-ID');
const slugify = s => s.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
const escapeHTML = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

/* ============ AUTH (demo) ============ */
const AdminAuth = {
  users() { try { return JSON.parse(localStorage.getItem('nafa_users') || '[]'); } catch { return []; } },
  saveUsers(u) { localStorage.setItem('nafa_users', JSON.stringify(u)); },
  session() { try { return JSON.parse(localStorage.getItem('nafa_session') || 'null'); } catch { return null; } },

  // Akun demo pertama kali, biar presentasi langsung bisa masuk
  seedDefault() {
    if (this.users().length === 0) {
      this.saveUsers([{ name: 'Admin NAFA', email: 'admin@nafaistore.id', password: 'admin123', role: 'admin', createdAt: new Date().toISOString() }]);
    }
  },
  register(name, email, password) {
    const users = this.users();
    if (users.some(u => u.email === email)) return { ok: false, msg: 'Email sudah terdaftar.' };
    users.push({ name, email, password, role: 'admin', createdAt: new Date().toISOString() });
    this.saveUsers(users);
    return { ok: true };
  },
  login(email, password) {
    const u = this.users().find(u => u.email === email && u.password === password);
    if (!u) return { ok: false, msg: 'Email atau password salah.' };
    localStorage.setItem('nafa_session', JSON.stringify({ name: u.name, email: u.email, role: u.role || 'admin', loginAt: new Date().toISOString() }));
    return { ok: true };
  },
  logout() { localStorage.removeItem('nafa_session'); location.href = 'login.html'; },
  require() { if (!this.session()) location.replace('login.html'); },
};

/* ============ TOAST ============ */
let _toastTimer;
function adminToast(msg) {
  const t = document.getElementById('adminToast');
  if (!t) return;
  document.getElementById('adminToastMsg').textContent = msg;
  t.classList.remove('translate-y-20', 'opacity-0');
  clearTimeout(_toastTimer);
  _toastTimer = setTimeout(() => t.classList.add('translate-y-20', 'opacity-0'), 2400);
}

/* ============ MODAL KONFIRMASI ============ */
function _ensureConfirm() {
  if (document.getElementById('admConfirm')) return;
  const w = document.createElement('div');
  w.id = 'admConfirm';
  w.className = 'invisible fixed inset-0 z-[80] opacity-0 transition-all duration-200';
  w.innerHTML = `
    <div class="absolute inset-0 bg-ink/60 backdrop-blur-sm" data-cf-no></div>
    <div class="absolute left-1/2 top-1/2 w-[92%] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-3xl bg-white p-7 shadow-2xl">
      <div class="grid h-12 w-12 place-items-center rounded-2xl bg-cream text-xl">⚠️</div>
      <h3 class="mt-4 text-lg font-semibold">Konfirmasi</h3>
      <p id="cfMsg" class="mt-2 text-sm leading-relaxed text-neutral-500"></p>
      <div class="mt-6 flex gap-3">
        <button id="cfOk" class="flex-1 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800">Hapus</button>
        <button data-cf-no class="flex-1 rounded-full border border-silver-300 px-5 py-3 text-sm font-semibold transition hover:border-ink">Batal</button>
      </div>
    </div>`;
  document.body.appendChild(w);
}
function adminConfirm(msg, okText = 'Hapus') {
  _ensureConfirm();
  return new Promise(resolve => {
    const w = document.getElementById('admConfirm');
    w.querySelector('#cfMsg').textContent = msg;
    w.querySelector('#cfOk').textContent = okText;
    w.classList.remove('invisible', 'opacity-0');
    const close = val => { w.classList.add('invisible', 'opacity-0'); resolve(val); };
    w.querySelectorAll('[data-cf-no]').forEach(b => b.onclick = () => close(false));
    w.querySelector('#cfOk').onclick = () => close(true);
  });
}

/* ============ SHELL (sidebar + topbar) ============ */
const ADMIN_MENU = [
  { key: 'dashboard', label: 'Dashboard', href: 'index.html', icon: '<rect x="3" y="3" width="7" height="9" rx="1.5"/><rect x="14" y="3" width="7" height="5" rx="1.5"/><rect x="14" y="12" width="7" height="9" rx="1.5"/><rect x="3" y="16" width="7" height="5" rx="1.5"/>' },
  { key: 'produk',   label: 'Produk',    href: 'produk.html', icon: '<rect x="3" y="4" width="18" height="16" rx="4"/><circle cx="9" cy="10" r="1.6"/><path d="m5 18 4.5-4.5a1.4 1.4 0 0 1 2 0L16 18"/>' },
  { key: 'blog',     label: 'Blog',      href: 'blog.html', icon: '<path d="M4 5h16M4 12h16M4 19h10"/>' },
  { key: 'pesanan',  label: 'Pesanan',   href: 'pesanan.html', icon: '<path d="M6 7h12l1.5 12.5a1.5 1.5 0 0 1-1.5 1.5H6a1.5 1.5 0 0 1-1.5-1.5z"/><path d="M9 10V6a3 3 0 0 1 6 0v4"/>' },
];

const _LOGO = `<svg width="26" height="30" viewBox="0 0 24 24" aria-hidden="true"><path fill="#F6F1E7" d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.03 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"/></svg>`;

function initShell(active, title) {
  AdminAuth.require();
  AdminAuth.seedDefault();
  const s = AdminAuth.session();

  document.getElementById('sidebar').innerHTML = `
    <div class="flex h-full flex-col">
      <a href="index.html" class="flex h-[76px] items-center gap-3 border-b border-white/10 px-6">
        ${_LOGO}
        <span class="font-display text-lg font-bold tracking-wide text-white">NAFA <span class="italic">i</span>STORE</span>
      </a>
      <p class="mb-2 mt-7 px-6 text-[10px] font-semibold uppercase tracking-[0.25em] text-neutral-500">Panel Admin</p>
      <nav class="flex-1 space-y-1 px-3">
        ${ADMIN_MENU.map(m => `
          <a href="${m.href}" class="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${m.key === active ? 'bg-white/10 text-white' : 'text-neutral-400 hover:bg-white/5 hover:text-white'}">
            <svg class="h-[18px] w-[18px]" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">${m.icon}</svg>
            ${m.label}
            ${m.key === 'pesanan' ? '<span id="sbOrderBadge" class="ml-auto hidden rounded-full bg-cream px-2 py-0.5 text-[10px] font-bold text-ink"></span>' : ''}
          </a>`).join('')}
      </nav>
      <div class="border-t border-white/10 p-4">
        <a href="../index.html" target="_blank" rel="noopener" class="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-neutral-400 transition hover:bg-white/5 hover:text-white">
          <svg class="h-[18px] w-[18px]" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M14 4h6v6M20 4 10 14M18 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6"/></svg>
          Lihat Website
        </a>
      </div>
    </div>`;

  document.getElementById('topbar').innerHTML = `
    <div class="flex h-[76px] items-center justify-between gap-4 px-4 sm:px-8">
      <div class="flex items-center gap-3">
        <button id="sbMenu" class="grid h-11 w-11 place-items-center rounded-full border border-silver-300 lg:hidden" aria-label="Buka menu">
          <svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
        </button>
        <h1 class="text-lg font-semibold tracking-tight sm:text-xl">${title}</h1>
      </div>
      <div class="flex items-center gap-3">
        <div class="hidden text-right sm:block">
          <p class="text-sm font-semibold leading-tight">${escapeHTML(s?.name || 'Admin')}</p>
          <p class="text-xs text-neutral-400">${escapeHTML(s?.email || '')}</p>
        </div>
        <div class="grid h-11 w-11 place-items-center rounded-full bg-ink text-sm font-bold text-cream">${escapeHTML((s?.name || 'A').charAt(0).toUpperCase())}</div>
        <button id="btnLogout" class="grid h-11 w-11 place-items-center rounded-full border border-silver-300 transition hover:border-red-300 hover:text-red-500" title="Keluar" aria-label="Keluar">
          <svg class="h-[18px] w-[18px]" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"/></svg>
        </button>
      </div>
    </div>`;

  document.getElementById('btnLogout').addEventListener('click', () => AdminAuth.logout());

  // Toggle sidebar mobile
  const sb = document.getElementById('sidebar');
  const bd = document.getElementById('sbBackdrop');
  document.getElementById('sbMenu').addEventListener('click', () => { sb.classList.toggle('-translate-x-full'); bd.classList.toggle('hidden'); });
  bd.addEventListener('click', () => { sb.classList.add('-translate-x-full'); bd.classList.add('hidden'); });

  // Badge jumlah pesanan baru di sidebar
  try {
    const orders = JSON.parse(localStorage.getItem('nafa_orders') || '[]').filter(o => !o.status || o.status === 'Baru');
    const badge = document.getElementById('sbOrderBadge');
    if (badge && orders.length > 0) { badge.textContent = orders.length; badge.classList.remove('hidden'); }
  } catch {}
}
