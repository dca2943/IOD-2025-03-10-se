import { useState } from "react";
import { Welcome } from "./welcome";
import Greeting from "./Greeting"; // Import Greeting Component
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      {/* Using Greeting Component */}
      <Greeting name="Dayana"> - Hope you're having a great day!</Greeting>
      <Greeting> - Welcome to this app!</Greeting>
      {/* Using Welcome Component */}
      <Welcome name="Dayana">
        <p>This is a child of Welcome</p>
      </Welcome>
    </>
  );
}

export default App;
