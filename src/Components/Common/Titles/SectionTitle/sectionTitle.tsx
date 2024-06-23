import styles from './sectionTitle.module.scss';
import { HTMLAttributes } from 'react';

export interface SectionTitleProps extends HTMLAttributes<HTMLHeadElement> {
    titleContent: string;
    size: 'sizeHome' | 'sizeRest'
}

export default function SectionTitle({ titleContent, size, ...props }: SectionTitleProps) {

    return (
        <h1 {...props} className={`${styles.pageTitle} ${styles[size]}`}>
            {titleContent}
        </h1>
    );
}