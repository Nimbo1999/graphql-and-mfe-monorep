import ReactDom from 'react-dom/client';
import { useEffect } from 'react';
import { ConfigProvider } from 'antd';
import ptBR from 'antd/es/locale/pt_BR';
import { History, createMemoryHistory, Location, Update } from 'history';

import { GraphqlProvider, RouterProvider } from '@providers';

type AppWrapperProps = {
    history: History;
    onLocationChange: (update: Update) => void;
    basename: string;
};

const AppWrapper: React.FC<AppWrapperProps> = ({ history, onLocationChange, basename }) => {
    useEffect(() => {
        const unSubscribe = history.listen(onLocationChange);
        return () => {
            unSubscribe();
        };
    }, [onLocationChange]);

    return (
        <GraphqlProvider>
            <ConfigProvider locale={ptBR}>
                <RouterProvider history={history} basename={basename} />
            </ConfigProvider>
        </GraphqlProvider>
    );
};

type MountOptions = Pick<AppWrapperProps, 'onLocationChange'> & { location: Location };

type MountResult = {
    onParentNavigate: (update: Update) => void;
};

export const mountApp = (
    element: HTMLElement,
    { location, onLocationChange }: MountOptions
): MountResult => {
    const history = createMemoryHistory({ initialEntries: [location.pathname] });

    const onParentNavigate = ({ action, location }: Update) => {
        if (history.location.pathname !== location.pathname) {
            console.log({ action, location, onParentNavigate: 'onParentNavigate' });
            history.push(location.pathname);
        }
    };

    ReactDom.createRoot(element).render(
        <AppWrapper
            history={history}
            onLocationChange={onLocationChange}
            basename={location.pathname}
        />
    );

    return { onParentNavigate };
};
