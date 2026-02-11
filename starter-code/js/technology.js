const currentPage = window.location.pathname;
const buttons = document.querySelectorAll("[data-tech-btn]");
const links = document.querySelectorAll("nav a");
const img = document.getElementById("tech-img");
const description = document.getElementById("tech-description");
const terminology = document.getElementById("tech-terminology");
const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const menu = document.getElementById("menu");

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

const getData = async () => {
    try {
        const response = await fetch("./data.json");
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error(`"Error:" error`)
    }
}

async function loadData() {
    const data = await getData();
    loadTechnology(data.technology);
}

loadData();

const loadTechnology = (technology) => {

    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            buttons.forEach(button => button.parentElement.classList.remove("isActive"));
            btn.parentElement.classList.add("isActive");

            const targetId = btn.id;
            const tech = technology.find(t => t.name.toLowerCase().includes(targetId.toLowerCase()));

            console.log(tech);
            img.src = tech.images.portrait;
            description.textContent = tech.description;
            terminology.textContent = tech.name;
        })
    })
}

menuBtn.addEventListener("click", () => {
    menu.parentElement.classList.add("open")
})

closeBtn.addEventListener("click", () => {
    menu.parentElement.classList.remove("open");
})