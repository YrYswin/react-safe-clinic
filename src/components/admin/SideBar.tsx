import React from "react";
import Logo from "../UI/design/Logo";
import { NavigateState } from "../../utils/types";
import Navigate from "../UI/function/Navigate";
import ButtonUI from "../UI/function/ButtonUI";
import { Container, styled } from "@mui/material";

interface SideBarProps {
  nav: NavigateState[];
}

const SideBar: React.FC<SideBarProps> = ({ nav }) => {
  return (
    <ContainerStyle p={20} w={25} jc={"space-between"}>
      <ContainerStyle gap={30} jc={"start"}>
        <Logo />
        <Navigate navArray={nav} />
      </ContainerStyle>
      <ButtonUI
        customStyle={StyleBtn}
        icon={"/icon/logout.svg"}
        title={"Выход"}
        click={() => console.log("Вы кликнули на кнопку выхода из аккаунта")}
      />
    </ContainerStyle>
  );
};

export default SideBar;

const ContainerStyle = styled(Container)<{
  p?: number;
  w?: number;
  jc: string;
  gap?: number;
}>(({ p, w, jc, gap }) => ({
  width: w ? `${w}%` : "auto",
  margin: "0",
  padding: p ? `${p}px ${p / 4}px !important` : "0",
  backgroundColor: "white",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: jc,
  alignItems: "start",
  gap: gap ? `${gap}px` : "0",
}));

const StyleBtn: React.CSSProperties = {
  gap: "10px",
  flexDirection: "row",
  backgroundColor: "rgb(221, 220, 255)",
};
