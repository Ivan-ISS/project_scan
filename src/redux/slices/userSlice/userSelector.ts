import { RootState } from '../../store';

export const selectUserInfo = (state: RootState) => state.user.userInfo;
export const selectUserInfoStatus = (state: RootState) => state.user.status;
export const selectUserName = (state: RootState) => state.user.userName;
export const selectUserTariff = (state: RootState) => state.user.userTariff;