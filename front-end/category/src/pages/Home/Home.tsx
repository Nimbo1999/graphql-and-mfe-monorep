import { Layout } from 'antd';
import { Sidebar } from '@components';

import HomeContent from './HomeContent/HomeContent';

import styles from './Home.module.scss';

const HomePage: React.FC = () => {
    return (
        <Layout className={styles.container}>
            <Sidebar />
            <HomeContent />
        </Layout>
    );
}

export default HomePage;
