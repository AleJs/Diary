import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startLogout } from "../actions/auth";
import { startNewNote } from "../actions/notes";
import JournalEntries from "./JournalEntries";
import { faUserCircle, faStickyNote } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Sidebar = () => {
  const dispatch = useDispatch();
  const { name } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(startLogout());
  };
  const addNotes = () => {
    dispatch(startNewNote());
  };
  return (
    <aside className="journal__sidebar">
      <div className="journal__sidebar-navbar">
        <h3 className="mt-5">
          <FontAwesomeIcon icon={faUserCircle} size="1x" />

          <span
            style={{
              letterSpacing: "2px",
            }}
          >
            {" "}
            {name}{" "}
          </span>
        </h3>
        <button
          onClick={handleLogout}
          style={{
            border: "1px solid white",
            padding: "7px;",
            letterSpacing: "2px ",
          }}
          className="btn "
        >
          logout
        </button>
      </div>
      <div className="journal__new-entry " onClick={addNotes}>
        <FontAwesomeIcon icon={faStickyNote} size="2x" />

        <p className="mt-2">New Note</p>
      </div>

      <JournalEntries />
    </aside>
  );
};

export default Sidebar;
