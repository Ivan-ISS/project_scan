import { IAuthResponse, IAuth } from '../../../types/authTypes';
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import routes from '../../../routes';

export interface FetchAuthArgs extends IAuth {}

export interface FetchLoginError {
    errorCode: string;
    message: string;
}

export const loginUser = createAsyncThunk<IAuthResponse, FetchAuthArgs, { rejectValue: FetchLoginError | undefined }>(
    'loginUser/fetch',
    async (authData, thunkAPI) => {
        try {
            const response = await fetch(routes.urlLogin(), {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(authData)
            });

            if (!response.ok) {                                                             // Обрабатываем ошибки сервера
                const error: FetchLoginError = await response.json();                       // Какого типа вернется ошибка error - мы не знаем, мы лишь строкой ниже присваиваем тип ошибке, кот-ю отдаем в reducer
                console.log('Ошибка ответа (статус не 200): ', error);                      // Поэтому здесь нужно задавть тип в соответствии со структурой ошибок, кот-е идут от API (изучаем API)
                return thunkAPI.rejectWithValue({ message: error.message } as FetchLoginError);     // Передаем эти ошибку сразу в reducer для дальнейшей работы с ними
            }                                                                                       // Ошибка здесь и из блока catch передаются только в loginUser.rejected

            const data: IAuthResponse = await response.json();
            console.log('Данные с сервера: ', data);
            return data;
        } catch (error) {
            console.log('Ошибки асинхроннго кода: ', error);
            return thunkAPI.rejectWithValue({ message: error } as FetchLoginError);
        }
    }
);

export interface IState {
    tokenAccess: string;
    tokenExpire: string;
    status: 'not started' | 'in progress' | 'successfully' | 'download failed';
    error: string | undefined;
}

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        tokenAccess: '',
        tokenExpire: '',
        status: 'not started',
        error: '',
    } as IState,
    reducers: {
        logOut: (state) => {
            state.tokenAccess = '';
            state.tokenExpire = '';
            state.status = 'not started';
        }
    },
    extraReducers: (builder) => {
        builder.
            addCase(loginUser.pending, (state) => {
                state.status = 'in progress';
            })
            .addCase(loginUser.fulfilled, (state, action: PayloadAction<IAuthResponse>) => {
                state.status = 'successfully';
                state.error = '';
                state.tokenAccess = action.payload.accessToken;
                state.tokenExpire = action.payload.expire;
            })
            .addCase(loginUser.rejected, (state, action: PayloadAction<FetchLoginError | undefined>)=> {
                state.status = 'download failed';
                if (action.payload) {
                    state.error = action.payload.message;
                }
            });
    }
});

export const { logOut } = authSlice.actions;