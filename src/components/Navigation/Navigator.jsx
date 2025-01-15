import { Link } from "react-router";

const Navigator = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">
        Home
      </Link>
      <Link to="/Products" className="nav-link">
        Products
      </Link>
    </nav>
  );
};

export default Navigator;
