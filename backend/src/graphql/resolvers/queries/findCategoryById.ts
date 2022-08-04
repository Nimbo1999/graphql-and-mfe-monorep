import { CategoryService, MetadataService } from '../../../services/index.js';
import { MetadataFactory } from '../../../factories/index.js';
import {
    CategoryRepositoy,
    MetadataRepository
} from '../../../repositories/index.js';
import { ICategory } from '../../../models/index.js';

export interface Payload {
    id: number;
}

export const findCategoryById = async (_: any, { id }: Payload): Promise<ICategory | null> => {
    const metadataService = new MetadataService(new MetadataFactory(), MetadataRepository);
    const categoryService = new CategoryService(metadataService, CategoryRepositoy);

    try {
        return await categoryService.findOneCategoryById(id);
    } catch (err) {
        console.error(err);
        throw err;
    }
};
