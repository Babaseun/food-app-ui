import React from "react";
import Button from "../Button/Button";

interface TransparentButtonProps {
  text: string;
  button: string;
}

function TransparentButton(props: TransparentButtonProps) {
  return <Button {...props} color="transparent" />;
}

export default TransparentButton;
