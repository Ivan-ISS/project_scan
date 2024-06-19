import styles from './accountMenu.module.scss';
import { buttonName, imagePaths, logUpFormFields, buttonNetworkNames } from '../../data';
import { IAuth } from '../../types/authTypes';
import { useAppSelector, useAppDispatch } from '../../redux/store';
import { selectAuthError } from '../../redux/slices/authSlice/authSelector';
import { loginUser } from '../../redux/slices/authSlice/authSlice';
import Picture from '../Common/Picture/picture';
import TransperentButton from '../Common/Buttons/TransperentButton/transperentButton';
import AccountForm from '../AccountForm/accountForm';
import IconButton from '../Common/Buttons/IconButton/iconButton';

export default function AccountMenu() {
    const dispatch = useAppDispatch();
    const authError = useAppSelector(selectAuthError);

    const handleFormSubmit = (formData: IAuth) => {
        dispatch(loginUser(formData));
    };

    return (
        <div className={styles.accountMenu}>
            <div className={styles.topPanel}>
                <TransperentButton isActive={true} text={buttonName.logUpButton}/>
                <TransperentButton isActive={false} text={buttonName.signUpButton}/>
            </div>
            <AccountForm fields={logUpFormFields} hasError={authError !== ''} error={authError} handleAuthFormSubmit={handleFormSubmit}/>
            <button className={styles.restorePasswordButton}>{buttonName.restorePassword}</button>
            <div className={styles.bottomPanel}>
                <div className={styles.labelNetwork}>
                    Войти через:
                </div>
                <div className={styles.networkButtons}>
                    {buttonNetworkNames.map((name, index) => (
                        <IconButton key={index}>
                            <Picture
                                src={name.pathToIcon}
                                alt={name.networkName}
                            />
                        </IconButton>
                    ))}
                </div>
            </div>
            <div className={styles.imageContainer}>
                <Picture
                    src={imagePaths.authorizationPage[1].src}
                    alt={imagePaths.authorizationPage[1].alt}
                />
            </div>
        </div>
    );
}