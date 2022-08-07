import { type Category } from '@models/category';
import { type Metadata } from '@models/Metadata';

type CategoryRecord = Omit<Category, 'meta'> & Omit<Metadata, 'id'>;

export default class CategoryAdapter {
    static toCategoriesList(data: Category[]): CategoryRecord[] {
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
