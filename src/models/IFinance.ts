import { type ICategory } from './ICategory';
import { type IMetadata } from './IMetadata';

export interface IFinance {
    id: number;
    meta: IMetadata;
    amount: number;
    description?: string;
    category: ICategory;
}
