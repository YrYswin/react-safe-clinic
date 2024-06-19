import { createAsyncThunk } from "@reduxjs/toolkit";
import { getDirectorReq } from "./service";
import { DirectorState } from "./types";

export const getDirector = createAsyncThunk<
  DirectorState[],
  void,
  { rejectValue: string }
>("director/getDirector", async (_, { rejectWithValue }) => {
  try {
    const { data } = await getDirectorReq();
    return data.results;
  } catch (error) {
    return rejectWithValue("error coding");
  }
});
