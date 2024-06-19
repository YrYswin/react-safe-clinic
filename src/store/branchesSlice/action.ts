import { createAsyncThunk } from "@reduxjs/toolkit";
import { getFilialReq, patchFilialReq, postFilialReq } from "./service";
import { CreateBranchState, BranchState, EditBranchState } from "./types";

export const getBranches = createAsyncThunk<
  BranchState[],
  void,
  { rejectValue: string }
>("branch/getFilial", async (_, { rejectWithValue }) => {
  try {
    const { data } = await getFilialReq();
    return data.results;
  } catch (error) {
    return rejectWithValue("Something went wrong!!!");
  }
});

export const postBranch = createAsyncThunk<
  object,
  CreateBranchState,
  { rejectValue: string }
>("branch/postFilial", async (dataFilial, { rejectWithValue }) => {
  try {
    const { data } = await postFilialReq(dataFilial);
    return data;
  } catch (error) {
    return rejectWithValue("Something went wrong!!!");
  }
});

export const patchBranch = createAsyncThunk<object, EditBranchState>(
  "branch/patchFilial",
  async (dataFilial) => {
    try {
      const { data } = await patchFilialReq(dataFilial.id, dataFilial);
      return data;
    } catch (err) {
      return err;
    }
  }
);
