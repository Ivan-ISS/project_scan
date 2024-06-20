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
}