import { Repository } from 'typeorm';
import { Metadata } from '../models/index.js';
import DataSource from '../services/datasource.js';

export type IMetadataRepository = Repository<Metadata>;

const metadataRepository = DataSource.getRepository(Metadata);

export default metadataRepository;
