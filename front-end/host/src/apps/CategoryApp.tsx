import { useRef, useEffect } from 'react';
import { mountApp } from 'category/CategoryApp';

type CategoryAppProps = {
    history: History;
};

const CategoryApp: React.FC<CategoryAppProps> = ({ history }) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const initializeComponent = () => {
            if (containerRef.current) mountApp(containerRef.current, history);
        };

        initializeComponent();
    }, [containerRef.current]);

    return <div ref={containerRef} />;
};

export default CategoryApp;
