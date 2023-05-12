import React from "react";
import "./Chip.css";
import CloseIcon from "@mui/icons-material/Close";

function Chip(props) {
  return (
    <div className="chip" style={{ backgroundColor: props.color }}>
      {props.text}
      {props.close && (
        <CloseIcon onClick={props.onClose ? props.onClose() : ""} />
      )}
    </div>
  );
}

export default Chip;
