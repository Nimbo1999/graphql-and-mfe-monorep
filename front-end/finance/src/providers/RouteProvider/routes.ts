import { RouteProps } from '@solidjs/router';

import { AppRoutes } from '@/constants/AppRoutes';

import { FinanceDetails, FinanceList } from '@/pages';

export const routes: RouteProps[] = [
    {
        path: AppRoutes.CREATE_FINANCE,
        component: FinanceDetails
    },
    {
        path: AppRoutes.PARAMETER(':id'),
        component: FinanceDetails
    },
    {
        path: AppRoutes.FINANCE_LIST,
        component: FinanceList
    }
];
