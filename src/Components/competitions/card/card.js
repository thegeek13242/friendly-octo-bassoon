import React from "react";
import "./card.css";

import Button from "../../button/Button";

const Card = (props) => {
  const { id, competitionImage, competitionTitle, competitionDeadline, competitionLink, rulebookPdf } = props;

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
            <a href={competitionLink} target="_blank" >
              <Button
                buttonSize="btn-register-size"
                buttonStyle="btn-normal"
                children="Register"
              ></Button>
            </a>
          </div>
          <div className="deadline">
            Registration Ends On <br />
            <p>{competitionDeadline}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
