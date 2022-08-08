import { useRef } from 'react';

const FinanceApp: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    // useEffect(() => {
    //     const initializeComponent = () => {
    //         if (containerRef.current) mountApp(containerRef.current, history);
    //     };

    //     initializeComponent();
    // }, [containerRef.current]);

    return <div ref={containerRef}>Finance APP</div>;
};

export default FinanceApp;
