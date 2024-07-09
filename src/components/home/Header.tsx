import React from "react";
import ButtonUI from "../UI/function/ButtonUI";
import styled from "styled-components";
import Logo from "../UI/design/Logo";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { userSelector } from "../../store/userSlice/slice";
import { FlexBox } from "./styles";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const { isLogin } = useSelector(userSelector);
  return (
    <>
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

          {isLogin ? (
            <FlexBox gap={30}>
              <ButtonUI
                title="Запись онлайн"
                customStyle={styleBtn}
                click={() => console.log("Вы зарегестрированы")}
              />
              <Avatar onClick={() => navigate("client/my-notes")}>
                <img src="/image/Avatar.jpg" alt="RobertDeNiro" />
              </Avatar>
            </FlexBox>
          ) : (
            <FlexBox gap={30}>
              <ButtonUI
                title="Войти"
                customStyle={styleBtn}
                click={() => navigate("/userLogin")}
              />
              <ButtonUI
                title="Зарегестрироваться"
                customStyle={styleBtn}
                click={() => navigate("/userAuth")}
              />
            </FlexBox>
          )}
        </NavBar>
      </Container>
    </>
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
  zIndex: 50,
});

const NavBar = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "100px",
});

const NavList = styled("div")({
  display: "flex",
  alignItems: "flex-start",
  gap: "30px",

  li: {
    cursor: "pointer",
    fontSize: "18px",
  },
});

const styleBtn: React.CSSProperties = {
  border: "2px solid #eee",
  borderRadius: "10px",
  color: "#eee",
  margin: 0,
};

const Avatar = styled("div")({
  width: "clamp(40px , 50px, 60px)",
  height: "clamp(40px , 50px, 60px)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "50%",
  overflow: "hidden",
  border: "2px solid white",

  img: {
    width: "100%",
    objectFit: "cover",
  },
});
