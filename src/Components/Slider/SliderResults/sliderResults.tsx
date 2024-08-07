import styles from './sliderResults.module.scss';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import { useAppSelector } from '../../../redux/store';
import { selectPublicationSummary, selectSummaryStatus } from '../../../redux/slices/summarySlice/summarySelector';
import CardSummary from '../../Common/CardSummary/cardSummary';
import ArrowButton from '../../Common/Buttons/ArrowButton/arrowButton';
import Loader from '../../Common/Loader/loader';

export default function SLiderSummary() {
    const [ slidesToShow, setSlidesToShow ] = useState(1);
    const summaryData = useAppSelector(selectPublicationSummary);
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
            minCardWidth = sliderBodyRef.current?.offsetWidth / summaryData.length;
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
    }, [summaryData]);

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
                    {
                        summaryStatus === 'in progress' ?
                        <Loader style={{ margin: '3.5% auto' }}/> :
                        summaryData.length === 1 ?
                        <CardSummary item={summaryData[0]}/> :
                        <Slider {...settings} ref={sliderRef}>
                            {summaryData.map((item, index) => (
                                <div key={index}>
                                    <CardSummary item={item}/>
                                </div>
                            ))}
                        </Slider>
                    }
                </div>
            </div>
            <ArrowButton direction={'right'} onClick={() => sliderRef.current?.slickNext()}/>
        </div>
    );
}