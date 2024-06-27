import React from "react";
import { useSelector } from "react-redux";

import { useAppDispatch } from "../store/store";
import { selectSearchBranches } from "../store/filtersSlice/selectors";
import { setBranchsSearch } from "../store/filtersSlice/slice";
import { getBranches } from "../store/branchesSlice/action";
import { selectBranch } from "../store/branchesSlice/slice";
import { BranchState, Status } from "../store/branchesSlice/types";
import { getDirector } from "../store/miniSlice/directorSlice/action";
import { selectDirector } from "../store/miniSlice/directorSlice/slice";

import ContainerBox from "../components/UI/Container";
import Header from "../components/admin/Header";
import TableUI from "../components/UI/Table";
import { AddBranch, EditBranch, InfoBranch } from "../components/admin/branch";
import DeleteModal from "../components/admin/DeleteModal";

const BranchesListPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { items, status } = useSelector(selectBranch);
  const search = useSelector(selectSearchBranches);
  const director = useSelector(selectDirector);

  const [modal, setModal] = React.useState<string>("");
  const [filial, setFilial] = React.useState<BranchState>();
  const [update, setUpdate] = React.useState<boolean>(false);

  React.useEffect(() => {
    dispatch(getBranches());
    dispatch(getDirector());
  }, [dispatch, update]);

  function closeModal(message: string) {
    setModal(message);
    if (status === Status.SUCCESS) {
      dispatch(getBranches());
    }
  }

  const addBranch = () => {
    setModal("add");
    setFilial(undefined);
  };
  const infoBranch = (id: number) => {
    setModal("info");
    setFilial(items.find((obj) => obj.id === id));
  };
  const editBranch = (id: number) => {
    setModal("edit");
    setFilial(items.find((obj) => obj.id === id));
  };
  const deleteBranch = (id: number) => {
    setModal("delete");
    setFilial(items.find((obj) => obj.id === id));
  };

  const filterBranches = (items: BranchState[], query: string) => {
    if (!query) {
      return items;
    }
    const regex = new RegExp(query, "i");
    return items.filter((item) => regex.test(item.name));
  };
  const filteredItems = filterBranches(items, search);

  return (
    <>
      <Header
        pl={"Поиск филиалов..."}
        onChange={(e) => dispatch(setBranchsSearch(e))}
        value={search}
      />
      <ContainerBox>
        {modal === "add" && (
          <AddBranch
            onClose={closeModal}
            directorArray={director}
            updateTable={setUpdate}
          />
        )}
        {modal === "edit" && (
          <EditBranch
            onClose={closeModal}
            filialData={filial}
            directorArray={director}
            updateTable={setUpdate}
          />
        )}
        {modal === "info" && (
          <InfoBranch onClose={closeModal} filialData={filial} />
        )}
        {modal === "delete" && (
          <DeleteModal
            onClose={closeModal}
            dataId={filial?.id}
            deleteType="filial"
            updateTable={setUpdate}
          />
        )}
        <TableUI
          branches={filteredItems}
          title={"Наши филиалы"}
          addItem={addBranch}
          editItem={editBranch}
          deleteItem={deleteBranch}
          infoItem={infoBranch}
        />
      </ContainerBox>
    </>
  );
};

export default BranchesListPage;
