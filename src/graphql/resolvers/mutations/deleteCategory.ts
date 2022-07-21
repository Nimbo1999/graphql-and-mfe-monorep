import { ICategory } from '../../../models';
import { CategoryService, MetadataService } from '../../../services';
import { MetadataRepository, CategoryRepositoy } from '../../../repositories';
import { MetadataFactory } from '../../../factories';

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
