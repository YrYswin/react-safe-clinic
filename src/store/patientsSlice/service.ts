import { axiosInstance } from "../../api/axiosInstance";
import { ParamsState } from "./action";
import { PatientState } from "./types";

///GET///
export const getPatientsReq = (params: ParamsState) => {
  const { genderPat } = params;
  return axiosInstance.get(
    `patient/?gender=${genderPat}&birthday=&date_of_appointment=`
  );
};
///GET by ID///
export const getOnePatientReq = (id: number) => {
  return axiosInstance.get(`patient/${id}`);
};
///POST///
export const postPatientsReq = (data: PatientState) => {
  return axiosInstance.post("patient/", data);
};
///PATCH///
export const patchPatientsReq = (id: number, data: PatientState) => {
  return axiosInstance.patch(`patient/${id}/`, data);
};
///DELETE///
export const deletePatientReq = (id: number) => {
  return axiosInstance.delete(`patient/${id}`);
};
