import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import "./App.css";
import Destination from "./Components/Destinations/Destination";
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import Quotes from "./Components/Quote/Quote";
import DestinationDetails from "./Components/DestinationDestinationDetails/DestinationDetails";
import Itineraries from "./Components/Itineraries/Itineraries"; // Itineraries component

function App() {
  return (
    <Router>
      <div className="main">
        <Nav />
        <Header />
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <Destination />
                <Quotes />
              </>
            }
          />

          {/*  Destination Route */}
          <Route
            path="/destinations/:region"
            element={<DestinationDetails />}
          />

          {/*  Itineraries Route */}
          <Route path="/itineraries" element={<Itineraries />} />

          {/* Fallback for unmatched routes */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
