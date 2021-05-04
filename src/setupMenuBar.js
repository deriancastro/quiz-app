import getAllElements from './utils/getAllElements'
import getElement from './utils/getElement'

export default function setupMenuBar() {
  const menuButton = getElement('[data-menu]')
  const optionsList = getElement('[data-options]')
  const modusButton = getElement('[data-modus]')
  const photoButton = getElement('[data-photo]')
  const pages = getAllElements('[data-page]')

  menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('app-menu__button--highlighted')
    optionsList.classList.toggle('hidden')
  })

  modusButton.addEventListener('click', () => {
    console.log('Darkmodus activated')
    pages.forEach(page => {
      page.classList.toggle('app-main--darkmodus')
    })
  })

  photoButton.addEventListener('click', () => {
    console.log('Edit Photo')
  })
}
