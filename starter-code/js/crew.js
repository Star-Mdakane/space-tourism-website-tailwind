const currentPage = window.location.pathname;
const buttons = document.querySelectorAll("[data-crew-btn]");
const links = document.querySelectorAll("nav a");
const img = document.getElementById("crew-img");
const description = document.getElementById("crew-description");
const member = document.getElementById("crew-member");
const rank = document.getElementById("crew-rank");


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
    loadCrew(data.crew);
}

loadData();

const loadCrew = (crews) => {

    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            buttons.forEach(button => button.parentElement.classList.remove("isActive"));
            btn.parentElement.classList.add("isActive");

            // Getting the array with the destination items
            const targetId = btn.id;
            const crew = crews.find(crw => crw.name.toLowerCase().includes(targetId.toLowerCase()));

            console.log(crew.images.webp);
            img.src = crew.images.webp;
            rank.textContent = crew.role;
            member.textContent = crew.name;
            description.textContent = crew.bio;
        })
    });
};