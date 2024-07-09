import React from "react";
import { styled } from "@mui/material";
import ButtonUI from "../../UI/function/ButtonUI";

const ConsultationPage: React.FC = () => {
  return (
    <Container>
      <Content>
        <h1>Запистатсья на бесплатную консультацию</h1>
        <div style={{ display: "flex", alignItems: "flex-end", gap: "10px" }}>
          <InputBox>
            <p>Введите ваш телефон: </p>
            <input type="text" placeholder="+996 (xxx) xxx-xxx" />
          </InputBox>
          <ButtonUI title="Записаться на прием" customStyle={styleBtn} />
        </div>
        <p>
          Или звоните по телефону <span>+996 (700) 111 201</span>
        </p>
      </Content>
      <ImageBox>
        <img src="./image/doctorImage/consultationImage.png" alt="image" />
      </ImageBox>
    </Container>
  );
};

export default ConsultationPage;

const Container = styled("div")({
  width: "1200px",
  margin: "100px auto",
  display: "flex",
  justifyContent: "space-between",
  borderRadius: "25px",
  backgroundColor: "white",
  boxShadow: "0 0 30px -5px gray",
  border: "1px solid gray",
  overflow: "hidden",
});
const Content = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  padding: "20px 40px",

  h1: {
    fontSize: "30px",
    fontWeight: "500",
  },
});
const InputBox = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "10px",

  input: {
    fontSize: "16px",
    padding: "5px 15px",
    border: "1px solid gray",
    borderRadius: "10px",
  },
});
const ImageBox = styled("div")({});

const styleBtn: React.CSSProperties = {
  color: "white",
  backgroundColor: "#53a8bb",
  margin: 0,
  fontSize: "16px",
  padding: "5px 15px",
  borderRadius: "10px",
};
