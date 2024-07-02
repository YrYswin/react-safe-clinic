import React from "react";
import { styled } from "@mui/material";
import ButtonUI from "../../UI/function/ButtonUI";

const NewsClinic: React.FC = () => {
  return (
    <>
      <TitleStyle>Наши новости</TitleStyle>
      <Container>
        <NewsItem>
          <img src="./image/doctorImage/tooth.png" alt="tooth" />
          <TitleBox>
            <h1>Работа в праздники 10.12.2021</h1>
            <p>
              Мы работаем по 31 декабря. С 1 января по 2 у нас выходные дни. С 3
              января у нас возобновляется работа в обычном режиме.
            </p>
          </TitleBox>
        </NewsItem>
        <NewsItem style={{ width: "500px" }}>
          <img src="./image/doctorImage/crown-tooth.png" alt="tooth" />
          <TitleBox>
            <h1>Новая акция 15.12.2021</h1>
            <p>
              С 3 по 27 января действуют скидки на коронки из металло-керамики.
              На каждую вторую скидка 10 %
            </p>
            <ButtonUI
              title="Узнать больше"
              customStyle={{
                backgroundColor: "#53a8bb",
                color: "white",
                margin: 0,
              }}
            />
          </TitleBox>
        </NewsItem>
        <NewsItem>
          <img src="./image/doctorImage/tooth.png" alt="tooth" />
          <TitleBox>
            <h1>Награда за помощь 15.12.2021</h1>
            <p>
              Мерия города Нижнего Новгорода отметила наш вклад в помощь людям с
              ограниченными возможностями дипломом и медалью “Забота 2021”
            </p>
            <a href="#">Подробнее</a>
          </TitleBox>
        </NewsItem>
      </Container>
    </>
  );
};

export default NewsClinic;

const TitleStyle = styled("h1")({
  width: "1200px",
  margin: "50px auto",
  fontSize: "30px",
  fontWeight: 600,
  marginTop: "100px",
});
const Container = styled("div")({
  margin: "50px auto",
  width: "1200px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const NewsItem = styled("div")({
  position: "relative",
  width: "350px",
  height: "400px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  img: {
    width: "100%",
    zIndex: -5,
  },
});

const TitleBox = styled("div")({
  position: "absolute",
  zIndex: 10,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "250px",
  gap: "20px",
  color: "#011738",

  h1: {
    fontSize: "22px",
    fontWeight: "600",
  },
  p: {
    fontSize: "16px",
    fontWeight: "500",
    lineHeight: "24px",
  },
  a: {
    textDecoration: "underline",
    fontWeight: "700",
    color: "black",
  },
});
