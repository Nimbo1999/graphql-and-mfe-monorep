import { IFinance } from '../../models';

import { IFinanceRepository } from '../../repositories';
import { IFinanceFactory } from '../../factories';

import { IMetadataService } from '../metadata';

import { IFinanceService } from '.';
import { FinanceInput } from './IService';
import { ICategoryService } from 'services/category';

export default class FinanceService implements IFinanceService {
    private metaService: IMetadataService;
    private categoryService: ICategoryService;
    private repository: IFinanceRepository;
    private factory: IFinanceFactory;

    constructor(
        metaService: IMetadataService,
        financeRepository: IFinanceRepository,
        financeFactory: IFinanceFactory,
        categoryService: ICategoryService
    ) {
        this.metaService = metaService;
        this.repository = financeRepository;
        this.factory = financeFactory;
        this.categoryService = categoryService;
    }

    async addFinance(financeInput: FinanceInput): Promise<IFinance> {
        const meta = await this.metaService.generate();
        const category = await this.categoryService.findOneCategoryById(financeInput.category);
        const finance = this.factory.create(financeInput, meta, category);
        return await this.repository.save(finance);
    }
}
