import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { userLogin, userRegister } from "./action";
import { TokenState, userSliceState, Status } from "./types";
import { getTokenLS } from "../../utils";
import { RootState } from "../store";

const initialState: userSliceState = {
  tokens: getTokenLS(),
  status: Status.LOADING,
  isLogin: getTokenLS() ? true : false,
  registerError: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    clearRegisterError(state) {
      state.registerError = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userRegister.pending, (state) => {
        state.status = Status.LOADING;
      })
      .addCase(userRegister.fulfilled, (state) => {
        state.status = Status.SUCCESS;
      })
      .addCase(
        userRegister.rejected,
        (state, { payload }: PayloadAction<any>) => {
          state.status = Status.ERROR;
          state.registerError = payload;
        }
      );

    builder
      .addCase(userLogin.pending, (state) => {
        state.status = Status.LOADING;
      })
      .addCase(
        userLogin.fulfilled,
        (state, { payload }: PayloadAction<TokenState>) => {
          localStorage.setItem("clinic_token", JSON.stringify(payload));
          state.status = Status.SUCCESS;
          state.isLogin = true;
        }
      )
      .addCase(userLogin.rejected, (state) => {
        state.status = Status.ERROR;
      });
  },
});

export const userSelector = (state: RootState) => state.user;
export const { clearRegisterError } = userSlice.actions;
export default userSlice;
