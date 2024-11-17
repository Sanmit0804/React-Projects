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
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/accordion">Accordion</Link>
        </li>
        <li>
          <Link to="/randomcolor">Random Color</Link>
        </li>
        <li>
          <Link to="/starrating">Star Rating</Link>
        </li>
        <li>
          <Link to="/imageslider">Image Slider</Link>
        </li>
        <li>
          <Link to="/treeview">Tree View</Link>
        </li>
        <li>
          <Link to="/qr">QR Generator</Link>
        </li>
        <li>
          <Link to="/theme">Theme Changer</Link>
        </li>
        <li>
          <Link to="/scroll">Scroll Indicator</Link>
        </li>
        <li>
          <Link to="/tabs">Tabs</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
