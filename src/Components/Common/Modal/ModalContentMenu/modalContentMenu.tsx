import styles from './modalContentMenu.module.scss';
import { navigationItems, buttonName } from '../../../../data';
import { Link, useNavigate } from 'react-router-dom';
import SignUpButton from '../../Buttons/SignUpButton/signUpButton';
import LogUpButton from '../../Buttons/LogUpButton/logUpButton';
import routes from '../../../../routes';

export interface ModalContentMenuProps {
    closeModal: () => void;
}

export default function ModalContentMenu({ closeModal }: ModalContentMenuProps) {
    const navigate = useNavigate();

    const handleClickLogUp = () => {
        closeModal();
        navigate(routes.authorization());
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
                <SignUpButton text={buttonName.signUpButton} size={'mobile'}/>
                <LogUpButton text={buttonName.logUpButton} size={'mobile'} onClick={handleClickLogUp}/>
            </div>
        </div>
    );
}