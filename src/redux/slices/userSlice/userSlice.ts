import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { IUserInfoResponse } from '../../../types/userInfoTypes';

export interface FetchUserInfoArgs {
    tokenAccess: string;
}

export interface FetchUserInfoError {
    errorCode: string;
    message: string;
}

export const fetchUserInfo = createAsyncThunk<IUserInfoResponse, FetchUserInfoError, { rejectValue: FetchUserInfoError | undefined } >(
    'userInfo/fetch',
    async (tokenAccess, thunkAPI) => {
        try {
            const response = await fetch('', {
                method: 'GET',
                headers: {
                    'Authorization': 'BearerToken'
                }
            });

            if (!response.ok) {
                const error = await response.json();
                console.log('Ошибка ответа (статус не 200): ', error);
                return thunkAPI.rejectWithValue({ message: error } as FetchUserInfoError);
            }

            const data: IUserInfoResponse = await response.json();
            console.log('Данные с сервера: ', data);
            return data;
        } catch (error) {
            console.log('Ошибки асинхроннго кода: ', error);
            return thunkAPI.rejectWithValue({ message: error } as FetchUserInfoError);
        }
    }
);

export interface IState {
    eventFiltersInfo: IUserInfoResponse;
    status: 'not started' | 'in progress' | 'successfully' | 'download failed';
    error: string;
}

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        eventFiltersInfo: {},
        status: 'not started',
        error: '',
    } as IState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.
            addCase(fetchUserInfo.pending, (state) => {
                state.status = 'in progress';
            }).
            addCase(fetchUserInfo.fulfilled, (state, action: PayloadAction<IUserInfoResponse>) => {
                state.status = 'successfully';
                state.eventFiltersInfo = action.payload;
            }).
            addCase(fetchUserInfo.rejected, (state, action: PayloadAction<FetchUserInfoError | undefined>) => {
                state.status = 'download failed';
                if (action.payload) {
                    state.error = action.payload.message;
                }
            });
    }
});