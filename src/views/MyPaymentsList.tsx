import React from "react";
import { styled } from "@mui/material";

import Header from "../components/admin/Header";
import ContainerBox from "../components/UI/Container";
import NoteBlock from "../components/UI/NoteBlock";
import { clientsNotes } from "../utils/clientNotes";

const MyPaymentsList: React.FC = () => {
  return (
    <>
      <Header isNotSearch />
      <ContainerBox>
        <h1>Мои Записи</h1>

        <NotesContainer>
          {clientsNotes.map((obj, i) => (
            <NoteBlock key={i} date={obj.date_of_appointment}>
              <PaymentBox>
                {obj.payment_status ? "Вы оплатили !" : "Вы не оплатили !"}
              </PaymentBox>

              <p>
                <b>Услуга: </b>
                {obj.serviceName}
              </p>
              <p>
                <b>Цена: </b>
                {obj.price} сом
              </p>
              <span>{obj.time_of_appointment}</span>
            </NoteBlock>
          ))}
        </NotesContainer>
      </ContainerBox>
    </>
  );
};

export default MyPaymentsList;

const NotesContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "15px",
  height: "calc(80cqh - 60px)",
  overflowX: "auto",
  borderTop: "1px solid gray",
  borderBottom: "1px solid gray",
  padding: "20px 20px 100px 20px",
});

const PaymentBox = styled("div")({
  borderBottom: "1px solid gray",
  padding: "0px 25px 15px 25px",
  fontSize: "18px",
  fontWeight: "600",
});
