// import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from './auth/signup';
import Login from './auth/login';
import Home from "./Dashboard/home";
import MobileDetailsPage from "./MobilesDetails/MobileDetails";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/signup" element={<Signup/>} />
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home/>} />
          <Route path="/mobileDetails" element={<MobileDetailsPage/>} />
        </Routes>
      </Router>
  );
}

export default App;
