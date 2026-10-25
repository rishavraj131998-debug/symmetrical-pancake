const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');

menuToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  menuToggle.textContent = isOpen ? '×' : '☰';
});

nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open navigation');
    menuToggle.textContent = '☰';
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

const copyButton = document.getElementById('copyEmail');
const copyStatus = document.getElementById('copyStatus');
copyButton.addEventListener('click', async () => {
  const email = 'rishavraj131998@gmail.com';
  try {
    await navigator.clipboard.writeText(email);
    copyStatus.textContent = 'Email address copied!';
  } catch (error) {
    const temp = document.createElement('textarea');
    temp.value = email;
    temp.setAttribute('readonly', '');
    temp.style.position = 'absolute';
    temp.style.left = '-9999px';
    document.body.appendChild(temp);
    temp.select();
    const copied = document.execCommand('copy');
    temp.remove();
    copyStatus.textContent = copied ? 'Email address copied!' : 'Email: ' + email;
  }
});
