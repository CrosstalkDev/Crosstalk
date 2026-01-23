const profileBox = document.querySelector('.ProfileBox');
const avatarCircle = document.querySelector('.pfp');
const alertBox = document.querySelector('.alert-box');

avatarCircle.addEventListener('click', () => profileBox.classList.toggle('show'));

setTimeout(() => alertBox.classList.add('show'), 50);

setTimeout(() => {
  alertBox.classList.remove('show');
  setTimeout(() => alertBox.remove(), 1000);
}, 6000);
