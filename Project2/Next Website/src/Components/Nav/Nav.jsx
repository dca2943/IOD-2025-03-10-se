import React from "react";
import navCSS from "./Nav.module.css";

function Nav() {
  return (
    <div className={navCSS.Nav_wrapper}>
      {/* ✈️ Flying airplane */}
      <span className={navCSS.airplane}>✈️</span>

      <div className={navCSS.Nav_wrapper_logo}>
        <a href="#">NEXT</a>
      </div>

      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Join Next</a>
        </li>
        <li>
          <a href="#">Login</a>
        </li>
        <li>
          <a href="#">Destinations</a>
        </li>
        <li>
          <a href="#">Itineraries</a>
        </li>
        <li>
          <a href="#">About Us</a>
        </li>
      </ul>

      <div className={navCSS.nav_btns}>{/* For future action buttons */}</div>
    </div>
  );
}

export default Nav;
