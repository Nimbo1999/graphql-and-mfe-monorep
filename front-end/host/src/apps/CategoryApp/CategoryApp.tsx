import { useRef, useEffect } from 'react';
import { History } from 'history';

import { mountApp } from 'category/CategoryApp';

import styles from './CategoryApp.module.scss';

type CategoryAppProps = {
    history: History;
    basename: string;
};

const CategoryApp: React.FC<CategoryAppProps> = ({ history, basename }) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const initializeComponent = () => {
            if (containerRef.current) mountApp(containerRef.current, { history, basename });
        };

        initializeComponent();
    }, [containerRef.current]);

    return <div className={styles.container} ref={containerRef} />;
};

export default CategoryApp;
