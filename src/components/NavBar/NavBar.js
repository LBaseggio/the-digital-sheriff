import React from "react";
import { Link } from "react-router-dom";
import sheriff from "../../assets/sheriff.png";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="navbar-container">
      <Link to="/" style={{ textDecoration: "none", color: "black" }}>
        <img src={sheriff} alt=" logo" className="logo" />
      </Link>
      <ul className="main-nav">
        <li>
          <Link
            className="companyName"
            to="/"
            style={{ textDecoration: "none", color: "black" }}
          >
            The Digital Sheriff
          </Link>
        </li>
        <li>
          <Link
            className="search"
            to="/wanted"
            style={{ textDecoration: "none", color: "black" }}
          >
            Search
          </Link>
        </li>
        <li>
          <Link
            className="contact"
            to="/contact"
            style={{ textDecoration: "none", color: "black" }}
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default NavBar;
