import React, { useState } from "react";
import "./Card.css";
import { Link } from 'react-router-dom';
import EditIcon from "@mui/icons-material/Edit";
import Dropdown from "../Dropdown/Dropdown";
import CardInfo from "./CardInfo";

function Card(props) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { id, title} = props.card;
  
  return (
    <>
    {showModal && (
        <CardInfo
          onClose={() => setShowModal(false)}
          card={props.card}
          boardId={props.boardId}
          updateCard={props.updateCard}

        />
      )}
      
    <div
        className="card"
        draggable
        onDragEnd={() => props.dragEnded(props.boardId, id)}
        onDragEnter={() => props.dragEntered(props.boardId, id)}
        onClick={() => setShowModal(true)}
      >
      <div className="card_top">
      <div className="card_top_labels">
            
          </div>
          <div
            className="card_top_more"
            onClick={(event) => {
              event.stopPropagation();
              setShowDropdown(true);
            }}
          >
        <EditIcon />
        {showDropdown && (
              <Dropdown
                class="board_dropdown"
                onClose={() => setShowDropdown(false)}
              >
                <p onClick={() => props.removeCard(props.boardId, id)}>
                  Delete Card
                </p>
              </Dropdown>
            )}
      </div>
      </div>
      <Link to={`/card/${id}`}> <div className="card_title">{title}</div> </Link>

    </div>
    </>
  );
}

export default Card;
