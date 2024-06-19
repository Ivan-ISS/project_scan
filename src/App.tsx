import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from './redux/store';
import { selectTokenAccess } from './redux/slices/authSlice/authSelector';
import { fetchUserInfo } from './redux/slices/userSlice/userSlice';
import Layout from './Components/Layout/layout';

export default function App() {
    const tokenAccess = useAppSelector(selectTokenAccess);
    const dispatch = useAppDispatch();

    useEffect(() => {
        tokenAccess && dispatch(fetchUserInfo({ tokenAccess }));
    }, [dispatch, tokenAccess]);

    return (
        <Layout/>
    );
}