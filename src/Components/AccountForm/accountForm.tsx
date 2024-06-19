import styles from './accountForm.module.scss';
import { buttonName } from '../../data';
import { IFormFields } from '../../types/dataTypes';
import { useState, FormEvent } from 'react';
// import Input from '../Common/Input/input';
import { InputWithValidation } from '../Common/Input/input';
import PrimaryButton from '../Common/Buttons/PrimaryButton/primaryButton';
import { createFieldsString, createFieldsBoolean } from '../../utils/configureFieldNames';

export interface AccountFormProps {
    fields: IFormFields[];
}

export default function AccountForm({ fields }: AccountFormProps) {
    const [ formData, setFormData ] = useState(createFieldsString(fields));
    const [ formValidation, setformValidation ] = useState(createFieldsBoolean(fields));
    const formIsValid = formValidation.login || formValidation.password;

    const handleChange = (fieldName: string, value: string) => {
        setFormData(prevData => ({ ...prevData, [fieldName]: value }));
    };

    const handleOnValidationChange = (fieldName: string, isValid: boolean) => {
        setformValidation(prevData => ({ ...prevData, [fieldName]: isValid}));
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(formData);
        console.log(formValidation);
        console.log(formIsValid);
    };

    return (
        <form className={styles.accountFrom} onSubmit={handleSubmit}>
            <div className={styles.formFields}>
                {fields.map((field, index) => 
                    <InputWithValidation
                        key={index}
                        name={field.name}
                        type={field.type}
                        value={formData[field.varName]}
                        onChange={(value) => handleChange(field.varName, value)}
                        onValidationChange={(isValid) => handleOnValidationChange(field.varName, isValid)} // Вот как создаются функции, кот-е где то принимают на вход, то что указано впереди - (isValid). Эта функция возьмет это значение в компоненте в который передается, т.е. в инпуте обернутом HOC, ведь мы передаем всю эту стрелочную функцию. Она берет на вход isValid и возвращает ф-ю handleOnValidationChange
                    />
                )}
            </div>
            {/* { commentError ? <div className={styles.errorPanel} >{commentError}</div> : null } */}
            <PrimaryButton text={buttonName.logUpButton} fontSize={'big'} type="submit" disabled={formIsValid}/>
        </form>
    );
}