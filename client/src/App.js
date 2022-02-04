import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Components/navbar/Navbar";


// importing pages
import Home from "./Pages/home/Home";
import Guest from "./Pages/guest/guest";
import Admin from "./Pages/admin/admin";
import Student from "./Pages/student/student";
import Footer from "./Components/footer/Footer";
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    Aos.init({ duration: 100 });
  }, []);

  const [user,setUser] = useState(null);
  useEffect(()=>{
    const getUser = async ()=>{
      fetch("http://localhost:5000/auth/success",{
        method: "GET",
        credentials: "include",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      }).then((response)=>{
        if(response.status === 200) return response.json();
        throw new Error("Authentication Failed!")
      }).then(resObject=>{
        setUser(resObject.user)
      }).catch(err=>{
        console.log(err);
      });
    };
    getUser();
  },[]);

  console.log(user)


  function isLogged(user){
    const lg = null;
    if(user === null){
      return lg;
    };
    return true
  };

  console.log(isLogged(user))

  return (
    <>
      <BrowserRouter>
        <div className="app-container">
          <Navbar user={user}/>
          <div className="main-content">
            <Routes user={user}>
              <Route path="/" element={<Home />} />
              <Route path="/guest" element={true ? <Guest /> : <Navigate to="/"/>} />
              <Route path="/admin" element={true ? <Admin /> : <Navigate to="/"/>} />
              <Route path="/student" element={true ? <Student /> : <Navigate to="/"/>} />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
