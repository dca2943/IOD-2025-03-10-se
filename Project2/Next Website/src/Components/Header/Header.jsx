import React from "react";
import headerCSS from "./../Header/Header.module.css";

function Header() {
  return (
    <div className={"${headerCSS.header_wrapper}section"}>
      <div className={headerCSS.imageContainer}>
        <h2>Where you can plan your NEXT vacation and explore the world!</h2>
      </div>
    </div>
  );
}

export default Header;
// This is the Header component,used to display a header section in the application.
