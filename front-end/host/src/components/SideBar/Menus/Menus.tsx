import { Menu, type MenuProps } from 'antd';
import AppstoreOutlined from '@ant-design/icons/AppstoreOutlined';
import DollarCircleOutlined from '@ant-design/icons/DollarCircleOutlined';
import { useState } from 'react';
import AppRoutes from '@constants/AppRoutes';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

type MenuItem = MenuProps['items'];

type MenuEvent = {
    key: string;
    keyPath: string[];
};

const Menus: React.FC = () => {
    const location = useLocation();
    const [selectedMenus, setSelectedMenus] = useState<string[]>([location.pathname]);
    const navigate = useNavigate();

    const onClick = (event: MenuEvent) => navigate(event.key);

    useEffect(() => {
        const pathName = () => {
            const [, context] = location.pathname.split('/');
            setSelectedMenus([`/${context}`]);
        };
        pathName();
    }, [location]);

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
