import styles from './layout.module.scss';
import { navigationItems, contactItems, legalInformationItems } from '../../data';
import { Link } from 'react-router-dom';
import Header from '../Header/header';
import Content from '../Content/content';
import Footer from '../Footer/footer';
import Logo from '../Common/Logo/logo';
import Navigation from '../Common/Navigation/navigation';
import AccountControlPanel from '../Common/AccountControlPanel/accountControlPanel';
import BurgerButton from '../Common/BurgerButton/burgerButton';
import TextLines from '../Common/TextLines/textLines';
import routes from '../../routes';

export default function Layout() {

    return (
        <div className={styles.layout}>
            <Header>
                <Link to={routes.home()}>
                    <Logo src={'images/svg/logo.svg'} />
                </Link>
                <Navigation navigationItems={navigationItems}/>
                <AccountControlPanel/>
                <BurgerButton/>
            </Header>
            <main className={styles.main}>
                <div className={styles.container}>
                    <Content/>
                </div>
            </main>
            <Footer>
                <Link to={routes.home()}>
                    <Logo src={'images/svg/logo-white.svg'} />
                </Link>
                <div className={styles.footerInfo}>
                    <TextLines textLines={contactItems}/>
                    <TextLines style={{fontSize: '12px'}} textLines={legalInformationItems}/>
                </div>
            </Footer>
        </div>
    );
}