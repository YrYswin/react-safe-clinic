import React from "react";
import { clinicISArray } from "../../../utils/homeItems";
import { styled } from "@mui/material";

const ClinicIs: React.FC = () => {
  return (
    <BackgroundImage>
      <Title>
        <img src="./icon/home/LineLeft.svg" />
        <p>safe.clinic это</p>
        <img src="./icon/home/LineRight.svg" />
      </Title>
      <ItemContainer>
        {clinicISArray.map((obj, i) => (
          <ItemBox key={i}>
            <div>
              <img src={obj.icon} alt="desktop" />
            </div>
            <TitleBox>
              <h1>{obj.title}</h1>
              <p>{obj.description}</p>
            </TitleBox>
          </ItemBox>
        ))}
      </ItemContainer>
    </BackgroundImage>
  );
};

export default ClinicIs;

const BackgroundImage = styled("div")({
  backgroundImage: "url('./image/backgroundClinic2.png')",
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
  height: "100vh",
});
const Title = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "50px 150px 70px",

  p: {
    fontSize: "40px",
    fontWeight: "600",
    color: "#53a8bb",
  },
});

const ItemContainer = styled("div")({
  display: "flex",
  padding: "0 150px",
  justifyContent: "space-between",
});

const ItemBox = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "20px",
  width: "340px",
  backgroundColor: "white",
  padding: "30px 50px",
  borderRadius: "20px",
  boxShadow: "7px 5px 15px 5px rgb(80,80,80,.5)",
});

const TitleBox = styled("div")({
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  gap: "20px",

  h1: {
    fontSize: "20px",
    fontWeight: "500",
  },

  p: {
    lineHeight: "20px",
  },
});
