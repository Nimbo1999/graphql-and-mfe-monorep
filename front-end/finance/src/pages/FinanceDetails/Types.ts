import { Category, Finance } from '@/models';

export type CategoryOption = Pick<Category, 'id' | 'name'>;

export type CategoryListToComboBoxResponse = {
    findAllCategoryByName: CategoryOption[];
};

export type FinanceOption = Omit<Finance, 'meta'>;

export type FinancePostResponse = {
    addFinance: Pick<FinanceOption, 'id'>;
};

export type FindFinanceByIdResponse = {
    findFinanceById: FinanceOption;
};
