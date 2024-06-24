import styles from './slider.module.scss';
import { cardArgumentItems } from '../../../data';
import { useEffect, useRef, useState } from 'react';
import ArrowButton from '../Buttons/ArrowButton/arrowButton';
import CardArgument from '../CardArgument/cardArgument';
import useSlider from '../../../hooks/useSlider';

export interface SliderProps {
    percentageWidth: number;
    percentageGap: number;
    insert: 'cardArgument' | 'cardResult';
}

export default function Slider({ percentageWidth, percentageGap, insert }: SliderProps) {
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
            sliderRef.current && setSliderWidth(sliderRef.current.offsetWidth);
            sliderRef.current && setCardWidth(sliderRef.current.offsetWidth * percentageWidth);
            sliderRef.current && setCardGap(sliderRef.current.offsetWidth * percentageGap);
        };
    
        window.addEventListener('resize', updateWidth);
        updateWidth();

        // console.log('width: ', sliderWidth);
    
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
                        <>
                            { insert === 'cardArgument' && <CardArgument key={index} style={{ minWidth: `${cardWidth}px` }} item={item}/> }
                        </>
                    ))}
                </div>
            </div>
            <ArrowButton direction={'right'} onClick={() => nextSlide()}/>
        </div>
    );
}