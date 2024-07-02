import React from "react";
import { styled } from "@mui/material";

const Footer: React.FC = () => {
  return (
    <Container>
      <FlexBox>
        <h1>Ваша улыбка - наша забота</h1>

        <ul>
          <li>О нас</li>
          <li>Наши услуги</li>
          <li>Наши специалисты</li>
          <li>Наша клиника</li>
          <li>Филиалы</li>
          <li>Отзывы</li>
        </ul>

        <ul>
          <li>Игформация</li>
          <li>Акции</li>
          <li>Новости</li>
          <li>Бесплатная консультация</li>
        </ul>

        <ul>
          <li>Связаться с нами</li>
          <li>
            <img src="./icon/home/phone.svg" alt="contact" />
            +996 705 90 43 43
          </li>
          <li>
            <img src="./icon/home/whatsapp.svg" alt="contact" />
            +996 705 90 43 43
          </li>
          <li>
            <img src="./icon/home/message.svg" alt="contact" />
            safe.clinic@gmail.com
          </li>
        </ul>
      </FlexBox>
      <FlexBox style={{ alignItems: "flex-end" }}>
        <span>2024 © Все права защищены</span>

        <Contain>
          <p>Присоединяйся к нам</p>
          <div>
            <img src="./icon/home/vk.svg" alt="" />
            <img src="./icon/home/facebook.svg" alt="" />
            <img src="./icon/home/instagram.svg" alt="" />
          </div>
        </Contain>
      </FlexBox>
    </Container>
  );
};

export default Footer;

const Container = styled("div")({
  backgroundImage: "url('./image/photo-footer.png')",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  display: "flex",
  flexDirection: "column",
  color: "white",
});

const FlexBox = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  margin: "50px auto",
  width: "1200px",

  h1: {
    fontSize: "30px",
    width: "250px",
  },

  ul: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",

    "li:first-child": {
      fontSize: "22px",
      fontWeight: "500",
    },

    li: {
      display: "flex",
      gap: "10px",
      alignItems: "center",
    },
  },
});

const Contain = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "20px",

  div: {
    display: "flex",
    justifyContent: "flex-start",
    gap: "20px",
    alignItems: "center",

    img: {
      cursor: "pointer",
      transition: "all .2s ease-in-out",

      ":hover": {
        filter: "drop-shadow(0 0 5px red)",
        transform: "scale(1.2)",
      },
    },
  },
});
