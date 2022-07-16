import { Repository } from 'typeorm';
import Category from '../../models/entities/Category';
import { IMetadata } from '../../models/IMetadata';
import { ICategory } from '../../models/ICategory';

import { IMetadataService } from '../../services/metadata';

import { ICategoryService } from './IService';

export default class CategoryService implements ICategoryService {
    private metaService: IMetadataService;
    private repository: Repository<Category>;

    constructor(metaService: IMetadataService, categoryRepository: Repository<Category>) {
        this.metaService = metaService;
        this.repository = categoryRepository;
    }

    async findCategory(name?: string): Promise<ICategory[]> {
        return await this.repository.findBy({ name });
    }

    async createCategory(name: string): Promise<ICategory> {
        const meta: IMetadata = await this.metaService.generate();
        const category = new Category(name, meta);
        return this.repository.save(category);
    }
}
