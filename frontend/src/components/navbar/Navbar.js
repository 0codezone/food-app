import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-parent w-full p-2 bg-gray-100 fixed">
      <nav className="navbar flex justify-center">
        <div className="nav-links">
          <ul className="flex">
            <Link to="/register" className="link">
              <li>Register</li>
            </Link>
            <Link to="/login" className="link">
              <li>Login</li>
            </Link>
            <Link to="/" className="link">
              <li>Home</li>
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
