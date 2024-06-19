import { createAsyncThunk } from "@reduxjs/toolkit";
import { getServiceCategoryReq } from "./service";
import { ServiceCategoryState } from "./types";

export const getServiceCategory = createAsyncThunk<
  ServiceCategoryState[],
  void,
  { rejectValue: string }
>("director/getDirector", async (_, { rejectWithValue }) => {
  try {
    const { data } = await getServiceCategoryReq();
    return data.results;
  } catch (error) {
    return rejectWithValue("error coding");
  }
});
