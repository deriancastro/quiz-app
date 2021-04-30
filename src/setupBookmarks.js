import getElement from './utils/getElement'

export default function setupBookmarks() {
  const bookmarkSelector = getElement('.js-quiz-card-bookmark')
  bookmarkSelector.addEventListener('click', () => {
    bookmarkSelector.classList.toggle('quiz-card__bookmark--selected')
  })
}
