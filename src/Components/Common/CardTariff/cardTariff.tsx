import styles from './cardTariff.module.scss';
import { ICardTariffItem } from '../../../types/dataTypes';
import { HTMLAttributes } from 'react';
import { useAppSelector } from '../../../redux/store';
import { selectUserTariff } from '../../../redux/slices/userSlice/userSelector';
import Picture from '../Picture/picture';
import ButtonPrimary from '../Buttons/PrimaryButton/primaryButton';

export interface CardTariffProps extends HTMLAttributes<HTMLDivElement> {
    item: ICardTariffItem;
}

export default function CardTariff({ item, ...props }: CardTariffProps) {
    const userTariff = useAppSelector(selectUserTariff);

    return (
        <div {...props} className={ `${styles.cardArgument} ${ item.tariffName === userTariff && styles[userTariff.toLocaleLowerCase()]}` }>
            <div className={ `${styles.headingArea} ${styles[item.tariffName.toLocaleLowerCase()]}` }>
                <div>
                    <h3 className={styles.tariffName}>
                        {item.tariffName}
                    </h3>
                    <p className={styles.description}>
                        {item.description}
                    </p>
                </div>
                <div className={styles.imageContainer}>
                    <Picture
                        src={item.imagePath.src}
                        alt={item.imagePath.alt}
                    />
                </div>
            </div>
            <div className={styles.body}>
                {
                    item.tariffName === userTariff &&
                    <div className={styles.badge}>
                        {item.badge}
                    </div>
                }
                <div className={styles.price}>
                    <span className={styles.currentAmount}>
                        {`${item.price.currentAmount} ${item.price.currencySymbol}`}
                    </span>
                    <span className={styles.oldAmount}>
                        {`${item.price.oldAmount} ${item.price.currencySymbol}`}
                    </span>
                    <p className={styles.installment}>
                        {item.price.installment}
                    </p>
                </div>
                <div className={styles.list}>
                    <div className={styles.initial}>
                        {item.characteristics.initial}
                    </div>
                    <ul className={styles.characteristics}>
                        {item.characteristics.list.map((characteristic, index) => (
                            <li key={index} className={styles.characteristic}>
                                {characteristic}
                            </li>
                        ))}
                    </ul>
                </div>
                {
                    item.tariffName === userTariff &&
                    <ButtonPrimary 
                        style={{ background: '#d2d2d2', color: '#000' }} 
                        text={item.buttonName.active} 
                        fontSize={'small'}
                    /> 
                }
                {
                    item.tariffName !== userTariff &&
                    <ButtonPrimary 
                        text={item.buttonName.notActive}
                        fontSize={'small'}
                    />
                }
            </div>
        </div>
    );
}