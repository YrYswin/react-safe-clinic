import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { useAppDispatch } from "../../../store/store";
import { patchBranch } from "../../../store/branchesSlice/action";

import { EditBranchState } from "../../../store/branchesSlice/types";
import { DirectorState } from "../../../store/miniSlice/directorSlice/types";

import { styled } from "styled-components";
import ModalMenu from "../../UI/function/Modal";
import Loader from "../../UI/design/Loader";
import PairedButtonsUI from "../../UI/function/PairedButtonsUI";

interface BranchInfoProps {
  onClose: (e: string) => void;
  filialData: EditBranchState | undefined;
  directorArray: DirectorState[] | undefined;
  updateTable: (e: boolean) => void;
}

export const EditBranch: React.FC<BranchInfoProps> = ({
  onClose,
  filialData,
  directorArray,
  updateTable,
}) => {
  const dispatch = useAppDispatch();
  const [isLoading, setLoading] = React.useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EditBranchState>({ defaultValues: filialData });

  const onSubmit: SubmitHandler<EditBranchState> = async (
    data: EditBranchState
  ) => {
    setLoading(true);
    try {
      const response = await dispatch(patchBranch(data));
      if (response.meta.requestStatus === "fulfilled") {
        updateTable(true);
        setLoading(false);
        onClose("");
      }
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  return (
    <ModalMenu>
      <ModalTitle>Редактировать Филиал</ModalTitle>

      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <ModalComponent>
              <InfoBranch>
                <label> Название филиала*</label>
                <InputBranch {...register("name", { required: true })} />
                {errors.name && <span>Это поле обязательно</span>}
              </InfoBranch>

              <InfoBranch>
                <label>Директор*</label>
                <SelectBranch
                  // value={1}
                  {...register("director", { required: true })}
                >
                  {directorArray?.map((obj) => (
                    <option key={obj.id} value={obj.id}>
                      {obj.name}
                    </option>
                  ))}
                </SelectBranch>
                {errors.director && <span>Это поле обязательно</span>}
              </InfoBranch>

              <InfoBranch>
                <label>Адрес*</label>
                <InputBranch {...register("address", { required: true })} />
                {errors.address && <span>Это поле обязательно</span>}
              </InfoBranch>

              <InfoBranch>
                <label>Телефон*</label>
                <InputBranch
                  {...register("phone_number", { required: true })}
                />
                {errors.phone_number && <span>Это поле обязательно</span>}
              </InfoBranch>
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
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 40px;
  gap: 30px;
`;
const InfoBranch = styled.div`
  font-size: 19px;
`;

const InputBranch = styled.input`
  padding: 5px 10px;
  border: 1px solid gray;
  width: 100%;
  border-radius: 5px;
`;
const SelectBranch = styled.select`
  padding: 5px 10px;
  border: 1px solid gray;
  width: 100%;
  border-radius: 5px;
`;
