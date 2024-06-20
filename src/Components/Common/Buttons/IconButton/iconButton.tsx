import styles from './iconButton.module.scss';
import { ButtonHTMLAttributes } from 'react';

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children?: JSX.Element;
}

export default function IconButton({ children, ...props }: IconButtonProps) {

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