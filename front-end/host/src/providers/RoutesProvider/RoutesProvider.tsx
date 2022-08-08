import { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { SideBar } from '@components';
import { CategoryApp, FinanceApp } from '@apps';
import AppRoutes from '@constants/AppRoutes';

const RoutesProvider: React.FC = () => {
    return (
        <BrowserRouter>
            <SideBar />

            <Suspense fallback={<>Loading...</>}>
                <Routes>
                    <Route path={AppRoutes.CategoryPage + '/*'} element={<CategoryApp />} />

                    <Route path={AppRoutes.HomePage} element={<FinanceApp />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
};

export default RoutesProvider;
