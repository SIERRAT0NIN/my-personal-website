// To add element and appendChild to HTML
const p = document.createElement("p");
p.textContent = "FlatIron School";

document.querySelector("body").appendChild(p);

const body = document.querySelector("body");

// Pink Mode
// Function=>add class to body to toggle "pink-mode" on and off.
function togglePinkMode() {
  body.classList.toggle("pink-mode");
  // saving to local storage. I do not understand yet.
  const pinkModeEnabled = body.classList.contains("pink-mode");
  localStorage.setItem("pinkMode", pinkModeEnabled);
}
const pinkModePref = localStorage.getItem("pinkMode");
if (pinkModePref !== null) {
  body.classList.toggle("pink-mode", pinkModePref === "true");
}
// adding event listener to Pink Mode button, to toggle class "pink-mode"
const pinkModeToggle = document.getElementById("pinkModeToggle");
pinkModeToggle.addEventListener("click", togglePinkMode);

// I will need a apiKey and apiUrl for APIs.
const apiKey = "b6ba3ed28ec0a2ed6183145e16564d56";
const city = "San Francisco"; // Replace with the name of your desired city
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
// Fetch api data from apiUrl
fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    const weatherData = document.getElementById("weatherData");
    // innerHTML?
    weatherData.innerHTML = `
          <p>City: ${data.name}</p>
          <p>Temperature: ${data.main.temp}°C</p>
          <p>Weather: ${data.weather[0].description}</p>
        `;
  })
  .catch((error) => {
    console.error("Error fetching weather data:", error);
  });

//   $(document).ready(function() {
//     $("#toggleButton").click(function() {
//         $("#toggleText").toggle();
//     });
// });
// $("input").keypress(function(event){
//   $("h1).text(event.key);
// })

$("h1").on("mouseover", function () {
  $("h1").css("color", " purple");
});
