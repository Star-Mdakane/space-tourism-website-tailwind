const currentPage = window.location.pathname;

const links = document.querySelectorAll("nav a");

links.forEach(link => {
    if (link.href.includes(currentPage)) {
        link.parentElement.classList.add("isActive");
        link.setAttribute("aria-current", "page");
    }
})
