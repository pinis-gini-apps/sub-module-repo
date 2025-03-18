import { Link } from "react-router-dom";
import "./navbar.css";

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <h1 className="logo">Sub Module App</h1>
                <ul className="nav-links">
                    <li>
                        <Link to="/" className="nav-item">Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className="nav-item">About</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="nav-item">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
