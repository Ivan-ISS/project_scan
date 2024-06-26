import styles from './signUpButton.module.scss';
import { ButtonHTMLAttributes } from 'react';

export interface SignUpButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    text: string;
    size: 'desktop' | 'mobile';
}

export default function SignUpButton({ text, size, ...props }: SignUpButtonProps) {

    const handleClickBtn = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (props.onClick) {
            props.onClick(e);
        }
    };

    return (
        <button
            {...props}
            onClick={handleClickBtn}
            className={`${styles.signUpButton} ${styles[size]}`}
        >
            {text}
        </button>
    );
}
