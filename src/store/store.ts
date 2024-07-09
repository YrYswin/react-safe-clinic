import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import filtersSlice from "./filtersSlice/slice";
import branchesSlice from "./branchesSlice/slice";
import serviceSlice from "./serviceSlice/slice";
import doctorsSlice from "./doctorsSlice/slice";
import patientsSlice from "./patientsSlice/slice";
import directorSlice from "./miniSlice/directorSlice/slice";
import serviceCategorySlice from "./miniSlice/serviceCategory/slice";
import userSlice from "./userSlice/slice";

export const store = configureStore({
  reducer: {
    filters: filtersSlice,
    [branchesSlice.name]: branchesSlice.reducer,
    [serviceSlice.name]: serviceSlice.reducer,
    [doctorsSlice.name]: doctorsSlice.reducer,
    [patientsSlice.name]: patientsSlice.reducer,
    [directorSlice.name]: directorSlice.reducer,
    [serviceCategorySlice.name]: serviceCategorySlice.reducer,
    [userSlice.name]: userSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
