import React, { useState } from "react";
import "./Password.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Password = () => {
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  return (
    <div className="password-container">
      <label htmlFor="password" className="password-label">
        Enter Password
      </label>
      <div className="password-input-container">
        <input
          type={showPassword ? "text" : "password"}
          className="password-input"
          placeholder="Enter your password"
        />
        <button
          type="button"
          className="toggle-password-btn"
          onClick={() => setShowPassword((prev) => !prev)}
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </button>
      </div>
    </div>
  );
};

export default Password;
