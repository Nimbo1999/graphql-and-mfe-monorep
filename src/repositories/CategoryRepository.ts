import Category from '../models/Entites/Category';
import DataSource from '../services/datasource';

const categoryRepository = DataSource.getRepository(Category);

export default categoryRepository;