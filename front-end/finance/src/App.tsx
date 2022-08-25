import { render } from "solid-js/web";
import { Router } from '@solidjs/router';
import { Header } from '@/components';

import { RouteProvider } from "@/providers";
import "./index.scss";

const App = () => (
    <Router>
        <Header />
        <RouteProvider />
    </Router>
);

const getTargetElement = () => {
    const element = document.getElementById("root");
    if (null === element) throw new Error('Root element not found!');
    return element;
}

render(App, getTargetElement());
