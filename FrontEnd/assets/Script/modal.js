import { deleteButtonFunction } from "./delete_button_function.js";
import { modalForm } from "./modal-form.js";

export function modalView() {
  const page = document.querySelector("body");
  const window = document.createElement("div");
  const overlay = document.createElement("aside");
  overlay.appendChild(window);
  page.appendChild(overlay);
  window.classList.add("modal-box");
  overlay.classList.add("modal-overlay");
  page.style.overflow = "hidden";

  modalContent(overlay, window, page);

  overlay.addEventListener("click", () => {
    modalClosin(overlay, window, page);
  });

  window.addEventListener("click", (event) => {
    event.stopPropagation();
  });
}

export function modalContent(overlay, window, page) {
  const storedProject = localStorage.getItem("projectsArray");

  const projectsArray = JSON.parse(storedProject);

  const title = document.createElement("h3");
  const close = document.createElement("i");
  title.classList.add("modal-title");
  close.classList.add("fa-solid", "fa-xmark", "close");
  title.textContent = "Galerie photo";
  window.appendChild(title);
  window.appendChild(close);

  close.addEventListener("click", () => {
    modalClosin(overlay, window, page);
  });

  const line = document.createElement("div");
  line.classList.add("modal-line");
  window.appendChild(line);

  const addWorks = document.createElement("button");
  addWorks.classList.add("add-works-button");
  window.appendChild(addWorks);
  addWorks.textContent = "Ajouter une photo";

  imageList(window, title, projectsArray, addWorks);
}

export function imageList(window, title, projectsArray, addWorks) {
  const imgBox = document.createElement("div");
  const supressBack = document.querySelectorAll(".back");

  title.textContent = "Galerie photo";

  supressBack.forEach((e) => {
    e.remove();
  });

  window.appendChild(imgBox);

  imgBox.classList.add("img-box");

  projectsArray.forEach((project) => {
    const work = document.createElement("div");
    const img = document.createElement("img");
    const trashCan = document.createElement("i");
    const deleteWork = document.createElement("button");
    deleteWork.dataset.id = project.id;
    work.classList.add("img-supress");
    img.classList.add("img-modal");
    deleteWork.classList.add("supress");
    trashCan.classList.add("fa-solid", "fa-trash-can", "trash");
    deleteWork.classList.add("delete-work");
    imgBox.appendChild(work);
    work.appendChild(img);
    work.appendChild(deleteWork);
    deleteWork.appendChild(trashCan);
    img.setAttribute("src", project.imageUrl);
  });

  addWorks.textContent = "Ajouter une photo";
  addWorks.classList.remove("form");
  addWorks.addEventListener("click", () => {
    modalForm(window, imgBox, title, addWorks);
  });

  deleteButtonFunction();
}
function modalClosin(overlay, window, page) {
  window.remove();
  overlay.remove();
  page.style.overflow = "auto";
}
