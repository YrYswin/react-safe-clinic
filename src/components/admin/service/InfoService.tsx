import React from "react";

import CloseIcon from "@mui/icons-material/Close";
import { styled } from "styled-components";
import ModalMenu from "../../UI/function/Modal";
import { ServiceState } from "../../../store/serviceSlice/types";

interface InfoServiceProps {
  onClose: (e: string) => void;
  dataModal: ServiceState | undefined;
}

export const InfoService: React.FC<InfoServiceProps> = ({
  onClose,
  dataModal,
}) => {
  return (
    <ModalMenu>
      <ModalTitle>Информация об услуге</ModalTitle>

      <FormContainer>
        <ModalComponent>
          <InfoFilial
            style={{ display: "flex", gap: "20px", alignItems: "center" }}
          >
            <ImageStyle src={dataModal?.photo} alt="" />
            <BoldText>Название услуги:</BoldText> {dataModal?.name}
          </InfoFilial>
          <div style={{ display: "flex", gap: "80px" }}>
            <InfoFilial>
              <BoldText>Описание услуги:</BoldText>
              <br /> {dataModal?.description}
            </InfoFilial>
            <div>
              <InfoFilial>
                <BoldText>Цена:</BoldText> {dataModal?.price}
              </InfoFilial>
              <InfoFilial>
                <BoldText>Категория:</BoldText> {dataModal?.category}
              </InfoFilial>
            </div>
          </div>
        </ModalComponent>

        <ButtonContainer>
          <ButtonCancel type="button" onClick={() => onClose("")}>
            <CloseIcon />
            Отмена
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

const ModalComponent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  gap: 30px;
`;

const ImageStyle = styled.img`
  width: 80px;
`;
const InfoFilial = styled.div`
  font-size: 19px;
`;
const BoldText = styled.b`
  font-weight: 500;
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
`;
