import { useState } from "react";
import { MoviesList } from "./MoviesList";
import { Welcome } from "./welcome"; // Import Welcome Component
import { BigCats } from "./BigCats"; // Import BigCats Component
import { ComplexComment } from "./ComplexComment"; // Import ComplexComment Component
import Greeting from "./Greeting"; // Import Greeting Component
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { MoodChanger } from "./MoodChanger";

const App = () => {
  const [count, setCount] = useState(0);
  const testVariable = "This is a test variable"; // test variable to check if the app is working

  const comment = {
    date: new Date(),
    text: "I hope you enjoy learning React!",
    author: {
      name: "Hello Kitty",
      avatarUrl: "https://placekitten.com/g/64/64",
    },
  };

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

      {/* Greeting Components */}
      <Greeting name="Dayana"> - Hope you're having a great day!</Greeting>
      <Greeting> - Welcome to this app!</Greeting>

      {/* Other Components */}
      <Welcome name="Dayana">
        <p>This is a child of Welcome</p>
      </Welcome>
      <ComplexComment
        date={comment.date}
        text={comment.text}
        author={comment.author}
      />
      <MoviesList />
      <BigCats />
      <MoodChanger />
    </>
  );
};

export default App;
