import React from "react";
import "./appusers.css";
import Card from "./card/card";
import appusersData from "./appusersData"

// import CarouselComponent from "../carousel/Carousel";

const AppUsers = () => {
  return (
    <div className="competitions">
      <div className="header">
        <h1>Secure Certificate Management System</h1>
      </div>
      <div className="competition-container">
        {appusersData.map((appusers) => {
          return <Card key={appusers.id} {...appusers}></Card>;
        })}
      </div>
    </div>
  );
};

export default AppUsers;
