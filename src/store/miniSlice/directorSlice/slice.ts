import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getDirector } from "./action";
import { DirectorSliceState, DirectorState, Status } from "./types";
import { RootState } from "../store";

const initialState: DirectorSliceState = {
  items: [],
  Status: Status.LOADING,
};

export const directorSlice = createSlice({
  name: "director",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDirector.pending, (state) => {
      state.Status = Status.LOADING;
    });
    builder.addCase(
      getDirector.fulfilled,
      (state, action: PayloadAction<DirectorState[]>) => {
        state.Status = Status.SUCCESS;
        state.items = action.payload;
      }
    );
    builder.addCase(getDirector.rejected, (state) => {
      state.Status = Status.ERROR;
    });
  },
});

export const selectDirector = (state: RootState) => state.director.items;

export default directorSlice;
