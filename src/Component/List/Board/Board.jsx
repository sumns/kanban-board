import React, { useState } from "react";
import "./Board.css";
// import Options from "../../Options/Options";
import Card from "../Card/Card";
import Editable from "../Editable/Editable";
// import Dropdown from "../Dropdown/Dropdown";
import Dropdown from "../Dropdown/Dropdown";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function Board(props) {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="board">
      <div className="board_header">
      <p className="board_header_title">
          {props.board?.title}
          <span>{props.board?.cards?.length || 0}</span>
        </p>

        <div
          className="board_header_title_more"
          // onClick={() => setShowDropdown(true)}
          onClick={(event) => {
            event.stopPropagation();
            setShowDropdown(true);
          }}
        >
          {/* <Options /> */}
          <MoreHorizIcon />

          {showDropdown && (
            <Dropdown
              class="board_dropdown"
              onClose={() => setShowDropdown(false)}
            >
              <p onClick={() => props.removeBoard()}>Delete Board</p>
            </Dropdown>
          )}
        </div>
      </div>

      <div className="board_cards custom-scroll">
        {props.board?.cards?.map((item) => (
          <Card
            key={item.id}
            card={item}
            boardId={props.board.id}
            removeCard={props.removeCard}
            dragEntered={props.dragEntered}
            dragEnded={props.dragEnded}
          />
        ))}

        <Editable
          text="+ Add Card"
          placeholder="Enter Card Title"
          displayClass="board_add-card"
          editClass="board_add-card_edit"
          onSubmit={(value) => props.addCard(props.board?.id, value)}
        />
      </div>
    </div>
  );
}

export default Board;
