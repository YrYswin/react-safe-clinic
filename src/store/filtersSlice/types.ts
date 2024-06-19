import { GenderState } from "../../utils/types";

export interface FilterSliceState {
  doctors: DoctorFilterState;
  patients: PatientsFilterState;
  services: string;
  branches: string;
}

interface DoctorFilterState {
  search: string;
  gender: GenderState;
  age: string;
  tag: number;
}

interface PatientsFilterState {
  search: string;
  gender: GenderState;
  age: string;
}
