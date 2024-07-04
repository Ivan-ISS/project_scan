import styles from './cardPublication.module.scss';
import { IContent } from '../../../types/scanTypes';
import { imagePaths, buttonName } from '../../../data';
import { useState, useEffect, HTMLAttributes } from 'react';
import DOMPurify from 'dompurify';
import Picture from '../Picture/picture';
import SecondaryButton from '../Buttons/SecondaryButton/secondaryButton';

export interface CardPublicationProps extends HTMLAttributes<HTMLDivElement> {
    publication: IContent;
}

export default function CardPublication({ publication, ...props }: CardPublicationProps) {
    const { issueDate, url, source, title, attributes, content } = publication.ok;
    const [ imageSrc, setImageSrc ] = useState<string | null>(null);
    const [ sanitizedMarkup, setSanitizedMarkup ] = useState('');

    useEffect(() => {
        setSanitizedMarkup(content.markup.replace(/&lt;[^>]*&gt;|["']|&/g, ' '));
    }, [content.markup, sanitizedMarkup]);


    useEffect(() => {
        const regex = /src="([^"]+)"/g;
        const match = regex.exec(content.markup);
        if (match) {
            setImageSrc(match[1]);
        }
    }, [content.markup]);

    const handleClick = () => {
        window.open(publication.ok.url, '_blank');
    };

    return (
        <div {...props} className={styles.CardPublication}>
            <div className={styles.info}>
                <div className={styles.date}>{issueDate.split('T')[0]}</div>
                <a href={url} className={styles.source} target={'_blank'}>{source.name}</a>
            </div>
            <h3 className={styles.title}>{title.text}</h3>
            <div
                className={`
                    ${styles.tag}
                    ${attributes.isTechNews && styles['tagTech']}
                    ${attributes.isAnnouncement && styles['tagAnnouncement']}
                    ${attributes.isDigest && styles['tagDigest']}
                `}>
                {
                    attributes.isTechNews
                    ? 'Технические новости'
                    : attributes.isAnnouncement
                    ? 'Анонсы и события'
                    : attributes.isDigest
                    ? 'Сводки новостей'
                    : 'Публикация без тега'
                }
            </div>
            <div className={styles.imageContainer}>
                <Picture
                    style={{ height: '100%', objectFit: 'cover' }}
                    src={imageSrc ? imageSrc : imagePaths.resultsPage[1].src}
                    alt={imageSrc ? 'publication image' : imagePaths.resultsPage[1].alt}
                />
            </div>
            <p className={styles.text} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(sanitizedMarkup) }}></p>
            <div className={styles.bottomPanel}>
                <SecondaryButton style={{ width: 'max-content' }} text={buttonName.result} onClick={handleClick}/>
                <div className={styles.wordCount}>Слов: {attributes.wordCount}</div>
            </div>
        </div>
    );
}