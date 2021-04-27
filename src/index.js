const buttonQuizCard = document.querySelector('.js-quiz-card-button')
const buttonBookmark = document.querySelector('.js-quiz-card-bookmark')
const answer = document.querySelector('.js-quiz-card-answer')

buttonQuizCard.addEventListener('click', () => {
  answer.classList.toggle('hidden')
})

buttonBookmark.addEventListener('click', () => {
  buttonBookmark.classList.toggle('quiz-card__bookmark--selected')
})

const home = document.querySelector('.js-home-button')
const bookmark = document.querySelector('.js-bookmark-button')
const create = document.querySelector('.js-create-button')
const profile = document.querySelector('.js-profile-button')

const homePage = document.querySelector('.js-home')
const bookmarkPage = document.querySelector('.js-bookmark')
const createPage = document.querySelector('.js-create')
const profilePage = document.querySelector('.js-profile')

const homeHeader = document.querySelector('.js-home-header')
const bookmarkHeader = document.querySelector('.js-bookmark-header')
const createHeader = document.querySelector('.js-create-header')
const profileHeader = document.querySelector('.js-profile-header')

home.addEventListener('click', () => {
  homePage.classList.remove('hidden')
  bookmarkPage.classList.add('hidden')
  createPage.classList.add('hidden')
  profilePage.classList.add('hidden')

  homeHeader.classList.remove('hidden')
  bookmarkHeader.classList.add('hidden')
  createHeader.classList.add('hidden')
  profileHeader.classList.add('hidden')

  home.classList.add('menu__nav-link--highlighted')
  bookmark.classList.remove('menu__nav-link--highlighted')
  create.classList.remove('menu__nav-link--highlighted')
  profile.classList.remove('menu__nav-link--highlighted')
})

bookmark.addEventListener('click', () => {
  homePage.classList.add('hidden')
  bookmarkPage.classList.remove('hidden')
  createPage.classList.add('hidden')
  profilePage.classList.add('hidden')

  homeHeader.classList.add('hidden')
  bookmarkHeader.classList.remove('hidden')
  createHeader.classList.add('hidden')
  profileHeader.classList.add('hidden')

  home.classList.remove('menu__nav-link--highlighted')
  bookmark.classList.add('menu__nav-link--highlighted')
  create.classList.remove('menu__nav-link--highlighted')
  profile.classList.remove('menu__nav-link--highlighted')
})

create.addEventListener('click', () => {
  homePage.classList.add('hidden')
  bookmarkPage.classList.add('hidden')
  createPage.classList.remove('hidden')
  profilePage.classList.add('hidden')

  homeHeader.classList.add('hidden')
  bookmarkHeader.classList.add('hidden')
  createHeader.classList.remove('hidden')
  profileHeader.classList.add('hidden')

  home.classList.remove('menu__nav-link--highlighted')
  bookmark.classList.remove('menu__nav-link--highlighted')
  create.classList.add('menu__nav-link--highlighted')
  profile.classList.remove('menu__nav-link--highlighted')
})

profile.addEventListener('click', () => {
  homePage.classList.add('hidden')
  bookmarkPage.classList.add('hidden')
  createPage.classList.add('hidden')
  profilePage.classList.remove('hidden')

  homeHeader.classList.add('hidden')
  bookmarkHeader.classList.add('hidden')
  createHeader.classList.add('hidden')
  profileHeader.classList.remove('hidden')

  home.classList.remove('menu__nav-link--highlighted')
  bookmark.classList.remove('menu__nav-link--highlighted')
  create.classList.remove('menu__nav-link--highlighted')
  profile.classList.add('menu__nav-link--highlighted')
})
