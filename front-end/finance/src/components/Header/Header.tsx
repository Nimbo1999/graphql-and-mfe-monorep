import { Component } from 'solid-js';
import { FiArrowLeft } from 'solid-icons/fi'

import { Button } from '@/components';

import styles from './Header.module.scss';

const Header: Component = () => {
    return (
        <header class={styles.container}>
            <Button class={styles['go-back-button']}>
                <FiArrowLeft size="1.5rem" color="#7e7e7e" />
            </Button>

            <h3 class={styles.headerTitle}>List of Finances</h3>
        </header>
    );
}

export default Header;
