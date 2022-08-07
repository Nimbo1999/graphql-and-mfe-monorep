import { Layout } from 'antd';
import { unstable_HistoryRouter as HistoryRouter, Routes, Route } from 'react-router-dom';
import { History, createBrowserHistory } from 'history';

import { CategoriesPage, NotFoundPage, CategoryPage } from '@pages';
import CategoryRoutes from '@constants/CategoryRoutes';

import styles from './RouterProvider.module.scss';

export type RouterProviderProps = {
    history?: History;
};

const RouterProvider: React.FC<RouterProviderProps> = ({ history = createBrowserHistory() }) => {
    return (
        <HistoryRouter history={history}>
            <Layout className={styles.container}>
                <Routes>
                    <Route path={CategoryRoutes.HOME}>
                        <Route index element={<CategoriesPage />} />
                        <Route path={CategoryRoutes.CREATE_CATEGORY} element={<CategoryPage />} />
                        <Route path=":id" element={<CategoryPage />} />
                        <Route path={CategoryRoutes.NOT_FOUND} element={<NotFoundPage />} />
                    </Route>
                </Routes>
            </Layout>
        </HistoryRouter>
    );
};

export default RouterProvider;
