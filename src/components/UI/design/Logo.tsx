import { styled } from "@mui/material";
import React from "react";

const Logo: React.FC = () => {
  return (
    <Container>
      <div>
        <img src="/icon/safe-clinic-logo.svg" alt="logo" />
        <h5>safe.clinic</h5>
      </div>
      <p>Все условия для вашей безопасности</p>
    </Container>
  );
};

export default Logo;

const Container = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  alignItems: "center",

  div: {
    display: "flex",
    alignItems: "center",
    gap: "5px",

    img: {
      width: "30px",
    },
    h5: {
      fontSize: "30px",
      fontWeight: "700",
      color: "rgb(83, 168, 187)",
    },
  },

  p: {
    fontSize: "12px",
    textAlign: "center",
    fontWeight: "500",
  },
});
