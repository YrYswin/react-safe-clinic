import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getPatientsReq,
  postPatientsReq,
  getOnePatientReq,
  patchPatientsReq,
} from "./service";
import { PatientArrayState, PatientState } from "./types";
import { GenderState } from "../filter/slice";

export type ParamsState = {
  genderPat: GenderState;
};

// Получаем список пациентов
export const getPatients = createAsyncThunk<
  PatientArrayState[],
  ParamsState,
  { rejectValue: string }
>("patients/getPatients", async (params, { rejectWithValue }) => {
  try {
    const { data } = await getPatientsReq(params);
    return data.results;
  } catch (error) {
    return rejectWithValue("error coding");
  }
});

// Получаем одного пациента
export const getOnePatient = createAsyncThunk<
  PatientState,
  number,
  { rejectValue: string }
>("patient/getOnePatient", async (id, { rejectWithValue }) => {
  try {
    const { data } = await getOnePatientReq(id);
    console.log(data, id);
    return data;
  } catch (err) {
    return rejectWithValue("Something went wrong!!!");
  }
});

// Создаем нового пациента
export const postPatients = createAsyncThunk<
  object,
  PatientState,
  { rejectValue: string }
>("patient/postPatients", async (patientData, { rejectWithValue }) => {
  try {
    const { data } = await postPatientsReq(patientData);
    return data;
  } catch (err) {
    return rejectWithValue("Something went wrong!!!");
  }
});

// Редактируем существующего пациента
export const patchPatients = createAsyncThunk<object, PatientState>(
  "patient/patchPatient",
  async (editData) => {
    try {
      const { data } = await patchPatientsReq(editData.id, editData);
      return data;
    } catch (err) {
      return err;
    }
  }
);
