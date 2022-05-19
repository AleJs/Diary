import React from "react";
import moment from "moment";
import { useDispatch } from "react-redux";
import { EditNote, startUpload } from "../actions/notes";
const NotesAppBar = (props) => {
  const dispatch = useDispatch();
  const noteDate = moment(props.note.date);
  const handleSave = () => {
    dispatch(EditNote(props.note));
  };
  const handlePicture = () => {
    document.querySelector("#fileSelect").click();
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      dispatch(startUpload(file));
    }
  };
  return (
    <div className="notes__appbar">
      <span> {noteDate.format("LLLL")}</span>
      <input
        type="file"
        id="fileSelect"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      <div className="notes__button ">
        <button className="btn-text" onClick={handlePicture}>
          adjuntar
        </button>
        <button className="btn-text " onClick={handleSave}>
          guardar
        </button>
      </div>
    </div>
  );
};

export default NotesAppBar;
