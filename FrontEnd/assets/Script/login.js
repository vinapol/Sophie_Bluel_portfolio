const form = document.getElementById("form");
form.addEventListener("submit", (login) => {
  login.preventDefault();
  const email = document.getElementById("mail").value;
  const password = document.getElementById("password").value;

  const errorMessage = document.getElementById("error-message");
  if (errorMessage) {
    errorMessage.textContent = "";
  }

  fetch(`http://localhost:5678/api/users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.status === 401 || response.status === 404
          ? "Identifiant ou mot de passe incorrect."
          : "Erreur de connexion au serveur."
        );
      }
      return response.json();
    })
    .then(
      (result) => {
        localStorage.setItem("connexionToken", result.token);
        connexion();
      }
    )
    .catch((error) => {
      console.error("Erreur :", error);
      if (errorMessage) {
        if (error.message === "Identifiant ou mot de passe incorrect.") {
          errorMessage.textContent = error.message;
        } else {
          errorMessage.textContent = "Erreur de connexion au serveur.";
        }
      }
    });
});

function connexion() {
  const token = localStorage.getItem("connexionToken");
  if (token) {
    window.location.href = "index.html";
    console.log(token)
  }
}
