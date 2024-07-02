export const BASE_URL = 'https://gateway.scan-interfax.ru';
export const API_HOST = `${BASE_URL}/api/v1`;

interface IRoutes {
    home: () => string;
    rates: () => string;
    faq: () => string;
    authorization: () => string;
    search: () => string;
    results: () => string;
    urlLogin: () => string;
    urlUserInfo: () => string;
    urlSummary: () => string;
    urlDocuments: () => string;
    urlContent: () => string;
}

const routes: IRoutes = {
    home: () => '/',
    rates: () => '/rates',
    faq: () => '/faq',
    authorization: () => '/authorization',
    search: () => '/search',
    results: () => '/results',
    urlLogin: () => `${API_HOST}/account/login`,
    urlUserInfo: () => `${API_HOST}/account/info`,
    urlSummary: () => `${API_HOST}/objectsearch/histograms`,
    urlDocuments: () => `${API_HOST}/objectsearch`,
    urlContent: () => `${API_HOST}/documents`,
};

export default routes;