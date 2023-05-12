import { useState } from "react";
import style from "./Options.module.css";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Collapse from "@mui/material/Collapse";
// import MoreOptions from './MoreOptions';
import OptionList from "./OptionList";

function Options() {
  const [ListVisible, setListVisible] = useState(false);

  function handleClick() {
    setListVisible(!ListVisible);
  }

  return (
    <div>
      <Card variant="outlined" className={style.moreCard}>
        <Stack direction="row" justifyContent="right">
          <IconButton size="large" aria-label="more" className={style.moreIcon}>
            <MoreHorizIcon fontSize="medium" onClick={handleClick} />
          </IconButton>
        </Stack>
      </Card>
      <Collapse in={ListVisible}>
        <OptionList />
      </Collapse>
    </div>
  );
}

export default Options;
