import getElement from './utils/getElement'
import getAllElements from './utils/getAllElements'

export default function setupBookmarks() {
  const cards = getAllElements('.quiz-card')

  cards.forEach(card => {
    const quizCardMarkbook = getElement('.js-quiz-card-bookmark', card)
    quizCardMarkbook.addEventListener('click', () => {
      quizCardMarkbook.classList.toggle('quiz-card__bookmark--selected')
    })
  })
}
