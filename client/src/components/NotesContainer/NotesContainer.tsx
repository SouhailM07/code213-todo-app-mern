// style
import "./notescontainer.css";
// hooks
import { useState, useEffect } from "react";
// components
import { Note } from "../../components";
import axios from "axios";

/*=======================================================================================*/
// component section
/*=======================================================================================*/

export default function NotesContainer() {
  //
  let [notes, setNotes]: any = useState([]);
  let filterUnfinishedNotes = notes.filter((e) => {
    return e.done === false;
  });
  useEffect(() => {
    axios
      .get("https://code213-todo-app-mern-server.onrender.com/todos")
      .then((res) => {
        setNotes(res.data.data);
      });
  }, [notes]);
  //
  let arrOfOptions = ["All", "Active", "Completed"];
  return (
    <div className="NoteContainer">
      <div className="NoteContainer-noteSection">
        {notes.map((e, i) => {
          return <Note key={i} note={e.text} done={e.done} noteId={e._id} />;
        })}
      </div>
      {/*  */}
      <div className="NoteContainer-panelSection">
        <div className="NoteContainer-panelSection-s1">
          {filterUnfinishedNotes.length} items left
        </div>
        <ul className="flex NoteContainer-panelSection-s2">
          {arrOfOptions.map((e, i) => {
            return <button key={i}>{e}</button>;
          })}
        </ul>
        <button className="NoteContainer-panelSection-s3">
          Clear Completed
        </button>
      </div>
    </div>
  );
}
