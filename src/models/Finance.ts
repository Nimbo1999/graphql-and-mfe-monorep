import { type Category } from './Category';
import { type Metadata } from './metadata';

export interface Finance {
    id: string;
    meta: Metadata;
    amount: number;
    description: string;
    category: Category;
}