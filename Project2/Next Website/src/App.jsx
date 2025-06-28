import "./App.css";
import Destination from "./Components/Destinations/Destination";
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import Quotes from "./Components/Quote/Quote";

function App() {
  return (
    <div className="main">
      <Nav />
      <Header />
      <Destination />
      <Quotes />
    </div>
  );
}

export default App;
