import React from "react";
import moment from "moment";
import { useDispatch } from "react-redux";
import { activeNote } from "../actions/notes";
const JournalEntry = ({ id, title, body, url, date }) => {
  const dispatch = useDispatch();
  const noteDate = moment(date);
  const handleClickNote = () => {
    dispatch(
      activeNote(id, {
        title,
        body,
        url,
        date,
      })
    );
  };

  return (
    <div
      onClick={handleClickNote}
      className="journal__entry  animate__animated animate__fadeInUp animate__faster "
    >
      {url && (
        <div
          className="journal__entry-picture"
          style={{
            backgroundSize: "cover",
            backgroundImage: `url(${url})`,
          }}
        ></div>
      )}
      <div className="journal__entry-body">
        <p className="journal__entry-title">{title}</p>
        <p className="journal__entry-content">{body} </p>
      </div>
      <div className="journal__entry-date-box">
        <span>{noteDate.format("dddd")}</span>
        <h4>{noteDate.format("DD")}</h4>
      </div>
    </div>
  );
};

export default JournalEntry;
