import React, { useState } from "react";
import "./QRGenerator.css";

const QRGenerator = () => {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  const fetchQrCode = async () => {
    const response = await fetch(
      `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input}`
    );
    console.log(response);
    if (response.ok) {
      setQrCode(response.url);
    }
  };

  return (
    <div className="qr-container container">
      <h2>QR Code Generator</h2>
      <input
        type="text"
        placeholder="Enter the text or URL"
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" onClick={fetchQrCode}>
        Generate
      </button>
      {qrCode && <img src={qrCode} alt="QR Code" />}
    </div>
  );
};

export default QRGenerator;
