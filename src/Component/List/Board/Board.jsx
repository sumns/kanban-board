import React from "react";
import "./Board.css";
// import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Card from "../Card/Card";
import Editable from "../Editable/Editable";
function Board() {
  return (
    <div className="board">
      <div className="board_top">
        {/* //  Title */}
        <p className="board_top_title">
          To Do <span> *</span>
        </p>

        <MoreHorizIcon />
      </div>

      {/* // all cards */}
      <div className="board_cards">
        <Card />
        <Card />

        <Editable
          displayClass="board_cards_add"
          text="Add Card"
          placeholder="enter card Title"
        />
      </div>
    </div>
  );
}

export default Board;
