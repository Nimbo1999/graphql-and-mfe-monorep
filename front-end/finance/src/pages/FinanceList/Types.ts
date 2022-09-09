import { Finance, Category } from '@/models';

type CategoryReponse = Omit<Category, 'id' | 'meta'>;

export interface FinanceReponse extends Omit<Finance, 'category'> {
    category: CategoryReponse;
}

export type FinancesQueryResponse = {
    findAllFinance: FinanceReponse[];
};

export type FinanceReponseKeys = keyof FinanceReponse;
