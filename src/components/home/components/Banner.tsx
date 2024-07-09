import { styled } from "@mui/material";
import React from "react";

const Banner: React.FC = () => {
  return (
    <Container>
      <Information>
        <h1>safe clinic</h1>
        <p>Мы делаем вашу улыбку здоровой и красивой с удовольствием.</p>

        <StyleBtn>Записаться</StyleBtn>
      </Information>
    </Container>
  );
};

export default Banner;

const Container = styled("div")({
  backgroundImage: "url('./image/backgroundClinic.png')",
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
  height: "90vh",
  display: "flex",
  padding: "0 150px",
  alignItems: "center",
});

const Information = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "30px",
  h1: {
    color: "#005879",
    fontSize: "90px",
    fontWeight: "600",
  },
  "&>p": {
    color: "#048fc3",
    fontSize: "38px",
    width: "700px",
  },
});

const StyleBtn = styled("button")({
  width: "250px",
  padding: "10px",
  borderRadius: "7px",
  backgroundColor: "#00b3d0",
  fontSize: "18px",
  color: "white",
});
