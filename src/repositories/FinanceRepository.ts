import { Finance } from '../models';
import DataSource from '../services/datasource';

const financeRepository = DataSource.getRepository(Finance);

export default financeRepository;
