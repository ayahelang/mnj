// MNJ Main JS — order form + quick track
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('orderForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(form));
      const orders = JSON.parse(localStorage.getItem('mnj_orders') || '[]');
      orders.push({ ...data, ts: new Date().toISOString(), id: 'ORD-' + Date.now() });
      localStorage.setItem('mnj_orders', JSON.stringify(orders));
      form.style.display = 'none';
      const success = document.getElementById('orderSuccess');
      if (success) success.style.display = 'block';
    });
  }
});

function quickTrack() {
  const id = document.getElementById('quickTrack')?.value.trim();
  if (id) location.href = 'track.html#' + encodeURIComponent(id);
  else location.href = 'track.html';
}
