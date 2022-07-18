import { FinanceService, CategoryService, MetadataService } from '../../../services';
import { FinanceFactory, MetadataFactory } from '../../../factories';
import { FinanceRepository, CategoryRepositoy, MetadataRepository } from '../../../repositories';
import { IFinance } from 'models';

export interface Payload {
    id: number;
}

export const findFinanceById = async (_: any, { id }: Payload): Promise<IFinance | null> => {
    const metadataService = new MetadataService(new MetadataFactory(), MetadataRepository);
    const categoryService = new CategoryService(metadataService, CategoryRepositoy);
    const financeService = new FinanceService(
        metadataService,
        FinanceRepository,
        new FinanceFactory(),
        categoryService
    );

    try {
        return await financeService.findFinanceById(id);
    } catch (err) {
        console.error(err);
        throw err;
    }
};
