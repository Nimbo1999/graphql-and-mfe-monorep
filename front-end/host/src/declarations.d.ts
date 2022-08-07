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
    type MountOptions = {
        history: import('history').History;
        basename?: string;
    };
    type MountFunction = (element: HTMLElement, options: MountOptions) => JSX.Element;
    const mountApp: MountFunction;
    export { mountApp };
}
