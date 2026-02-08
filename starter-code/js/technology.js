const currentPage = window.location.pathname;
const buttons = document.querySelectorAll("[data-tech-btn]");
const links = document.querySelectorAll("nav a");
const img = document.getElementById("tech-img");
const description = document.getElementById("tech-description");
const member = document.getElementById("tech-terminology");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        buttons.forEach(button => button.parentElement.classList.remove("isActive"));
        btn.parentElement.classList.add("isActive");
    })
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

const loadTechnology = (tech) => {
    console.log(tech);
}