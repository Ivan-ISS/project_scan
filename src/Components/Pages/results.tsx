import styles from '../../styles/pageStyles/results.module.scss';
import { titleContent, imagePaths } from '../../data';
import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../redux/store';
import { selectTokenAccess } from '../../redux/slices/authSlice/authSelector';
import { selectPublicationSummary } from '../../redux/slices/summarySlice/summarySelector';
import { selectDocumentsDate } from '../../redux/slices/documentsSlice/documentsSelector';
import { selectContentData } from '../../redux/slices/contentSlice/contentSelector';
import { fetchContent } from '../../redux/slices/contentSlice/contentSlice';
import PageTitle from '../../Components/Common/Titles/PageTitle/pageTitle';
import SectionTitle from '../../Components/Common/Titles/SectionTitle/sectionTitle';
import Paragraph from '../Common/Paragraph/paragraph';
import Picture from '../Common/Picture/picture';
import SliderResults from '../Slider/SliderResults/sliderResults';
import PublicationList from '../PublicationList/publicationList';

export default function Results() {
    const dispatch = useAppDispatch();
    const publicationSummary = useAppSelector(selectPublicationSummary);
    const documentsData = useAppSelector(selectDocumentsDate);
    const tokenAccess = useAppSelector(selectTokenAccess);
    const contentData = useAppSelector(selectContentData);

    useEffect(() => {
        if (documentsData.length) {
            dispatch(fetchContent({ tokenAccess: tokenAccess, requestData: documentsData }));
        }
    }, [dispatch, documentsData, tokenAccess]);

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

            <section className={styles.publications}>
                <SectionTitle titleContent={titleContent.resultsPage[2]} size={'sizeRest'}/>
                {
                    contentData.length && 
                    <PublicationList publications={contentData}/>
                }
            </section>
        </>
    );
}