import { Repository } from 'typeorm';
import { Finance } from '../models';
import DataSource from '../services/datasource';

export type IFinanceRepository = Repository<Finance>;

const financeRepository: IFinanceRepository = DataSource.getRepository(Finance);

export default financeRepository;
