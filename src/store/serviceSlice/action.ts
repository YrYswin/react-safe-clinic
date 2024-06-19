import { createAsyncThunk } from "@reduxjs/toolkit";
import { CreateServiceState, EditServiceState, ServiceState } from "./types";
import { getServiceReq, postServiceReq, patchServiceReq } from "./service";

export const getService = createAsyncThunk<
  ServiceState[],
  void,
  { rejectValue: string }
>("service/getService", async (_, { rejectWithValue }) => {
  try {
    const { data } = await getServiceReq();
    return data.results;
  } catch (err) {
    return rejectWithValue("Something went wrong!!!");
  }
});

export const postService = createAsyncThunk<
  object,
  CreateServiceState,
  { rejectValue: string }
>("branch/postFilial", async (dataService, { rejectWithValue }) => {
  try {
    const { data } = await postServiceReq(dataService);
    return data;
  } catch (error) {
    return rejectWithValue("Something went wrong!!!");
  }
});

export const patchService = createAsyncThunk<object, EditServiceState>(
  "branch/patchFilial",
  async (dataService) => {
    try {
      const { data } = await patchServiceReq(dataService.id, dataService);
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);
