import React from "react";
import styled from "styled-components";

import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";

interface PairedButtonsUIProps {
  onCancel: (e: any) => void;
  isLoading: boolean;
}

const PairedButtonsUI: React.FC<PairedButtonsUIProps> = ({
  onCancel,
  isLoading,
}) => {
  return (
    <ButtonContainer>
      <ButtonCancel type="button" onClick={onCancel}>
        <CloseIcon />
        Отмена
      </ButtonCancel>

      <ButtonConfirm disabled={isLoading} type="submit">
        <AddIcon />
        Сохранить
      </ButtonConfirm>
    </ButtonContainer>
  );
};

export default PairedButtonsUI;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 30px;
  margin: 30px 40px;

  button {
    cursor: pointer;
  }
`;
const ButtonConfirm = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 15px;
  border-radius: 10px;
  background-color: #53a8bb;
  font-size: 20px;
  color: white;
  &:disabled {
    background-color: gray;
    cursor: wait;
  }
`;
const ButtonCancel = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 5px 10px;
  border-radius: 10px;
  background-color: #838383;
  font-size: 20px;
  color: white;
`;
