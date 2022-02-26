console.log("helooo");

const hamburger = document.querySelector('.navigation__hamburger');
const navigation__list = document.querySelector('.navigation__list')

hamburger.addEventListener('click', () => {
  console.log('klikam w hamburger');
  navigation__list.classList.toggle('is-active')
})

navigation__list.addEventListener('click', () => {
  navigation__list.classList.toggle('is-active');
})