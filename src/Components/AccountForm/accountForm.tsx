import styles from './accountForm.module.scss';
import { buttonName } from '../../data';
import { IFormFields } from '../../types/dataTypes';
import { IAuth } from '../../types/authTypes';
import { useState, FormEvent } from 'react';
import { InputWithValidation } from '../Common/Input/input';
import PrimaryButton from '../Common/Buttons/PrimaryButton/primaryButton';
import { createFieldsString, createFieldsBoolean } from '../../utils/configureFieldNames';

export interface AccountFormProps {
    fields: IFormFields[];
    hasError?: boolean;
    error?: string;
    handleAuthFormSubmit?: (formData: IAuth) => void;
}

export default function AccountForm({ fields, hasError, error, handleAuthFormSubmit }: AccountFormProps) {
    const [ formData, setFormData ] = useState(createFieldsString(fields));
    const [ formValidation, setformValidation ] = useState(createFieldsBoolean(fields));
    const formIsValid = Object.values(formValidation).some(value => value); // проверка на formValidation.login || formValidation.password;

    const handleChange = (fieldName: string, value: string) => {
        setFormData(prevData => ({ ...prevData, [fieldName]: value }));
    };

    const handleOnValidationChange = (fieldName: string, isValid: boolean) => {
        setformValidation(prevData => ({ ...prevData, [fieldName]: isValid}));
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('formData: ', formData);
        console.log('formValidation: ', formValidation);
        console.log('formIsValid: ', formIsValid);
        handleAuthFormSubmit && handleAuthFormSubmit({ login: formData.login, password: formData.password });
    };

    return (
        <form className={styles.accountFrom} onSubmit={handleSubmit}>
            <div className={styles.formFields}>
                {fields.map((field, index) => 
                    <InputWithValidation
                        key={index}
                        labelName={field.name}
                        varName={field.varName}
                        type={field.type}
                        value={formData[field.varName]}
                        sameMessage={true}
                        onHandleChange={(value) => handleChange(field.varName, value)}
                        onValidationChange={(isValid) => handleOnValidationChange(field.varName, isValid)} // Вот как создаются функции, кот-е где то принимают на вход, то что указано впереди - (isValid). Эта функция возьмет это значение в компоненте в который передается, т.е. в инпуте обернутом HOC, ведь мы передаем всю эту стрелочную функцию. Она берет на вход isValid и возвращает ф-ю handleOnValidationChange
                    />
                )}
            </div>
            <PrimaryButton text={buttonName.logUpButton} fontSize={'big'} type="submit" disabled={formIsValid}/>
            { hasError ? <div className={styles.errorPanel}>{error}</div> : null }
        </form>
    );
}