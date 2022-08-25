import { useRef, useEffect } from 'react';
import { mountApp } from 'finance/FinanceApp';
import AppRoutes from '@constants/AppRoutes';

import styles from './FinanceApp.module.scss';

const FinanceApp: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const initializeComponent = () => {
            if (containerRef.current)
                mountApp(containerRef.current, {
                    basename: AppRoutes.HomePage
                });
        };

        initializeComponent();
    }, [containerRef.current]);

    return <div className={styles.container} ref={containerRef} />;
};

export default FinanceApp;
