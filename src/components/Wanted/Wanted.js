import React from "react";
import { withRouter } from "react-router-dom";
import "./wanted.css";

function Wanted(props) {
  const { title, sex, height, weight, age, nationality, reward } = props;

  return (
    <div className="cardContainer">
      <div className="border">
        <h3 className="name">{title}</h3>

        <div className="image-container">
          <img className="image" src={props.images[0].original} alt="" />
        </div>

        <div className="text-info">
          <h4>
            <em> gender: {""}</em> {sex}
          </h4>
          <h4>
            <em> age: ≈ {""}</em> {age}
          </h4>
          <h4>
            <em> height: ≈ {""}</em> {height}
          </h4>
          <h4>
            <em> weight: ≈ {""}</em> {weight}
          </h4>
          <h4>
            <em> nacionality: {""}</em> {nationality}
          </h4>
          <h5>
            <em> Reward: {""}</em> {reward}
          </h5>
        </div>
        <button
          className="buttonMoreInfo"
          onClick={() => props.history.push(`/wanted/${props.uid}`)}
          type="button"
        >
          More Info
        </button>
      </div>
    </div>
  );
}

export default withRouter(Wanted);
