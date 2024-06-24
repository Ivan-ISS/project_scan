import styles from './cardArgument.module.scss';
import { ICardArgumentItem } from '../../../types/dataTypes';
import { HTMLAttributes } from 'react';
import Picture from '../Picture/picture';
import Paragraph from '../Paragraph/paragraph';

export interface CardArgumentProps extends HTMLAttributes<HTMLDivElement> {
    item: ICardArgumentItem;
}

export default function CardArgument({ item, ...props }: CardArgumentProps) {

    return (
        <div {...props} className={styles.cardArgument}>
            <div className={styles.imageContainer}>
                <Picture
                    src={item.path}
                    alt={'item'}
                />
            </div>
            <Paragraph state={'static'}>
                {item.content}
            </Paragraph>
        </div>
    );
}