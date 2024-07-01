import styles from './sliderHome.module.scss';
import { cardArgumentItems } from '../../../data';
import { useEffect, useRef, useState } from 'react';
import ArrowButton from '../../Common/Buttons/ArrowButton/arrowButton';
import CardArgument from '../../Common/CardArgument/cardArgument';
import useSlider from '../../../hooks/useSlider';

export interface SliderProps {
    percentageWidth: number;
    percentageGap: number;
}

export default function Slider({ percentageWidth, percentageGap }: SliderProps) {
    const [ sliderWidth, setSliderWidth ] = useState<number>(0);
    const [ cardWidth, setCardWidth ] = useState<number>(0);
    const [ cardGap, setCardGap ] = useState<number>(0);
    const slideContainerRef = useRef<HTMLDivElement>(null);
    const sliderRef = useRef<HTMLDivElement>(null);
    const [ nextSlide, prevSlide ] = useSlider({ cardItems: cardArgumentItems, slideContainer: slideContainerRef, slideWidth: cardWidth + cardGap });

    useEffect(() => {
        setTimeout(nextSlide, 500);
    }, [sliderWidth]);

    useEffect(() => {
        const updateWidth = () => {
            if (window.innerWidth < 1080) { percentageWidth = 0.45; }
            if (window.innerWidth < 800) { percentageWidth = 0.85; percentageGap = 0.55; }
            if (sliderRef.current) {
                setSliderWidth(sliderRef.current.offsetWidth);
                setCardWidth(sliderRef.current.offsetWidth * percentageWidth);
                setCardGap(sliderRef.current.offsetWidth * percentageGap);
            }
        };
    
        window.addEventListener('resize', updateWidth);
        updateWidth();
    
        return () => {
            window.removeEventListener('resize', updateWidth);
        };
    });

    return (
        <div className={styles.slider}>
            <ArrowButton direction={'left'} onClick={() => prevSlide()}/>
            <div ref={sliderRef} className={styles.wrapCardsBlock}>
                <div ref={slideContainerRef} style={{ gap: `${cardGap}px` }} className={styles.cardsBlock}>
                    {cardArgumentItems.map((item, index) => (
                        <CardArgument key={index} style={{ minWidth: `${cardWidth}px` }} item={item}/>
                    ))}
                </div>
            </div>
            <ArrowButton direction={'right'} onClick={() => nextSlide()}/>
        </div>
    );
}