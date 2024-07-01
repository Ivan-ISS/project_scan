import styles from '../../styles/pageStyles/results.module.scss';
import { titleContent, imagePaths } from '../../data';
import PageTitle from '../../Components/Common/Titles/PageTitle/pageTitle';
import SectionTitle from '../../Components/Common/Titles/SectionTitle/sectionTitle';
import Paragraph from '../Common/Paragraph/paragraph';
import Picture from '../Common/Picture/picture';
import SliderResults from '../Slider/SliderResults/sliderResults';

export default function Results() {

    return (
        <>
            <section className={styles.intro}>
                <div className={styles.infoBlock}>
                    <PageTitle titleContent={titleContent.resultsPage[0]} size={'sizeRest'}/>
                    <Paragraph state={'adaptive'}>
                        Поиск может занять некоторое время, просим сохранять терпение.
                    </Paragraph>
                </div>
                <div className={styles.imageContainer}>
                    <Picture
                        src={imagePaths.resultsPage[0].src}
                        alt={imagePaths.resultsPage[0].alt}
                    />
                </div>
            </section>

            <section className={styles.summary}>
                <SectionTitle titleContent={titleContent.resultsPage[1]} size={'sizeRest'}/>
                <div className={styles.amoundFound}>{`Найдено ${''} вариантов`}</div>
                <SliderResults/>
            </section>
        </>
    );
}