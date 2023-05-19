import React ,{ useState} from "react";
import Editable from "../Editable/Editable";
import Modal from "../Modal/Modal";
import './CardInfo.css'

import SubtitlesIcon from '@mui/icons-material/Subtitles';
import SubjectIcon from '@mui/icons-material/Subject';

function CardInfo(props) {
    const [values, setValues] = useState({
        ...props.card,
      });
    
      const updateTitle = (value) => {
        setValues({ ...values, title: value });
      };

      const updateDesc = (value) => {
        setValues({ ...values, desc: value });
      };

  return (
    <Modal onClose={props.onClose}>
      <div className="cardinfo">
        <div className="cardinfo_box">
          <div className="cardinfo_box_title">
          <SubtitlesIcon/>
            <p>Title</p>
          </div>
          <Editable
            defaultValue={values.title}
            text={values.title}
            placeholder="Enter Title"
            onSubmit={updateTitle}
          />
        </div>
        <div className="cardinfo_box">
          <div className="cardinfo_box_title">
            <SubjectIcon/>
            <p>Description</p>
          </div>
          <Editable
            defaultValue={values.desc}
            text={values.desc || "Add a Description"}
            placeholder="Enter description"
            onSubmit={updateDesc}
          />
        </div>
      </div>
    </Modal>
  );
}

export default CardInfo;
