import React from "react";
import Button from "../Button/Button";

interface TomatoButtonProps {
  text: string;
  button: string;
}

function TomatoButton(props: TomatoButtonProps) {
  return <Button {...props} color="tomato" />;
}

export default TomatoButton;
