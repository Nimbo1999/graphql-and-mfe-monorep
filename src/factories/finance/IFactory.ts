import { type IFinance, type IMetadata, type ICategory } from '../../models/index.js';
import { type FinanceInput } from '../../services/index.js';

export interface IFinanceFactory {
    create(finance: FinanceInput, meta: IMetadata, category: ICategory): IFinance;
}
