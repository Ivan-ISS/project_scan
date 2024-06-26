import styles from '../../styles/pageStyles/search.module.scss';
import { titleContent, imagePaths, searchFormFields } from '../../data';
import PageTitle from '../Common/Titles/PageTitle/pageTitle';
import Paragraph from '../Common/Paragraph/paragraph';
import SearchForm from '../SearchForm/searchForm';
import Picture from '../Common/Picture/picture';

export default function Search() {

    return (
        <section className={styles.searchPanel}>
            <div className={styles.wrapHeading}>
                <PageTitle titleContent={titleContent.searchPage[0]} size={'sizeRest'}/>
                <Paragraph state={'adaptive'}>
                    Задайте параметры поиска.<br/>
                    Чем больше заполните, тем точнее поиск
                </Paragraph>
                <div className={styles.imgFile}>
                    <Picture
                        src={imagePaths.searchPage[1].src}
                        alt={imagePaths.searchPage[1].alt}
                    />
                </div>
                <div className={styles.imgFolders}>
                    <Picture
                        src={imagePaths.searchPage[2].src}
                        alt={imagePaths.searchPage[2].alt}
                    />
                </div>
            </div>
            <div className={styles.functionalityBlock}>
                <SearchForm fields={searchFormFields}/>
                <div className={styles.imageContainer}>
                    <Picture
                        src={imagePaths.searchPage[0].src}
                        alt={imagePaths.searchPage[0].alt}
                    />
                </div>
            </div>
        </section>
    );
}