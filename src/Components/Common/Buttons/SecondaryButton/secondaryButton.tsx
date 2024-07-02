import styles from './secondaryButton.module.scss';
import { ButtonHTMLAttributes } from 'react';

export interface SecondaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    text: string;
}

export default function SecondaryButton({ text, ...props }: SecondaryButtonProps) {

    const handleClickBtn = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (props.onClick) {
            props.onClick(e);
        }
    };

    return (
        <button
            {...props}
            onClick={handleClickBtn}
            className={styles.secondaryButton}
        >
            {text}
        </button>
    );
}