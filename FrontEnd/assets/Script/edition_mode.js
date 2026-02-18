import { modalView } from "./modal.js";

export function editionMode() {
  var token = localStorage.getItem("connexionToken");
  if (token) {
    const header = document.querySelector(".header");
    const nav = document.querySelector(".navbar");
    const filter = document.querySelector(".filter-content");
    const gallery = document.querySelector(".gallery");
    const editable = document.createElement("div");
    const icon = document.createElement("i");
    const text = document.createElement("p");
    gallery.classList.add("editable");
    icon.classList.add("fa-solid", "fa-pen-to-square");
    nav.classList.add("edition");
    text.textContent = "Mode édition";
    header.appendChild(editable);
    editable.appendChild(text);
    editable.appendChild(icon);
    editable.classList.add("edition-bar");
    filter.remove();
  }
}

export function logout() {
  var token = localStorage.getItem("connexionToken");
  if (token) {
    const loginLink = document.getElementById("login");
    loginLink.textContent = "logout";
    loginLink.addEventListener("click", (e) => {
      e.preventDefault();
      localStorage.removeItem("connexionToken");
      window.location.reload();
    });
  }
}

export function modificationButton() {
  var token = localStorage.getItem("connexionToken");
  if (token) {
    const portoflio = document.querySelector(".portfolio-head");
    const icon = document.createElement("i");
    const modification = document.createElement("a");
    const modificationButton = document.createElement("div");
    modificationButton.classList.add("modification-button");
    portoflio.appendChild(modificationButton);
    modificationButton.appendChild(icon);
    modificationButton.appendChild(modification);
    modification.textContent = "modifier";
    icon.classList.add("fa-solid", "fa-pen-to-square");
    modal();
  }
}

function modal() {
  const modification = document.querySelector(".modification-button");
  modification.addEventListener("click", () => {
    modalView();
  });
}
