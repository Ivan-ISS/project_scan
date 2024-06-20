import styles from './logUpButton.module.scss';
import { ButtonHTMLAttributes } from 'react';

export interface LogUpButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    text: string;
    size: 'desktop' | 'mobile';
}

export default function LogUpButton({ text, size, ...props }: LogUpButtonProps) {

    const handleClickBtn = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (props.onClick) {
            props.onClick(e);
        }
    };

    return (
        <button
            {...props}
            onClick={handleClickBtn}
            className={`${styles.logUpButton} ${styles[size]}`}
        >
            {text}
        </button>
    );
}
