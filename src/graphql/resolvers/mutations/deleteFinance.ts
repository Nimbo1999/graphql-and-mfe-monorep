import { IFinance } from '../../../models';
import { CategoryService, MetadataService, FinanceService } from '../../../services';
import { MetadataRepository, CategoryRepositoy, FinanceRepository } from '../../../repositories';
import { FinanceFactory, MetadataFactory } from '../../../factories';

export interface Payload {
    id: number;
}

export const deleteFinance = async (_: any, { id }: Payload): Promise<IFinance> => {
    const metadataService = new MetadataService(new MetadataFactory(), MetadataRepository);
    const categoryService = new CategoryService(metadataService, CategoryRepositoy);
    const financeService = new FinanceService(
        metadataService,
        FinanceRepository,
        new FinanceFactory(),
        categoryService
    );

    try {
        return await financeService.deleteFinance(id);
    } catch (err) {
        console.error(err);
        throw err;
    }
};
