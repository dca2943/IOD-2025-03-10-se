// Import React hooks and CSS styles
import { useEffect, useState } from "react";
import "./Itineraries.css";

//  Itineraries component
export default function Itineraries() {
  // State to store all destinations fetched from the backend
  const [destinations, setDestinations] = useState([]);

  // State for the active filters: "all" or "budget"
  const [filter, setFilter] = useState("all");

  // State for the search input (city or country)
  const [searchTerm, setSearchTerm] = useState("");

  // useEffect runs when the component mounts to fetch data from the backend
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/itinerary`) // .env variable
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched itineraries:", data);
        setDestinations(data); // Stores the data in state
      })
      .catch((err) => console.error("Error fetching itineraries:", err));
  }, []);

  // Filtered destinations
  const filteredDestinations = destinations
    .filter((dest) => {
      //  Budget filter: hotel cost ≤ 100
      if (filter === "budget") return dest.costs.hotel <= 100;

      return true;
    })
    .filter((dest) => {
      // SEARCH filter based on city or country
      const term = searchTerm.toLowerCase();
      return (
        dest.city.toLowerCase().includes(term) ||
        dest.country.toLowerCase().includes(term)
      );
    });

  // Render the component UI
  return (
    <div className="itinerary-wrapper">
      <h2>Itineraries</h2>

      {/* Search-bar-input */}
      <input
        type="text"
        placeholder="Search by city or country..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      {/* Filter buttons */}
      <div className="filter-buttons">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("budget")}>Budget-Friendly</button>
      </div>

      {/* Itinerary display grid */}
      <div className="itinerary-grid">
        {filteredDestinations.map((dest) => (
          <div className="itinerary-card" key={dest._id}>
            <h3>
              {dest.city}, {dest.country}
            </h3>
            <p>
              <strong>Landmarks:</strong> {dest.landmarks.join(", ")}
            </p>
            <p>
              <strong>Meal:</strong> ${dest.costs.meal}
            </p>
            <p>
              <strong>Hotel:</strong> ${dest.costs.hotel}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
