import React, { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase";
import { getDatabase, ref, get } from "firebase/database";

const auth = getAuth(app);

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCred = await signInWithEmailAndPassword(auth, email, password);
      console.log("SIGNIN COMPLETE", userCred.user);
      const db = getDatabase();
      const snapshot = await get(ref(db, "users/" + userCred.user.uid));
      console.log("GOT Data from DB", snapshot);
      if (snapshot.exists()) {
        const userData = snapshot.val();
        console.log("User Details:", userData);

        // ✅ Optionally store in state or localStorage
        localStorage.setItem("user", JSON.stringify(userData));

        alert(`Welcome ${userData.name}!`);
        navigate("/Home");
      }
      // alert("Login successful!");
      // navigate("/Home");
    } catch (error) {
      console.error("Login error:", error.message);
      alert("Login failed: " + error.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="form-section">
          <h1>Login</h1>
          <p className="login-content">
            Enter Your Email Address And Password To Access Otrixweb Account
          </p>
          <form onSubmit={handleLogin}>
            <label className="email">Email Address*</label>
            <input
              type="email"
              placeholder="Enter Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <div className="password-row">
              <label>Password*</label>
              <span className="forgot">Forgot Password?</span>
            </div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button type="submit" className="login-btn">
              Login Now
            </button>
          </form>
          <p className="signup-text">
            If You Don’t Have An Account Please,{" "}
            <span className="signup-link" onClick={() => navigate("/signup")}>
              Sign Up Now
            </span>
          </p>
        </div>
        <div className="image-section">
          <img
            src="https://img.freepik.com/free-photo/elegant-smiling-woman-glasses-striped-shirt-using-laptop-computer-while-siting-table-kitchen_171337-13030.jpg?semt=ais_hybrid&w=740"
            alt="Login Visual"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
