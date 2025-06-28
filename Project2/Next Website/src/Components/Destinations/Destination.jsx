import React from "react";
import destinationCSS from "./../Destinations/Destination.module.css";

import destination01 from "./../../assets/destination01.jpg";
import destination02 from "./../../assets/destination02.jpg";
import destination03 from "./../../assets/destination03.jpg";
import destination04 from "./../../assets/destination04.jpg";

function Destination() {
  return (
    <div className={`${destinationCSS.Destination_Wrapper} section`}>
      <h2>Destinations</h2>

      {/* Grid container for all destination cards */}
      <div className={destinationCSS.DestinationCards}>
        {/* === Europe Card === */}
        <div className={destinationCSS.DestinationCard}>
          <img src={destination01} alt="Europe destination" />
          <div className={destinationCSS.DestinationDetails}>
            <h3>Europe</h3>
            <div className={destinationCSS.btns}>
              <a href="#">All Destinations</a>
            </div>
          </div>
        </div>

        {/* === Asia Card === */}
        <div className={destinationCSS.DestinationCard}>
          <img src={destination02} alt="Asia destination" />
          <div className={destinationCSS.DestinationDetails}>
            <h3>Asia</h3>
            <div className={destinationCSS.btns}>
              <a href="#">All Destinations</a>
            </div>
          </div>
        </div>

        {/* === North America Card === */}
        <div className={destinationCSS.DestinationCard}>
          <img src={destination03} alt="North America destination" />
          <div className={destinationCSS.DestinationDetails}>
            <h3>North America</h3>
            <div className={destinationCSS.btns}>
              <a href="#">All Destinations</a>
            </div>
          </div>
        </div>

        {/* === Latin America Card === */}
        <div className={destinationCSS.DestinationCard}>
          <img src={destination04} alt="Latin America destination" />
          <div className={destinationCSS.DestinationDetails}>
            <h3>Latin America</h3>
            <div className={destinationCSS.btns}>
              <a href="#">All Destinations</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Destination; // Exporting Destination component for use in the main app
