// Greeting.tsx
import React from "react";

interface GreetingProps {
  name?: string;
  children?: React.ReactNode;
}

const Greeting: React.FC<GreetingProps> = ({ name, children }) => {
  return (
    <h1>
      Hello {name ?? "World"} {children}
    </h1>
  );
};

export default Greeting;
// This component is a simple greeting component that takes an optional 'name' prop
