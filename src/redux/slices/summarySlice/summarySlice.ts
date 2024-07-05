import { ISearchData, ISummaryResponse, ISummary } from '../../../types/scanTypes';
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { prepareDataToRequest } from '../../../utils/prepareDataToRequest';
import { prepareDataSummary } from '../../../utils/prepareDataSummary';
import routes from '../../../routes';

export interface FetchSummaryArgs {
    tokenAccess: string;
    requestData: ISearchData;
}

export interface FetchSummaryError {
    message: string;
}

export const fetchSummary = createAsyncThunk<
        ISummaryResponse,
        FetchSummaryArgs,
        {rejectValue: FetchSummaryError | undefined}
    >(
    'summary/fetch',
    async ({ tokenAccess, requestData }, thunkAPI) => {
        try {
            const response = await fetch(routes.urlSummary(), {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${tokenAccess}`
                },
                body: JSON.stringify(prepareDataToRequest(requestData)),
            });

            if (!response.ok) {
                const error = await response.json();
                // console.log('Ошибка ответа (статус не 200): ', error);
                return thunkAPI.rejectWithValue({ message: error } as FetchSummaryError);
            }
    
            const data = await response.json();
            // console.log('Данные с сервера: ', data);
            return data;
        } catch (error) {
            // console.log('Ошибки асинхроннго кода: ', error);
            return thunkAPI.rejectWithValue({ message: error } as FetchSummaryError);
        }
    }
);

export interface IState {
    summaryData: ISummary[];
    status: 'not started' | 'in progress' | 'successfully' | 'download failed';
    error: string;
}

export const summarySlice = createSlice({
    name: 'summary',
    initialState: {
        summaryData: [],
        status: 'not started',
        error: '',
    } as IState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.
            addCase(fetchSummary.pending, (state) => {
                state.status = 'in progress';
            }).
            addCase(fetchSummary.fulfilled, (state, action: PayloadAction<ISummaryResponse>) => {
                state.status = 'successfully';
                state.summaryData = prepareDataSummary(action.payload);
                // console.log('state.summary: ', state.summaryData);
            }).
            addCase(fetchSummary.rejected, (state, action: PayloadAction<FetchSummaryError | undefined>) => {
                state.status = 'download failed';
                if (action.payload) {
                    state.error = action.payload.message;
                }
            });
    }
});