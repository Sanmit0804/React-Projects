import React from "react";
import "./ThemeChanger.css";
import useLocalStorage from "./useLocalStorage";

const ThemeChanger = () => {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  function handleToggleTheme() {
    setTheme(theme == "light" ? "dark" : "light");
  }
  console.log(theme);

  return (
    <div className="theme-container container" theme-color = {theme}>
      <div>
        Hello World!
        <button onClick={handleToggleTheme}>Change Theme</button>
      </div>
    </div>
  );
};

export default ThemeChanger;
