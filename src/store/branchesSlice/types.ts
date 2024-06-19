export type BranchesSliceState = {
  items: BranchState[];
  count: number;
  status: Status;
};

export type BranchState = {
  id: number;
  name: string;
  address: string;
  director: number;
  phone_number: string;
};
export type CreateBranchState = {
  name: string;
  address: string;
  director: number;
  phone_number: string;
};
export type EditBranchState = {
  id: number;
  name: string;
  address: string;
  director: number;
  phone_number: string;
};

export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}
