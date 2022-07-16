import Finance from '../models/entities/Finance';
import DataSource from '../services/datasource';

const financeRepository = DataSource.getRepository(Finance);

export default financeRepository;
