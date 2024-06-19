import React from "react";
import { styled } from "@mui/material";
import Header from "../components/admin/Header";
import TextFiled from "../components/UI/function/TextFiled";
import WorkDays from "../components/UI/function/WorkDays";
import axios from "axios";
import { DoctorsState } from "../store/doctorsSlice/types";

export const Profile: React.FC = () => {
  const [item, setItem] = React.useState<DoctorsState>();
  const getDoctorById = async (id: number) => {
    const { data } = await axios.get(`http://192.168.1.12:8080/doctor/${id}`);
    setItem(data);
  };

  React.useEffect(() => {
    getDoctorById(2);
  }, []);

  return (
    <>
      <Header isNotSearch={true} pageTitle="Профиль" />
      <Container>
        <MainInfoBox
          style={{ padding: "10px 40px", borderBottom: "1px dashed black" }}
        >
          <MainInfoBox>
            <ProfileBox>
              <div
                style={{ display: "flex", alignItems: "center", gap: "20px" }}
              >
                <AvatarImage
                  src={item?.photo ? item.photo : "/image/doctorAvatar.png"}
                  alt="avatar"
                />
                <TitleBox>
                  <h1>{item?.name}</h1>
                  <p>{item?.tag}</p>
                </TitleBox>
              </div>
              <button type="button">
                <img src="/icon/editProfile.svg" alt="edit" />
                <p>Редактировать</p>
              </button>
            </ProfileBox>
          </MainInfoBox>

          <CLientBox style={{ backgroundColor: "#f6fbfc" }}>
            <TitleBox>
              <span>{item?.client}</span>
              <h5>Всего клиентов</h5>
            </TitleBox>
            <ClinetIconBox>
              <img src="/icon/clientCount.svg" alt="client" />
            </ClinetIconBox>
          </CLientBox>
        </MainInfoBox>
        <PersonalInfo>
          <h1>Личная информация</h1>
          <div style={{ display: "flex", flexWrap: "wrap", padding: "0 20px" }}>
            <TextFiled label="ФИО" value={item?.name || "None"} />
            <TextFiled label="Опыт работы" value="7 лет" />
            <TextFiled label="Дата рождения" value={item?.birthday || "None"} />
            <TextFiled label="Телефон" value={item?.phone_number || "None"} />
            <TextFiled label="Статус" value={item?.tag || "None"} />
            <TextFiled label="Email" value={item?.email || "None"} />
            <TextFiled
              label="О себе"
              value="Я — врач-стоматолог. Закончил Иркутский Государственный Медицинский Университет. Начало практики-2017"
            />
            <div
              style={{ display: "flex", flexDirection: "column", padding: "0" }}
            >
              <TextFiled label="Пол" value={item?.gender || "None"} />
              <TextFiled label="Адрес" value={item?.address || "None"} />
            </div>
          </div>
        </PersonalInfo>
        <PersonalInfo style={{ borderTop: "1px dashed" }}>
          <h1>График работы</h1>

          <WorkDays />
        </PersonalInfo>
      </Container>
    </>
  );
};
const Container = styled("div")({
  borderRadius: "10px",
  height: "100%",
  marginBottom: "20px",
  backgroundColor: "white",
});

const MainInfoBox = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "20px",
});
const AvatarImage = styled("img")({
  width: "120px",
  height: "120px",
  borderRadius: "100%",
  objectFit: "cover",
});

const ProfileBox = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "10px",

  button: {
    width: "120px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "5px",
    padding: "3px",
    borderRadius: "7px",
    border: "1px solid #b4e4ed",
    backgroundColor: "#c2f2fc",
    transition: "ease-in-out .1s all",

    ":hover": {
      backgroundColor: "#a7e3ee",
    },

    ":active": {
      boxShadow: "inset 0 0 3px gray",
      backgroundColor: "#b4e4ed",
      border: "1px solid #83b2bb",
    },

    p: {
      fontSize: "12px",
      fontWeight: "500",
    },
  },
});

const CLientBox = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "#f6fbfc",
  padding: "20px",
  gap: "100px",
  borderRadius: "10px",
  boxShadow:
    "3px 3px 3px #f1f9f9,3px -3px 3px #f1f9f9,-3px 3px 3px #f1f9f9,-3px -3px 3px #f1f9f9",
});
const ClinetIconBox = styled("div")({
  padding: "10px",
  backgroundColor: "#ccd7f9",
  borderRadius: "10px",
});

const TitleBox = styled("div")({
  display: "flex",
  flexDirection: "column",
  textAlign: "start",
  gap: "5px",

  h1: {
    fontSize: "24px",
    fontWeight: "600",
  },
  h5: {
    color: "#5b5b98",
  },
  span: {
    fontSize: "28px",
    fontWeight: "600",
  },
});

const PersonalInfo = styled("div")({
  h1: {
    textAlign: "center",
    fontSize: "20px",
    fontWeight: "600",
  },
});
