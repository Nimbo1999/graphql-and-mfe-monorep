import { Component, createEffect, createSignal, Show } from 'solid-js';
import { AiOutlineArrowLeft } from 'solid-icons/ai';
import { useLocation, useMatch } from '@solidjs/router';
import { useGoBack } from '@/hooks';

import { Button } from '@/components';

import styles from './Header.module.scss';
import { AppRoutes } from '@/constants/AppRoutes';

const Header: Component = () => {
    const [isBackButtonEnabled, setIsBackButtonEnabled] = createSignal(false);

    const goBack = useGoBack();
    const location = useLocation();
    const match = useMatch(() => location.pathname);

    createEffect(() => {
        const path = match()?.path.replace('/finance', '/').replace('//', '/');
        console.log({ path });
        if (path) {
            const splittedPath = path.split('/');
            const lastRouteContext = splittedPath[splittedPath.length - 1];
            console.log({ splittedPath, AppRoutes, context: '/'.concat(lastRouteContext) });
            if ('/'.concat(lastRouteContext) !== AppRoutes.FINANCE_LIST) {
                console.log('Set to True');
                return setIsBackButtonEnabled(true);
            }
            console.log('Set to false');
            setIsBackButtonEnabled(false);
        }
    });

    return (
        <header class={styles.container}>
            <Show when={isBackButtonEnabled()}>
                <Button class={styles['go-back-button']} onClick={goBack}>
                    <AiOutlineArrowLeft size="1.125rem" color="#7e7e7e" />
                </Button>
            </Show>

            <h3 class={styles.headerTitle}>List of Finances</h3>
        </header>
    );
};

export default Header;
