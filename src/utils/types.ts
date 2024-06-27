export interface NavigateListState {
  admin: NavigateState[];
  doctor: NavigateState[];
  director: NavigateState[];
  client: NavigateState[];
}

export interface NavigateState {
  pathname: string;
  name: string;
  icon: string;
}

export type searchParamsState = {
  key: string;
  label: string;
  children: childrenState[];
};

export type childrenState = {
  key: string;
  label: string;
};
export type tagState = {
  id: number;
  name: string;
  label: string;
};
export enum GenderState {
  MALE = "Мужской",
  FAMALE = "Женский",
  ALL = "",
}

export type HourState = {
  id: number;
  time: string;
  duration: number;
};
