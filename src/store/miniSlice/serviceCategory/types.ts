export interface ServiceCategorySliceState {
  items: ServiceCategoryState[];
  Status: Status;
}

export type ServiceCategoryState = {
  id: number;
  name: string;
};

export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}
