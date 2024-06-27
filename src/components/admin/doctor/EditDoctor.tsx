import React from "react";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "../../../store/store";
import { patchDoctor } from "../../../store/doctorsSlice/action";
import { DoctorsState } from "../../../store/doctorsSlice/types";
import { getOneDoctorReq } from "../../../store/doctorsSlice/service";

import ModalMenu from "../../UI/function/Modal";
import styled from "styled-components";
import Loader from "../../UI/design/Loader";
import { tagArray } from "../../../utils/constant";
import PairedButtonsUI from "../../UI/function/PairedButtonsUI";

interface EditDoctorProps {
  onClose: (e: string) => void;
  doctorId: number | undefined;
  updateTable: (e: boolean) => void;
}

export const EditDoctor: React.FC<EditDoctorProps> = ({
  onClose,
  doctorId,
  updateTable,
}) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<DoctorsState>();
  const [isLoading, setLoading] = React.useState<boolean>(false);
  const [image, setImage] = React.useState<string>("");
  const [file, setFile] = React.useState<File>();
  const dispatch = useAppDispatch();

  const inputFileRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      if (doctorId) {
        try {
          const { data } = await getOneDoctorReq(doctorId);
          setImage(data.photo);
          Object.keys(data).forEach((key) => {
            setValue(
              key as keyof DoctorsState,
              key === "tag"
                ? String(data[key as keyof DoctorsState])
                : data[key as keyof DoctorsState]
            );
          });
          setLoading(false);
        } catch (err) {
          console.log(err);
          setLoading(false);
        }
      }
    };
    fetchData();
  }, [doctorId, setValue]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const onSubmit = async (data: DoctorsState) => {
    setLoading(true);
    try {
      if (doctorId) {
        const editData = {
          ...data,
          photo: file,
        };
        console.log(editData);
        const response = await dispatch(patchDoctor(editData));
        if (response.meta.requestStatus === "fulfilled") {
          onClose("");
          updateTable(true);
          setLoading(false);
        }
      } else {
        console.error("No doctorId provided");
        setLoading(false);
      }
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  return (
    <ModalMenu>
      <ModalTitle>Редактировать Врача</ModalTitle>

      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <ModalComponent>
              <FileFormContainer>
                <ImageStyle>
                  <img
                    onClick={() => inputFileRef.current?.click()}
                    src={
                      file
                        ? URL.createObjectURL(file)
                        : image
                        ? image
                        : "/icon/imageIcon.svg"
                    }
                  />
                </ImageStyle>
                <input
                  type="file"
                  accept="image/*"
                  ref={inputFileRef}
                  onChange={handleFileChange}
                  hidden
                />
                <InputFileBtn
                  type="button"
                  onClick={() => inputFileRef.current?.click()}
                >
                  {file ? "Изменить фото" : " Добавить фото"}*
                </InputFileBtn>
              </FileFormContainer>

              <InputsContainer>
                <InfoDate>
                  <label>ФИО*</label>
                  <InputData {...register("name", { required: true })} />
                  {errors.name && <span>Это поле обязательно</span>}
                </InfoDate>

                <InfoDate>
                  <label>Email*</label>
                  <InputData {...register("email", { required: true })} />
                  {errors.email && <span>Это поле обязательно</span>}
                </InfoDate>

                <InfoDate>
                  <label>Дата Рождения*</label>
                  <InputData
                    type="date"
                    {...register("birthday", { required: true })}
                  />
                  {errors.birthday && <span>Это поле обязательно</span>}
                </InfoDate>

                <InfoDate>
                  <label>Адрес*</label>
                  <InputData {...register("address", { required: true })} />
                  {errors.address && <span>Это поле обязательно</span>}
                </InfoDate>

                <InfoDate>
                  <label>Теги*</label>
                  <SelectData {...register("tag", { required: true })}>
                    {tagArray.map((obj) => (
                      <option key={obj.id} value={obj.id}>
                        {obj.name}
                      </option>
                    ))}
                  </SelectData>
                  {errors.tag && <span>Это поле обязательно</span>}
                </InfoDate>

                <InfoDate>
                  <label>Телефон*</label>
                  <InputData
                    {...register("phone_number", { required: true })}
                  />
                  {errors.phone_number && <span>Это поле обязательно</span>}
                </InfoDate>

                <InfoDate>
                  <label>Пол*</label>
                  <SelectData {...register("gender", { required: true })}>
                    <option value={"Мужской"}>Мужской</option>
                    <option value={"Женский"}>Женский</option>
                  </SelectData>
                  {errors.gender && <span>Это поле обязательно</span>}
                </InfoDate>
              </InputsContainer>
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
const FileFormContainer = styled.div`
  margin: 0 0 0 20px;
  display: flex;
  align-items: center;
  gap: 20px;
`;
const ImageStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 10px;
  overflow: hidden;

  img {
    width: 100%;
    object-fit: cover;
  }
`;
const InputFileBtn = styled.button`
  background-color: #53a8bb;
  padding: 10px 20px;
  border-radius: 5px;
  color: white;
  cursor: pointer;
`;

const InputsContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto;
`;
const InfoDate = styled.div`
  align-items: flex-start;
  width: 90%;
  margin: 10px 20px;
`;

const InputData = styled.input`
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
