import { configureStore } from '@reduxjs/toolkit';
import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux';
import { authSlice } from './slices/authSlice/authSlice';

const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
    },
});

export { store };
export type RootState = ReturnType<typeof store.getState>;
export type RootDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<RootDispatch>();