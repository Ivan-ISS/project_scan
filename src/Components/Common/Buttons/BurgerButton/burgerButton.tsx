import styles from './burgerButton.module.scss';
import { HTMLAttributes } from 'react';

export interface BurgerButtonProps extends HTMLAttributes<HTMLButtonElement>{
    show: boolean;
}

export default function BurgerButton({ show, ...props }: BurgerButtonProps) {

    return (
        <div className={styles.burgerWrap}>
            <button {...props} className={`${styles.burgerButton} ${show ? styles.burgerButtonShow : null}`}>
                <span className={styles.band}></span>
                <span className={styles.band}></span>
                <span className={styles.band}></span>
            </button>
        </div>
    );
}