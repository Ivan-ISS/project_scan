import { useState, ComponentType } from 'react';
import { InputProps } from '../Input/input';
import { validateInn } from '../../../utils/validateInn';
import { validateDate, validateRangeDate, setStartDate, setEndDate } from '../../../utils/validateDate';

export interface WithValidationProps extends InputProps {
    value: string;
    sameMessage?: boolean;
    onHandleChange: (value: string) => void;
    onValidationChange: (isValid: boolean) => void;
}

export default function withValidation<P extends WithValidationProps>(
    WrappedComponent: ComponentType<P>
): ComponentType<P & WithValidationProps> {

    const UpdatedComponent = (props: P) => {
        const [ isValid, setIsValid ] = useState(false);
        const [ messageError, setMessageError ] = useState('');

        const onInputChangeBlur = (value: string) => {

            if (typeof value !== 'string') {
                value = '';
            }

            let valueIsValid = value.trim() === '';                     // Валидация на пустые строки (обязательные поля)
            setIsValid(valueIsValid);

            if (valueIsValid) {
                props.sameMessage && setMessageError(`Введите ${props.labelName.toLocaleLowerCase()}`);
                !props.sameMessage && setMessageError('Обязательное поле');
            }

            if (props.varName === 'inn' && value.length > 0) {          // Валидация ИНН
                setMessageError(validateInn(value));
                valueIsValid = !!validateInn(value);
                setIsValid(valueIsValid);
            }

            if (props.varName === 'quantity' && parseFloat(value) > 1000) { value = '1000'; }
            if (props.varName === 'quantity' && parseFloat(value) < 1) { value = '1'; }

            if (props.varName === 'startDate') { setStartDate(value); } // Сохранение введенного значения даты начала диапазона
            if (props.varName === 'endDate') { setEndDate(value); }     // Сохранение введенного значения даты конца диапазона
            if (props.type === 'date' && value.length > 0) {            // Валидация даты
                setMessageError(validateDate(value));
                valueIsValid = !!validateDate(value);
                setIsValid(valueIsValid);

                if (!valueIsValid) {                                    // Валидация диапазона дат
                    setMessageError(validateRangeDate());
                    valueIsValid = !!validateRangeDate();
                    setIsValid(valueIsValid);
                }
            }

            props.onValidationChange(valueIsValid);
            props.onHandleChange(value);

            valueIsValid && console.log('valueIsValid поле не валидно: ', props.varName, ' - ', valueIsValid);
            !valueIsValid && console.log('valueIsValid поле валидно: ', props.varName, ' - ',  valueIsValid);
        };

        return <WrappedComponent
            {...props}
            hasError={isValid}
            messageError={messageError}
            onHandleChange={onInputChangeBlur}
            // onBlur={onInputChangeBlur}
        />;
    };

    return UpdatedComponent;
}