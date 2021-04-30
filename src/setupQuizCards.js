import getElement from './utils/getElement'
import getAllElements from './utils/getAllElements'

export default function setupQuizCards() {
  const cards = getAllElements('.quiz-card')
  console.log(cards)

  cards.forEach(card => {
    const quizCardButton = getElement('.js-quiz-card-button', card)
    quizCardButton.addEventListener('click', () => {
      const answerText = getElement('.js-quiz-card-answer', card)
      answerText.classList.toggle('hidden')
      console.log(quizCardButton)
    })
  })
}
