import Metadata from '../models/Entites/Metadata';
import DataSource from '../services/datasource';

const metadataRepository = DataSource.getRepository(Metadata);

export default metadataRepository;