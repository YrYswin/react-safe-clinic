import { axiosInstance, axiosWithFile } from "../../api/axiosInstance";
import { ParamsState } from "./action";
import { DoctorsState } from "./types";
import { CreateDoctorsState } from "./types";
///GET///
export const getDoctorsListReq = (params: ParamsState) => {
  const { tag, genderDoc } = params;
  console.log(tag, genderDoc);
  return axiosInstance.get(`doctor/?gender=${genderDoc}`);
};

export const getOneDoctorReq = (id: number) => {
  return axiosInstance.get(`doctor/${id}`);
};
///POST///
export const postDoctorReq = (data: CreateDoctorsState) => {
  return axiosWithFile.post("doctor/", data);
};
///DELETE///
export const deleteDoctorReq = (id: number) => {
  return axiosInstance.delete(`doctor/${id}`);
};
///PATCH///
export const patchDoctorReq = (id: number, data: DoctorsState) => {
  return axiosWithFile.patch(`doctor/${id}`, data);
};
