import { RootState } from '../../store';

export const selectTokenAccess = (state: RootState) => state.auth.tokenAccess;
export const selectTokenExpire = (state: RootState) => state.auth.tokenExpire;
export const selectAuthError = (state: RootState) => state.auth.error;