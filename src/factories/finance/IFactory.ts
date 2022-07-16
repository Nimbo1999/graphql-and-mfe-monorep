import { type IFinance, type IMetadata, type ICategory } from '../../models';
import { type FinanceInput } from '../../services/finance';

export interface IFinanceFactory {
    create(finance: FinanceInput, meta: IMetadata, category: ICategory): IFinance;
}
