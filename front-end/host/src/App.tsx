import ReactDOM from 'react-dom/client';
import { Layout } from 'antd';

import { getBaseElementOrFail } from '@utils/Dom.utils';
import { SideBar } from '@components';
import { CategoryApp } from '@apps';

import './index.scss';
import styles from './App.module.scss';

const App = () => (
    <Layout className={styles.container}>
        <SideBar />
        {/* <CategoryApp /> */}
    </Layout>
);

const root = ReactDOM.createRoot(getBaseElementOrFail('root'));
root.render(<App />);
