import Metadata from '../models/entities/Metadata';
import DataSource from '../services/datasource';

const metadataRepository = DataSource.getRepository(Metadata);

export default metadataRepository;