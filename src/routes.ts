export const BASE_URL = 'gateway.scan-interfax.ru';
export const API_HOST = `${BASE_URL}/api/v1`;

interface IRoutes {
    home: () => string;
    rates: () => string;
    faq: () => string;
    authorization: () => string;
    search: () => string;
    results: () => string;
    urlLogin: () => string;
}

const routes: IRoutes = {
    home: () => '/',
    rates: () => '/rates',
    faq: () => '/faq',
    authorization: () => '/authorization',
    search: () => '/search',
    results: () => '/results',
    urlLogin: () => `${API_HOST}/account/login`,
};

export default routes;