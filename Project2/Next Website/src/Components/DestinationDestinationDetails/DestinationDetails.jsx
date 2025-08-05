import React from "react";
import { useParams, Link } from "react-router-dom";
import destinationdetailsCSS from "./DestinationDetails.module.css";

// North America images
import nyc from "./../../assets/Northamerica/destination09.jpg";
import washington from "./../../assets/Northamerica/destination10.jpg";
import NF from "./../../assets/Northamerica/Destination20.jpg";
// Latin America images
import cancun from "./../../assets/latinamerica/destination12.jpg";
import rio from "./../../assets/latinamerica/destination13.jpg";
import buenosaires from "./../../assets/latinamerica/destination14.jpg";

// Europe images
import london from "./../../assets/Europe/destination06.jpg";
import paris from "./../../assets/Europe/destination07.jpg";
import barcelona from "./../../assets/Europe/destination08.jpg";

const regionDestinations = {
  "north-america": [
    { name: "New York City, USA", image: nyc },
    { name: "Washington, D.C., USA", image: washington },
    { name: "Niagara Falls, Canada", image: NF },
  ],
  "latin-america": [
    { name: "Cancún, Mexico", image: cancun },
    { name: "Rio de Janeiro, Brazil", image: rio },
    { name: "Buenos Aires, Argentina", image: buenosaires },
  ],
  europe: [
    { name: "London, United Kingdom", image: london },
    { name: "Paris, France", image: paris },
    { name: "Barcelona, Spain", image: barcelona },
  ],
};

function DestinationDetails() {
  const { region } = useParams();
  const destinations = regionDestinations[region] || [];

  return (
    <div className={`${destinationdetailsCSS.Destination_Wrapper} section`}>
      <h2>{region.replace("-", " ").toUpperCase()} Destinations</h2>
      <div className={destinationdetailsCSS.DestinationCards}>
        {destinations.map(({ name, image }) => (
          <div className={destinationdetailsCSS.DestinationCard} key={name}>
            <img src={image} alt={name} />
            <div className={destinationdetailsCSS.DestinationDetails}>
              <h3>{name}</h3>
              <div className={destinationdetailsCSS.btns}>
                <Link to="/">Back Home</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DestinationDetails;
