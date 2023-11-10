import React, { useState } from "react";
import "./style/input.css";
import "./App.css";
// components
import { Container, Background } from "./components";

//@ts-ignore
export const ThemeContext = React.createContext();

function App() {
  let [darkMode, setDarkMode] = useState(true);
  let toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.className = darkMode ? "dark" : "light";
  };
  document.body.className = "bg-l_bg dark:bg-d_bg";

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      <div>
        <Background />
        <Container />
      </div>
    </ThemeContext.Provider>
  );
}
export default App;
