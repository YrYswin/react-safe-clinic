import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getServiceCategory } from "./action";
import {
  ServiceCategorySliceState,
  ServiceCategoryState,
  Status,
} from "./types";
import { RootState } from "../store";

const initialState: ServiceCategorySliceState = {
  items: [],
  Status: Status.LOADING,
};

export const serviceCategorySlice = createSlice({
  name: "serviceCategory",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getServiceCategory.pending, (state) => {
      state.Status = Status.LOADING;
    });
    builder.addCase(
      getServiceCategory.fulfilled,
      (state, action: PayloadAction<ServiceCategoryState[]>) => {
        state.Status = Status.SUCCESS;
        state.items = action.payload;
      }
    );
    builder.addCase(getServiceCategory.rejected, (state) => {
      state.Status = Status.ERROR;
    });
  },
});

export const selectSerCat = (state: RootState) => state.serviceCategory;

export default serviceCategorySlice;
