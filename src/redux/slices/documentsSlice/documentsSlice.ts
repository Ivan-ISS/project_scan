import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { ISearchData, IDocumentsResponse, IDocuments } from '../../../types/scanTypes';
import { prepareDataToRequest } from '../../../utils/prepareDataToRequest';
import routes from '../../../routes';

export interface FetchDocumentsArgs {
    tokenAccess: string;
    requestData: ISearchData;
}

export interface FetchDocumentsError {
    message: string;
}

export const fetchDocuments = createAsyncThunk<IDocumentsResponse, FetchDocumentsArgs, {rejectValue: FetchDocumentsError | undefined}>(
    'documents/fetch',
    async ({ tokenAccess, requestData }, thunkAPI) => {
        try {
            const response = await fetch(routes.urlDocuments(), {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${tokenAccess}`,
                },
                body: JSON.stringify(prepareDataToRequest(requestData))
            });

            if (!response.ok) {
                const error = await response.json();
                // console.log('Ошибка ответа (статус не 200): ', error);
                return thunkAPI.rejectWithValue({ message: error } as FetchDocumentsError);
            }

            const data = response.json();
            // console.log('Данные с сервера: ', data);
            return data;
        } catch (error) {
            // console.log('Ошибки асинхроннго кода: ', error);
            return thunkAPI.rejectWithValue({ message: error } as FetchDocumentsError);
        }
    }
);

export interface IState {
    documentsData: IDocuments[];
    lazyNumber: number;
    lazyStep: number;
    lazyLimit: number;
    status: 'not started' | 'in progress' | 'successfully' | 'download failed';
    error: string;
}

export const documentsSlice = createSlice({
    name: 'documents',
    initialState: {
        documentsData: {},
        lazyNumber: 10,
        lazyStep: 10,
        lazyLimit: 0,
        status: 'not started',
        error: '',
    } as IState,
    reducers: {
        increaseLazyNumber: (state) => {
            state.lazyNumber = state.lazyNumber + state.lazyStep;
        },
        resetLazyNumber: (state) => {
            state.lazyNumber = 10;
        },
        resetDocumentsData: (state) => {
            state.documentsData = [];
        }
    },
    extraReducers: (builder) => {
        builder.
            addCase(fetchDocuments.pending, (state) => {
                state.status = 'in progress';
            }).
            addCase(fetchDocuments.fulfilled, (state, action: PayloadAction<IDocumentsResponse>) => {
                state.status = 'successfully';
                state.documentsData = action.payload.items;
                state.lazyLimit = state.documentsData.length;
                // console.log('state.documentsData: ', state.documentsData);
            }).
            addCase(fetchDocuments.rejected, (state, action: PayloadAction<FetchDocumentsError | undefined>) => {
                state.status = 'download failed';
                if (action.payload) {
                    state.error = action.payload.message;
                }
            });
    }
});

export const { increaseLazyNumber, resetLazyNumber, resetDocumentsData } = documentsSlice.actions;