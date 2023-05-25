const toggleMenu = document.querySelector('.toggle-button');
const navigation = document.querySelector('.navbar-links');

toggleMenu.addEventListener('click', () => {
  toggleMenu.classList.toggle('active');
  navigation.classList.toggle('active');
});

const cloud1 = document.getElementById('cloud1');
const cloud3 = document.getElementById('cloud3');
const cloud4 = document.getElementById('cloud4');
const cloud5 = document.getElementById('cloud5');
const cloud6 = document.getElementById('cloud6');
const cloud7 = document.getElementById('cloud7');
const cloud8 = document.getElementById('cloud8');
const sakuraLeft = document.getElementById('sakura-left');
const sakuraRight = document.getElementById('sakura-right');

window.addEventListener('scroll', () => {
  const offsetY = window.scrollY;
  cloud1.style.top = -offsetY * 0.5 + 'px';
  cloud3.style.bottom = offsetY * 0.4 + 'px';
  cloud4.style.bottom = offsetY * 0.3 + 'px';
  cloud5.style.top = -offsetY * 0.7 + 'px';
  cloud6.style.bottom = offsetY * 0.25 + 'px';
  cloud7.style.bottom = offsetY + 'px';
  cloud8.style.top = -offsetY + 'px';
  sakuraLeft.style.left = offsetY * -0.5 + 'px';
  sakuraRight.style.right = offsetY * -0.5 + 'px';
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    entry.isIntersecting ? entry.target.classList.add('show') : entry.target.classList.remove('show');
  });
});

const hiddenComponents = document.querySelectorAll('.hidden');
hiddenComponents.forEach((el) => observer.observe(el));