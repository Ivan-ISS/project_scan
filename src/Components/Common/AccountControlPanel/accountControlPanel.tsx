import styles from './accountControlPanel.module.scss';
import { buttonName } from '../../../data';
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
            <SignUpButton text={buttonName.signUpButton} size={'desktop'}/>
            <div className={styles.border}></div>
            <LogUpButton text={buttonName.logUpButton} size={'desktop'} onClick={handleClickLogUp}/>
        </div>
    );
}