import { RootState } from '../../store';

export const selectContentData = (state: RootState) => state.content.contentData;