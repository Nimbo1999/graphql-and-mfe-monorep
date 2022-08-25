import { Component, JSXElement } from "solid-js";

import styles from './Button.module.scss';

type ButtonProps = {
    children: JSXElement;
    class?: string;
}

const Button: Component<ButtonProps> = ({ children, class: className }) => {
    return (
        <button classList={{ [styles['base-button-style']]: true, [className!]: !!className }}>
            {children}
        </button>
    )
}

export default Button;
