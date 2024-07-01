import styles from '../../styles/pageStyles/results.module.scss';
import { titleContent, imagePaths } from '../../data';
import { useAppSelector } from '../../redux/store';
import { selectPublicationSummary } from '../../redux/slices/summarySlice/summarySelector';
import PageTitle from '../../Components/Common/Titles/PageTitle/pageTitle';
import SectionTitle from '../../Components/Common/Titles/SectionTitle/sectionTitle';
import Paragraph from '../Common/Paragraph/paragraph';
import Picture from '../Common/Picture/picture';
import SliderResults from '../Slider/SliderResults/sliderResults';

export default function Results() {
    const publicationSummary = useAppSelector(selectPublicationSummary);

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
                <div className={styles.amoundFound}>{`Найдено ${publicationSummary.reduce((sum, el) => sum + el.valueTotal, 0)} вариантов`}</div>
                <SliderResults/>
            </section>
        </>
    );
}