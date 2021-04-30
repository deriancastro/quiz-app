const quizCardButton = getElement('.js-quiz-card-button')
const bookmarkSelector = getElement('.js-quiz-card-bookmark')
const answerText = getElement('.js-quiz-card-answer')

const homeButton = getElement('.js-home-button')
const bookmarkButton = getElement('.js-bookmark-button')
const createButton = getElement('.js-create-button')
const profileButton = getElement('.js-profile-button')

const homePage = getElement('.js-home')
const bookmarkPage = getElement('.js-bookmark')
const createPage = getElement('.js-create')
const profilePage = getElement('.js-profile')

const homeHeader = getElement('.js-home-header')
const bookmarkHeader = getElement('.js-bookmark-header')
const createHeader = getElement('.js-create-header')
const profileHeader = getElement('.js-profile-header')

homeButton.addEventListener('click', navigateToHome)
bookmarkButton.addEventListener('click', navigateToBookmark)
createButton.addEventListener('click', navigateToCreate)
profileButton.addEventListener('click', navigateToProfile)

quizCardButton.addEventListener('click', () => {
  answerText.classList.toggle('hidden')
})

bookmarkSelector.addEventListener('click', () => {
  bookmarkSelector.classList.toggle('quiz-card__bookmark--selected')
})

function navigateToHome() {
  showHeader(homeHeader)
  changePage(homePage)
  activeNavButton(homeButton)
}

function navigateToBookmark() {
  showHeader(bookmarkHeader)
  changePage(bookmarkPage)
  activeNavButton(bookmarkButton)
}

function navigateToCreate() {
  showHeader(createHeader)
  changePage(createPage)
  activeNavButton(createButton)
}

function navigateToProfile() {
  showHeader(profileHeader)
  changePage(profilePage)
  activeNavButton(profileButton)
}

function showHeader(header) {
  hideAllHeader()
  header.classList.remove('hidden')
}

function changePage(page) {
  hideAllPages()
  page.classList.remove('hidden')
}

function activeNavButton(button) {
  deactiveNavButtons()
  button.classList.add('menu__nav-link--highlighted')
}

function hideAllHeader() {
  homeHeader.classList.add('hidden')
  bookmarkHeader.classList.add('hidden')
  createHeader.classList.add('hidden')
  profileHeader.classList.add('hidden')
}

function hideAllPages() {
  homePage.classList.add('hidden')
  bookmarkPage.classList.add('hidden')
  createPage.classList.add('hidden')
  profilePage.classList.add('hidden')
}

function deactiveNavButtons() {
  homeButton.classList.remove('menu__nav-link--highlighted')
  bookmarkButton.classList.remove('menu__nav-link--highlighted')
  createButton.classList.remove('menu__nav-link--highlighted')
  profileButton.classList.remove('menu__nav-link--highlighted')
}

function getElement(element) {
  return document.querySelector(element)
}
