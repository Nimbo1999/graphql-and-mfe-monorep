import ReactDOM from 'react-dom/client';
import { Layout } from 'antd';

import { getBaseElementOrFail } from '@utils/Dom.utils';
import { RoutesProvider } from '@providers';

import './index.scss';
import styles from './App.module.scss';

const App = () => (
    <Layout className={styles.container}>
        <RoutesProvider />
    </Layout>
);

const root = ReactDOM.createRoot(getBaseElementOrFail('root'));
root.render(<App />);
