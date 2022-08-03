export interface ICategoryRoutes {
    HOME: string;
    CREATE_CATEGORY: string;
    PARAMETER: (param: string) => string;
    NOT_FOUND: string;
}

const CategoryRoutes: ICategoryRoutes = {
    HOME: '/',
    CREATE_CATEGORY: '/create',
    PARAMETER: (param: string) => `/${param}`,
    NOT_FOUND: '*'
};

export default CategoryRoutes;
