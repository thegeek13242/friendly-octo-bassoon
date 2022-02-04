import React, { useEffect } from "react";
import "./Home.css";
import AppUsers from "../../Components/AppUsers/appusers";
import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <div className="home-container">
      <div data-aos-duration="800" data-aos="fade-in">
        <AppUsers></AppUsers>
      </div>
    </div>
  );
};

export default Home;
