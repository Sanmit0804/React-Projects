import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Accordion from "./components/Accordion/Accordion";
import RandomColor from "./components/RandomColor/RandomColor";
import StarRating from "./components/StarRating/StarRating";
import ImageSlider from "./components/ImageSlider/ImageSlider";
import Password from "./components/Password/Password";
import LoadMore from "./components/LoadMore/LoadMore.jsx";
import TreeView from "./components/TreeView/TreeView.jsx";
import menus from "./components/TreeView/data.js";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/accordion" element={<Accordion />} />
          <Route path="/randomColor" element={<RandomColor />} />
          <Route path="/starRating" element={<StarRating />} />
          <Route path="/imageSlider" element={<ImageSlider />} />
          <Route path="/loadmore" element={<LoadMore />} />
          <Route path="/password" element={<Password />} />
          <Route path="/treeView" element={<TreeView menus={menus}/>} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
