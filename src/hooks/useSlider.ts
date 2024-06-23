import { useState, useEffect } from 'react';

export interface IUseSlider {
    cardItems: unknown[];
    slideContainer: React.RefObject<HTMLDivElement>;
    slideWidth: number;
}

export type TReturnedBySlider = [
    () => void,
    () => void,
]

export default function  useSlider({ cardItems, slideContainer, slideWidth }: IUseSlider): TReturnedBySlider {
    const [indexSlide, setIndexSlide] = useState<number>(0);
    const [direction, setDirection] = useState<string | null>(null);
    const [isActive, setIsActive] = useState<boolean>(true);

    /* useEffect(() => {
        const ID = setInterval(nextSlide, 5000);

        return () => clearInterval(ID);
    }, [isActive]); */

    useEffect(() => {
        // console.log('indexSlide: ', indexSlide, ' cardItems: ', cardItems);
        const container = slideContainer.current;
        if (container && isActive) {
            setIsActive(false);
            container.style.transition = 'transform 0.5s ease';
            if (direction === 'next') {
                container.style.transform = `translateX(-${2 * slideWidth}px)`;
            }
            if (direction === 'prev') {
                container.style.transform = 'translateX(0px)';
            }
            setTimeout(() => {
                container.style.transition = 'none';
                container.style.transform = `translateX(-${slideWidth}px)`;
                direction === 'next' && cardItems.push(cardItems.shift());
                direction === 'prev' && cardItems.unshift(cardItems.pop());
                setIsActive(true);
            }, 500);
        }
      }, [cardItems, direction, indexSlide, slideContainer, slideWidth]);

    const nextSlide = () => {
        setIndexSlide((indexSlide + 1) % cardItems.length);
        setDirection('next');
        // cardItems.push(cardItems.shift());
    };

    const prevSlide = () => {
        setIndexSlide((indexSlide - 1 + cardItems.length) % cardItems.length);
        setDirection('prev');
        // cardItems.unshift(cardItems.pop());
    };

    return [nextSlide, prevSlide];
}