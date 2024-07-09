import { axiosInstance, axiosWithFile } from "../../api/axiosInstance";
import { UserRegisterForm, userLoginForm } from "./types";

export const userRegisterReq = (data: UserRegisterForm) => {
  return axiosWithFile.post("api/user/register/", data);
};

export const userLoginReq = (data: userLoginForm) => {
  return axiosInstance.post("api/user/login/", data);
};
