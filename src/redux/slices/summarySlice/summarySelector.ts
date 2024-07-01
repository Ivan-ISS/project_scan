import { RootState } from '../../store';

export const selectPublicationSummary = (state: RootState) => state.summary.summaryData;
export const selectSummaryStatus = (state: RootState) => state.summary.status;