import { ICategory } from "models/ICategory";

export interface ICategoryService {
    createCategory(name: string): Promise<ICategory>;
}
