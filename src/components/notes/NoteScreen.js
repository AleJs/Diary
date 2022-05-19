import React, { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { useForm } from "../../hooks/useForm";
import { activeNote, startSupr } from "../actions/notes";
import NotesAppBar from "./NotesAppBar";

const NoteScreen = () => {
  const { active: note } = useSelector((state) => state.notes);
  const [formValues, handleInputChange, reset] = useForm(note);
  const { title, body, id } = formValues;
  const dispatch = useDispatch();

  const activeId = useRef(note.id);
  useEffect(() => {
    if (note.id !== activeId.current) {
      reset(note);
      activeId.current = note.id;
    }
  }, [note, reset]);

  useEffect(() => {
    dispatch(activeNote(formValues.id, { ...formValues }));
  }, [formValues, dispatch]);

  const handleDelete = () => {
    dispatch(startSupr(id));
  };

  return (
    <div className="notes__main-content">
      <NotesAppBar note={note} />
      <div className="notes__content">
        <input
          type="text"
          placeholder={title}
          className="notes__title-input"
          value={title}
          name="title"
          onChange={handleInputChange}
        />

        <hr />
        <br />
        <textarea
          className="notes__textarea"
          placeholder={body}
          onChange={handleInputChange}
          value={body}
          name="body"
        ></textarea>

        {note.url && (
          <div className="notes__image">
            <img src={note.url} alt="imagen" />
          </div>
        )}
      </div>
      <button className="btn btn-danger" onClick={handleDelete}>
        DELETE
      </button>
    </div>
  );
};

export default NoteScreen;
