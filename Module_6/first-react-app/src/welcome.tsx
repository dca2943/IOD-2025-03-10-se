import React from "react";
type WelcomeProps = {
  name: string; // optional prop
  title?: string; // optional prop
  children?: React.ReactNode; // optional children prop
};
export const Welcome: React.FC<WelcomeProps> = ({
  // custom Welcome component
  name = "default name", // default value for name
  title,
  children,
}) => {
  if (!title) {
    // if title is not provided, return null
    return null;
  }

  return (
    <div className="welcome-container">
      {/* if the 'name' prop exists, render it on the screen */}
      <h3 style={{ color: "blue" }}>Welcome {name}!</h3>
      {title ? <p>{title}</p> : null}
      {/* if the 'title' prop exists, render it on the screen */}
      {/* if this component has children, render them here */}
      {children}
    </div>
  );
};
