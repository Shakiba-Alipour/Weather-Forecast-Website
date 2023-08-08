//about popup management
document
  .getElementById("open-about-popup")
  .addEventListener("click", function () {
    document.getElementById("about-popup").style.display = "block";
  });

document.getElementById("close-popup").addEventListener("click", function () {
  document.getElementById("about-popup").style.display = "none";
});

//search management
document.getElementById("search-icon").addEventListener("click", function () {
  var city_name = document.getElementById("search-input").value;
  // Fetch weather data from the server
  var api_url =
    "https://127.0.0.1:5500/weather?city=" + encodeURIComponent(city_name);
  fetch(api_url)
    .then((response) => response.json())
    .then((data) => {
      alert("done");
      // change the location of the search bar
      const search_bar = document.getElementsByTagName("form");
      const header = document.getElementById("header");
      header.appendChild(search_bar);
      header.style.justifyContent = "space-between";
      search_bar.style.marginRight = 0;
      search_bar.style.background = "#fffcf2ff";
      // const weatherInfo = document.getElementById("weather-info");
      // const cityElement = document.getElementById("city");
      // const temperatureElement = document.getElementById("temperature");
      // const descriptionElement = document.getElementById("description");

      // cityElement.textContent = data.city;
      // temperatureElement.textContent = data.temperature + " °C";
      // descriptionElement.textContent = data.description;

      // weatherInfo.style.display = "block";
    })
    .catch((error) => {
      alert("Failed to fetch weather data: " + error.message);
    });
});