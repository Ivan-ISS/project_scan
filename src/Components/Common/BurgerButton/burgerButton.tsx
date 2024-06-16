import styles from './burgerButton.module.scss';

export default function BurgerButton({ ...props }) {

    return (
        <div className={styles.burgerWrap}>
            <button {...props} className={styles.burgerButton}>
                <span className={styles.band}></span>
                <span className={styles.band}></span>
                <span className={styles.band}></span>
            </button>
        </div>
    );
}