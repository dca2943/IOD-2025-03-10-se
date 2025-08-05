import React from "react";
import { Link } from "react-router-dom";
import destinationCSS from "./../Destinations/Destination.module.css";

import destination01 from "./../../assets/Homepage/destination01.jpg";
import destination03 from "./../../assets/Homepage/destination03.jpg";
import destination04 from "./../../assets/Homepage/destination04.jpg";

const destinations = [
  { name: "Europe", image: destination01 },
  { name: "North America", image: destination03 },
  { name: "Latin America", image: destination04 },
];

function Destination() {
  return (
    <div className={`${destinationCSS.Destination_Wrapper} section`}>
      <h2>Destinations</h2>

      <div className={destinationCSS.DestinationCards}>
        {destinations.map(({ name, image }) => {
          const routeName = name.toLowerCase().replace(/\s+/g, "-");

          return (
            <div className={destinationCSS.DestinationCard} key={name}>
              <img src={image} alt={`${name} destination`} />
              <div className={destinationCSS.DestinationDetails}>
                <h3>{name}</h3>
                <div className={destinationCSS.btns}>
                  <Link to={`/destinations/${routeName}`}>
                    All Destinations
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Destination;
