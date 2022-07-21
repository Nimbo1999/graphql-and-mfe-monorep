import { ICategory } from '../../models/index.js';

export interface ICategoryService {
    createCategory(name: string): Promise<ICategory>;
    findAllCategoryByName(name?: string): Promise<ICategory[]>;
    findOneCategoryById(id: number): Promise<ICategory>;
    deleteById(id: number): Promise<ICategory>;
    update(id: number, name: string): Promise<ICategory>;
}
