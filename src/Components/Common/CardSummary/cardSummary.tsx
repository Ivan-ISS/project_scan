import styles from './cardSummary.module.scss';
import { ISummary } from '../../../types/scanTypes';
import { HTMLAttributes } from 'react';

export interface CardSummaryProps extends HTMLAttributes<HTMLDivElement> {
    item: ISummary;
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