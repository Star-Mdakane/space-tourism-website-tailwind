const currentPage = window.location.pathname;
const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const menu = document.getElementById("menu");

const links = document.querySelectorAll("nav a");

links.forEach(link => {
  link.parentElement.classList.remove("isActive");
  link.removeAttribute("aria-current");
});

links.forEach(link => {
    if (link.href.includes(currentPage)) {
        link.parentElement.classList.add("isActive");
        link.setAttribute("aria-current", "page");
    }
})

menuBtn.addEventListener("click", () => {
    menu.parentElement.classList.add("open")
})

closeBtn.addEventListener("click", () => {
    menu.parentElement.classList.remove("open");
})