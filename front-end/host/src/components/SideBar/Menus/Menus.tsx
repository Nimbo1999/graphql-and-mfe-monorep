import { Menu, type MenuProps } from 'antd';
import AppstoreOutlined from '@ant-design/icons/AppstoreOutlined';
import DollarCircleOutlined from '@ant-design/icons/DollarCircleOutlined';

type MenuItem = MenuProps['items'];

const Menus: React.FC = () => {
    const items: MenuItem = [
        {
            label: 'Finance',
            icon: <DollarCircleOutlined />,
            key: 'finance'
        },
        {
            label: 'Category',
            icon: <AppstoreOutlined />,
            key: 'category'
        }
    ];

    return <Menu selectedKeys={['finance']} items={items} theme="dark" mode="inline" />;
};

export default Menus;
