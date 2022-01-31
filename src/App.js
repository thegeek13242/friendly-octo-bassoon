import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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

  return (
    <>
      <Router>
        <div className="app-container">
          <Navbar></Navbar>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/guest">
              <Guest />
            </Route>
            <Route exact path="/admin">
              <Admin />
            </Route>
            <Route exact path="/student">
              <Student />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    </>
  );
};

export default App;
