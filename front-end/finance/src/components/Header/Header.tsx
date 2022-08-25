import { Component } from 'solid-js';
import { AiOutlineArrowLeft } from 'solid-icons/ai';

import { Button } from '@/components';

import styles from './Header.module.scss';

const Header: Component = () => {
    return (
        <header class={styles.container}>
            <Button class={styles['go-back-button']}>
                <AiOutlineArrowLeft size="1.125rem" color="#7e7e7e" />
            </Button>

            <h3 class={styles.headerTitle}>List of Finances</h3>
        </header>
    );
}

export default Header;
