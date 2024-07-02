import { styled } from "@mui/material";
import React from "react";
import ButtonUI from "../../UI/function/ButtonUI";

const EventPage: React.FC = () => {
  return (
    <Container>
      <BackText>АКЦИЯ</BackText>
      <TitleBox>
        <h1>У нас действуют постоянные скидки</h1>
        <p>
          В нашей клинике действуют скидки для пенсионеров, студентов и
          постоянных клиентов
        </p>
        <ButtonUI title="Воспользоваться скидкой" customStyle={styleBtn} />
      </TitleBox>

      <div>
        <img src="./image/doctorClinic.svg" alt="" />
      </div>
    </Container>
  );
};

export default EventPage;

const Container = styled("div")({
  backgroundImage: "url('./image/backgroundClinic3.png')",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "70vh",
  position: "relative",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-end",
  padding: "0 150px",
  margin: "100px auto auto",
});

const TitleBox = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  height: "100%",
  gap: "20px",
  zIndex: 10,
  width: "450px",

  h1: {
    fontSize: "40px",
    fontWeight: "500",
    color: "#294c7c",
  },
  "&>p": {
    fontSize: "18px",
    fontWeight: "500",
    color: "#294c7c",
  },
});

const BackText = styled("div")({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  color: "#babeca",
  fontSize: "180px",
  fontWeight: "600",
  zIndex: 5,
  letterSpacing: "10px",
  opacity: 0.4,
});

const styleBtn: React.CSSProperties = {
  color: "#eee",
  backgroundColor: "#53a8bb",
  margin: "0",
  width: "20cqw",
};
