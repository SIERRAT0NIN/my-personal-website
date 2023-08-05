const p = document.createElement("p");
p.textContent = "FlatIron School";

document.querySelector("body").appendChild(p);

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

// I will need a apiKey and apiUrl for APIs.
const apiKey = "b6ba3ed28ec0a2ed6183145e16564d56";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?q=san francisco&appid=" +
  apiKey;
// Fetch
fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    const weatherData = document.getElementById("weatherData");
    weatherData.innerHTML = `
          <p>City: ${data.name}</p>
          <p>Temperature: ${data.main.temp}°F</p>
          <p>Weather: ${data.weather[0].description}</p>
        `;
  })
  .catch((error) => {
    console.error("Error fetching weather data:", error);
  });
