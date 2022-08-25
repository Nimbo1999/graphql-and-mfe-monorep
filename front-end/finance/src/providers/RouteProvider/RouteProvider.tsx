import { Component, For } from 'solid-js';
import { Routes, Route } from '@solidjs/router';

import { routes } from './routes';

/**
 * @description This component must be Wrapped By A `<Router />` component from `@solidjs/router` library.
 */
const RouteProvider: Component = () => {
    return (
        <Routes>
            <For each={routes}>
                {(route) => <Route {...route} />}
            </For>
        </Routes>
    );
}

export default RouteProvider;
