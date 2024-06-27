import React from "react";
import Header from "../components/admin/Header";
import ContainerBox from "../components/UI/Container";
import { clientsNotes } from "../utils/clientNotes";
import NoteBlock from "../components/UI/NoteBlock";
import styled from "styled-components";

const MyNotesList: React.FC = () => {
  return (
    <>
      <Header isNotSearch />
      <ContainerBox>
        <h1>Мои Записи</h1>

        <NotesContainer>
          {clientsNotes.map((obj, i) => (
            <NoteBlock key={i} date={obj.date_of_appointment}>
              <p>
                <b>Услуга: </b>
                {obj.serviceName}
              </p>
              <p>
                <b>Доктор: </b>
                {obj.doctor}
              </p>
              <p>
                <b>Коментарии: </b>
                {obj.comment}
              </p>
              <span>{obj.time_of_appointment}</span>
            </NoteBlock>
          ))}
        </NotesContainer>
      </ContainerBox>
    </>
  );
};

export default MyNotesList;

const NotesContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  height: "calc(80cqh - 60px)",
  overflowX: "auto",
  borderTop: "1px solid gray",
  borderBottom: "1px solid gray",
  padding: "20px 20px 100px 20px",
});
