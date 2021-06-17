import React from "react";
import Button from "@material-ui/core/Button";
import "../Style/Button.css";
// assets

export default function BackUserBtn(props) {
  return (
    <div>
      <Button
        variant="contained"
        className="back_button"
        startIcon={<img src={props.btnImg} alt="..." />}
      >
        {props.btnName}
      </Button>
    </div>
  );
}
