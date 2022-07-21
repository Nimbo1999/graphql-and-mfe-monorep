import { ICategory } from '../../../models/index.js';
import { CategoryService, MetadataService } from '../../../services/index.js';
import { MetadataFactory } from '../../../factories/index.js';
import { MetadataRepository, CategoryRepositoy } from '../../../repositories/index.js';

type CategoryInput = { name: string };

export interface Payload {
    category: CategoryInput;
}

export const addCategory = async (_: any, { category }: Payload): Promise<ICategory> => {
    const metadataService = new MetadataService(new MetadataFactory(), MetadataRepository);
    const categoryService = new CategoryService(metadataService, CategoryRepositoy);
    try {
        return await categoryService.createCategory(category.name);
    } catch (err) {
        console.error(err);
        throw err;
    }
};
