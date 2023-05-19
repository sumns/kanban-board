import React ,{useState} from "react";
import Editable from "../Editable/Editable";
import Modal from "../Modal/Modal";
import './CardInfo.css'

function CardInfo(props) {
    const [values, setValues] = useState({
        ...props.card,
      });
    
      const updateTitle = (value) => {
        setValues({ ...values, title: value });
      };
  return (
    <Modal onClose={props.onclose}>
      <div className="cardinfo">
        <div className="cardinfo_box">
          <div className="cardinfo_box_title">
            <p>Title</p>
          </div>
          <Editable
            defaultValue={values.title}
            text={values.title}
            placeholder="Enter Title"
            onSubmit={updateTitle}
          />
        </div>
      </div>
    </Modal>
  );
}

export default CardInfo;
