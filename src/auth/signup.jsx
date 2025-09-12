import React, { useState } from "react";
import "./signup.css";
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import app from "../firebase";

const auth = getAuth(app);
const database = getDatabase(app);

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    password: "",
    gender: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      const user = userCredential.user;

      
      await set(ref(database, "users/" + user.uid), {
        name: formData.name,
        mobile: formData.mobile,
        email: formData.email,
        gender: formData.gender,
        uid: user.uid,
        password:formData?.password
      });

      alert("Account created successfully!");
      navigate("/"); 
    } catch (error) {
      console.error("Signup error:", error.message);
      alert(error.message);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <label>Name*</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            placeholder="Enter your name"
            onChange={handleChange}
            required
          />

          <label>Mobile Number*</label>
          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            placeholder="Enter mobile number"
            pattern="[0-9]{10}"  
            onChange={handleChange}
            required
          />

          <label>Email Address*</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            placeholder="Enter email address"
            onChange={handleChange}
            required
          />

          <label>Password*</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            placeholder="Enter password"
            onChange={handleChange}
            required
          />

          <label>Gender*</label>
          <div className="gender-options">
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                onChange={handleChange}
                checked={formData.gender === "male"}
                required
              />{" "}
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                onChange={handleChange}
                checked={formData.gender === "female"}
                required
              />{" "}
              Female
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="other"
                onChange={handleChange}
                checked={formData.gender === "other"}
                required
              />{" "}
              Other
            </label>
          </div>

          <button type="submit" className="signup-btn">
            Create Account
          </button>
        </form>
        <p className="login-text">
          Already have an account?{" "}
          <span className="login-link" onClick={() => navigate("/")}>
            Login here
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
