export interface DoctorsSliceState {
  items: DoctorsArrayState[];
  status: Status;
}

export type DoctorsArrayState = {
  id: number;
  name: string;
  email: string;
  tag: string;
  client: number;
  photo: string;
};

export type DoctorsState = {
  id: number;
  name: string;
  email: string;
  address: string;
  phone_number: string;
  birthday: string;
  gender: string;
  photo: File | undefined;
  tag: string;
  client: number;
};
export type EditDoctorsState = {
  name: string;
  email: string;
  address: string;
  phone_number: string;
  birthday: string;
  gender: string;
  photo: File | undefined;
  tag: string;
  client: number;
};

export type CreateDoctorsState = {
  name: string;
  email: string;
  birthday: string;
  address: string;
  phone_number: string;
  gender: string;
  photo: File | undefined;
  client: number;
  tag: number;
};

export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}
