import styles from './logOutButton.module.scss';
import { ButtonHTMLAttributes } from 'react';

export interface LogOutButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    text: string;
    size: 'desktop' | 'mobile';
}

export default function LogOutButton({ text, size, ...props }: LogOutButtonProps) {

    const handleClickBtn = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (props.onClick) {
            props.onClick(e);
        }
    };

    return (
        <button
            {...props}
            onClick={handleClickBtn}
            className={`${styles.logOutButton} ${styles[size]}`}
        >
            {text}
        </button>
    );
}