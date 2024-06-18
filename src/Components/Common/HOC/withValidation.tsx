import { useState, ComponentType } from 'react';
import { InputProps } from '../Input/input';

export interface WithValidationProps extends InputProps {
    value: string;
    onChange: (value: string) => void;
    onValidationChange: (isValid: boolean) => void;
}

export default function withValidation<P extends WithValidationProps>(
    WrappedComponent: ComponentType<P>
): ComponentType<P & WithValidationProps> {

    const UpdatedComponent = (props: P) => {
        const [ isValid, setIsValid ] = useState(false);

        const onInputChange = (value: string) => {
            const valueIsValid = value.trim() === '';
            setIsValid(valueIsValid);
            props.onValidationChange(valueIsValid);
            props.onChange(value);
        };

        return <WrappedComponent {...props} hasError={isValid} onChange={onInputChange}/>;
    };

    return UpdatedComponent;
}