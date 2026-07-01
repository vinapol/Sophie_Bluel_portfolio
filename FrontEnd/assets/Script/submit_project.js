import { refreshProjects } from "./refresh_project.js";

export async function submitProject(formData) {
    const token = localStorage.getItem("connexionToken");
    console.log(token)
    try {
        const response = await fetch("http://localhost:5678/api/works", {
            method: "POST",
            headers: {
                "Authorization": `bearer ${token}`
            },
            body: formData
        });

        if (response.ok) {
            const result = await response.json();
            alert("Projet ajouté avec succès !");
            await refreshProjects();
        } else {
            alert("Erreur lors de l'envoi");
        }
    } catch (error) {
        console.error("Erreur API:", error);
    }
}
