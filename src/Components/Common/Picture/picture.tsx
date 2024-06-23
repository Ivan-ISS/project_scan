import { HTMLAttributes } from 'react';
import styles from './picture.module.scss';

export interface ImageContainerProps extends HTMLAttributes<HTMLImageElement> {
    src: string;
    alt: string;
}

export default function ImageContainer({ src, alt, ...props }: ImageContainerProps) {

    return (
        <img {...props} className={styles.image} src={src} alt={alt}/>
    );
}