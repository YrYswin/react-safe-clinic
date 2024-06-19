import { RootState } from "../store";

// Service filters
export const selectSearchService = (state: RootState) => state.filters.services;

// Branch filters
export const selectSearchBranches = (state: RootState) =>
  state.filters.branches;

// Patients filters
export const selectFilterPatients = (state: RootState) =>
  state.filters.patients;

// Doctors filters
export const selectFilterDoctors = (state: RootState) => state.filters.doctors;
