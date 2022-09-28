import './style.css'

const $ = (selector) => document.querySelector(selector)

const $input = $('input')

const configUser = window.matchMedia('(prefers-color-scheme: dark)')

$input.addEventListener('change', () => {
	if (configUser.matches) {
		document.body.classList.toggle('light-theme')
	} else {
		document.body.classList.toggle('dark-theme')
	}
})
