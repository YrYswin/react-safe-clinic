import React from "react";
import { styled } from "styled-components";

import { deleteFilialReq } from "../../store/branchesSlice/service";
import { deleteServiceReq } from "../../store/serviceSlice/service";
import { deleteDoctorReq } from "../../store/doctorsSlice/service";
import { deletePatientReq } from "../../store/patientsSlice/service";

import ModalMenu from "../UI/function/Modal";
import Loader from "../UI/design/Loader";

interface DeleteModalProps {
  onClose: (e: string) => void;
  dataId: number | undefined;
  updateTable: (e: boolean) => void;
  deleteType: string;
}
const DeleteModal: React.FC<DeleteModalProps> = ({
  onClose,
  dataId,
  deleteType,
  updateTable,
}) => {
  const [isLoaded, setLoaded] = React.useState<boolean>(false);

  const deleteChange = async (id: number) => {
    setLoaded(true);
    try {
      let response;
      switch (deleteType) {
        case "filial": {
          response = await deleteFilialReq(id);
          break;
        }
        case "service": {
          response = await deleteServiceReq(id);
          break;
        }
        case "doctor": {
          response = await deleteDoctorReq(id);
          break;
        }
        case "patient": {
          response = await deletePatientReq(id);
          break;
        }
        default: {
          break;
        }
      }

      if (response) {
        setLoaded(false);
        onClose("");
        updateTable(true);
      }
    } catch (error) {
      console.log(error);
      setLoaded(false);
    }
  };

  return (
    <ModalMenu>
      <ModalTitle>Вы уверены что хотите удалить ?</ModalTitle>

      {isLoaded ? (
        <Loader />
      ) : (
        <ButtonContainer>
          <ButtonConfirm
            type="submit"
            onClick={() => {
              if (dataId !== undefined) {
                deleteChange(dataId);
              }
            }}
          >
            Продолжить
          </ButtonConfirm>

          <ButtonCancel type="button" onClick={() => onClose("")}>
            Отменить
          </ButtonCancel>
        </ButtonContainer>
      )}
    </ModalMenu>
  );
};

export default DeleteModal;

const ModalTitle = styled.div`
  border-radius: 10px;
  background-color: #d4eff3;
  font-size: 24px;
  font-weight: 500;
  padding: 30px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin: 30px 40px;

  button {
    cursor: pointer;
  }
`;
const ButtonConfirm = styled.button`
  padding: 10px 15px;
  border-radius: 10px;
  background-color: #53a8bb;
  font-size: 20px;
  color: white;
`;
const ButtonCancel = styled.button`
  padding: 5px 10px;
  border-radius: 10px;
  background-color: #838383;
  font-size: 20px;
  color: white;
`;
