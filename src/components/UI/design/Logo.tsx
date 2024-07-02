import { styled } from "@mui/material";
import React from "react";

interface LogoProps {
  withTitle?: boolean;
  textSize?: number;
  color?: string;
  withinText?: boolean;
}

const Logo: React.FC<LogoProps> = ({
  withTitle,
  textSize,
  color,
  withinText,
}) => {
  return (
    <Container fontSize={textSize} color={color}>
      <div>
        <svg
          width="30"
          height="30"
          viewBox="0 0 21 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.68766 14.0866H5.66683V10.4616H8.68766V7.44075H12.3127V10.4616H15.3335V14.0866H12.3127V17.1074H8.68766V14.0866ZM10.5002 0.794922L0.833496 4.41992V11.7787C0.833496 17.8808 4.95391 23.572 10.5002 24.9616C16.0464 23.572 20.1668 17.8808 20.1668 11.7787V4.41992L10.5002 0.794922Z"
            fill={color ? color : "#53A8BB"}
          />
        </svg>
        <h5>safe.clinic</h5>
      </div>
      {withTitle && (
        <p style={{ fontSize: "20px", fontWeight: "600" }}>
          Вход на Веб-приложение
        </p>
      )}
      {!withinText && <p>Все условия для вашей безопасности</p>}
    </Container>
  );
};

export default Logo;

const Container = styled("div")<{ fontSize?: number; color?: string }>(
  ({ fontSize, color }) => ({
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
        color: color ? color : "rgb(83, 168, 187)",
      },
    },

    p: {
      fontSize: "12px",
      textAlign: "center",
      fontWeight: "500",
    },
  })
);
