import { IFinance } from '../../../models';
import {
    CategoryService,
    MetadataService,
    FinanceService,
    type FinanceInput
} from '../../../services';
import { MetadataRepository, CategoryRepositoy, FinanceRepository } from '../../../repositories';
import { FinanceFactory, MetadataFactory } from '../../../factories';

export interface Payload {
    finance: FinanceInput;
}

export const addFinance = async (_: any, { finance }: Payload): Promise<IFinance> => {
    const metadataService = new MetadataService(new MetadataFactory(), MetadataRepository);
    const categoryService = new CategoryService(metadataService, CategoryRepositoy);
    const financeService = new FinanceService(
        metadataService,
        FinanceRepository,
        new FinanceFactory(),
        categoryService
    );

    try {
        return await financeService.addFinance(finance);
    } catch (err) {
        console.error(err);
        throw err;
    }
};
