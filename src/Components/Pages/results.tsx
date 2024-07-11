import styles from '../../styles/pageStyles/results.module.scss';
import { titleContent, imagePaths, buttonName } from '../../data';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../redux/store';
import { selectTokenAccess } from '../../redux/slices/authSlice/authSelector';
import { selectPublicationSummary } from '../../redux/slices/summarySlice/summarySelector';
import { selectDocumentsDate, selectDocumentsStatus } from '../../redux/slices/documentsSlice/documentsSelector';
import { selectContentData, selectContentStatus } from '../../redux/slices/contentSlice/contentSelector';
import { selectLazyNumber, selectLazyStep, selectLazyLimit } from '../../redux/slices/documentsSlice/documentsSelector';
import { fetchContent } from '../../redux/slices/contentSlice/contentSlice';
import { increaseLazyNumber } from '../../redux/slices/documentsSlice/documentsSlice';
import PageTitle from '../../Components/Common/Titles/PageTitle/pageTitle';
import SectionTitle from '../../Components/Common/Titles/SectionTitle/sectionTitle';
import Paragraph from '../Common/Paragraph/paragraph';
import Picture from '../Common/Picture/picture';
import SliderResults from '../Slider/SliderResults/sliderResults';
import PublicationList from '../PublicationList/publicationList';
import Loader from '../Common/Loader/loader';
import PrimaryButton from '../Common/Buttons/PrimaryButton/primaryButton';
import routes from '../../routes';

export default function Results() {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const publicationSummary = useAppSelector(selectPublicationSummary);
    const documentsData = useAppSelector(selectDocumentsDate);
    const documentsStatus = useAppSelector(selectDocumentsStatus);
    const tokenAccess = useAppSelector(selectTokenAccess);
    const contentData = useAppSelector(selectContentData);
    const contentStatus = useAppSelector(selectContentStatus);
    const lazyNumber = useAppSelector(selectLazyNumber);
    const lazyStep = useAppSelector(selectLazyStep);
    const lazyLimit = useAppSelector(selectLazyLimit);

    useEffect(() => {
        if (documentsData.length) {
            dispatch(fetchContent({ tokenAccess: tokenAccess, requestData: documentsData.slice(lazyNumber - lazyStep, lazyNumber) }));
            dispatch(increaseLazyNumber());
        }
    }, [dispatch, documentsData, tokenAccess]);

    const hendleLazyLoad = () => {
        console.log('lazyNumber: ', lazyNumber, ' lazyStep: ', lazyStep);
        dispatch(fetchContent({ tokenAccess: tokenAccess, requestData: documentsData.slice(lazyNumber - lazyStep, lazyNumber) }));
        dispatch(increaseLazyNumber());
    };

    const handleLink = () => {
        navigate(routes.search());
    };

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
                    <PublicationList publications={contentData}/>
                {
                    ((contentStatus === 'in progress' || documentsStatus === 'in progress') ||
                    (contentStatus === 'successfully' && documentsData.length !== 0 && contentData.length === 0)) &&
                    <Loader style={{ alignSelf: 'center' }}/>
                }
                {
                    ((documentsStatus === 'successfully' && contentStatus === 'not started' && contentData.length === 0) ||
                    (documentsStatus === 'not started' && contentStatus === 'not started' && contentData.length === 0) ||
                    (documentsStatus === 'successfully' && contentStatus === 'successfully' && documentsData.length === 0)) &&
                    <div className={styles.alternative}>
                        <p>Нет найденных вариантов.</p>
                        <div className={styles.link} onClick={handleLink}>Измените параметры запроса</div>
                    </div>
                }
                {
                    lazyNumber < lazyLimit + lazyStep &&
                    <PrimaryButton
                        style={{ alignSelf: 'center', maxWidth: '305px' }}
                        text={buttonName.lazyLoad}
                        fontSize={'big'}
                        onClick={hendleLazyLoad}
                    />
                }
            </section>
        </>
    );
}