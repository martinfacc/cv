const button = document.querySelector('#changeTheme')
const configUser = window.matchMedia('(prefers-color-scheme: dark)')
button.addEventListener('click', () => {
    if (configUser.matches) {
        document.body.classList.toggle('light-theme')
    } else {
        document.body.classList.toggle('dark-theme')
    }
})