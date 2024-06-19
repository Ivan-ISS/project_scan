export interface IAuth {
    login: string;
    password: string;
}

export interface IAuthResponse {
    accessToken: string;
    expire: string;
}