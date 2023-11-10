// style
import "./container.css";
//
import Input from "../Input/Input";
import { NotesContainer } from "../../components";

export default function Container() {
  return (
    <>
      <div id="Container">
        <Input />
        <NotesContainer />
        <div id="dragAndDrop">Drag and drop to reorder list</div>
      </div>
    </>
  );
}
