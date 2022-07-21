import { ICategory } from '../../../models/index.js';
import { CategoryService, MetadataService } from '../../../services/index.js';
import { MetadataFactory } from '../../../factories/index.js';
import { MetadataRepository, CategoryRepositoy } from '../../../repositories/index.js';

export interface Payload {
    categoryName?: string;
}

export const findAllCategoryByName = async (
    _: any,
    { categoryName }: Payload
): Promise<ICategory[]> => {
    const metadataService = new MetadataService(new MetadataFactory(), MetadataRepository);
    const categoryService = new CategoryService(metadataService, CategoryRepositoy);
    try {
        return await categoryService.findAllCategoryByName(categoryName);
    } catch (err) {
        console.error(err);
        throw err;
    }
};
