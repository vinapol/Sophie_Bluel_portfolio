import { displayFilters } from "./filter.js";
import { editionMode } from "./edition_mode.js";
import { logout } from "./edition_mode.js";
import { modificationButton } from "./edition_mode.js";

fetch(`http://localhost:5678/api/works`)
  .then((response) => response.json())
  .then((projectsArray) => {
    console.table(projectsArray);
    displayProjects(projectsArray);
    localStorage.setItem("projectsArray", JSON.stringify(projectsArray));
    editionMode();
    logout();
    modificationButton();
  });

export function displayProjects(projectsArray) {
  const projectSection = document.getElementById("gallery");

  projectSection.innerHTML = "";

  projectsArray.forEach((project) => {
    const projectCard = document.createElement("figure");
    const img = document.createElement("img");
    img.setAttribute("src", project.imageUrl);
    const caption = document.createElement("figcaption");
    projectCard.id = `work-${project.id}`;
    caption.innerText = project.title;
    projectSection.appendChild(projectCard);
    projectCard.appendChild(img);
    projectCard.appendChild(caption);
    projectCard.dataset.categoryId = project.categoryId;
  });
}
