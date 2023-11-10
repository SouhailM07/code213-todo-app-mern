// style
import "./background.css";
// assets
import lightBackground from "../../assets/images/bg-desktop-light.jpg";
import darkBackground from "../../assets/images/bg-desktop-dark.jpg";
//
import { useContext } from "react";
import { ThemeContext } from "../../App";

export default function Background() {
  let { darkMode }: any = useContext(ThemeContext);

  return (
    <div id="Background">
      <img src={darkMode ? lightBackground : darkBackground} alt="background" />
    </div>
  );
}
