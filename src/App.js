import React from "react";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar/index";
import Login from "./components/Login/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Dashboard from "./components/Dashboard";
import Protected from "./components/Protected";

import bckimg from './assets/Images/bckimg.jpg';

function App() {
  const bodyBackground = {
    backgroundImage: `url(${bckimg})`,
    height: '100%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div style={bodyBackground}>
    <Router>
      <Navbar /><hr style={{ height: "4px", position: "relative", background: "red" }} />       
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Protected Cmp={Dashboard} />} />
        <Route path="/login" element={<Login />} />
        {
          localStorage.getItem("userToken") ?
            <>
              <Route path="/*" element={<Dashboard />} />
            </>
            :
            <>
              <Route path="/*" element={<Home />} />
            </>
        }
      </Routes>
    </Router>
    <Footer />
  </div>
  );
}

export default App;
