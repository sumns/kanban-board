import React, { useState } from "react";

import "./Editable.css";
import CloseIcon from "@mui/icons-material/Close";

function Editable(props) {
  const [showEdit, setShowEdit] = useState(false);

  return (
    <div className="editable">
      {showEdit ? (
        <form
          className={`editable_edit ${props.editClass || ""}`}
          onSubmit={(e) => {
            e.preventDefault();
            if (props.onSubmit) props.onSubmit();
          }}
        >
          <input
            type="text"
            defaultValue={props.text}
            placeholder={props.placeholder || "enter item"}
          />

          <div className="editable_edit_footer">
            <button type="submit">{props.buttonText || "Add"}</button>

            <CloseIcon onClick={() => setShowEdit(false)} />
          </div>
        </form>
      ) : (
        <p
          className={`editable_display ${props.displayClass || ""}`}
          onClick={() => setShowEdit(true)}
        >
          {" "}
          {props.text || "Add item"}{" "}
        </p>
      )}
    </div>
  );
}

export default Editable;
