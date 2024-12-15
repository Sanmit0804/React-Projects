import React, { useState } from "react";
import "./PasswordGenerator.scss";

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(0);

  const generatePassword = () => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
    let newPassword = "";
    for (let i = 0; i < length; i++) {
      newPassword += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(newPassword);
  };

  const handleCopy = () => {
    navigator.clipboard
      .writeText(password)
      .then(() => alert("Password copied to clipboard!"))
      .catch((err) => console.error("Failed to copy password: ", err));
    setPassword("");
  };

  return (
    <div className="passwordGenContainer">
      <div className="top">
        <input
          type="text"
          value={password}
          disabled
          aria-label="Generated password"
        />
        <button onClick={handleCopy} disabled={!password}>
          Copy
        </button>
      </div>
      <div className="bottom">
        <p>{length}</p>
        <input
          type="range"
          name=""
          id=""
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />
        <button onClick={() => generatePassword()}>Generate</button>
      </div>
    </div>
  );
};

export default PasswordGenerator;
