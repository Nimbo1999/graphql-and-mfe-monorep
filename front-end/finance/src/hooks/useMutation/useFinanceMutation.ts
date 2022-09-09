import { useGraphqlClient } from '@/providers';
import { FinanceGraphqlService, FinanceService, MethodOptions } from '@/services';

type FinanceGraphqlServiceMethod = keyof FinanceGraphqlService;

export const useFinanceMutation = <T>(
    serviceMethod: FinanceGraphqlServiceMethod,
    options?: MethodOptions
) => {
    const graphqlClient = useGraphqlClient();
    const financeService: FinanceService = new FinanceGraphqlService();
    return graphqlClient<T>(financeService[serviceMethod](), options);
};
