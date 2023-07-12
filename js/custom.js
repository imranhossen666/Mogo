
const menu = document.querySelector(".menu ul")
const menuIcon = document.querySelector(".menu-icon")

menuIcon.addEventListener("click", () => {
    menu.classList.toggle("menu-visible")
})
window.addEventListener("scroll", () => {
    menu.classList.remove("menu-visible")
})