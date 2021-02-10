import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import wood from "../../assets/wood.jpg";
import "./wantedDetails.css";

export default class WantedDetails extends React.Component {
  state = {
    suspect: {},
  };

  componentDidMount() {
    this.getAPI();
  }

  getAPI = () => {
    axios
      .get("https://run.mocky.io/v3/a87838e4-2218-47cb-bf94-5cbf4cd92e16")
      .then((response) => {
        const selectedSuspectId = this.props.match.params.uid;
        const suspect = response.data.items.filter(
          (suspect) => suspect.uid === selectedSuspectId
        );
        this.setState({ suspect: suspect[0] });
      });
  };

  render() {
    return (
      <div>
        <NavBar />
        <div className="container">
          <h1 className="heading">★ THE MOST WANTED ★</h1>
          <div className="card">
            <img src={wood} className="card-img" alt="" />
            <img
              src={
                this.state.suspect.images &&
                this.state.suspect.images[0].original
              }
              width="100%"
              className="profile-img"
              alt=""
            />
            <h1 className="suspectName">{this.state.suspect.title}</h1>
            <h2 className="reward">Reward of ${this.state.suspect.reward} </h2>
            <h4 className="suspectData"> Gender: {this.state.suspect.sex}</h4>
            <h4 className="suspectData">{this.state.suspect.age} years old</h4>
            <h4 className="suspectData">
              Nationality: {this.state.suspect.nationality}{" "}
            </h4>
            <h4 className="suspectData">
              Weight: {this.state.suspect.weight} pounds
            </h4>
            <h4 className="suspectData">
              Height: {this.state.suspect.height} cm
            </h4>
            <h4 className="suspectData">
              Search for: {this.state.suspect.subjects}
            </h4>
            <h4 className="suspectData">
              Commited Crimes: {this.state.suspect.crime_commited}
            </h4>
            <p className="suspectData">{this.state.suspect.description}</p>
            <button className="btn1">
              <Link
                style={{ textDecoration: "none", color: "#fefefe" }}
                to="/contact"
              >
                Report the Suspect
              </Link>
            </button>
            <button className="btn1">
              <Link
                style={{ textDecoration: "none", color: "#fefefe" }}
                to="/wanted"
              >
                Return to Search
              </Link>
            </button>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}
