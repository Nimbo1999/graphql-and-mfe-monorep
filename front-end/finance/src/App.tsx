import { render, Suspense } from "solid-js/web";
import { Router } from '@solidjs/router';
import { Header } from '@/components';

import { RouteProvider, GraphqlProvider } from "@/providers";
import "./index.scss";

const App = () => (
    <GraphqlProvider>
        <Router>
            <Header />
            <Suspense fallback={<>Loading...</>}>
                <RouteProvider />
            </Suspense>
        </Router>
    </GraphqlProvider>
);

const getTargetElement = () => {
    const element = document.getElementById("root");
    if (null === element) throw new Error('Root element not found!');
    return element;
}

render(App, getTargetElement());
