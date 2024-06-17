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
    restorePassword: 'Восстановить пароль';
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
    homePage: IImagePath[];
    authorizationPage: IImagePath[];
    searchPage: IImagePath[];
    resultsPage: IImagePath[];
}

export interface IlogUpFormFields {
    name: string;
    type: string;
    varName: string;
}