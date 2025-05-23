const toggle = document.getElementById('theme-toggle');
const body = document.body;

// Load theme from localStorage if it exists
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark');
  toggle.textContent = '☀️ Light Mode';
}

toggle.addEventListener('click', () => {
  body.classList.toggle('dark');
  if (body.classList.contains('dark')) {
    toggle.textContent = '☀️ Light Mode';
    localStorage.setItem('theme', 'dark');
  } else {
    toggle.textContent = '🌙 Dark Mode';
    localStorage.setItem('theme', 'light');
  }
});