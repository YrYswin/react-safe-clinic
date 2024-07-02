import React from "react";
import ButtonUI from "../UI/function/ButtonUI";
import styled from "styled-components";
import Logo from "../UI/design/Logo";

const Header: React.FC = () => {
  return (
    <Container>
      <Logo color={"white"} withinText />

      <NavBar>
        <NavList>
          <li>О нас</li>
          <li>Услуги</li>
          <li>Врачи</li>
          <li>Филиалы</li>
          <li>Контакты</li>
        </NavList>

        <ButtonUI title="Запись онлайн" customStyle={styleBtn} />
      </NavBar>
    </Container>
  );
};

export default Header;

const Container = styled("div")({
  position: "fixed",
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px 150px",
  backgroundColor: "#00b5d1",
  zIndex: 10000,
});

const NavBar = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "20px",
});

const NavList = styled("div")({
  display: "flex",
  alignItems: "flex-start",
  gap: "10px",
});

const styleBtn: React.CSSProperties = {
  border: "2px solid #eee",
  borderRadius: "10px",
  color: "#eee",
  margin: 0,
};
