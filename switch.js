const toggle = document.getElementById('toggle');
const status = document.getElementById('status');

toggle.addEventListener('change', function() {
  if (this.checked) {
    status.textContent = 'Charging';
    status.style.color = '#27AE60';
  } else {
    status.textContent = 'Not Charging';
    status.style.color = '#999';
  }
});
