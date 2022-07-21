import { MetadataRepository, CategoryRepositoy } from '../../../repositories/index.js';
import { MetadataService, CategoryService } from '../../../services/index.js';
import { MetadataFactory } from '../../../factories/index.js';

export interface Payload {
    id: number;
    name: string;
}

export const updateCategory = async (_: any, { id, name }: Payload) => {
    const metadataService = new MetadataService(new MetadataFactory(), MetadataRepository);
    const categoryService = new CategoryService(metadataService, CategoryRepositoy);

    try {
        return await categoryService.update(id, name);
    } catch (err) {
        console.error(err);
        throw err;
    }
};
