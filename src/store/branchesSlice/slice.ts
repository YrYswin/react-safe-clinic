import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BranchesSliceState, BranchState, Status } from "./types";
import { getBranches } from "./action";
import { RootState } from "../store";

const initialState: BranchesSliceState = {
  items: [],
  count: 0,
  status: Status.LOADING,
};

const filialSlice = createSlice({
  name: "branchs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        getBranches.fulfilled,
        (state, action: PayloadAction<BranchState[]>) => {
          state.items = action.payload;
          state.status = Status.SUCCESS;
        }
      )
      .addCase(getBranches.pending, (state) => {
        state.status = Status.LOADING;
      })
      .addCase(getBranches.rejected, (state) => {
        state.status = Status.ERROR;
      });
  },
});
export const selectBranch = (state: RootState) => state.branchs;

export default filialSlice;
