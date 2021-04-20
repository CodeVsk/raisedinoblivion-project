let Show_Menu = true;

const Section_Menu = document.querySelector(".menu-section")
const Toggle_Menu = document.querySelector(".menu-toggle")

Toggle_Menu.addEventListener("click", () => {
    Section_Menu.classList.toggle("on", Show_Menu)
    document.body.style.overflow = Show_Menu ? "hidden" : "initial"
    Show_Menu = !Show_Menu;
})