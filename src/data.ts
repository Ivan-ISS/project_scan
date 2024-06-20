import {
    INavigationItems, ITextLine, IButtonName,
    IButtonNetworkName, ITitleContent, IImagePaths,
    IFormFields,
} from './types/dataTypes';

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
    logUpButton: 'Войти',
    LogOutButton: 'Выйти',
    restorePassword: 'Восстановить пароль',
};

export const buttonNetworkNames: IButtonNetworkName[] = [
    { networkName: 'Google', pathToIcon: 'images/svg/googleIcon.svg' },
    { networkName: 'Facebook', pathToIcon: 'images/svg/facebookIcon.svg' },
    { networkName: 'Yandex', pathToIcon: 'images/svg/yandexIcon.svg' },
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
    header: [
        {
            src: 'images/svg/placeholderAvatar.svg',
            alt: 'avatar placeholder',
        },
    ],
    homePage: [

    ],
    authorizationPage: [
        {
            src: 'images/svg/auth.svg',
            alt: 'image key',
        },
        {
            src: 'images/svg/lock.svg',
            alt: 'image lock',
        },
    ],
    searchPage: [

    ],
    resultsPage: [

    ],
};

// Поля формы авторизации
export const logUpFormFields: IFormFields[] = [
    { name: 'Логин или номер телефона', type: 'text', varName: 'login' },
    { name: 'Пароль', type: 'password', varName: 'password' },
];

export const placholderUserName = 'Арнольд';

// Поля для информационной панели по компаниям
export const infoPanelItems: ITextLine[] = [
    { name: 'usedCompanyCount', text: 'Использовано компаний' },
    { name: 'companyLimit', text: 'Лимит по компаниям' }
];