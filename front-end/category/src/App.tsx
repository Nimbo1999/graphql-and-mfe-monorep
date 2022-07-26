import ReactDOM from "react-dom/client";
import { ConfigProvider } from 'antd';
import ptBR from 'antd/lib/locale/pt_BR';

import { HomePage } from "@pages";
import "./index.css";

const App = () => (
  <ConfigProvider locale={ptBR}>
    <HomePage />
  </ConfigProvider>
);

function getBaseElementOrFail(elementId: string): Element {
    const element = document.getElementById(elementId);
    if (element === null) throw new Error(`Could not found the #${elementId} element!`);
    return element;
}

if (process.env.NODE_ENV) {
    const root = ReactDOM.createRoot(getBaseElementOrFail('root'));
    root.render(<App />);
}
