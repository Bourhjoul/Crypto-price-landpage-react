import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav>
      <div className="Logo">
        <img id="logoimg" alt="Logo" src="https://i.imgur.com/ZmMOKcG.png" />
      </div>
      <div className="nav-links">
        <ul>
          <li>Alerts</li>
          <li>Pricing</li>
          <li>Privacy</li>
          <li>Contacts</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
