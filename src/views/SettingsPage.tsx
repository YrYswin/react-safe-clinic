import React from "react";
import ContainerBox from "../components/UI/Container";
import Header from "../components/admin/Header";

const SettingsPage: React.FC = () => {
  return (
    <>
      <Header isNotSearch={true} />
      <ContainerBox>SettingsPage</ContainerBox>
    </>
  );
};

export default SettingsPage;
