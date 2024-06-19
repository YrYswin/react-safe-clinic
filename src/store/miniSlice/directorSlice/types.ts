export interface DirectorSliceState {
  items: DirectorState[];
  Status: Status;
}

export type DirectorState = {
  id: number;
  name: string;
};

export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}
