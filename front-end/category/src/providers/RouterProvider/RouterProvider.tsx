import { Layout } from 'antd';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { History, createBrowserHistory } from 'history';

import { CategoriesPage, NotFoundPage, CategoryPage } from '@pages';
import CategoryRoutes from '@constants/CategoryRoutes';

import styles from './RouterProvider.module.scss';

export type RouterProviderProps = {
    history?: History;
    basename?: string;
};

const RouterProvider: React.FC<RouterProviderProps> = ({
    history = createBrowserHistory(),
    basename
}) => {
    console.log({ history, basename });

    return (
        <Layout className={styles.container}>
            <BrowserRouter basename={basename}>
                <Routes>
                    <Route path={CategoryRoutes.HOME}>
                        <Route index element={<CategoriesPage />} />

                        <Route path={CategoryRoutes.CREATE_CATEGORY} element={<CategoryPage />} />

                        <Route path={CategoryRoutes.PARAMETER(':id')} element={<CategoryPage />} />

                        <Route path={CategoryRoutes.NOT_FOUND} element={<NotFoundPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </Layout>
    );
};

export default RouterProvider;
