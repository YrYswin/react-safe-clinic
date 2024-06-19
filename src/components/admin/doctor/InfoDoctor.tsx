import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import ModalMenu from "../../UI/function/Modal";
import { getOneDoctorReq } from "../../../store/doctorsSlice/service";
import { InfoDoctorsState } from "../../../store/doctorsSlice/types";

interface InfoDoctorProps {
  onClose: (e: string) => void;
  doctorId: number | undefined;
}

export const InfoDoctor: React.FC<InfoDoctorProps> = ({
  onClose,
  doctorId,
}) => {
  const [doctorData, setDoctorData] = useState<InfoDoctorsState | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (doctorId) {
        try {
          const { data } = await getOneDoctorReq(doctorId);
          setDoctorData(data);
        } catch (err) {
          console.log(err);
        }
      }
    };
    fetchData();
  }, [doctorId]);

  return (
    <ModalMenu>
      <ModalTitle>Информация о Враче</ModalTitle>

      <FormContainer>
        <ImageStyle>
          <img style={{ width: "100px" }} src={doctorData?.photo} alt="" />
        </ImageStyle>

        <ModalComponent>
          <InfoFilial>
            <BoldText>ФИО:</BoldText>
            <DivData>{doctorData?.name}</DivData>
          </InfoFilial>
          <InfoFilial>
            <BoldText>Email:</BoldText> <DivData>{doctorData?.email}</DivData>
          </InfoFilial>
          <InfoFilial>
            <BoldText>Дата Рождения:</BoldText>{" "}
            <DivData>{doctorData?.birthday}</DivData>
          </InfoFilial>
          <InfoFilial>
            <BoldText>Адрес:</BoldText> <DivData>{doctorData?.address}</DivData>
          </InfoFilial>
          <InfoFilial>
            <BoldText>Теги:</BoldText> <DivData>{doctorData?.tag}</DivData>
          </InfoFilial>
          <InfoFilial>
            <BoldText>Телефон:</BoldText>{" "}
            <DivData>{doctorData?.phone_number}</DivData>
          </InfoFilial>
          <InfoFilial>
            <BoldText>Пол:</BoldText> <DivData>{doctorData?.gender}</DivData>
          </InfoFilial>
        </ModalComponent>

        <ButtonContainer>
          <ButtonCancel type="button" onClick={() => onClose("")}>
            <CloseIcon />
            Закрыть
          </ButtonCancel>
        </ButtonContainer>
      </FormContainer>
    </ModalMenu>
  );
};

const ModalTitle = styled.div`
  border-radius: 10px;
  background-color: #d4eff3;
  font-size: 24px;
  font-weight: 500;
  padding: 30px;
`;
const FormContainer = styled.div``;

const ImageStyle = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  overflow: hidden;
  margin: 10px 0 0 40px;

  img {
    width: 100%;
    object-fit: cover;
  }
`;

const ModalComponent = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 40px;
  gap: 30px;
`;

const InfoFilial = styled.div`
  font-size: 19px;
  width: 45%;
`;
const BoldText = styled.b`
  font-weight: 500;
`;
const DivData = styled.div`
  padding: 5px 10px;
  width: 100%;
`;

// ======= Button styles ==========
const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 30px;
  margin: 30px 40px;
`;
const ButtonCancel = styled.button`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  border-radius: 10px;
  background-color: #838383;
  font-size: 20px;
  color: white;
  cursor: pointer;
`;
