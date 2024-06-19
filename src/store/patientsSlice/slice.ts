import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { PatientArrayState, PatientsSliceState, Status } from "./types";
import { getPatients } from "./action";
import { RootState } from "../store";

const initialState: PatientsSliceState = {
  items: [],
  status: Status.LOADING,
};

const patientsSlice = createSlice({
  name: "patients",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPatients.pending, (state) => {
        state.status = Status.LOADING;
      })
      .addCase(
        getPatients.fulfilled,
        (state, action: PayloadAction<PatientArrayState[]>) => {
          state.status = Status.SUCCESS;
          state.items = action.payload;
        }
      )
      .addCase(getPatients.rejected, (state) => {
        state.status = Status.ERROR;
      });
  },
});

export const selectPatients = (state: RootState) => state.patients;

export default patientsSlice;
