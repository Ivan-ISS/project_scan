import styles from './searchForm.module.scss';
import { buttonName, searchFormSelectField } from '../../data';
import { IFormFields } from '../../types/dataTypes';
import { useState, FormEvent } from 'react';
import { InputWithValidation } from '../Common/Input/input';
import PrimaryButton from '../Common/Buttons/PrimaryButton/primaryButton';
import Select from '../Common/Select/select';
import { createFieldsString, createFieldsBoolean } from '../../utils/configureFieldNames';

export interface AccountFormProps {
    fields: IFormFields[];
    hasError?: boolean;
    error?: string;
}

export default function AccountForm({ fields, hasError, error }: AccountFormProps) {
    const [ formData, setFormData ] = useState({
        ...createFieldsString(fields),
        ...createFieldsString([searchFormSelectField])
    });
    const [ formValidation, setformValidation ] = useState(createFieldsBoolean(fields));
    const formIsValid = Object.values(formValidation).some(value => value);

    const handleChange = (fieldName: string, value: string) => {
        setFormData(prevData => ({ ...prevData, [fieldName]: value }));
    };

    const handleOnValidationChange = (fieldName: string, isValid: boolean) => {
        setformValidation(prevData => ({ ...prevData, [fieldName]: isValid}));
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        console.log('formData: ', formData);
        console.log('formValidation: ', formValidation);
        console.log('formIsValid: ', formIsValid);
        event.preventDefault();
    };

    return (
        <form className={styles.searchFrom} onSubmit={handleSubmit}>
            <div className={styles.formFields}>
                {fields.slice(0, 2).map((field, index) => 
                    <InputWithValidation
                        key={index}
                        style={{ maxWidth: '242px' }}
                        labelName={field.name}
                        varName={field.varName}
                        type={field.type}
                        value={formData[field.varName]}
                        placeholder={field.placeholder}
                        onHandleChange={(value) => handleChange(field.varName, value)}
                        onValidationChange={(isValid) => handleOnValidationChange(field.varName, isValid)}
                    />
                )}
                <Select
                    style={{ maxWidth: '242px' }}
                    name={searchFormSelectField.name}
                    varName={searchFormSelectField.varName}
                    values={searchFormSelectField.value}
                    onHandleChange={(value) => handleChange(searchFormSelectField.varName, value)}
                />
                <div className={styles.dateRange}>
                    <label htmlFor={fields[2].varName} className={styles.label}>Диапазон поиска *</label>
                    <div className={styles.range}>
                        {fields.slice(2, 4).map((field, index) => 
                            <InputWithValidation
                                key={index}
                                style={{ minWidth: '176px' }}
                                labelName={field.name}
                                varName={field.varName}
                                type={field.type}
                                value={formData[field.varName]}
                                placeholder={field.placeholder}
                                sameMessage={false}
                                onHandleChange={(value) => handleChange(field.varName, value)}
                                onValidationChange={(isValid) => handleOnValidationChange(field.varName, isValid)}
                            />
                        )}
                    </div>
                </div>
            </div>
            <PrimaryButton text={buttonName.search} fontSize={'big'} type="submit" disabled={formIsValid}/>
            { hasError ? <div className={styles.errorPanel}>{error}</div> : null }
        </form>
    );
}