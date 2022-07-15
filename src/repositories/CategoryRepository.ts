import Category from '../models/entities/Category';
import DataSource from '../services/datasource';

const categoryRepository = DataSource.getRepository(Category);

export default categoryRepository;