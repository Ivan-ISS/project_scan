// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference types="redux-persist" />
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { persistStore } from 'redux-persist';
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import { configureStore } from '@reduxjs/toolkit';
import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux';
import { authSlice } from './slices/authSlice/authSlice';
import { userSlice } from './slices/userSlice/userSlice';
import { summarySlice } from './slices/summarySlice/summarySlice';
import { documentsSlice } from './slices/documentsSlice/documentsSlice';

const persistConfig = {
    key: 'root',
    storage
};

const persistedReducer = persistReducer(persistConfig, authSlice.reducer);

const store = configureStore({
    reducer: {
        auth: persistedReducer,
        user: userSlice.reducer,
        summary: summarySlice.reducer,
        documents: documentsSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        },
    })
});

export { store };
export type RootState = ReturnType<typeof store.getState>;
export type RootDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<RootDispatch>();
export const persistor = persistStore(store);