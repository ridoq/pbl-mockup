/* ============================================================
   REVEAL COMPONENT (ATOM) — NAFA iSTORE
   Animasi scroll-in halus untuk elemen dengan class .reveal
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  const reveals = document.querySelectorAll(".reveal");
  if (!reveals.length) return;

  if (!("IntersectionObserver" in window)) {
    reveals.forEach((el) => el.classList.add("show"));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  reveals.forEach((el) => io.observe(el));
});
