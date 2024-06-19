export interface FilterSliceState {
  doctors: DoctorFilterState;
  patients: PatientsFilterState;
  services: string;
  branches: string;
}

interface DoctorFilterState {
  search: string;
  gender: GenderEnums;
  age: string;
  tag: number;
}

interface PatientsFilterState {
  search: string;
  gender: GenderEnums;
  age: string;
}

export enum GenderEnums {
  MALE = "Мужской",
  FAMALE = "Женский",
  ALL = "",
}
