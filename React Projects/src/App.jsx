import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Accordion from "./components/Accordion/Accordion";
import Home from "./components/Home/Home";
import RandomColor from "./components/RandomColor/RandomColor";

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/accordion" element={<Accordion />} />
          <Route path="/randomcolor" element={<RandomColor />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
