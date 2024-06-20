import styles from './layout.module.scss';
import { navigationItems, contactItems, legalInformationItems } from '../../data';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../redux/store';
import { selectTokenAccess } from '../../redux/slices/authSlice/authSelector';
import Header from '../Header/header';
import Content from '../Content/content';
import Footer from '../Footer/footer';
import Logo from '../Common/Logo/logo';
import Navigation from '../Common/Navigation/navigation';
import AccountControlPanel from '../AccountControlPanel/accountControlPanel';
import BurgerButton from '../Common/Buttons/BurgerButton/burgerButton';
import TextLines from '../Common/TextLines/textLines';
import Modal from '../Common/Modal/modal';
import ModalContentMenu from '../Common/Modal/ModalContentMenu/modalContentMenu';
import routes from '../../routes';
import usePortal from '../../hooks/usePortal';

export default function Layout() {
    const { isOpenPortal, openPortal, closePortal, Portal } = usePortal();
    const tokenAccess = useAppSelector(selectTokenAccess);

    return (
        <div className={styles.layout}>
            <Header>
                <Link to={routes.home()}>
                    <Logo src={'images/svg/logo.svg'} />
                </Link>
                <Navigation navigationItems={navigationItems}/>
                <AccountControlPanel tokenAccess={tokenAccess}/>
                <BurgerButton show={isOpenPortal} onClick={openPortal}/>
            </Header>
            <main className={styles.main}>
                <div className={styles.container}>
                    <Content/>
                </div>
            </main>
            <Footer>
                <Link to={routes.home()}>
                    <Logo src={'images/svg/whiteLogo.svg'} />
                </Link>
                <div className={styles.footerInfo}>
                    <TextLines textLines={contactItems}/>
                    <TextLines style={{fontSize: '12px'}} textLines={legalInformationItems}/>
                </div>
            </Footer>
            { isOpenPortal && <Portal><Modal closeModal={closePortal} insert={<ModalContentMenu tokenAccess={tokenAccess} closeModal={closePortal}/>}/></Portal> }
        </div>
    );
}