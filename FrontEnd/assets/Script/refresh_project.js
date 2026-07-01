export async function refreshProjects() {
    const response = await fetch("http://localhost:5678/api/works");
    const newProjects = await response.json();

    localStorage.setItem("projectsArray", JSON.stringify(newProjects));

    updateDOM(newProjects);
    return newProjects;
}

function updateDOM(newProjects) {
    const gallery = document.querySelector(".gallery");
    if (gallery) {
        gallery.innerHTML = "";
        newProjects.forEach(work => {
            const figure = document.createElement("figure");
            figure.innerHTML = `
                <img src="${work.imageUrl}" alt="${work.title}">
                <figcaption>${work.title}</figcaption>
            `;
            gallery.appendChild(figure);
        });
    }

    const imgBox = document.querySelector(".img-box");
    if (imgBox) {
        imgBox.innerHTML = "";
        newProjects.forEach(work => {
            const workDiv = document.createElement("div");
            workDiv.classList.add("img-supress");
            workDiv.id = `work-${work.id}`;
            workDiv.innerHTML = `
                <img src="${work.imageUrl}" class="img-modal">
                <button class="delete-work supress" data-id="${work.id}">
                    <i class="fa-solid fa-trash-can trash"></i>
                </button>
            `;
            imgBox.appendChild(workDiv);
        });

        import("./delete_button_function.js").then(module => {
            module.deleteButtonFunction();
        });
    }
}