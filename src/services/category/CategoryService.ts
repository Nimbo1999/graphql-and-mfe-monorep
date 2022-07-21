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

    async update(id: number, name: string): Promise<ICategory> {
        const category = await this.repository.findOneByOrFail({ id });
        category.name = name;
        category.meta = await this.metaService.update(category.meta);
        return await this.repository.save(category);
    }

    async deleteById(id: number): Promise<ICategory> {
        const category = await this.repository.findOneByOrFail({ id });
        return await this.repository.remove(category);
    }

    async findOneCategoryById(id: number): Promise<ICategory> {
        return await this.repository.findOneByOrFail({ id });
    }

    async findAllCategoryByName(name?: string): Promise<ICategory[]> {
        return await this.repository.findBy({ name });
    }

    async createCategory(name: string): Promise<ICategory> {
        const meta: IMetadata = this.metaService.generate();
        const category = new Category(name, meta);
        return this.repository.save(category);
    }
}
