import { styled } from "@mui/material";
import React from "react";
import { InfoDoctorsState } from "../../../store/doctorsSlice/types";
import TextFiled from "./TextFiled";

interface TextContainerProps {
  isDoctor: boolean;
  isClient: boolean;
  isDirector: boolean;
  data?: InfoDoctorsState;
}

const TextContainer: React.FC<TextContainerProps> = ({
  isDoctor,
  data,
  isClient,
  isDirector,
}) => {
  const doctorField = isDoctor && (
    <>
      <TextFiled label="ФИО" value={data?.name || "None"} />
      <TextFiled label="Опыт работы" value="7 лет" />
      <TextFiled label="Дата рождения" value={data?.birthday || "None"} />
      <TextFiled label="Телефон" value={data?.phone_number || "None"} />
      <TextFiled label="Статус" value={data?.tag || "None"} />
      <TextFiled label="Email" value={data?.email || "None"} />
      <TextFiled
        label="О себе"
        value="Я — врач-стоматолог. Закончил Иркутский Государственный Медицинский Университет. Начало практики-2017"
      />
      <div style={{ display: "flex", flexDirection: "column", padding: "0" }}>
        <TextFiled label="Пол" value={data?.gender || "None"} />
        <TextFiled label="Адрес" value={data?.address || "None"} />
      </div>
    </>
  );

  const clientField = isClient && (
    <>
      <TextFiled label="ФИО" value={data?.name || "None"} />
      <TextFiled label="Телефон" value={data?.phone_number || "None"} />
      <TextFiled label="Дата рождения" value={data?.birthday || "None"} />
      <TextFiled label="Пол" value={data?.gender || "None"} />
      <TextFiled label="Email" value={data?.email || "None"} />
      <TextFiled label="Адрес" value={data?.address || "None"} />
    </>
  );

  const directorField = isDirector && (
    <>
      <TextFiled label="ФИО" value={data?.name || "None"} />
      <TextFiled label="Опыт работы" value="7 лет" />
      <TextFiled label="Дата рождения" value={data?.birthday || "None"} />
      <TextFiled label="Телефон" value={data?.phone_number || "None"} />
      <TextFiled label="Статус" value={data?.tag || "None"} />
      <TextFiled label="Email" value={data?.email || "None"} />
      <TextFiled
        label="О себе"
        value="Я — врач-стоматолог. Закончил Иркутский Государственный Медицинский Университет. Начало практики-2017"
      />
      <div style={{ display: "flex", flexDirection: "column", padding: "0" }}>
        <TextFiled label="Пол" value={data?.gender || "None"} />
        <TextFiled label="Адрес" value={data?.address || "None"} />
      </div>
    </>
  );

  return (
    <TextContainerStyle isDoctor={isDoctor || false}>
      {isDoctor && doctorField}
      {isClient && clientField}
      {isDirector && directorField}
    </TextContainerStyle>
  );
};

export default TextContainer;

const TextContainerStyle = styled("div")<{ isDoctor: boolean }>(
  ({ isDoctor }) => ({
    display: "grid",
    gridTemplateColumns: "auto auto",
    padding: "0 50px",
    gap: isDoctor ? "10px" : "20px",
  })
);
