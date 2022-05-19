import React from "react";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";

import JournalEntry from "./JournalEntry";

const JournalEntries = () => {
  const { notes, loading } = useSelector((state) => state.notes);

  return (
    <div className="journal__entries">
      {
        (loading ? Swal.showLoading() : Swal.close(),
        notes.map((note) => <JournalEntry key={note.id} {...note} />))
      }
    </div>
  );
};

export default JournalEntries;
