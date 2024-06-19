import { axiosInstance } from "../../../api/axiosInstance";
///GET///
export const getDirectorReq = () => {
  return axiosInstance.get("director/");
};
