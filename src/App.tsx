import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from './redux/store';
import { selectTokenAccess, selectTokenExpire } from './redux/slices/authSlice/authSelector';
import { fetchUserInfo } from './redux/slices/userSlice/userSlice';
import { logOut } from './redux/slices/authSlice/authSlice';
import Layout from './Components/Layout/layout';
import routes from './routes';

export default function App() {
    const navigate = useNavigate();
    const tokenAccess = useAppSelector(selectTokenAccess);
    const tokenExpire = useAppSelector(selectTokenExpire);
    const dispatch = useAppDispatch();
    const prevToken = useRef(tokenAccess);

    useEffect(() => {  // Перенаправдение на страницу профиля после авторизации
        if (tokenAccess !== prevToken.current && tokenAccess) {
            navigate(routes.home());
        }
        prevToken.current = tokenAccess;
    }, [navigate, tokenAccess]);

    useEffect(() => {   // Проверка срока давности токена
        const expirationDate = new Date(tokenExpire);
    
        const checkExpiration = () => {
          const now = new Date();
          if (now >= expirationDate) {
            dispatch(logOut());
          }
        };
    
        const intervalId = setInterval(checkExpiration, 3600000);
    
        return () => clearInterval(intervalId);
      }, [dispatch, tokenExpire]);

    useEffect(() => {
        tokenAccess && dispatch(fetchUserInfo({ tokenAccess }));
    }, [dispatch, tokenAccess]);

    return (
        <Layout/>
    );
}