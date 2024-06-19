import React from "react";
import { styled } from "styled-components";
import { useForm } from "react-hook-form";

import { useAppDispatch } from "../../../store/store";
import { patchPatients } from "../../../store/patientsSlice/action";
import { getOnePatientReq } from "../../../store/patientsSlice/service";
import { PatientState } from "../../../store/patientsSlice/types";
import { DoctorsArrayState } from "../../../store/doctorsSlice/types";

import Loader from "../../UI/design/Loader";
import ModalMenu from "../../UI/function/Modal";
import PairedButtonsUI from "../../UI/function/PairedButtonsUI";
import RowRadioButtonsGroup from "../../UI/function/RadioInput";

interface AddDoctorProps {
  onClose: (e: string) => void;
  updateTable: (e: boolean) => void;
  dataId: number | undefined;
  doctorsArray: DoctorsArrayState[] | undefined;
}

export const EditPatient: React.FC<AddDoctorProps> = ({
  onClose,
  updateTable,
  dataId,
  doctorsArray,
}) => {
  const [isLoading, setLoading] = React.useState<boolean>(false);
  const [timeValue, setTimeValue] = React.useState<string>("");
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<PatientState>();

  React.useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      if (dataId) {
        try {
          const { data } = await getOnePatientReq(dataId);
          Object.keys(data).forEach((key) => {
            setValue(
              key as keyof PatientState,
              key === "tag"
                ? String(data[key as keyof PatientState])
                : data[key as keyof PatientState]
            );
          });
          setTimeValue(data.time_of_appointment);
          setLoading(false);
        } catch (err) {
          console.log(err);
          setLoading(false);
        }
      }
    };
    fetchData();
  }, [dataId, setValue]);

  const onSubmit = async (data: PatientState) => {
    setLoading(true);
    try {
      const editData = {
        ...data,
        time_of_appointment: timeValue,
      };
      const response = await dispatch(patchPatients(editData));
      if (response.meta.requestStatus === "fulfilled") {
        onClose("");
        updateTable(true);
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  return (
    <ModalMenu>
      <ModalTitle>Редактировать Пациента</ModalTitle>

      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <ModalComponent>
              <InputsContainer>
                <InfoDate>
                  <label>ФИО*</label>
                  <InputData {...register("full_name", { required: true })} />
                  {errors.full_name && (
                    <ErrorMessage>Укажите имя пациента</ErrorMessage>
                  )}
                </InfoDate>

                <InfoDate>
                  <label>Пол*</label>
                  <SelectData {...register("gender", { required: true })}>
                    <option value="Мужской">Мужской</option>
                    <option value="Женский">Женский</option>
                  </SelectData>
                  {errors.gender && (
                    <ErrorMessage>Укажите пол пациента</ErrorMessage>
                  )}
                </InfoDate>

                <InfoDate>
                  <label>Телефон*</label>
                  <InputData
                    {...register("phone_number", { required: true })}
                  />
                  {errors.phone_number && (
                    <ErrorMessage>Укажите номер пациента</ErrorMessage>
                  )}
                </InfoDate>

                <InfoDate>
                  <label>Дата Рождения*</label>
                  <InputData type="date" />
                </InfoDate>

                <div>
                  <InfoDate>
                    <label>Адрес*</label>
                    <InputData {...register("address", { required: true })} />
                    {errors.address && (
                      <ErrorMessage>Укажите адрес пациента</ErrorMessage>
                    )}
                  </InfoDate>

                  <InfoDate>
                    <label>Запись к врачу*</label>
                    <SelectData {...register("recording", { required: true })}>
                      {doctorsArray?.map((obj) => (
                        <option key={obj.id} value={obj.id}>
                          {obj.name}
                        </option>
                      ))}
                    </SelectData>
                    {errors.recording && (
                      <ErrorMessage>Укажите врача для пациента</ErrorMessage>
                    )}
                  </InfoDate>
                </div>

                <InfoDate>
                  <label>Жалобы*</label>
                  <TextAreaData
                    {...register("complaints", { required: true })}
                  />
                  {errors.complaints && (
                    <ErrorMessage>Укажите жалобы пациента</ErrorMessage>
                  )}
                </InfoDate>

                <InfoDate>
                  <label>Дата записи*</label>
                  <InputData type="date" {...register("date_of_appointment")} />
                  {errors.date_of_appointment && (
                    <ErrorMessage>Укажите время прихода пациента</ErrorMessage>
                  )}
                </InfoDate>

                <InfoDate>
                  <label>Время*</label>
                  <TextData>{timeValue}</TextData>
                </InfoDate>
              </InputsContainer>

              <RowRadioButtonsGroup value={timeValue} setValue={setTimeValue} />
            </ModalComponent>

            <PairedButtonsUI
              onCancel={() => onClose("")}
              isLoading={isLoading}
            />
          </>
        )}
      </FormContainer>
    </ModalMenu>
  );
};

// ========== modal style ===========
const ModalTitle = styled.div`
  border-radius: 10px;
  background-color: #d4eff3;
  font-size: 24px;
  font-weight: 500;
  padding: 30px;
`;
const FormContainer = styled.form``;

const ModalComponent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 10px 0 10px;
  gap: 30px;
`;

//  ======== input container ========
const InputsContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto;
`;
const InfoDate = styled.div`
  align-items: flex-start;
  width: 90%;
  margin: 10px 20px;
  position: relative;
`;
const ErrorMessage = styled.span`
  position: absolute;
  top: -10px;
  width: 250px;
  text-align: center;
  background-color: white;
  box-shadow: 0 0 5px gray;
  padding: 0 4px;
  border-radius: 5px;
  left: 50px;
  color: red;
`;

// ========= input select textarea style ========
const InputData = styled.input`
  padding: 5px 10px;
  border: 1px solid gray;
  width: 100%;
  border-radius: 5px;
`;
const TextData = styled.p`
  padding: 5px 10px;
  border: 1px solid gray;
  width: 100%;
  border-radius: 5px;
`;
const SelectData = styled.select`
  padding: 5px 10px;
  border: 1px solid gray;
  width: 100%;
  border-radius: 5px;
`;
const TextAreaData = styled.textarea`
  height: 103px;
  padding: 5px 10px;
  border: 1px solid gray;
  width: 100%;
  border-radius: 5px;
`;
