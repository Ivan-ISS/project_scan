import { RootState } from '../../store';

export const selectUserInfo = (state: RootState) => state.user.userInfo;
export const selectUserInfoStatus = (state: RootState) => state.user.status;