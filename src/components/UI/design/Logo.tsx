import { styled } from "@mui/material";
import React from "react";

interface LogoProps {
  withTitle: boolean;
  textSize?: number;
}

const Logo: React.FC<LogoProps> = ({ withTitle, textSize }) => {
  return (
    <Container fontSize={textSize}>
      <div>
        <img src="/icon/safe-clinic-logo.svg" alt="logo" />
        <h5>safe.clinic</h5>
      </div>
      {withTitle && (
        <p style={{ fontSize: "20px", fontWeight: "600" }}>
          Вход на Веб-приложение
        </p>
      )}
      <p>Все условия для вашей безопасности</p>
    </Container>
  );
};

export default Logo;

const Container = styled("div")<{ fontSize?: number }>(({ fontSize }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  alignItems: "center",

  div: {
    display: "flex",
    alignItems: "center",
    gap: fontSize ? `${fontSize / 3}px` : "5px",

    img: {
      width: "30px",
    },
    h5: {
      fontSize: fontSize ? `${fontSize}px` : "30px",
      fontWeight: "700",
      color: "rgb(83, 168, 187)",
    },
  },

  p: {
    fontSize: "12px",
    textAlign: "center",
    fontWeight: "500",
  },
}));
