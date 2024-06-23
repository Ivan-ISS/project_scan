import { ReactNode, HTMLAttributes } from 'react';
import styles from './paragraph.module.scss';

export interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
    state: 'static' | 'adaptive'
    children?: JSX.Element | ReactNode;
}

export default function Paragraph({ children, state, ...props }: ParagraphProps) {

    return (
        <p {...props} className={`${styles.paragraph} ${styles[state]}`}>
            {children}
        </p>
    );
}