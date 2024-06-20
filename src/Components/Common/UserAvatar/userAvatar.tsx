import styles from './userAvatar.module.scss';
import { buttonName, imagePaths, placholderUserName } from '../../../data';
import { useAppDispatch } from '../../../redux/store';
import { logOut } from '../../../redux/slices/authSlice/authSlice';
import LogOutButton from '../Buttons/LogOutButton/logOutButtom';
import Picture from '../Picture/picture';

export interface UserAvatarProps {
    size: 'desktop' | 'mobile';
    onClick?: () => void;
}

export default function UserAvatar({ size, onClick, ...props }: UserAvatarProps) {
    const dispatch = useAppDispatch();

    const handleClickLogOut = () => {
        onClick && onClick();
        dispatch(logOut());
    };

    return (
        <div {...props} className={styles.userAvatar}>
            <div className={styles.userPanel}>
                <div className={`${styles.userName} ${styles[size + 'Name']}`}>
                    {placholderUserName}
                </div>
                <LogOutButton size={size} text={buttonName.LogOutButton} onClick={handleClickLogOut}/>
            </div>
            <div className={`${styles.imageContainer} ${styles[size + 'Image']}`}>
                <Picture
                    src={imagePaths.header[0].src}
                    alt={imagePaths.header[0].alt}
                />
            </div>
        </div>
    );
}