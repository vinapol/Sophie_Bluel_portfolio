export async function submitProject(formData) {
    const token = localStorage.getItem("connexionToken");

    try {
        const response = await fetch("http://localhost:5678/api/works", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token}`
            },
            body: formData
        });

        if (response.ok) {
            const result = await response.json();
            alert("Projet ajouté avec succès !");
        } else {
            alert("Erreur lors de l'envoi");
        }
    } catch (error) {
        console.error("Erreur API:", error);
    }
}