import React from "react";
import "./card.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";

import Button from "../../button/Button";

const Card = (props) => {
  const { id, competitionImage, competitionTitle, competitionDeadline, competitionLink } = props;

  return (
    <div className="home-competition-card">
      <div className="image">
        <img src={competitionImage} alt={competitionImage} />
      </div>
      <div className="content">
        <div className="heading">
          <h2>{competitionTitle}</h2>
        </div>
        <div className="button-deadline">
          <div className="button">
            <Link to={competitionLink}>
              <Button
                buttonSize="btn-register-size"
                buttonStyle="btn-hero"
                children="Login"
              ></Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
