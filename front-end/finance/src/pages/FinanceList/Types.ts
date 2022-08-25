import { Finance, Category } from '@/models';

type CategoryReponse = Omit<Category, 'id' | 'meta'>;

export interface FinanceReponse extends Omit<Finance, 'meta' | 'category'> {
    category: CategoryReponse;
}

export type FinancesQueryResponse = {
    findAllFinance: FinanceReponse[];
}

export type FinanceReponseKeys = keyof FinanceReponse;