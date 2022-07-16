import { ICategory } from 'models/ICategory';
import { CategoryService } from '../../../services/category';
import { MetadataService } from '../../../services/metadata';
import MetadataFactory from '../../../factories/metadata/MetadataFactory';
import metadataRepository from '../../../repositories/MetadataRepository';
import categoryRepository from '../../../repositories/CategoryRepository';

export interface Payload {
    categoryName?: string;
}

export const findCategory = async (_: any, { categoryName }: Payload): Promise<ICategory[]> => {
    const metadataService = new MetadataService(new MetadataFactory(), metadataRepository);
    const categoryService = new CategoryService(metadataService, categoryRepository);
    try {
        return await categoryService.findCategory(categoryName);
    } catch (err) {
        console.error(err);
        throw err;
    }
};
