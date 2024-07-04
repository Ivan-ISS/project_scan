import { RootState } from '../../store';

export const selectDocumentsDate = (state: RootState) => state.documents.documentsData;
export const selectLazyNumber = (state: RootState) => state.documents.lazyNumber;
export const selectLazyStep = (state: RootState) => state.documents.lazyStep;
export const selectLazyLimit = (state: RootState) => state.documents.lazyLimit;