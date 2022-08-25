declare module '*.scss';
declare module '*.sass';

declare module '*.module.scss' {
    const content: Record<string, string>;
    export default content;
}

declare module '*.module.sass' {
    const content: Record<string, string>;
    export default content;
}

declare module 'category/CategoryApp' {
    type MountOptions = { basename: string };

    type MountFunction = (element: HTMLElement, options: MountOptions) => void;
    const mountApp: MountFunction;
    export { mountApp };
}

declare module 'finance/FinanceApp' {
    type MountOptions = { basename: string };

    type MountFunction = (element: HTMLElement, options: MountOptions) => void;
    const mountApp: MountFunction;
    export { mountApp };
}
