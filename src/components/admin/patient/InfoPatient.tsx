import React from "react";
import { styled } from "styled-components";

import CloseIcon from "@mui/icons-material/Close";
import ModalMenu from "../../UI/function/Modal";
import Loader from "../../UI/design/Loader";
import { PatientState } from "../../../store/patientsSlice/types";
import { getOnePatientReq } from "../../../store/patientsSlice/service";

interface InfoPatientProps {
  onClose: (e: string) => void;
  dataId: number | undefined;
}

export const InfoPatient: React.FC<InfoPatientProps> = ({
  onClose,
  dataId,
}) => {
  const [isLoading, setLoading] = React.useState<boolean>(true);
  const [patinet, setPatient] = React.useState<PatientState>();

  React.useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      if (dataId) {
        try {
          const { data } = await getOnePatientReq(dataId);
          setPatient(data);
          setLoading(false);
        } catch (err) {
          console.log(err);
          setLoading(false);
        }
      }
    };
    fetchData();
  }, [dataId, setPatient]);

  return (
    <ModalMenu>
      <ModalTitle>Информация о Пациенте</ModalTitle>

      <FormContainer>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <ModalComponent>
              <InputsContainer>
                <InfoDate>
                  <b>ФИО: </b>
                  {patinet?.full_name}
                </InfoDate>

                <InfoDate>
                  <b>Адрес: </b>
                  {patinet?.address}
                </InfoDate>

                <InfoDate>
                  <b>Телефон: </b>
                  {patinet?.phone_number}
                </InfoDate>

                <InfoDate>
                  <b>Пол: </b>
                  {patinet?.gender}
                </InfoDate>

                <InfoDate>
                  <b>Запись к врачу: </b>
                  {patinet?.recording}
                </InfoDate>

                <InfoDate>
                  <b>Дата Рождения: </b>
                  {patinet?.id}
                </InfoDate>

                <InfoDate>
                  <b>Дата записи: </b>
                  {patinet?.date_of_appointment || null}
                </InfoDate>

                <InfoDate>
                  <p>
                    <b>Жалобы: </b>
                    {patinet?.complaints}
                  </p>
                </InfoDate>

                <InfoDate>
                  <b>Время: </b>
                  {patinet?.time_of_appointment || null}
                </InfoDate>
              </InputsContainer>
            </ModalComponent>

            <ButtonContainer>
              <ButtonCancel onClick={() => onClose("")}>
                <CloseIcon />
                Отмена
              </ButtonCancel>
            </ButtonContainer>
          </>
        )}
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
  padding: 20px 10px 0 10px;
  gap: 30px;
`;

const InputsContainer = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: auto;
`;
const InfoDate = styled.div`
  display: flex;
  gap: 5px;
  width: 90%;
  margin: 10px 20px;
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
