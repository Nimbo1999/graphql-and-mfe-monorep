import { FinanceInput } from '../../services/finance/index.js';
import { Finance, ICategory, IMetadata } from '../../models/index.js';

import { type IFinanceFactory } from './IFactory.js';

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
