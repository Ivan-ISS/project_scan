import styles from '../../styles/pageStyles/home.module.scss';
import { titleContent, imagePaths, buttonName, cardTariffItems } from '../../data';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../redux/store';
import { selectTokenAccess } from '../../redux/slices/authSlice/authSelector';
import PageTitle from '../Common/Titles/PageTitle/pageTitle';
import SectionTitle from '../Common/Titles/SectionTitle/sectionTitle';
import Paragraph from '../Common/Paragraph/paragraph';
import PrimaryButton from '../Common/Buttons/PrimaryButton/primaryButton';
import Picture from '../Common/Picture/picture';
import SliderHome from '../Slider/SliderHome/sliderHome';
import CardTariff from '../Common/CardTariff/cardTariff';
import routes from '../../routes';

export default function Home() {
    const navigate = useNavigate();
    const tokenAccess = useAppSelector(selectTokenAccess);

    const handleClickRequest = () => {
        navigate(routes.search());
    };

    return (
        <>
            <section className={styles.companyFunction}>
                <div className={styles.infoBlock}>
                    <PageTitle titleContent={titleContent.homePage[0]} size={'sizeHome'}/>
                    <div className={styles.text}>
                        <Paragraph state={'adaptive'}>
                            Комплексный анализ публикаций, получение данных в формате PDF на электронную почту.
                        </Paragraph>
                    </div>
                    {
                        tokenAccess &&
                        <PrimaryButton style={{ maxWidth: '355px' }} text={buttonName.requestData} fontSize={'big'} onClick={handleClickRequest}/>
                    }
                </div>
                <div className={styles.imageContainer}>
                    <Picture
                        src={imagePaths.homePage[0].src}
                        alt={imagePaths.homePage[0].alt}
                    />
                </div>
            </section>

            <section className={styles.arguments}>
                <SectionTitle titleContent={titleContent.homePage[1]} size={'sizeHome'}/>
                <div className={styles.slider}>
                    <SliderHome percentageWidth={0.29} percentageGap={0.0425}/>
                </div>
                <div className={styles.imageContainer}>
                    <Picture
                        src={imagePaths.homePage[1].src}
                        alt={imagePaths.homePage[1].alt}
                    />
                </div>
            </section>
            
            <section className={styles.tariffs}>
                <SectionTitle titleContent={titleContent.homePage[2]} size={'sizeHome'}/>
                <div className={styles.cardBlock}>
                    {cardTariffItems.map((item, index) => (
                        <CardTariff key={index} item={item}/>
                    ))}
                </div>
            </section>
        </>
    );
}