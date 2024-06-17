import { INavigationItems } from './types/dataTypes';
import { ITextLine } from './types/dataTypes';
import { IButtonName } from './types/dataTypes';
import { IButtonNetworkName } from './types/dataTypes';
import { ITitleContent } from './types/dataTypes';
import { IImagePaths } from './types/dataTypes';

// Данные навигации
export const navigationItems: INavigationItems[] = [
    { filedName: 'Главная', pathName: '' },
    { filedName: 'Тарифы', pathName: 'rates' },
    { filedName: 'FAQ', pathName: 'faq' },
];

// Контакты и авторское право
export const contactItems: ITextLine[] = [
    { name: 'address', text: 'г. Москва, Цветной б-р, 40' },
    { name: 'telephone', text: '+7 495 771 21 11' },
    { name: 'email', text: 'info@skan.ru' },
];

export const legalInformationItems: ITextLine[] = [
    { name: 'copyrights', text: 'Copyright. 2022' },
];

// Наименования кнопок
export const buttonName: IButtonName = {
    signUpButton: 'Зарегистрироваться',
    logUpButton: 'Войти'
};

export const buttonNetworkName: IButtonNetworkName[] = [
    { networkName: 'Google', pathToIcon: '' },
    { networkName: 'Facebook', pathToIcon: '' },
    { networkName: 'Yandex', pathToIcon: '' },
];

// Заголовки страниц
export const titleContent: ITitleContent = { 
    homePage: [
        'Сервис по поиску публикаций о компании по его ИНН',
        'Почему именно мы',
        'Наши тарифы',
    ],
    authorizationPage: [
        'Для оформления подписки на тариф, необходимо авторизоваться.',
    ],
    searchPage: [
        'Найдите необходимые данные в пару кликов.'
    ],
    resultsPage: [
        'Ищем. Скоро будут результаты',
        'Общая сводка',
        'Список документов',
    ],
};

// Пути до иллюстраций
export const imagePaths: IImagePaths = { 
    homePage: [

    ],
    authorizationPage: [
        {
            src: 'images/svg/auth.svg',
            alt: 'image key',
        },
    ],
    searchPage: [

    ],
    resultsPage: [

    ],
};