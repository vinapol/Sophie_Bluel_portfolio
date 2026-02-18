export async function deleteWork(workId) {
    const token = localStorage.getItem("connexionToken");

    const response = await fetch(`http://localhost:5678/api/works/${workId}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.getElementById(`work-${workId}`).remove();
    } else {
        alert("Erreur lors de la suppression.");
    }
}