import { Category, IMetadata, ICategory } from '../../models';

import { ICategoryRepository } from '../../repositories';

import { IMetadataService } from '../../services/metadata';

import { ICategoryService } from './IService';

export default class CategoryService implements ICategoryService {
    private metaService: IMetadataService;
    private repository: ICategoryRepository;

    constructor(metaService: IMetadataService, categoryRepository: ICategoryRepository) {
        this.metaService = metaService;
        this.repository = categoryRepository;
    }

    async findOneCategoryById(id: number): Promise<ICategory> {
        return await this.repository.findOneByOrFail({ id });
    }

    async findAllCategoryByName(name?: string): Promise<ICategory[]> {
        return await this.repository.findBy({ name });
    }

    async createCategory(name: string): Promise<ICategory> {
        const meta: IMetadata = await this.metaService.generate();
        const category = new Category(name, meta);
        return this.repository.save(category);
    }
}