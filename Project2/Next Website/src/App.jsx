import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Destination from "./Components/Destinations/Destination";
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import Quotes from "./Components/Quote/Quote";
import DestinationDetails from "./Components/DestinationDestinationDetails/DestinationDetails";

function App() {
  return (
    <Router>
      <div className="main">
        <Nav />
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Destination />
                <Quotes />
              </>
            }
          />
          {/* Dynamic destination route */}
          <Route
            path="/destinations/:region"
            element={<DestinationDetails />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
