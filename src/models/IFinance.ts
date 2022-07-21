import { type ICategory } from './ICategory.js';
import { type IMetadata } from './IMetadata.js';

export interface IFinance {
    id?: number;
    meta: IMetadata;
    amount: number;
    description?: string;
    category: ICategory;
}
