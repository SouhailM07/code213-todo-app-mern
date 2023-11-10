// style
import "./note.css";
// assets
import checkLogo from "../../assets/images/icon-check.svg";
import deleteLogo from "../../assets/images/icon-cross.svg";
// hooks
import axios from "axios";

export default function Note({ note, noteId, done }) {
  let handleCheck = () => {
    axios.put(`http://localhost:3007/todos/doneTodo/${noteId}`);
  };

  let handleDelete = () => {
    axios.delete(`http://localhost:3007/todos/deleteTodo/${noteId}`);
  };

  // check toggle classes
  let checkMark,
    checkLine,
    checkText = "dark:text-d_text text-l_text ";
  if (done) {
    checkMark = "check border-none";
    checkLine = "line-through";
    checkText = "dark:text-d_lineThrough text-l_lineThrough";
  }

  return (
    <div className="Note" id={noteId}>
      <div className={`${checkMark}  Note-circle`}>
        <img src={done ? checkLogo : ""} />
      </div>
      <div
        onClick={() => handleCheck()}
        className={`Note-note h-full flex items-center ${checkLine} ${checkText}`}
      >
        {note}
      </div>
      <button onClick={() => handleDelete()}>
        <img src={deleteLogo} alt="" />
      </button>
    </div>
  );
}
