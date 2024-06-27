import React from "react";
import ContainerBox from "../components/UI/Container";
import Header from "../components/admin/Header";
import Navigate from "../components/UI/function/Navigate";
import { NavigateState } from "../utils/types";

interface NonePageProps {
  navArray: NavigateState[];
}

const NonePage: React.FC<NonePageProps> = ({ navArray }) => {
  return (
    <>
      <Header isNotSearch={true} />
      <ContainerBox>
        <Navigate navArray={navArray} />
      </ContainerBox>
    </>
  );
};

export default NonePage;
