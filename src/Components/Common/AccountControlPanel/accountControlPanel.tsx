import styles from './accountControlPanel.module.scss';
import { useNavigate } from 'react-router-dom';
import LogUpButton from '../Buttons/LogUpButton/logUpButton';
import SignUpButton from '../Buttons/SignUpButton/signUpButton';
import routes from '../../../routes';

export default function AccountControlPanel() {
    const navigate = useNavigate();

    const handleClickLogUp = () => {
        navigate(routes.authorization());
    };

    return (
        <div className={styles.accountControlPanel}>
            <SignUpButton text={'Зарегистрироваться'} size={'desktop'}/>
            <div className={styles.border}></div>
            <LogUpButton text={'Войти'} size={'desktop'} onClick={handleClickLogUp}/>
        </div>
    );
}