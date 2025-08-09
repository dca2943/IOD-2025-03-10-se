import React from "react";
import { Link } from "react-router-dom";
import navCSS from "./Nav.module.css";

function Nav() {
  return (
    <div className={navCSS.Nav_wrapper}>
      <span className={navCSS.airplane}>✈️</span>

      <div className={navCSS.Nav_wrapper_logo}>
        <Link to="/">NEXT</Link>
      </div>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/join">Join Next</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/destinations">Destinations</Link>
        </li>
        <li>
          <Link to="/itineraries">Itineraries</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
      </ul>

      <div className={navCSS.nav_btns}>{/*  future action buttons */}</div>
    </div>
  );
}

export default Nav;
