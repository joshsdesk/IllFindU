import { Link } from "react-router-dom";
import "../styles/App.css";

const NotFound = () => {
  return (
    <div className="container">
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you are looking for does not exist.</p>
      <Link to="/" className="home-link">Go Back to Home</Link>
    </div>
  );
};

export default NotFound;
