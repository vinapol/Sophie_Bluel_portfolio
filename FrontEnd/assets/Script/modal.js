export function modalView() {
  const page = document.querySelector("body");
  const window = document.createElement("div");
  const overlay = document.createElement("aside");
  const imgBox = document.createElement("div");
  overlay.appendChild(window);
  page.appendChild(overlay);
  window.appendChild(imgBox);
  window.classList.add("modal-box");
  overlay.classList.add("modal-overlay");
  imgBox.classList.add("img-box");
  page.style.overflow = "hidden";

  modalContent(overlay, window, page, imgBox);

  overlay.addEventListener("click", () => {
    modalClosin(overlay, window, page);
  });

  window.addEventListener("click", (event) => {
    event.stopPropagation();
  });
}

function modalContent(overlay, window, page, imgBox) {
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

  projectsArray.forEach((project) => {
    const work = document.createElement("div");
    const img = document.createElement("img");
    const trashCan = document.createElement("i");
    const deleteWork = document.createElement("button");
    work.classList.add("img-supress");
    img.classList.add("img-modal");
    deleteWork.classList.add("supress");
    trashCan.classList.add("fa-solid", "fa-trash-can", "trash");
    imgBox.appendChild(work);
    work.appendChild(img);
    work.appendChild(deleteWork);
    deleteWork.appendChild(trashCan);
    img.setAttribute("src", project.imageUrl);
  });

  const line = document.createElement("div")
  line.classList.add("modal-line")
  window.appendChild(line)
  
  const addWorks = document.createElement("button")
  addWorks.classList.add("add-works-button")
  window.appendChild(addWorks)
  addWorks.textContent = "Ajouter une photo"

}

function modalClosin(overlay, window, page) {
  window.remove();
  overlay.remove();
  page.style.overflow = "auto";
}
