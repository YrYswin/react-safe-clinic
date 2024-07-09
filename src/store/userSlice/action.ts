import { createAsyncThunk } from "@reduxjs/toolkit";
import { UserRegisterForm, userLoginForm } from "./types";
import { userRegisterReq, userLoginReq } from "./service";
import { NavigateFunction } from "react-router-dom";

export const userRegister = createAsyncThunk(
  "post/userRegister",
  async (
    {
      userData,
      navigate,
    }: { userData: UserRegisterForm; navigate: NavigateFunction },
    { rejectWithValue }
  ) => {
    try {
      console.log(userData);
      const res = await userRegisterReq(userData);
      console.log(res);
      if (res.status === 201) {
        alert("Вы успешно зарегестрировались");
        navigate("/userLogin");
      }
    } catch (err: any) {
      console.log(err);
      if (err.response && err.response.data) {
        return rejectWithValue(err.response.data); // Передаем данные об ошибке
      }
      return rejectWithValue(err);
    }
  }
);

export const userLogin = createAsyncThunk(
  "post/userLogin",
  async (
    {
      userData,
      navigate,
    }: { userData: userLoginForm; navigate: NavigateFunction },
    { rejectWithValue }
  ) => {
    try {
      const res = await userLoginReq(userData);
      if (res.status === 200) {
        alert("Вы успешно вошли в ситему");
        navigate("/");
        return res.data;
      }
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);
