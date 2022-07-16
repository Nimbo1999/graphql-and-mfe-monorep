import { Repository } from 'typeorm';
import { Category } from '../models';
import DataSource from '../services/datasource';

export type ICategoryRepository = Repository<Category>;

const categoryRepository: ICategoryRepository = DataSource.getRepository(Category);

export default categoryRepository;
