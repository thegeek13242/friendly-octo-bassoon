import React from "react";
import "./competitions.css";
import Card from "./card/card";

import competitionData from "./competitionData";

import CarouselComponent from "../carousel/Carousel";

const Competitions = () => {
  return (
    <div className="competition-container">
      <div className="header">
        <h1>Login Page</h1>
      </div>
      <CarouselComponent>
        {competitionData.map((competition) => {
          return <Card key={competition.id} {...competition}></Card>;
        })}
      </CarouselComponent>
    </div>
  );
};

export default Competitions;
