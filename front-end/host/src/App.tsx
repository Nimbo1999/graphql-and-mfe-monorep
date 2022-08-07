import ReactDOM from 'react-dom/client';
import { Layout } from 'antd';

import { getBaseElementOrFail } from '@utils/Dom.utils';
import { SideBar } from '@components';

import './index.scss';
import styles from './App.module.scss';

const App = () => (
    <Layout className={styles.container}>
        <SideBar />
    </Layout>
);

const root = ReactDOM.createRoot(getBaseElementOrFail('root'));
root.render(<App />);
