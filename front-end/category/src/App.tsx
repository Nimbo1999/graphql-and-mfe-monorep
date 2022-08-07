import ReactDOM from 'react-dom/client';
import { ConfigProvider } from 'antd';
import ptBR from 'antd/lib/locale/pt_BR';

import { RouterProvider } from '@providers';
import GraphqlProvider from './providers/GraphqlProvider/GraphqlProvider';

import './index.scss';

const App = () => (
    <GraphqlProvider>
        <ConfigProvider locale={ptBR}>
            <RouterProvider />
        </ConfigProvider>
    </GraphqlProvider>
);

function getBaseElementOrFail(elementId: string): Element {
    const element = document.getElementById(elementId);
    if (element === null) throw new Error(`Could not found the #${elementId} element!`);
    return element;
}

const root = ReactDOM.createRoot(getBaseElementOrFail('root'));
root.render(<App />);
