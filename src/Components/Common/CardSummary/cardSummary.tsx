import styles from './cardSummary.module.scss';
import { IPublicationSummary } from '../../../types/publicationTypes';
import { HTMLAttributes } from 'react';

export interface CardSummaryProps extends HTMLAttributes<HTMLDivElement> {
    item: IPublicationSummary;
}

export default function CardSummary({ item, ...props }: CardSummaryProps) {

    return (
        <div {...props} className={styles.cardSummary}>
            <div>{item.date.split('T')[0]}</div>
            <div>{item.valueTotal}</div>
            <div>{item.valueRisk}</div>
        </div>
    );
}