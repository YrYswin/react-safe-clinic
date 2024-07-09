import React from "react";
import { useSelector } from "react-redux";
import {
  useForm,
  Controller,
  useFormState,
  SubmitHandler,
} from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";

import { Button, TextField, styled, FormHelperText } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import { UserRegisterForm, userLoginForm } from "../../store/userSlice/types";
import { userLogin, userRegister } from "../../store/userSlice/action";
import { clearRegisterError, userSelector } from "../../store/userSlice/slice";
import { useAppDispatch } from "../../store/store";

import ModalMenu from "../UI/function/Modal";
import Logo from "../UI/design/Logo";
import { Container, FormStyle } from "./styles";
import {
  emailValidation,
  firstNameValidation,
  lastNameValidation,
  password2Validation,
  passwordValidation,
  usernameValidation,
} from "./validation";

const UserAuth: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const isLogin: boolean = location.pathname === "/userLogin";
  const { registerError } = useSelector(userSelector);

  const { handleSubmit, control, getValues, setError } =
    useForm<UserRegisterForm>({
      defaultValues: {
        username: "",
        email: "",
        first_name: "",
        last_name: "",
        password: "",
        password2: "",
      },
    });
  const { errors } = useFormState({
    control,
  });
  React.useEffect(() => {
    if (registerError) {
      if (registerError.username) {
        setError("username", {
          type: "manual",
          message: "К сажелению данный Nickname уже занят, Попробуте другой",
        });
      }
      if (registerError.email) {
        setError("email", {
          type: "manual",
          message: "К сажелению данный Email уже занят, Попробуте другой",
        });
      }
      dispatch(clearRegisterError());
    }
  }, [registerError, setError, dispatch]);

  const onLogin: SubmitHandler<userLoginForm> = async (data) => {
    try {
      dispatch(userLogin({ userData: data, navigate }));
    } catch (err) {
      console.log(err);
    }
  };

  const onRegister: SubmitHandler<UserRegisterForm> = async (data) => {
    try {
      dispatch(userRegister({ userData: data, navigate }));
    } catch (err: any) {
      console.log(err);
    }
  };

  return (
    <ModalMenu width={600}>
      <ContainerStyle>
        <Logo textSize={40} titleText={isLogin ? "Вход" : "Регистрация"} />

        {isLogin ? (
          <FormStyle onSubmit={handleSubmit(onLogin)}>
            <Controller
              control={control}
              name="username"
              rules={usernameValidation}
              render={({ field }) => (
                <TextFieldStyle
                  {...field}
                  id="username"
                  error={!!errors.username}
                  label={"Введите свой Nickname"}
                  variant="outlined"
                  fullWidth
                />
              )}
            />
            <FormHelperText error={!!errors.username} style={styleHelper}>
              {errors.username ? errors.username.message : ""}
            </FormHelperText>
            <Controller
              control={control}
              name="password"
              rules={passwordValidation}
              render={({ field }) => (
                <TextFieldStyle
                  {...field}
                  error={!!errors.password}
                  id="password"
                  label={"Пароль"}
                  variant="outlined"
                  fullWidth
                />
              )}
            />
            <FormHelperText error={!!errors.password} style={styleHelper}>
              {errors.password ? errors.password.message : ""}
            </FormHelperText>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Submit
            </Button>
          </FormStyle>
        ) : (
          <FormStyle onSubmit={handleSubmit(onRegister)}>
            <Controller
              control={control}
              name="username"
              rules={usernameValidation}
              render={({ field }) => (
                <TextFieldStyle
                  {...field}
                  id="username"
                  error={!!errors.username}
                  label={"Введите свой Nickname"}
                  variant="outlined"
                  fullWidth
                />
              )}
            />
            <FormHelperText error={!!errors.username} style={styleHelper}>
              {errors.username ? errors.username.message : ""}
            </FormHelperText>
            <Controller
              control={control}
              name="email"
              rules={emailValidation}
              render={({ field }) => (
                <TextFieldStyle
                  {...field}
                  error={!!errors.email}
                  id="email"
                  label={"Email"}
                  variant="outlined"
                  fullWidth
                />
              )}
            />
            <FormHelperText error={!!errors.email} style={styleHelper}>
              {errors.email ? errors.email.message : ""}
            </FormHelperText>
            <div style={{ display: "flex", gap: "10px" }}>
              <div>
                <Controller
                  control={control}
                  name="first_name"
                  rules={firstNameValidation}
                  render={({ field }) => (
                    <TextFieldStyle
                      {...field}
                      error={!!errors.first_name}
                      id="first_name"
                      label={"Имя"}
                      variant="outlined"
                      fullWidth
                    />
                  )}
                />
                <FormHelperText error={!!errors.first_name} style={styleHelper}>
                  {errors.first_name ? errors.first_name.message : ""}
                </FormHelperText>
              </div>
              <div>
                <Controller
                  control={control}
                  name="last_name"
                  rules={lastNameValidation}
                  render={({ field }) => (
                    <TextFieldStyle
                      {...field}
                      error={!!errors.last_name}
                      id="last_name"
                      label={"Фамилия"}
                      variant="outlined"
                      fullWidth
                    />
                  )}
                />
                <FormHelperText error={!!errors.last_name} style={styleHelper}>
                  {errors.last_name ? errors.last_name.message : ""}
                </FormHelperText>
              </div>
            </div>
            <Controller
              control={control}
              name="password"
              rules={passwordValidation}
              render={({ field }) => (
                <TextFieldStyle
                  {...field}
                  error={!!errors.password}
                  id="password"
                  label={"Пароль"}
                  variant="outlined"
                  fullWidth
                />
              )}
            />
            <FormHelperText error={!!errors.password} style={styleHelper}>
              {errors.password ? errors.password.message : ""}
            </FormHelperText>
            <Controller
              control={control}
              name="password2"
              rules={password2Validation(getValues)}
              render={({ field }) => (
                <TextFieldStyle
                  {...field}
                  error={!!errors.password2}
                  id="password2"
                  label={"Повторите пароль"}
                  variant="outlined"
                  fullWidth
                />
              )}
            />
            <FormHelperText error={!!errors.password2} style={styleHelper}>
              {errors.password2 ? errors.password2.message : ""}
            </FormHelperText>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Submit
            </Button>
          </FormStyle>
        )}

        <ExitBox onClick={() => navigate("/")}>
          <CloseIcon sx={{ color: "rgb(150,150,150,.5)", fontSize: 40 }} />
        </ExitBox>
      </ContainerStyle>
    </ModalMenu>
  );
};

export default UserAuth;

const ContainerStyle = styled(Container)({
  position: "relative",
});
const ExitBox = styled("div")({
  position: "absolute",
  top: "20px",
  right: "20px",
  cursor: "pointer",
  transition: "transform 0.4s ease-in-out",
  "&:hover": {
    transform: "scale(1.3) rotate(90deg)",
  },
});

const TextFieldStyle = styled(TextField)({
  marginTop: 0,
  marginBottom: 0,
  ".css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root": {
    transform: "translate(14px, 9px) scale(1)",
  },
  "::-webkit-transform": {
    transform: "translate(14px, 9px) scale(1)",
  },
  "&>div>input": {
    padding: "8px 15px",
  },
});
const styleHelper: React.CSSProperties = {
  minHeight: "1.5em",
  marginBottom: "0.5em",
};
