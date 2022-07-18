import { IFinance } from '../../../models';
import { CategoryService, MetadataService, FinanceService } from '../../../services';
import { MetadataFactory, FinanceFactory } from '../../../factories';
import { FinanceRepository, MetadataRepository, CategoryRepositoy } from '../../../repositories';

export const findAllFinance = async (): Promise<IFinance[]> => {
    const metadataService = new MetadataService(new MetadataFactory(), MetadataRepository);
    const categoryService = new CategoryService(metadataService, CategoryRepositoy);
    const financeService = new FinanceService(
        metadataService,
        FinanceRepository,
        new FinanceFactory(),
        categoryService
    );
    try {
        return await financeService.findAllFinance();
    } catch (err) {
        console.error(err);
        throw err;
    }
};
