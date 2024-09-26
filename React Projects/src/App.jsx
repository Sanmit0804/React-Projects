import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Accordion from "./components/Accordion/Accordion";
import RandomColor from "./components/RandomColor/RandomColor";

const App = () => {
 return (
   <Router>
     <Navbar />
     <main className="main-content">
       <Routes>
         <Route path="/accordion" element={<Accordion />} />
         <Route path="/randomColor" element={<RandomColor />} />
       </Routes>
     </main>
   </Router>
 );
};

export default App;