import styles from './accountForm.module.scss';
import { buttonName } from '../../data';
import { IlogUpFormFields } from '../../types/dataTypes';
import Input from '../Common/Input/input';
import PrimaryButton from '../Common/Buttons/PrimaryButton/primaryButton';

export interface AccountFormProps {
    fields: IlogUpFormFields[];
}

export default function AccountForm({ fields }: AccountFormProps) {

    return (
        <form className={styles.accountFrom}>
            <div className={styles.formFields}>
                {fields.map((field, index) => 
                    <Input
                        key={index}
                        name={field.name}
                        type={field.type}
                    />
                )}
            </div>
            {/* { commentError ? <div className={styles.errorPanel} >{commentError}</div> : null } */}
            <PrimaryButton text={buttonName.logUpButton} fontSize={'big'} type="submit"/>
        </form>
    );
}