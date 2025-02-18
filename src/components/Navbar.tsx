import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>Candidate Search</h2>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/saved">Saved Candidates</Link>
      </div>
    </nav>
  );
};

export default Navbar;
