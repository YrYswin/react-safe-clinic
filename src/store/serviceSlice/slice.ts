import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ServiceSliceState, ServiceState, Status } from "./types";
import { getService } from "./action";
import { RootState } from "../store";

const initialState: ServiceSliceState = {
  items: [],
  status: Status.LOADING,
};

const serviceSlice = createSlice({
  name: "service",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getService.fulfilled,
      (state, action: PayloadAction<ServiceState[]>) => {
        state.items = action.payload;
        state.status = Status.SUCCESS;
      }
    );
    builder.addCase(getService.pending, (state) => {
      state.status = Status.LOADING;
    });
    builder.addCase(getService.rejected, (state) => {
      state.status = Status.ERROR;
    });
  },
});

export const selectService = (state: RootState) => state.service;

export default serviceSlice;
