import { Category } from '../models';
import DataSource from '../services/datasource';

const categoryRepository = DataSource.getRepository(Category);

export default categoryRepository;
