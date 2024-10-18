class issApi {
  constructor(api) {
    this.apiUrl = "http://api.open-notify.org/iss-now.json";
  }

  async issLocation() {
    try {
      const response = await axios.get(this.apiUrl);
      const data = response.data;

      if (data.message === "success") {
        const { latitude, longitude } = data.iss_position;
        console.log(
          `The International Space Station is currently at Latitude: ${latitude} and Longitude: ${longitude}`
        );
        return { latitude, longitude };
      }
    } catch (e) {
      console.error("Something is wrong:", e);
    }
  }
}

// //new instance

// // const newInstance = new issApi();
// // newInstance.issLocation();

// class issApi {
//   constructor() {
//     this.apiUrl = "https://api.open-notify.org/iss-now.json"; // Changed to HTTPS
//   }

//   async issLocation() {
//     try {
//       const response = await axios.get(this.apiUrl);
//       const data = response.data;

//       if (data.message === "success") {
//         const { latitude, longitude } = data.iss_position;
//         return { latitude, longitude };
//       } else {
//         console.error("Error fetching ISS location:", data.message);
//         return null; // Return null if there's an issue with the API response
//       }
//     } catch (error) {
//       console.error("Something went wrong:", error);
//       return null; // Return null if an error occurs
//     }
//   }
// }
