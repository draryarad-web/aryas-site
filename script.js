const toggle = document.getElementById('menu-toggle');
const nav = document.querySelector('.main-nav');

toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'بستن منو' : 'باز کردن منو');
});

nav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  });
});

const form = document.getElementById('contact-form');
const note = document.getElementById('form-note');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!form.checkValidity()) {
    note.textContent = 'لطفاً نام و شماره تماس را وارد کنید.';
    note.style.color = '#c0392b';
    form.reportValidity();
    return;
  }
  // TODO: اتصال فرم به سرویس ارسال ایمیل یا API
  note.style.color = '';
  note.textContent = 'درخواست شما ثبت شد. به زودی با شما تماس گرفته می‌شود.';
  form.reset();
});
