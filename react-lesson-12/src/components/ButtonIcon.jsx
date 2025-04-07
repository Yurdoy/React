import React from "react";
import ArrowDropDownCircleRoundedIcon from "@mui/icons-material/ArrowDropDownCircleRounded";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/material";
import { useState } from "react";

const ButtonIcon = () => {
  const [text, setText] = useState(false);

  const clickHandler = () => {
    setText(true);
  };

  const deleteHandler = () => {
    setText(false);
  };
  return (
    <div>
      <Button variant="text" onClick={clickHandler}>
        <ArrowDropDownCircleRoundedIcon />
      </Button>
      {text && <p>Text</p>}
      <Button variant="text" onClick={deleteHandler}>
        <DeleteIcon />
      </Button>
    </div>
  );
};

export default ButtonIcon;
