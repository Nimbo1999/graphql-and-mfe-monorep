import ReactDom from 'react-dom/client';
import { ConfigProvider } from 'antd';
import ptBR from 'antd/es/locale/pt_BR';
import { History } from 'history';

import { GraphqlProvider, RouterProvider } from '@providers';

type AppWrapperProps = {
    history: History;
};

const AppWrapper: React.FC<AppWrapperProps> = ({ history }) => {
    return (
        <GraphqlProvider>
            <ConfigProvider locale={ptBR}>
                <RouterProvider history={history} />
            </ConfigProvider>
        </GraphqlProvider>
    );
};

export const mountApp = (element: HTMLElement, history: History) => {
    return ReactDom.createRoot(element).render(<AppWrapper history={history} />);
};
