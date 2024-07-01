import styles from './select.module.scss';
import { useEffect, HTMLAttributes } from 'react';

export interface SelectProps extends HTMLAttributes<HTMLSelectElement> {
    name: string;
    varName: string;
    values: string[];
    onHandleChange: (value: string) => void;
}

export default function Select({ name, varName, values, onHandleChange, ...props }: SelectProps) {

    useEffect(() => {
        onHandleChange(values[0]);
    }, []);

    const onSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        onHandleChange(event.target.value);
    };


    return (
        <div className={styles.field}>
            <label htmlFor={varName} className={styles.label}>{name}</label>
            <div className={styles.selectWrap}>
                <select {...props} className={styles.select} id={varName} onChange={onSelectChange}>
                    {values.map((value, index) =>
                        <option key={index} value={value} className={styles.option}>
                            {value}
                        </option>
                    )}
                </select>
            </div>
        </div>
    );
}