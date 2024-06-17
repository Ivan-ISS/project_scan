import styles from './pageTitle.module.scss';
import { HTMLAttributes } from 'react';

export interface PageTitleProps extends HTMLAttributes<HTMLHeadElement> {
    titleContent: string;
    size: 'sizeDesktopHome' | 'sizeDesktopRest'
}

export default function PageTitle({ titleContent, size, ...props }: PageTitleProps) {

    return (
        <h1 {...props} className={`${styles.pageTitle} ${styles[size]}`}>
            {titleContent}
        </h1>
    );
}