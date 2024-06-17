import styles from './iconButton.module.scss';
import { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children?: JSX.Element;
}

export default function IconButton({ children, ...props }: ButtonProps) {

    const handleClickBtn = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (props.onClick) {
            props.onClick(e);
        }
    };

    return (
        <button {...props} onClick={handleClickBtn} className={styles.iconButton}>
            <div className={styles.iconWrap}>
                {children}
            </div>
        </button>
    );
}