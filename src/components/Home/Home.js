import React from "react";
import { Link } from "react-router-dom";
import wild_west from "../../assets/wild_west.mp4";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <header className="fix">
        <video autoPlay loop muted className="vid-bg">
          <source src={wild_west} type="video/mp4" />
        </video>
        <div className="banner-text">
          <h1 className="bannerStars">----★★★★★★----</h1>
          <h1 className="bannerTitle"> MOST WANTED</h1>
          <h2 className="bannerSubtitle"> DEAD OR ALIVE </h2>
          <h1 className="bannerStars">-----------------</h1>

          <p className="bannerMessage">
            Help us find the Most Wanted Criminals. The Digital Sheriff assures
            your safety and rewards you!
          </p>

          <button className="btn">
            <span>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/wanted"
              >
                Find a suspect
              </Link>
            </span>
          </button>
          <button className="btn">
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/contact"
            >
              Report a suspect
            </Link>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Home;
