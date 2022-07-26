import { Layout, Typography } from 'antd';

import styles from './Sidebar.module.scss';

const Header: React.FC = () => {
    return (
        <Layout.Sider className={styles.sidebar}>
            <Typography.Title
                level={2}
                className={styles.title}
            >
                Graphql {'&'} MFE
            </Typography.Title>
        </Layout.Sider>
    )
}

export default Header;
