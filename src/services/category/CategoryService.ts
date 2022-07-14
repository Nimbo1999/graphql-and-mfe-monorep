import { Repository } from 'typeorm';
import Category from '../../models/Entites/Category';
import { ICategory } from '../../models/ICategory';

import DataSource from '../../services/datasource';
import { IMetadataService } from '../../services/metadata';

import { ICategoryService } from './IService';

export default class CategoryService implements ICategoryService {

    private metaService: IMetadataService;
    private repository: Repository<Category>;

    constructor(metaService: IMetadataService, categoryRepository: Repository<Category>) {
        this.metaService = metaService;
        this.repository = categoryRepository;
    }

    async createCategory(name: string): Promise<ICategory> {
        const meta = await this.metaService.generate();
        const category = new Category(name, meta);
        return this.repository.save(category);
    }

}