import { RootState } from '../../store';

export const selectContentData = (state: RootState) => state.content.contentData;
export const selectContentStatus = (state: RootState) => state.content.status;