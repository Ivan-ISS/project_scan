import styles from './navigation.module.scss';
import { INavigationItems } from '../../../types/dataTypes';
import { Link } from 'react-router-dom';

export interface NavigationProps {
    navigationItems: INavigationItems[];
}

export default function Navigation({ navigationItems }: NavigationProps) {

    return (
        <nav className={styles.navigation}>
            <ul className={styles.list}>
                {navigationItems.map((item, index) => (
                    <li key={index} className={styles.item}>
                        <Link to={`/${item.pathName}`} className={styles.link}>
                            {item.filedName}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}