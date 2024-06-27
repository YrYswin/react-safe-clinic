import React from "react";
import { useForm } from "react-hook-form";
import { styled } from "styled-components";

import {
  EditServiceState,
  ServiceState,
} from "../../../store/serviceSlice/types";
import { useAppDispatch } from "../../../store/store";
import { patchService } from "../../../store/serviceSlice/action";
import { ServiceCategoryState } from "../../../store/miniSlice/serviceCategory/types";

import ModalMenu from "../../UI/function/Modal";
import Loader from "../../UI/design/Loader";
import PairedButtonsUI from "../../UI/function/PairedButtonsUI";

interface AddServiceProps {
  onClose: (e: string) => void;
  dataModal: ServiceState | undefined;
  serCatData: ServiceCategoryState[];
  updateTable: (e: boolean) => void;
}

export const EditService: React.FC<AddServiceProps> = ({
  onClose,
  dataModal,
  serCatData,
  updateTable,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ServiceState>({ defaultValues: dataModal });

  const [isLoading, setLoading] = React.useState<boolean>(false);
  const inputFileRef = React.useRef<HTMLInputElement>(null);
  const [file, setFile] = React.useState<File>();
  const dispatch = useAppDispatch();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const createService = async (data: EditServiceState) => {
    setLoading(true);
    try {
      const response = await dispatch(patchService({ ...data, photo: file }));
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
      <ModalTitle>Добавить Услугу</ModalTitle>

      <FormContainer onSubmit={handleSubmit(createService)}>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <ModalComponent>
              <FileFormContainer>
                {file ? (
                  <ImageStyle
                    onClick={() => inputFileRef.current?.click()}
                    src={URL.createObjectURL(file)}
                  />
                ) : (
                  <ImageStyle
                    onClick={() => inputFileRef.current?.click()}
                    src={dataModal?.photo}
                  />
                )}

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
                  <label> Название услуги*</label>
                  <InputData {...register("name", { required: true })} />
                  {errors.name && <span>Это поле обязательно</span>}
                </InfoDate>

                <InfoDate>
                  <label>Цена*</label>
                  <InputData {...register("price", { required: true })} />
                  {errors.price && <span>Это поле обязательно</span>}
                </InfoDate>

                <InfoDate>
                  <label>Описание*</label>
                  <TextAreaData
                    {...register("description", { required: true })}
                  />
                  {errors.description && <span>Это поле обязательно</span>}
                </InfoDate>

                <InfoDate>
                  <label>Категория*</label>
                  <SelectData {...register("category", { required: true })}>
                    {serCatData?.map((obj) => (
                      <option key={obj.id} value={obj.id}>
                        {obj.name}
                      </option>
                    ))}
                  </SelectData>
                  {errors.category && <span>Это поле обязательно</span>}
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
const ImageStyle = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  width: 50px;
  cursor: pointer;
`;
const InputFileBtn = styled.button``;

const InputsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const InfoDate = styled.div`
  align-items: flex-start;
  width: 45%;
  margin: 10px auto;
`;

const InputData = styled.input`
  padding: 5px 10px;
  border: 1px solid gray;
  width: 100%;
  border-radius: 5px;
`;
const TextAreaData = styled.textarea`
  height: 100px;
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
