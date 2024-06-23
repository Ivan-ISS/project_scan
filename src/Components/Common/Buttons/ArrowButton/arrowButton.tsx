import styles from './arrowButton.module.scss';
import { ButtonHTMLAttributes } from 'react';

export interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    direction: 'right' | 'left';
}

export default function ArrowButton({ direction, ...props }: PrimaryButtonProps) {

    const handleClickBtn = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (props.onClick) {
            props.onClick(e);
        }
    };

    return (
        <button {...props} onClick={handleClickBtn} className={`${styles.arrowButton} ${styles[direction]}`}>
        </button>
    );
}