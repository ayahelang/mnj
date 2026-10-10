// MNJ Main JS — light, no heavy deps
document.addEventListener('DOMContentLoaded', () => {
  // Header scroll
  const header = document.getElementById('header');
  if (header) {
    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 40);
    });
  }

  // Mobile nav
  const toggle = document.getElementById('mobileToggle');
  const nav = document.getElementById('nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => nav.classList.toggle('open'));
  }

  // Smooth nav active
  document.querySelectorAll('.nav a[href^="#"]').forEach(a => {
    a.addEventListener('click', () => {
      if (nav) nav.classList.remove('open');
    });
  });

  // Order form
  const form = document.getElementById('orderForm');
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(form));
      // Demo: simpan ke localStorage + tampilkan success
      // Production: kirim ke Supabase / Formspree / Google Sheet
      const orders = JSON.parse(localStorage.getItem('mnj_orders') || '[]');
      orders.push({ ...data, ts: new Date().toISOString(), id: 'ORD-' + Date.now() });
      localStorage.setItem('mnj_orders', JSON.stringify(orders));

      form.style.display = 'none';
      document.getElementById('orderSuccess').style.display = 'block';

      // Optional: buka WA prefill
      const waMsg = encodeURIComponent(
        `Halo Teddy, saya ${data.nama} dari ${data.perusahaan}.\n` +
        `Ingin order: ${data.produk}\n` +
        `Lokasi: ${data.lokasi}\n` +
        `Budget: ${data.budget || '-'}\n` +
        `WA: ${data.wa}`
      );
      // Uncomment jika ingin auto-open WA setelah submit:
      // window.open(`https://wa.me/6285158822803?text=${waMsg}`, '_blank');
    });
  }
});

function quickTrack() {
  const id = document.getElementById('quickTrack')?.value.trim();
  if (id) location.href = `track.html#${encodeURIComponent(id)}`;
  else location.href = 'track.html';
}
