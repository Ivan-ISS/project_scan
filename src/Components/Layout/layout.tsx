import styles from './layout.module.scss';
import Header from '../Header/header';
import Content from '../Content/content';
import Footer from '../Footer/footer';

export default function Layout() {

    return (
        <div className={styles.layout}>
            <Header>

            </Header>
            <main className={styles.main}>
                <div className={styles.container}>
                    Begin
                    <Content/>
                </div>
            </main>
            <Footer/>
        </div>
    );
}