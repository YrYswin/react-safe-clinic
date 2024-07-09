export interface userSliceState {
  tokens: TokenState | null;
  status: Status;
  isLogin: boolean;
  registerError: any;
}

// export interface ValidationState {
//   field: string;
//   message: string;
// }

export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

export interface UserRegisterForm {
  email: string;
  username: string;
  first_name: string;
  last_name: string;
  password: string;
  password2: string;
  photo: File;
  birthday: string;
  gender: string;
}

export interface userLoginForm {
  username: string;
  password: string;
}

export interface TokenState {
  refresh: string;
  access: string;
}
