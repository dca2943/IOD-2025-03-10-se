import React from "react";
import { Link } from "react-router-dom";
import destinationdetailsCSS from "./DestinationDetails.module.css";

import destination05 from "./../../assets/destination05.jpg";
import destination06 from "./../../assets/destination06.jpg";
import destination03 from "./../../assets/destination03.jpg";
import destination04 from "./../../assets/destination04.jpg";

function DestinationDetails() {
  return (
    <div className={`${destinationdetailsCSS.Destination_Wrapper} section`}>
      <h2>All Destinations</h2>

      <div className={destinationdetailsCSS.DestinationCards}>
        {/* === Lisbon, Portugal === */}
        <div className={destinationdetailsCSS.DestinationCard}>
          <img src={destination05} alt="Europe destination" />
          <div className={destinationdetailsCSS.DestinationDetails}>
            <h3>Lisbon, Portugal</h3>
            <div className={destinationdetailsCSS.btns}>
              <Link to="/">Back Home</Link>
            </div>
          </div>
        </div>

        {/* === London, United Kingdom === */}
        <div className={destinationdetailsCSS.DestinationCard}>
          <img src={destination06} alt="Asia destination" />
          <div className={destinationdetailsCSS.DestinationDetails}>
            <h3>London, United Kingdom</h3>
            <div className={destinationdetailsCSS.btns}>
              <Link to="/">Back Home</Link>
            </div>
          </div>
        </div>

        {/* === Paris, France. === */}
        <div className={destinationdetailsCSS.DestinationCard}>
          <img src={destination03} alt="North America destination" />
          <div className={destinationdetailsCSS.DestinationDetails}>
            <h3>Paris, France.</h3>
            <div className={destinationdetailsCSS.btns}>
              <Link to="/">Back Home</Link>
            </div>
          </div>
        </div>

        {/* === Barcelona, Spain === */}
        <div className={destinationdetailsCSS.DestinationCard}>
          <img src={destination04} alt="Latin America destination" />
          <div className={destinationdetailsCSS.DestinationDetails}>
            <h3>Barcelona, Spain</h3>
            <div className={destinationdetailsCSS.btns}>
              <Link to="/">Back Home</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DestinationDetails;
