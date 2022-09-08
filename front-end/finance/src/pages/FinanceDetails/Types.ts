import { Category, Finance } from '@/models';

export type CategoryOption = Pick<Category, 'id' | 'name'>;

export type CategoryListToComboBoxResponse = {
    findAllCategoryByName: CategoryOption[];
};

type FinanceOption = Omit<Finance, 'meta'>;

export type FinancePostResponse = {
    addFinance: FinanceOption;
};
