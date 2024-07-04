import styles from './infoPanelLimit.module.scss';
import { infoPanelItems } from '../../data';
import { useAppSelector } from '../../redux/store';
import { selectUserInfo, selectUserInfoStatus } from '../../redux/slices/userSlice/userSelector';
import Loader from '../Common/Loader/loader';

export default function InfoPanelLimit() {
    const userInfo = useAppSelector(selectUserInfo);
    const userInfoStatus = useAppSelector(selectUserInfoStatus);

    return (
        <div className={styles.infoPanelLimit}>
            { userInfoStatus === 'in progress' ? <Loader/> :
                <>
                    {infoPanelItems.map((item, index) => (
                        <div key={index} className={styles.infoPanelItem}>
                            <p className={styles.parameter}>
                                {item.text}
                            </p>
                            <span className={`${styles.value} ${styles[item.name]}`}>
                                {userInfo.eventFiltersInfo[item.name as keyof typeof userInfo.eventFiltersInfo]}
                            </span>
                        </div>
                    ))}
                </>
            }
        </div>
    );
}