import { createAsyncThunk } from "@reduxjs/toolkit";
import { getDoctorsListReq, postDoctorReq, patchDoctorReq } from "./service";
import { CreateDoctorsState, DoctorsArrayState, DoctorsState } from "./types";
import { GenderState } from "../../utils/types";

export type ParamsState = {
  genderDoc: GenderState;
};

export const getDoctorsList = createAsyncThunk<
  DoctorsArrayState[],
  ParamsState,
  { rejectValue: string }
>("doctor/getDoctorsList", async (params, { rejectWithValue }) => {
  try {
    const { data } = await getDoctorsListReq(params);
    return data.results;
  } catch (error) {
    return rejectWithValue("error coding");
  }
});

export const postDoctor = createAsyncThunk<
  object,
  CreateDoctorsState,
  { rejectValue: string }
>("doctor/postDoctor", async (dataDoctor, { rejectWithValue }) => {
  try {
    const { data } = await postDoctorReq(dataDoctor);
    return data;
  } catch (error) {
    return rejectWithValue("Something went wrong!!!");
  }
});

export const patchDoctor = createAsyncThunk<object, DoctorsState>(
  "doctor/patchDoctor",
  async (dataDoctor) => {
    try {
      const { data } = await patchDoctorReq(dataDoctor.id, dataDoctor);
      return data;
    } catch (err) {
      console.warn(err);
    }
  }
);
