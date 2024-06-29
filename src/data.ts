import {
    INavigationItems, ITextLine, IButtonName,
    IButtonNetworkName, ITitleContent, IImagePaths,
    IFormFields, ICardArgumentItem, ICardTariffItem,
    ISelectField, ICheckboxField,
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
    search: 'Поиск',
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
            src: 'images/svg/imgAuth.svg',
            alt: 'key',
        },
        {
            src: 'images/svg/lock.svg',
            alt: 'lock',
        },
    ],
    searchPage: [
        {
            src: 'images/svg/imgSearch.svg',
            alt: 'search',
        },
        {
            src: 'images/svg/file.svg',
            alt: 'file',
        },
        {
            src: 'images/svg/folders.svg',
            alt: 'folder',
        },
    ],
    resultsPage: [
        {
            src: 'images/svg/imgResults.svg',
            alt: 'results',
        },
    ],
};

// Поля формы авторизации
export const logUpFormFields: IFormFields[] = [
    { name: 'Логин или номер телефона', type: 'text', varName: 'login' },
    { name: 'Пароль', type: 'password', varName: 'password' },
];

// Поля для информационной панели по компаниям
export const infoPanelItems: ITextLine[] = [
    { name: 'usedCompanyCount', text: 'Использовано компаний' },
    { name: 'companyLimit', text: 'Лимит по компаниям' }
];

// Аргументирующие карточки
export const cardArgumentItems: ICardArgumentItem[] = [
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

// Карточки тарифов
export const cardTariffItems: ICardTariffItem[] = [
    { 
        tariffName: 'Beginner',
        description: 'Для небольшого исследования',
        imagePath: {
            src: 'images/svg/beginnerTariff.svg',
            alt: 'tariff icon'
        },
        badge: 'Текущий тариф',
        price: {
            currentAmount: 799,
            oldAmount: 1200,
            currencySymbol: '\u20bd',
            installment: 'или 150 \u20bd/мес. при рассрочке на 24 мес.'
        },
        characteristics: {
            initial: 'В тариф входит:',
            list: [ 'Безлимитная история запросов', 'Безопасная сделка', 'Поддержка 24/7' ]
        },
        buttonName: {
            active: 'Перейти в личный кабинет',
            notActive: 'Подробнее'
        }
    },
    { 
        tariffName: 'Pro',
        description: 'Для HR и фрилансеров',
        imagePath: {
            src: 'images/svg/proTariff.svg',
            alt: 'tariff icon'
        },
        badge: 'Текущий тариф',
        price: {
            currentAmount: 1299,
            oldAmount: 2600,
            currencySymbol: '\u20bd',
            installment: 'или 279 \u20bd/мес. при рассрочке на 24 мес.'
        },
        characteristics: {
            initial: 'В тариф входит:',
            list: [ 'Все пункты тарифа Beginner', 'Экспорт истори', 'Рекомендации по приоритетам' ]
        },
        buttonName: {
            active: 'Перейти в личный кабинет',
            notActive: 'Подробнее'
        }
    },
    { 
        tariffName: 'Business',
        description: 'Для корпоративных клиентов',
        imagePath: {
            src: 'images/svg/businessTariff.svg',
            alt: 'tariff icon'
        },
        badge: 'Текущий тариф',
        price: {
            currentAmount: 2379,
            oldAmount: 3700,
            currencySymbol: '\u20bd',
            installment: ''
        },
        characteristics: {
            initial: 'В тариф входит:',
            list: [ 'Все пункты тарифа Pro', 'Безлимитное количество запросов', 'Приоритетная поддержка' ]
        },
        buttonName: {
            active: 'Перейти в личный кабинет',
            notActive: 'Подробнее'
        }
    },
];

// Поля формы поиска
export const searchFormFields: IFormFields[] = [
    { name: 'ИНН компании *', type: 'text', varName: 'inn', placeholder: '10 цифр' },
    { name: 'Количество документов в выдаче *', type: 'number', varName: 'quantity', placeholder: 'От 1 до 1000' },
    { name: '', type: 'date', varName: 'startDate', placeholder: 'Дата начала' },
    { name: '', type: 'date', varName: 'endDate', placeholder: 'Дата конца' },
];

export const searchFormSelectField: ISelectField =
    { name: 'Тональность', varName: 'tone', value: [ 'Любая', 'Позитивная', 'Негативная' ] };

export const searchFormCheckboxField: ICheckboxField[] = [
    { name: 'Признак максимальной полноты', varName: 'maxFullness' },
    { name: 'Упоминания в бизнес-контексте', varName: 'inBusinessNews' },
    { name: 'Главная роль в публикации', varName: 'mainRole' },
    { name: 'Публикации только с риск-факторами', varName: 'riskFactors' },
    { name: 'Включать технические новости рынков', varName: 'techNews' },
    { name: 'Включать анонсы и календари', varName: 'annoucements' },
    { name: 'Включать сводки новостей', varName: 'digests' },
];