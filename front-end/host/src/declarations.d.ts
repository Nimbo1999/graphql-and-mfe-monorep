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
    type MountFunction = (element: HTMLElement, history: History) => JSX.Element;
    const mountApp: MountFunction;
    export { mountApp };
}
