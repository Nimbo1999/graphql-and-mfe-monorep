import { Menu, type MenuProps } from 'antd';
import AppstoreOutlined from '@ant-design/icons/AppstoreOutlined';
import DollarCircleOutlined from '@ant-design/icons/DollarCircleOutlined';
import { useState } from 'react';
import AppRoutes from '@constants/AppRoutes';
import { useNavigate } from 'react-router-dom';

type MenuItem = MenuProps['items'];

type MenuEvent = {
    key: string;
    keyPath: string[];
};

const Menus: React.FC = () => {
    const [selectedMenus, setSelectedMenus] = useState<string[]>([AppRoutes.HomePage]);
    const navigate = useNavigate();

    const onClick = (event: MenuEvent) => {
        setSelectedMenus(event.keyPath);
        navigate(event.key);
    };

    const items: MenuItem = [
        {
            label: 'Finance',
            icon: <DollarCircleOutlined />,
            key: AppRoutes.HomePage,
            onClick
        },
        {
            label: 'Category',
            icon: <AppstoreOutlined />,
            key: AppRoutes.CategoryPage,
            onClick
        }
    ];

    return <Menu selectedKeys={selectedMenus} items={items} theme="dark" mode="inline" />;
};

export default Menus;
