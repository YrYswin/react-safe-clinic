import { styled } from "@mui/material";
import React from "react";
import ButtonUI from "../../UI/function/ButtonUI";
import Maps from "../../UI/design/Maps";

const AddressAndContact: React.FC = () => {
  return (
    <Container>
      <Contact>
        <h1>Адрес и контакты</h1>

        <div>
          <img src="./icon/home/locate.svg" alt="address" />
          <div>
            <h1>Шабдан Баатыра ул.,19 г. Бишкек</h1>
            <span>
              Вход со двора, Одна минута ходьбы от автобусной остановки
            </span>
          </div>
        </div>

        <div>
          <img src="./icon/home/bus.svg" alt="address" />{" "}
          <div>
            <h1>Остановка пл Минина</h1>
            <span>Маршрутное такси 169, 120, 18</span>{" "}
          </div>
        </div>

        <div>
          <img src="./icon/home/time.svg" alt="address" />{" "}
          <div>
            <h1>Время работы</h1>
            <span>С 8.00 по 20.00 Без выходных</span>{" "}
          </div>
        </div>
      </Contact>
      <Address>
        <Maps />

        <div>
          <div>
            <select value={"Выберите врача"}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
            <input type="text" placeholder="Введите ваш телефон" />
          </div>
          <ButtonUI title="Записаться на прием" />
        </div>
      </Address>
    </Container>
  );
};

export default AddressAndContact;

const Container = styled("div")({
  width: "1200px",
  margin: "50px auto",
  display: "flex",
  justifyContent: "space-between",
});
const Contact = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",

  "&>h1": {
    fontSize: "30px",
    fontWeight: "500",
  },

  "&>div": {
    display: "flex",
    alignItems: "flex-start",
    gap: "20px",

    "&>div": {
      display: "flex",
      flexDirection: "column",
      gap: "5px",
      width: "280px",

      h1: {
        fontSize: "20px",
        fontWeight: "500",
      },
    },
  },
});
const Address = styled("div")({});
