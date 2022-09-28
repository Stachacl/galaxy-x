import React from "react";
import "./NavbarStyles.css";
import { Link } from "react-router-dom";
import {FaBars} from "react-icons/fa";


const Navbar = () => {
  return (
    <div className="header">
      <Link to="/">
        <h1>GALAXY X</h1>
      </Link>
      <ul className="nav-menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/pricing">Pricing</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="hamburger">
        <FaBars />
      </div>
    </div>
  );
};

export default Navbar;
