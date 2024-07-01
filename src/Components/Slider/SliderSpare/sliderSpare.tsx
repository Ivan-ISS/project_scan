import styles from './sliderSpare.module.scss';
import { ISummary } from '../../../types/scanTypes';
import { useEffect, useState } from 'react';
import { useAppSelector } from '../../../redux/store';
import { selectPublicationSummary } from '../../../redux/slices/summarySlice/summarySelector';
import ArrowButton from '../../Common/Buttons/ArrowButton/arrowButton';
import CardSummary from '../../Common/CardSummary/cardSummary';

export default function SliderSum() {
    const summaryData = useAppSelector(selectPublicationSummary);
    const [ slides, setSlides ] = useState<ISummary[]>([]);

    useEffect(() => {
        const arrSlides: ISummary[] = [];
        for (let i = 0; i < summaryData.length; i++) {
            arrSlides.push(summaryData[i]);
        }
        setSlides(arrSlides);
    }, [summaryData]);

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