import { Link } from "react-router";
import ModalSession from "../Modals/ModalSession";

const Navigator = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">
        Home
      </Link>
      <Link to="/Products" className="nav-link">
        Products
      </Link>
      <Link to="/login" className="nav-link">
        Login
      </Link>
      <ModalSession />
    </nav>
  );
};

export default Navigator;
