import { useRef } from 'react';
import { History } from 'history';

type FinanceAppProps = {
    history: History;
};

const FinanceApp: React.FC<FinanceAppProps> = ({ history }) => {
    const containerRef = useRef<HTMLDivElement>(null);

    // useEffect(() => {
    //     const initializeComponent = () => {
    //         if (containerRef.current) mountApp(containerRef.current, history);
    //     };

    //     initializeComponent();
    // }, [containerRef.current]);

    return <div ref={containerRef} />;
};

export default FinanceApp;
