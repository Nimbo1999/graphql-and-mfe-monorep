import ReactDom from 'react-dom/client';
import { useEffect } from 'react';
import { ConfigProvider } from 'antd';
import ptBR from 'antd/es/locale/pt_BR';

import { GraphqlProvider, RouterProvider } from '@providers';

type AppWrapperProps = {
    basename: string;
};

const AppWrapper: React.FC<AppWrapperProps> = ({ basename }) => {
    return (
        <GraphqlProvider>
            <ConfigProvider locale={ptBR}>
                <RouterProvider basename={basename} />
            </ConfigProvider>
        </GraphqlProvider>
    );
};

type MountOptions = {
    basename: string;
};

export const mountApp = (element: HTMLElement, { basename }: MountOptions): void => {
    ReactDom.createRoot(element).render(<AppWrapper basename={basename} />);
};
