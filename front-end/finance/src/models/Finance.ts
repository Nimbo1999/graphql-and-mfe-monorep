import type Category from './Category';
import type Metadata from './Metadata';

export default interface Finance {
    id?: number;
    meta: Metadata;
    amount: number;
    description?: string;
    category: Category;
}
