import { Component, JSXElement } from "solid-js";

import styles from './Button.module.scss';

type ButtonProps = {
    children: JSXElement;
    class?: string;
    onClick?: (event?: MouseEvent) => void;
    type?: 'submit' | 'reset' | 'button';
    btnType?: 'default' | 'primary';
    noPaddings?: boolean;
}

const Button: Component<ButtonProps> = ({ children, class: className, onClick, type = 'button', btnType = 'default', noPaddings = false }) => {
    return (
        <button
            classList={{
                [styles['base-button-style']]: true,
                [className!]: !!className,
                [styles['btn-primary']]: btnType === 'primary',
                [styles['no-paddings']]: !!noPaddings
            }}
            onClick={onClick}
            type={type}
        >
            {children}
        </button>
    )
}

export default Button;
