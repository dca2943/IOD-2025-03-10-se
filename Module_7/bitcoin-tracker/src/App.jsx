import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import Login from "./Login.jsx";
import BitcoinRates from "./BitcoinRates";
import Navbar from "./Navbar";
import Emoji from "./Emoji"; // optional if you want mood everywhere

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Emoji />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/bitcoin" element={<BitcoinRates />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
