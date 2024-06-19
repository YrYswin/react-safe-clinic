export interface ServiceSliceState {
  items: ServiceState[];
  status: Status;
}

export type ServiceState = {
  id: number;
  name: string;
  description: string;
  photo: string;
  price: number;
  category: number;
};

export type CreateServiceState = {
  name: string;
  description: string;
  photo: File | undefined;
  price: number;
  category: number;
};

export type EditServiceState = {
  id: number;
  name: string;
  description: string;
  photo: File | undefined | string;
  price: number;
  category: number;
};

export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}
