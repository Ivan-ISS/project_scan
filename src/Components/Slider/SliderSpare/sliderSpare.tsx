import styles from './sliderSpare.module.scss';
import { IPublicationSummary } from '../../../types/publicationTypes';
import { useEffect, useState } from 'react';
import { useAppSelector } from '../../../redux/store';
import { selectPublicationSummary } from '../../../redux/slices/publicationSummarySlice/publicationSummarySelector';
import ArrowButton from '../../Common/Buttons/ArrowButton/arrowButton';
import CardSummary from '../../Common/CardSummary/cardSummary';

export default function SliderSum() {
    const publicationSummary = useAppSelector(selectPublicationSummary);
    const [ slides, setSlides ] = useState<IPublicationSummary[]>([]);

    useEffect(() => {
        const arrSlides: IPublicationSummary[] = [];
        for (let i = 0; i < publicationSummary.length; i++) {
            arrSlides.push(publicationSummary[i]);
        }
        setSlides(arrSlides);
    }, [publicationSummary]);

    const nextSlide = () => {
        if(slides.length > 0) {
            const firstItem = slides.shift();
            if(firstItem) {
                setSlides([...slides, firstItem]);
            }
        }
    };

    const prevSlide = () => {
        if(slides.length > 0) {
            const lastItem = slides.pop();
            if(lastItem) {
                setSlides([lastItem, ...slides]);
            }
        }
    };

    return (
        <div className={styles.slider}>
            <ArrowButton direction={'left'} onClick={() => prevSlide()}/>
            <div className={styles.sliderBody}>
                <div className={styles.sliderHeading}>
                    <div>Период</div>
                    <div>Всего</div>
                    <div>Риски</div>
                </div>
                <div className={styles.slidesArea}>
                    {slides.map((slide, index) => (
                        <CardSummary key={index} item={slide}/>
                    ))}
                </div>
            </div>
            <ArrowButton direction={'right'} onClick={() => nextSlide()}/>
        </div>
    );
}