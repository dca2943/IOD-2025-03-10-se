// JavaScript code for itinerary management
document.addEventListener("DOMContentLoaded", () => {
  // Add event listener to the button
  const btn = document.getElementById("get-itinerary-btn");
  // Ensure the button exists before adding the event listener
  if (btn) btn.addEventListener("click", getItinerary);
  // Ensure the randomize button exists before adding the event listener

  // Load saved itineraries from local storage
  const savedItineraries =
    JSON.parse(localStorage.getItem("savedItineraries")) || [];
  // Ensure the saved itineraries display container exists
  if (savedItineraries.length > 0) displaySavedItineraries(savedItineraries);
  // Ensure the randomize button exists before adding the event listener
});

// Fetch itineraries from JSON file and filter based on user input
async function getItinerary() {
  // Clear previous results
  try {
    const response = await fetch("itineraries.json");
    if (!response.ok) throw new Error(`Error: ${response.status}`);
    // Check if the response is valid JSON

    const itineraries = await response.json();
    console.log("Fetched itineraries:", itineraries);
    // Check if the itineraries is an array
    if (!Array.isArray(itineraries)) throw new Error("Invalid JSON format");
    // Check if the itineraries array is empty

    // Get user selections
    const selectedDestination = document
      .getElementById("destination")
      .value.trim()
      .toLowerCase();
    const selectedMonth = document
      .getElementById("travelmonth")
      .value.split("-")[1]; // Extracts the numeric month
    const selectedTravelers = parseInt(
      document.getElementById("travelers").value,
      10
    );

    // Validate user selections
    console.log("User Selection:", {
      destination: selectedDestination,
      month: selectedMonth,
      travelers: selectedTravelers,
    }); // Log user selections

    // Filter itineraries based on user selections
    const filteredItineraries = itineraries.filter(
      (itinerary) =>
        (!selectedDestination ||
          itinerary.destination
            .toLowerCase()
            .startsWith(selectedDestination)) &&
        (!selectedMonth || itinerary.travelMonth === selectedMonth) &&
        (!selectedTravelers || itinerary.travelers >= selectedTravelers) // Matches exact or more travelers
    );

    console.log("Filtered Results:", filteredItineraries);
    displayItineraries(filteredItineraries);
  } catch (error) {
    console.error("API request failed:", error);
    alert("Error fetching itinerary. Please try again later.");
  }
} // Fetch itineraries from JSON file and filter based on user input

function displayItineraries(itineraries) {
  // Display filtered itineraries
  const displayContainer = document.getElementById("itinerary-display");
  displayContainer.innerHTML = "";

  if (itineraries.length === 0) {
    displayContainer.innerHTML = "<p>No matching itineraries found.</p>";
    return;
  }

  itineraries.forEach((itinerary) => {
    const item = document.createElement("div");
    item.innerHTML = `<h3>${itinerary.destination}</h3>
                      <p><strong>Travel Month:</strong> ${
                        itinerary.travelMonth
                      }</p>
                      <p><strong>Number of Travelers:</strong> ${
                        itinerary.travelers
                      }</p>
                      <p><strong>Activities:</strong> ${itinerary.activities.join(
                        ", "
                      )}</p>
                      <p><strong>Accommodations:</strong> ${
                        itinerary.accommodations
                      }</p>
                      <p><strong>Transportation:</strong> ${itinerary.transportation.join(
                        ", "
                      )}</p>
                      <p><strong>Budget Estimate:</strong> ${
                        itinerary.budgetEstimate
                      }</p>
                      <button onclick='saveItinerary(${JSON.stringify(
                        itinerary
                      )})'>
                        Save Itinerary
                      </button>`;

    displayContainer.appendChild(item);
  });
} // Display filtered itineraries
// Save itinerary to local storage
function saveItinerary(itinerary) {
  let savedItineraries =
    JSON.parse(localStorage.getItem("savedItineraries")) || [];

  savedItineraries.push(itinerary); // Add the new itinerary to the saved lis
  localStorage.setItem("savedItineraries", JSON.stringify(savedItineraries)); // Save the updated list to local storage

  displaySavedItineraries(savedItineraries); // Display saved itineraries
  alert("Itinerary saved successfully!");
}

function displaySavedItineraries(itineraries) {
  const savedContainer = document.getElementById("saved-itinerary-display");
  savedContainer.innerHTML = "";

  itineraries.forEach((itinerary) => {
    const item = document.createElement("div");
    item.innerHTML = `<h3>${itinerary.destination}</h3> 
                      <p><strong>Travel Month:</strong> ${
                        itinerary.travelMonth
                      }</p> 
                      <p><strong>Number of Travelers:</strong> ${
                        itinerary.travelers
                      }</p>
                      <p><strong>Activities:</strong> ${itinerary.activities.join(
                        ", "
                      )}</p>
                      <p><strong>Accommodations:</strong> ${
                        itinerary.accommodations
                      }</p>
                      <p><strong>Transportation:</strong> ${itinerary.transportation.join(
                        ", "
                      )}</p>
                      <p><strong>Budget Estimate:</strong> ${
                        itinerary.budgetEstimate
                      }</p>`; // Display saved itinerary details

    savedContainer.appendChild(item);
  });
} // Save itinerary to local storage

// Random Destination Feature
document.getElementById("randomize-btn").addEventListener("click", function () {
  const destinations = ["Paris", "New York", "Rome", "London"];
  document.getElementById("destination").value =
    destinations[Math.floor(Math.random() * destinations.length)];
}); // Randomize destination input

//JavaScript (script.js) handles user interactions, such as clicking buttons and submitting the form.
// It fetches itinerary data from the itineraries.JSON file and displays it on the page.
// It also allows users to save itineraries to local storage and view saved itineraries.
// The random destination feature allows users to get a random destination suggestion.
// The code uses the Fetch API to retrieve data and localStorage to save user preferences.
// JS helps fetch the data, display itineraries, and saving them.
// The event listeners are set up to trigger these functions when the user interacts with the page.
// The use of JSON for data storage and retrieval makes it easy to manage and update itineraries.
// The code is intended to be run in a web browser environment, where it can interact with local storage.
// The script is loaded in the HTML file, and the functions are called based on user actions.
// The code is a good example of how to create a simple web application that interacts with users and stores data locally.
