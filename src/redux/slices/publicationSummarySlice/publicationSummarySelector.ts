import { RootState } from '../../store';

export const selectPublicationSummary = (state: RootState) => state.publicationSummary.publicationSummary;
export const selectSummaryStatus = (state: RootState) => state.publicationSummary.status;