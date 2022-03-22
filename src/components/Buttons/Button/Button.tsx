import React from "react";
import "./Button.scss";

interface ButtonProps {
  color: string;
  text: string;
  button: string;
}
function Button(props: ButtonProps) {
  const { text, color, button } = props;
  let buttonStyle = "";

  if (button === "oval" && color === "tomato") {
    buttonStyle = "oval-tomato-button";
  }
  if (button === "oval" && color === "transparent") {
    buttonStyle = "oval-transparent-button";
  }
  if (button === "square" && color === "tomato") {
    buttonStyle = "square-tomato-button";
  }
  if (button === "square" && color === "transparent") {
    buttonStyle = "square-transparent-button";
  }
  return (
    <button type="button" {...props} className={buttonStyle}>
      {text}
    </button>
  );
}

export default Button;
