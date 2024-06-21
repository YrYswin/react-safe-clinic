import React from "react";
import { Container, styled } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { tagArray } from "../../utils/constant";

import ButtonUI from "../UI/function/ButtonUI";
import FormInput from "../UI/authorized/FormInput";
import FormSelect from "../UI/authorized/FormSelect";
import Logo from "../UI/design/Logo";

const Auth: React.FC = () => {
  const navigate = useNavigate();
  return (
    <ContainerStyle>
      <Logo textSize={40} withTitle={true} />
      <AuthForm>
        <FormSelect
          icon={"/icon/tagsIcon.svg"}
          tags={tagArray}
          title={"Теги"}
        />
        <FormInput icon={"/icon/nameIcon.svg"} title={"Имя"} />
        <FormInput icon={"/icon/passwordIcon.svg"} title={"Пароль"} />

        <ButtonUI
          title="Войти на сайт"
          customStyle={styleBtn}
          click={() => navigate("/admin/analytics")}
        />
      </AuthForm>
    </ContainerStyle>
  );
};

export default Auth;

const ContainerStyle = styled(Container)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "30px",
  height: "100vh",
});

const AuthForm = styled("form")({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
});

const styleBtn: React.CSSProperties = {
  backgroundColor: "#53a8bb",
  color: "white",
};
