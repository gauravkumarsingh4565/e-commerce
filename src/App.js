// import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from './auth/signup';
import Login from './auth/login';
import Home from "./Dashboard/home";
import MobileDetailsPage from "./MobilesDetails/MobileDetails";
import ElectronicsDetails from "./ElectronicsDetails/electronicsDetails";
import ToyesDetails from "./Toyes/ToyesDetails";
import FoodDetails from "./Food/FoodDetails";
import FashionDetails from "./Fashion/FashionDetails";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/signup" element={<Signup/>} />
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home/>} />
          <Route path="/mobileDetails" element={<MobileDetailsPage/>} />
          <Route path="/electronics" element={<ElectronicsDetails/>} />
          <Route path="/toyes" element={<ToyesDetails/>} />
          <Route path="/foods" element={<FoodDetails/>} />
          <Route path="/fashion" element={<FashionDetails/>} />

        </Routes>
      </Router>
  );
}

export default App;
