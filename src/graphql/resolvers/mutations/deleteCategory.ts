import { ICategory } from '../../../models/index.js';
import { CategoryService, MetadataService } from '../../../services/index.js';
import { MetadataRepository, CategoryRepositoy } from '../../../repositories/index.js';
import { MetadataFactory } from '../../../factories/index.js';

export interface Payload {
    id: number;
}

export const deleteCategory = async (_: any, { id }: Payload): Promise<ICategory> => {
    const metadataService = new MetadataService(new MetadataFactory(), MetadataRepository);
    const categoryService = new CategoryService(metadataService, CategoryRepositoy);

    try {
        return await categoryService.deleteById(id);
    } catch (err) {
        console.error(err);
        throw err;
    }
};
