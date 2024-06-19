import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { getDoctorsList } from "./action";
import { DoctorsSliceState, Status, DoctorsArrayState } from "./types";

const initialState: DoctorsSliceState = {
  items: [],
  status: Status.LOADING,
};

const doctorsSlice = createSlice({
  name: "doctors",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getDoctorsList.pending, (state) => {
        state.status = Status.LOADING;
      })
      .addCase(
        getDoctorsList.fulfilled,
        (state, action: PayloadAction<DoctorsArrayState[]>) => {
          state.status = Status.SUCCESS;
          state.items = action.payload;
        }
      )
      .addCase(getDoctorsList.rejected, (state) => {
        state.status = Status.ERROR;
      });
  },
});

export const selectDoc = (state: RootState) => state.doctors;

export default doctorsSlice;
