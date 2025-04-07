import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="custom-navbar">
      <div className="navbar-brand">Tancam</div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/request">Request</Link>
        <Link to="/accepted">Accepted</Link>
      </div>
    </nav>
  );
};

export default Navbar;
