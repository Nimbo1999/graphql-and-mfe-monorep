import { Category, Finance } from '@/models';

export type UpdateDataKeys = 'id' | 'amount' | 'description' | 'category';

export type CategoryOption = Pick<Category, 'id' | 'name'>;

export type CategoryListToComboBoxResponse = {
    findAllCategoryByName: CategoryOption[];
};

export type FinanceOption = Omit<Finance, 'meta'>;

export type FinancePostResponse = {
    addFinance: Pick<FinanceOption, 'id'>;
};

export type FinancePutResponse = {
    addFinance: Pick<FinanceOption, 'id'>;
};

export type FinanceDeleteResponse = {
    deleteFinance: Pick<FinanceOption, 'id'> | null;
};

export type FindFinanceByIdResponse = {
    findFinanceById: FinanceOption;
};
