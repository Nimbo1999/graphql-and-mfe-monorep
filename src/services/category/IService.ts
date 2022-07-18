import { ICategory } from '../../models';

export interface ICategoryService {
    createCategory(name: string): Promise<ICategory>;
    findAllCategoryByName(name?: string): Promise<ICategory[]>;
    findOneCategoryById(id: number): Promise<ICategory>;
}