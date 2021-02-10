import React from "react";
import axios from "axios";
import Wanted from "./Wanted";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import "./wantedList.css";

export default class WantedList extends React.Component {
  state = {
    wanted: [],
    suspectSeeDetails: true,
    filteredSuspectsAge: false,
    filteredSuspectsReward: false,
    filteredSuspectsHeight: false,
    filteredSuspectsNationality: false,
    searchSuspect: "",
  };

  componentDidMount() {
    this.getAPI();
  }

  getAPI = () => {
    axios
      .get(`https://run.mocky.io/v3/a87838e4-2218-47cb-bf94-5cbf4cd92e16`)
      .then((response) => {
        this.setState({ wanted: response.data.items });
        console.log(response.data);
      });
  };

  selectSuspect = (suspectId) => {
    const suspectSeeDetails = this.state.wanted.filter(
      (suspect) => suspect.uid !== suspectId
    );
    this.setState({ wanted: suspectSeeDetails });
  };

  filterReset = (event) => {
    this.setState({
      filteredSuspectsAge: false,
      filteredSuspectsReward: false,
      filteredSuspectsHeight: false,
      filteredSuspectsNationality: false,
    });
  };

  filteredSuspectsAge = (event) => {
    this.setState({ filteredSuspectsAge: !this.state.filteredSuspectsAge });
  };

  filteredSuspectsReward = (event) => {
    this.setState({
      filteredSuspectsReward: !this.state.filteredSuspectsReward,
    });
  };

  filteredSuspectsHeight = (event) => {
    this.setState({
      filteredSuspectsHeight: !this.state.filteredSuspectsHeight,
    });
  };

  filteredSuspectsNationality = (event) => {
    this.setState({
      filteredSuspectsNationality: !this.state.filteredSuspectsNationality,
    });
  };

  shuffleWantedList = (wantedList) => {
    let i, j, k;
    for (i = wantedList.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * i);
      k = wantedList[i];
      wantedList[i] = wantedList[j];
      wantedList[j] = k;
    }
    return wantedList;
  };

  searchSuspects = (event) => {
    this.setState({ searchSuspect: event.target.value.toUpperCase() });
  };

  render() {
    return (
      <div>
        <NavBar />
        <section className="pageContainer">
          <div className="buttonsFiltersContainer">
            <div className="searchBarContainer">
              <input
                className="searchBar"
                type="text"
                onChange={this.searchSuspects}
                placeholder="Search a suspect by name"
              />
            </div>
            <button onClick={this.filteredSuspectsReward}>
              {this.state.filteredSuspectsReward ? "ALL" : "HIGH REWARDS"}
            </button>

            <button onClick={this.filteredSuspectsNationality}>
              {this.state.filteredSuspectsNationality
                ? "AMERICAN"
                : "NON-AMERICAN"}
            </button>

            <button onClick={this.filteredSuspectsAge}>
              {this.state.filteredSuspectsAge
                ? "ALL AGES"
                : "YOUNGER THAN 30 YEARS"}
            </button>

            <button onClick={this.filteredSuspectsHeight}>
              {this.state.filteredSuspectsHeight
                ? "ALL HEIGHTS"
                : "SMALLER THAN 1,70m"}
            </button>
            <button onClick={this.filterReset}>RESET</button>
          </div>
          <div className="cardsGrid">
            {this.state.wanted.length &&
              this.shuffleWantedList(this.state.wanted)
                .filter((suspect) =>
                  this.state.searchSuspect !== ""
                    ? suspect.title.includes(this.state.searchSuspect)
                    : suspect
                )
                .filter((suspect) =>
                  this.state.filteredSuspectsAge ? suspect.age <= 30 : suspect
                )
                .filter((suspect) =>
                  this.state.filteredSuspectsReward
                    ? suspect.reward >= 10000
                    : suspect
                )
                .filter((suspect) =>
                  this.state.filteredSuspectsHeight
                    ? suspect.height <= 170
                    : suspect
                )
                .filter((suspect) =>
                  this.state.filteredSuspectsNationality
                    ? suspect.nationality === "Non-American"
                    : suspect
                )
                .map((wanted) => <Wanted {...wanted} key={wanted.uid} />)}
          </div>
          <Footer />
        </section>
      </div>
    );
  }
}
