import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ marginBottom: "1rem" }}>
      <Link to="/" style={{ marginRight: "1rem" }}>
        Home
      </Link>
      <Link to="/login" style={{ marginRight: "1rem" }}>
        Login
      </Link>
      <Link to="/bitcoin">Bitcoin Rates</Link>
    </nav>
  );
}

export default Navbar;
