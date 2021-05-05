import getElement from './utils/getElement'
import setupButtonBookmark from './setupButtonBookmark'

export default function setupCreateCard() {
  const form = getElement('[data-js="form"]')
  const cardList = getElement('[data-page="home"]')

  form.addEventListener('submit', handleSubmit)

  const cards = loadFromLocal('cards') ?? []
  cards.forEach(renderCard)

  function handleSubmit(event) {
    event.preventDefault()
    const { question, answer, tags } = form.elements

    const newCard = {
      question: question.value,
      answer: answer.value,
      tags: tags.value,
    }

    renderCard(newCard)
    cards.push(newCard)
    saveToLocal('cards', cards)
    form.reset()
  }

  function renderCard(card) {
    const { question, answer, tags } = card
    const el = document.createElement('section')
    el.className = 'quiz-card'
    el.innerHTML = `
    <div
          role="button"
          class="quiz-card__bookmark quiz-card__bookmark--selected js-quiz-card-bookmark"
          aria-label="Add bookmark"
        ></div>
        <h2 class="quiz-card__question">Question:</h2>
        <p class="quiz-card__text">
          ${question}
        </p>
        <button class="quiz-card__button js-quiz-card-button">
          Show answer
        </button>
        <p class="quiz-card__text js-quiz-card-answer hidden">
        ${answer}
        </p>
        <ul class="quiz-card__tag-list">

          <li>${tags}</li>

        </ul>
    `
    console.log(el)
    cardList.prepend(el)
    setupButtonBookmark(el)
  }

  function loadFromLocal(key) {
    const jsonString = localStorage.getItem(key)
    return JSON.parse(jsonString)
  }

  function saveToLocal(key, data) {
    localStorage.setItem(key, JSON.stringify(data))
  }
}
