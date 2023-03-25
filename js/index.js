const closeNav = document.getElementById("navigation")
const navBar = document.getElementById("navbar")

closeNav.addEventListener('click', () => {
    navBar.classList.toggle("display")
})