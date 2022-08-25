import { RouteProps } from '@solidjs/router';

import { AppRoutes } from '@/constants/AppRoutes';

import { FinanceList } from '@/pages';

export const routes: RouteProps[] = [
    {
        path: AppRoutes.FINANCE_LIST,
        component: FinanceList
    }
]