import React from "react";
import { useSelector } from "react-redux";
import NoteScreen from "../notes/NoteScreen";
import Sidebar from "./Sidebar";
import NothingSelect from "./NothingSelect";
const JournalScreen = () => {
  const { active } = useSelector((state) => state.notes);

  return (
    <div className="journal__main-content ">
      <Sidebar />

      <main>{active ? <NoteScreen /> : <NothingSelect />}</main>
    </div>
  );
};

export default JournalScreen;
