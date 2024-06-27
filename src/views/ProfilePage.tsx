import React from "react";
import { styled } from "@mui/material";

import { InfoDoctorsState } from "../store/doctorsSlice/types";
import { getDoctorByIdReq } from "../store/doctorsSlice/service";

import Header from "../components/admin/Header";
import WorkDays from "../components/UI/function/WorkDays";
import ContainerBox from "../components/UI/Container";
import TextContainer from "../components/UI/function/TextContainer";

interface ProfilePageProps {
  isDoctor?: boolean;
  isClient?: boolean;
  isDirector?: boolean;
}

const ProfilePage: React.FC<ProfilePageProps> = ({
  isDoctor,
  isClient,
  isDirector,
}) => {
  const [item, setItem] = React.useState<InfoDoctorsState>();

  const getDoctor = async (id: number) => {
    const { data } = await getDoctorByIdReq(id);
    setItem(data);
  };

  React.useEffect(() => {
    getDoctor(2);
  }, []);

  return (
    <>
      <Header isNotSearch={true} pageTitle="Профиль" />
      <ContainerBox>
        <MainInfoBox
          style={{ padding: "10px 40px", borderBottom: "1px dashed black" }}
        >
          <MainInfoBox>
            <ProfileBox isDoctor={isDoctor || false}>
              <div
                style={{ display: "flex", alignItems: "center", gap: "20px" }}
              >
                <AvatarImage
                  isDoctor={isDoctor || false}
                  src={item?.photo ? item.photo : "/image/doctorAvatar.png"}
                  alt="avatar"
                />
                <TitleBox>
                  <h1>{item?.name || "-"} </h1>
                  <p>{item?.tag || "-"} </p>
                </TitleBox>
              </div>
              <button
                type="button"
                onClick={() => console.log("Редактировать")}
              >
                <img src="/icon/editProfile.svg" alt="edit" />
                <p>Редактировать</p>
              </button>
            </ProfileBox>
          </MainInfoBox>

          {!isClient && (
            <CLientBox style={{ backgroundColor: "#f6fbfc" }}>
              <TitleBox>
                <span>{item?.client}</span>
                <h5>Всего клиентов</h5>
              </TitleBox>
              <ClinetIconBox>
                <img src="/icon/clientCount.svg" alt="client" />
              </ClinetIconBox>
            </CLientBox>
          )}
        </MainInfoBox>

        <PersonalInfo>
          <h1>Личная информация</h1>
          <TextContainer
            isDirector={isDirector || false}
            isDoctor={isDoctor || false}
            isClient={isClient || false}
            data={item}
          />
        </PersonalInfo>

        {isDoctor && (
          <PersonalInfo style={{ borderTop: "1px dashed" }}>
            <h1>График работы</h1>

            <WorkDays />
          </PersonalInfo>
        )}
      </ContainerBox>
    </>
  );
};

export default ProfilePage;

const MainInfoBox = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "20px",
});

const AvatarImage = styled("img")<{ isDoctor: boolean }>(({ isDoctor }) => ({
  width: isDoctor ? "120px" : "150px",
  height: isDoctor ? "120px" : "150px",
  borderRadius: "100%",
  objectFit: "cover",
}));

const ProfileBox = styled("div")<{ isDoctor: boolean }>(({ isDoctor }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "10px",

  button: {
    width: isDoctor ? "120px" : "150px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "5px",
    padding: isDoctor ? "3px" : "5px",
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
      fontSize: isDoctor ? "12px" : "14px",
      fontWeight: "500",
    },
  },
}));

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
  padding: "10px 0",
  h1: {
    textAlign: "center",
    fontSize: "20px",
    fontWeight: "600",
    margin: "10px auto",
  },
});
