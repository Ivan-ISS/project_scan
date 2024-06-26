import styles from './select.module.scss';
import { HTMLAttributes } from 'react';

export interface SelectProps extends HTMLAttributes<HTMLSelectElement> {
    name: string;
    varName: string;
    values: string[];
}

export default function Select({ name, varName, values, ...props }: SelectProps) {

    return (
        <div className={styles.field}>
            <label htmlFor={varName} className={styles.label}>{name}</label>
            <div className={styles.selectWrap}>
                <select {...props} className={styles.select} id={varName}>
                    {values.map((value) =>
                        <option value={value[0]} className={styles.option}>
                            {value}
                        </option>
                    )}
                </select>
            </div>
        </div>
    );
}