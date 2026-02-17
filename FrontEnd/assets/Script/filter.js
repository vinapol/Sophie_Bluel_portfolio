import { displayProjects } from "./dynamic_project.js";

fetch(`http://localhost:5678/api/categories`)
  .then((response) => response.json())
  .then((categories) => {
    console.table(categories);
    allButton();
    displayFilters(categories);
    filterButtonFunction();
  });
function allButton() {
  const filter = document.getElementById("filter-content");
  const button = document.createElement("button");
  button.classList.add("filter-button");
  button.textContent = "Tous";
  button.id = 0;
  button.dataset.categoryId = 0;
  filter.appendChild(button);
}
export function displayFilters(categories) {
  const filter = document.getElementById("filter-content");
  categories.forEach((categorie) => {
    const button = document.createElement("button");
    button.classList.add("filter-button");
    button.textContent = categorie.name;
    button.id = `filter-${categorie.id}`;
    button.dataset.categoryId = categorie.id;
    filter.appendChild(button);
  });
}

export function filterButtonFunction() {
  const buttons = document.querySelectorAll(".filter-button");

  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      buttons.forEach(btn => btn.classList.remove("selected"))
      document.innerHTML = "";
      const value = e.currentTarget.dataset.categoryId;
      e.currentTarget.classList.add("selected");
      console.log(value);
      localStorage.setItem("filterId", value);
      filterWorksById(value);
    });
  });
}

export function filterWorksById(id) {
  const projectsArray = JSON.parse(
    localStorage.getItem("projectsArray") || "[]",
  );
  const filteredProjects = projectsArray.filter(
    (project) => project.categoryId.toString() === id.toString(),
  );
  console.log(filteredProjects, id);
  displayProjects(filteredProjects);

  if (filteredProjects.length === 0) {
    displayProjects(projectsArray);
  }
}
