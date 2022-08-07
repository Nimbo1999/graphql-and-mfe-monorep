import { Menu, type MenuProps } from 'antd';
import AppstoreOutlined from '@ant-design/icons/AppstoreOutlined';
import DollarCircleOutlined from '@ant-design/icons/DollarCircleOutlined';

type MenuItem = MenuProps['items'];

type MenusProps = {
    collapse: boolean;
};

const Menus: React.FC<MenusProps> = ({ collapse }) => {
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

    return (
        <Menu
            selectedKeys={['finance']}
            items={items}
            theme="dark"
            inlineCollapsed={collapse}
            mode="inline"
            aria-expanded={collapse}
        />
    );
};

export default Menus;
