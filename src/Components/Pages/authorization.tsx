import styles from '../../styles/pageStyles/authorization.module.scss';
import { titleContent, imagePaths } from '../../data';
import PageTitle from '../Common/Titles/PageTitle/pageTitle';
import Picture from '../Common/Picture/picture';
import AccountMenu from '../AccountMenu/accountMenu';

export default function Authorization() {
    return (
        <section className={styles.authPanel}>
            <div className={styles.staticBlock}>
                <PageTitle titleContent={titleContent.authorizationPage[0]} size={'sizeDesktopRest'}/>
                <div className={`${styles.imageContainer} ${styles.desktopImageContainer}`}>
                    <Picture
                        src={imagePaths.authorizationPage[0].src}
                        alt={imagePaths.authorizationPage[0].alt}
                    />
                </div>
            </div>
            <AccountMenu/>
            <div className={`${styles.imageContainer} ${styles.mobileImageContainer}`}>
                <Picture
                    src={imagePaths.authorizationPage[0].src}
                    alt={imagePaths.authorizationPage[0].alt}
                />
            </div>
        </section>
    );
}