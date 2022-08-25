export const AppRoutes = {
    FINANCE_LIST: '/',
    CREATE_FINANCE: '/create',
    PARAMETER (param: string) {
        return `/${window.encodeURI(param)}`;
    }
}