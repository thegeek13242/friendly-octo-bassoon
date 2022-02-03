import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Components/navbar/Navbar";

// importing pages
import Home from "./Pages/home/Home";
import Guest from "./Pages/guest/guest";
import Admin from "./Pages/admin/admin";
import Student from "./Pages/student/student";
import Footer from "./Components/footer/Footer";
import { Spring, animated } from "react-spring";
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    Aos.init({ duration: 100 });
  }, []);


  const user = false;
  return (
    <>
      <BrowserRouter>
        <div className="app-container">
          <Navbar></Navbar>
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/guest" element={<Guest />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/student" element={<Student />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
