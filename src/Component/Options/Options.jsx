import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Popover from "@mui/material/Popover";
import OptionList from "./OptionList";
import Stack from "@mui/material/Stack";

function Options() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "options-popover" : undefined;

  return (
    <div>
      <Stack direction="row" justifyContent="right">
        <IconButton
          size="large"
          aria-label="more"
          onClick={handleClick}
        >
          <MoreHorizIcon fontSize="medium" />
        </IconButton>
      </Stack>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <OptionList onClose={handleClose} />
      </Popover>
    </div>
  );
}

export default Options;
