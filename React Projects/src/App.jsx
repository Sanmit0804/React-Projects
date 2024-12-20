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
import QRGenerator from "./components/QRGenerator/QRGenerator";
import ThemeChanger from "./components/ThemeChanger/ThemeChanger";
import ScrollIndicator from "./components/ScrollIndicator/ScrollIndicator";
import Tabs from "./components/Tabs/Tabs";
import Popup from "./components/Popup/Popup";
import Github from "./components/Github/Github";
import SearchAutoComplete from "./components/SearchAutoComplete/SearchAutoComplete";
import Todo from "./components/Todo/Todo";
import PasswordGenerator from "./components/PasswordGenerator/PasswordGenerator";

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
          <Route path="/qr" element={<QRGenerator />} />
          <Route path="/theme" element={<ThemeChanger />} />
          <Route path="/scroll" element={<ScrollIndicator url={`https://dummyjson.com/products?limit=100`}/>}/>
          <Route path="/tabs" element={<Tabs/>}/>
          <Route path="/popup" element={<Popup/>}/>
          <Route path="/github" element={<Github/>}/>
          <Route path="/searchAutoComplete" element={<SearchAutoComplete/>}/>
          <Route path="/todo" element={<Todo/>}/>
          <Route path="/password" element={<PasswordGenerator/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
