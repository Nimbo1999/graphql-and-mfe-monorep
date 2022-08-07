import ReactDom from 'react-dom/client';
import { ConfigProvider } from 'antd';
import ptBR from 'antd/es/locale/pt_BR';
import { History } from 'history';

import { GraphqlProvider, RouterProvider } from '@providers';

type AppWrapperProps = {
    history: History;
    basename?: string;
};

const AppWrapper: React.FC<AppWrapperProps> = ({ history, basename }) => {
    return (
        <GraphqlProvider>
            <ConfigProvider locale={ptBR}>
                <RouterProvider history={history} basename={basename} />
            </ConfigProvider>
        </GraphqlProvider>
    );
};

type MountOptions = AppWrapperProps;

export const mountApp = (element: HTMLElement, options: MountOptions) => {
    return ReactDom.createRoot(element).render(
        <AppWrapper history={options.history} basename={options.basename} />
    );
};
