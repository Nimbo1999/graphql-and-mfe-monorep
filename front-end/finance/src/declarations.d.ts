declare module '*.scss';
declare module '*.sass';
declare module '*.svg';

declare module '*.module.scss' {
    const content: Record<string, string>;
    export default content;
}

declare module '*.module.sass' {
    const content: Record<string, string>;
    export default content;
}
