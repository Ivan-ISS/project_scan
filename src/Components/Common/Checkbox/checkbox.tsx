import { InputHTMLAttributes, useState } from 'react';
import './checkbox.module.scss';
import styles from './checkbox.module.scss';

export interface CheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;
    checked?: boolean;
    onHandleChange: (value: string) => void;
}

const CheckBox = ({ label, name, checked, onHandleChange, ...props }: CheckBoxProps) => {
    const [ value, setValue ] = useState('');

    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onHandleChange(event.target.value);
        setValue(event.target.value);
        if (!event.target.checked) {
            onHandleChange('');
            setValue('');
        }
    };

    return (
        <label className={`${styles.label} ${value ? styles.active : styles.notActive}`}>
            <input {...props} className={styles.checkbox} type="checkbox" name={name} checked={checked} onChange={onInputChange}/>
            <span className={styles.checkboxFake}></span>
            <div className={styles.text}>
                {label}
            </div>
        </label>
    );
};

export default CheckBox;