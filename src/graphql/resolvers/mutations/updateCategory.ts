import { MetadataRepository, CategoryRepositoy } from '../../../repositories';
import { MetadataService, CategoryService } from '../../../services';
import { MetadataFactory } from '../../../factories';

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
