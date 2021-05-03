import getAllElements from './utils/getAllElements'
import getElement from './utils/getElement'

export default function setupNavigation() {
  const header = getElement('[data-header]')
  const pages = getAllElements('[data-page]')
  const buttons = getAllElements('[data-nav]')

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const buttonName = button.dataset.nav
      header.innerText = button.dataset.headerText.toUpperCase()
      changePage(buttonName)
      changeButton(buttonName)
    })
  })

  function changeButton(buttonName) {
    buttons.forEach(button => {
      const buttonActiveName = button.dataset.nav
      button.classList.toggle(
        'menu__nav-link--highlighted',
        buttonActiveName === buttonName
      )
    })
  }

  function changePage(buttonName) {
    pages.forEach(page => {
      const pageName = page.dataset.page
      page.classList.toggle('hidden', pageName !== buttonName)
    })
  }
}
