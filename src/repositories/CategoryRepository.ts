import { Repository } from 'typeorm';
import { Category } from '../models/index.js';
import DataSource from '../services/datasource.js';

export type ICategoryRepository = Repository<Category>;

const categoryRepository: ICategoryRepository = DataSource.getRepository(Category);

export default categoryRepository;
