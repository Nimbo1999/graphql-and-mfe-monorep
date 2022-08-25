import { render } from "solid-js/web";
import { Router } from '@solidjs/router';

import { GraphqlProvider, RouteProvider } from '@/providers';
import { Header } from "@/components";
import { Component, Suspense } from "solid-js";
import './App.scss';

type AppWrapperProps = {
    basename: string;
}

const AppWrapper: Component<AppWrapperProps> = (props) => {
    return (
        <GraphqlProvider>
            <Router base={props.basename}>
                <Header />
                <Suspense fallback={<>Loading...</>}>
                    <RouteProvider />
                </Suspense>
            </Router>
        </GraphqlProvider>
    );
}

type MountOptions = {
    basename: string;
}

export const mountApp = (element: HTMLElement, { basename = '/' }: MountOptions) => {
    render(() => <AppWrapper basename={basename} />, element);
}