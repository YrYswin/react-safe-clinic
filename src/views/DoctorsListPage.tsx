import React from "react";
import { useSelector } from "react-redux";

import { doctorsSearch } from "../utils/constant";
import { selectFilterDoctors } from "../store/filtersSlice/selectors";
import { useAppDispatch } from "../store/store";
import {
  setDoctorTag,
  setDoctorsAge,
  setDoctorsGender,
  setDoctorsSearch,
} from "../store/filtersSlice/slice";
import { selectDoc } from "../store/doctorsSlice/slice";
import { getDoctorsList } from "../store/doctorsSlice/action";
import { DoctorsArrayState, Status } from "../store/doctorsSlice/types";
import { tagArray } from "../utils/constant";

import Header from "../components/admin/Header";
import ContainerBox from "../components/UI/Container";
import { AddDoctor, EditDoctor, InfoDoctor } from "../components/admin/doctor";
import DeleteModal from "../components/admin/DeleteModal";
import TableUI from "../components/UI/Table";

const DoctorsListPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { search, tag, gender } = useSelector(selectFilterDoctors);
  const [modal, setModal] = React.useState<string>("");
  const [doctorId, setDoctorId] = React.useState<number>();
  const [update, setUpdate] = React.useState<boolean>(false);
  const { items, status } = useSelector(selectDoc);

  React.useEffect(() => {
    dispatch(getDoctorsList({ genderDoc: gender }));
  }, [update, dispatch, gender, tag]);

  function closeModal(message: string) {
    setModal(message);
    if (status === Status.SUCCESS) {
      dispatch(getDoctorsList({ genderDoc: gender }));
    }
  }

  const addDoctor = () => {
    setModal("add");
    setDoctorId(undefined);
  };
  const infoDoctor = (id: number) => {
    setModal("info");
    setDoctorId(id);
  };
  const editDoctor = (id: number) => {
    setModal("edit");
    setDoctorId(id);
  };
  const deleteDoctor = (id: number) => {
    setModal("delete");
    setDoctorId(id);
  };

  const filterDoctors = (
    items: DoctorsArrayState[],
    query: string,
    tag: number
  ) => {
    let filteredItems = items;

    if (query) {
      const regex = new RegExp(query, "i");
      filteredItems = filteredItems.filter((item) => regex.test(item.name));
    }

    if (tag) {
      const selectedTag = tagArray.find((t) => t.id === tag);
      if (selectedTag) {
        filteredItems = filteredItems.filter(
          (item) => item.tag === selectedTag.name
        );
      }
    }

    return filteredItems;
  };
  const filteredItems = filterDoctors(items, search, tag);

  return (
    <>
      <Header
        pl="Поиск врачей..."
        filters={doctorsSearch}
        onChange={(e) => dispatch(setDoctorsSearch(e))}
        value={search}
        onTag={(e) => dispatch(setDoctorTag(e))}
        onGender={(e) => dispatch(setDoctorsGender(e))}
        onAge={(e) => dispatch(setDoctorsAge(e))}
      />
      <ContainerBox>
        {modal === "add" && (
          <AddDoctor updateTable={setUpdate} onClose={closeModal} />
        )}
        {modal === "edit" && (
          <EditDoctor
            updateTable={setUpdate}
            onClose={closeModal}
            doctorId={doctorId}
          />
        )}
        {modal === "info" && (
          <InfoDoctor onClose={closeModal} doctorId={doctorId} />
        )}
        {modal === "delete" && (
          <DeleteModal
            updateTable={setUpdate}
            onClose={closeModal}
            dataId={doctorId}
            deleteType="doctor"
          />
        )}
        <TableUI
          doctors={filteredItems}
          title={"Список врачей"}
          addItem={addDoctor}
          editItem={editDoctor}
          deleteItem={deleteDoctor}
          infoItem={infoDoctor}
        />
      </ContainerBox>
    </>
  );
};

export default DoctorsListPage;
