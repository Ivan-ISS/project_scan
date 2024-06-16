import styles from './textLines.module.scss';
import { ITextLine } from '../../../types/dataTypes';
import { HTMLAttributes } from 'react';

export interface TextLinesProps extends HTMLAttributes<HTMLDivElement> {
    textLines: ITextLine[];
}

export default function TextLines({ textLines, ...props }: TextLinesProps) {

    return (
        <div { ...props } className={styles.textLines}>
            {textLines.map((textLine, index) => (
                <p key={index}>{textLine.text}</p>
            ))}
        </div>
    );
}