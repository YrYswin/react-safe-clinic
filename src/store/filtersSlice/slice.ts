import { createSlice } from "@reduxjs/toolkit";
import { FilterSliceState } from "./types";
import { GenderState } from "../../utils/types";

const initialState: FilterSliceState = {
  doctors: {
    search: "",
    gender: GenderState.ALL,
    age: "",
    tag: 0,
  },
  patients: {
    search: "",
    gender: GenderState.ALL,
    age: "",
  },
  services: "",
  branches: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    // ========== Service reducer ===========
    setServicesSearch: (state, action) => {
      state.services = action.payload;
    },

    // ========== Branches reducer ===========
    setBranchsSearch: (state, action) => {
      state.branches = action.payload;
    },

    // ========== Patients reducer ===========
    setPatientsSearch: (state, action) => {
      state.patients.search = action.payload;
    },
    setPatientsAge: (state, action) => {
      state.patients.age = action.payload;
    },
    setPatientsGender: (state, action) => {
      state.patients.gender = action.payload;
    },

    // ========== Doctors reducer ===========
    setDoctorsSearch: (state, action) => {
      state.doctors.search = action.payload;
    },
    setDoctorsAge: (state, action) => {
      state.doctors.age = action.payload;
    },
    setDoctorsGender: (state, action) => {
      state.doctors.gender = action.payload;
    },
    setDoctorTag: (state, action) => {
      state.doctors.tag = action.payload;
    },
  },
});
export const {
  setDoctorsSearch,
  setPatientsSearch,
  setServicesSearch,
  setBranchsSearch,
  setPatientsAge,
  setDoctorsAge,
  setPatientsGender,
  setDoctorsGender,
  setDoctorTag,
} = filtersSlice.actions;

export default filtersSlice.reducer;
