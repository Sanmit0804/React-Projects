import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

export default function App() {
  let [color, setColor] = useState(0);

  return (
    <>
      <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
        <h1 className="mb-2 text-3xl font-bold  bg-black p-4 cursor-pointer rounded-xl hover:bg-slate-600">
          Hello world!
        </h1>

        <button className="m-1" onClick={() => setColor("red")}>Red</button>
        <button className="m-1" onClick={() => setColor("green")}>
          Green
        </button>
        <button className="m-1">Blue</button>
        <button className="m-1">Yellow</button>
        <button className="m-1">Purple</button>
        <button className="m-1">Black</button>
        <button className="m-1">White</button>
      </div>
    </>
  );
}
