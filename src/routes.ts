interface IRoutes {
    home: () => string;
    rates: () => string;
    faq: () => string;
    authorization: () => string;
    search: () => string;
    results: () => string;
}

const routes: IRoutes = {
    home: () => '/',
    rates: () => '/rates',
    faq: () => '/faq',
    authorization: () => '/authorization',
    search: () => '/search',
    results: () => '/results',
};

export default routes;