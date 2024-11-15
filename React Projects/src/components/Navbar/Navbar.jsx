import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "./Navbar.css"; // Import custom CSS for styling

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">React Projects</Link>
      </div>
      <ul className={`navbar-links ${isOpen ? "open" : ""}`}>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/accordion">Accordion</Link>
        </li>
        <li>
          <Link to="/randomcolor">Random Color</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
