import { FinanceInput } from '../../services/finance';
import { Finance, ICategory, IMetadata } from '../../models';

import { type IFinanceFactory } from './IFactory';

export default class FinanceFactory implements IFinanceFactory {
    create(finance: FinanceInput, meta: IMetadata, category: ICategory): Finance {
        const generatedFinance = new Finance();
        generatedFinance.meta = meta;
        generatedFinance.amount = finance.amount;
        generatedFinance.category = category;
        generatedFinance.description = finance.description;
        return generatedFinance;
    }
}
