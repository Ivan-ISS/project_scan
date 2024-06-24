import styles from './userAvatar.module.scss';
import { buttonName, imagePaths } from '../../../data';
import { useAppSelector, useAppDispatch } from '../../../redux/store';
import { selectUserName } from '../../../redux/slices/userSlice/userSelector';
import { logOut } from '../../../redux/slices/authSlice/authSlice';
import LogOutButton from '../Buttons/LogOutButton/logOutButtom';
import Picture from '../Picture/picture';

export interface UserAvatarProps {
    size: 'desktop' | 'mobile';
    onClick?: () => void;
}

export default function UserAvatar({ size, onClick, ...props }: UserAvatarProps) {
    const dispatch = useAppDispatch();
    const userName = useAppSelector(selectUserName);

    const handleClickLogOut = () => {
        onClick && onClick();
        dispatch(logOut());
    };

    return (
        <div {...props} className={styles.userAvatar}>
            <div className={styles.userPanel}>
                <div className={`${styles.userName} ${styles[size + 'Name']}`}>
                    {userName}
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