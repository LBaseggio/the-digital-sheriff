import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="sp">
        <h2>Site Map</h2>
        <p>
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
        </p>
      </div>
      <div className="sp">
        <h2>About Us</h2>
        <p>
          The Digital Sheriff team is composed By Inês, João Leandro and Nem,
          and was created in 2020 to catch the outlaws
        </p>
      </div>
      <div className="sp">
        <h2>Contacts</h2>
        <p>
          ☎ 914 759 826 <br></br>✉ info@thedigitalsheriff.com <br></br>⚐ 4th
          Street, New York
        </p>
      </div>
    </footer>
  );
};

export default Footer;
