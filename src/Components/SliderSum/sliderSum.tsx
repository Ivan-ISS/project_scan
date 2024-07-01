import styles from './sliderSum.module.scss';
import { IPublicationSummary } from '../../types/publicationTypes';
import { useEffect, useState, useRef } from 'react';
import { useAppSelector } from '../../redux/store';
import { selectPublicationSummary } from '../../redux/slices/publicationSummarySlice/publicationSummarySelector';
import ArrowButton from '../Common/Buttons/ArrowButton/arrowButton';
import CardSummary from '../Common/CardSummary/cardSummary';

export default function SliderSum() {
    const publicationSummary = useAppSelector(selectPublicationSummary);
    const [ slides, setSlides ] = useState<IPublicationSummary[]>([]);
    const [ coordArea, setCoordArea ] = useState<DOMRect>();
    const [ differ, setDiffer ] = useState(0);
    const sliderAreaRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const updateCoord = () => {
            sliderAreaRef.current && setCoordArea(sliderAreaRef.current?.getBoundingClientRect());
            coordArea && setDiffer(coordArea.width - publicationSummary.length * 140);
            console.log('Coordinate Area: ', sliderAreaRef.current?.getBoundingClientRect());
            console.log('differ: ', differ);
        };

        window.addEventListener('resize', updateCoord);
        updateCoord();
    }, []);

    useEffect(() => {
        const summary: IPublicationSummary[] = [];
        for (let i = 0; i < publicationSummary.length; i++) {
            summary.push(publicationSummary[i]);
        }
        setSlides(summary);
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
                <div ref={sliderAreaRef} className={styles.slidesArea}>
                    {slides.map((slide, index) => (
                        <CardSummary key={index} item={slide}/>
                    ))}
                </div>
            </div>
            <ArrowButton direction={'right'} onClick={() => nextSlide()}/>
        </div>
    );
}