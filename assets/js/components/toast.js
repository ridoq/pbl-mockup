/* ============================================================
   TOAST COMPONENT (ATOM) — NAFA iSTORE
   Menangani notifikasi popup cepat di seluruh halaman
   ============================================================ */

let _toastTimer = null;

function showToast(msg) {
  const t = document.getElementById("toast");
  const tm = document.getElementById("toastMsg");
  if (!t) return;
  if (tm) tm.textContent = msg;

  t.classList.remove("translate-y-20", "opacity-0");
  clearTimeout(_toastTimer);
  _toastTimer = setTimeout(() => {
    t.classList.add("translate-y-20", "opacity-0");
  }, 2300);
}
