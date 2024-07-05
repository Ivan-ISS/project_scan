import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { IUserInfoResponse } from '../../../types/userInfoTypes';
import { logOut } from '../authSlice/authSlice';
import routes from '../../../routes';

export interface FetchUserInfoArgs {
    tokenAccess: string;
}

export interface FetchUserInfoError {
    errorCode: string;
    message: string;
}

export const fetchUserInfo = createAsyncThunk<IUserInfoResponse, FetchUserInfoArgs, { rejectValue: FetchUserInfoError | undefined } >(
    'userInfo/fetch',
    async ({ tokenAccess }, thunkAPI) => {
        try {
            const response = await fetch(routes.urlUserInfo(), {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${tokenAccess}`
                }
            });

            if (!response.ok) {
                const error = await response.json();
                // console.log('Ошибка ответа (статус не 200): ', error);
                return thunkAPI.rejectWithValue({ message: error } as FetchUserInfoError);
            }

            const data: IUserInfoResponse = await response.json();
            // console.log('Данные с сервера: ', data);
            return data;
        } catch (error) {
            // console.log('Ошибки асинхроннго кода: ', error);
            return thunkAPI.rejectWithValue({ message: error } as FetchUserInfoError);
        }
    }
);

export interface IState {
    userInfo: IUserInfoResponse;
    userName: string;
    userTariff: string;
    status: 'not started' | 'in progress' | 'successfully' | 'download failed';
    error: string;
}

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        userInfo: {
            eventFiltersInfo: {
                usedCompanyCount: 0,
                companyLimit: 0,
            },
        },
        userName: '',
        userTariff: '',
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
                state.userInfo = action.payload;
                state.userName = 'Арнольд';
                state.userTariff = 'Beginner';
                // console.log('state.eventFiltersInfo: ', state.userInfo);
            }).
            addCase(fetchUserInfo.rejected, (state, action: PayloadAction<FetchUserInfoError | undefined>) => {
                state.status = 'download failed';
                if (action.payload) {
                    state.error = action.payload.message;
                }
            }).
            addCase(logOut, (state) => {    // Слушатель выхода из профиля
                state.userName = '';
                state.userTariff = '';
                state.userInfo.eventFiltersInfo.companyLimit = 0;
                state.userInfo.eventFiltersInfo.usedCompanyCount = 0;
            });
    }
});