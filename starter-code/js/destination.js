const currentPage = window.location.pathname;
const buttons = document.querySelectorAll("[data-destination-btn]");
const links = document.querySelectorAll("nav a");
const img = document.getElementById("destination-img");
const description = document.getElementById("destination-description");
const title = document.getElementById("destination-title");
const distance = document.getElementById("destination-distance");
const time = document.getElementById("destination-time");
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
    loadDestination(data.destinations);
}

loadData();

const loadDestination = (destinations) => {
    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            // nav styling
            buttons.forEach(button => button.parentElement.classList.remove("isActive"));
            btn.parentElement.classList.add("isActive");

            // Getting the array with the destination items
            const targetId = btn.id;
            const dest = destinations.find(destination => destination.name.toLowerCase().includes(targetId.toLowerCase()))

            // Updating the UI
            console.log(dest.images.webp);
            img.src = dest.images.webp;
            title.textContent = dest.name;
            description.textContent = dest.description;
            distance.textContent = dest.distance;
            time.textContent = dest.travel;
        })
    });
}

menuBtn.addEventListener("click", () => {
    menu.parentElement.classList.add("open")
})

closeBtn.addEventListener("click", () => {
    menu.parentElement.classList.remove("open");
})