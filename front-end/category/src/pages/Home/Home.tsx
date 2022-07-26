import { Layout } from 'antd';
import { Sidebar } from '@components';

import styles from './Home.module.scss';

const HomePage: React.FC = () => {
    return (
        <Layout className={styles.container}>
            <Sidebar />
        </Layout>
    );
}

export default HomePage;
