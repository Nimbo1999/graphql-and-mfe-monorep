import { useGraphqlClient } from "@/providers"
import { FinanceGraphqlService, MethodOptions } from "@/services";

type FinanceServiceMethod = keyof FinanceGraphqlService;

export const useFinanceQuery = (serviceMethod: FinanceServiceMethod, options?: MethodOptions) => {
    const graphqlClient = useGraphqlClient();
    const financeService = new FinanceGraphqlService();
    return graphqlClient(financeService[serviceMethod](options));
}