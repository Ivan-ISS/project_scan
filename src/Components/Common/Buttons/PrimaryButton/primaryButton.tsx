import styles from './primaryButton.module.scss';
import { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    text: string;
    fontSize: 'big' | 'small';
    isDisabled?: boolean;
}

export default function PrimaryButton({ text, fontSize, ...props }: ButtonProps) {

    const handleClickBtn = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (props.onClick) {
            props.onClick(e);
        }
    };

    return (
        <button
            {...props}
            onClick={handleClickBtn}
            className={`${styles.primaryButton} ${styles[fontSize]}`}
        >
            {text}
        </button>
    );
}


// const PrimaryButton: FunctionComponent<ButtonProps> = ({ text, fontSize, ...props }) => {           ===> одно и то же
// export default function PrimaryButton<P extends ButtonProps>({ text, fontSize, ...props }: P) {