import { useRef } from 'react';
import { unstable_HistoryRouter as HistoryRouter, Routes, Route } from 'react-router-dom';
import { createBrowserHistory, BrowserHistory } from 'history';

import { SideBar } from '@components';
import { CategoryApp, FinanceApp } from '@apps';
import AppRoutes from '@constants/AppRoutes';

const RoutesProvider: React.FC = () => {
    const historyRef = useRef<BrowserHistory>(createBrowserHistory());

    return (
        <HistoryRouter history={historyRef.current} basename="/">
            <SideBar />

            <Routes>
                <Route
                    path={AppRoutes.HomePage}
                    element={<FinanceApp history={historyRef.current} />}
                />

                <Route
                    path={AppRoutes.CategoryPage}
                    element={
                        <CategoryApp
                            history={historyRef.current}
                            basename={AppRoutes.CategoryPage}
                        />
                    }
                />
            </Routes>
        </HistoryRouter>
    );
};

export default RoutesProvider;
