import { deleteWork } from "./project_delete.js";

export function deleteButtonFunction() {
  const trashIcons = document.querySelectorAll(".delete-work");

  trashIcons.forEach((trash) => {
    trash.addEventListener("click", (e) => {
      e.preventDefault();

      const workId = trash.dataset.id; 
      
      console.log("ID à supprimer :", workId);

      if (!workId) {
        console.error("ID introuvable sur cet élément");
        return;
      }

      if (confirm("Voulez-vous vraiment supprimer ce projet ?")) {
        deleteWork(workId);
      }
    });
  });
}