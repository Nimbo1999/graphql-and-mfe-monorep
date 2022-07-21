import { type IMetadata } from '../../models/index.js';

export interface IMetadataFactory {
    create(): IMetadata;
}
