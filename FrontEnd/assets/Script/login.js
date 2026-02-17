const form = document.getElementById("form");
form.addEventListener("submit", (login) => {
  login.preventDefault();
  const email = document.getElementById("mail").value;
  const password = document.getElementById("password").value;
  fetch(`http://localhost:5678/api/users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((response) => response.json())
    .then(
      (result) => localStorage.setItem("connexionToken", result.token),
      connexion(),
    )
    .catch((error) => console.error("Erreur :", error));
});

function connexion() {
  const token = localStorage.getItem("connexionToken");
  if (token) {
    window.location.href = "index.html";
  }
}
