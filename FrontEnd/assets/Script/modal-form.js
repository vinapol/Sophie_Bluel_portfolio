import { imageList} from "./modal.js";
import { imgUrl, submitProject } from "./submit_project.js";

export function modalForm(window, imgBox, title, addWorks) {
  const getCategories = localStorage.getItem("categories");
  const categorie = JSON.parse(getCategories);

  const getProjects = localStorage.getItem("projectsArray");
  const projectArray = JSON.parse(getProjects);

  imgBox.remove();
  title.innerHTML = "Ajout photo";
  addWorks.innerHTML = "Valider";
  addWorks.style = "background-color = #A7A7A7";

  const back = document.createElement("i");
  const form = document.createElement("form");
  const imageDiv = document.createElement("div");
  const image = document.createElement("input");
  const imageIcon = document.createElement("i");
  const addProject = document.createElement("button");
  const limits = document.createElement("p");
  const titre = document.createElement("label");
  const label = document.createElement("input");
  const chooseCat = document.createElement("label");
  const select = document.createElement("select");

  window.appendChild(form);
  window.appendChild(back);
  form.appendChild(imageDiv);
  imageDiv.appendChild(image);
  imageDiv.appendChild(imageIcon);
  imageDiv.appendChild(addProject);
  imageDiv.appendChild(limits);
  form.appendChild(titre);
  form.appendChild(label);
  form.appendChild(chooseCat);
  form.appendChild(select);

  image.type = "file";
  image.id = "file-upload";
  image.name = "image";
  image.accept = "image/png, image/jpeg";

  addProject.textContent = "+ Ajouter projet";
  limits.textContent = "jpg, png : 4mo max";

  titre.textContent = "Titre";
  chooseCat.textContent = "Catégorie";

  label.type = "text";

  categorie.forEach((cat) => {
    const option = document.createElement("option");
    select.appendChild(option);
    option.textContent = cat.name;
    option.setAttribute("value", cat.id);
  });

  back.classList.add("fa-solid", "fa-arrow-left", "back", "form");
  form.classList.add("new-project-form", "form");
  imageDiv.classList.add("image-div-form", "form");
  image.classList.add("new-image", "form");
  imageIcon.classList.add("fa-regular", "fa-image", "new-img-icon", "form");
  addProject.classList.add("add-project", "form");
  limits.classList.add("limits", "form");
  titre.classList.add("form-title-1", "form");
  chooseCat.classList.add("form-title-2", "form");
  label.classList.add("new-project-title", "form");
  select.classList.add("select", "form");

  const endForm = document.querySelectorAll("form");

  back.addEventListener("click", () => {
    endForm.forEach((e) => {
      e.remove();
    });
    imageList(window, title, projectArray, addWorks);
  });
  imgUrl(imageDiv,image,imageIcon,limits,addProject)
  submitProject()
}
