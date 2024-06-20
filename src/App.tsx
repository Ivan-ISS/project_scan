import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from './redux/store';
import { selectTokenAccess } from './redux/slices/authSlice/authSelector';
import { fetchUserInfo } from './redux/slices/userSlice/userSlice';
import Layout from './Components/Layout/layout';
import routes from './routes';

export default function App() {
    const navigate = useNavigate();
    const tokenAccess = useAppSelector(selectTokenAccess);
    const dispatch = useAppDispatch();
    const prevToken = useRef(tokenAccess);

    useEffect(() => {  // Перенаправдение на страницу профиля после авторизации
        if (tokenAccess !== prevToken.current && tokenAccess) {
            navigate(routes.home());
        }
        prevToken.current = tokenAccess;
    }, [navigate, tokenAccess]);

    useEffect(() => {
        tokenAccess && dispatch(fetchUserInfo({ tokenAccess }));
    }, [dispatch, tokenAccess]);

    return (
        <Layout/>
    );
}