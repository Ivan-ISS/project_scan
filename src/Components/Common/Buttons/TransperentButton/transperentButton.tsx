import styles from './transperentButton.module.scss';
import { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    text: string;
    isActive?: boolean;
}

export default function TransperentButton({ text, isActive, ...props }: ButtonProps) {

    const handleClickBtn = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (props.onClick) {
            props.onClick(e);
        }
    };

    return (
        <button
            {...props}
            onClick={handleClickBtn}
            className={`${styles.transperentButton} ${isActive ? styles.active : styles.inactive}`}
        >
            {text}
        </button>
    );
}
