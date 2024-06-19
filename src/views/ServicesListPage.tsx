import React from "react";
import { useSelector } from "react-redux";

import { useAppDispatch } from "../store/store";
import { selectSearchService } from "../store/filtersSlice/selectors";
import { setServicesSearch } from "../store/filtersSlice/slice";
import { selectService } from "../store/serviceSlice/slice";
import { getService } from "../store/serviceSlice/action";
import { ServiceState, Status } from "../store/serviceSlice/types";

import ContainerBox from "../components/UI/Container";
import TableUI from "../components/UI/Table";
import Header from "../components/admin/Header";
import {
  AddService,
  EditService,
  InfoService,
} from "../components/admin/service";
import DeleteModal from "../components/admin/DeleteModal";
import { getServiceCategory } from "../store/miniSlice/serviceCategory/action";
import { selectSerCat } from "../store/miniSlice/serviceCategory/slice";

const ServicesListPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const [modal, setModal] = React.useState<string>("");
  const [service, setService] = React.useState<ServiceState>();
  const [update, setUpdate] = React.useState<boolean>(false);

  const { items, status } = useSelector(selectService);
  const services = useSelector(selectSearchService);
  const serviceCategory = useSelector(selectSerCat);
  console.log(items, status);

  React.useEffect(() => {
    dispatch(getServiceCategory());
    dispatch(getService());
  }, [dispatch, update]);

  function closeModal(message: string) {
    setModal(message);
    if (status === Status.SUCCESS) {
      dispatch(getService());
    }
  }

  const addService = () => {
    setModal("add");
    setService(undefined);
  };
  const infoService = (id: number) => {
    setModal("info");
    setService(items.find((obj) => obj.id === id));
  };
  const editService = (id: number) => {
    setModal("edit");
    setService(items.find((obj) => obj.id === id));
  };
  const deleteService = (id: number) => {
    setModal("delete");
    setService(items.find((obj) => obj.id === id));
  };
  return (
    <>
      <Header
        pl={"Поиск услуги..."}
        onChange={(e) => dispatch(setServicesSearch(e))}
        value={services}
      />
      <ContainerBox>
        {modal === "add" && (
          <AddService
            onClose={closeModal}
            serCatData={serviceCategory.items}
            updateTable={setUpdate}
          />
        )}
        {modal === "edit" && (
          <EditService
            onClose={closeModal}
            serCatData={serviceCategory.items}
            dataModal={service}
            updateTable={setUpdate}
          />
        )}
        {modal === "info" && (
          <InfoService onClose={closeModal} dataModal={service} />
        )}
        {modal === "delete" && (
          <DeleteModal
            onClose={closeModal}
            dataId={service?.id}
            deleteType="service"
            updateTable={setUpdate}
          />
        )}
        <TableUI
          data={items}
          title={"Услуги"}
          addItem={addService}
          editItem={editService}
          deleteItem={deleteService}
          infoItem={infoService}
        />
      </ContainerBox>
    </>
  );
};

export default ServicesListPage