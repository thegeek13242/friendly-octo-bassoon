import React from "react";
import "./competitions.css";
import Card from "./card/card";

import competitionData from "./competitionData";

// import CarouselComponent from "../carousel/Carousel";

const Competitions = () => {
  return (
    <div className="competitions">
      
    <div className="header">
        <h1>Secure Certificate Management System</h1>
    </div>
    <div className="competition-container">
        {competitionData.map((competition) => {
          return <Card key={competition.id} {...competition}></Card>;
        })}
    </div>
    </div>

  );
};

export default Competitions;
