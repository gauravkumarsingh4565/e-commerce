import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Signup from './auth/signup';
import Login from './auth/login';
import Home from "./Dashboard/home";
import MobileDetailsPage from "./MobilesDetails/MobileDetails";
import ElectronicsDetails from "./ElectronicsDetails/electronicsDetails";
import ToyesDetails from "./Toyes/ToyesDetails";
import FoodDetails from "./Food/FoodDetails";
import FashionDetails from "./Fashion/FashionDetails";

// NORMAL DESKTOP NAVBAR
import Navbar from "./Dashboard/navbar";

// MOBILE NAVBAR (NEW COMPONENT)

import React from "react";
import MobileHeader from "./MobileHeader/mobileHeader";

function AppWrapper() {
  const location = useLocation();
  const hideNavbarOn = ["/", "/signup"];

  // Ye mobile screen check karega
  const isMobile = window.innerWidth <= 768;

  return (
    <>
      {/* LOGIN & SIGNUP PAR NAVBAR HIDE HOGA */}
      {!hideNavbarOn.includes(location.pathname) && (
        <>
          {isMobile ? <MobileHeader /> : <Navbar />}
        </>
      )}

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/mobileDetails" element={<MobileDetailsPage />} />
        <Route path="/electronics" element={<ElectronicsDetails />} />
        <Route path="/toyes" element={<ToyesDetails />} />
        <Route path="/foods" element={<FoodDetails />} />
        <Route path="/fashion" element={<FashionDetails />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
