const h2 = document.createElement("h2");
h2.textContent = "FlatIron School";

document.querySelector("body").appendChild(h2);

const body = document.querySelector("body");

function togglePinkMode() {
  body.classList.toggle("pink-mode");
  const pinkModeEnabled = body.classList.contains("pink-mode");
  localStorage.setItem("pinkMode", pinkModeEnabled);
}

const pinkModePref = localStorage.getItem("pinkMode");
if (pinkModePref !== null) {
  body.classList.toggle("pink-mode", pinkModePref === "true");
}

const pinkModeToggle = document.getElementById("pinkModeToggle");
pinkModeToggle.addEventListener("click", togglePinkMode);
