import { useGraphqlClient } from '@/providers';
import { CategoryGraphqlService, MethodOptions } from '@/services';

type CategoryServiceMethod = keyof CategoryGraphqlService;

export const useCategoryQuery = <T>(
    serviceMethod: CategoryServiceMethod,
    options?: MethodOptions
) => {
    const graphqlClient = useGraphqlClient();
    const categoryService = new CategoryGraphqlService();
    return graphqlClient<T>(categoryService[serviceMethod](), options);
};
