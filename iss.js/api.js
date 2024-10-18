const newInstance = new issApi();
const issLocationContainer = document.querySelector(".API");
const mapContainer = document.getElementById("map");

async function showLocation() {
  try {
    const location = await newInstance.issLocation();
    console.log(location);

    if (location) {
      const { latitude, longitude } = location;
      appendLocation(latitude, longitude);

      // Log latitude and longitude for debugging
      console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);

      // Update the Google Maps iframe with the new location
      updateMap(latitude, longitude);
    } else {
      console.log("Location data is missing!");
    }
  } catch (error) {
    console.log("Something is not right!", error);
  }

  function appendLocation(latitude, longitude) {
    const textLocation = document.createElement("p");
    textLocation.classList.add("Textlocation");
    textLocation.textContent = `The International Space Station is currently at Latitude: ${latitude} and Longitude: ${longitude}`;
    issLocationContainer.appendChild(textLocation);
  }

  //   function updateMap(latitude, longitude) {
  //     // const apiKey = "AIzaSyDDEZfWnwMRgSLR9DLXauychMn_MZ6_nZM";
  //     // const mapUrl = `https://www.google.com/maps/embed/v1/view?key=${apiKey}&center=${latitude},${longitude}&zoom=4`;
  //     const mapUrl = `https://www.google.com/maps/@${latitude},${longitude},15z?entry=ttu`;
  //     mapContainer.innerHTML = `<iframe src="${mapUrl}" width="100%" height="400px" frameborder="0" style="border:0" allowfullscreen></iframe>`;
  //   }
}
showLocation();
