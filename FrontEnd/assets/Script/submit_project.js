export function submitProject(src, label, categorieId) {
  form.addEventListener("submit", (login) => {
    login.preventDefault();
    const image = src.value;
    const titre = label.value;
    const id = categorieId.value;
    fetch(`http://localhost:5678/api/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ image, titre, id }),
    })
      .then((response) => response.json())
      .then(
        (result) => localStorage.setItem("connexionToken", result.token),
        connexion(),
      )
      .catch((error) => console.error("Erreur :", error));
  });
}
