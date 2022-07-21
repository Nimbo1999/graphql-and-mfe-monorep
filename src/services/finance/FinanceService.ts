import { IFinance } from '../../models/index.js';

import { IFinanceRepository } from '../../repositories/index.js';
import { IFinanceFactory } from '../../factories/index.js';

import { IMetadataService } from '../metadata/index.js';

import { IFinanceService } from './index.js';
import { FinanceInput } from './IService.js';
import { ICategoryService } from '../../services/category/index.js';

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

    async deleteFinance(id: number): Promise<IFinance> {
        const finance = await this.repository.findOneByOrFail({ id });
        return await this.repository.remove(finance);
    }

    async updateFinance(id: number, finace: FinanceInput): Promise<IFinance> {
        const targetFinace = await this.repository.findOneByOrFail({ id });
        const newFinanceCategory = await this.categoryService.findOneCategoryById(finace.category);
        const updatedMetadata = await this.metaService.update(targetFinace.meta);

        targetFinace.amount = finace.amount;
        targetFinace.description = Boolean(finace.description)
            ? finace.description
            : targetFinace.description;
        targetFinace.category = newFinanceCategory;
        targetFinace.meta = updatedMetadata;

        return this.repository.save(targetFinace);
    }

    async findFinanceById(id: number): Promise<IFinance | null> {
        return await this.repository.findOneBy({ id });
    }

    async findAllFinance(): Promise<IFinance[]> {
        return await this.repository.find();
    }

    async addFinance(financeInput: FinanceInput): Promise<IFinance> {
        const meta = this.metaService.generate();
        const category = await this.categoryService.findOneCategoryById(financeInput.category);
        const finance = this.factory.create(financeInput, meta, category);
        return await this.repository.save(finance);
    }
}
