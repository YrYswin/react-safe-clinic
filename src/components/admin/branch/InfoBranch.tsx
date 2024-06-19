import React from "react";

import { EditBranchState } from "../../../store/branchesSlice/types";

import CloseIcon from "@mui/icons-material/Close";
import { styled } from "styled-components";
import ModalMenu from "../../UI/function/Modal";

interface BranchInfoProps {
  onClose: (e: string) => void;
  filialData: undefined | EditBranchState;
}

export const InfoBranch: React.FC<BranchInfoProps> = ({
  onClose,
  filialData,
}) => {
  return (
    <ModalMenu>
      <ModalTitle>Информация о Филиале</ModalTitle>

      <FormContainer>
        <ModalComponent>
          <InfoFilial>
            <BoldText>Название филиала:</BoldText> {filialData?.name}
          </InfoFilial>
          <InfoFilial>
            <BoldText>Директор:</BoldText> {filialData?.director}
          </InfoFilial>
          <InfoFilial>
            <BoldText>Адрес:</BoldText> {filialData?.address}
          </InfoFilial>
          <InfoFilial>
            <BoldText>Телефон:</BoldText> {filialData?.phone_number}
          </InfoFilial>
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
const FormContainer = styled.form``;

const ModalComponent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 40px;
  gap: 30px;
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
