import React from "react";
import ContainerBox from "../components/UI/Container";
import Header from "../components/admin/Header";
import { useSelector } from "react-redux";

import { useAppDispatch } from "../store/store";
import { getPatients } from "../store/patientsSlice/action";
import { selectPatients } from "../store/patientsSlice/slice";
import { selectFilterPatients } from "../store/filtersSlice/selectors";
import { Status } from "../store/patientsSlice/types";
import {
  setPatientsAge,
  setPatientsGender,
  setPatientsSearch,
} from "../store/filtersSlice/slice";
import { patinetsSearch } from "../utils/constant";

import {
  AddPatient,
  EditPatient,
  InfoPatient,
} from "../components/admin/patient";
import DeleteModal from "../components/admin/DeleteModal";
import TableUI from "../components/UI/Table";
import { getDoctorsList } from "../store/doctorsSlice/action";
import { selectDoc } from "../store/doctorsSlice/slice";
import { GenderState } from "../utils/types";

const PatientsListPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { search, gender } = useSelector(selectFilterPatients);
  const [modal, setModal] = React.useState<string>("");
  const [update, setUpdate] = React.useState<boolean>(false);
  const [patinetId, setPatientId] = React.useState<number>();

  const { items, status } = useSelector(selectPatients);
  const doctors = useSelector(selectDoc);
  console.log(items, status);

  React.useEffect(() => {
    dispatch(getPatients({ genderPat: gender }));
    dispatch(getDoctorsList({ tag: 0, genderDoc: GenderState.ALL }));
  }, [update, dispatch]);

  function closeModal(message: string) {
    setModal(message);
    if (status === Status.SUCCESS) {
      dispatch(getPatients({ genderPat: gender }));
    }
  }

  const addPatient = () => {
    setModal("add");
  };
  const editPatient = (id: number) => {
    setModal("edit");
    setPatientId(id);
  };
  const infoPatient = (id: number) => {
    setModal("info");
    setPatientId(id);
  };
  const deletePatient = (id: number) => {
    setModal("delete");
    setPatientId(id);
  };
  return (
    <>
      <Header
        filters={patinetsSearch}
        pl={"Поиск пациентов..."}
        onChange={(e) => dispatch(setPatientsSearch(e))}
        value={search}
        onGender={(e) => dispatch(setPatientsGender(e))}
        onAge={(e) => dispatch(setPatientsAge(e))}
      />
      <ContainerBox>
        {modal === "add" && (
          <AddPatient
            onClose={closeModal}
            updateTable={setUpdate}
            doctorsArray={doctors.items}
          />
        )}
        {modal === "edit" && (
          <EditPatient
            onClose={closeModal}
            updateTable={setUpdate}
            dataId={patinetId}
            doctorsArray={doctors.items}
          />
        )}
        {modal === "info" && (
          <InfoPatient onClose={setModal} dataId={patinetId} />
        )}
        {modal === "delete" && (
          <DeleteModal
            updateTable={setUpdate}
            onClose={closeModal}
            dataId={patinetId}
            deleteType="patient"
          />
        )}
        <TableUI
          data={items}
          title={"Список пациентов"}
          addItem={addPatient}
          editItem={editPatient}
          deleteItem={deletePatient}
          infoItem={infoPatient}
        />
      </ContainerBox>
    </>
  );
};

export default PatientsListPage;
