import styles from '../../styles/pageStyles/home.module.scss';
import { titleContent, imagePaths, buttonName, cardTariffItems } from '../../data';
import PageTitle from '../Common/Titles/PageTitle/pageTitle';
import SectionTitle from '../Common/Titles/SectionTitle/sectionTitle';
import Paragraph from '../Common/Paragraph/paragraph';
import PrimaryButton from '../Common/Buttons/PrimaryButton/primaryButton';
import Picture from '../Common/Picture/picture';
import Slider from '../Common/Slider/slider';
import CardTariff from '../Common/CardTariff/cardTariff';

export default function Home() {
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
                    <PrimaryButton style={{ maxWidth: '355px' }} text={buttonName.requestData} fontSize={'big'}/>
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
                    <Slider percentageWidth={0.29} percentageGap={0.0425} insert={'cardArgument'}/>
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