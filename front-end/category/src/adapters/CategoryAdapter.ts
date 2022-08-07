import { type Category } from '@models/category';
import { type Metadata } from '@models/Metadata';

export type CategoryRecord = Omit<Category, 'meta'> & Omit<Metadata, 'id'>;

export default class CategoryAdapter {
    static toCategoriesList(data?: Category[]): CategoryRecord[] {
        if (!data) return [];
        return data.map(CategoryAdapter.toCategoryRecord);
    }

    private static toCategoryRecord(value: Category): CategoryRecord {
        return {
            id: value.id,
            name: value.name,
            createdAt: value.meta.createdAt,
            lastModifiedAt: value.meta.lastModifiedAt
        };
    }
}
