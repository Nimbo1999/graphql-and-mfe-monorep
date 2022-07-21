import { Repository } from 'typeorm';
import { Finance } from '../models/index.js';
import DataSource from '../services/datasource.js';

export type IFinanceRepository = Repository<Finance>;

const financeRepository: IFinanceRepository = DataSource.getRepository(Finance);

export default financeRepository;
