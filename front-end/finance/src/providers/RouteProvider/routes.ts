import { RouteProps } from '@solidjs/router';

import { AppRoutes } from '@/constants/AppRoutes';

import { FinanceDetails, FinanceList } from '@/pages';

export const routes: RouteProps[] = [
    {
        path: AppRoutes.FINANCE_LIST,
        component: FinanceList
    },
    {
        path: AppRoutes.CREATE_FINANCE,
        component: FinanceDetails
    }
];
