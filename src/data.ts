import {
    INavigationItems, ITextLine, IButtonName,
    IButtonNetworkName, ITitleContent, IImagePaths,
    IFormFields, ICardItem,
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
    requestData: 'Запросить данные',
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
        {
            src: 'images/svg/imgFunction.svg',
            alt: 'title illustration',
        },
        {
            src: 'images/svg/imgArguments.svg',
            alt: 'title illustration',
        },
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

// Аргументирующие карточки
export const cardItems: ICardItem[] = [
    { path: 'images/svg/cardIconThird.svg', content: 'Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству' },
    { path: 'images/svg/cardIconFirst.svg', content: 'Высокая и оперативная скорость обработки заявки' },
    { path: 'images/svg/cardIconSecond.svg', content: 'Огромная комплексная база данных, обеспечивающая объективный ответ на запрос' },
    { path: 'images/svg/cardIconThird.svg', content: 'Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству' },
    { path: 'images/svg/cardIconFirst.svg', content: 'Высокая и оперативная скорость обработки заявки' },
    { path: 'images/svg/cardIconSecond.svg', content: 'Огромная комплексная база данных, обеспечивающая объективный ответ на запрос' },
    /* { path: 'Card 4', content: 'Some content for card 4.' },
    { path: 'Card 5', content: 'Some content for card 5.' },
    { path: 'Card 6', content: 'Some content for card 6.' },
    { path: 'Card 7', content: 'Some content for card 7.' },
    { path: 'Card 8', content: 'Some content for card 8.' },
    { path: 'Card 9', content: 'Some content for card 9.' },
    { path: 'Card 10', content: 'Some content for card 10.' }, */
];