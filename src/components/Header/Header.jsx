import React, { useState } from "react";
import "./header.css";

function header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="header">
      <nav className={`navbar ${menuOpen ? "open" : ""}`}>
        <div className="logo">
          <img
            src="https://ik.imagekit.io/tcfp7i31d/logo_with_yp_black_urUeyjKwY.svg"
            alt="logo"
          />
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`nav-list ${menuOpen ? "open" : ""}`}>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default header;
