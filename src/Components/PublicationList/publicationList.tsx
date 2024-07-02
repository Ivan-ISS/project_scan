import styles from './publicationList.module.scss';
import { IContent } from '../../types/scanTypes';
import { HTMLAttributes } from 'react';
import CardPublication from '../Common/CardPublication/cardPublication';

export interface PublicationListProps extends HTMLAttributes<HTMLDivElement>{
    publications: IContent[];
}

export default function PublicationList({ publications, ...props }: PublicationListProps) {

    return (
        <div {...props} className={styles.publicationList}>
            {publications.map((publication, index) => (
                <CardPublication key={index} publication={publication}/>
            ))}
        </div>
    );
}