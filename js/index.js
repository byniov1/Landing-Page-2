console.log("helooo");

const hamburger = document.querySelector('.navigation__hamburger');
const navigation__list = document.querySelector('.navigation__list')

hamburger.addEventListener('click', () => {
  navigation__list.classList.toggle('is-active')
})



// hamburger.addEventListener('click', () => {
//   navigation__list.classList.toggle('is-active');
// })