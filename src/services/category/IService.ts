import { ICategory } from '../../models';

export interface ICategoryService {
    createCategory(name: string): Promise<ICategory>;
    findCategory(name?: string): Promise<ICategory[]>;
}
