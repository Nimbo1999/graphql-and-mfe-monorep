import { Layout, Typography } from 'antd';

import styles from './Sidebar.module.scss';

const Header: React.FC = () => {
    return (
        <Layout.Sider className={styles.sidebar}>
            <div className={styles.titleWrapper}>
                <Typography.Title
                    level={2}
                    className={styles.title}
                >
                    Categories
                </Typography.Title>
            </div>
        </Layout.Sider>
    )
}

export default Header;
