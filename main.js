const toggle = document.getElementsByClassName('toggle')[0]
const navLinks = document.getElementsByClassName('nav__links')[0]

toggle.addEventListener('click', () => {
    navLinks.classList.toggle('active')
})