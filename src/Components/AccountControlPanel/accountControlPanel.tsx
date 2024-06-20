import styles from './accountControlPanel.module.scss';
import { buttonName } from '../../data';
import { useNavigate } from 'react-router-dom';
import UserAvatar from '../Common/UserAvatar/userAvatar';
import LogUpButton from '../Common/Buttons/LogUpButton/logUpButton';
import SignUpButton from '../Common/Buttons/SignUpButton/signUpButton';
import routes from '../../routes';

export interface AccountControlPanelProps {
    tokenAccess: string;
}

export default function AccountControlPanel({ tokenAccess, ...props }: AccountControlPanelProps) {
    const navigate = useNavigate();

    const handleClickLogUp = () => {
        navigate(routes.authorization());
    };

    return (
        <div {...props} className={styles.accountControlPanel}>
            {
                tokenAccess
                ?
                    <UserAvatar size={'desktop'}/>
                :
                    <>
                        <SignUpButton text={buttonName.signUpButton} size={'desktop'}/>
                        <div className={styles.border}></div>
                        <LogUpButton text={buttonName.logUpButton} size={'desktop'} onClick={handleClickLogUp}/>
                    </>
            }
        </div>
    );
}