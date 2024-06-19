import { axiosInstance } from "../../api/axiosInstance";
import { CreateBranchState, BranchState } from "./types";
///GET///
export const getFilialReq = () => {
  return axiosInstance.get("branch/");
};
///POST///
export const postFilialReq = (dataBranch: CreateBranchState) => {
  return axiosInstance.post("branch/", dataBranch);
};
///DELETE///
export const deleteFilialReq = (id: number) => {
  return axiosInstance.delete(`branch/${id}/`);
};
///PATCH///
export const patchFilialReq = (id: number, branchEdit: BranchState) => {
  return axiosInstance.patch(`branch/${id}/`, branchEdit);
};
