import { ISearchData, IPublicationSummaryResponse } from '../../../types/publicationTypes';
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { prepareDataToRequest } from '../../../utils/prepareDataToRequest';
import routes from '../../../routes';

export interface fetchPublicationSummaryArgs {
    tokenAccess: string;
    requestData: ISearchData;
}

export interface fetchPublicationSummaryError {
    message: string;
}

export const fetchPublicationSummary = createAsyncThunk<
        IPublicationSummaryResponse,
        fetchPublicationSummaryArgs,
        {rejectValue: fetchPublicationSummaryError | undefined}
    >(
    'publicationSummary/fetch',
    async ({ tokenAccess, requestData }, thunkAPI) => {
        try {
            const response = await fetch(routes.urlPublicationSummary(), {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${tokenAccess}`
                },
                body: JSON.stringify(prepareDataToRequest(requestData)),
            });

            if (!response.ok) {
                const error = await response.json();
                console.log('Ошибка ответа (статус не 200): ', error);
                return thunkAPI.rejectWithValue({ message: error } as fetchPublicationSummaryError);
            }
    
            const data = await response.json();
            console.log('Данные с сервера: ', data);
            return data;
        } catch (error) {
            console.log('Ошибки асинхроннго кода: ', error);
            return thunkAPI.rejectWithValue({ message: error } as fetchPublicationSummaryError);
        }
    }
);

export interface IState {
    dataSummary: IPublicationSummaryResponse;
    status: 'not started' | 'in progress' | 'successfully' | 'download failed';
    error: string;
}

export const publicationSummarySlice = createSlice({
    name: 'publicationSummary',
    initialState: {
        dataSummary: {},
        status: 'not started',
        error: '',
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.
            addCase(fetchPublicationSummary.pending, (state) => {
                state.status = 'in progress';
            }).
            addCase(fetchPublicationSummary.fulfilled, (state, action: PayloadAction<IPublicationSummaryResponse>) => {
                state.status = 'successfully';
                state.dataSummary = action.payload;
            }).
            addCase(fetchPublicationSummary.rejected, (state, action: PayloadAction<fetchPublicationSummaryError | undefined>) => {
                state.status = 'download failed';
                if (action.payload) {
                    state.error = action.payload.message;
                }
            });
    }
});