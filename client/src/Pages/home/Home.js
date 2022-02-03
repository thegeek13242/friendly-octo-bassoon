import React, { useEffect } from "react";
import "./Home.css";
import Competitions from "../../Components/competitions/competitions";
import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <div className="home-container">
      <div data-aos-duration="800" data-aos="fade-in">
        <Competitions></Competitions>
      </div>
    </div>
  );
};

export default Home;
