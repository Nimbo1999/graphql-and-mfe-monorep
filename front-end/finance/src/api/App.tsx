import { render } from "solid-js/web";
import { Router } from '@solidjs/router';

import { RouteProvider } from '@/providers';
import { Header } from "@/components";
import { Component } from "solid-js";

type AppWrapperProps = {
    basename: string;
}

const AppWrapper: Component<AppWrapperProps> = (props) => {
    return (
        <Router base={props.basename}>
            <Header />
            <RouteProvider />
        </Router>
    );
}

type MountOptions = {
    basename: string;
}

export const mountApp = (element: HTMLElement, { basename = '/' }: MountOptions) => {
    render(() => <AppWrapper basename={basename} />, element);
}