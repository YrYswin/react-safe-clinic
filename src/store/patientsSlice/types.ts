export interface PatientsSliceState {
  items: PatientArrayState[];
  status: Status;
}

export type PatientArrayState = {
  id: number;
  full_name: string;
  phone_number: string;
  address: string;
  date_of_appointment: string;
  time_of_appointment: string;
  timeHourStart?: number;
  timeHourEnd?: number;
  weekDay?: number;
};

export type PatientState = {
  id: number;
  full_name: string;
  phone_number: string;
  address: string;
  gender: Gender;
  complaints: string;
  date_of_appointment: string | null;
  time_of_appointment: string | null;
  recording: number;
};

export enum Gender {
  MALE = "Мужской",
  FAMALE = "Женский",
  ALL = "",
}

export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}
