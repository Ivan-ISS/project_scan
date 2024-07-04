export interface INavigationItems {
    filedName: string;
    pathName: string;
}

export interface ITextLine {
    name: string;
    text: string;
}

export interface IButtonName {
    signUpButton: 'Зарегистрироваться';
    logUpButton: 'Войти';
    LogOutButton: 'Выйти';
    restorePassword: 'Восстановить пароль';
    requestData: 'Запросить данные';
    search: 'Поиск';
    result: 'Читать в источнике';
    lazyLoad: 'Показать больше';
}

export interface IButtonNetworkName {
    networkName: string;
    pathToIcon: string;
}

export interface ITitleContent {
    homePage: string[];
    authorizationPage: string[];
    searchPage: string[];
    resultsPage: string[];
}

export interface IImagePath {
    src: string;
    alt: string;
}

export interface IImagePaths {
    header: IImagePath[];
    homePage: IImagePath[];
    authorizationPage: IImagePath[];
    searchPage: IImagePath[];
    resultsPage: IImagePath[];
}

export interface IFormFields {
    name: string;
    type: string;
    varName: string;
    placeholder?: string;
}

export interface ISelectField {
    name: string;
    varName: string;
    value: string[];
}

export interface ICheckboxField {
    name: string;
    varName: string;
}

export interface ICardArgumentItem {
    path: string;
    content: string;
}

export interface ICardTariffItem {
    tariffName : string;
    description: string;
    imagePath: IImagePath;
    badge: string;
    price: {
        currentAmount: number;
        oldAmount: number;
        currencySymbol: string;
        installment: string;
    };
    characteristics: {
        initial: string;
        list: string[];
    };
    buttonName: {
        active: string;
        notActive: string;
    };
}