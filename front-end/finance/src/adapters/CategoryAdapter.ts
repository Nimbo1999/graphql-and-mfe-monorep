import { OptionProps } from '@/components/Select/Types';
import { CategoryOption } from '@/pages/FinanceDetails/Types';

export default class CategoryAdapter {
    public static toComboBox(categories?: CategoryOption[]): OptionProps[] {
        if (!categories) return [];
        return categories.map(CategoryAdapter.convertCategoryToComboBoxOption);
    }

    private static convertCategoryToComboBoxOption(category: CategoryOption): OptionProps {
        return {
            value: category.id.toString(),
            children: category.name
        };
    }
}
