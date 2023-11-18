// style
import "./input.css";

// assets
import lightIcon from "../../assets/images/icon-sun.svg";
import darkIcon from "../../assets/images/icon-moon.svg";
// hooks
import { useContext } from "react";
import { ThemeContext } from "../../App";
// api
import axios from "axios";

export default function Input() {
  let { darkMode, toggleTheme }: any = useContext(ThemeContext);
  //

  return (
    <>
      <div id="Input">
        <div id="Input-title">
          <h1 className="">TODO</h1>
          <button onClick={() => toggleTheme()}>
            <img src={darkMode ? darkIcon : lightIcon} alt="logo" />
          </button>
        </div>
        <div id="Input-inputContainer">
          <div id="Input-inputContainer-circle"></div>
          <input
            type="text"
            name="note"
            placeholder="Create a new todo"
            onKeyDown={async (e: any) => {
              if (e.key === "Enter" && e.target.value.length > 0) {
                await axios.post(
                  "https://code213-todo-app-mern-server.onrender.com/todos/addTodo",
                  {
                    note: e.target.value,
                  }
                );
                e.target.value = "";
              }
            }}
          />
        </div>
      </div>
    </>
  );
}
