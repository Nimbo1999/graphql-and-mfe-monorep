import { Layout, Typography } from 'antd';

import styles from './Header.module.scss';

const Header: React.FC = () => {
    return (
        <Layout.Header>
            <Typography.Title level={2} className={styles.logotitle}>Graphql {'&'} MFE</Typography.Title>
        </Layout.Header>
    )
}

export default Header;
