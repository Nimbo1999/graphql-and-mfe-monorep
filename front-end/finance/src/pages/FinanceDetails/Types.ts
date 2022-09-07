import { Category } from '@/models';

export type CategoryOption = Pick<Category, 'id' | 'name'>;

export type CategoryListToComboBoxResponse = {
    findAllCategoryByName: CategoryOption[];
};
