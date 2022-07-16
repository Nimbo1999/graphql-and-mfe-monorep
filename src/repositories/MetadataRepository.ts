import { Repository } from 'typeorm';
import { Metadata } from '../models';
import DataSource from '../services/datasource';

export type IMetadataRepository = Repository<Metadata>;

const metadataRepository = DataSource.getRepository(Metadata);

export default metadataRepository;
