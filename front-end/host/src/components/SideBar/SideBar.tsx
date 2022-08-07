import { Layout, Typography, Button } from 'antd';
import MenuOutlined from '@ant-design/icons/MenuOutlined';

import styles from './SideBar.module.scss';
import { useMemo, useState } from 'react';
import Menus from './Menus/Menus';

const SideBar: React.FC = () => {
    const [expanded, setExpanded] = useState<boolean>(false);

    const classNames = useMemo((): string => {
        const classes = [styles.container];
        if (expanded) classes.push(styles.expanded);
        return classes.join(' ');
    }, [expanded]);

    const onClickExpandButton = () => {
        if (expanded) return setExpanded(false);
        setExpanded(true);
    };

    return (
        <Layout.Sider className={classNames}>
            <header className={styles.sideBarHeader}>
                <Button type="link" htmlType="button" onClick={onClickExpandButton}>
                    <MenuOutlined className={styles.icon} />
                </Button>

                <Typography.Title level={2} className={styles.sideBarTitle}>
                    Finance
                </Typography.Title>
            </header>

            <Menus collapse={expanded} />
        </Layout.Sider>
    );
};

export default SideBar;
