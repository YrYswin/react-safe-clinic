import { axiosInstance, axiosWithFile } from "../../api/axiosInstance";
import { EditServiceState } from "./types";
import { CreateServiceState } from "./types";
///GET///
export const getServiceReq = () => {
  return axiosInstance.get("service/");
};
///POST///
export const postServiceReq = (dataBranch: CreateServiceState) => {
  return axiosWithFile.post("service/", dataBranch);
};
///DELETE///
export const deleteServiceReq = (id: number) => {
  return axiosInstance.delete(`service/${id}/`);
};
///PATCH///
export const patchServiceReq = (id: number, branchEdit: EditServiceState) => {
  return axiosWithFile.patch(`service/${id}/`, branchEdit);
};
