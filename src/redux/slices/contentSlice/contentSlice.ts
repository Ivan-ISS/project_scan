import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { IDocuments, IContentResponse, IContent } from '../../../types/scanTypes';
import { prepareDocsToRequest } from '../../../utils/prepareDocsToRequest';
import routes from '../../../routes';

export interface FetchContentArgs {
    tokenAccess: string;
    requestData: IDocuments[];
}

export interface FetchContentError {
    message: string;
}

export const fetchContent = createAsyncThunk<IContentResponse[], FetchContentArgs, {rejectValue: FetchContentError | undefined}>(
    'content/fetch',
    async ({ tokenAccess, requestData }, thunkAPI) => {
        try {
            const response = await fetch(routes.urlContent(), {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${tokenAccess}`,
                },
                body: JSON.stringify(prepareDocsToRequest(requestData))
            });

            if (!response.ok) {
                const error = await response.json();
                console.log('Ошибка ответа (статус не 200): ', error);
                return thunkAPI.rejectWithValue({ message: error } as FetchContentError);
            }

            const data = response.json();
            console.log('Данные с сервера: ', data);
            return data;
        } catch (error) {
            console.log('Ошибки асинхроннго кода: ', error);
            return thunkAPI.rejectWithValue({ message: error } as FetchContentError);
        }
    }
);

export interface IState {
    contentData: IContent[];
    status: 'not started' | 'in progress' | 'successfully' | 'download failed';
    error: string;
}

export const contentSlice = createSlice({
    name: 'content',
    initialState: {
        contentData: [],
        status: 'not started',
        error: '',
    } as IState,
    reducers: {
        resetContentData: (state) => {
            state.contentData = [];
        }
    },
    extraReducers: (builder) => {
        builder.
            addCase(fetchContent.pending, (state) => {
                state.status = 'in progress';
            }).
            addCase(fetchContent.fulfilled, (state, action: PayloadAction<IContentResponse[]>) => {
                state.status = 'successfully';
                console.log('state.contentData before: ', state.contentData);
                console.log('state.contentData before lenght: ', state.contentData.length);
                for (let i = 0; i < action.payload.length; i++) {
                    state.contentData = [ ... state.contentData, action.payload[i]];
                }
                console.log('state.contentData: ', state.contentData);
            }).
            addCase(fetchContent.rejected, (state, action: PayloadAction<FetchContentError | undefined>) => {
                state.status = 'download failed';
                if (action.payload) {
                    state.error = action.payload.message;
                }
            });
    }
});

export const { resetContentData } = contentSlice.actions;