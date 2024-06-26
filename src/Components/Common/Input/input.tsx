import styles from './input.module.scss';
import { /* useState, */ HTMLAttributes } from 'react';
import WithValidation from '../HOC/withValidation';

export interface InputProps extends HTMLAttributes<HTMLInputElement> {
    labelName: string;
    varName: string;
    type: string;
    value: string;
    hasError?: boolean;
    sameMessage?: boolean;
    placeholder?: string;
    onHandleChange: (value: string) => void;
}

export default function Input({ labelName, varName, type, value, hasError, sameMessage, placeholder, onHandleChange, ...props }: InputProps) {
    //const [value, setValue] = useState('');

    const onInputChangeBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
        //setValue(event.target.value);
        onHandleChange(event.target.value);
    };

    return (
        <div className={styles.field}>
            { labelName && <label htmlFor={varName} className={styles.label}>{labelName}</label> }
            <input
                {...props}
                id={varName}
                type={type}
                className={`
                    ${styles.input}
                    ${hasError && styles.invalid}
                    ${varName === 'startDate' && !value && styles[varName]}
                    ${varName === 'endDate' && !value && styles[varName]}
                `}
                value={value}
                placeholder={placeholder}
                onChange={onInputChangeBlur}
                onBlur={onInputChangeBlur}
            />
            { hasError && sameMessage && <div className={styles.errorPanel}>{ `Введите ${labelName.toLocaleLowerCase()}` }</div> }
            { hasError && !sameMessage && <div className={styles.errorPanel}>{ 'Обязательное поле' }</div> }
        </div>
    );
}

export const InputWithValidation = WithValidation(Input);