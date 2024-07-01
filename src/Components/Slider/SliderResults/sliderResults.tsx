import styles from './sliderResults.module.scss';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import { useAppSelector } from '../../../redux/store';
import { selectPublicationSummary, selectSummaryStatus } from '../../../redux/slices/publicationSummarySlice/publicationSummarySelector';
import CardSummary from '../../Common/CardSummary/cardSummary';
import ArrowButton from '../../Common/Buttons/ArrowButton/arrowButton';

export default function SLiderSummary() {
    const [ slidesToShow, setSlidesToShow ] = useState(1);
    const publicationSummary = useAppSelector(selectPublicationSummary);
    const summaryStatus = useAppSelector(selectSummaryStatus);
    const sliderBodyRef = useRef<HTMLDivElement>(null);
    const sliderRef = useRef<Slider>(null);
    const settings = {
        dots: false,                    // Вкл/выкл точки навигации
        infinite: true,                 // Вкл/выкл бесконечное циклическое движение
        speed: 500,                     // Скорость анимации
        slidesToShow: slidesToShow,     // Кол-во видимых карточек
        slidesToScroll: 1,              // Кол-во карточек, которые скроллятся за раз
        arrows: false,                  // Вкл/выкл стрелки
    };

    useEffect(() => {
        let minCardWidth: number;
        if (sliderBodyRef.current)  {
            minCardWidth = sliderBodyRef.current?.offsetWidth / publicationSummary.length;
            if (minCardWidth < 140) {
                minCardWidth = 140;
            }
        }
        const updateSlidesToShow = () => {
            if (sliderBodyRef.current)  {
                const containerWidth = sliderBodyRef.current?.offsetWidth;
                const maxSlides = Math.floor(containerWidth / minCardWidth);

                setSlidesToShow(maxSlides);
                if (window.innerWidth < 600) {
                    setSlidesToShow(1);
                }
            }
        };

        window.addEventListener('resize', updateSlidesToShow);
        updateSlidesToShow();
    
        return () => {
          window.removeEventListener('resize', updateSlidesToShow);
        };
    }, [publicationSummary]);

    return (
        <div className={styles.wrapSlider}>
            <ArrowButton direction={'left'} onClick={() => sliderRef.current?.slickPrev()}/>
            <div className={styles.slider}>
                <div className={styles.sliderHeading}>
                    <div>Период</div>
                    <div>Всего</div>
                    <div>Риски</div>
                </div>
                <div ref={sliderBodyRef} className={styles.sliderBody}>
                    <Slider {...settings} ref={sliderRef}>
                        {publicationSummary.map((item, index) => (
                            <>
                                {
                                    summaryStatus === 'in progress' ? <div>Loading...</div> :
                                    <CardSummary key={index} item={item}/>
                                }
                            </>
                        ))}
                    </Slider>
                </div>
            </div>
            <ArrowButton direction={'right'} onClick={() => sliderRef.current?.slickNext()}/>
        </div>
    );
}