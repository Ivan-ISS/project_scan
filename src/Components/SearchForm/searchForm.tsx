import styles from './searchForm.module.scss';
import { buttonName, searchFormSelectField, searchFormCheckboxField } from '../../data';
import { IFormFields } from '../../types/dataTypes';
import { ISearchData } from '../../types/scanTypes';
import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../redux/store';
import { selectTokenAccess } from '../../redux/slices/authSlice/authSelector';
import { fetchSummary } from '../../redux/slices/summarySlice/summarySlice';
import { fetchDocuments } from '../../redux/slices/documentsSlice/documentsSlice';
import { resetLazyNumber } from '../../redux/slices/documentsSlice/documentsSlice';
import { resetContentData } from '../../redux/slices/contentSlice/contentSlice';
import { InputWithValidation } from '../Common/Input/input';
import PrimaryButton from '../Common/Buttons/PrimaryButton/primaryButton';
import Select from '../Common/Select/select';
import { createFieldsString, createFieldsBoolean } from '../../utils/configureFieldNames';
import CheckboxGroup from '../Common/CheckboxGroup/checkboxGroup';
import routes from '../../routes';

export interface AccountFormProps {
    fields: IFormFields[];
    hasError?: boolean;
    error?: string;
}

export default function AccountForm({ fields, hasError, error }: AccountFormProps) {
    const dispatch = useAppDispatch();
    const tokenAccess = useAppSelector(selectTokenAccess);
    const navigate = useNavigate();
    const [ formData, setFormData ] = useState({
        ...createFieldsString(fields),
        ...createFieldsString([searchFormSelectField]),
        ...createFieldsString(searchFormCheckboxField),
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
        dispatch(resetLazyNumber());
        dispatch(resetContentData());
        dispatch(fetchSummary({ tokenAccess: tokenAccess, requestData: formData as unknown as ISearchData }));
        dispatch(fetchDocuments({ tokenAccess: tokenAccess, requestData: formData as unknown as ISearchData }));
        navigate(routes.results());
    };

    return (
        <form className={styles.searchFrom} onSubmit={handleSubmit}>
            <div className={styles.formFields}>
                {fields.slice(0, 2).map((field, index) => 
                    <InputWithValidation
                        key={index}
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
            <div className={styles.formCheckboxes}>
                <div className={styles.chekboxPanel}>
                    <CheckboxGroup options={searchFormCheckboxField} onHandleChange={(fieldName, value) => handleChange(fieldName, value)}/>
                </div>
                <div className={styles.buttonPanel}>
                    <PrimaryButton text={buttonName.search} fontSize={'big'} type="submit" disabled={formIsValid}/>
                    { hasError ? <div className={styles.errorPanel}>{error}</div> : null }
                    <div className={styles.mark}>* Обязательные к заполнению поля</div>
                </div>
            </div>
        </form>
    );
}