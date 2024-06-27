import styles from './checkboxGroup.module.scss';
import { ICheckboxField } from '../../../types/dataTypes';
import Checkbox from '../Checkbox/checkbox';

export interface CheckboxGroupProps {
    options: ICheckboxField[],
    onHandleChange: (fieldName: string, value: string) => void;
}

const CheckboxGroup = ({ options, onHandleChange }: CheckboxGroupProps) => {

    return (
        <div className={styles.checkboxGroup}>
            {options.map((option, index) => (
                <Checkbox
                    key={index}
                    name={option.varName}
                    label={option.name}
                    onHandleChange={(value) => onHandleChange(option.varName, value)}
                />
            ))}
        </div>
    );
};

export default CheckboxGroup;