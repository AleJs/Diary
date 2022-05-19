import React from "react";
import { faSkull } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NothingSelect = () => {
  return (
    <div className="nothing">
      <span className="nota">Write a note </span>
      <FontAwesomeIcon className="skull" icon={faSkull} size="3x" />
      <div></div>
    </div>
  );
};
export default NothingSelect;
