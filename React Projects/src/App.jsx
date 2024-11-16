import React from "react";
import "./App.css";
import menus from "./components/TreeView/data";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Accordion from "./components/Accordion/Accordion";
import Home from "./components/Home/Home";
import RandomColor from "./components/RandomColor/RandomColor";
import StarRating from "./components/StarRating/StarRating";
import ImageSlider from "./components/ImageSlider/ImageSlider";
import TreeView from "./components/TreeView/TreeView";

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/accordion" element={<Accordion />} />
          <Route path="/randomcolor" element={<RandomColor />} />
          <Route path="/starrating" element={<StarRating />} />
          <Route path="/imageslider" element={<ImageSlider />} />
          <Route path="/treeview" element={<TreeView menus={menus}  />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
