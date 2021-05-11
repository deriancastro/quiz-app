import getElement from './utils/getElement'

export default function setupButtonBookmark(card) {
  const button = getElement('.js-quiz-card-button', card)
  const bookmark = getElement('.js-quiz-card-bookmark', card)
  const answer = getElement('.js-quiz-card-answer', card)

  button.addEventListener('click', () => {
    answer.classList.toggle('hidden')
  })

  bookmark.addEventListener('click', () => {
    bookmark.classList.toggle('quiz-card__bookmark--selected')
  })
}
