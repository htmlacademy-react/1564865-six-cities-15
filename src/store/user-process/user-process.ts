import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, AuthorizationStatus, defaultUser } from '../../const';
import { UserProcess } from '../../types/user-process';
import { checkAuthAction, loginAction, logoutAction } from '../api-action';

const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
  user: defaultUser,
};

export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {
    changeAuthorizationStatus: (state) => {
      state.authorizationStatus = AuthorizationStatus.NoAuth;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(loginAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.user = action.payload;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(checkAuthAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.user = action.payload;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.user = defaultUser;
      });
  }
});

export const { changeAuthorizationStatus } = userProcess.actions;
