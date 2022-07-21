import {
    MetadataRepository,
    CategoryRepositoy,
    FinanceRepository
} from '../../../repositories/index.js';
import {
    FinanceInput,
    MetadataService,
    CategoryService,
    FinanceService
} from '../../../services/index.js';
import { FinanceFactory, MetadataFactory } from '../../../factories/index.js';

export interface Payload {
    id: number;
    finance: FinanceInput;
}

export const updateFinance = async (_: any, { id, finance }: Payload) => {
    const metadataService = new MetadataService(new MetadataFactory(), MetadataRepository);
    const categoryService = new CategoryService(metadataService, CategoryRepositoy);
    const financeService = new FinanceService(
        metadataService,
        FinanceRepository,
        new FinanceFactory(),
        categoryService
    );

    try {
        return await financeService.updateFinance(id, finance);
    } catch (err) {
        console.error(err);
        throw err;
    }
};
