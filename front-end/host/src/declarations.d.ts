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
        location: import('history').Location;
        onLocationChange: (update: import('history').Update) => void;
    };
    type MountResult = {
        onParentNavigate: (update: import('history').Update) => void;
    };

    type MountFunction = (element: HTMLElement, options: MountOptions) => MountResult;
    const mountApp: MountFunction;
    export { mountApp };
}
