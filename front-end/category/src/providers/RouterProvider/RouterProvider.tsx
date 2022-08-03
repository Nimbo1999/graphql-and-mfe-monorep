import { Layout } from 'antd';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Sidebar } from '@components';
import { HomePage, NotFound, CategoryPage } from '@pages';

import styles from './RouterProvider.module.scss';

const RouterProvider: React.FC = () => {
    return (
        <BrowserRouter>
            <Layout className={styles.container}>
                <Sidebar />
                <Routes>
                    <Route path="/">
                        <Route index element={<HomePage />} />
                        <Route path=":categoryId" element={<CategoryPage />} />
                        <Route path="/*" element={<NotFound />} />
                    </Route>
                </Routes>
            </Layout>
        </BrowserRouter>
    );
};

export default RouterProvider;