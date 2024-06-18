import styles from './input.module.scss';
//import { useState } from 'react';
import WithValidation from '../HOC/withValidation';

export interface InputProps {
    name: string;
    type: string;
    value: string;
    hasError?: boolean;
    onChange: (value: string) => void;
}

export default function Input({ name, type, value, hasError, onChange, ...props }: InputProps) {
    //const [value, setValue] = useState('');

    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        //setValue(event.target.value);
        onChange(event.target.value);
    };

    return (
        <div className={styles.field}>
            <label htmlFor={name} className={styles.label}>{`${name}: `}</label>
            <input
                {...props}
                id={name}
                type={type}
                className={`${styles.input} ${hasError && styles.invalid}`}
                value={value}
                onChange={onInputChange}
            />
            { hasError && <div className={styles.errorPanel}>{ `Введите ${name.toLocaleLowerCase()}` }</div> }
        </div>
    );
}

export const InputWithValidation = WithValidation(Input);