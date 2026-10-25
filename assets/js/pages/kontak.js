/* ============================================================
   PAGE CONTROLLER: KONTAK (kontak.html) — NAFA iSTORE
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm");
  if (!contactForm) return;

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const cName = document.getElementById("cName");
    const cMsg = document.getElementById("cMsg");

    const name = cName ? cName.value.trim() : "";
    const msg = cMsg ? cMsg.value.trim() : "";

    if (name.length < 3 || !msg) {
      showToast("⚠️ Isi nama dan pesan dulu ya");
      return;
    }

    const waNumber = typeof STORE !== "undefined" && STORE.wa ? STORE.wa : "https://wa.me/6281234567890";
    const waBase = waNumber.startsWith("http") ? waNumber : `https://wa.me/${waNumber.replace(/[^0-9]/g, "")}`;
    const text = encodeURIComponent(`Halo NAFA iSTORE, saya ${name}. ${msg}`);

    window.open(`${waBase}?text=${text}`, "_blank");
    showToast("✓ Pesan siap dikirim via WhatsApp");
    contactForm.reset();
  });
});
