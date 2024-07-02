import { styled } from "@mui/material";
import React from "react";
import { ourServiceArray } from "../../../utils/homeItems";

const OurService: React.FC = () => {
  return (
    <>
      <Title>
        <img src="./icon/home/LineLeft.svg" />
        <p>Наши услуги</p>
        <img src="./icon/home/LineRight.svg" />
      </Title>

      <ItemsContainer>
        {ourServiceArray.map((obj, i) => (
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
      </ItemsContainer>
    </>
  );
};

export default OurService;

const Title = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "100px 150px 70px",

  p: {
    fontSize: "40px",
    fontWeight: "600",
    color: "#53a8bb",
  },
});

const ItemsContainer = styled("div")({
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  padding: "0 150px",
  gap: "30px",
});

const ItemBox = styled("div")({
  backgroundColor: "white",
  padding: "30px 60px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "30px",
  borderRadius: "20px",
  border: "1px solid #b4b4b4",
  boxShadow: "0 0 20px -10px black",
});

const TitleBox = styled("div")({
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  gap: "20px",

  h1: {
    color: "#53a8bb",
  },
});
