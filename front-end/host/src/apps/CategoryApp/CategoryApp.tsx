import { useRef, useEffect, useCallback, useContext } from 'react';
import { UNSAFE_NavigationContext as NavigationContext } from 'react-router-dom';
import { Update, BrowserHistory } from 'history';

import { mountApp } from 'category/CategoryApp';

import styles from './CategoryApp.module.scss';

const CategoryApp: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    const history = useContext(NavigationContext).navigator as BrowserHistory;

    const onLocationChange = useCallback((update: Update) => {
        if (history.location.pathname === update.location.pathname) return;
        console.log('Pathnames são diferentes');

        switch (update.action) {
            case 'POP':
                return history.back();
            case 'PUSH':
                return history.push(update.location.pathname);
            case 'REPLACE':
                return history.replace(update.location.pathname);
        }
    }, []);

    useEffect(() => {
        const initializeComponent = () => {
            console.log('Aqui!');
            if (containerRef.current) {
                console.log('Passou');
                const { onParentNavigate } = mountApp(containerRef.current, {
                    location: history.location,
                    onLocationChange
                });

                history.listen(onParentNavigate);
            }
        };

        initializeComponent();
    }, [containerRef.current, onLocationChange]);

    return <div className={styles.container} ref={containerRef} />;
};

export default CategoryApp;
