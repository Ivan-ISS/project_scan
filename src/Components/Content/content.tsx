import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/home';
import Rates from '../Pages/rates';
import Faq from '../Pages/faq';
import Authorization from '../Pages/authorization';
import Search from '../Pages/search';
import Results from '../Pages/results';
import routes from '../../routes';

export interface ContentProps {
    tokenAccess: string;
}

export default function Content({ tokenAccess }: ContentProps) {

    return (
        <Routes>
            <Route path={ routes.home() } element={<Home/>}></Route>
            <Route path={ routes.rates() } element={<Rates/>}></Route>
            <Route path={ routes.faq() } element={<Faq/>}></Route>

            <Route path={ routes.authorization() } element={<Authorization/>}></Route>
            <Route path={ routes.search() } element={ tokenAccess ? <Search/> : <Home/> }></Route>
            <Route path={ routes.results() } element={ tokenAccess ? <Results/> : <Home/> }></Route>
        </Routes>
    );
}