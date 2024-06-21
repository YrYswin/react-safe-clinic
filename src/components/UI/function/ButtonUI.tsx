import React from "react";
import { Button, styled } from "@mui/material";

interface ButtonProps {
  click?: (e?: any) => void;
  title?: string;
  icon?: string;
  customStyle?: React.CSSProperties;
}

const ButtonUI: React.FC<ButtonProps> = ({
  click,
  title,
  icon,
  customStyle,
}) => {
  return (
    <ButtonStyle style={customStyle} onClick={click}>
      {icon && <img src={icon} alt="icon" />}
      <p>{title}</p>
    </ButtonStyle>
  );
};

export default ButtonUI;

const ButtonStyle = styled(Button)({
  display: "flex",
  margin: "0 30px 20px 30px",
  padding: "7px 17px",
  borderRadius: "5px",
  cursor: "pointer",

  "&:hover": {
    backgroundColor: "blue",
  },
});
