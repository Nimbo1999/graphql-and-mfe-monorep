import { ICategory } from 'models/ICategory';
import { CategoryService } from '../../services/category';
import { MetadataService } from '../../services/metadata';
import MetadataFactory from '../../factories/metadata/MetadataFactory';
import metadataRepository from '../../repositories/MetadataRepository';
import categoryRepository from '../../repositories/CategoryRepository';

type CategoryInput = { name: string };

export interface Payload {
    category: CategoryInput;
}

export const addCategory = async (_: any, { category }: Payload): Promise<ICategory> => {
    const metadataService = new MetadataService(new MetadataFactory(), metadataRepository);
    const categoryService = new CategoryService(metadataService, categoryRepository);
    try {
        return await categoryService.createCategory(category.name);
    } catch(err) {
        console.error(err);
        throw err;
    }
}