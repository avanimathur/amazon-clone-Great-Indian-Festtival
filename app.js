const right = document.querySelector(".right-btn");
right.addEventListener("click", function (event) {
  const conent = document.querySelector(".slide-carousel");
  conent.scrollLeft += 1100;
  event.preventDefault();
});

const left = document.querySelector(".left-btn");
left.addEventListener("click", function (event) {
  const conent = document.querySelector(".slide-carousel");
  conent.scrollLeft -= 1100;
  event.preventDefault();
});
document.addEventListener("DOMContentLoaded", function () {
  const updateLocationButton = document.querySelector(".update-location");

  updateLocationButton.addEventListener("click", function (event) {
    getLocation();
  });
});
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}

function showPosition(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const apiKey = "yourAPIKey";
  const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.results && data.results.length > 0) {
        const components = data.results[0].components;
        const city =
          components.city ||
          components.town ||
          components.village ||
          "Unknown City";
        document.querySelector(
          ".location-name"
        ).innerText = `Deliver to ${city}`;
      } else {
        console.error("No results found for the given coordinates.");
        alert("Unable to retrieve location details.");
      }
    })
    .catch((error) => {
      console.error("Error fetching location:", error);
      alert("Unable to retrieve location.");
    });
}

const toTopButton = document.querySelector(".backtotop");

toTopButton.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
