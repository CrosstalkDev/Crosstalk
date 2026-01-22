const profileBox = document.querySelector('.ProfileBox');
const avatarCircle = document.querySelector('.pfp');

avatarCircle.addEventListener('click', () => profileBox.classlist.toggle('show'));
