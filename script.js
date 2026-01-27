const toggleButton = document.getElementById("theme-toggle");
const body = document.body;

// verifica se o usuário já escolheu tema antes
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
  body.classList.add("light");
  toggleButton.textContent = "☀️";
}

// clique no botão
toggleButton.addEventListener("click", () => {
  body.classList.toggle("light");

  if (body.classList.contains("light")) {
    localStorage.setItem("theme", "light");
    toggleButton.textContent = "☀️";
  } else {
    localStorage.setItem("theme", "dark");
    toggleButton.textContent = "🌙";
  }
});
