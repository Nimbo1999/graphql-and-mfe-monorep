import { Layout } from 'antd';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { CategoriesPage, NotFoundPage, CategoryPage } from '@pages';
import CategoryRoutes from '@constants/CategoryRoutes';

import styles from './RouterProvider.module.scss';

const RouterProvider: React.FC = () => {
    return (
        <BrowserRouter>
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
        </BrowserRouter>
    );
};

export default RouterProvider;
