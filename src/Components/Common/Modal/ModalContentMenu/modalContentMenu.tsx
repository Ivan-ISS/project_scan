import styles from './modalContentMenu.module.scss';
import { navigationItems, buttonName } from '../../../../data';
import { Link, useNavigate } from 'react-router-dom';
import UserAvatar from '../../UserAvatar/userAvatar';
import SignUpButton from '../../Buttons/SignUpButton/signUpButton';
import LogUpButton from '../../Buttons/LogUpButton/logUpButton';
import routes from '../../../../routes';

export interface ModalContentMenuProps {
    tokenAccess: string;
    closeModal: () => void;
}

export default function ModalContentMenu({ tokenAccess, closeModal }: ModalContentMenuProps) {
    const navigate = useNavigate();

    const handleClickLogUp = () => {
        closeModal();
        navigate(routes.authorization());
    };

    const handleClickLogOut = () => {
        closeModal();
        navigate(routes.home());
    };

    return (
        <div className={styles.modalContentMenu}>
            <nav className={styles.navigation}>
                <ul className={styles.list}>
                    {navigationItems.map((item, index) => (
                        <li key={index} className={styles.item}>
                            <Link to={`/${item.pathName}`} className={styles.link} onClick={closeModal}>
                                {item.filedName}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
                <div className={styles.accountControlPanel}>
                    {
                        tokenAccess
                        ?
                            <UserAvatar size={'mobile'} onClick={handleClickLogOut}/>
                        :
                            <>
                                <SignUpButton text={buttonName.signUpButton} size={'mobile'}/>
                                <LogUpButton text={buttonName.logUpButton} size={'mobile'} onClick={handleClickLogUp}/>
                            </>
                    }
                </div>
            
        </div>
    );
}