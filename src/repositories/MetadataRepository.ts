import { Metadata } from '../models';
import DataSource from '../services/datasource';

const metadataRepository = DataSource.getRepository(Metadata);

export default metadataRepository;
